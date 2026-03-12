---
title: "GET /api/v1/profile/{dataModelName}/{Id}"
domain: data-cloud
topic: get-apiv1profiledatamodelnameid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.425Z
estimatedTokens: 547
keywords: [GET, api, profile, dataModelName, data, model, objects, based, search, indexes, filters., API, call, retrieve, record, primary, key, secondary, keys., empty]
---

# GET /api/v1/profile/{dataModelName}/{Id}

> Returns data model objects based on search indexes and filters. Use this API call to
  retrieve the object record based on the primary key or secondary keys. Returns an empty list when
  records aren’t found.

# GET /api/v1/profile/{dataModelName}/{Id}

Returns data model objects based on search indexes and filters. Use this API call to retrieve the object record based on the primary key or secondary keys. Returns an empty list when records aren’t found.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/{dataModelName}/{Id}

## Request Parameters

| Field Name | Description |
| --- | --- |
| dataModelName | Field TypestringDescriptionRequired.Data model object API name. Example: UnifiedIndividual__dlm |
| fields | Field TypestringDescriptionOptional. Distinct comma-separated name of fields that you want to include in the result. Not specifying this parameter returns an arbitrary set of fields. Example: Id__c,FirstName__c,GenderId__c,Occupation__c |
| filters | Field TypestringField TypestringDescriptionA set of comma-separated equality expressions within square brackets. Example: [FirstName__c=DON] |
| Id | Field TypestringDescriptionRequired.The value of the primary/secondary key field. Defaults to primary key when not specified. Example: John |
| limit | Field TypeintDescriptionThe numbers of records to be returned. Example: 10 |
| offset | Field TypeintDescriptionThe number of rows to skip before starting to return. Example: 100This field is available in API version 52.0 and later. |
| orderby | TypestringDescriptionA list of comma-separated values to sort the results in ascending or descending order. Example: GenderId__c ASC, Occupation__c DESCThis field is available in API version 52.0 and later. |
| searchKey | Field TypestringDescriptionThe name of the key field, if a field other than the primary key is used. Example: FirstName__c |

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
| 200 OK | The callback successfully verified. |
| 400 Bad Request | Invalid request. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | The attribute name used in the fields or filters parameter doesn’t exist. |
| 500 Server Error | Internal error. |

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/profile/{dataModelName}/{Id}
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
