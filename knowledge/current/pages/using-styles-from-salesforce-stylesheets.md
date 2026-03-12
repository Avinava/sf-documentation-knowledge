---
title: "Using Styles from Salesforce Stylesheets"
domain: pages
topic: using-styles-from-salesforce-stylesheets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.227Z
estimatedTokens: 541
keywords: [Styles, Salesforce, Stylesheets, uses, different, css, files, throughout, application, ensure, every, tab, conforms, look, feel]
---

# Using Styles from Salesforce Stylesheets

> Salesforce uses different stylesheets (.css files) throughout the application to ensure
    that every tab conforms to the Salesforce look and feel. These stylesheets are automatically
    included on a Visualforce page unless you specify false for
    the showHeader attribute of the <apex:page> tag.

# Using Styles from Salesforce Stylesheets

Salesforce uses different stylesheets (.css files) throughout the application to ensure that every tab conforms to the Salesforce look and feel. These stylesheets are automatically included on a Visualforce page unless you specify false for the showHeader attribute of the <apex:page\> tag.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

Salesforce stylesheets aren’t versioned, and the appearance and class names of components change without notice. Salesforce strongly recommends that you use Visualforce components that mimic the look-and-feel of Salesforce styles instead of directly referencing—and depending upon—Salesforce stylesheets.

When you disable the inclusion of the Salesforce stylesheets, only your custom stylesheets affect the styling of the page. For the purposes of building up styles that partially or fully match the Salesforce look and feel, you might want to look at and use selected contents from the default stylesheets.

The following stylesheets contain style classes you can reference. They are located in the /dCSS/ directory of your Salesforce instance.

-   dStandard.css – Contains the majority of style definitions for standard objects and tabs.
-   allCustom.css – Contains style definitions for custom tabs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Salesforce doesn’t provide notice of changes to or documentation of the built-in styles. Use at your own risk.

#### See Also

-   [Extending Salesforce Styles with Stylesheets](atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm "Use the <apex:stylesheet> tag to add additional stylesheets to a page. Use the style or styleClass attribute available on most Visualforce components to connect them to style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your own.")

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

## Related Topics

- Extending Salesforce Styles with Stylesheets (atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm)
- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
