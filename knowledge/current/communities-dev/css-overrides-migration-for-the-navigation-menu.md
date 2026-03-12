---
title: "CSS Overrides Migration for the Navigation Menu"
domain: communities-dev
topic: css-overrides-migration-for-the-navigation-menu
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.358Z
estimatedTokens: 1803
keywords: [CSS, Overrides, Migration, Navigation, Menu, plan, continue, custom, migrate, forward, template, Full, Mobile, Curtain, Home]
---

# CSS Overrides Migration for the Navigation Menu

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Navigation Menu

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes for the Navigation Menu.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Full Navigation Menu

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu.forceCommunityNavigationMenu #navigationMenu.forceCommunityNavigationMenu .navigationMenu.forceCommunityNavigationMenu .navigationMenuWrapper | .comm-navigation |

## Mobile Menu Curtain

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .navigationMenuWrapperCurtain | .comm-navigation nav.slds-is-fixed |

## Home Menu Item

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .homeLink.forceCommunityNavigationMenu .homeButton | .comm-navigation .slds-list__item a[data-type="home"] |

## Home Menu Item Link

| Previous Selectors | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu.homeLink.forceCommunityNavigationMenu.homeButton.comm-navigation .slds-list__item a[data-type="home"] | .comm-navigation .comm-navigation__item a[data-type="home"] |

## Mobile Menu Toggle Button

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .toggleNav | .siteforceServiceBody .cHeaderPanel .cAltToggleNav |

## Top-Level Menu Items

Includes submenu triggers.

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .menuItem.forceCommunityGlobalNavigation .navigationMenuNode | .comm-navigation .comm-navigation__list > .slds-list__item |
| .forceCommunityNavigationMenu .menuItem.forceCommunityGlobalNavigation .navigationMenuNode.comm-navigation .comm-navigation__list > .slds-list__item | .comm-navigation .comm-navigation__list > .slds-list__item > .comm-navigation__item |

## Current Top-Level Menu Item

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .current.forceCommunityGlobalNavigation .menuItem.current | .comm-navigation .comm-navigation__list > .slds-list__item > .slds-is-active |
| .forceCommunityNavigationMenu .current.forceCommunityGlobalNavigation .menuItem.current.comm-navigation .comm-navigation__list > .slds-list__item > .slds-is-active | .comm-navigation .comm-navigation__list > .slds-list__item> .comm-navigation__item > .slds-is-active |

## Top-Level Menu Item Links

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .menuItemLink.forceCommunityNavigationMenu a.menuItemLink.forceCommunityNavigationMenu .menuItem .menuItemLink.forceCommunityNavigationMenu .menuItem a.forceCommunityNavigationMenu .menuItem a.menuItemLink | .comm-navigation .comm-navigation__list > .slds-list__item > a.comm-navigation .comm-navigation__list > .slds-list__item > button |
| .forceCommunityNavigationMenu .menuItemLink.forceCommunityNavigationMenu a.menuItemLink.forceCommunityNavigationMenu .menuItem .menuItemLink.forceCommunityNavigationMenu .menuItem a.forceCommunityNavigationMenu .menuItem a.menuItemLink.comm-navigation .comm-navigation__list > .slds-list__item > a.comm-navigation .comm-navigation__list > .slds-list__item > button | .comm-navigation .comm-navigation__list > .slds-list__item> .comm-navigation__item > a.comm-navigation .comm-navigation__list > .slds-list__item> .comm-navigation__item > button |

## Submenu Items

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .subMenuItem | .comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item |
| .forceCommunityNavigationMenu .subMenuItem.comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item | .comm-navigation .slds-list_vertical.slds-is-nested .comm-navigation__item |

## Current/Active Submenu Item

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .subMenuItem.current | .comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item .slds-is-active |
| .forceCommunityNavigationMenu .subMenuItem.current.comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item .slds-is-active | .comm-navigation .slds-list_vertical.slds-is-nested .comm-navigation__item .slds-is-active |

## Submenu Trigger Link

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .triggerLink.forceCommunityNavigationMenu .triggerLabel | .comm-navigation .slds-list__item button:enabled |
| .forceCommunityNavigationMenu .triggerLink..forceCommunityNavigationMenu .triggerLabel.comm-navigation .slds-list__item button:enabled | .comm-navigation .comm-navigation__item button:enabled |

## Submenu Trigger Link Icon

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .triggerLink .forceIcon | .comm-navigation .slds-list__item button:enabled .slds-icon_container |
| .forceCommunityNavigationMenu .triggerLink .forceIcon.comm-navigation .slds-list__item button:enabled .slds-icon_container | .comm-navigation .comm-navigation__item button:enabled .slds-icon_container |

## Menu Items

Includes top-level and submenu items.

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .navigationMenu li | .comm-navigation .slds-list__item |
| .forceCommunityNavigationMenu .navigationMenu li.comm-navigation .slds-list__item | .comm-navigation .comm-navigation__item |

## Menu Item Links

Includes top-level and submenu items.

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu a.forceCommunityNavigationMenu a.menuItemLink | .comm-navigation .slds-list__item a.comm-navigation .slds-list__item button |
| .forceCommunityNavigationMenu a.forceCommunityNavigationMenu a.menuItemLink.comm-navigation .slds-list__item a.comm-navigation .slds-list__item button | .comm-navigation .comm-navigation__item a.comm-navigation .comm-navigation__item button |

## Submenus

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .subMenu | .comm-navigation .slds-list_vertical.slds-is-nested |

## Submenu Items

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .subMenuItem | .comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item |
| .forceCommunityNavigationMenu .subMenuItem.comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item | .comm-navigation .slds-list_vertical.slds-is-nested .comm-navigation__item |

## Submenu Item Links

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityNavigationMenu .subMenuItem a.forceCommunityNavigationMenu .subMenu a | .comm-navigation .slds-list_vertical.slds-is-nested .slds-list__item a |
| .comm-navigation .slds-list_vertical.slds-is-nested .comm-navigation__item | .comm-navigation .slds-list_vertical.slds-is-nested .comm-navigation__item a |
