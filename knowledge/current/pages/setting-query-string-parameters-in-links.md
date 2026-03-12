---
title: "Setting Query String Parameters in Links"
domain: pages
topic: setting-query-string-parameters-in-links
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.032Z
estimatedTokens: 166
keywords: [Setting, Query, Links, pages, constructing, link, URL, manually, <apex, param>, tags, outputLink>, tag, examples, identical]
---

# Setting Query String Parameters in Links

> You can set query string parameters in links to pages by constructing
the link URL manually, or by using <apex:param> tags within the <apex:outputLink> tag. For example,
both of the following examples create identical links to an external
page:

# Setting Query String Parameters in Links

You can set query string parameters in links to pages by constructing the link URL manually, or by using <apex:param\> tags within the <apex:outputLink\> tag. For example, both of the following examples create identical links to an external page:

```

```

```

```

The latter method, which uses <apex:param\> tags instead of manually creating the URL, is preferable for stylistic reasons.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

In addition to <apex:outputLink\>, use <apex:param\> to set request parameters for <apex:commandLink\>, and <apex:actionFunction\>.

## Code Examples

```
<apex:outputLink value="http://google.com/search?q={!account.name}">
    Search Google
</apex:outputLink>
```

```
<apex:outputLink value="http://google.com/search">
    Search Google
    <apex:param name="q" value="{!account.name}"/>
</apex:outputLink>
```
