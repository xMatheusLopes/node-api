pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.2'
            }
        }
    }
}