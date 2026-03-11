---
title: "patchBusinessObjective(busObjRecommendationInput)"
domain: apex-reference
topic: patchbusinessobjectivebusobjrecommendationinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.142Z
keywords: [patchBusinessObjective, busObjRecommendationInput, Partially, update, business, objective, goal., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# patchBusinessObjective(busObjRecommendationInput)

> Partially update a business objective, or goal.

### patchBusinessObjective(busObjRecommendationInput)

Partially update a business objective, or goal.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BusObjSummaryOutputRepresentation patchBusinessObjective(ConnectApi.BusinessObjectivesInputRepresentation busObjRecommendationInput)

#### Parameters

busObjRecommendationInput

Type: [ConnectApi.BusinessObjectivesInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_business_objective.htm "A business objective, or goal, and insights associated with it.")

A ConnectApi.BusinessObjectivesInputRepresentation object representing the business objective or objectives to update.

#### Return Value

Type: [ConnectApi.BusObjSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bus_obj_summary_output.htm "Summary of a business objective, or goal.")