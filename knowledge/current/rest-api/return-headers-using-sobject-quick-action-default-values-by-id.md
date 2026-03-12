---
title: "Return Headers Using sObject Quick Action Default Values by ID"
domain: rest-api
topic: return-headers-using-sobject-quick-action-default-values-by-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.886Z
estimatedTokens: 272
keywords: [sObject, Quick, Action, sending, Actions, resource, gives, chance, retrieving, content, REST, API, version, 29.0, later]
---

# Return Headers Using sObject Quick Action Default Values by ID

> Returns only the headers that are returned by sending a GET request to the sObject Quick
  Actions resource. This gives you a chance to see the header values before retrieving the content
  of the resource. This resource is available in REST API version 29.0 and later.

# Return Headers Using sObject Quick Action Default Values by ID

Returns only the headers that are returned by sending a GET request to the sObject Quick Actions resource. This gives you a chance to see the header values before retrieving the content of the resource. This resource is available in REST API version 29.0 and later.

In API version 28.0, to evaluate the default values for an action, use /services/data/vXX.X/sobjects/sObject/quickActions/action\_name/defaultValues/parent\_id.

When working with actions, also refer to [Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm "Access global quick actions and object-specific quick actions. By using the POST method with this resource, you can create records using a quick action. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/quickActions/actionName/defaultValues/contextId

Formats

JSON, XML

HTTP Method

HEAD

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
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/quickActions/CreateContact/defaultValues/001D000000JRWBd -H "Authorization: Bearer token"
```

## Related Topics

- Quick Actions (atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm)
