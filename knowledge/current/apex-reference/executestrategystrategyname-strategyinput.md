---
title: "executeStrategy(strategyName, strategyInput)"
domain: apex-reference
topic: executestrategystrategyname-strategyinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [executeStrategy, strategyName, strategyInput, Execute, strategy, input, class., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# executeStrategy(strategyName, strategyInput)

> Execute a strategy using an input class.

### executeStrategy(strategyName, strategyInput)

Execute a strategy using an input class.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NBARecommendations executeStrategy(String strategyName, ConnectApi.NBAStrategyInput strategyInput)

#### Parameters

strategyName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the strategy.

strategyInput

Type: [ConnectApi.NBAStrategyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_n_b_a_strategy_execution.htm#apex_connectapi_input_n_b_a_strategy_execution "A recommendation strategy.")

A ConnectApi.NBAStrategyInput body.

#### Return Value

Type: [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm#apex_connectapi_output_n_b_a_recommendations "Recommendations returned by a recommendation strategy.")