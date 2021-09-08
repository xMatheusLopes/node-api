pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "docker build . -t xmatheuslopes/node-api:0.0.3"
                sh "docker login -u xmatheuslopes -p Timaomhl1996*"
                sh "docker push xmatheuslopes/node-api:0.0.3"
            }
        }
        stage('Deploy') {
            steps {
                withKubeConfig([credentialsId: 'Kubernetes', serverUrl: 'https://192.168.49.2:8443']) {
                    sh 'ls'
                    sh 'kubectl apply -f ./node-api-kube'
                    sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'       
                }
            }
        }
    }
}