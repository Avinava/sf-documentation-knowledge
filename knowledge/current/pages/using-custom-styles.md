---
title: "Using Custom Styles"
domain: pages
topic: using-custom-styles
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.193Z
estimatedTokens: 931
keywords: [Custom, Styles, <apex, stylesheet>, tag, HTML, include, own, style, sheet]
---

# Using Custom Styles

> Use the <apex:stylesheet> tag or static
        HTML to include your own style sheet or styles.

# Using Custom Styles

Use the <apex:stylesheet\> tag or static HTML to include your own style sheet or styles.

For HTML tags, you can define inline CSS code, just like in a regular HTML page.

```

```

This example references a style sheet that is defined as a static resource. First, create a style sheet and upload it as a static resource named customCSS.

```

```

Next, create a page that refers to this static resource.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

If you’re not using Salesforce styles, you can shrink your page size by preventing the standard Salesforce style sheets from loading. To prevent loading, set the standardStylesheets attribute on the <apex:page\> component to false.

```

```

If you don’t load the Salesforce style sheets, components that require them don’t display correctly.

Visualforce components that produce HTML have pass-through style and styleClass attributes. These attributes allow you to use your own styles and style classes to control the look and feel of the resulting HTML. style allows you to set styles directly on a component, while styleClass lets you attach classes for styles defined elsewhere. For example, the following code sets the class of the <apex:outputText\> and applies a style.

```

```

To apply a style using a DOM ID, use CSS attribute selectors for the style definition. See [Defining Styles for a Component’s DOM ID](atlas.en-us.pages.meta/pages/pages_styling_custom_using_component_id.htm#pages_styling_custom_using_component_id "Use CSS attribute selectors for the style definition if you want to apply a style using a DOM ID. Attribute selectors rely on the definition of an attribute, rather than an HTML tag, to apply a CSS style.").

If you intend to use images in your style sheet, zip the images with the CSS file, and upload the file as a single static resource. For example, suppose your CSS file has a line like the following.

```

```

Combine the entire images directory and the parent CSS file into a single zip file. In this example, the zip file resource name is myStyles.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

If a style sheet has an empty string in a url value, you can’t render that page as a PDF. For example, the style rule body { background-image: url(""); } prevents any page that includes the rule from being rendered as a PDF.

#### See Also

-   [Extending Salesforce Styles with Stylesheets](atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm "Use the <apex:stylesheet> tag to add additional stylesheets to a page. Use the style or styleClass attribute available on most Visualforce components to connect them to style definitions in your stylesheets. This technique lets you extend the Salesforce styles with your own.")

-   [Suppressing the Salesforce User Interface and Styles](atlas.en-us.pages.meta/pages/pages_styling_suppressing_salesforce_stylesheets.htm "By default, Visualforce pages adopt the same visual styling and user interface “chrome” as the rest of Salesforce. This default styling behavior lets you create pages that look like they’re built right into Salesforce. If you don’t want a page to have the Salesforce look and feel, you can suppress various aspects of the Salesforce page and visual design.")

-   [Defining Styles for a Component’s DOM ID](atlas.en-us.pages.meta/pages/pages_styling_custom_using_component_id.htm "Use CSS attribute selectors for the style definition if you want to apply a style using a DOM ID. Attribute selectors rely on the definition of an attribute, rather than an HTML tag, to apply a CSS style.")

## Code Examples

```
<apex:page>
    <style type="text/css">
        p { font-weight: bold; }
    </style>

    <p>This is some strong text!</p>
</apex:page>
```

```
h1 { color: #f00; }
p { background-color: #eec; }
.newLink { color: #f60; font-weight: bold; }
```

```
<apex:page showHeader="false">
    <apex:stylesheet value="{!$Resource.customCSS}" />
    <h1>Testing Custom Stylesheets</h1>
    <p>This text could go on forever...<br/><br/>
       But it won't!</p>

    <apex:outputLink value="https://salesforce.com" styleClass="newLink">
        Click here to switch to www.salesforce.com
    </apex:outputLink>
</apex:page>
```

```
<apex:page standardStylesheets="false">
    <!-- page content here -->
</apex:page>
```

```
<apex:page>

    <style type="text/css">
        .asideText { font-style: italic; }
    </style>

    <apex:outputText style="font-weight: bold;" 
        value="This text is styled directly."/>

    <apex:outputText styleClass="asideText" 
        value="This text is styled via a stylesheet class."/>

</apex:page>
```

## Related Topics

- Defining Styles for a Component’s DOM ID (atlas.en-us.pages.meta/pages/pages_styling_custom_using_component_id.htm)
- Extending Salesforce Styles with Stylesheets (atlas.en-us.pages.meta/pages/pages_styling_adding_stylesheets.htm)
- Suppressing the Salesforce User Interface and Styles (atlas.en-us.pages.meta/pages/pages_styling_suppressing_salesforce_stylesheets.htm)
