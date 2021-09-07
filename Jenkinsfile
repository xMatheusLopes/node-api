node {
    agent any
    stages {
        stage('Initialize') {
            def dockerHome = tool 'docker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('Build') {
            steps {
                sh 'docker build . -t xmatheuslopes/node-api:0.0.3'
                sh 'docker login -u xmatheuslopes -p Timaomhl1996*'
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