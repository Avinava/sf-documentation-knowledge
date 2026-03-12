---
title: "Considerations Using WSDLs"
domain: apex-guide
topic: considerations-using-wsdls
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.403Z
estimatedTokens: 741
keywords: [Considerations, WSDLs, aware, generating, Apex, classes, WSDL, SOAP, Web, Service, Callout, Mapping, Understanding, Runtime, Events]
---

# Considerations Using WSDLs

> Be aware of the following when generating Apex classes from a WSDL.

# Considerations Using WSDLs

Be aware of the following when generating Apex classes from a WSDL.

## SOAP Web Service Callout

For WSDLs that require namespace changes within the SOAP requests, you must manually construct the HTTP request body and invoke the endpoint as a POST request from Apex.

## Mapping Headers

Headers defined in the WSDL document become public fields on the stub in the generated class. This is similar to how the AJAX Toolkit and .NET works.

## Understanding Runtime Events

The following checks are performed when Apex code is making a callout to an external service.

-   For information on the timeout limits when making an HTTP request or a Web services call, see [Callout Limits and Limitations](atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm).
-   Circular references in Apex classes are not allowed.
-   More than one loopback connection to Salesforce domains is not allowed.
-   To allow an endpoint to be accessed, register it from Setup by entering Remote Site Settings in the Quick Find box, then selecting **Remote Site Settings**.
-   To prevent database connections from being held up, no transactions can be open.

## Understanding Unsupported Characters in Variable Names

A WSDL file can include an element name that is not allowed in an Apex variable name. The following rules apply when generating Apex variable names from a WSDL file:

-   If the first character of an element name is not alphabetic, an x character is prepended to the generated Apex variable name.
-   If the last character of an element name is not allowed in an Apex variable name, an x character is appended to the generated Apex variable name.
-   If an element name contains a character that is not allowed in an Apex variable name, the character is replaced with an underscore (\_) character.
-   If an element name contains two characters in a row that are not allowed in an Apex variable name, the first character is replaced with an underscore (\_) character and the second one is replaced with an x character. This avoids generating a variable name with two successive underscores, which is not allowed in Apex.
-   Suppose you have an operation that takes two parameters, a\_ and a\_x. The generated Apex has two variables, both named a\_x. The class doesn’t compile. Manually edit the Apex and change one of the variable names.

## Debugging Classes Generated from WSDL Files

Salesforce tests code with SOAP API, .NET, and Axis. If you use other tools, you can encounter issues.

You can use the debugging header to return the XML in request and response SOAP messages to help you diagnose problems. For more information, see SOAP API Developer Guide: [DebuggingHeader](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_debuggingheader.htm).

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm "Performing DML Operations and Mock Callouts")

## Related Topics

- Callout Limits and Limitations (atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm)
