---
title: "Decision Table Refresh Action"
domain: omnistudio
topic: decision-table-refresh-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.071Z
keywords: [Decision, Table, Refresh, Action, Supported, REST, HTTP, Methods, Inputs, Outputs, Usage]
---

# Decision Table Refresh Action

# Decision Table Refresh Action

Refresh business rules for an active decision table.

For more information about refreshing an active decision table, see [Refresh Decision Tables in Flows](https://help.salesforce.com/articleView?id=task_refresh_decision_table_flow.htm&language=en_US) in Salesforce Help. This object is available in API version 51.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/refreshDecisionTable

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| decisionTable​ApiName | TypestringDescriptionRequired. API name of an active decision table that you want to refresh. |
| isIncremental | TypebooleanDescriptionSpecifies whether to trigger an incremental refresh (true) or not (false). If set to true, this field triggers an update only on changes made to the recent sObject data instead of performing a full refresh.The default value is false.This feature requires a full refresh to be performed initially. After a full refresh is done, you can proceed with incremental refreshes. However, if the changes exceed 2,000 records, the incremental refresh fails. In such cases, a full refresh is necessary to update the Decision Table with the latest sObject data. |

## Outputs

| Output | Details |
| --- | --- |
| errorMessage | TypestringDescriptionError message to indicate why the request wasn't successful. |
| status | TypestringDescriptionIndicates whether the decision table is queued for refresh. Valid values are Queued or Failed. |

## Usage

**Sample Request**

```

```

**Sample Response**

```

```