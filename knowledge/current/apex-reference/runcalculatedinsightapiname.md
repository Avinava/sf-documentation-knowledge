---
title: "runCalculatedInsight(apiName)"
domain: apex-reference
topic: runcalculatedinsightapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.024Z
keywords: [runCalculatedInsight, apiName, Run, calculated, insight., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# runCalculatedInsight(apiName)

> Run a calculated insight.

### runCalculatedInsight(apiName)

Run a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightStandardActionesponseRepresentation runCalculatedInsight(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to run.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightStandardActionResponseRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_action_run_response.htm "Response of the calculated insight run action.")