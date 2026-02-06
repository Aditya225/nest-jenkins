pipeline {
    agent any
    
    stages{
        stage("install Dependencies"){
            steps{
                sh "npm install"
            }
        }
        stage("Build App"){
            steps{
              sh "npm run build"
            }
          
        }

        stage("Docker Build"){
            steps{
                sh "docker compose build"
            }
        }

        stage('Run Containers'){
            steps{
                sh "docker compose up -d"
            }
        }
   

}
}
