---
title: "What are Custom Components?"
domain: pages
topic: what-are-custom-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.026Z
estimatedTokens: 505
keywords: [Custom, Components, Similar, way, encapsulate, piece, code, reuse, several, times, program, common, design, pattern, component]
---

# What are Custom Components?

> Similar to the way you can encapsulate a piece
of code in a method and then reuse that method several times in a
program, you can encapsulate a common design pattern in a custom component
and then reuse that component several times in one or more Visualforce pages.

# What are Custom Components?

Similar to the way you can encapsulate a piece of code in a method and then reuse that method several times in a program, you can encapsulate a common design pattern in a custom component and then reuse that component several times in one or more Visualforce pages.

For example, suppose you want to create a photo album using Visualforce pages. Each photo in the album has its own border color, and a text caption that displays beneath it. Rather than repeating the Visualforce markup required for displaying every photo in the album, you can define a custom component named singlePhoto that has attributes for image, border color, and caption, and then uses those attributes to display the image on the page. Once defined, every Visualforce page in your organization can leverage the singlePhoto custom component in the same way as a page can leverage standard components such as <apex:dataTable\> or <apex:relatedList\>.

Unlike page templates, which also enable developers to reuse markup, custom components provide more power and flexibility because:

-   Custom components allow developers to define attributes that can be passed in to each component. The value of an attribute can then change the way the markup is displayed on the final page, and the controller-based logic that executes for that instance of the component. This behavior differs from that of templates, which do not have a way of passing information from the page that uses a template to the template's definition itself.
-   Custom component descriptions are displayed in the application's component reference dialog alongside standard component descriptions. Template descriptions, on the other hand, can only be referenced through the Setup area of Salesforce because they are defined as pages.

#### See Also

-   [Defining Custom Components](atlas.en-us.pages.meta/pages/pages_comp_cust_creating.htm)

-   [Using Custom Components in a Visualforce Page](atlas.en-us.pages.meta/pages/pages_comp_cust_using.htm)

## Related Topics

- Defining Custom Components (atlas.en-us.pages.meta/pages/pages_comp_cust_creating.htm)
- Using Custom Components in a Visualforce Page (atlas.en-us.pages.meta/pages/pages_comp_cust_using.htm)
