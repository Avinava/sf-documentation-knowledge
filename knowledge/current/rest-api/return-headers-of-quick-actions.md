---
title: "Return Headers of Quick Actions"
domain: rest-api
topic: return-headers-of-quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.698Z
estimatedTokens: 291
keywords: [Quick, Actions, sending, resource, gives, chance, retrieving, content, REST, API, version, 28.0, later]
---

# Return Headers of Quick Actions

> Returns only the headers that are returned by sending a GET request to the Quick Actions
  resource. This gives you a chance to see the header values before retrieving the content of the
  resource. This resource is available in REST API version 28.0 and later.

# Return Headers of Quick Actions

Returns only the headers that are returned by sending a GET request to the Quick Actions resource. This gives you a chance to see the header values before retrieving the content of the resource. This resource is available in REST API version 28.0 and later.

Add all required fields to an object before you create a quick action for that object. If you add a required field after creating a quick action, the field doesn’t appear in the quick action’s describe results. Then, when the quick action runs, the field isn’t available and an error occurs for the missing field. If you don’t want the required field to appear in the quick action’s layout, set a default value for the field.

When working with actions, also refer to [sObject Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm "Access an object’s actions and the action details. This resource is available in REST API version 28.0 and later.").

URI

/services/data/vXX.X/quickActions/

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
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/quickActions/ -H "Authorization: Bearer token"
```

## Related Topics

- sObject Quick Actions (atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm)
