pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "docker run hello-world"
                sh "docker build . -t xmatheuslopes/node-api:0.0.3"
                sh "docker login -u xmatheuslopes -p Timaomhl1996*"
                sh "docker push xmatheuslopes/node-api:0.0.3"
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}