---
title: "Get Records Using sObject Rows"
domain: rest-api
topic: get-records-using-sobject-rows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.730Z
keywords: [Get, Records, sObject, Rows, Syntax, Example, See]
---

# Get Records Using sObject Rows

# Get Records Using sObject Rows

Gets a record based on the specified object and record ID. The fields and field values of the record are returned in the response body. This resource can be used with external objects in API version 32.0 and later.

External objects that are associated with non-high-data-volume external data sources use the 18-character Salesforce ID for the id. Otherwise, external objects use the External ID standard field of the external object for the id.

For information about the items in the response body, see [DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm "HTML (New Window)") in the SOAP API Developer’s Guide.

If the object is an Account object, the response also contains an ETag header. For example: ETag: "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip" This ETag can be used with the If-Match and If-None-Match headers. For more information, see [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObject | The name of the object. For example, Account. |
| id | The identifier of the object. For example, 001R0000005hDFYIA2. |
| fields | A comma-delimited list of fields specifying the fields and values returned in the response body. For example, ?fields=name,description,numberofemployees,industry. |
| If-Match | An optional header specifying a comma-delimited list of one or more ETags. This only has an effect when used with Account objects. The request is only processed if the Account’s ETag matches one of the ETags in the list.For example: If-Match: "94C83JSreaVMGpL+lUzv8Dr3inI0kCvuKATVJcTuApA=--gzip", "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip". |
| If-None-Match | An optional header specifying a comma-delimited list of one or more ETags. This only has an effect when used with Account objects. The request is only processed if the Account’s ETag does not match one of the ETags in the list.For example: If-None-Match: "94C83JSreaVMGpL+lUzv8Dr3inI0kCvuKATVJcTuApA=--gzip", "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip". |
| If-Modified-Since | An optional header specifying a date and time. The request returns records that have been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss zFor example: If-Modified-Since: Mon, 30 Nov 2020 08:34:54 MST. |
| If-Unmodified-Since | An optional header specifying a date and time. The request returns records that have not been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss zFor example: If-Unmodified-Since: Mon, 30 Nov 2020 08:34:54 MST. |

## Example

For examples of retrieving records, see [Get Field Values from a Standard Object Record](atlas.en-us.api_rest.meta/api_rest/dome_get_field_values.htm "You use the GET method of the *** resource to retrieve field values from a record.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)