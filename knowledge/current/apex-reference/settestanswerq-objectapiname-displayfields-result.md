---
title: "setTestAnswer(q, objectApiName, displayFields,
      result)"
domain: apex-reference
topic: settestanswerq-objectapiname-displayfields-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [setTestAnswer, objectApiName, displayFields, result, Registers, ConnectApi.SearchAnswer, object, returned, matching, answer, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestAnswer(q, objectApiName, displayFields,
      result)

> Registers a ConnectApi.SearchAnswer object to
    be returned when the matching answer(q, objectApiName,
      displayFields) method is called in a test context. Use the method with the same
    parameters or you receive an exception.

### setTestAnswer(q, objectApiName, displayFields, result)

Registers a ConnectApi.SearchAnswer object to be returned when the matching answer(q, objectApiName, displayFields) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

62.0

#### Signature

public static Void setTestAnswer(String q, String objectApiName, List<String\> displayFields, ConnectApi.SearchAnswer result)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Natural language query to search for in the org.

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the object.

displayFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of fields to display and return in the search results. By default, the fields displayed are defined by the search layout.

result

Type: [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

Object containing test data.

#### Return Value

Type: Void