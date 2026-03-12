---
title: "GET /api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}"
domain: data-cloud
topic: get-apiv1profiledatamodelnameidcalculated-insightsci-name
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.440Z
estimatedTokens: 624
keywords: [GET, api, profile, dataModelName, calculated-insights, ci-name, data, model, objects, computed, view, based, indexes, search, filters., Syntax, Request, Examples, HTTP, Responses]
---

# GET /api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}

> Returns data model objects and a computed view based on indexes and search filters.

# GET /api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}

Returns data model objects and a computed view based on indexes and search filters.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}

## Request Parameters

| Field Name | Description |
| --- | --- |
| ci_name | Field TypestringDescriptionRequired.The Calculated Insight name. Example: IndividualChildrenCount__cio |
| dataModelName | Field TypestringDescriptionRequired.Data model object API name. Example: UnifiedIndividual__dlm |
| dimensions | Field TypestringDescriptionComma-separated name of the dimensions to be part of the result from the computed view. By default includes all the dimensions. Example: Id__c |
| filters | Field TypestringDescriptionFilters are applied only on the parent object. Example: [FirstName__c=Angel] |
| id | Field TypestringDescriptionRequired.The value of an indexed column. Example: 003726a3-061d-33e7-a5a5-96ecae866a61 |
| limit | Field TypeintDescriptionThe number of items to return. Example: 10 |
| measures | Field TypestringDescriptionComma-separated name of the measures to be part of the result from the computed view. By default includes all the measures. Example: TotalSales__c |
| offset | Field TypeintDescriptionNumber of rows to skip before starting to return. Example: 100This field is available in API version 52.0 and later. |
| orderby | Field TypestringDescriptionComma-separated values to sort the result-set in ascending or descending order. Example: GenderId__c ASC, Occupation__c DESCThis field is available in API version 52.0 and later. |
| searchKey | Field TypestringDescriptionIndex name if the object’s ID is different from the primary key. Example: FirstName__c |
| timeGranularity | Field TypestringDescriptionWith this parameter, you can roll up the measures to various time ranges. Possible values: HOUR, DAY, MONTH, QUARTER, YEARThis field is available in API version 53.0 and later. |

## Examples

Request

```

```

Response

```

```

## HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified. |
| 400 Bad Request | Invalid request. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | Attribute name used in fields/filter parameter doesn’t exist. |
| 500 Server Error | Internal error. |

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/profile/{dataModelName}/{Id}/calculated-insights/{ci-name}
```

```
{
  "data": [
    {
      "GenderId__c": "F",
      "Id__c": "05d01a06-0c61-3990-808d-2aa602dd3e7f",
      "Occupation__c": "Staffing",
      "FirstName__c": "Don"
    },
    {
      "GenderId__c": "M",
      "Id__c": "11bcc846-1a80-3293-8cc4-3449835d8d4c",
      "Occupation__c": "Operational",
      "FirstName__c": "Don"
    },
    {
      "GenderId__c": "M",
      "Id__c": "18213566-df86-34a8-97aa-2cb75b70ae3b",
      "Occupation__c": "Organizational",
      "FirstName__c": "Don"
    }
  ],
  "done": false
}
```
