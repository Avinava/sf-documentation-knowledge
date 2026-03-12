---
title: "Create Custom Content Layout Components for Experience Builder"
domain: lightning
topic: create-custom-content-layout-components-for-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.153Z
estimatedTokens: 750
keywords: [Custom, Content, Layout, Components, Experience, Builder, includes, several, ready-to-use, layouts, define, regions, two-column, ratio, However]
---

# Create Custom Content Layout Components for Experience Builder

> Experience Builder includes several ready-to-use layouts that define the content
    regions of your page, such as a two-column layout with a 2:1 ratio. However, if you need a
    layout that’s customized for your site, create a custom content layout component to use when
    building new pages in Experience Builder. You can also update the content layout of the default
    pages that come with your site template.

# Create Custom Content Layout Components for Experience Builder

Experience Builder includes several ready-to-use layouts that define the content regions of your page, such as a two-column layout with a 2:1 ratio. However, if you need a layout that’s customized for your site, create a custom content layout component to use when building new pages in Experience Builder. You can also update the content layout of the default pages that come with your site template.

When you create a custom content layout component in the Developer Console, it appears in Experience Builder in the New Page and the Change Layout dialog boxes.

## 1\. Add a New Interface to Your Content Layout Component

To appear in the New Page and the Change Layout dialog boxes in Experience Builder, a content layout component must implement the forceCommunity:layout interface.

Here’s the sample code for a simple two-column content layout.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, if you want a component to be usable in an installed package or by a Lightning App Builder user or a Experience Builder user in another org.

You can also create documentation for a component, event, or interface marked access="global". This documentation is automatically displayed in the Component Library of an org that uses or installs your package.

## 2\. Add a CSS Resource to Your Component Bundle

Next, add a CSS resource to style the content layout as needed.

Here’s the sample CSS for our simple two-column content layout.

```

```

CSS resources must be named componentName.css.

## 3\. Optional: Add an SVG Resource to Your Component Bundle

You can include an SVG resource in your component bundle to define a custom icon for the content layout component when it appears in the Experience Builder.

The recommended image size for a content layout component in Experience Builder is 170px by 170px. However, if the image has different dimensions, Experience Builder scales the image to fit.

SVG resources must be named componentName.svg.

#### See Also

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

-   [Standard Design Tokens for Experience Builder Sites](atlas.en-us.lightning.meta/lightning/tokens_standard_communities.htm "Use a subset of the standard design tokens to make your components compatible with the Theme panel in Experience Builder. The Theme panel enables administrators to quickly style an entire site using these properties. Each property in the Theme panel maps to one or more standard design tokens. When an administrator updates a property in the Theme panel, the system automatically updates any Lightning components that use the tokens associated with that branding property.")

## Code Examples

```apex
<aura:component implements="forceCommunity:layout" description=”Custom Content Layout” access="global">
    <aura:attribute name="column1" type="Aura.Component[]" required="false"></aura:attribute>
    <aura:attribute name="column2" type="Aura.Component[]" required="false"></aura:attribute>

    <div class="container">
        <div class="contentPanel">
            <div class="left">
                {!v.column1}
            </div>
            <div class="right">
                {!v.column2}
            </div>
        </div>
    </div>
</aura:component>
```

```
.THIS .contentPanel:before,
.THIS .contentPanel:after {
    content: " ";
    display: table;
}
.THIS .contentPanel:after {
    clear: both;
}
.THIS .left {
    float: left;
    width: 50%;
}
.THIS .right {
    float: right;
    width: 50%;
}
```

## Related Topics

- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
- Standard Design Tokens for Experience Builder Sites (atlas.en-us.lightning.meta/lightning/tokens_standard_communities.htm)
