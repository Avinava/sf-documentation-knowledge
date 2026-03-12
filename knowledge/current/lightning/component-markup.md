---
title: "Component Markup"
domain: lightning
topic: component-markup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.308Z
estimatedTokens: 343
keywords: [Component, Markup, resources, contain, cmp, suffix, text, references, components, declares, metadata]
---

# Component Markup

> Component resources contain markup
        and have a .cmp suffix. The markup can contain text or references to
        other components, and also declares metadata about the component.

# Component Markup

Component resources contain markup and have a .cmp suffix. The markup can contain text or references to other components, and also declares metadata about the component.

Let's start with a simple "Hello, world!" example in a helloWorld.cmp component.

```

```

This is about as simple as a component can get. The "Hello, world!" text is wrapped in the <aura:component> tags, which appear at the beginning and end of every component definition.

Components can contain most HTML tags so you can use markup, such as <div\> and <span\>. HTML5 tags are also supported.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Case sensitivity should be respected as your markup interacts with JavaScript, CSS, and Apex.

#### See Also

-   [Using the Developer Console](atlas.en-us.lightning.meta/lightning/intro_devconsole.htm "The Developer Console provides tools for developing your Aura components and applications.")

-   [Component Names](atlas.en-us.lightning.meta/lightning/components_names.htm "A component name must follow the naming rules for Lightning components.")

-   [Component Access Control](atlas.en-us.lightning.meta/lightning/access_components.htm "The access attribute on the aura:component tag controls whether the component can be used outside of the component’s namespace.")

## Code Examples

```
<aura:component>
    Hello, world!
</aura:component>
```

```
<aura:component>
    <div class="container">
        <!--Other HTML tags or components here-->
    </div>
</aura:component>
```

## Related Topics

- Using the Developer Console (atlas.en-us.lightning.meta/lightning/intro_devconsole.htm)
- Component Names (atlas.en-us.lightning.meta/lightning/components_names.htm)
- Component Access Control (atlas.en-us.lightning.meta/lightning/access_components.htm)
