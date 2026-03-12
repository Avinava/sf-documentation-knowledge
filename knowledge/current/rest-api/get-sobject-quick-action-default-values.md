---
title: "Get sObject Quick Action Default Values"
domain: rest-api
topic: get-sobject-quick-action-default-values
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.876Z
estimatedTokens: 189
keywords: [sObject, Quick, Action, specific, action’s, including, resource, REST, API, version, 28.0, later]
---

# Get sObject Quick Action Default Values

> Returns a specific action’s default values, including field values. This resource is
  available in REST API version 28.0 and later.

# Get sObject Quick Action Default Values

Returns a specific action’s default values, including field values. This resource is available in REST API version 28.0 and later.

When working with actions, also refer to [Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm "Access global quick actions and object-specific quick actions. By using the POST method with this resource, you can create records using a quick action. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/quickActions/actionName/defaultValues/

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
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/quickActions/CreateContact/defaultValues/ -H "Authorization: Bearer token"
```

## Related Topics

- Quick Actions (atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm)
