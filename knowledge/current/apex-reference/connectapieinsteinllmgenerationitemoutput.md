---
title: "ConnectApi.​EinsteinLLM​GenerationItem​Output"
domain: apex-reference
topic: connectapieinsteinllmgenerationitemoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.631Z
keywords: [ConnectApi.​EinsteinLLM​GenerationItem​Output]
---

# ConnectApi.​EinsteinLLM​GenerationItem​Output

# ConnectApi.​EinsteinLLM​GenerationItem​Output

Generated response from the LLM provider.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contentQuality​Representation | ConnectApi.​EinsteinLlm​Generations​Content​Quality | Specifies whether the generated response contains toxic language (true) or not (false). | 61.0 |
| parameters | String | Parameter values for the LLM provider. | 60.0 |
| responseId | String | ID of the generated response. | 60.0 |
| safetyScore​Representation | ConnectApi.​EinsteinLlm​Generation​SafetyScore​Output | Safety score information related to the generated response. | 60.0 |
| text | String | Text of generated response. | 60.0 |