---
title: "CSV Based Decision Table (GET)"
domain: omnistudio
topic: csv-based-decision-table-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.003Z
estimatedTokens: 446
keywords: [CSV, Decision, Fetch, paginated, data, resource, responsible, managing, rows]
---

# CSV Based Decision Table (GET)

> Fetch paginated data from a CSV based decision table. This resource is responsible for
    managing rows in a Decision Table.

# CSV Based Decision Table (GET)

Fetch paginated data from a CSV based decision table. This resource is responsible for managing rows in a Decision Table.

Resource

```

```

Example for GET

```

```

Example for POST

```

```

Available version

62.0

HTTP methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Filters applied to rows based on column criteria. | Optional | 62.0 |
| limit | Integer | Limits the number of records viewed at a time. The default value is 20. | Optional | 62.0 |
| offset | Integer | Token that represents the page offset for pagination. Use this value with the pageSize parameter to indicate where the page starts. The maximum offset is 100 and the default is 0. | Optional | 62.0 |

Response body for GET

[Decision Table Rows List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_rows_list_output.htm "Output representation of the rows in relation to the decision table, including current state of pagination.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rows | Decision Table Row Input[] | List of rows to be updated or added. | Required | 62.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rows​Input | Object |  |  | 62.0 |

Response body for POST

[Decision Table Data](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_data_output.htm "Output representation of the status of an action performed.")

## Code Examples

```
/connect/business-rules/decision-table/${decisionTableId}/data
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/business-rules/decision-table/0lDxx0000000001EAA/data?filter=AssetLevel:101
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/business-rules/decision-table/0lDxx0000000001EAA/data
```

```
{
  "rows": [
    {
      "id": "1FIxx0000004CSOGA2",
      "rowData": {
        "City": "City3",
        "AssetLevel": "300"
      },
      "action": "update"
    }
  ]
}
```

## Related Topics

- Decision Table Rows List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_rows_list_output.htm)
- Decision Table Row Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_table_row_list_input.htm)
- Decision Table Data (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_data_output.htm)
