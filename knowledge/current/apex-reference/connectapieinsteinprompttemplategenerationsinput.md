---
title: "ConnectApi.​EinsteinPrompt​Template​GenerationsInput"
domain: apex-reference
topic: connectapieinsteinprompttemplategenerationsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.820Z
estimatedTokens: 324
keywords: [ConnectApi.​EinsteinPrompt​Template​GenerationsInput, Prompt, template, input, generation.]
---

# ConnectApi.​EinsteinPrompt​Template​GenerationsInput

> Prompt template input parameters to use for generation.

# ConnectApi.​EinsteinPrompt​Template​GenerationsInput

Prompt template input parameters to use for generation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Config | ConnectApi.​EinsteinLlm​Additional​ConfigInput | Configuration information for the LLM provider. | Required | 60.0 |
| citationMode | String | Mode of citations for the specified prompt template. Valid values are:post_generation—Citations are generated after the generated response for the specified prompt template.off—Citations aren't generated for the specified prompt template. | Optional | 62.0 |
| inputParams | Map<String, ConnectApi.WrappedValue> | Parameters and values to resolve the specified prompt template. | Required | 60.0 |
| isPreview | Boolean | Specifies whether to only resolve the prompt template (true) or to resolve the prompt template and generate an LLM response (false). | Required | 60.0 |
| outputLanguage | String | Language code for the language to generate the LLM response in. See Supported Languages in Prompt Template Responses. | Optional | 61.0 |
| tags | ConnectApi.WrappedValue | Map of wrapped values, such as free-form user feedback, that can be used to resolve a specified prompt template. | Optional | 62.0 |

## Related Topics

- ConnectApi.​EinsteinLlm​Additional​ConfigInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_einstein_llm_additional_config.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.WrappedValue (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wrapped_valu.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
