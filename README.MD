<!-- @format -->

# Multi K8S Pod

1.  You Have to know about Multi Docker Conatiner on this project?
2.  run deployment in local cluster
3.  How to deploy k8s in GKE and Azure Cluster?
4.  Lets understand how to configure Travis CI pipeline for this project.

## You Have to know about Multi Docker Conatiner on this project

if you want to understand about docker container in this project. you have to see first Multi Docker Container. or you can continue from here
[Multi-Docker-Conatiner](https://github.com/hamzazahidulislam/multi-docker)

## run deployment in local cluster

- ### please make sure you have microk8s or minikube single node cluster setup
- ### you have to enable ingress addons in your cluster
         kubectl apply -f ./k8s-dev

## How to deploy k8s in GKE and Azure Cluster

### 1. GCP inside GKE

- first enable billing in your GCP Project
- create a GKE cluster
- open cloud shell
- install helm
- run the following command

```
gcloud config set project $PROJECT_ID

```

```
gcloud config set compute/zone  $ZONE

```

```
gcloud container clusters get-credentials $CLUSTER_NAME
```

```
git clone https://github.com/hamzazahidulislam/multi-k8s-pod && cd multi-k8s-pod
```

```
kubectl apply -f ./k8s-prod
```

### 2. Azure inside AKS

- link bank card in Azure dashboard
- create a AKS cluster
- open cloud shell
- install helm and setup ingress with helm
- run the following command

```
az account set --subscription $SUBSCRIPTION_ID

```

```
az aks get-credentials --resource-group $RESOURCE_GROUP_NAME --name $CLUSTER_NAME

```

```
git clone https://github.com/hamzazahidulislam/multi-k8s-pod && cd multi-k8s-pod
```

```
kubectl apply -f ./k8s-prod
```

### Installing Helm on Kubernetes

This is main document: [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/)

```bash
$ curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
$ chmod 700 get_helm.sh
$ ./get_helm.sh
```

### Ingress-Nginx with Helm

This is main document: [Ingress-Nginx-with-Helm](https://kubernetes.github.io/ingress-nginx/deploy/#using-helm)

## Lets understand how to configure Travis CI pipeline for this project

configure travis ci /cd what i do create github repository and link with travis ci. when we configure travis in github we have to remember we need to secure my cloud access json file need to me secured

- 1 Travis Login
- 2 add environment variable in Travis CI

#### **_pre requirement before travis login_**

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

## add environment variable in Travis CI

add docker **_DOCKER_USERNAME_** and **_DOCKER_PASSWORD_** for Travis CI build docker image and push on docker hub

## End of the Project

### and last please check my `travis.yml` file and see how the pipelines works

#### **_optional parts_**

## Creating a Secret on Kubernetes

```bash
$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=mypgpassword123
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

## Create Encrypt File

![1](https://user-images.githubusercontent.com/56122568/114265945-44340400-99fc-11eb-9378-b0502385a764.png)

## what is k8s init container

- init container is dependence container what is mean by that. for example you have a backend application need to connect database. backend application can't run berfore database it's neeed to database run first after backend application connected

- i want to show you practical example of how to init container work

create a postgres container and run it

        docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

and inspect the postgres container

        docker inspect some-postgres | grep IPAddress

second create a alpine container and run it

        docker run -it --network host --name my_alpine alpine

after i inside alpine container

        nc -zvw1 $some-postgres.IPAddress 5432 && exit 0

## Refernces

- Pipe, Grep and Sort Command in Linux

  - https://www.guru99.com/linux-pipe-grep.html

- Netcat Command in Linux
  - https://www.linuxfordevices.com/tutorials/netcat-command-in-linux#
