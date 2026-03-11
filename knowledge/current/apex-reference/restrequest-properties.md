---
title: "RestRequest Properties"
domain: apex-reference
topic: restrequest-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.552Z
keywords: [RestRequest, Properties, Returns, headers, received, request., Note, Signature, Property, Value, httpMethod, params, remoteAddress, requestBody, Usage, requestURI, Example, resourcePath]
---

# RestRequest Properties

> Returns the headers that are received by the request.

## RestRequest Properties

The following are properties for RestRequest.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

While the RestRequest List and Map properties are read-only, their contents are read-write. You can modify them by calling the collection methods directly or you can use of the associated RestRequest methods shown in the previous table.

-   **[headers](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_headers)**  
    Returns the headers that are received by the request.
-   **[httpMethod](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_httpMethod)**  
    Returns one of the supported HTTP request methods.
-   **[params](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_params)**  
    Returns the parameters that are received by the request.
-   **[remoteAddress](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_remoteAddress)**  
    Returns the IP address of the client making the request.
-   **[requestBody](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_requestBody)**  
    Returns or sets the body of the request.
-   **[requestURI](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_requestUri)**  
    Returns or sets everything after the host in the HTTP request string.
-   **[resourcePath](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_resourcePath)**  
    Returns the REST resource path for the request.

### headers

Returns the headers that are received by the request.

#### Signature

public Map<String, String\> headers {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### httpMethod

Returns one of the supported HTTP request methods.

#### Signature

public String httpMethod {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible values returned:

-   DELETE
-   GET
-   HEAD
-   PATCH
-   POST
-   PUT

### params

Returns the parameters that are received by the request.

#### Signature

public Map <String, String\> params {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### remoteAddress

Returns the IP address of the client making the request.

#### Signature

public String remoteAddress {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### requestBody

Returns or sets the body of the request.

#### Signature

public Blob requestBody {get; set;}

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

If the Apex method has no parameters, then Apex REST copies the HTTP request body into the RestRequest.requestBody property. If there are parameters, then Apex REST attempts to deserialize the data into those parameters and the data won't be deserialized into the RestRequest.requestBody property.

### requestURI

Returns or sets everything after the host in the HTTP request string.

#### Signature

public String requestURI {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

For example, if the request string is https://instance.salesforce.com/services/apexrest/Account/ then the requestURI is /Account/.

### resourcePath

Returns the REST resource path for the request.

#### Signature

public String resourcePath {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

For example, if the Apex REST class defines a urlMapping of /MyResource/\*, the resourcePath property returns /services/apexrest/MyResource/\*.