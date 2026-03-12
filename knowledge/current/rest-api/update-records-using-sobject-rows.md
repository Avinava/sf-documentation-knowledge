---
title: "Update Records Using sObject Rows"
domain: rest-api
topic: update-records-using-sobject-rows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.943Z
estimatedTokens: 1096
keywords: [Records, sObject, Rows, Updates, record, provided, replace, resource, external, objects, API, version, 32.0, later]
---

# Update Records Using sObject Rows

> Updates a record based on the specified object and record ID. Field values provided in
		the request body replace the existing values in the record. This resource can be used with
		external objects in API version 32.0 and later.

# Update Records Using sObject Rows

Updates a record based on the specified object and record ID. Field values provided in the request body replace the existing values in the record. This resource can be used with external objects in API version 32.0 and later.

External objects that are associated with non-high-data-volume external data sources use the 18-character Salesforce ID for the id. Otherwise, external objects use the External ID standard field of the external object for the id.

For information about the items in the response body, see [DescribeSObjectResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm "HTML (New Window)") in the SOAP API Developer Guide.

If the object is an Account object, the response also contains an ETag header. For example: ETag: "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip" This ETag can be used with the If-Match and If-None-Match headers. For more information, see [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| Content-Type | An optional header that specifies the format for the request and response. The possible header values are:Content-Type: application/jsonContent-Type: application/xml |
| sObject | The name of the object. For example, Account and CustomObject__c. |
| id | The identifier of the object. For example, 001R0000005hDFYIA2. |
| If-Match | An optional header specifying a comma-delimited list of one or more ETags. This only has an effect when used with Account objects. The request is only processed if the Account’s ETag matches one of the ETags in the list.For example: If-Match: "94C83JSreaVMGpL+lUzv8Dr3inI0kCvuKATVJcTuApA=--gzip", "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip". |
| If-None-Match | An optional header specifying a comma-delimited list of one or more ETags. This only has an effect when used with Account objects. The request is only processed if the Account’s ETag does not match one of the ETags in the list.For example: If-None-Match: "94C83JSreaVMGpL+lUzv8Dr3inI0kCvuKATVJcTuApA=--gzip", "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip". |
| If-Modified-Since | An optional header specifying a date and time. The request returns records that have been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss zFor example: If-Modified-Since: Mon, 30 Nov 2020 08:34:54 MST. |
| If-Unmodified-Since | An optional header specifying a date and time. The request returns records that have not been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss zFor example: If-Unmodified-Since: Mon, 30 Nov 2020 08:34:54 MST. |

## Example

For an example of updating a record using PATCH, see [Update a Record](atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm "You use the sObject Rows resource to update records. Provide the updated record information in your request data and use the PATCH method of the resource with a specific record ID to update that record. Records in a single file must be of the same object type.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

-   [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.")

## Related Topics

- Conditional Request Headers (atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm)
- Update a Record (atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm)
