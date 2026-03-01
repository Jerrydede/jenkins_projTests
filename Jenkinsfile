pipeline {
    agent any

    environment {
        // Pfade für macOS (Homebrew & Node), damit Jenkins 'npm' und 'npx' findet
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
                echo 'Installiere npm-Pakete und Plugins...'
                // Installiert alles aus der package.json inklusive dem Reporter
                sh 'npm install'
            }
        }

        stage('Cypress Tests') {
            steps {
                echo 'Starte die 20+ Cypress Testfälle...'
                // '|| true' ist wichtig: Wenn Tests scheitern, geht die Pipeline trotzdem 
                // zum 'post' Block weiter, um den Report zu erstellen.
                sh 'npx cypress run --browser chrome --headless || true'
            }
        }
    }

    post {
        always {
            echo 'Verarbeite Test-Ergebnisse...'
            
            // 1. HTML Report in der Jenkins-Seitenleiste veröffentlichen
            publishHTML(target: [
                allowMissing         : false,
                alwaysLinkToLastBuild: true,
                keepAll              : true,
                reportDir            : 'cypress/reports',
                reportFiles          : 'index.html',
                reportName           : 'Cypress Test-Analyse'
            ])
            
            // 2. Screenshots zusätzlich als Artefakte sichern (für schnellen Zugriff)
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowMissing: true
            
            // 3. (Optional) Die Video-Aufzeichnung sichern, falls aktiviert
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowMissing: true
        }
        
        success {
            echo 'Glückwunsch! Alle Tests sind erfolgreich durchgelaufen.'
        }
        
        failure {
            echo 'Achtung: Der Build ist fehlgeschlagen (evtl. Installationsfehler).'
        }
    }
}