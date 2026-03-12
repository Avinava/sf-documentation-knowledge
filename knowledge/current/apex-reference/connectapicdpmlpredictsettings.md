---
title: "ConnectApi.CdpMlPredictSettings"
domain: apex-reference
topic: connectapicdpmlpredictsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.511Z
estimatedTokens: 163
keywords: [ConnectApi.CdpMlPredictSettings, Prediction, settings.]
---

# ConnectApi.CdpMlPredictSettings

> Prediction settings.

# ConnectApi.CdpMlPredictSettings

Prediction settings.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aggregateFunctions | List<String> | List of aggregate functions. | 59.0 |
| maxPrescriptions | Integer | Maximum number of recommendations. The default value is -1 (unlimited) and the allowed range is -1 through 200. | 59.0 |
| maxTopFactors | Integer | Maximum number of top factors. The default value is 0 and the allowed range is 0 through 3. | 59.0 |
| prescriptionImpactPercentage | Integer | Impact percentage of prescriptions. The default value is 0 and the range of values is 0 through 100. | 59.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
