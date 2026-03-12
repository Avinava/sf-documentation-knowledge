---
title: "Set Up Your Client Application"
domain: api-asynch
topic: set-up-your-client-application
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.168Z
estimatedTokens: 607
keywords: [Client, Application, Bulk, API, uses, HTTP, POST, send, receive, XML, JSON, content, it’s, simple, build]
---

# Set Up Your Client Application

> The Bulk API uses HTTP GET and HTTP POST methods to send and receive XML or JSON
    content, so it’s simple to build clients in the language of your choice. This task uses a Java
    sample and the Salesforce Web Service Connector (WSC) toolkit provided by Salesforce to simplify
    development. WSC is a high-performing web service client stack implemented
      using a streaming parser. The toolkit has built-in support for the basic operations and
      objects used in the Bulk API.

# Set Up Your Client Application

The Bulk API uses HTTP GET and HTTP POST methods to send and receive XML or JSON content, so it’s simple to build clients in the language of your choice. This task uses a Java sample and the Salesforce Web Service Connector (WSC) toolkit provided by Salesforce to simplify development. WSC is a high-performing web service client stack implemented using a streaming parser. The toolkit has built-in support for the basic operations and objects used in the Bulk API.

Review the library here:

[https://github.com/forcedotcom/wsc](https://github.com/forcedotcom/wsc "HTML (New Window)")

To download the Salesforce WSC toolkit:

1.  Browse to [http://mvnrepository.com/artifact/com.force.api/force-wsc](http://mvnrepository.com/artifact/com.force.api/force-wsc "HTML (New Window)") or [https://repo1.maven.org/maven2/com/force/api/force-wsc/](https://repo1.maven.org/maven2/com/force/api/force-wsc/ "HTML (New Window)")
2.  Navigate to the version of WSC that matches the API version you’re using.
3.  Click force-wsc-XX.X.X\-uber.jar, and save the file to a local directory.

The Bulk API doesn’t provide a login operation, so you must use the SOAP API to login.

To download the partner WSDL and compile it to Java classes with the WSC toolkit:

1.  Log in to your Developer Edition Salesforce account. You must log in as an administrator or as a user who has the “Modify All Data” permission. Logins are checked to ensure they are from a known IP address. For more information, see [Security and the API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_concepts_security.htm "HTML (New Window)") in the SOAP API Developer Guide.
2.  From Setup, in the Quick Find box, enter “API”, then select **API**.
3.  Right-click **Partner WSDL** to display your browser's save options, and save the partner WSDL to a local directory.
4.  Compile the partner API code from the WSDL using the WSC compile tool:

    ```

    ```

    For example, if force-wsc-XX.X.X\-uber.jar is installed in C:\\salesforce\\wsc, and the partner WSDL is saved to C:\\salesforce\\wsdl\\partner:

    ```

    ```

    force-wsc-XX.X.X\-uber.jar and the generated partner.jar are the only libraries needed in the classpath for the code examples in the following sections.


-   [Next →](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_walkthrough.htm "Walk Through the Sample Code")

## Code Examples

```
java -classpath pathToJar\force-wsc-XX.X.X-uber.jar com.sforce.ws.tools.wsdlc pathToWSDL\wsdlFilename .\wsdlGenFiles.jar
```

```
java -classpath C:\salesforce\wsc\force-wsc-XX.X.X-uber.jar com.sforce.ws.tools.wsdlc C:\salesforce\wsdl\partner\partner.wsdl .\partner.jar
```

## Related Topics

- Next → (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_walkthrough.htm)
