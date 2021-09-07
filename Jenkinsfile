pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    docker.withRegistry('https://hub.docker.com/', 'docker-cred') {
                    docker.build('node-api').push('0.0.3')
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}