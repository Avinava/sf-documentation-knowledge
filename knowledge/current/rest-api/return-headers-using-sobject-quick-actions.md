---
title: "Return Headers Using sObject Quick Actions"
domain: rest-api
topic: return-headers-using-sobject-quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.898Z
estimatedTokens: 242
keywords: [sObject, Quick, Actions, sending, resource, gives, chance, retrieving, content, REST, API, version, 28.0, later]
---

# Return Headers Using sObject Quick Actions

> Returns only the headers that are returned by sending a GET request to the sObject Quick
  Actions resource. This gives you a chance to see the header values before retrieving the content
  of the resource. This resource is available in REST API version 28.0 and later.

# Return Headers Using sObject Quick Actions

Returns only the headers that are returned by sending a GET request to the sObject Quick Actions resource. This gives you a chance to see the header values before retrieving the content of the resource. This resource is available in REST API version 28.0 and later.

This resource returns all actions—both global and standard—in addition to the ones requested.

When working with actions, also refer to [Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm "Access global quick actions and object-specific quick actions. By using the POST method with this resource, you can create records using a quick action. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/quickActions/

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
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/quickActions/ -H "Authorization: Bearer token"
```

## Related Topics

- Quick Actions (atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm)
