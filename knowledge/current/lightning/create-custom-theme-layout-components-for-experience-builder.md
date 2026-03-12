---
title: "Create Custom Theme Layout Components for Experience Builder"
domain: lightning
topic: create-custom-theme-layout-components-for-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.162Z
estimatedTokens: 1225
keywords: [Custom, Theme, Layout, Components, Experience, Builder, transform, appearance, overall, structure, pages, Customer, Service, template, Add]
---

# Create Custom Theme Layout Components for Experience Builder

> Create a custom theme layout to transform the appearance and overall structure of the
    pages in the Customer Service template.

# Create Custom Theme Layout Components for Experience Builder

Create a custom theme layout to transform the appearance and overall structure of the pages in the Customer Service template.

A theme layout component is the top-level layout for the template pages in your site. Theme layout components are organized and applied to your pages through theme layouts. A theme layout component includes the common header and footer, and often includes navigation, search, and the user profile menu. In contrast, the content layout defines the content regions of your pages. The next image shows a two-column content layout.

A theme layout type categorizes the pages in your Experience Builder site that share the same theme layout.

When you create a custom theme layout component in the Developer Console, it appears in Experience Builder in the **Settings** | **Theme** area. Here you can assign it to new or existing theme layout types. Then you apply the theme layout type—and then the theme layout—in the page’s properties.

## 1\. Add an Interface to Your Theme Layout Component

A theme layout component must implement the forceCommunity:themeLayout interface to appear in Experience Builder in the **Settings** | **Theme** area.

Explicitly declare {!v.body} in your code to ensure that your theme layout includes the content layout. Add {!v.body} wherever you want the page’s contents to appear within the theme layout.

You can add components to the regions in your markup or leave regions open for users to drag-and-drop components into. Attributes declared as Aura.Component\[\] and included in your markup are rendered as open regions in the theme layout that users can add components to.

In Customer Service, the Template Header consists of these locked regions:

-   search, which contains the Search Publisher component
-   profileMenu, which contains the User Profile Menu component
-   navBar, which contains the Navigation Menu component

To create a custom theme layout that reuses the existing components in the Template Header region, declare search, profileMenu, or navBar as the attribute name value, as appropriate. For example:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

If you create a custom profile menu or a search component, declaring the attribute name value also lets users select the custom component when using your theme layout.

Here’s the sample code for a simple theme layout.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, if you want a component to be usable in an installed package or by a Lightning App Builder user or a Experience Builder user in another org.

You can also create documentation for a component, event, or interface marked access="global". This documentation is automatically displayed in the Component Library of an org that uses or installs your package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you want to use a new, customizable profile menu instead of a self-service profile menu, you must declare the themeHeaderProfileMenu attribute instead of profileMenu in the theme layout component. This only works in a B2B store or where an out-of-box theme has been applied.

## 2\. Add a Design Resource to Include Theme Properties

You can expose theme layout properties in Experience Builder by adding a design resource to your bundle.

This example adds two checkboxes to a theme layout called Small Header.

```

```

The design resource only exposes the properties. Implement the properties in the component.

```

```

Design resources must be named componentName.design.

## 3\. Add a CSS Resource to Avoid Overlapping Issues

Add a CSS resource to your bundle to style the theme layout as needed.

To avoid overlapping issues with positioned elements, such as dialog boxes or hovers:

-   Apply CSS styles.

    ```

    ```

-   Wrap the elements in your custom theme layout in a div tag.

    ```

    ```


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For custom theme layouts, SLDS is loaded by default.

CSS resources must be named componentName.css.

#### See Also

-   [Create Custom Search and Profile Menu Components for Experience Builder](atlas.en-us.lightning.meta/lightning/components_config_for_builder_search_and_profile.htm "Create custom components to replace the Customer Service template’s standard Profile Header and Search & Post Publisher components in Experience Builder.")

-   [*Salesforce Help*: Custom Theme Layouts and Theme Layout Types](https://help.salesforce.com/HTViewHelpDoc?id=community_builder_theme.htm&language=en_US)

## Code Examples

```
<aura:attribute name="navBar" type="Aura.Component[]" required="false" />
```

```apex
<aura:component implements="forceCommunity:themeLayout" access="global" description="Sample Custom Theme Layout">
    <aura:attribute name="search" type="Aura.Component[]" required="false"/>
    <aura:attribute name="profileMenu" type="Aura.Component[]" required="false"/>
    <aura:attribute name="navBar" type="Aura.Component[]" required="false"/>
    <aura:attribute name="newHeader" type="Aura.Component[]" required="false"/>
    <div>
        <div class="searchRegion">
            {!v.search}
        </div>
        <div class="profileMenuRegion">
            {!v.profileMenu}
        </div>
        <div class="navigation">
            {!v.navBar}
        </div>
        <div class="newHeader">
            {!v.newHeader}
        </div>
        <div class="mainContentArea">
            {!v.body}
        </div>
    </div>
</aura:component>
```

```
<design:component label="Small Header">
    <design:attribute name="blueBackground" label="Blue Background"/>
    <design:attribute name="smallLogo" label="Small Logo"/>
</design:component>
```

```apex
<aura:component implements="forceCommunity:themeLayout" access="global" description="Small Header">
    <aura:attribute name="blueBackground" type="Boolean" default="false"/> 
    <aura:attribute name="smallLogo" type="Boolean" default="false" />
    ...
```

```
.THIS {
    position: relative;
    z-index: 1;
}
```

## Related Topics

- Create Custom Search and Profile Menu Components for Experience Builder (atlas.en-us.lightning.meta/lightning/components_config_for_builder_search_and_profile.htm)
