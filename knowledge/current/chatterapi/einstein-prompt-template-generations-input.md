---
title: "Einstein Prompt Template Generations Input"
domain: chatterapi
topic: einstein-prompt-template-generations-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.541Z
estimatedTokens: 339
keywords: [Einstein, Prompt, Template, Generations, Input, LLM, provider, generation]
---

# Einstein Prompt Template Generations Input

> Prompt template input parameters and LLM provider to use for generation.

# Einstein Prompt Template Generations Input

Prompt template input parameters and LLM provider to use for generation.

Root XML tag

EinsteinPromptTemplateGenerationsInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Config | EinsteinLlm​Additional​ConfigInput | Configuration information for the LLM provider. | Required | 60.0 |
| citationMode | String | Mode of citations for the specified prompt template. Valid values are:post_generation—Citations are generated after the generated response for the specified prompt template.off—Citations aren't generated for the specified prompt template. | Optional | 62.0 |
| inputParams | Map<String, Wrapped Value> | Parameters and values to resolve the specified prompt template. | Required | 60.0 |
| isPreview | Boolean | Specifies whether to only resolve the prompt template (true) or to resolve the prompt template and generate an LLM response (false). | Required | 60.0 |
| outputLanguage | String | Language code for the language to generate the LLM response in. See Supported Languages in Prompt Template Responses. | Optional | 61.0 |
| tags | Wrapped Value | Map of wrapped values, such as free-form user feedback, that can be used to resolve a specified prompt template. | Optional | 62.0 |

## Code Examples

```
{
  "isPreview": false,
  "inputParams": {
    "valueMap": {
      "Input:String1": {
        "value": "Value of String1"
      },
       "Input:String2": {
        "value": "Value of String2"
      },
      "Input:Account": {
        "value": {
          "id": "001SB000004nerfYAA"
        }
      }
    }
  },
  "additionalConfig": {
    "applicationName": "PromptTemplateGenerationsInvocable"
  }
}
```

## Related Topics

- EinsteinLlm​Additional​ConfigInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_einstein_llm_additional_config_input.htm)
- Wrapped Value (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_wrapped_valu.htm)
