---
title: "Configure Swappable Search and Profile Menu Components"
domain: communities-dev
topic: configure-swappable-search-and-profile-menu-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.276Z
estimatedTokens: 588
keywords: [Configure, Swappable, Search, Profile, Menu, Components, custom, replace, template’s, standard, Post, Publisher, Experience, Builder, forceCommunity]
---

# Configure Swappable Search and Profile Menu Components

> Create custom components to replace the template’s standard Profile Header and Search
    & Post Publisher components in Experience Builder.

# Configure Swappable Search and Profile Menu Components

Create custom components to replace the template’s standard Profile Header and Search & Post Publisher components in Experience Builder.

In Customer Service, for example, the Template Header consists of these locked regions:

-   search, which contains the Search Publisher component
-   profileMenu, which contains the Profile Header component
-   navBar, which contains the Navigation Menu component

![Template Header](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fcommunities_dev%2Fimages%2Flocked_regions.png&folder=communities_dev)

These designated region names let you easily:

-   Swap search and profile components in the default theme layout component or a custom theme layout component.
-   Swap theme layout components while persisting existing customizations, such as the selected search component.

When a component implements the correct interface—forceCommunity:searchInterface or forceCommunity:profileMenuInterface, in this case—it’s identified as a candidate for these regions. They therefore appear as swappable components in a theme layout component, such as the default Customer Service theme layout component, which declares search or profileMenu as an attribute name value.

```

```

## forceCommunity:profileMenuInterface

Add the forceCommunity:profileMenuInterface interface to an Aura component to allow it to be used as a custom profile menu component for the template. After you create a custom profile menu component, admins can select it in Experience Builder in **Settings** | **Theme** to replace the template’s standard Profile Header component.

This code is for a simple profile menu component.

```

```

## forceCommunity:searchInterface

Add the forceCommunity:searchInterface interface to an Aura component to allow it to be used as a custom search component for the template. After you create a custom search component, admins can select it in Experience Builder in **Settings** | **Theme** to replace the template’s standard Search & Post Publisher component.

This code is for a simple search component.

```

```

#### See Also

-   [*Trailhead*: Build a Custom Search Component](https://trailhead.salesforce.com/content/learn/projects/communities_theme_layout/custom_search "Trailhead: Build a Custom Search Component - HTML (New Window)")

## Code Examples

```
<aura:attribute name="search" type="Aura.Component[]" required="false" />
```

```apex
<aura:component implements="forceCommunity:profileMenuInterface" access="global">
    <aura:attribute name="options" type="String[]" default="Option 1, Option 2"/>
    <ui:menu >
        <ui:menuTriggerLink aura:id="trigger" label="Profile Menu"/>
        <ui:menuList class="actionMenu" aura:id="actionMenu">
            <aura:iteration items="{!v.options}" var="itemLabel">
                <ui:actionMenuItem label="{!itemLabel}" click="{!c.handleClick}"/>
            </aura:iteration>
        </ui:menuList>
    </ui:menu>
</aura:component>
```

```apex
<aura:component implements="forceCommunity:searchInterface" access="global">
    <div class="search">
        <div class="search-wrapper">
            <form class="search-form">
                <div class="search-input-wrapper">
                    <input class="search-input" type="text" placeholder="My Search"/>
                </div>
                <input type="hidden" name="language" value="en" />
            </form>
        </div>
    </div>
</aura:component>
```
