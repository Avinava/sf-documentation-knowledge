---
title: "Return Headers Using sObject Quick Action Details"
domain: rest-api
topic: return-headers-using-sobject-quick-action-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.698Z
keywords: [Return, Headers, sObject, Quick, Action, Details, Syntax, Example]
---

# Return Headers Using sObject Quick Action Details

# Return Headers Using sObject Quick Action Details

Returns only the headers that are returned by sending a GET request to the sObject Quick Actions resource. This gives you a chance to see the header values before retrieving the content of the resource. This resource is available in REST API version 28.0 and later.

When working with actions, also refer to [Quick Actions](atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm "Access global quick actions and object-specific quick actions. By using the POST method with this resource, you can create records using a quick action. This resource is available in REST API version 28.0 and later.").

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/quickActions/actionName/describe/

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