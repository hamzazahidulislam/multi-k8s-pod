<!-- @format -->

# Multi K8S Pod

1.  You Have to know about Multi Docker Conatiner on this project?
2.  run deployment in local cluster
3.  How to run multiple docker containers?

## You Have to know about Multi Docker Conatiner on this project

if you want to understand about docker container in this project. you have to see first Multi Docker Container. or you can continue from here
[Multi-Docker-Conatiner](https://github.com/hamzazahidulislam/multi-docker)

## run deployment in local cluster
 - ### please make sure you have microk8s or minikube single node cluster setup
      - kubectl apply -f k8s
## Running Travis CLI in a Container

```bash
$ docker run -it -v ${pwd}:/app ruby:2.7 sh
```

## this command use in linux

```bash
$ docker run -it -v $(pwd):/app ruby:2.7 sh
```

## Install Travis by Gem

```bash
$ gem update --system
$ gem install travis
```

## Travis Login

```bash
$ travis
$ travis login
$ travis login --pro --github-token xxx-xxx-xxx
```

## Create Encrypt File in Travis-Ci

```bash
$ travis encrypt-file service-account.json -r hamzazahidulislam/multi-k8s-pod
```

## Creating a Secret on Google Cloud

```bash
$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=mypgpassword123
```

### Installing Helm

This is main document: [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/)

```bash
$ curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
$ chmod 700 get_helm.sh
$ ./get_helm.sh
```

## Assigning Tiller a Service Account

```bash
$ kubectl create serviceaccount --namespace kube-system tiller
$ kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
$ helm init --service-account tiller -upgrade
```

## Check certificate

```bash
$ kubectl get certificates
$ kubectl describe certificates
$ kubectl get secrets
```

## Live Sync Changes

```bash
$ skaffold dev
```

### Ingress-Nginx with Helm

This is main document: [https://kubernetes.github.io/ingress-nginx/deploy/#using-helm](https://kubernetes.github.io/ingress-nginx/deploy/#using-helm)

## Create Encrypt File

![1](https://user-images.githubusercontent.com/56122568/114265945-44340400-99fc-11eb-9378-b0502385a764.png)

.
