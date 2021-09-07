pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                withKubeCredentials([credentialsId: 'kubernetes', serverUrl: 'https://192.168.49.2:8443']) {
                    sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
                }
            }
        }
    }
}