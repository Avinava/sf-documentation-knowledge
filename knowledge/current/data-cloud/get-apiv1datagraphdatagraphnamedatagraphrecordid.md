---
title: "GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}"
domain: data-cloud
topic: get-apiv1datagraphdatagraphnamedatagraphrecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.652Z
estimatedTokens: 214
keywords: [GET, api, dataGraph, dataGraphName, dataGraphRecordId, Request, data, specified, graph., Syntax, Example]
---

# GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

> Request data from a specified data graph.

# GET /api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

Request data from a specified data graph.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/dataGraph/{dataGraphName}/{dataGraphRecordId}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataGraphName | string | The data graph's API name. |
| dataGraphRecordId | int | The value of the primary key on the data graph record. The value of this field is the same as the value of the primary key for the data graph’s primary data model object. |

## Example

This example shows a request for the data graph individual\_eng\_dg, with record ID 100005. The response includes specific data values for the primary DMO and related fields specified in the data graph.

Request

```

```

Response

```

```

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/dataGraph/individual_eng_dg/100005
```

```
{
   "data":[
      {         "json_blob__c":"{"ssot__Id__c":"100005","UnifiedLinkssotIndividualIr1__dlm":[{"SourceRecordId__c":"10000001","UnifiedRecordId__c":"100005","ssot__Individual__dlm":[{"ssot__FirstName__c":"Jean","ssot__Id__c":"10000001","ssot__LastName__c":"Johnson","ssot__SalesOrder__dlm":[{"ssot__PurchaseOrderDate__c":"2023-07-26T07:37:57.927Z","ssot__Id__c":"100002","ssot__SoldToCustomerId__c":"10000001","ssot__TotalProductAmount__c":557.000000000000000000},{"ssot__PurchaseOrderDate__c":"2023-07-26T19:52:26.525Z","ssot__Id__c":"100001","ssot__SoldToCustomerId__c":"10000001","ssot__TotalProductAmount__c":192.000000000000000000},{"ssot__PurchaseOrderDate__c":"2023-07-06T20:30:18.255Z","ssot__Id__c":"100005","ssot__SoldToCustomerId__c":"10000001","ssot__TotalProductAmount__c":590.000000000000000000}]}]}]}",
      }
   ],
   "done":true
}
```
