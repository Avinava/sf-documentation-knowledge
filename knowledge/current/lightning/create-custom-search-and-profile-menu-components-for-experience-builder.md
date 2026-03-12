---
title: "Create Custom Search and Profile Menu Components for Experience
      Builder"
domain: lightning
topic: create-custom-search-and-profile-menu-components-for-experience-builder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.157Z
estimatedTokens: 424
keywords: [Custom, Search, Profile, Menu, Components, Experience, Builder, replace, Customer, Service, template’s, standard, Post, Publisher, forceCommunity]
---

# Create Custom Search and Profile Menu Components for Experience
      Builder

> Create custom components to replace the Customer Service template’s
      standard Profile Header and Search & Post Publisher components in Experience
    Builder.

# Create Custom Search and Profile Menu Components for Experience Builder

Create custom components to replace the Customer Service template’s standard Profile Header and Search & Post Publisher components in Experience Builder.

## forceCommunity:profileMenuInterface

Add the forceCommunity:profileMenuInterface interface to an Aura component to allow it to be used as a custom profile menu component for the Customer Service site template. After you create a custom profile menu component, admins can select it in Experience Builder in **Settings** | **Theme** to replace the template’s standard Profile Header component.

Here’s the sample code for a simple profile menu component.

```

```

## forceCommunity:searchInterface

Add the forceCommunity:searchInterface interface to an Aura component to allow it to be used as a custom search component for the Customer Service site template. After you create a custom search component, admins can select it in Experience Builder in **Settings** | **Theme** to replace the template’s standard Search & Post Publisher component.

Here’s the sample code for a simple search component.

```

```

```

```

#### See Also

-   [Create Custom Theme Layout Components for Experience Builder](atlas.en-us.lightning.meta/lightning/components_config_for_builder_theme_layout.htm "Create a custom theme layout to transform the appearance and overall structure of the pages in the Customer Service template.")

-   [*Salesforce Help*: Custom Theme Layouts and Theme Layout Types](https://help.salesforce.com/HTViewHelpDoc?id=community_builder_theme.htm&language=en_US "Salesforce Help: Custom Theme Layouts and Theme
    Layout Types - HTML (New Window)")

## Code Examples

```apex
<aura:component implements="forceCommunity:profileMenuInterface" access="global">
    <aura:attribute name="options" type="String[]" default="['Option 1', 'Option 2']"/>
    <lightning:avatar variant="circle" src="" fallbackIconName="standard:person_account" alternativeText="Account User"/>
    <lightning:buttonMenu alternativeText="Profile Menu" variant="container" iconName="utility:connected_apps">
        <aura:iteration items="{!v.options}" var="itemLabel">
            <lightning:menuItem label="{!itemLabel}" />
        </aura:iteration>        
    </lightning:buttonMenu>
</aura:component>
```

```apex
<aura:component implements="forceCommunity:searchInterface" access="global">
    <div onkeyup="{! c.handleKeyUp }">
    <lightning:input
            aura:id="search-input"
            label="Search"
            type="search"
            variant="label-hidden"
        />
    </div>
</aura:component>
```

```
({
    handleKeyUp: function (cmp, evt) {
        var isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            var queryTerm = cmp.find('search-input').get('v.value');
            //do something with user input
        }
    }
})
```

## Related Topics

- Create Custom Theme Layout Components for Experience Builder (atlas.en-us.lightning.meta/lightning/components_config_for_builder_theme_layout.htm)
