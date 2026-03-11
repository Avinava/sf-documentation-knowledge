---
title: "getRecommendations(businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping)"
domain: apex-reference
topic: getrecommendationsbusinessobjectiveid-domain-channelid-externalname-state-second
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.142Z
keywords: [getRecommendations, businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping, Get, recommended, actions, business, objective, goal., API, Version, Requires, Chatter, Signature]
---

# getRecommendations(businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping)

> Get recommended actions for a business objective, or goal.

### getRecommendations(businessObjectiveId, domain, channelId, externalName, state, secondaryState, tertiaryState, grouping)

Get recommended actions for a business objective, or goal.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationsOutputRepresentation getRecommendations(String businessObjectiveId, String domain, String channelId, String externalName, String state, String secondaryState, String tertiaryState, String grouping)

#### Parameters

businessObjectiveId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the business objective.

domain

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Recommendation domain.

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

externalName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

External name of the recommended action.

state

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

State of the recommended action.

secondaryState

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Secondary state of the recommended action.

tertiaryState

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Tertiary state of the recommended action.

grouping

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Grouping associated with the recommended action. This is a free-form categorization field.

#### Return Value

Type: [ConnectApi.RecommendationsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendations_output.htm "List of recommended actions.")