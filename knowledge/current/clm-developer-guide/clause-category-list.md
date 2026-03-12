---
title: "Clause Category List"
domain: clm-developer-guide
topic: clause-category-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.206Z
estimatedTokens: 197
keywords: [Clause, Category, Access, categories, configuration]
---

# Clause Category List

> Access list of clause categories from the
    configuration.

# Clause Category List

Access list of clause categories from the configuration.

Resource

```

```

Example URI

```

```

Available version

57.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the clause category. | Required | 57.0 |
| usageType | String | The usage type for the clause category. Valid values are:Contract Clause CategoryDisclosure Category | Required | 57.0 |

Response body for GET

[Clause Library Category Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_clause_categories_respons.htm "Output representation of the request to retrieve the clause library category configuration.")

## Code Examples

```
/connect/clause-library/clause-category-configurations
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/clause-library/clause-category-configurations
```

## Related Topics

- Clause Library Category Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_clause_categories_respons.htm)
