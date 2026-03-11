---
title: "SOAP Services: Defining a Class from a WSDL Document"
domain: apex-guide
topic: soap-services-defining-a-class-from-a-wsdl-document
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.407Z
keywords: [SOAP, Services, Defining, Class, WSDL, Document, Note, Invoking, External, Service, HTTP, Header, Support, Sending, Headers, Web, Callout, Tip, Accessing, Response]
---

# SOAP Services: Defining a Class from a WSDL Document

# SOAP Services: Defining a Class from a WSDL Document

Classes can be automatically generated from a WSDL document that is stored on a local hard drive or network. Creating a class by consuming a WSDL document allows developers to make callouts to the external Web service in their Apex code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Use Outbound Messaging to handle integration solutions when possible. Use callouts to third-party Web services only when necessary.

To generate an Apex class from a WSDL:

1.  In the application, from Setup, enter Apex Classes in the Quick Find box, then select **Apex Classes**.
2.  Click **Generate from WSDL**.
3.  Click **Browse** to navigate to a WSDL document on your local hard drive or network, or type in the full path. This WSDL document is the basis for the Apex class you are creating.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    The WSDL document that you specify might contain a SOAP endpoint location that references an outbound port.
    
    For security reasons, Salesforce restricts the outbound ports you can specify to one of the following:
    
    -   80: This port only accepts HTTP connections.
    -   443: This port only accepts HTTPS connections.
    -   1024–66535 (inclusive): These ports accept HTTP or HTTPS connections.
    
4.  Click **Parse WSDL** to verify the WSDL document contents. The application generates a default class name for each namespace in the WSDL document and reports any errors. Parsing fails if the WSDL contains schema types or constructs that aren’t supported by Apex classes, or if the resulting classes exceed the 1 million character limit on Apex classes. For example, the Salesforce SOAP API WSDL cannot be parsed.
5.  Modify the class names as desired. While you can save more than one WSDL namespace into a single class by using the same class name for each namespace, Apex classes can be no more than 1 million characters total.
6.  Click **Generate Apex**. The final page of the wizard shows which classes were successfully generated, along with any errors from other classes. The page also provides a link to view successfully generated code.

The successfully generated Apex classes include stub and type classes for calling the third-party Web service represented by the WSDL document. These classes allow you to call the external Web service from Apex. For each generated class, a second class is created with the same name and with a prefix of Async. The first class is for synchronous callouts. The second class is for asynchronous callouts. For more information about asynchronous callouts, see [Make Long-Running Callouts with Continuations](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm "Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.").

Note the following about the generated Apex:

-   If a WSDL document contains an Apex reserved word, the word is appended with \_x when the Apex class is generated. For example, limit in a WSDL document converts to limit\_x in the generated Apex class. See [Reserved Keywords](atlas.en-us.apexcode.meta/apexcode/apex_reserved_words.htm "These words can be used only as keywords."). For details on handling characters in element names in a WSDL that are not supported in Apex variable names, see [Considerations Using WSDLs](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_considerations.htm).
-   If an operation in the WSDL has an output message with more than one element, the generated Apex wraps the elements in an inner class. The Apex method that represents the WSDL operation returns the inner class instead of the individual elements.
-   Since periods (.) are not allowed in Apex class names, any periods in WSDL names used to generate Apex classes are replaced by underscores (\_) in the generated Apex code.

After you have generated a class from the WSDL, you can invoke the external service referenced by the WSDL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Before you can use the samples in the rest of this topic, you must copy the Apex class docSampleClass from [Generated WSDL2Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm "You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub.") and add it to your organization.

## Invoking an External Service

