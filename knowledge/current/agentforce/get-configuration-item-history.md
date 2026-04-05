---
title: "Get Configuration Item History"
domain: agentforce
topic: get-configuration-item-history
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:34.975Z
estimatedTokens: 974
keywords: [Configuration, Item, History, Perform, paginated, retrieval, audit, trail, specific, changes, including, field-level, modifications, timestamps, user]
---

# Get Configuration Item History

> Perform a paginated retrieval of the audit trail for a specific
      configuration item. Returns a list of changes, including field-level modifications,
      timestamps, and user information.

# Get Configuration Item History

Perform a paginated retrieval of the audit trail for a specific configuration item. Returns a list of changes, including field-level modifications, timestamps, and user information.

## Request

JSON example

This example shows a sample request to retrieve the history of a specific configuration item.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | Integer | The unique identifier of the Configuration Item record whose history is to be retrieved. | Required | 66.0 |
| filters | [CIHistoryFilterCriteria] | List of filters. | Optional | 66.0 |
| sort | CIHistorySortCriteria | Sort criteria. | Optional | 66.0 |
| pageNumber | Integer | The count of pages to return for results pagination. | Optional | 66.0 |
| pageSize | Integer | The maximum number of history records to return in each page. | Optional | 66.0 |

## FilterCriteria Properties

Use FilterCriteria to filter audit results.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filterKey | CIHistoryFilterKey (enumeration) | The field to filter by. Valid values are:TIMEOPERATION_TYPE | Required | 66.0 |
| operator | FilterOperator (enumeration) | The comparison operator to use for filtering. Valid values are:EQUALS—Matches a single exact value. Use with exactly one value in the values array.NOT_EQUALS—Does not match a single exact value. Use with exactly one value in the values array.CONTAINS—Matches if the field contains the specified value. Use with exactly one value in the values array.NOT_CONTAINS—Matches if the field does not contain the specified value. Use with exactly one value in the values array.GREATER_THAN—Matches if the field value is greater than the specified value. Use with exactly one value in the values array.GREATER_THAN_OR_EQUAL—Matches if the field value is greater than or equal to the specified value. Use with exactly one value in the values array.LESS_THAN—Matches if the field value is less than the specified value. Use with exactly one value in the values array.LESS_THAN_OR_EQUAL—Matches if the field value is less than or equal to the specified value. Use with exactly one value in the values array.IS_BETWEEN—Matches if the field value is between two specified values (inclusive). Use with exactly two values in the values array.NOT_BETWEEN—Matches if the field value is not between two specified values (inclusive). Use with exactly two values in the values array. | Required | 66.0 |
| value1 | String | First value of the filterKey. | Required | 66.0 |
| value2 | String | Second value of the filterKey. Required if the FilterOperator requires two values. | Optional | 66.0 |

## SortCriteria Properties

Use SortCriteria to specify how search results should be ordered.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sortKey | CIHistoryFilterKey | The field name to use for sorting the search results. | Required | 66.0 |
| sortOrder | SortOrder | The sort direction for the results. Valid values are:ASC—AscendingDESC—Descending | Required | 66.0 |

## Response

JSON example

This example is a sample response from the getCIHistory query.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| totalRecords | Integer | The total number of records that match the filter criteria across all pages, regardless of pagination. | 66.0 |
| auditRecords | [AuditRecord] | List of changes to the Configuration Item record. Each object contains these fields:id (ID): Row ID of that record.time (Int): Timestamp of that change.parameters ([ParameterObject]): Array of changes.operationType (String): Type of operation.entityId (String): CI ID.userId (String): User ID who performed the change. | 66.0 |

## Code Examples

```
query GetCIHistory {
   getCIHistory(
       input: {
           ciId: "6780001"
           filters: [{ filterKey: TIME, value1: "1768545221848", operator: LESS_THAN_OR_EQUAL },
           { filterKey: OPERATION_TYPE, value1: "EDIT", operator: CONTAINS }]
           pageNumber: 0
           pageSize: 10
           sort: { sortKey: OPERATION_TYPE, sortOrder: DESC }
       }
   ) {
       totalRecords
       auditRecords {
           commentCount
           entityId
           userId
           parameters {
               propertyName
               oldValue
               newValue
           }
           propertyInstanceChanges
           operationType
           userName
           valid
           time
           id
           module
           parentEntityId
       }
   }
}
```

```
{
   "data": {
       "getCIHistory": {
           "totalRecords": 7,
           "auditRecords": [
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Status",
                           "oldValue": "",
                           "newValue": "In Build"
                       },
                       {
                           "propertyName": "IP Address",
                           "oldValue": "",
                           "newValue": "192.168.172.45"
                       },
                       {
                           "propertyName": "Approval State",
                           "oldValue": "",
                           "newValue": "Awaiting Approval"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768305455444,
                   "id": "36051312",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               },
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Status",
                           "oldValue": "In Build",
                           "newValue": "In Test"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768306294383,
                   "id": "36056961",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               },
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Approval State",
                           "oldValue": "Awaiting Approval",
                           "newValue": "Approved"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768306278954,
                   "id": "36057001",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               },
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Operating System",
                           "oldValue": "",
                           "newValue": "os123"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768306507193,
                   "id": "36057003",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               },
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Status",
                           "oldValue": "In Test",
                           "newValue": "In Use"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768306528084,
                   "id": "36057004",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               },
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Approval State",
                           "oldValue": "Approved",
                           "newValue": "Rejected"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768306286136,
                   "id": "36057101",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               },
               {
                   "commentCount": 0,
                   "entityId": "6780001",
                   "userId": "470701",
                   "parameters": [
                       {
                           "propertyName": "Description",
                           "oldValue": "",
                           "newValue": "good"
                       }
                   ],
                   "propertyInstanceChanges": [],
                   "operationType": "EDIT_CMDBCI",
                   "userName": "00Dxx00J5TkgqCi 00Dxx00J5TkgqCi",
                   "valid": true,
                   "time": 1768306518034,
                   "id": "36057301",
                   "module": "CMDBCI",
                   "parentEntityId": "6780001"
               }
           ]
       }
   }
}
```
