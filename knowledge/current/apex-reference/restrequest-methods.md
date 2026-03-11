---
title: "RestRequest Methods"
domain: apex-reference
topic: restrequest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.552Z
keywords: [RestRequest, Methods, Adds, header, request, map, Apex, test., Note, addHeader, name, value, Signature, Parameters, Return, Value, Usage, addParameter]
---

# RestRequest Methods

> Adds a header to the request header map in an Apex test.

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