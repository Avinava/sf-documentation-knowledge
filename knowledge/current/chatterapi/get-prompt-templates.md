---
title: "Get Prompt Templates"
domain: chatterapi
topic: get-prompt-templates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.478Z
estimatedTokens: 434
keywords: [Prompt, Templates, filters]
---

# Get Prompt Templates

> Get a list of prompt templates based on specified filters.

# Get Prompt Templates

Get a list of prompt templates based on specified filters.

Resource

```

```

Available version

62.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | Comma-separated list of prompt template record fields to return, such as createdDate. If unspecified, all fields are returned. | Optional | 62.0 |
| isActive | Boolean | Specifies whether to return active prompt templates only. The default is false. | Optional | 62.0 |
| offset | Integer | Used for pagination. Number of rows to skip between returned prompt template records. The default value is 0. | Optional | 62.0 |
| pageLimit | Integer | Used for pagination. Maximum number of prompt template records returned per page. The default value is 50. | Optional | 62.0 |
| query | String | User-entered search string. If unspecified, all prompt template records are returned. | Optional | 62.0 |
| relatedEntity | String | Related entity to filter records by, such as Contact. If unspecified, all records with all related entities are returned. | Optional | 62.0 |
| sortBy | String | Field to sort order the returned prompt template records by, such as createdDate. If unspecified, records are returned in the order they’re retrieved. | Optional | 62.0 |
| type | String | Prompt template type to filter records by, such as einstein_gpt__salesEmail. If unspecified, records of all types are returned. | Optional | 62.0 |

Response body for GET

[Einstein Prompt Record Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_prompt_record_collection_output.htm "List of prompt template records.")

## Code Examples

```
/einstein/prompt-templates
```

## Related Topics

- Einstein Prompt Record Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_einstein_prompt_record_collection_output.htm)
