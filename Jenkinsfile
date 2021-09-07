pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                withKubeConfig() {
                    sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
                }
            }
        }
    }
}