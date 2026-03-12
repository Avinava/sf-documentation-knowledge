---
title: "Styling Visualforce Pages"
domain: pages
topic: styling-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.179Z
estimatedTokens: 1136
keywords: [Styling, Visualforce, Pages, It’s, easy, style, either, mimicking, look, feel, standard, Salesforce, own, stylesheets, content]
---

# Styling Visualforce Pages

> It’s easy to style a Visualforce
  page, either by mimicking the look and feel of a standard Salesforce page, or by using your own
  stylesheets or content types.

# Styling Visualforce Pages

It’s easy to style a Visualforce page, either by mimicking the look and feel of a standard Salesforce page, or by using your own stylesheets or content types.

Many Visualforce components have a style or styleClass attribute. Defining either of these attributes allows you to associate CSS code with the component. Custom CSS code enables you to change the default visual style of a component, including its width, height, color, and font.

-   **[Using Salesforce Styles](atlas.en-us.pages.meta/pages/pages_styling_salesforce.htm)**
    Many Visualforce components already have the look and feel of the same components in Salesforce, such as the related list in a detail page, or a section header. Part of the styling of these components, including the component’s color scheme, is based on the tab on which the component appears. You can specify the tab style that should be used to style a component by associating a page with a standard controller, or by setting the tabStyle attribute on the <apex:page\> or <apex:pageBlock\> tags.
-   **[Extending Salesforce Styles with Stylesheets](atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm)**
    Use the <apex:stylesheet\> tag to add additional stylesheets to a page. Use the style or styleClass attribute available on most Visualforce components to connect them to style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your own.
-   **[Using the Lightning Design System](atlas.en-us.pages.meta/pages/pages_styling_slds.htm)**
    Use the <apex:slds\> element to incorporate the Lightning Design System in your Visualforce pages and align them with the styling of Lightning Experience. This component is a streamlined alternative to uploading the Lightning Design System as a static resource and using it in your Visualforce pages.
-   **[Style Existing Visualforce Pages with Lightning Experience Stylesheets](atlas.en-us.pages.meta/pages/vf_dev_best_practices_slds_lightningstylesheets.htm)**
    You can control whether a page is styled with the look of Lightning Experience when viewed in Lightning Experience or the Salesforce mobile app with the lightningStylesheets attribute.
-   **[Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm)**
    Use the <apex:stylesheet\> tag or static HTML to include your own style sheet or styles.
-   **[Suppressing the Salesforce User Interface and Styles](atlas.en-us.pages.meta/pages/pages_styling_suppressing_salesforce_stylesheets.htm)**
    By default, Visualforce pages adopt the same visual styling and user interface “chrome” as the rest of Salesforce. This default styling behavior lets you create pages that look like they’re built right into Salesforce. If you don’t want a page to have the Salesforce look and feel, you can suppress various aspects of the Salesforce page and visual design.
-   **[Defining Styles for a Component’s DOM ID](atlas.en-us.pages.meta/pages/pages_styling_custom_using_component_id.htm)**
    Use CSS attribute selectors for the style definition if you want to apply a style using a DOM ID. Attribute selectors rely on the definition of an attribute, rather than an HTML tag, to apply a CSS style.
-   **[Using Styles from Salesforce Stylesheets](atlas.en-us.pages.meta/pages/pages_styling_using_salesforce_stylesheets.htm)**
    Salesforce uses different stylesheets (.css files) throughout the application to ensure that every tab conforms to the Salesforce look and feel. These stylesheets are automatically included on a Visualforce page unless you specify false for the showHeader attribute of the <apex:page\> tag.
-   **[Identifying the Salesforce Style Your Users See](atlas.en-us.pages.meta/pages/pages_styling_salesforce_identifying_theme.htm)**
    When you’re creating a Visualforce page, it’s often useful to know the Salesforce look and feel your user expects, in order to render a page that matches their style. For example, some users have the choice to customize their look and feel. You’ll need to design your Visualforce pages to take these differences into consideration.
-   **[Determining the Salesforce Style That Users See in JavaScript](atlas.en-us.pages.meta/pages/pages_styling_javascript_identifying_theme.htm)**
    If you use a lot of JavaScript in your pages and apps, identifying the Salesforce theme that a user sees in JavaScript code is important. Identifying the current user experience context allows you to correctly manage navigation in your JavaScript code.

## Related Topics

- Using Salesforce Styles (atlas.en-us.pages.meta/pages/pages_styling_salesforce.htm)
- Extending Salesforce Styles with Stylesheets (atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm)
- Using the Lightning Design System (atlas.en-us.pages.meta/pages/pages_styling_slds.htm)
- Style Existing Visualforce Pages with Lightning Experience Stylesheets (atlas.en-us.pages.meta/pages/vf_dev_best_practices_slds_lightningstylesheets.htm)
- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
- Suppressing the Salesforce User Interface and Styles (atlas.en-us.pages.meta/pages/pages_styling_suppressing_salesforce_stylesheets.htm)
- Defining Styles for a Component’s DOM ID (atlas.en-us.pages.meta/pages/pages_styling_custom_using_component_id.htm)
- Using Styles from Salesforce Stylesheets (atlas.en-us.pages.meta/pages/pages_styling_using_salesforce_stylesheets.htm)
- Identifying the Salesforce Style Your Users See (atlas.en-us.pages.meta/pages/pages_styling_salesforce_identifying_theme.htm)
- Determining the Salesforce Style That Users See in JavaScript (atlas.en-us.pages.meta/pages/pages_styling_javascript_identifying_theme.htm)
