---
title: "answer(q, objectApiName)"
domain: apex-reference
topic: answerq-objectapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [answer, objectApiName, Search, object, natural, language, query, return, answer., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# answer(q, objectApiName)

> Search an object using a natural language query and return an answer.

### answer(q, objectApiName)

Search an object using a natural language query and return an answer.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SearchAnswer answer(String q, String objectApiName)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Natural language query to search for in the org.

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the object.

#### Return Value

Type: [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.