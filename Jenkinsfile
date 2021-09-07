pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                withKubeConfig([credentialsId: 'kubernetes', variable: 'api_token']) {
                    sh './kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
                }
            }
        }
    }
}