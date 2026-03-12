---
title: "Get Tabs"
domain: rest-api
topic: get-tabs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.174Z
estimatedTokens: 144
keywords: [Get, Tabs, list, tabs—including, Lightning, page, tabs—available, current, user, regardless, whether, chosen, hide, tabs, via, tab, customization, feature., resource, REST]
---

# Get Tabs

> Gets a list of all tabs—including Lightning page tabs—available to the
		current user, regardless of whether the user has chosen to hide tabs via the All Tabs
			(+) tab customization feature. This resource is available in REST
		API version 31.0 and later.

# Get Tabs

Gets a list of all tabs—including Lightning page tabs—available to the current user, regardless of whether the user has chosen to hide tabs via the All Tabs (**+**) tab customization feature. This resource is available in REST API version 31.0 and later.

## Syntax

URI

/services/data/vXX.X/tabs/

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None

Request parameters

None

## Example

Example Request

```

```

Example Response Body

This is a partial code sample, representing the Accounts tab.

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/tabs -H "Authentication: Bearer token"
```

```
[...,
  "colors" : [ {
    "color" : "6f7ccb",
    "context" : "primary",
    "theme" : "theme4"
  }, {
    "color" : "236FBD",
    "context" : "primary",
    "theme" : "theme3"
  } ],
  "custom" : false,
  "iconUrl" : "https://MyDomainName.my.salesforce.com/img/icon/accounts32.png",
  "icons" : [ {
    "contentType" : "image/png",
    "height" : 32,
    "theme" : "theme3",
    "url" : "https://MyDomainName.my.salesforce.com/img/icon/accounts32.png",
    "width" : 32
  }, {
    "contentType" : "image/png",
    "height" : 16,
    "theme" : "theme3",
    "url" : "https://MyDomainName.my.salesforce.com/img/icon/accounts16.png",
    "width" : 16
  }, {
    "contentType" : "image/svg+xml",
    "height" : 0,
    "theme" : "theme4",
    "url" : "https://MyDomainName.my.salesforce.com/img/icon/t4/standard/account.svg",
    "width" : 0
  }, {
    "contentType" : "image/png",
    "height" : 60,
    "theme" : "theme4",
    "url" : "https://MyDomainName.my.salesforce.com/img/icon/t4/standard/account_60.png",
    "width" : 60
  }, {
    "contentType" : "image/png",
    "height" : 120,
    "theme" : "theme4",
    "url" : "https://MyDomainName.my.salesforce.com/img/icon/t4/standard/account_120.png",
    "width" : 120
  } ],
  "label" : "Accounts",
  "miniIconUrl" : "https://MyDomainName.my.salesforce.com/img/icon/accounts16.png",
  "name" : "standard-Account",
  "sobjectName" : "Account",
  "url" : "https://MyDomainName.my.salesforce.com/001/o",
...]
```
