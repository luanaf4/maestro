# Bloomin App Automation

## Run Tests - Commands

To run Outback tests for Android use:

```sh
maestro test -e APP_ID=com.outback.tampa.internal -e PLATFORM=Android file.yaml
```

To run Outback tests for iOS use:

```sh
maestro test -e APP_ID=com.outback.connectedcustomertampa.development -e PLATFORM=iOS file.yaml
```

To run Carrabbas tests for Android use:

```sh
maestro test -e APP_ID=com.carrabbas.tampa.internal -e PLATFORM=Android file.yaml
```

To run Carrabbas tests for iOS use:

```sh
maestro test -e APP_ID=com.carrabbas.connectedcustomertampa.development -e PLATFORM=iOS file.yaml
```

## Testing Automation Architecture(PageObjects)

📦automation-bloomin-app
 ┣ 📂android
 ┃ ┃
 ┃ ┣ 📂apps
 ┃ ┃ ┗📜app.apk
 ┃ ┃
 ┃ ┣ 📂configuration
 ┃ ┃ ┗📜project_config.yaml
 ┃ ┃
 ┃ ┣ 📂pages
 ┃ ┃ ┗📜elements.js
 ┃ ┃
 ┃ ┗ 📂tests
 ┃   ┗📜testName.yaml
 ┃
 ┃
 ┣ 📂ios
 ┃ ┃
 ┃ ┣ 📂apps
 ┃ ┃ ┗📜app.ipa
 ┃ ┃
 ┃ ┣ 📂configuration
 ┃ ┃ ┗📜project_config.yaml
 ┃ ┃
 ┃ ┣ 📂pages
 ┃ ┃ ┗📜elements.js
 ┃ ┃
 ┃ ┗ 📂tests
 ┃   ┗📜testName.yaml
 ┃
 ┣ 📂utils
 ┃
 ┣ 📜README.md
 ┣ 📜report.xml
 ┣ 📜azure-pipeline.yml
 ┗ .gitignore

## Requirements

```java
    Project is set run with some pre-installed requirements: 
    - JAVA_HOME should be set as environment variable
    - ANDROID_HOME should be set as environment variable 
    - XCODE14 should be installed
```

## Test Execution Reports

```java
    to add a report to your test run we just need to add a command --report to the command line example: 
        ->   maestro test -e APP_ID=com.outback.tampa.internal --report file.yaml
        ->   maestro test -e APP_ID=com.outback.connectedcustomertampa.development --report file.yaml

    your report will be added to the root folder of the project in the report.xml, 
     -> You can check the directory: Root\report.xml
```

## Technologies

- [Java-OpenJDK 8+](https://www.oracle.com/br/java/technologies/downloads/)
- [XCode 14+](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4kQGMqcmZymBHMt3EQ_XV0qnMp3l16G8uR_wOifQAlxz6-9bvMcrbEaAl0XEALw_wcB&gclsrc=aw.ds)
- [Maestro](curl -Ls "<https://get.maestro.mobile.dev>" | bash)
- [VSCode](https://code.visualstudio.com/)


maestro test --app-file  android/apps/BoxBoxClub.apk --format junit --output "report.xml" '/Users/dtidigital/Documents/mentoria/Luana%20Maestro%20Project/android/tests'