---
title: "Run the Web App Locally"
domain: platform-connect
topic: run-the-web-app-locally
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.594Z
estimatedTokens: 782
keywords: [Run, Web, App, Locally, step, you’ll, package, Maven, Jetty, process, downloads, components, needed, including]
---

# Run the Web App Locally

> In this step, you’ll package the Web app using Maven and then run it locally
                using Jetty. When you package the Web app, the process downloads all the components
                needed to run the Web app, including Jetty.

# Run the Web App Locally

In this step, you’ll package the Web app using Maven and then run it locally using Jetty. When you package the Web app, the process downloads all the components needed to run the Web app, including Jetty.

1.  Open a command window and navigate to c:\\SalesforceCanvasFrameworkSDK.
2.  Enter the command mvn package. You’ll see output in the command window as Maven packages the app and its dependent components. If the process completes successfully, you’ll see something like this:

    ```

    ```

3.  To use Jetty to run the app, you’ll need to enable local SSL support. This step only needs to be done once per app, so if you’ve already done this, skip this step. Ensure that the command window is open and you’re in the directory c:\\SalesforceCanvasFrameworkSDK.
4.  Run the following command: keytool -keystore keystore -alias jetty -genkey -keyalg RSA.

    After you run this command, you’ll be prompted for the following information. Enter 123456 for the keystore password and yes to confirm at the end. When prompted, “Enter key password for <jetty>,” press Enter to use the keystore password. For the other information, you can enter values or leave them blank.

    ```

    ```

    This creates a file named keystore in the directory c:\\SalesforceCanvasFrameworkSDK. The keystore is used by Jetty for SSL support.

5.  Run the Web server by entering this command: target\\bin\\webapp.bat (Windows) or sh target/bin/webapp (Unix/OS X).

    If you’re using Unix/OS X, you may need to add execute permissions to webapp before you can run it. Use this command to do so: chmod +x target/bin/webapp.

6.  Verify that the app is running by opening a browser and navigating to the following URL: https://localhost:8443/examples/hello-world/index.jsp.

    Depending on your browser and security settings, you might need to add a security exception because you’re running a site with an unsigned SSL certificate.

    You should see a message that says, “This App must be invoked via a signed request!” This is an indication that the Web app is running locally. This message appears because the app is designed to receive a signed request from Salesforce, therefore, the app won’t run outside of the Salesforce canvas environment.


#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Clone the Project from GitHub](atlas.en-us.platform_connect.meta/platform_connect/quick_start_clone_the_project.htm "The “hello world” sample project is part of the Canvas SDK, which is located on GitHub. From GitHub, clone the project to make a copy of it on your local machine.")

-   [Use a Connected App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm "Creating the canvas app as a connected app is no longer recommended. Use external client apps for all new Canvas integrations.")

## Code Examples

```
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 28.016s
[INFO] Finished at: Tue Jul 03 08:00:42 PDT 2012
[INFO] Final Memory: 8M/59M
[INFO] ------------------------------------------------------------------------
```

```
Enter keystore password: <Choose Your Password>
    Re-enter new password: <Choose Your Password>
    What is your first and last name?
    [Unknown]:  <Enter First and Last Name>
    What is the name of your organizational unit?
    [Unknown]:  <Enter an Org Unit>
    What is the name of your organization?
    [Unknown]:  <Enter an Org>   
    What is the name of your City or Locality?
    [Unknown]:  <Enter a City>
    What is the name of your State or Province?
    [Unknown]:  <Enter a State>
    What is the two-letter country code for this unit?
    [Unknown]:  <Enter a Country>
    Is CN=XXXX, OU=XXXX, O=XXXX, L=XXXX, ST=XX, C=XX correct?
    [no]:  yes

    Enter key password for <jetty>
    (RETURN if same as keystore password):
```

## Related Topics

- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Clone the Project from GitHub (atlas.en-us.platform_connect.meta/platform_connect/quick_start_clone_the_project.htm)
- Use a Connected App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm)
