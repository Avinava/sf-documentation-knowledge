---
title: "Lookup Tables Result List"
domain: omnistudio
topic: lookup-tables-result-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.048Z
estimatedTokens: 155
keywords: [Lookup, Tables, Result, Output, representation, search]
---

# Lookup Tables Result List

> Output representation of the result of a lookup table search
      request.

# Lookup Tables Result List

Output representation of the result of a lookup table search request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Response code of the API request. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Small, 59.0 | 59.0 |
| lookupTables | Lookup Table Details[] | List of the retrieved lookup tables. | Small, 59.0 | 59.0 |
| message | String | API response message if the request fails. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "code": "200",
  "isSuccess": true,
  "lookupTables": [
    {
      "id": "0lIxx000000003FEAQ",
      "lookupTableDefinitionId": "0lDxx000000001dEAA",
      "lookupTableType": "DecisionTable",
      "name": "DT_Apr27_2",
      "apiName": "DT_Apr27_2"
    }
  ],
  "message": ""
}
```

## Related Topics

- Lookup Table
                  Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_lookup_table_details.htm)
