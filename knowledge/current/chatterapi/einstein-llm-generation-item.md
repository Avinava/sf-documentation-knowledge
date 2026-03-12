---
title: "Einstein LLM Generation Item"
domain: chatterapi
topic: einstein-llm-generation-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.345Z
estimatedTokens: 193
keywords: [Einstein, LLM, Generation, Item, Generated, provider]
---

# Einstein LLM Generation Item

> Generated response from the LLM provider.

# Einstein LLM Generation Item

Generated response from the LLM provider.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentQuality​Representation | Einstein LLM Generations Content Quality | Specifies whether the generated response contains toxic language (true) or not (false). | Medium, 61.0 | 61.0 |
| parameters | String | Parameter values for the LLM provider. | Medium, 60.0 | 60.0 |
| responseId | String | ID of the generated response. | Medium, 60.0 | 60.0 |
| safetyScore​Representation | Einstein LLM Generations Safety Score | Safety score information related to the generated response. | Medium, 60.0 | 60.0 |
| text | String | Text of generated response. | Small, 60.0 | 60.0 |

## Related Topics

- Einstein LLM
                  Generations Content Quality (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_llm_generations_content_quality.htm)
- Einstein LLM Generations Safety Score (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_llm_generations_safety_score.htm)
