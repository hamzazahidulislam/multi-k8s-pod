<!-- @format -->

## Description

[K8S](https://kubernetes.io/) Production-Grade Container Orchestration.

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