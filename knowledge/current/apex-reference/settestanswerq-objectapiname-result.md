---
title: "setTestAnswer(q, objectApiName, result)"
domain: apex-reference
topic: settestanswerq-objectapiname-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [setTestAnswer, objectApiName, result, Registers, ConnectApi.SearchAnswer, object, returned, matching, answer, method, called, test, context., same, parameters, receive, exception., API, Version, Signature]
---

# setTestAnswer(q, objectApiName, result)

> Registers a ConnectApi.SearchAnswer object to
    be returned when the matching answer(q, objectApiName)
    method is called in a test context. Use the method with the same parameters or you receive an
    exception.

### setTestAnswer(q, objectApiName, result)

Registers a ConnectApi.SearchAnswer object to be returned when the matching answer(q, objectApiName) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

public static Void setTestAnswer(String q, String objectApiName, ConnectApi.SearchAnswer result)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Natural language query to search for in the org.

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the object.

result

Type: [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

Object containing test data.

#### Return Value

Type: Void