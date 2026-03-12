---
title: "$Page"
domain: pages
topic: page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.420Z
estimatedTokens: 48
keywords: [$Page, merge, referencing, Visualforce, Usage]
---

# $Page

> A global merge field type to use when referencing a Visualforce page.

# $Page

A global merge field type to use when referencing a Visualforce page.

## Usage

Use this expression in a Visualforce page to link to another Visualforce page.

## Example

```

```

## Code Examples

```
<apex:page>
  <h1>Linked</h1>
  <apex:outputLink value="{!$Page.otherPage}">
    This is a link to another page.
  </apex:outputLink>
</apex:page>
```
