---
title: "Picking a Path Based on Which API You
Use"
domain: salesforce-developer-environment-tipsheet
topic: picking-a-path-based-on-which-api-you-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.297Z
estimatedTokens: 849
keywords: [Picking, Path, API, steps, setting, development, environment, depend, Salesforce, want]
---

# Picking a Path Based on Which API You
Use

> The next steps for setting up your development environment depend on which Salesforce API
  you want to use.

# Picking a Path Based on Which API You Use

The next steps for setting up your development environment depend on which Salesforce API you want to use.

To use SOAP API or CRUD-based Metadata API, or any other WSDL-based Salesforce API, complete the steps in the following tasks.

-   [Install the Web Services Connector (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_wsc.htm "The Lightning Platform Web Services Connector (WSC) is a high-performance runtime framework that makes using WSDL-based Salesforce APIs easier. To install the WSC, download the prebuilt .jar file from the Force MVN repository.")
-   [Download Developer WSDL Files (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_download_wsdl.htm "Salesforce Web Services Definition Language (WSDL) files provide API details that you use in your developer environment to make API calls.")
-   [Generating Java Stub Files (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_java_stubs.htm "To use WSDL-based Salesforce APIs with Java, you need to generate .jar stub files that you can use in your Java projects.")
-   [Verify the WSDL Environment (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_wsdl.htm "You can verify your developer environment with a simple Java test application in Eclipse.")

To use REST API, Bulk API, Connect REST API, or any other REST-based Salesforce API, complete the steps in the following tasks.

-   [Installing HttpClient and JSON Frameworks (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_httpclient.htm "To access REST resources, you’ll need to install HttpClient and JSON frameworks. HttpClient lets you access HTTP resources. The JSON framework lets you generate and parse JSON request and response data.")
-   [Setting Up External Client App Access (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_remoteaccess.htm "Because Salesforce REST APIs use OAuth authentication, create an external client app to integrate your application with Salesforce.")
-   [Verify the REST Environment (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_rest.htm "You can verify your developer environment with a simple Java test application in Eclipse.")

Tooling API provides both SOAP and REST-based interfaces, so depending on your needs, you can set up your environment by using one of the paths above.

Streaming API requires installing additional Java frameworks for supporting push technology. See [Example: Subscribe to and Replay Events Using a Java Client (EMP Connector)](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/code_sample_java_client_intro.htm "HTML (New Window)") in the Force.com Streaming API Developer’s Guide.

## Related Topics

- Install the Web Services Connector (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_wsc.htm)
- Download Developer WSDL Files (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_download_wsdl.htm)
- Generating Java Stub Files (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_java_stubs.htm)
- Verify the WSDL Environment (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_wsdl.htm)
- Installing HttpClient and JSON Frameworks (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_httpclient.htm)
- Setting Up External Client App Access (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_remoteaccess.htm)
- Verify the REST Environment (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_verify_rest.htm)
