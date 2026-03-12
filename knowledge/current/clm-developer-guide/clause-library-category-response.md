---
title: "Clause Library Category Response"
domain: clm-developer-guide
topic: clause-library-category-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.376Z
estimatedTokens: 97
keywords: [Clause, Library, Category, Output, representation, retrieve, configuration, getting]
---

# Clause Library Category Response

> Output representation of the request to retrieve the clause library
      category configuration.

# Clause Library Category Response

Output representation of the request to retrieve the clause library category configuration.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| clauseCategories | Clause Category Response[] | The list of clause category configurations. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "clauseCategories": [
    {
      "id": "0zMRO000000001s", //not a required response field
      "name": "Confidential",
      "usageType": "Contract Clause Category"
    },
    {
      "name": "Environment",
      "usageType": "Disclosure Category"
    }
  ]
}
```

## Related Topics

- Clause Category Response[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_clause_category_respons.htm)
- Clause Category
                  Response[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_clause_category_respons.htm)
