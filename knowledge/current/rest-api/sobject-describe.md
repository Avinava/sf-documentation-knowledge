---
title: "sObject Describe"
domain: rest-api
topic: sobject-describe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.654Z
keywords: [sObject, Describe, Syntax, Example, See]
---

# sObject Describe

# sObject Describe

Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.

For more information about the metadata that is retrieved, see [DescribesObjectResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm "HTML (New Window)") in the SOAP API Developers Guide.

You can use the If-Modified-Since or If-Unmodified-Since header with this resource. When using the If-Modified-Since header, if no available object’s metadata has changed since the provided date, a 304 Not Modified status code is returned with no response body.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObject | The name of the object. For example, Account.A required path parameter. |
| If-Modified-Since | An optional header specifying a date and time. The request returns records that have been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss z. For example: If-Modified-Since: Mon, 30 Nov 2020 08:34:54 MST. |
| If-Unmodified-Since | An optional header specifying a date and time. The request returns records that have not been modified after that date and time.The format is EEE, dd MMM yyyy HH:mm:ss z. For example: If-Unmodified-Since: Mon, 30 Nov 2020 08:34:54 MST. |

## Example

See [Get Field and Other Metadata for an Object](atlas.en-us.api_rest.meta/api_rest/dome_sobject_describe.htm "Use the *** resource to retrieve all the metadata for an object, including information about each field, URLs, and child relationships."). For an example that uses the If-Modified-Since HTTP header, see [Get Object Metadata Changes](atlas.en-us.api_rest.meta/api_rest/sobject_describe_with_ifmodified_header.htm "Use the sObject Describe resource and the If-Modified-Since HTTP header to determine if object metadata has changed.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)
    
-   [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.")