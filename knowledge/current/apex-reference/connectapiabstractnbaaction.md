---
title: "ConnectApi.AbstractNBAAction"
domain: apex-reference
topic: connectapiabstractnbaaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.794Z
keywords: [ConnectApi.AbstractNBAAction, See]
---

# ConnectApi.AbstractNBAAction

# ConnectApi.AbstractNBAAction

A recommended action of recommendation strategy.

This class is abstract.

Superclass of [ConnectApi.NBAFlowAction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_flow_action.htm "A recommended flow.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| parameters | List<ConnectApi.NBAActionParameter> | List of parameters to pass to the action. | 45.0 |
| type | ConnectApi.​NBAActionType | Type of action. Values are:Flow—Automated process tool with multiple subtypes. | 45.0 |

#### See Also

-   [ConnectApi.NBARecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendation.htm "A recommendation returned by a recommendation strategy.")