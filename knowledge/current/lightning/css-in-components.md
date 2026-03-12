---
title: "CSS in Components"
domain: lightning
topic: css-in-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.253Z
estimatedTokens: 635
keywords: [CSS, Components, Style]
---

# CSS in Components

> Style your components with CSS.

# CSS in Components

Style your components with CSS.

Add CSS to a component bundle by clicking the **STYLE** button in the Developer Console sidebar.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You can’t add a <style\> tag in component markup or when you dynamically create a component in JavaScript code. This restriction ensures better component encapsulation and prevents component styling interfering with the styling of another component. The <style\> tag restriction applies to components with API version 42.0 or later.

For external CSS resources, see [Styling Apps](atlas.en-us.lightning.meta/lightning/apps_css.htm "An app is a special top-level component whose markup is in a .app resource. Just like any other component, you can put CSS in its bundle in a resource called <appName>.css.").

All top-level elements in a component have a special THIS CSS class added to them. This, effectively, adds namespacing to CSS and helps prevent one component's CSS from overriding another component's styling. The framework throws an error if a CSS file doesn't follow this convention.

Let's look at a sample helloHTML.cmp component. The CSS is in helloHTML.css.

**Component source**

```

```

**CSS source**

```

```

**Output**

![helloHTML output](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fnested1.png&folder=lightning)

The top-level elements, h2 and ul, match the THIS class and render with a grey background. Top-level elements are tags wrapped by the HTML body tag and not by any other tags. In this example, the li tags are not top-level because they are nested in a ul tag.

The <div class="white"> element matches the .THIS.white selector and renders with a white background. Note that there is no space in the selector as this rule is for top-level elements.

The <li class="red"> element matches the .THIS .red selector and renders with a red background. Note that this is a descendant selector and it contains a space as the <li> element is not a top-level element.

#### See Also

-   [Adding and Removing Styles](atlas.en-us.lightning.meta/lightning/js_cb_styles.htm "You can add or remove a CSS style on a component or element during runtime.")

-   [HTML in Components](atlas.en-us.lightning.meta/lightning/components_html.htm "An HTML tag is treated as a first-class component by the framework. Each HTML tag is translated into an <aura:html> component, allowing it to enjoy the same rights and privileges as any other component.")

## Code Examples

```
<aura:component>
  <div class="white">
    Hello, HTML!
  </div>
  
  <h2>Check out the style in this list.</h2>
  
  <ul>
    <li class="red">I'm red.</li>
    <li class="blue">I'm blue.</li>
    <li class="green">I'm green.</li>
  </ul>
</aura:component>
```

```
.THIS {
    background-color: grey;
}

.THIS.white {
    background-color: white;
}

.THIS .red {
    background-color: red;
}

.THIS .blue {
    background-color: blue;
}

.THIS .green {
    background-color: green;
}
```

## Related Topics

- Styling Apps (atlas.en-us.lightning.meta/lightning/apps_css.htm)
- Adding and Removing Styles (atlas.en-us.lightning.meta/lightning/js_cb_styles.htm)
- HTML in Components (atlas.en-us.lightning.meta/lightning/components_html.htm)
