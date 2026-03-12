---
title: "ConnectApi.​EinsteinPrompt​TemplateMask​Content​Representation"
domain: apex-reference
topic: connectapieinsteinprompttemplatemaskcontentrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.143Z
estimatedTokens: 150
keywords: [ConnectApi.​EinsteinPrompt​TemplateMask​Content​Representation, Generated, response, masked, data, masking, information, prompt, template.]
---

# ConnectApi.​EinsteinPrompt​TemplateMask​Content​Representation

> Generated response with masked data and masking information for a prompt
    template.

# ConnectApi.​EinsteinPrompt​TemplateMask​Content​Representation

Generated response with masked data and masking information for a prompt template.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| content | String | Text of generated response or resolved prompt template with masked data. | 61.0 |
| moderation​Settings | ConnectApi.​EinsteinPrompt​TemplateMaskSettings​Representation | Data masking settings for the specified prompt template. | 61.0 |
| role | String | Role in the Salesforce role hierarchy of the user executing the prompt template. | 61.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​EinsteinPrompt​TemplateMaskSettings​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_einstein_prompt_template_mask_settings.htm)
