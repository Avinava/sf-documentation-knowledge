---
title: "Install the Web Services Connector (WSDL-Based APIs)"
domain: salesforce-developer-environment-tipsheet
topic: install-the-web-services-connector-wsdl-based-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.310Z
estimatedTokens: 349
keywords: [Install, Web, Services, Connector, WSDL-Based, APIs, Lightning, Platform, WSC, high-performance, runtime, framework, Salesforce, easier, download]
---

# Install the Web Services Connector (WSDL-Based APIs)

> The Lightning Platform Web Services Connector (WSC) is a high-performance runtime
		framework that makes using WSDL-based Salesforce APIs easier. To install the WSC, download
		the prebuilt .jar file from the Force MVN repository.

# Install the Web Services Connector (WSDL-Based APIs)

The Lightning Platform Web Services Connector (WSC) is a high-performance runtime framework that makes using WSDL-based Salesforce APIs easier. To install the WSC, download the prebuilt .jar file from the Force MVN repository.

Before you use the WSC framework, make sure that you have a working of the Java JDK.

1.  Navigate to [https://mvnrepository.com/artifact/com.force.api/force-wsc](https://mvnrepository.com/artifact/com.force.api/force-wsc "HTML (New Window)") in your browser.
2.  Select the WSC version you want to download. We recommend downloading the version that matches the API version of Salesforce that you’re using.
3.  To view all files, select **View All**.
4.  ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_developer_environment_tipsheet)

    #### Note

    If you can’t find a pre-built version of WSC that works with the API version you’re using, you can build the .jar file from source. Navigate to [https://github.com/forcedotcom/wsc](https://github.com/forcedotcom/wsc "HTML (New Window)") and follow the instructions on “Building WSC.”

    Download the file ending in uber.jar. For example, download the force-wsc-57.0.0-uber.jar file.
5.  Save the WSC .jar file in a known location. You use it to generate stub files with the WSDLs from your Salesforce organization.
