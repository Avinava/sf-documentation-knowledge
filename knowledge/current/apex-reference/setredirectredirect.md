---
title: "setRedirect(redirect)"
domain: apex-reference
topic: setredirectredirect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.937Z
estimatedTokens: 324
keywords: [setRedirect, redirect, PageReference, object's, attribute, performed, client, side, Usage]
---

# setRedirect(redirect)

> Sets the value of the PageReference object's redirect attribute. If set to true, a redirect is performed through
a client side redirect.

# setRedirect(redirect)

Sets the value of the PageReference object's redirect attribute. If set to true, a redirect is performed through a client side redirect.

## Signature

public System.PageReference setRedirect(Boolean redirect)

## Parameters

redirect

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

## Usage

This type of redirect performs an HTTP GET request, and flushes the view state, which uses POST. If set to false, the redirect is a server-side forward that preserves the view state if and only if the target page uses the same controller and contains the proper subset of extensions used by the source page.

Note that if the URL of the PageReference object is set to a website outside of the salesforce.com domain, or to a page with a different controller or controller extension, the redirect always occurs, regardless of whether the redirect attribute is set to true or false.

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- System.PageReference (atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)
