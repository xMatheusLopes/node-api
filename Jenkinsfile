pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build . -t xmatheuslopes/node-api:0.0.3'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}