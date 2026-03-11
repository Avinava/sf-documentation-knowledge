---
title: "UrlRewriter Methods"
domain: apex-reference
topic: urlrewriter-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.336Z
keywords: [UrlRewriter, Methods, Maps, list, Salesforce, URLs, user-friendly, URLs., generateUrlFor, salesforceUrls, Signature, Parameters, Return, Value, Usage, Important, mapRequestUrl, userFriendlyUrl]
---

# UrlRewriter Methods

> Maps a list of Salesforce URLs to a list of user-friendly URLs.

## UrlRewriter Methods

The following are methods for UrlRewriter. All are instance methods.

-   **[generateUrlFor(salesforceUrls)](atlas.en-us.apexref.meta/apexref/apex_site_urlRewriter_reference.htm#apex_Site_UrlRewriter_generateUrlFor)**  
    Maps a list of Salesforce URLs to a list of user-friendly URLs.
-   **[mapRequestUrl(userFriendlyUrl)](atlas.en-us.apexref.meta/apexref/apex_site_urlRewriter_reference.htm#apex_Site_UrlRewriter_mapRequestUrl)**  
    Maps a user-friendly URL to a Salesforce URL.

### generateUrlFor(salesforceUrls)

Maps a list of Salesforce URLs to a list of user-friendly URLs.

#### Signature

public System.PageReference\[\] generateUrlFor(System.PageReference\[\] salesforceUrls)

#### Parameters

salesforceUrls

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")\[\]

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")\[\]

#### Usage

You can use List<PageReference> instead of PageReference\[\], if you prefer.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The size and order of the input list of Salesforce URLs must exactly correspond to the size and order of the generated list of user-friendly URLs. The generateUrlFor method maps input URLs to output URLs based on the order in the lists.

### mapRequestUrl(userFriendlyUrl)

Maps a user-friendly URL to a Salesforce URL.

#### Signature

public System.PageReference mapRequestUrl(System.PageReference userFriendlyUrl)

#### Parameters

userFriendlyUrl

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")