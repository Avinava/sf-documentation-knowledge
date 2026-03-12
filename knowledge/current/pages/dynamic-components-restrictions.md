---
title: "Dynamic Components Restrictions"
domain: pages
topic: dynamic-components-restrictions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.455Z
estimatedTokens: 374
keywords: [Dynamic, Components, Restrictions]
---

# Dynamic Components Restrictions

# Dynamic Components Restrictions

Not every feature of Visualforce makes sense in a dynamic context, so some components aren’t available dynamically.

-   The following standard Visualforce components don’t have corresponding dynamic representations in Apex:
    -   <apex:attribute\>
    -   <apex:component\>
    -   <apex:componentBody\>
    -   <apex:composition\>
    -   <apex:define\>
    -   <apex:dynamicComponent\>
    -   <apex:include\>
    -   <apex:insert\>
    -   <apex:param\>
    -   <apex:variable\>
-   If a dynamic Visualforce component refers to a specific sObject field, and that field is later deleted, the Apex code for that field reference will still compile, but the page will fail when it is viewed. Also, you can create references to global variables such as $Setup or $Label, and then delete the referenced item, with similar results. Please verify such pages continue to work as expected.
-   Dynamic Visualforce pages and expressions check attribute types more strictly than static pages.
-   You can’t set [“pass-through” HTML attributes](atlas.en-us.pages.meta/pages/pages_html_features_pass_through_attributes.htm "You can add arbitrary attributes to many Visualforce components that are “passed through” to the rendered HTML. This is useful, for example, when using Visualforce with JavaScript frameworks, such as jQuery Mobile, AngularJS, and Knockout, which use data-* or other attributes as hooks to activate framework functions.") on dynamic components.

## Related Topics

- “pass-through” HTML attributes (atlas.en-us.pages.meta/pages/pages_html_features_pass_through_attributes.htm)
