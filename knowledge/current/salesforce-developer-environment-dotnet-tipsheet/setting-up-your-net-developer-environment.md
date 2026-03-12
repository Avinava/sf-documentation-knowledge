---
title: "Setting Up Your .NET Developer Environment"
domain: salesforce-developer-environment-dotnet-tipsheet
topic: setting-up-your-net-developer-environment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.251Z
estimatedTokens: 875
keywords: [Setting, NET, Developer, Environment, tipsheet, how, local, start, Salesforce, APIs, SOAP, API, REST]
---

# Setting Up Your .NET Developer Environment

> This tipsheet describes how to set up your local environment so that you can start using
      Salesforce APIs, such as SOAP API or REST API.

# Setting Up Your .NET Developer Environment

This tipsheet describes how to set up your local environment so that you can start using Salesforce APIs, such as SOAP API or REST API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_developer_environment_dotnet_tipsheet)

#### Note

If you're setting up a local environment to develop Salesforce applications using Apex and custom Metadata API components, take a look at the [Salesforce Extensions for Visual Studio Code](https://github.com/forcedotcom/salesforcedx-vscode "HTML (New Window)").

This tipsheet focuses on tools and configurations you need to set up your local development system. It assumes you already have a working Salesforce organization with the API Enabled permission. API is enabled by default on Developer Edition, Enterprise Edition, Unlimited Edition, and Performance Edition organizations.

To create a Developer Edition org, go to [developer.salesforce.com/signup](https://developer.salesforce.com/signup) and follow the instructions for signing up for a Developer Edition organization.

If you have a Salesforce organization you can use for development but need to set up a sandbox for development and testing, see [Deploy Enhancements from Sandboxes](https://help.salesforce.com/articleView?id=deploy_sandboxes_parent.htm&language=en_US "HTML (New Window)") in Salesforce Help.

-   **[Installing Microsoft Visual Studio](atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_visualstudio.htm)**
    You’ll need to install Microsoft Visual Studio to use Salesforce APIs. Visual Studio is a development environment that enables you to create robust .NET applications.
-   **[Picking a Path Based on Which API You Use](atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_dotnet_roadmap.htm)**
    The next steps for setting up your development environment depend on which Salesforce API you want to use.
-   **[Download Developer WSDL Files (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_download_wsdl.htm)**
    Salesforce Web Services Definition Language (WSDL) files provide API details that you use in your developer environment to make API calls.
-   **[Verify the WSDL Environment (WSDL-Based APIs)](atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_verify_dotnet_wsdl.htm)**
    You can verify your developer environment with a simple C# test application in Visual Studio.
-   **[Setting Up External Client App Access (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_remoteaccess.htm)**
    Because Salesforce REST APIs use OAuth authentication, create an external client app to integrate your application with Salesforce.
-   **[Verify the REST Environment (REST-Based APIs)](atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_verify_dotnet_rest.htm)**
    You can verify your developer environment with a simple C# test application in Visual Studio.

## Related Topics

- Installing Microsoft Visual Studio (atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_visualstudio.htm)
- Picking a Path Based on Which API You Use (atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_dotnet_roadmap.htm)
- Download Developer WSDL Files (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_download_wsdl.htm)
- Verify the WSDL Environment (WSDL-Based APIs) (atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_verify_dotnet_wsdl.htm)
- Setting Up External Client App Access (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_remoteaccess.htm)
- Verify the REST Environment (REST-Based APIs) (atlas.en-us.salesforce_developer_environment_dotnet_tipsheet.meta/salesforce_developer_environment_dotnet_tipsheet/salesforce_developer_environment_verify_dotnet_rest.htm)
