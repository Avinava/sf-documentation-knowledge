---
title: "RestResponse Class"
domain: apex-reference
topic: restresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.996Z
estimatedTokens: 1640
namespace: System
keywords: [RestResponse, pass, data, Apex, RESTful, Web, service, HTTP, Usage, responseBody, statusCode, Status, Codes, addHeader]
---

# RestResponse Class

> Represents an object used to pass data from an Apex
            RESTful Web service method to an HTTP response.

**Namespace:** `System`

# RestResponse Class

Represents an object used to pass data from an Apex RESTful Web service method to an HTTP response.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the System.RestResponse class to pass response data from an Apex RESTful web service method that is defined using one of the [REST annotations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotations_rest.htm).

-   **[RestResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_constructors)**

-   **[RestResponse Properties](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_Properties)**

-   **[RestResponse Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_methods)**


## RestResponse Constructors

The following are constructors for RestResponse.

-   **[RestResponse()](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_ctor)**
    Creates a new instance of the System.RestResponse class.

### RestResponse()

Creates a new instance of the System.RestResponse class.

#### Signature

public RestResponse()

## RestResponse Properties

The following are properties for RestResponse.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

While the RestResponse List and Map properties are read-only, their contents are read-write. You can modify them by calling the collection methods directly or you can use of the associated RestResponse methods shown in the previous table.

-   **[responseBody](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestRequest_responseBody)**
    Returns or sets the body of the response.
-   **[headers](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_headers)**
    Returns the headers to be sent to the response.
-   **[statusCode](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_statusCode)**
    Returns or sets the response status code.

### responseBody

Returns or sets the body of the response.

#### Signature

public Blob responseBody {get; set;}

#### Property Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Usage

The response is either the serialized form of the method return value or it's the value of the responseBody property based on the following rules:

-   If the method returns void, then Apex REST returns the response in the responseBody property.
-   If the method returns a value, then Apex REST serializes the return value as the response. If the return value contains fields with null value, those fields are not serialized in the response.

### headers

Returns the headers to be sent to the response.

#### Signature

public Map<String, String\> headers {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### statusCode

Returns or sets the response status code.

#### Signature

public Integer statuscode {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Status Codes

The following are valid response status codes. The status code is returned by the RestResponse.statusCode property.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If you set the RestResponse.statusCode property to a value that's not listed in the table, then an HTTP status of 500 is returned with the error message “Invalid status code for HTTP response: nnn” where nnn is the invalid status code value.

| Status Code | Description |
| --- | --- |
| 200 | OK |
| 201 | CREATED |
| 202 | ACCEPTED |
| 204 | NO_CONTENT |
| 206 | PARTIAL_CONTENT |
| 300 | MULTIPLE_CHOICES |
| 301 | MOVED_PERMANENTLY |
| 302 | FOUND |
| 304 | NOT_MODIFIED |
| 400 | BAD_REQUEST |
| 401 | UNAUTHORIZED |
| 403 | FORBIDDEN |
| 404 | NOT_FOUND |
| 405 | METHOD_NOT_ALLOWED |
| 406 | NOT_ACCEPTABLE |
| 409 | CONFLICT |
| 410 | GONE |
| 412 | PRECONDITION_FAILED |
| 413 | REQUEST_ENTITY_TOO_LARGE |
| 414 | REQUEST_URI_TOO_LARGE |
| 415 | UNSUPPORTED_MEDIA_TYPE |
| 417 | EXPECTATION_FAILED |
| 500 | INTERNAL_SERVER_ERROR |
| 503 | SERVER_UNAVAILABLE |

## RestResponse Methods

The following are instance methods for RestResponse.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

At runtime, you typically don't need to add a header to the RestResponse object because it's automatically deserialized into the corresponding properties. The following methods are intended for unit testing Apex REST classes. You can use them to add header or parameter values to the RestRequest object without having to recreate the REST method call.

-   **[addHeader(name, value)](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_addHeader)**
    Adds a header to the response header map.

### addHeader(name, value)

Adds a header to the response header map.

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

The following headers aren't allowed:

-   cookie
-   set-cookie
-   set-cookie2
-   content-length
-   authorization
-   Header names that aren't RFC 7230 compliant

If any of these headers are used, an Apex exception is thrown.

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- RestResponse Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- RestResponse Properties (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- RestResponse Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- RestResponse() (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- responseBody (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- headers (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- statusCode (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
- Blob (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
