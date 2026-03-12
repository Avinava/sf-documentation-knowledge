---
title: "Get Object Metadata Using sObject Basic Information"
domain: rest-api
topic: get-object-metadata-using-sobject-basic-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.964Z
estimatedTokens: 325
keywords: [Get, Metadata, sObject, Basic, Information, basic, metadata, specified, including, recent, items, URIs, resources, related, object., Syntax, Example]
---

# Get Object Metadata Using sObject Basic Information

> Gets basic metadata for a specified object, including some object properties, recent
		items, and URIs for other resources related to the object.

# Get Object Metadata Using sObject Basic Information

Gets basic metadata for a specified object, including some object properties, recent items, and URIs for other resources related to the object.

To retrieve the complete metadata for an object, use the [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.") resource.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/

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

## Example

For an example of retrieving metadata for an object, see [Get Metadata for an Object](atlas.en-us.api_rest.meta/api_rest/dome_sobject_basic_info.htm "Use the sObject Basic Information resource to get metadata for an object.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "Object Reference for the Salesforce Platform - HTML (New Window)")

## Related Topics

- sObject Describe (atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
- Get Metadata for an Object (atlas.en-us.api_rest.meta/api_rest/dome_sobject_basic_info.htm)
