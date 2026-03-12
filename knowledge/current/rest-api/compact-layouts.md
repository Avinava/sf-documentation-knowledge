---
title: "Compact Layouts"
domain: rest-api
topic: compact-layouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.244Z
estimatedTokens: 266
keywords: [Compact, Layouts, multiple, objects, resource, REST, API, version, 31.0, later]
---

# Compact Layouts

> Returns a list of compact layouts for
      multiple objects. This resource is available in REST API version 31.0 and
    later.

# Compact Layouts

Returns a list of compact layouts for multiple objects. This resource is available in REST API version 31.0 and later.

This resource returns the primary compact layout for a set of objects. The set of objects is specified using a query parameter. Up to 100 objects can be queried at once.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

PersonAccount isn’t supported for bulk queries. If you want to get the primary compact layout for PersonAccount, get it directly from /services/data/v66.0/sobjects/Account/describe/compactLayouts/primaryPersonAccount.

## Syntax

URI

/services/data/vXX.X/compactLayouts?q=objectList

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description |
| --- | --- |
| q | A comma-delimited list of objects. The primary compact layout for each object in this list will be returned in the response of this resource. |

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/compactLayouts?q=Account,Contact,CustomObj__c -H "Authorization: Bearer token"
```

```
{
  "Account" : {
    "actions" : [ {
      "behavior" : null,
      "content" : null,
      "contentSource" : null,
      "custom" : false,
      "encoding" : null,
      "height" : null,
      "icons" : null,
      "label" : "Call",
      "menubar" : false,
      "name" : "CallHighlightAction",
      "overridden" : false,
      "resizeable" : false,
      "scrollbars" : false,
      "showsLocation" : false,
      "showsStatus" : false,
      "toolbar" : false,
      "url" : null,
      "width" : null,
      "windowPosition" : null
    },
    ...
    "id" : "0AHD000000000AbOAI",
    "label" : "Custom Account Compact Layout",
    "name" : "Custom_Account_Compact_Layout"
  },
  "Contact" : {
    "actions" : [ {
      "behavior" : null,
      "content" : null,
      "contentSource" : null,
      "custom" : false,
      "encoding" : null,
      "height" : null,
      "icons" : null,
      "label" : "Call",
      "menubar" : false,
      "name" : "CallHighlightAction",
      "overridden" : false,
      "resizeable" : false,
      "scrollbars" : false,
      "showsLocation" : false,
      "showsStatus" : false,
      "toolbar" : false,
      "url" : null,
      "width" : null,
      "windowPosition" : null
    },
    ...
    "id" : null,
    "label" : "System Default",
    "name" : "SYSTEM"
  }
  "CustomObj__c" : {
    "actions" : [ {
      "behavior" : null,
      "content" : null,
      "contentSource" : null,
      "custom" : false,
      "encoding" : null,
      "height" : null,
      "icons" : null,
      "label" : "Call",
      "menubar" : false,
      "name" : "CallHighlightAction",
      "overridden" : false,
      "resizeable" : false,
      "scrollbars" : false,
      "showsLocation" : false,
      "showsStatus" : false,
      "toolbar" : false,
      "url" : null,
      "width" : null,
      "windowPosition" : null
    },
    ...
    "id" : null,
    "imageItems" : null,
    "label" : "System Default",
    "name" : "SYSTEM"
  }
}
```
