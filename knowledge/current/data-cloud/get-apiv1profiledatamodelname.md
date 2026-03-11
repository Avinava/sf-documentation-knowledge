---
title: "GET /api/v1/profile/{dataModelName}"
domain: data-cloud
topic: get-apiv1profiledatamodelname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.410Z
keywords: [GET, api, profile, dataModelName, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# GET /api/v1/profile/{dataModelName}

# GET /api/v1/profile/{dataModelName}

Returns data model objects based on search filters. Use this API call to retrieve the object records after applying the selected filters.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/{dataModelName}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataModelName | string | Required. Data model object API name. Example: UnifiedIndividual__dlm |
| fields | string | Distinct comma-separated name of fields that you want to include in the result. Example: Id__c,FirstName__c,GenderId__c,Occupation__cIf this parameter isn't specified, up to 10 arbitrary fields are returned. |
| filters | string | Required. A set of comma-separated equality expressions, within square brackets. Example: [FirstName__c=DON] |
| limit | int | The numbers of records to be returned. Example: 10 |
| offset | int | Number of rows to skip before starting to return. Example: 100This field is available in API version 52.0 and later. |
| orderby | string | Comma-separated values to sort the result-set in ascending or descending order. Example: GenderId__c ASC, Occupation__c DESCThis field is available in API version 52.0 and later. |

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