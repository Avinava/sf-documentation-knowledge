---
title: "Get Specific sObject Quick Actions"
domain: rest-api
topic: get-specific-sobject-quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.904Z
estimatedTokens: 185
keywords: [Specific, sObject, Quick, Actions, action, well, action’s, resource, REST, API, version, 28.0, later]
---

# Get Specific sObject Quick Actions

> Gets a specific action for an object, as well as the action’s details. This resource is
  available in REST API version 28.0 and later.

# Get Specific sObject Quick Actions

Gets a specific action for an object, as well as the action’s details. This resource is available in REST API version 28.0 and later.

When working with actions, also refer to [Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm "Access global quick actions and object-specific quick actions. By using the POST method with this resource, you can create records using a quick action. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/quickActions/actionName

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/quickActions/CreateContact -H "Authorization: Bearer token"
```

## Related Topics

- Quick Actions (atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm)
