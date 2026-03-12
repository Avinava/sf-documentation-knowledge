---
title: "Configure a Custom Theme Layout Component"
domain: communities-dev
topic: configure-a-custom-theme-layout-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.284Z
estimatedTokens: 1090
keywords: [Configure, Custom, Theme, Layout, Component, Let’s, look, how, Developer, Console, transform, appearance, overall, structure, pages]
---

# Configure a Custom Theme Layout Component

> Let’s look at how to create a custom theme layout component in the Developer Console to
    transform the appearance and overall structure of the pages in the Customer Service
    template.

# Configure a Custom Theme Layout Component

Let’s look at how to create a custom theme layout component in the Developer Console to transform the appearance and overall structure of the pages in the Customer Service template.

## 1\. Add an Interface to Your Theme Layout Component

A theme layout component must implement the forceCommunity:themeLayout interface to appear in Experience Builder in the **Settings** | **Theme** area.

Explicitly declare {!v.body} in your code to ensure that your theme layout includes the content layout. Add {!v.body} wherever you want the page’s contents to appear within the theme layout.

Add attributes declared as Aura.Component\[\] to include regions in the theme layout, which contain the page’s components. You can add components to the regions in your markup or leave regions open for users to drag-and-drop components into. Attributes declared as Aura.Component\[\] and included in your markup are rendered as open regions in the theme layout that users can add components to. For example:

```

```

In Customer Service, the Template Header consists of these locked regions.

-   search, which contains the Search Publisher component
-   profileMenu, which contains the Profile Header component
-   navBar, which contains the Navigation Menu component

![Template Header](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Flocked_regions.png&folder=communities_dev)

To create a custom theme layout that reuses the existing components in the Template Header region, declare search, profileMenu, or navBar as the attribute name value, as appropriate. For example:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=communities_dev)

#### Tip

If you create a [swappable custom profile menu or a search component](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_swappable.htm "Create custom components to replace the template’s standard Profile Header and Search & Post Publisher components in Experience Builder."), declaring the search or profileMenu attribute name value also lets users select the custom component when using your theme layout in Experience Builder.

Add the regions to your markup to define where to display them in the theme layout’s body.

Here’s the sample code for a simple theme layout.

```

```

## 2\. Add a Design Resource to Include Theme Properties

You can expose theme layout properties in Experience Builder by adding a design resource to your bundle.

First, implement the properties in the component.

```

```

Define the theme properties in the design resource to expose the properties in the UI. This example adds a label for the Small Header theme layout along with two checkboxes.

```

```

![Theme layout properties](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_communities%2Fimages%2Fcommunity_builder_theme4.png&folder=communities_dev)

## 3\. Add a CSS Resource to Avoid Overlapping Issues

Add a CSS resource to your bundle to style the theme layout as needed, ideally using [standard design tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/tokens_standard_communities.htm "HTML (New Window)").

To avoid overlapping issues with positioned elements, such as dialog boxes or hovers:

-   Apply CSS styles.

    ```

    ```

-   Wrap the elements in your custom theme layout in a div tag.

    ```

    ```


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

The theme layout controls the styling of anything within it, so it can add styles such as drop-shadows to regions or components. For custom theme layouts, SLDS is loaded by default.

#### See Also

-   [*Lightning Aura Components Developer Guide*: Standard Design Tokens for Experience Builder Sites](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/tokens_standard_communities.htm "Lightning Aura Components Developer Guide: Standard Design Tokens for
    Experience Builder Sites - HTML (New Window)")

-   [*Trailhead*: Build a Custom Theme Layout Component for Experience Builder Sites](https://trailhead.salesforce.com/content/learn/projects/communities_theme_layout "Trailhead: Build a Custom Theme Layout Component for Experience Builder
    Sites - HTML (New Window)")

## Code Examples

```
<aura:component implements="forceCommunity:themeLayout">
<aura:attribute name="myRegion" type="Aura.Component[]"/>

{!v.body}

</aura:component>
```

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

```apex
<aura:component implements="forceCommunity:themeLayout" access="global" description="Small Header">
    <aura:attribute name="blueBackground" type="Boolean" default="false"/> 
    <aura:attribute name="smallLogo" type="Boolean" default="false" />
    ...
```

```
<design:component label="Small Header">
    <design:attribute name="blueBackground" label="Blue Background"/>
    <design:attribute name="smallLogo" label="Small Logo"/>
</design:component>
```

## Related Topics

- swappable custom profile menu or a search
          component (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_customize_swappable.htm)
