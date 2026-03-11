---
title: "updateCalculatedInsight(apiName, input)"
domain: apex-reference
topic: updatecalculatedinsightapiname-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.024Z
keywords: [updateCalculatedInsight, apiName, input, Update, calculated, insight., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateCalculatedInsight(apiName, input)

> Update a calculated insight.

### updateCalculatedInsight(apiName, input)

Update a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightOutput updateCalculatedInsight(String apiName, ConnectApi.CdpCalculatedInsightInput input)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to update.

input

Type: [ConnectApi.CdpCalculatedInsightInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_calculated_insight.htm "Input representation for a calculated insight.")

Input representation for a calculated insight.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm "Calculated insight.")