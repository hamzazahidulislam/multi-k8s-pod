docker build -t hamzazahid/multi-client:latest -t hamzazahid/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t hamzazahid/multi-server:latest -t hamzazahid/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t hamzazahid/multi-worker:latest -t hamzazahid/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push hamzazahid/multi-client:latest
docker push hamzazahid/multi-server:latest
docker push hamzazahid/multi-worker:latest

docker push hamzazahid/multi-client:$SHA
docker push hamzazahid/multi-server:$SHA
docker push hamzazahid/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=hamzazahid/multi-server:$SHA
kubectl set image deployments/client-deployment client=hamzazahid/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=hamzazahid/multi-worker:$SHA