To invoke an external service after using its WSDL document to generate an Apex class, create an instance of the stub in your Apex code and call the methods on it. For example, to invoke the [StrikeIron IP address lookup service](http://ws.strikeiron.com/relauto/iplookup?WSDL "HTML (New Window)") from Apex, you could write code similar to the following:

```

```

## HTTP Header Support

You can set the HTTP headers on a Web service callout. For example, you can use this feature to set the value of a cookie in an authorization header. To set HTTP headers, add inputHttpHeaders\_x and outputHttpHeaders\_x to the stub.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In API versions 16.0 and earlier, HTTP responses for callouts are always decoded using UTF-8, regardless of the Content-Type header. In API versions 17.0 and later, HTTP responses are decoded using the encoding specified in the Content-Type header.

The following samples work with the sample WSDL file in [Generated WSDL2Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm "You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub."):

## Sending HTTP Headers on a Web Service Callout

```

```

If a value for inputHttpHeaders\_x is specified, it overrides the standard headers set.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Instead of hardcoding the Authorization header value, use named credentials. Named credentials offer a declarative and secure way to store and manage the credentials needed for HTTP callouts so that Salesforce can authenticate with external APIs. For more information, see [Named Credentials](https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm&language=en_US) in Salesforce Help.

## Accessing HTTP Response Headers from a Web Service Callout Response

```

```

The value of outputHttpHeaders\_x is null by default. You must set outputHttpHeaders\_x before you have access to the content of headers in the response.

## Supported WSDL Features

Apex supports only the document literal wrapped WSDL style and the following primitive and built-in datatypes:

| Schema Type | Apex Type |
| --- | --- |
| xsd:anyURI | String |
| xsd:boolean | Boolean |
| xsd:date | Date |
| xsd:dateTime | Datetime |
| xsd:double | Double |
| xsd:float | Double |
| xsd:int | Integer |
| xsd:integer | Integer |
| xsd:language | String |
| xsd:long | Long |
| xsd:Name | String |
| xsd:NCName | String |
| xsd:nonNegativeInteger | Integer |
| xsd:NMTOKEN | String |
| xsd:NMTOKENS | String |
| xsd:normalizedString | String |
| xsd:NOTATION | String |
| xsd:positiveInteger | Integer |
| xsd:QName | String |
| xsd:short | Integer |
| xsd:string | String |
| xsd:time | Datetime |
| xsd:token | String |
| xsd:unsignedInt | Integer |
| xsd:unsignedLong | Long |
| xsd:unsignedShort | Integer |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The Salesforce datatype anyType is not supported in WSDLs used to generate Apex code that is saved using API version 15.0 and later. For code saved using API version 14.0 and earlier, anyType is mapped to String.

Apex also supports the following schema constructs:

-   xsd:all, in Apex code saved using API version 15.0 and later
-   xsd:annotation, in Apex code saved using API version 15.0 and later
-   xsd:attribute, in Apex code saved using API version 15.0 and later
-   xsd:choice, in Apex code saved using API version 15.0 and later
-   xsd:element. In Apex code saved using API version 15.0 and later, the ref attribute is also supported with the following restrictions:
    -   You cannot call a ref in a different namespace.
    -   A global element cannot use ref.
    -   If an element contains ref, it cannot also contain name or type.
-   xsd:sequence

The following data types are only supported when used as call ins, that is, when an external Web service calls an Apex Web service method. These data types are not supported as callouts, that is, when an Apex Web service method calls an external Web service.

-   blob
-   decimal
-   enum

Apex does not support any other WSDL constructs, types, or services, including:

-   RPC/encoded services
-   WSDL files with multiple portTypes, multiple services, or multiple bindings
-   WSDL files that import external schemas. For example, the following WSDL fragment imports an external schema, which is not supported:
    
    ```
    
    ```
    
    However, an import within the same schema is supported. In the following example, the external WSDL is pasted into the WSDL you are converting:
    
    ```
    
    ```
    
-   Any schema types not documented in the previous table
-   WSDLs that exceed the size limit, including the Salesforce WSDLs
-   WSDLs that don’t use the document literal wrapped style. The following WSDL snippet doesn’t use document literal wrapped style and results in an “Unable to find complexType” error when imported.
    
    ```
    
    ```
    
    This modified version wraps the simpleType element as a complexType that contains a sequence of elements. This follows the document literal style and is supported.
    
    ```
    
    ```
    

1.  [Generated WSDL2Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm)  
    You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub.
2.  [Test Web Service Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing.htm)  
    Generated code is saved as an Apex class containing the methods you can invoke for calling the web service. To deploy or package this Apex class and other accompanying code, 75% of the code must have test coverage, including the methods in the generated class. By default, test methods don’t support web service callouts, and tests that perform web service callouts fail. To prevent tests from failing and to increase code coverage, Apex provides the built-in WebServiceMock interface and the Test.setMock method. Use WebServiceMock and Test.setMock to receive fake responses in a test method.
3.  [Performing DML Operations and Mock Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm)  
    
4.  [Considerations Using WSDLs](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_considerations.htm)  
    

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Named Credentials as Callout Endpoints")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm "Invoking HTTP Callouts")