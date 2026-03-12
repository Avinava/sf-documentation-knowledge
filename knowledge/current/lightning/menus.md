---
title: "Menus"
domain: lightning
topic: menus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.889Z
estimatedTokens: 227
keywords: [Menus, menu, dropdown, trigger, visibility, items, accessible, lightning, buttonMenu, Provide, text, label, assistive, specify, menuItem]
---

# Menus

> A menu is a dropdown list with a trigger that controls the visibility of the list items. To
      create an accessible menu, use lightning:buttonMenu.
      Provide a text label or assistive text, and specify a list of menu items using lightning:menuItem. The dropdown menu items are hidden by
      

# Menus

A menu is a dropdown list with a trigger that controls the visibility of the list items. To create an accessible menu, use lightning:buttonMenu. Provide a text label or assistive text, and specify a list of menu items using lightning:menuItem. The dropdown menu items are hidden by default.

This example creates a menu with several items:

```

```

The alternativeText attribute provides a text label that’s hidden from view and available to assistive technology.

lightning:buttonMenu implements the [menu](https://lightningdesignsystem.com/components/menus/) blueprint in the Salesforce Lightning Design System and follows its accessibility guidelines.

#### See Also

-   [*Component Library*: lightning:buttonMenu documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:buttonMenu "Component Library: lightning:buttonMenu
    documentation - HTML (New Window)")

## Code Examples

```
<lightning:buttonMenu iconName="utility:settings"
                      alternativeText="Settings"
                      onselect="{! c.handleMenuSelect }">
    <lightning:menuItem label="Font" value="font" />
    <lightning:menuItem label="Size" value="size"/>
    <lightning:menuItem label="Format" value="format" />
</lightning:buttonMenu>
```
