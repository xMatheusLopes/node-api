pipeline {
    agent any
    tools {
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' '18.09'
    }
    environment {
        DOCKER_CERT_PATH = credentials('docker-cred')
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build . -t xmatheuslopes/node-api:0.0.3'
                sh 'docker push xmatheuslopes/node-api:0.0.3'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl set image deployment/node-api node-api=xmatheuslopes/node-api:0.0.3'
            }
        }
    }
}