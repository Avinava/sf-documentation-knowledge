---
title: "Using Salesforce Styles"
domain: pages
topic: using-salesforce-styles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.206Z
estimatedTokens: 298
keywords: [Salesforce, Styles, Visualforce, components, already, look, feel, detail, Part, styling, including, component’s, color, scheme, tab]
---

# Using Salesforce Styles

> Many Visualforce components
        already have the look and feel of the same components in Salesforce, such as the related list
        in a detail page, or a section header. Part of the styling of these components, including
        the component’s color scheme, is based on the tab on which the component appears. You can
        specify the tab style that should be used to style a component by associating a page with a
        standard controller, or by setting the tabStyle
        attribute on the <apex:page> or <apex:pageBlock> tags.

# Using Salesforce Styles

Many Visualforce components already have the look and feel of the same components in Salesforce, such as the related list in a detail page, or a section header. Part of the styling of these components, including the component’s color scheme, is based on the tab on which the component appears. You can specify the tab style that should be used to style a component by associating a page with a standard controller, or by setting the tabStyle attribute on the <apex:page\> or <apex:pageBlock\> tags.

-   When you use a standard controller with a Visualforce page, your new page takes on the style of the associated object’s standard tab in Salesforce. It also allows you to access the methods and records associated with the associated object.
-   When you use a custom controller, the tabStyle attribute of an <apex:page\> tag allows you to mimic the look and feel of the associated Salesforce page. If you only want portions of the page to be similar to a Salesforce page, you can use the tabStyle attribute on the <apex:pageBlock\> tag. For an example, see [Defining Getter Methods](atlas.en-us.pages.meta/pages/pages_quick_start_controller_getter_methods.htm).

## Related Topics

- Defining Getter Methods (atlas.en-us.pages.meta/pages/pages_quick_start_controller_getter_methods.htm)
