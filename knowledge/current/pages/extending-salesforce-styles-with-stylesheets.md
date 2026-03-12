---
title: "Extending Salesforce Styles with
    Stylesheets"
domain: pages
topic: extending-salesforce-styles-with-stylesheets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.182Z
estimatedTokens: 246
keywords: [Extending, Salesforce, Styles, Stylesheets, <apex, stylesheet>, tag, add, additional, style, styleClass, attribute, Visualforce, components, connect]
---

# Extending Salesforce Styles with
    Stylesheets

> Use the <apex:stylesheet> tag to add
    additional stylesheets to a page. Use the style or
      styleClass attribute available on most Visualforce components to connect them to
    style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your
    own.

# Extending Salesforce Styles with Stylesheets

Use the <apex:stylesheet\> tag to add additional stylesheets to a page. Use the style or styleClass attribute available on most Visualforce components to connect them to style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your own.

The following markup shows a very basic page. The <apex:stylesheet\> tag references a CSS stylesheet that is saved as a static resource named TestStyles and listed on the Static Resources page. It’s referenced by the $Resource global variable in the <apex:stylesheet\> tag’s value attribute. The styleClass attribute of the <apex:outputText\> tag uses the sample style class defined in the style sheet.

```

```

This is the style sheet used for this example.

```

```

#### See Also

-   [Using Custom Styles](atlas.en-us.pages.meta/pages/pages_styling_custom.htm "Use the <apex:stylesheet> tag or static HTML to include your own style sheet or styles.")

## Code Examples

```
<apex:page>
    <apex:stylesheet value="{!$Resource.TestStyles}"/>
    <apex:outputText value="Styled Text in a sample style class" styleClass="sample"/>
</apex:page>
```

```
.sample {
    font-weight: bold;
}
```

## Related Topics

- Using Custom Styles (atlas.en-us.pages.meta/pages/pages_styling_custom.htm)
