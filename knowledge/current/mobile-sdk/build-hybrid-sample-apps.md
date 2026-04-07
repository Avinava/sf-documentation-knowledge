---
title: "Build Hybrid Sample Apps"
domain: mobile-sdk
topic: build-hybrid-sample-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.139Z
estimatedTokens: 621
keywords: [Build, Hybrid, Sample, Apps, samples, directory, SalesforceMobileSDK-Shared, repository, forcehybrid, Cordova, command, line, hybrid_local, hybrid_remote, app, add, web, assets—HTML, JavaScript, CSS, files—and, bootconfig.json, file]
---

> To build hybrid apps from the samples
      directory of the SalesforceMobileSDK-Shared
      repository, you use forcehybrid and the Cordova command line. You create a hybrid_local or hybrid_remote app and then add the web assets—HTML, JavaScript, and CSS
      files—and the bootconfig.json file fr

# Build Hybrid Sample Apps

To build hybrid apps from the samples directory of the [SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repository, you use forcehybrid and the Cordova command line. You create a hybrid\_local or hybrid\_remote app and then add the web assets—HTML, JavaScript, and CSS files—and the bootconfig.json file from the Shared repo.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The ContactExplorer sample requires the cordova-plugin-contacts and cordova-plugin-statusbar plug-ins.

The other hybrid sample apps do not require special Cordova plug-ins.

To build one of the sample apps:

1.  Open a command prompt or terminal window.
2.  Clone the shared repo:

    ```

    ```

3.  Use forcehybrid to create an app.
    -   For platform, enter one or both platform names: “ios”, “android”, or “ios,android”.
    -   For application type (or the apptype parameter), enter “hybrid\_local”.
4.  Change to your new app directory:

    ```

    ```

5.  For each additional Cordova plug-in you want to add, type:

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    Go to [https://plugins.cordova.io](http://cordova.apache.org/blog/releases/2013/07/23/cordova-3.html) to search for available plug-ins.

6.  (Optional—Mac only) To add iOS support to an Android project “after the fact”:

    ```

    ```

7.  (Optional—Mac only) To add Android support to an iOS project “after the fact”:

    ```

    ```

8.  Copy the sample source files to the www folder of your new project directory.

    On Mac:

    ```

    ```

    On Windows:

    ```

    ```

    If you’re asked, affirm that you want to overwrite existing files.
9.  Do the final Cordova preparation:

    ```

    ```


![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Android Studio refers to forcehybrid projects by the platform name ("android"). For example, to run your project, select "android" as the startup project and then click Run.
-   On Windows, Android Studio sets the default project encoding to windows-1252. This setting conflicts with the UTF-8 encoding of the forcehybrid Gradle build files. For best results, change the default project encoding to UTF-8.
-   On Windows, be sure to run Android Studio as administrator.

## Code Examples

```
git clone https://github.com/forcedotcom/SalesforceMobileSDK-Shared
```

```
cd <app_target_directory>
```

```
cordova plugin add <plug-in repo or plug-in name>
```

```
cordova platform add ios@7.0.1
```

```
cordova platform add android@12.0.1
```
