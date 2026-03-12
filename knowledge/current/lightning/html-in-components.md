---
title: "HTML in Components"
domain: lightning
topic: html-in-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.279Z
estimatedTokens: 493
keywords: [HTML, Components, tag, treated, first-class, component, framework, translated, <aura, html>, allowing, enjoy, rights, privileges, any]
---

# HTML in Components

> An HTML tag is treated as a first-class component by the framework.
      Each HTML tag is translated into an <aura:html>
      component, allowing it to enjoy the same rights and privileges as any other
    component.

# HTML in Components

An HTML tag is treated as a first-class component by the framework. Each HTML tag is translated into an <aura:html> component, allowing it to enjoy the same rights and privileges as any other component.

For example, the framework automatically converts a standard HTML <div> tag to this component:

```

```

You can add HTML markup in components. Note that you must use strict [XHTML](http://www.w3.org/TR/xhtml1/ "HTML (New Window)"). For example, use <br/> instead of <br\>. You can also use HTML attributes and DOM events, such as onclick.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Some tags, like <applet\> and <font\>, aren’t supported.

## Unescaping HTML

To output pre-formatted HTML, use aura:unescapedHTML. For example, this is useful if you want to display HTML that is generated on the server and add it to the DOM. You must escape any HTML if necessary or your app might be exposed to security vulnerabilities.

You can pass in values from an expression, such as in <aura:unescapedHtml value="{!v.note.body}"/>.

{!expression} is the framework's expression syntax. For more information, see [Using Expressions](atlas.en-us.lightning.meta/lightning/expr_overview.htm "Expressions allow you to make calculations and access property values and other data within component markup. Use expressions for dynamic output or passing values into components by assigning them to attributes.").

-   **[Supported HTML Tags](atlas.en-us.lightning.meta/lightning/ref_supported_html_tags.htm)**
    The framework supports most HTML tags, including the majority of HTML5 tags.

#### See Also

-   [Supported HTML Tags](atlas.en-us.lightning.meta/lightning/ref_supported_html_tags.htm "The framework supports most HTML tags, including the majority of HTML5 tags.")

-   [CSS in Components](atlas.en-us.lightning.meta/lightning/components_css.htm "Style your components with CSS.")

## Code Examples

```
<aura:html tag="div" />
```

## Related Topics

- Using Expressions (atlas.en-us.lightning.meta/lightning/expr_overview.htm)
- Supported HTML Tags (atlas.en-us.lightning.meta/lightning/ref_supported_html_tags.htm)
- CSS in Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
