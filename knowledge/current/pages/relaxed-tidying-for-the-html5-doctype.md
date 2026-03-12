---
title: "Relaxed Tidying for the HTML5 Doctype"
domain: pages
topic: relaxed-tidying-for-the-html5-doctype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.672Z
estimatedTokens: 500
keywords: [Relaxed, Tidying, HTML5, Doctype, relax, HTML, applications, causes, problems, “html-5.0”, API, version, 28.0, greater]
---

# Relaxed Tidying for the HTML5 Doctype

> To relax the default HTML tidying for HTML5 applications where it causes problems, set
  the docType to “html-5.0” and the API
  version to 28.0 or greater.

# Relaxed Tidying for the HTML5 Doctype

To relax the default HTML tidying for HTML5 applications where it causes problems, set the docType to “html-5.0” and the API version to 28.0 or greater.

Beginning in API version 28.0, the tidying behavior for Visualforce pages with docType="html–5.0" changed for the POSTBACK context, so that HTML5 tags and attributes aren’t stripped away. Visualforce always validates the XML correctness of every page when it’s saved, and requires that the page be well-formed XML, but post-process tidying no longer removes unknown tags or attributes for POSTBACK requests. This should make it much easier to work with HTML5 and JavaScript frameworks that use HTML attributes extensively.

It’s worth remembering that while modern browsers are very good at doing their own tidying, that behavior is less consistent than rendering valid markup. Reduced HTML tidying in html–5.0 mode represents a smaller safety net, in return for significantly increased flexibility. We recommend you use this relaxed tidying mode only on HTML5 pages that need it, and with HTML validation and debugging tools in hand.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

In API version 28.0 or greater, the scope of how the docType is determined for a page is different. When child pages are added to a root page using <apex:include\>, if *any* page in the hierarchy is set to docType="html–5.0" and the *root* page is set to API version 28.0 or later, the *entire* page hierarchy is rendered in html–5.0 mode.

#### See Also

-   [Using a Custom Doctype](atlas.en-us.pages.meta/pages/pages_styling_doctype.htm "You can specify a different “doctype” (document type, or DTD) for a Visualforce page by using the docType attribute on the <apex:page> tag. This changes the doctype declaration at the beginning of the page. This is particularly useful if you’re working with HTML5, and might also allow you to address browser compatibility issues.")

## Related Topics

- Using a Custom Doctype (atlas.en-us.pages.meta/pages/pages_styling_doctype.htm)
