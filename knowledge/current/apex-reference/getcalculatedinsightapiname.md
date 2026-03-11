---
title: "getCalculatedInsight(apiName)"
domain: apex-reference
topic: getcalculatedinsightapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.024Z
keywords: [getCalculatedInsight, apiName, Get, calculated, insight., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCalculatedInsight(apiName)

> Get a calculated insight.

### getCalculatedInsight(apiName)

Get a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightOutput getCalculatedInsight(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to get.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm "Calculated insight.")