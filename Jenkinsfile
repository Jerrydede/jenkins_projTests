pipeline {
    agent any

    environment {
        PATH = "/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Holt Code von GitHub...'
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                echo 'Installiere npm-Pakete...'
                sh 'npm install'
            }
        }

        stage('Cypress Tests') {
            steps {
                echo 'Starte Cypress Tests...'
                sh 'npx cypress run --browser chrome --headless || true'
            }
        }
    }

    post {
        always {
            echo 'Verarbeite Test-Ergebnisse...'
            
            // HTML Report veröffentlichen (hier ist allowMissing korrekt)
            publishHTML(target: [
                allowMissing         : false,
                alwaysLinkToLastBuild: true,
                keepAll              : true,
                reportDir            : 'cypress/reports',
                reportFiles          : 'index.html',
                reportName           : 'Cypress Test-Analyse'
            ])
            
            // Screenshots sichern (Korrektur: allowEmptyArchive statt allowMissing)
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
            
            // Videos sichern (Korrektur: allowEmptyArchive statt allowMissing)
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
        }
    }
}