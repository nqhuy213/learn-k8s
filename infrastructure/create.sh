aws cloudformation create-stack \
--template-body file://`pwd`/cloudformation.yml \
--stack-name harvey-eks-stack \
--capabilities CAPABILITY_NAMED_IAM \
--timeout-in-minutes 40