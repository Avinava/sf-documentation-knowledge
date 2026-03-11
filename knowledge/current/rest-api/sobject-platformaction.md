---
title: "sObject PlatformAction"
domain: rest-api
topic: sobject-platformaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.679Z
keywords: [sObject, PlatformAction, Syntax, See]
---

# sObject PlatformAction

# sObject PlatformAction

Returns the description of the PlatformAction. PlatformAction is a virtual read-only object. It enables you to query for actions displayed in the UI, given a user, a context, device format, and a record ID. Examples include standard and custom buttons, quick actions, and productivity actions. This resource is available in API version 33.0 and later.

The only thing you can do with this resource is [Query](atlas.en-us.api_rest.meta/api_rest/resources_query.htm#resources_query "Runs the specified SOQL query.") it.

## Syntax

URI

/services/data/vXX.X/sobjects/PlatformAction

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)