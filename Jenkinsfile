pipeline {
    agent any
    stages {
        stage('Build') {
            environment {
                dockerHome = tool 'docker'
            }
            steps {
                sh "chmod +x -R ${dockerHome}/bin"
                sh "${dockerHome}/bin build . -t xmatheuslopes/node-api:0.0.3"
                sh "${dockerHome}/bin login -u xmatheuslopes -p Timaomhl1996*"
                sh "${dockerHome}/bin push xmatheuslopes/node-api:0.0.3"
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}