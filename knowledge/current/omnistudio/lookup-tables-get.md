---
title: "Lookup Tables (GET)"
domain: omnistudio
topic: lookup-tables-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.834Z
estimatedTokens: 272
keywords: [Lookup, Tables, Retrieve]
---

# Lookup Tables (GET)

> Retrieve lookup tables.

# Lookup Tables (GET)

Retrieve lookup tables.

Resource

```

```

Resource example

```

```

```

```

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lookupTypes | String | Type of lookup table. Valid values are:DecisionMatrixDecisionTable | Optional | 59.0 |
| searchKey | String | The search text entered by the user to retrieve a list of lookup tables. | Required | 59.0 |
| usageType | String | Usage type of the lookup table.Valid value is Bre. The default value is Bre.When Business Rules Engine is enabled for a Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. | Required | 59.0 |

Response body for GET

[Lookup Tables Result List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_lookup_tables_result_list.htm "Output representation of the result of a lookup table search request.")

## Code Examples

```
/connect/business-rules/lookup-tables
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/business-rules/lookup-tables?searchKey=D&usageType=Bre&lookupTypes=DecisionTable,DecisionMatrix
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/business-rules/lookup-tables?searchKey=D&usageType=Bre
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/business-rules/lookup-tables?searchKey=D&usageType=Bre&lookupTypes=DecisionTable&businessKnowledgeModelName=ManualDiscount
```

## Related Topics

- Lookup Tables Result
              List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_lookup_tables_result_list.htm)
