---
title: "Working with Large Sets of Data"
domain: pages
topic: working-with-large-sets-of-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.337Z
estimatedTokens: 418
keywords: [Working, Large, Data, Visualforce, custom, controllers, controller, extensions, subject, Apex, governor, limits, Additionally, iteration, components]
---

# Working with Large Sets of Data

> Visualforce custom controllers and controller extensions are subject to Apex governor limits.
   For more information about governor limits. Additionally, Visualforce iteration components, such
   as <apex:pageBlockTable> and <apex:repeat>, are limited to a maximum of 1,000 items in
   the collectio

# Working with Large Sets of Data

Visualforce custom controllers and controller extensions are subject to Apex governor limits. For more information about governor limits. Additionally, Visualforce iteration components, such as <apex:pageBlockTable\> and <apex:repeat\>, are limited to a maximum of 1,000 items in the collection they iterate over.

Sometimes your Visualforce pages may need to work with or display larger sets of data, but not need to make modifications to that data; for example, if you are providing custom reporting and analytics. Visualforce offers developers a “read-only mode”, which relaxes the limit on the number of rows which can be queried in one request, and increases the limit on the number of collection items which can be iterated over within the page.

You can specify read-only mode either for an entire page or, with certain limitations, on individual components or methods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can only iterate over large sets of data if you specify read-only mode for the entire page.

-   **[Setting Read-Only Mode for an Entire Page for an Entire Page](atlas.en-us.pages.meta/pages/pages_controller_readonly_context_pagelevel.htm)**
    To enable read-only mode for an entire page, set the readOnly attribute on the <apex:page\> component to true.
-   **[Setting for Controller Methods for Controller Methods](atlas.en-us.pages.meta/pages/pages_controller_readonly_context_methodlevel.htm)**
    Visualforce controller methods can, with some important limitations, use the Apex ReadOnly annotation, even if the page itself isn’t in read-only mode.

## Related Topics

- Setting Read-Only Mode for an Entire Page for an Entire Page (atlas.en-us.pages.meta/pages/pages_controller_readonly_context_pagelevel.htm)
- Setting for Controller Methods for Controller Methods (atlas.en-us.pages.meta/pages/pages_controller_readonly_context_methodlevel.htm)
