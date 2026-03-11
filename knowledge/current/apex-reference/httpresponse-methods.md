---
title: "HttpResponse Methods"
domain: apex-reference
topic: httpresponse-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.486Z
keywords: [HttpResponse, Methods, Retrieves, body, returned, response., getBody, Signature, Return, Value, Usage, getBodyAsBlob, getBodyDocument, Example, getHeader, key, Parameters, getHeaderKeys, getStatus, getStatusCode]
---

# HttpResponse Methods

> Retrieves the body returned in the response.

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