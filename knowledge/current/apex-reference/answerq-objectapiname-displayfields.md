---
title: "answer(q, objectApiName, displayFields)"
domain: apex-reference
topic: answerq-objectapiname-displayfields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [answer, objectApiName, displayFields, Search, object, natural, language, query, display, fields., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# answer(q, objectApiName, displayFields)

> Search an object using a natural language query and display fields.

### answer(q, objectApiName, displayFields)

Search an object using a natural language query and display fields.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SearchAnswer answer(String q, String objectApiName, List<String\> displayFields)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Natural language query to search for in the org.

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the object.

displayFields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of fields to display and return in the search answer. The default is the citation field.

#### Return Value

Type: [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.