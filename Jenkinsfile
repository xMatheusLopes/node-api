pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "echo Timaomhl1996* | sudo -S docker build . -t xmatheuslopes/node-api:0.0.3"
                sh "echo Timaomhl1996* | sudo -S docker login -u xmatheuslopes -p Timaomhl1996*"
                sh "echo Timaomhl1996* | sudo -S docker push xmatheuslopes/node-api:0.0.3"
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}