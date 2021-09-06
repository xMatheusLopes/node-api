pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'sudo docker build . -t xmatheuslopes/node-api:0.0.3'
                sh 'sudo docker login -u xmatheuslopes -p Timaomhl1996*'
                sh 'sudo docker push xmatheuslopes/node-api:0.0.3'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}