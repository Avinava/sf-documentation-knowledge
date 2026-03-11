---
title: "GET /api/v1/profile/{dataModelName}/{Id}/{childDataModelName}"
domain: data-cloud
topic: get-apiv1profiledatamodelnameidchilddatamodelname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.420Z
keywords: [GET, api, profile, dataModelName, childDataModelName, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# GET /api/v1/profile/{dataModelName}/{Id}/{childDataModelName}

# GET /api/v1/profile/{dataModelName}/{Id}/{childDataModelName}

Returns data model objects and child objects based on indexes and search filters.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/{dataModelName}/{Id}/{childDataModelName}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| childDataModelName | string | Required. Child data model object API name. Example: UnifiedContactPointEmail__dlm |
| dataModelName | string | Required. Data model object API name. Example: UnifiedIndividual__dlm |
| fields | string | Comma-separated name of the fields to be part of result from the child entity. Not specifying gives the first 10 alphabetically sorted fields. Example: Id__c, EmailAddress__c |
| filters | string | Filters are applied only on the parent object. Example: [FirstName__c=Mary] |
| id | string | Required. The value of an indexed column. |
| limit | int | The numbers of items to return. Example: 10 |
| offset | int | Number of rows to skip before starting to return. Example: 100This field is available in API version 52.0 and later. |
| orderby | string | Comma-separated values to sort the result-set in ascending or descending order. Example: GenderId__c ASC, Occupation__c DESCThis field is available in API version 52.0 and later. |
| searchKey | string | Index name if object's ID is different from primary key. Example: FirstName__c |

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
| 200 OK | Callback successfully verified |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | Attribute name used in fields/filter parameter doesn’t exist. |
| 500 Server Error | Internal error |