---
title: "getCookies()"
domain: apex-reference
topic: getcookies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.043Z
keywords: [getCookies, Signature, Return, Value, Usage]
---

# getCookies()

# getCookies()

Returns a map of cookie names and cookie objects, where the key is a String of the cookie name and the the value contains the cookie object with that name.

## Signature

public Map<String, System.Cookie> getCookies()

## Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [System.Cookie](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_classes_sites_cookie "The Cookie class lets you access cookies for your Salesforce site using Apex.")\>

## Usage

Used in conjunction with the Cookie class. Only returns cookies with the “apex\_\_” prefix set by the setCookies method.