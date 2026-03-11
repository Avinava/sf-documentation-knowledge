---
title: "patchRecommendations(busObjRecommendationInput)"
domain: apex-reference
topic: patchrecommendationsbusobjrecommendationinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.142Z
keywords: [patchRecommendations, busObjRecommendationInput, Partially, update, recommended, action, associated, business, objective, goal., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# patchRecommendations(busObjRecommendationInput)

> Partially update a recommended action associated with a business objective, or
    goal.

### patchRecommendations(busObjRecommendationInput)

Partially update a recommended action associated with a business objective, or goal.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecRepresentation patchRecommendations(ConnectApi.BusObjRecommendationInputRepresentation busObjRecommendationInput)

#### Parameters

busObjRecommendationInput

Type: [ConnectApi.BusObjRecommendationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bus_obj_recommendation.htm "Recommended action for a business objective, or goal.")

A ConnectApi.BusObjRecommendationInputRepresentation object representing the recommended action to update.

#### Return Value

Type: [ConnectApi.RecRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec.htm "Recommended action.")