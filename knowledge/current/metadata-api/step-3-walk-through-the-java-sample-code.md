---
title: "Step 3: Walk Through the Java Sample Code"
domain: metadata-api
topic: step-3-walk-through-the-java-sample-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.184Z
keywords: [Step, Walk, Through, Java, Sample, Code, Login, Utility, Note, File-Based, Development]
---

# Step 3: Walk Through the Java Sample Code

# Step 3: Walk Through the Java Sample Code

When you have imported the WSDL files, you can build client applications that use Metadata API. The sample is a good starting point for writing your own code.

Before you run the sample, modify your project and the code to:

1.  Include the WSC JAR, its dependencies, and the JAR files you generated from the WSDLs.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)
    
    #### Note
    
    Although WSC has other dependencies, the following sample only requires Rhino (js-1.7R2.jar), which you can download from [mvnrepository.com/artifact/rhino/js](http://mvnrepository.com/artifact/rhino/js "HTML (New Window)").
    
2.  Update USERNAME and PASSWORD variables in the MetadataLoginUtil.login() method with your user name and password. If your current IP address isn’t in your organization's trusted IP range, you'll need to append a security token to the password.
3.  If you are using a sandbox, be sure to change the login URL.

## Login Utility

Java users can use ConnectorConfig to connect to Enterprise, Partner, and Metadata SOAP API. MetadataLoginUtil creates a ConnectorConfig object and logs in using the Enterprise WSDL login method. Then it retrieves sessionId and metadataServerUrl to create a ConnectorConfig and connects to Metadata API endpoint. ConnectorConfig is defined in WSC.

The MetadataLoginUtil class abstracts the login code from the other parts of the sample, allowing portions of this code to be reused without change across different Salesforce APIs.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This example uses user and password authentication to obtain a session ID, which is then used for making calls to Metadata API. Alternatively, you can use OAuth authentication. After you athenticate with OAuth to Salesforce, pass the returned access token instead of the session ID. For example, pass the access token to the setSessionId() call on ConnectorConfig. To learn how to use OAuth authentication in Salesforce, see [Authenticating Apps with OAuth](https://help.salesforce.com/apex/HTViewHelpDoc?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") in the Salesforce Help.

## Java Sample Code for File-Based Development

The sample code logs in using the [login utility](#login_utility). Then it displays a menu with retrieve, deploy, and exit.

The retrieve() and deploy() calls both operate on a .zip file named components.zip. The retrieve() call retrieves components from your organization into components.zip, and the deploy() call deploys the components in components.zip to your organization. If you save the sample to your computer and execute it, run the retrieve option first so that you have a components.zip file that you can subsequently deploy. After a retrieve call, the sample calls checkRetrieveStatus() in a loop until the operation is completed. Similarly, after a deploy call, the sample checks checkDeployStatus() in a loop until the operation is completed.

The retrieve() call uses a manifest file to determine the components to retrieve from your organization. A sample package.xml manifest file follows. For more details on the manifest file structure, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders."). For this sample, the manifest file retrieves all custom objects, custom tabs, and page layouts.

```

```

Note the error handling code that follows each API call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This sample requires API version 34.0 or later.

```

```