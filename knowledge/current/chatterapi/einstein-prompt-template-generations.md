---
title: "Einstein Prompt Template Generations"
domain: chatterapi
topic: einstein-prompt-template-generations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.287Z
estimatedTokens: 509
keywords: [Einstein, Prompt, Template, Generations, Generates, input, Generated, LLM, provider, resolved, text]
---

# Einstein Prompt Template Generations

> Generated response from the specified LLM provider and resolved prompt template
    text.

# Einstein Prompt Template Generations

Generated response from the specified LLM provider and resolved prompt template text.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| citations | Einstein LLM Generation Citation | Source information associated with the generated responses. | Medium, 62.0 | 62.0 |
| fileData | Einstein Prompt Template Attachment[] | File data of the input files used in generation. | Medium, 63.0 | 63.0 |
| generation​Errors | Einstein Prompt Template Generations Error[] | List of errors associated with the generated responses, if any. | Medium, 60.0 | 60.0 |
| generations | Einstein LLM Generation Item[] | List of generated responses from the LLM provider. | Small, 60.0 | 60.0 |
| isSummarized | Boolean | Specifies whether the generated response contains summarized text (true) or not (false). | Medium, 61.0 | 61.0 |
| parameters | Wrapped Map | Map of parameters and values for the LLM provider parameters. | Medium, 60.0 | 60.0 |
| prompt | String | Prompt template text with resolved inputs. | Medium, 60.0 | 60.0 |
| promptTemplate​DevName | String | Developer name or ID of the prompt template record. | Medium, 60.0 | 60.0 |
| requestId | String | ID of the generation request sent to the LLM provider. | Small, 60.0 | 60.0 |
| requestMessages | Einstein Prompt Template Mask Content Representation | List of resolved prompt templates with masked data and masking information. | Medium, 61.0 | 61.0 |
| responseMessages | Einstein Prompt Template Mask Content Representation | List of generated responses with masked data and masking information for the specified prompt template. | Medium, 61.0 | 61.0 |
| slotsMasking​Information | Einstein Prompt Template Mask Data Representation | List of original and placeholder values of the masked data. | Medium, 61.0 | 61.0 |

#### See Also

-   [Einstein Prompt Template Generations](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_prompt_template.htm "Generates a response based on the specified prompt template and input parameters.")

## Code Examples

```
/einstein/prompt-templates/promptTemplateDevName/generations
```

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

- Einstein Prompt Template Generations Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_einstein_prompt_template_generations_input.htm)
- EinsteinLlm​Additional​ConfigInput (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_einstein_llm_additional_config_input.htm)
- Wrapped Value (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_wrapped_valu.htm)
- Einstein Prompt Template
              Generations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_prompt_template_generations.htm)
- Einstein LLM Generation Citation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_llm_generation_citation.htm)
- Einstein Prompt Template Attachment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_prompt_template_attachment.htm)
- Einstein Prompt Template Generations Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_prompt_template_generations_error.htm)
- Einstein LLM Generation
                  Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_llm_generation_item.htm)
- Wrapped Map (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wrapped_ma.htm)
- Einstein Prompt Template Mask Content Representation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_prompt_template_mask_content.htm)
