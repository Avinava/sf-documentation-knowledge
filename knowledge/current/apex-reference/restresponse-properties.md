---
title: "RestResponse Properties"
domain: apex-reference
topic: restresponse-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.562Z
keywords: [RestResponse, Properties, Returns, sets, body, response., Note, responseBody, Signature, Property, Value, Usage, headers, statusCode, Status, Codes]
---

# RestResponse Properties

> Returns or sets the body of the response.

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