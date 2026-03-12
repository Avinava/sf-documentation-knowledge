---
title: "Delete Records Using sObject Rows"
domain: rest-api
topic: delete-records-using-sobject-rows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.933Z
estimatedTokens: 796
keywords: [Records, sObject, Rows, Deletes, record, resource, external, objects, API, version, 32.0, later]
---

# Delete Records Using sObject Rows

> Deletes records based on the specified object and record ID. This resource can be used
		with external objects in API version 32.0 and later.

# Delete Records Using sObject Rows

Deletes records based on the specified object and record ID. This resource can be used with external objects in API version 32.0 and later.

External objects that are associated with non-high-data-volume external data sources use the 18-character Salesforce ID for the id. Otherwise, external objects use the External ID standard field of the external object for the id.

If the object is an Account object, the response also contains an ETag header. For example: ETag: "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip" This ETag can be used with the If-Match and If-None-Match headers. For more information, see [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/

Formats

JSON, XML

HTTP Method

DELETE

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObject | The name of the object. For example, Account. |
| id | The identifier of the record. For example, 001R0000005hDFYIA2. |
| If-Match | An optional header specifying a comma-delimited list of one or more ETags. This only has an effect when used with Account objects. The request is only processed if the Account’s ETag matches one of the ETags in the list.For example: If-Match: "94C83JSreaVMGpL+lUzv8Dr3inI0kCvuKATVJcTuApA=--gzip", "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip". |
| If-None-Match | An optional header specifying a comma-delimited list of one or more ETags. This only has an effect when used with Account objects. The request is only processed if the Account’s ETag does not match one of the ETags in the list.For example: If-None-Match: "94C83JSreaVMGpL+lUzv8Dr3inI0kCvuKATVJcTuApA=--gzip", "ddpAdaTHz+GcV35e7NLJ9iKD3XXVqAzXT1Sl2ykkP7g=--gzip". |
| If-Modified-Since | An optional header specifying a date and time. The request returns records that have been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss zFor example: If-Modified-Since: Mon, 30 Nov 2020 08:34:54 MST. |
| If-Unmodified-Since | An optional header specifying a date and time. The request returns records that have not been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss zFor example: If-Unmodified-Since: Mon, 30 Nov 2020 08:34:54 MST. |

## Example

For an example of deleting a record using DELETE, see [Delete a Record](atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm "Use the *** resource to delete records. Specify the record ID and use the DELETE method of the resource to delete a record.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Related Topics

- Conditional Request Headers (atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm)
- Delete a Record (atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm)
