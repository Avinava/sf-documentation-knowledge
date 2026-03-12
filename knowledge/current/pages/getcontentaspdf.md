---
title: "getContentAsPDF()"
domain: pages
topic: getcontentaspdf
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.669Z
estimatedTokens: 155
keywords: [getContentAsPDF, PDF, regardless, <apex, page>, component’s, renderAs, attribute, Usage]
---

# getContentAsPDF()

> Returns the page in PDF, regardless of the <apex:page> component’s renderAs
    attribute.

# getContentAsPDF()

Returns the page in PDF, regardless of the <apex:page\> component’s renderAs attribute.

## Signature

public Blob getContentAsPDF()

## Return Value

Type: Blob

## Usage

This method can’t be used in:

-   Triggers
-   Test methods. If you use getContentAsPDF in a test method, the test method fails. getContentAsPDF is treated as a callout in API version 34.0 and later.
-   Apex email services

You also can’t use the method to retrieve the output of a different Visualforce page with the same controller and controller extensions. Instead, pass the base URL of the destination page.

```

```

## Code Examples

```
new PageReference(Site.getBaseUrl() + '/apex/VisualforcePageName').getContentAsPDF();
```
