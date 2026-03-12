---
title: "Get AppMenu Mobile Items"
domain: rest-api
topic: get-appmenu-mobile-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.227Z
estimatedTokens: 120
keywords: [AppMenu, Mobile, Items, App, Menu, Salesforce, Android, iOS, web, navigation, resource, REST, API, version, 29.0]
---

# Get AppMenu Mobile Items

> Gets a list of the App Menu items in the Salesforce mobile app for Android and iOS and
    the mobile web navigation menu. This resource is available in REST API version 29.0 and
    later.

# Get AppMenu Mobile Items

Gets a list of the App Menu items in the Salesforce mobile app for Android and iOS and the mobile web navigation menu. This resource is available in REST API version 29.0 and later.

## Syntax

URI

/services/data/vXX.X/appMenu/Salesforce1/

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None

Request parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/appMenu/Salesforce1/ -H "Authorization: Bearer token"
```

```
{
  "appMenuItems" : [ {
    "type" : "Standard.Search",
    "content" : null,
    "icons" : null,
    "colors" : null,
    "label" : "Smart Search Items",
    "url" : "/search"
  }, {
    "type" : "Standard.MyDay",
    "content" : null,
    "icons" : null,
    "colors" : null,
    "label" : "Today",
    "url" : "/myDay"
  }, {
    "type" : "Standard.Tasks",
    "content" : null,
    "icons" : null,
    "colors" : null,
    "label" : "Tasks",
    "url" : "/tasks"
  }, {
    "type" : "Standard.Dashboards",
    "content" : null,
    "icons" : null,
    "colors" : null,
    "label" : "Dashboards",
    "url" : "/dashboards"
  }, {
    "type" : "Tab.flexiPage",
    "content" : "MySampleFlexiPage",
    "icons" : [ {
      "contentType" : "image/png",
      "width" : 32,
      "height" : 32,
      "theme" : "theme3",
      "url" : "http://myorg.com/img/icon/custom51_100/bell32.png"
    }, {
      "contentType" : "image/png",
      "width" : 16,
      "height" : 16,
      "theme" : "theme3",
      "url" : "http://myorg.com/img/icon/custom51_100/bell16.png"
    }, {
      "contentType" : "image/svg+xml",
      "width" : 0,
      "height" : 0,
      "theme" : "theme4",
      "url" : "http://myorg.com/img/icon/t4/custom/custom53.svg"
    }, {
      "contentType" : "image/png",
      "width" : 60,
      "height" : 60,
      "theme" : "theme4",
      "url" : "http://myorg.com/img/icon/t4/custom/custom53_60.png"
    }, {
      "contentType" : "image/png",
      "width" : 120,
      "height" : 120,
      "theme" : "theme4",
      "url" : "http://myorg.com/img/icon/t4/custom/custom53_120.png"
    } ],
    "colors" : [ {
      "context" : "primary",
      "color" : "FC4F59",
      "theme" : "theme4"
    }, {
      "context" : "primary",
      "color" : "FC4F59",
      "theme" : "theme3"
    } ],
    "label" : "My App Home Page",
    "url" : "/servlet/servlet.Integration?lid=01rxx0000000Vsd&ic=1"
  }, {
    "type" : "Tab.apexPage",
    "content" : "/apex/myapexpage",
    "icons" : [ {
      "contentType" : "image/png",
      "width" : 32,
      "height" : 32,
      "theme" : "theme3",
      "url" : "http://myorg.com/img/icon/cash32.png"
    }, {
      "contentType" : "image/png",
      "width" : 16,
      "height" : 16,
      "theme" : "theme3",
      "url" : "http://myorg.com/img/icon/cash16.png"
    }, {
      "contentType" : "image/svg+xml",
      "width" : 0,
      "height" : 0,
      "theme" : "theme4",
      "url" : "http://myorg.com/img/icon/t4/custom/custom41.svg"
    }, {
      "contentType" : "image/png",
      "width" : 60,
      "height" : 60,
      "theme" : "theme4",
      "url" : "http://myorg.com/img/icon/t4/custom/custom41_60.png"
    }, {
      "contentType" : "image/png",
      "width" : 120,
      "height" : 120,
      "theme" : "theme4",
      "url" : "http://myorg.com/img/icon/t4/custom/custom41_120.png"
    } ],
    "colors" : [ {
      "context" : "primary",
      "color" : "3D8D8D",
      "theme" : "theme4"
    }, {
      "context" : "primary",
      "color" : "3D8D8D",
      "theme" : "theme3"
    } ],
    "label" : "label",
    "url" : "/servlet/servlet.Integration?lid=01rxx0000000Vyb&ic=1"
  } ]
}
```
