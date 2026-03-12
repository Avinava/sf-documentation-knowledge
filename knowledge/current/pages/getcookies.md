---
title: "getCookies()"
domain: pages
topic: getcookies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.671Z
estimatedTokens: 140
keywords: [getCookies, map, cookie, objects, key, Usage]
---

# getCookies()

> Returns a map of cookie names and cookie objects, where the key is a String of the cookie
  name and the the value contains the cookie object with that name.

# getCookies()

Returns a map of cookie names and cookie objects, where the key is a String of the cookie name and the the value contains the cookie object with that name.

## Signature

public Map<String, System.Cookie> getCookies()

## Return Value

Type: Map<String, [System.Cookie](atlas.en-us.pages.meta/pages/apex_classes_sites_cookie.htm "The Cookie class lets you access cookies for your Salesforce site using Apex.")\>

## Usage

Used in conjunction with the Cookie class. Only returns cookies with the “apex\_\_” prefix set by the setCookies method.

## Related Topics

- System.Cookie (atlas.en-us.pages.meta/pages/apex_classes_sites_cookie.htm)
