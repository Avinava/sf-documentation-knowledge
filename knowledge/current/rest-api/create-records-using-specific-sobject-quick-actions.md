---
title: "Create Records Using Specific sObject Quick Actions"
domain: rest-api
topic: create-records-using-specific-sobject-quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.909Z
estimatedTokens: 206
keywords: [Records, Specific, sObject, Quick, Actions, Creates, record, via, action, included, resource, REST, API, version, 28.0]
---

# Create Records Using Specific sObject Quick Actions

> Creates a record via the specified quick action based on the field values included in the
  request body. This resource is available in REST API version 28.0 and later.

# Create Records Using Specific sObject Quick Actions

Creates a record via the specified quick action based on the field values included in the request body. This resource is available in REST API version 28.0 and later.

When working with actions, also refer to [Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm "Access global quick actions and object-specific quick actions. By using the POST method with this resource, you can create records using a quick action. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/quickActions/actionName

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

Example Request Body

```

```

## Code Examples

```
curl -X POST https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/quickActions/CreateContact -H 'Authorization: Bearer token -H "Content-Type: application/json" -d @newcontact.json'
```

```
{

   "contextId" : "001D000000JRSGf",
   "record" : { "LastName" : "Smith" }

}
```

## Related Topics

- Quick Actions (atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm)
