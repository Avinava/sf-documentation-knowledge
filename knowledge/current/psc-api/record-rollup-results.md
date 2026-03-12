---
title: "Record Rollup Results"
domain: psc-api
topic: record-rollup-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.195Z
estimatedTokens: 262
keywords: [Record, Rollup, Results, Output, representation]
---

# Record Rollup Results

> Output representation of the record rollup results.

# Record Rollup Results

Output representation of the record rollup results.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columns | Record Rollup Result Column[] | List of fields that represent the columns of a table. | Small, 61.0 | 61.0 |
| definition​DisplayName | String | Name of the record aggregation definition. | Small, 61.0 | 61.0 |
| message | String | Message for the HTTP response code. | Small, 61.0 | 61.0 |
| lastUpdated​Details | Record Rollup Result Last Updated Details[] | The information about the last time the record rollup results were updated for the specified definition and anchor record ID. | Small, 64.0 | 64.0 |
| rows | Record Rollup Result Row[] | List of aggregated records that represent the rows of a table. | Small, 61.0 | 61.0 |
| statusCode | String | HTTP response code for the request. | Small, 61.0 | 61.0 |
| totalResult​Count | Integer | Total number of record aggregation results. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "columns": [
    {
      "fieldApiName": "Name",
      "displayFormatType": "text",
      "fieldLabel": "Name",
      "sequence": 0,
      "isRedirectionEnabled": true,
      "isSortable": true,
      "isTypeName": true,
      "sortByField": "Name"
    },
    {
      "fieldApiName": "BranchUnit",
      "displayFormatType": "reference",
      "fieldLabel": "Branch Unit",
      "sequence": 4,
      "isRedirectionEnabled": true,
      "isSortable": true,
      "isTypeName": false,
      "sortByField": "BranchUnit.Name"
    }
  ],
  "message": "Successful",
  "rows": [
    {
      "rowData": {
        "Status": "Active",
        "Type": "Savings",
        "Id": "0c7xx000000006TAAQ",
        "FinancialAccountNumber": "*********0001",
        "Name": "John Doe",
        "Case__c": {
          "Id": "Some ID",
          "CaseNumber": "000001"
        }
      }
    }
  ],
  "statusCode": "200",
  "totalResultCount": 1,
  "definitionDisplayName": "Savings Financial Account"
  "lastUpdatedDetails": {
	"errorType": "NOT_FOUND",
	"epochTime": 1733734423000,
	"processingMode": "Batch"
  }
}
```

## Related Topics

- Record Rollup Result Column (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_rollup_result_column_output.htm)
- Record Rollup
                  Result Last Updated Details (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_rollup_result_last_updated_details_output.htm)
- Record Rollup Result Row (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_rollup_result_row_output.htm)
