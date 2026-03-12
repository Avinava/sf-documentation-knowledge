---
title: "sObject Named Layouts"
domain: rest-api
topic: sobject-named-layouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.865Z
estimatedTokens: 279
keywords: [sObject, Named, Layouts, Retrieves, alternate, resource, REST, API, version, 31.0, later]
---

# sObject Named Layouts

> Retrieves information about alternate named layouts for a given
			object. This resource is available in REST API version 31.0 and later.

# sObject Named Layouts

Retrieves information about alternate named layouts for a given object. This resource is available in REST API version 31.0 and later.

Use this resource to get information on a named layout for a given object. You must provide a valid named layout name as part of the resource URI.

To get a list of named layouts for a given object, use the [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.") resource and look for the “namedLayoutInfos” field in the response body.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/namedLayouts/layoutName

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Request body

None

## Example

Example Request

```

```

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/User/describe/namedLayouts/UserAlt -H "Authorization: Bearer token"
```

## Related Topics

- sObject Describe (atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
