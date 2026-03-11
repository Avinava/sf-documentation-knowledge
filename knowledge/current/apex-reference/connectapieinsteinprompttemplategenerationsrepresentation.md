---
title: "ConnectApi.​EinsteinPrompt​Template​Generations​Representation"
domain: apex-reference
topic: connectapieinsteinprompttemplategenerationsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.650Z
keywords: [ConnectApi.​EinsteinPrompt​Template​Generations​Representation]
---

# ConnectApi.​EinsteinPrompt​Template​Generations​Representation

# ConnectApi.​EinsteinPrompt​Template​Generations​Representation

Generated response from the LLM provider and resolved prompt template text.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| citations | ConnectApi.​EinsteinLlmGeneration​CitationOutput | Source information associated with the generated responses. | 62.0 |
| fileData | List<ConnectApi.​EinsteinPrompt​TemplateAttachment> | File data of the input files used in generation. | 63.0 |
| generationErrors | List<ConnectApi.​EinsteinPrompt​Template​GenerationsError> | List of errors associated with the generated responses, if any. | 60.0 |
| generations | List< ConnectApi.​EinsteinLlm​GenerationItem​Output> | List of generated responses from the LLM provider. | 60.0 |
| isSummarized | Boolean | Specifies whether the generated response contains summarized text (true) or not (false). | 61.0 |
| parameters | ConnectApi.​WrappedMapObject | Map of parameters and values for the LLM provider parameters. | 60.0 |
| prompt | String | Prompt template text with resolved inputs. | 60.0 |
| promptTemplate​DevName | String | Developer name or ID of the prompt template record. | 60.0 |
| requestId | String | ID of the generation request sent to the LLM provider. | 60.0 |
| requestMessages | List<ConnectApi.​​EinsteinPrompt​​TemplateMask​​Content​> | List of resolved prompt templates with masked data and masking information. | 61.0 |
| responseMessages | List<ConnectApi.​​EinsteinPrompt​​TemplateMask​​Content​> | List of generated responses with masked data and masking information for the specified prompt template. | 61.0 |
| slotsMasking​Information | List<ConnectApi.​​EinsteinPrompt​​TemplateMaskData> | List of original and placeholder values of the masked data. | 61.0 |