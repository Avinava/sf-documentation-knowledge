---
title: "getBusinessObjectives(webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary)"
domain: apex-reference
topic: getbusinessobjectiveswebstoreid-channelid-kpiname-includerecsummary-includeinsig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.142Z
keywords: [getBusinessObjectives, webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary, Get, business, objectives, goals, webstore., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getBusinessObjectives(webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary)

> Get business objectives, or goals, for a webstore.

### getBusinessObjectives(webstoreId, channelId, kpiName, includeRecSummary, includeInsightSummary)

Get business objectives, or goals, for a webstore.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BusinessObjectivesSummaryOutputRepresentation getBusinessObjectives(String webstoreId, String channelId, String kpiName, Boolean includeRecSummary, Boolean includeInsightSummary)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

kpiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the key performance indicator (KPI).

includeRecSummary

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include a summary of recommended actions in the response.

includeInsightSummary

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include insight summary information in the response.

#### Return Value

Type: [ConnectApi.BusinessObjectivesSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_business_objectives_summary_output.htm "List of summaries for business objectives, or goals.")