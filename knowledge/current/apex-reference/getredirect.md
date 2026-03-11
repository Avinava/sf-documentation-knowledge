---
title: "getRedirect()"
domain: apex-reference
topic: getredirect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.049Z
keywords: [getRedirect, Signature, Return, Value, Usage]
---

# getRedirect()

# getRedirect()

Returns the current value of the PageReference object's redirect attribute.

## Signature

public Boolean getRedirect()

## Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Usage

Note that if the URL of the PageReference object is set to a website outside of the salesforce.com domain, the redirect always occurs, regardless of whether the redirect attribute is set to true or false.