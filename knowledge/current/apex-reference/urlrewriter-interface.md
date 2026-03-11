---
title: "UrlRewriter Interface"
domain: apex-reference
topic: urlrewriter-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.336Z
keywords: [UrlRewriter, Interface, Maps, user-friendly, URL, Salesforce, URL., mapRequestUrl, userFriendlyUrl, Signature, Parameters, Return, Value]
---

# UrlRewriter Interface

> Maps a user-friendly URL to a Salesforce URL.

### mapRequestUrl(userFriendlyUrl)

Maps a user-friendly URL to a Salesforce URL.

#### Signature

public System.PageReference mapRequestUrl(System.PageReference userFriendlyUrl)

#### Parameters

userFriendlyUrl

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")