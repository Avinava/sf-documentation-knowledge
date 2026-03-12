---
title: "ConnectApi.CdpMlPredictSettingsInput"
domain: apex-reference
topic: connectapicdpmlpredictsettingsinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.846Z
estimatedTokens: 233
keywords: [ConnectApi.CdpMlPredictSettingsInput, Input, representation, model, settings, generate, prediction]
---

# ConnectApi.CdpMlPredictSettingsInput

> Input representation for the model settings used to generate a prediction.

# ConnectApi.CdpMlPredictSettingsInput

Input representation for the model settings used to generate a prediction.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregateFunctions | List<String> | List of aggregate functions for the prediction. | Optional | 59.0 |
| maxPrescriptions | Integer | Maximum number of recommendations. The default value is -1 (unlimited) and the allowed range is -1 through 200. | Optional | 59.0 |
| maxTopFactors | Integer | Maximum number of top factors. The default value is 0 and the allowed range is 0 through 3. | Optional | 59.0 |
| prescriptionImpactPercentage | Integer | The minimum impact percentage of the prescriptions to return. Only prescriptions whose impact percentage is greater than or equal to the specified percentage are returned. The default value is 0 and the allowed range is 0 through 100. | Optional | 59.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
