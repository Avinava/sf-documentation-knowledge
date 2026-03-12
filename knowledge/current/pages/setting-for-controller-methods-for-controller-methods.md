---
title: "Setting  for Controller Methods for Controller Methods"
domain: pages
topic: setting-for-controller-methods-for-controller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.339Z
estimatedTokens: 441
keywords: [Setting, Controller, Visualforce, limitations, Apex, ReadOnly, annotation, itself, isn’t, read-only, mode]
---

# Setting  for Controller Methods for Controller Methods

> Visualforce controller methods can, with some important limitations, use the Apex
   ReadOnly annotation, even if the page itself isn’t
  in read-only mode.

# Setting for Controller Methods for Controller Methods

Visualforce controller methods can, with some important limitations, use the Apex ReadOnly annotation, even if the page itself isn’t in read-only mode.

Visualforce controller methods with the @ReadOnly annotation automatically take advantage of read-only mode.. However, restrictions on the @ReadOnly annotation means that, for Visualforce controller methods, a read-only method must also have the @RemoteAction annotation. The @RemoteAction annotation requires that the method be:

-   Either global or public
-   static

Enabling read-only mode. by using the @ReadOnly annotation must be done on the top level method call. If the top level method call doesn’t have the@ReadOnly annotation, the normal restrictions on maximum queried rows are enforced for the entire request, even if secondary methods are annotated with @ReadOnly.

Using the @ReadOnly annotation on a controller method allows you to retrieve a larger collection of records as the result of a Visualforce expression. However, it doesn’t increase the maximum number of items in a collection for iteration components. If you want to iterate over larger collections of results, you need to enable read-only mode. for the entire page.

#### See Also

-   [Setting Read-Only Mode for an Entire Page for an Entire Page](atlas.en-us.pages.meta/pages/pages_controller_readonly_context_pagelevel.htm "To enable read-only mode for an entire page, set the readOnly attribute on the <apex:page> component to true.")

-   [*Apex Developer Guide*: ReadOnly Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm "Apex Developer Guide: ReadOnly Annotation - html (New Window)")

## Related Topics

- Setting Read-Only Mode for an Entire Page for an Entire Page (atlas.en-us.pages.meta/pages/pages_controller_readonly_context_pagelevel.htm)
