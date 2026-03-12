---
title: "Tips for CSS in Components"
domain: lightning
topic: tips-for-css-in-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.257Z
estimatedTokens: 336
keywords: [Tips, CSS, Components, configuring, plan, Lightning, pages, App, Builder, Experience]
---

# Tips for CSS in Components

> Here are some tips for configuring the CSS for components that you plan to use in
    Lightning pages, the Lightning App Builder, or the Experience Builder.

# Tips for CSS in Components

Here are some tips for configuring the CSS for components that you plan to use in Lightning pages, the Lightning App Builder, or the Experience Builder.

Components must be set to 100% width

Because they can be moved to different locations on a Lightning page, components must not have a specific width nor a left or right margin. Components should take up 100% of whatever container they display in. Adding a left or right margin changes the width of a component and can break the layout of the page.

Don’t remove HTML elements from the flow of the document

Some CSS rules remove the HTML element from the flow of the document. For example:

```

```

Because they can be moved to different locations on the page as well as used on different pages entirely, components must rely on the normal document flow. Using floats and absolute or fixed positions breaks the layout of the page the component is on. Even if they don’t break the layout of the page *you’re* looking at, they will break the layout of *some* page the component can be put on.

Child elements shouldn’t be styled to be larger than the root element

The Lightning page maintains consistent spacing between components, and can’t do that if child elements are larger than the root element.

For example, avoid these patterns:

```

```

```

```

## Code Examples

```
float: left;
float: right;
position: absolute;
position: fixed;
```

```
<div style="height: 100px">
  <div style="height: 200px">
    <!--Other markup here-->
  </div>
</div>
```

```
<!--Margin increases the element’s effective size-->
<div style="height: 100px">
  <div style="height: 100px margin: 10px">
    <!--Other markup here-->
  </div>
</div>
```
