---
title: "answer(q)"
domain: apex-reference
topic: answerq
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [answer, Search, objects, natural, language, query, return, answer., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# answer(q)

> Search objects using a natural language query and return an answer.

### answer(q)

Search objects using a natural language query and return an answer.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SearchAnswer answer(String q)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Natural language query to search for in the org.

#### Return Value

Type: [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.