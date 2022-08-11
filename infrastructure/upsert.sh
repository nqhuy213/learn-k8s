#!/usr/bin/env bash

while getopts r:s: flag
do
  case "${flag}" in
      r) region=${OPTARG};;
      s) stackname=${OPTARG};;
  esac
done

echo "Checking if stack exists ...";

if ! aws cloudformation describe-stacks --region $region --stack-name $stackname ; then

  echo -e "\nStack does not exist, creating ..."
  aws cloudformation create-stack \
    --region $region \
    --template-body file://`pwd`/cloudformation.yml \
    --stack-name $stackname \
    --capabilities CAPABILITY_NAMED_IAM \
    --timeout-in-minutes 40

  echo "Waiting for stack to be created ..."
  aws cloudformation wait stack-create-complete \
    --region $region \
    --stack-name $stackname

else

  echo -e "\nStack exists, attempting update ..."

  set +e
  update_output=$( aws cloudformation update-stack \
    --region $region \
    --stack-name $stackname \
    --template-body file://`pwd`/cloudformation.yml \
    --capabilities CAPABILITY_NAMED_IAM \
    2>&1)
  status=$?
  set -e

  echo "$update_output"

  if [ $status -ne 0 ] ; then

    # Don't fail for no-op update
    if [[ $update_output == *"ValidationError"* && $update_output == *"No updates"* ]] ; then
      echo -e "\nFinished create/update - no updates to be performed"
      exit 0
    else
      exit $status
    fi

  fi

  echo "Waiting for stack update to complete ..."
  aws cloudformation wait stack-update-complete \
    --region $region \
    --stack-name $stackname \

fi

echo "Finished create/update successfully!"