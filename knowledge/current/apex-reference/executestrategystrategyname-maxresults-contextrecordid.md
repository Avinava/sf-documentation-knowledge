---
title: "executeStrategy(strategyName, maxResults,
      contextRecordId)"
domain: apex-reference
topic: executestrategystrategyname-maxresults-contextrecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [executeStrategy, strategyName, maxResults, contextRecordId, Execute, strategy., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# executeStrategy(strategyName, maxResults,
      contextRecordId)

> Execute a strategy.

### executeStrategy(strategyName, maxResults, contextRecordId)

Execute a strategy.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NBARecommendations executeStrategy(String strategyName, Integer maxResults, String contextRecordId)

#### Parameters

strategyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the strategy.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of results. Valid values are from 1 to 25. The default is 3.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context record. For example, if the next best action is on a case detail page, the ID of the case.

#### Return Value

Type: [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm#apex_connectapi_output_n_b_a_recommendations "Recommendations returned by a recommendation strategy.")