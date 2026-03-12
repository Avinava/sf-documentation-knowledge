---
title: "HttpRequest Class"
domain: apex-reference
topic: httprequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.776Z
estimatedTokens: 3915
namespace: System
keywords: [HttpRequest, programmatically, create, HTTP, requests, GET, POST, PATCH, PUT, DELETE., Usage, Example, Note, Compression, getBody, getBodyAsBlob, getBodyDocument, getCompressed, getEndpoint, getHeader]
---

# HttpRequest Class

> Use the HttpRequest class to programmatically
    create HTTP requests like GET, POST, PATCH, PUT, and DELETE.

**Namespace:** `System`

# HttpRequest Class

Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the XML classes or JSON classes to parse XML or JSON content in the body of a request created by HttpRequest.

## Example

The following example illustrates how you can use an authorization header with a request and handle the response.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You can set the endpoint as a named credential URL. A named credential URL contains the scheme callout:, the name of the named credential, and an optional path. For example: callout:My\_Named\_Credential/some\_path. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. See [Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm).

## Compression

To compress the data you send, use setCompressed.

```

```

If a response comes back in compressed format, getBody recognizes the format, uncompresses it, and returns the uncompressed value.

-   **[HttpRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_constructors)**

-   **[HttpRequest Methods](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_methods)**


#### See Also

-   [*Apex Developer Guide*: JSON Support](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_json_overview.htm "Apex Developer Guide: JSON Support - HTML (New Window)")

-   [*Apex Developer Guide*: XML Support](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_xml_support.htm "Apex Developer Guide: XML Support - HTML (New Window)")


## HttpRequest Constructors

The following are constructors for HttpRequest.

-   **[HttpRequest()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_ctor)**
    Creates a new instance of the HttpRequest class.

### HttpRequest()

Creates a new instance of the HttpRequest class.

#### Signature

public HttpRequest()

## HttpRequest Methods

The following are methods for HttpRequest. All are instance methods.

-   **[getBody()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getBody)**
    Retrieves the body of this request.
-   **[getBodyAsBlob()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getBodyAsBlob)**
    Retrieves the body of this request as a Blob.
-   **[getBodyDocument()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getBodyDocument)**
    Retrieves the body of this request as a DOM document.
-   **[getCompressed()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getCompressed)**
    If true, the request body is compressed, false otherwise.
-   **[getEndpoint()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getEndpoint)**
    Retrieves the URL for the endpoint of the external server for this request.
-   **[getHeader(key)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getHeader)**
    Retrieves the contents of the request header.
-   **[getMethod()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_getMethod)**
    Returns the type of method used by HttpRequest.
-   **[setBody(body)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setBody)**
    Sets the contents of the body for this request.
-   **[setBodyAsBlob(body)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setBodyAsBlob)**
    Sets the contents of the body for this request using a Blob.
-   **[setBodyDocument(document)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setBodyDocument)**
    Sets the contents of the body for this request. The contents represent a DOM document.
-   **[setClientCertificate(clientCert, password)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setClientCertificate)**
    This method is deprecated. Use setClientCertificateName instead.
-   **[setClientCertificateName(certDevName)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setClientCertificateName)**
    If the external service requires a client certificate for authentication, set the certificate name.
-   **[setCompressed(flag)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setCompressed)**
    If true, the data in the body is delivered to the endpoint in the gzip compressed format. If false, no compression format is used.
-   **[setEndpoint(endpoint)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setEndpoint)**
    Specifies the endpoint for this request.
-   **[setHeader(key, value)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setHeader)**
    Sets the contents of the request header.
-   **[setMethod(method)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setMethod)**
    Sets the type of method to be used for the HTTP request.
-   **[setTimeout(timeout)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_setTimeout)**
    Sets a timeout for the request between 1 and 120,000 milliseconds. The timeout is the maximum time to wait for establishing the HTTP connection. The same timeout is used for waiting for the request to start. When the request is executing, such as retrieving or posting data, the connection is kept alive until the request finishes.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_toString)**
    Returns a string containing the URL for the endpoint of the external server for this request and the method used, for example, Endpoint=http://YourServer, Method=POST

### getBody()

Retrieves the body of this request.

#### Signature

public String getBody()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getBodyAsBlob()

Retrieves the body of this request as a Blob.

#### Signature

public Blob getBodyAsBlob()

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

### getBodyDocument()

Retrieves the body of this request as a DOM document.

#### Signature

public Dom.Document getBodyDocument()

#### Return Value

Type: [Dom.Document](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_classes_xml_dom_document "Use the Document class to process XML content. You can parse nested XML content that’s up to 50 nodes deep.")

#### Example

Use this method as a shortcut for:

```

```

### getCompressed()

If true, the request body is compressed, false otherwise.

#### Signature

public Boolean getCompressed()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getEndpoint()

Retrieves the URL for the endpoint of the external server for this request.

#### Signature

public String getEndpoint()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getHeader(key)

Retrieves the contents of the request header.

