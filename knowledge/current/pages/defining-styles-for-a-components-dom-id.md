---
title: "Defining Styles for a Component’s DOM ID"
domain: pages
topic: defining-styles-for-a-components-dom-id
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.195Z
estimatedTokens: 368
keywords: [Defining, Styles, Component’s, DOM, CSS, attribute, selectors, style, definition, want, apply, rely, rather, HTML, tag]
---

# Defining Styles for a Component’s DOM ID

> Use CSS attribute selectors for the style definition if you want to apply a style
        using a DOM ID. Attribute selectors rely on the definition of an attribute, rather than an
        HTML tag, to apply a CSS style.

# Defining Styles for a Component’s DOM ID

Use CSS attribute selectors for the style definition if you want to apply a style using a DOM ID. Attribute selectors rely on the definition of an attribute, rather than an HTML tag, to apply a CSS style.

You can set the id value on any Visualforce component to set its DOM ID. However, the id in the rendered HTML is usually preprended with the id of parent components, as part of Visualforce’s automatic ID generation process. For instance, the actual HTML id of the following code is j\_id0:myId:

```

```

Your CSS should take this into consideration by using an attribute selector:

```

```

This selector matches any DOM ID that contains “myId” anywhere within the ID, so the id you set on a Visualforce component should be unique on the page if you intend to use it for styling purposes.

#### See Also

-   [Using $Component to Reference Components from JavaScript to Reference Components from JavaScript](atlas.en-us.pages.meta/pages/pages_access.htm "Use the $Component global variable to simplify referencing the DOM ID that is generated for a Visualforce component, and reduce some of the dependency on the overall page structure.")

-   [Best Practices for Accessing Component IDs](atlas.en-us.pages.meta/pages/pages_best_practices_accessing_id.htm)

-   [$Component](atlas.en-us.pages.meta/pages/pages_variables_global_component.htm "A global merge field type to use when referencing a Visualforce component.")

## Code Examples

```
<apex:page>
    <apex:outputText id="myId" value="This is less fancy."/>
</apex:page>
```

```
<apex:page>
    <style type="text/css">
        [id*=myId] { font-weight: bold; }
    </style>
    <apex:outputText id="myId" value="This is way fancy !"/>
</apex:page>
```

## Related Topics

- Using $Component to Reference Components from JavaScript to Reference Components from JavaScript (atlas.en-us.pages.meta/pages/pages_access.htm)
- Best Practices for Accessing Component IDs (atlas.en-us.pages.meta/pages/pages_best_practices_accessing_id.htm)
- $Component (atlas.en-us.pages.meta/pages/pages_variables_global_component.htm)
