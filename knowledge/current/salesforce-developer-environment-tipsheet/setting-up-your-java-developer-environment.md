---
title: "Setting Up Your Java Developer Environment"
domain: salesforce-developer-environment-tipsheet
topic: setting-up-your-java-developer-environment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.291Z
estimatedTokens: 1203
keywords: [Setting, Java, Developer, Environment, tipsheet, how, local, start, Salesforce, APIs, SOAP, API, REST]
---

# Setting Up Your Java Developer Environment

> This tipsheet describes how to set up your local environment so that you can start using
      Salesforce APIs, such as SOAP API or REST API.

# Setting Up Your Java Developer Environment

This tipsheet describes how to set up your local environment so that you can start using Salesforce APIs, such as SOAP API or REST API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_developer_environment_tipsheet)

#### Note

If you're setting up a local environment to develop Salesforce applications using Apex and custom Metadata API components, take a look at the [Salesforce Extensions for Visual Studio Code](https://github.com/forcedotcom/salesforcedx-vscode "HTML (New Window)").

This tipsheet focuses on tools and configurations you need to set up your local development system. It assumes you already have a working Salesforce organization with the API Enabled permission. API is enabled by default on Developer Edition, Enterprise Edition, Unlimited Edition, and Performance Edition organizations.

To create a Developer Edition org, go to [developer.salesforce.com/signup](https://developer.salesforce.com/signup) and follow the instructions for signing up for a Developer Edition organization.

If you have a Salesforce organization you can use for development but need to set up a sandbox for development and testing, see [Deploy Enhancements from Sandboxes](https://help.salesforce.com/articleView?id=deploy_sandboxes_parent.htm&language=en_US "HTML (New Window)") in Salesforce Help.

-   **[Installing Java](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_java.htm)**
    You need the Java Developer Kit (JDK) version 8.0 or later to use Salesforce APIs. Java is a robust, cross-platform, widely used language that integrates well with Salesforce.
-   **[Installing Eclipse](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_eclipse.htm)**
    Eclipse is an integrated development environment (IDE) for Java development.
-   **[Picking a Path Based on Which API You Use](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_roadmap.htm)**
    The next steps for setting up your development environment depend on which Salesforce API you want to use.
-   **[Install the Web Services Connector (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_wsc.htm)**
    The Lightning Platform Web Services Connector (WSC) is a high-performance runtime framework that makes using WSDL-based Salesforce APIs easier. To install the WSC, download the prebuilt .jar file from the Force MVN repository.
-   **[Download Developer WSDL Files (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_download_wsdl.htm)**
    Salesforce Web Services Definition Language (WSDL) files provide API details that you use in your developer environment to make API calls.
-   **[Generating Java Stub Files (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_java_stubs.htm)**
    To use WSDL-based Salesforce APIs with Java, you need to generate .jar stub files that you can use in your Java projects.
-   **[Verify the WSDL Environment (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_wsdl.htm)**
    You can verify your developer environment with a simple Java test application in Eclipse.
-   **[Installing HttpClient and JSON Frameworks (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_httpclient.htm)**
    To access REST resources, you’ll need to install HttpClient and JSON frameworks. HttpClient lets you access HTTP resources. The JSON framework lets you generate and parse JSON request and response data.
-   **[Setting Up External Client App Access (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_remoteaccess.htm)**
    Because Salesforce REST APIs use OAuth authentication, create an external client app to integrate your application with Salesforce.
-   **[Verify the REST Environment (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_rest.htm)**
    You can verify your developer environment with a simple Java test application in Eclipse.

## Related Topics

- Installing Java (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_java.htm)
- Installing Eclipse (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_eclipse.htm)
- Picking a Path Based on Which API You Use (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_roadmap.htm)
- Install the Web Services Connector (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_wsc.htm)
- Download Developer WSDL Files (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_download_wsdl.htm)
- Generating Java Stub Files (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_java_stubs.htm)
- Verify the WSDL Environment (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_wsdl.htm)
- Installing HttpClient and JSON Frameworks (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_httpclient.htm)
- Setting Up External Client App Access (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_remoteaccess.htm)
- Verify the REST Environment (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_rest.htm)