#### Signature

public String getHeader(String key)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getMethod()

Returns the type of method used by HttpRequest.

#### Signature

public String getMethod()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Examples of return values:

-   DELETE
-   GET
-   HEAD
-   PATCH
-   POST
-   PUT
-   TRACE

### setBody(body)

Sets the contents of the body for this request.

#### Signature

public Void setBody(String body)

#### Parameters

body

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

Limit: 6 MB for synchronous Apex or 12 MB for asynchronous Apex.

The HTTP request and response sizes count towards the total heap size.

### setBodyAsBlob(body)

Sets the contents of the body for this request using a Blob.

#### Signature

public Void setBodyAsBlob(Blob body)

#### Parameters

body

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: Void

#### Usage

Limit: 6 MB for synchronous Apex or 12 MB for asynchronous Apex.

The HTTP request and response sizes count towards the total heap size.

### setBodyDocument(document)

Sets the contents of the body for this request. The contents represent a DOM document.

#### Signature

public Void setBodyDocument(Dom.Document document)

#### Parameters

document

Type: [Dom.Document](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_document.htm#apex_classes_xml_dom_document "Use the Document class to process XML content. You can parse nested XML content that’s up to 50 nodes deep.")

#### Return Value

Type: Void

#### Usage

Limit: 6 MB for synchronous Apex or 12 MB for asynchronous Apex.

### setClientCertificate(clientCert, password)

This method is deprecated. Use setClientCertificateName instead.

#### Signature

public Void setClientCertificate(String clientCert, String password)

#### Parameters

clientCert

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

password

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

If the server requires a client certificate for authentication, set the client certificate PKCS12 key store and password.

### setClientCertificateName(certDevName)

If the external service requires a client certificate for authentication, set the certificate name.

#### Signature

public Void setClientCertificateName(String certDevName)

#### Parameters

certDevName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

See [Using Certificates with HTTP Requests](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_client_certs_http.htm).

### setCompressed(flag)

If true, the data in the body is delivered to the endpoint in the gzip compressed format. If false, no compression format is used.

#### Signature

public Void setCompressed(Boolean flag)

#### Parameters

flag

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: Void

### setEndpoint(endpoint)

Specifies the endpoint for this request.

#### Signature

public Void setEndpoint(String endpoint)

#### Parameters

endpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible values for the endpoint:

-   Endpoint URL

    ```

    ```

-   Named credential URL, which contains the scheme callout, the name of the named credential, and, optionally, an appended path

    ```

    ```


#### Return Value

Type: Void

#### See Also

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout Endpoints - HTML (New Window)")


### setHeader(key, value)

Sets the contents of the request header.

#### Signature

public Void setHeader(String key, String value)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

Limit 100 KB.

### setMethod(method)

Sets the type of method to be used for the HTTP request.

#### Signature

public Void setMethod(String method)

#### Parameters

method

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible values for the method type include:

-   DELETE
-   GET
-   HEAD
-   PATCH
-   POST
-   PUT
-   TRACE

#### Return Value

Type: Void

#### Usage

You can also use this method to set any required options.

### setTimeout(timeout)

Sets a timeout for the request between 1 and 120,000 milliseconds. The timeout is the maximum time to wait for establishing the HTTP connection. The same timeout is used for waiting for the request to start. When the request is executing, such as retrieving or posting data, the connection is kept alive until the request finishes.

#### Signature

public Void setTimeout(Integer timeout)

#### Parameters

timeout

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### toString()

Returns a string containing the URL for the endpoint of the external server for this request and the method used, for example, Endpoint=http://YourServer, Method=POST

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
public with sharing class AuthCallout {
 
   public void basicAuthCallout(){
     HttpRequest req = new HttpRequest();
     req.setEndpoint('http://www.yahoo.com');
     req.setMethod('GET');
     
     // Specify the required user name and password to access the endpoint
     // As well as the header and header information
 
     String username = 'myname';
     String password = 'mypwd';
  
     Blob headerValue = Blob.valueOf(username + ':' + password);
     String authorizationHeader = 'Basic ' +
     EncodingUtil.base64Encode(headerValue);
     req.setHeader('Authorization', authorizationHeader);
   
     // Create a new http object to send the request object
     // A response object is generated as a result of the request  
  
     Http http = new Http();
     HTTPResponse res = http.send(req);
     System.debug(res.getBody());
   }
}
```

```
HttpRequest req = new HttpRequest();
req.setEndPoint('my_endpoint');
req.setCompressed(true);
req.setBody('some post body');
```

```
String xml = httpRequest.getBody();
Dom.Document domDoc = new Dom.Document(xml);
```

```
https://my_endpoint.example.com/some_path
```

```
callout:My_Named_Credential/some_path
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- HttpRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- HttpRequest Methods (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- HttpRequest() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- getBody() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- getBodyAsBlob() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- getBodyDocument() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- getCompressed() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- getEndpoint() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- getHeader(key) (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
