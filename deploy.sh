docker build -t hamzazahid/multi-client -f ./client/Dockerfile ./client
docker build -t hamzazahid/multi-server -f ./server/Dockerfile ./server
docker build -t hamzazahid/multi-worker -f ./worker/Dockerfile ./worker
docker push hamzazahid/multi-client
docker push hamzazahid/multi-server
docker push hamzazahid/multi-worker
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=hamzazahid/multi-server
