# App

## Continuous Delivery Steps

1. Authenticate with the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
2. Install kubectl
3. Provision infrastructure with [CloudFormation](https://aws.amazon.com/cloudformation/). 
4. Point kubectl to the cluster.
5. Install ingress NGINX controller to the cluster.
6. Deploy the application using this command:

```
kubectl apply -f k8s
```