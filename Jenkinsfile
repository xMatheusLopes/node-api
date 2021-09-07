pipeline {
    agent any
    stages {
        stage('Building image') {
            steps {
                script { 
                    dockerImage = docker.build node-api
                }
            }
        }
        stage('Deploy Image') {
            steps{
                script {
                    docker.withRegistry('', 'docker-cred') {
                        dockerImage.push("$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
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