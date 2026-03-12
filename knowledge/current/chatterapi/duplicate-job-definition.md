---
title: "Duplicate Job Definition"
domain: chatterapi
topic: duplicate-job-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.926Z
estimatedTokens: 73
keywords: [Duplicate, Job, Definition]
---

# Duplicate Job Definition

> A duplicate job definition.

# Duplicate Job Definition

A duplicate job definition.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created the job definition. | Small, 42.0 | 42.0 |
| createdDate | String | Date when the job definition was created in ISO 8601 format. | Small, 42.0 | 42.0 |
| developerName | String | Developer name of the job definition. | Small, 42.0 | 42.0 |
| jobDefinitionId | String | ID of the job definition. | Small, 42.0 | 42.0 |
| lastModified​ById | String | ID of the user who last modified the job definition. | Small, 42.0 | 42.0 |
| lastModified​Date | String | Date when the job definition was last modified. | Small, 42.0 | 42.0 |
| masterLabel | String | Label of the job definition. | Small, 42.0 | 42.0 |
| matchingRuleIds | String[] | IDs of matching rules used by the job definition. | Small, 42.0 | 42.0 |
| sobjectSubtype | String | Object subtype of the job definition. Values are:NonePersonAccount | Small, 42.0 | 42.0 |
| sobjectType | String | Object type of the job definition. | Small, 42.0 | 42.0 |

#### See Also

-   [Duplicate Job Definition Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_definition_collection.htm "A collection of job definitions.")

## Code Examples

```
/dedupe/job-definitions/jobDefinitionId
```

## Related Topics

- Duplicate Job Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_definition.htm)
- Duplicate Job Definition Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_duplicate_job_definition_collection.htm)
