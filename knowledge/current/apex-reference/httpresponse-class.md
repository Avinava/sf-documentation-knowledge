---
title: "HttpResponse Class"
domain: apex-reference
topic: httpresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.791Z
estimatedTokens: 2334
namespace: System
keywords: [HttpResponse, handle, HTTP, response, returned, Http, class., Usage, Example, getBody, getBodyAsBlob, getBodyDocument, getHeader, key, getHeaderKeys, getStatus, getStatusCode, getXmlStreamReader, setBody, body]
---

# HttpResponse Class

> Use the HttpResponse class to handle the HTTP response returned by the Http class.

**Namespace:** `System`

# HttpResponse Class

Use the HttpResponse class to handle the HTTP response returned by the Http class.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the XML classes or JSON Classes to parse XML or JSON content in the body of a response accessed by HttpResponse.

## Example

In the following getXmlStreamReader example, content is retrieved via an HTTP callout, then the XML is parsed using the XmlStreamReader class.

```

```

#### See Also

-   [*Apex Developer Guide*: JSON Support](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_json_overview.htm "Apex Developer Guide: JSON Support - HTML (New Window)")

-   [*Apex Developer Guide*: XML Support](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_xml_support.htm "Apex Developer Guide: XML Support - HTML (New Window)")


## HttpResponse Methods

The following are methods for HttpResponse. All are instance methods.

-   **[getBody()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getBody)**
    Retrieves the body returned in the response.
-   **[getBodyAsBlob()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getBodyAsBlob)**
    Retrieves the body returned in the response as a Blob.
-   **[getBodyDocument()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getBodyDocument)**
    Retrieves the body returned in the response as a DOM document.
-   **[getHeader(key)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getHeader)**
    Retrieves the contents of the response header.
-   **[getHeaderKeys()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getHeaderKeys)**
    Retrieves an array of header keys returned in the response.
-   **[getStatus()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getStatus)**
    Retrieves the status message returned for the response.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getStatusCode)**
    Retrieves the value of the status code returned in the response.
-   **[getXmlStreamReader()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_getXmlStreamReader)**
    Returns an XmlStreamReader that parses the body of the callout response.
-   **[setBody(body)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_setBody)**
    Specifies the body returned in the response.
-   **[setBodyAsBlob(body)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_setBodyAsBlob)**
    Specifies the body returned in the response using a Blob.
-   **[setHeader(key, value)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_setHeader)**
    Specifies the contents of the response header.
-   **[setStatus(status)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_setStatus)**
    Specifies the status message returned in the response.
-   **[setStatusCode(statusCode)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_setStatusCode)**
    Specifies the value of the status code returned in the response.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_toString)**
    Returns the status message and status code returned in the response, for example:

### getBody()

Retrieves the body returned in the response.

#### Signature

public String getBody()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Limit 6 MB for synchronous Apex or 12 MB for asynchronous Apex. The HTTP request and response sizes count towards the total heap size.

### getBodyAsBlob()

Retrieves the body returned in the response as a Blob.

#### Signature

public Blob getBodyAsBlob()

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

Limit 6 MB for synchronous Apex or 12 MB for asynchronous Apex. The HTTP request and response sizes count towards the total heap size.

### getBodyDocument()

Retrieves the body returned in the response as a DOM document.

#### Signature

public Dom.Document getBodyDocument()

#### Return Value

Type: Dom.Document

#### Example

Use it as a shortcut for:

```

```

### getHeader(key)

Retrieves the contents of the response header.

#### Signature

public String getHeader(String key)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getHeaderKeys()

Retrieves an array of header keys returned in the response.

#### Signature

public String\[\] getHeaderKeys()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

### getStatus()

Retrieves the status message returned for the response.

#### Signature

public String getStatus()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStatusCode()

Retrieves the value of the status code returned in the response.

#### Signature

public Integer getStatusCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getXmlStreamReader()

Returns an XmlStreamReader that parses the body of the callout response.

#### Signature

public XmlStreamReader getXmlStreamReader()

#### Return Value

Type: [System.XmlStreamReader](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_classes_xml_XmlStream_reader "The XmlStreamReader class provides methods for forward, read-only access to XML data. You can pull data from XML or skip unwanted events. You can parse nested XML content that’s up to 50 nodes deep.")

#### Usage

Use it as a shortcut for:

```

```

### setBody(body)

Specifies the body returned in the response.

#### Signature

public Void setBody(String body)

#### Parameters

body

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setBodyAsBlob(body)

Specifies the body returned in the response using a Blob.

#### Signature

public Void setBodyAsBlob(Blob body)

#### Parameters

body

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: Void

### setHeader(key, value)

Specifies the contents of the response header.

#### Signature

public Void setHeader(String key, String value)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setStatus(status)

Specifies the status message returned in the response.

#### Signature

public Void setStatus(String status)

#### Parameters

status

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setStatusCode(statusCode)

Specifies the value of the status code returned in the response.

#### Signature

public Void setStatusCode(Integer statusCode)

#### Parameters

statusCode

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### toString()

Returns the status message and status code returned in the response, for example:

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

## Code Examples

```apex
public with sharing class ReaderFromCalloutSample {
    public void getAndParse() {
 
        // Get the XML document from the endpoint
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(URL.getOrgDomainUrl().toExternalForm() + '/services/data');
        req.setMethod('GET');
        req.setHeader('Accept', 'application/xml');
        HttpResponse res = http.send(req);

        // Log the XML content
        System.debug(res.getBody());
 
        // Generate the HTTP response as an XML stream
        XmlStreamReader reader = res.getXmlStreamReader();
 
        // Read through the XML
        while(reader.hasNext()) {
            System.debug('Event Type:' + reader.getEventType());
            if (reader.getEventType() == XmlTag.START_ELEMENT) {
            System.debug(reader.getLocalName());
            }
        reader.next();
        }
 
  }
}
```

```
String xml = httpResponse.getBody();
Dom.Document domDoc = new Dom.Document(xml);
```

```
String xml = httpResponse.getBody();
XmlStreamReader xsr = new XmlStreamReader(xml);
```

```
Status=OK, StatusCode=200
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- getBody() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getBodyAsBlob() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getBodyDocument() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getHeader(key) (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getHeaderKeys() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getStatus() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getStatusCode() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- getXmlStreamReader() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- setBody(body) (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
