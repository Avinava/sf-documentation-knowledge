---
title: "getContent()"
domain: apex-reference
topic: getcontent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.227Z
estimatedTokens: 271
keywords: [getContent, output, page, displayed, user, web, browser., Usage]
---

# getContent()

> Returns the output of the page, as displayed to a user in a web browser.

# getContent()

Returns the output of the page, as displayed to a user in a web browser.

## Signature

public Blob getContent()

## Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

## Usage

The content of the returned Blob depends on how the page is rendered. If the page is rendered as a PDF file, it returns the PDF document. If the page isn’t rendered as PDF, it returns HTML. To access the content of the returned HTML as a string, use the toString Blob method. If the Visualforce page has an error, an ExecutionException is thrown.

You can’t use the getContent method in:

-   Triggers
-   Test methods. If you use getContent in a test method, the test method fails. getContent is treated as a callout in API version 34.0 and later.
-   Apex email services

You also can’t use the method to retrieve the output of a different Visualforce page with the same controller and controller extensions. Instead, pass the base URL of the destination page.

```

```

## Code Examples

```
new PageReference(Site.getBaseUrl() + '/apex/VisualforcePageName').getContent();
```

## Related Topics

- Blob (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
