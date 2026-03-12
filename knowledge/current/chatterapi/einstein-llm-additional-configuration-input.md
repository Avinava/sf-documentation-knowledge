---
title: "Einstein LLM Additional Configuration Input"
domain: chatterapi
topic: einstein-llm-additional-configuration-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.535Z
estimatedTokens: 455
keywords: [Einstein, LLM, Additional, Configuration, Input, provider]
---

# Einstein LLM Additional Configuration Input

> Additional configuration information for the LLM provider.

# Einstein LLM Additional Configuration Input

Additional configuration information for the LLM provider.

Root XML tag

EinsteinLlmAdditionalConfigInputRepresentation

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Parameters | Map<String, Wrapped Value> | Map of parameters and values for the LLM provider. | Optional | 60.0 |
| application​Name | String | Name of the application. | Required | 60.0 |
| enable​PiiMasking | Boolean | Specifies whether to mask personally identifiable information (PII) (true) or not (false). | Optional | 60.0 |
| frequency​Penalty | Double | Use to reduce the repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they already appeared in the prompt or in prior generations. Minimum value is 0.0. Maximum value is 1.0. | Optional | 60.0 |
| maxTokens | Integer | Maximum number of tokens to generate. | Optional | 60.0 |
| num​Generations | Integer | Number of generation requests to send to the LLM provider. | Optional | 60.0 |
| presence​Penalty | Double | Use to reduce the repetitiveness of generated tokens. This value is similar to frequency penalty, except that this penalty is applied equally to all tokens that already appeared, regardless of their exact frequencies. Minimum value is 0.0, and maximum value is 1.0. | Optional | 60.0 |
| stopSequences | String[] | Generated text is cut at the end of the earliest occurrence of a stop sequence. | Optional | 60.0 |
| temperature | Double | Sampling temperature to use. Higher values mean the model takes more risks. Lower temperatures mean that generations are less random. Minimum value is 0.0, and maximum value is 1.0 | Optional | 60.0 |

## Related Topics

- Wrapped Value (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_wrapped_valu.htm)
