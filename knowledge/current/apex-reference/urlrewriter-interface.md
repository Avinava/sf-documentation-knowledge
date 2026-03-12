---
title: "UrlRewriter Interface"
domain: apex-reference
topic: urlrewriter-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.882Z
estimatedTokens: 867
namespace: Site
keywords: [UrlRewriter, Enables, rewriting, Sites, URLs., Usage, generateUrlFor, salesforceUrls, Important, mapRequestUrl, userFriendlyUrl]
---

# UrlRewriter Interface

> Enables rewriting Sites URLs.

**Namespace:** `Site`

# UrlRewriter Interface

Enables rewriting Sites URLs.

## Namespace

[Site](atlas.en-us.apexref.meta/apexref/apex_namespace_Site.htm "The Site namespace provides an interface for rewriting Sites URLs.")

## Usage

Sites provides built-in logic that helps you display user-friendly URLs and links to site visitors. Create rules to rewrite URL requests typed into the address bar, launched from bookmarks, or linked from external websites. You can also create rules to rewrite the URLs for links within site pages. URL rewriting not only makes URLs more descriptive and intuitive for users, it allows search engines to better index your site pages.

For example, let's say that you have a blog site. Without URL rewriting, a blog entry's URL might look like this: https://myblog.my.salesforce-sites.com/posts?id=003D000000Q0PcN

To rewrite URLs for a site, create an Apex class that maps the original URLs to user-friendly URLs, and then add the Apex class to your site.

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

## Related Topics

- Site (atlas.en-us.apexref.meta/apexref/apex_namespace_Site.htm)
- generateUrlFor(salesforceUrls) (atlas.en-us.apexref.meta/apexref/apex_site_urlRewriter_reference.htm)
- mapRequestUrl(userFriendlyUrl) (atlas.en-us.apexref.meta/apexref/apex_site_urlRewriter_reference.htm)
- System.PageReference (atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)
