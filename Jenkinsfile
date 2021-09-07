pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                withKubeConfig([credentialsId: 'kubernetes') {
                    sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
                    sh 'chmod u+x ./kubectl'  
                    sh './kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
                }
            }
        }
    }
}