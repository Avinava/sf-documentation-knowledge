---
title: "RestRequest Class"
domain: apex-reference
topic: restrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.935Z
estimatedTokens: 2310
namespace: System
keywords: [RestRequest, System.RestRequest, access, pass, request, data, RESTful, Apex, method., Usage, Example, REST, Annotated, Note, headers, httpMethod, params, remoteAddress, requestBody, requestURI]
---

# RestRequest Class

> Use the System.RestRequest class to access and pass request data in a RESTful Apex
            method.

**Namespace:** `System`

# RestRequest Class

Use the System.RestRequest class to access and pass request data in a RESTful Apex method.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

An Apex RESTful Web service method is defined using one of the REST annotations. For more information about Apex RESTful Web service, see [Exposing Apex Classes as REST Web Services](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_rest.htm).

## Example: An Apex Class with REST Annotated Methods

The following example shows you how to implement the Apex REST API in Apex. This class exposes three methods that each handle a different HTTP request: GET, DELETE, and POST. You can call these annotated methods from a client by issuing HTTP requests.

```

```

-   **[RestRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_constructors)**

-   **[RestRequest Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_Properties)**

-   **[RestRequest Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_methods)**


## RestRequest Constructors

The following are constructors for RestRequest.

-   **[RestRequest()](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_ctor)**
    Creates a new instance of the System.RestRequest class.

### RestRequest()

Creates a new instance of the System.RestRequest class.

#### Signature

public RestRequest()

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

## RestRequest Methods

The following are methods for RestRequest. All are instance methods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

At runtime, you typically don't need to add a header or parameter to the RestRequest object because they are automatically deserialized into the corresponding properties. The following methods are intended for unit testing Apex REST classes. You can use them to add header or parameter values to the RestRequest object without having to recreate the REST method call.

-   **[addHeader(name, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_addHeader)**
    Adds a header to the request header map in an Apex test.
-   **[addParameter(name, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_System_RestRequest_addParameter)**
    Adds a parameter to the request params map in an Apex test.

### addHeader(name, value)

Adds a header to the request header map in an Apex test.

#### Signature

public Void addHeader(String name, String value)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

This method is intended for unit testing of Apex REST classes.

The following headers aren't allowed:

-   cookie
-   set-cookie
-   set-cookie2
-   content-length
-   authorization

If any of these headers are used, an Apex exception is thrown.

### addParameter(name, value)

Adds a parameter to the request params map in an Apex test.

#### Signature

public Void addParameter(String name, String value)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

#### Usage

This method is intended for unit testing of Apex REST classes.

## Code Examples

```apex
@RestResource(urlMapping='/Account/*')
global with sharing class MyRestResource {

    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account account = [SELECT Id FROM Account WHERE Id = :accountId];
        delete account;
    }
  
    @HttpGet
    global static Account doGet() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        return result;
    }
  
  @HttpPost
    global static String doPost(String name,
        String phone, String website) {
        Account account = new Account();
        account.Name = name;
        account.phone = phone;
        account.website = website;
        insert account;
        return account.Id;
    }
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- RestRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- RestRequest Properties (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- RestRequest Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- RestRequest() (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- headers (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- httpMethod (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- params (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- remoteAddress (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- requestBody (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
