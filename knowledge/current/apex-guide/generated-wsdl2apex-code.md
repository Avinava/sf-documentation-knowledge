---
title: "Generated WSDL2Apex Code"
domain: apex-guide
topic: generated-wsdl2apex-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.417Z
keywords: [Generated, WSDL2Apex, Code]
---

# Generated WSDL2Apex Code

# Generated WSDL2Apex Code

You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub.

You can find and contribute to the WSDL2Apex source code in the [WSDL2Apex repository on GitHub](https://github.com/forcedotcom/WSDL2Apex "HTML (New Window)").

The following example shows how an Apex class is created from a WSDL document. The Apex class is auto-generated for you when you import the WSDL.

The following code shows a sample WSDL document.

```

```

From this WSDL document, the following Apex class is auto-generated. The class name docSample is the name you specify when importing the WSDL.

```

```

Note the following mappings from the original WSDL document:

-   The WSDL target namespace maps to the Apex class name.
-   Each complex type becomes a class. Each element in the type is a public field in the class.
-   The WSDL port name maps to the stub class.
-   Each operation in the WSDL maps to a public method.

You can use the auto-generated docSample class to invoke external Web services. The following code calls the echoString method on the external server.

```

```

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing.htm "Test Web Service Callouts")