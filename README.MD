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
