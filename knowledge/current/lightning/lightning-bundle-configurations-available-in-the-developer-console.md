---
title: "Lightning Bundle Configurations Available in the Developer
      Console"
domain: lightning
topic: lightning-bundle-configurations-available-in-the-developer-console
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.272Z
estimatedTokens: 1036
keywords: [Lightning, Bundle, Configurations, Developer, Console, easier, component, application, specific, purpose, Experience, Builder, site, quick, action]
---

# Lightning Bundle Configurations Available in the Developer
      Console

> Configurations make it easier to create a component or application for a specific
    purpose, like a Lightning page or Experience Builder site page, or
    a quick action or navigation item in Lightning Experience or Salesforce mobile app. The New
    Lightning Bundle panel in the Developer Console offers a choice of component configurations when
    you create an Aura component or application bundle.

# Lightning Bundle Configurations Available in the Developer Console

Configurations make it easier to create a component or application for a specific purpose, like a Lightning page or Experience Builder site page, or a quick action or navigation item in Lightning Experience or Salesforce mobile app. The New Lightning Bundle panel in the Developer Console offers a choice of component configurations when you create an Aura component or application bundle.

Configurations add the interfaces required to support using the component in the desired context. For example, when you choose the **Lightning Tab** configuration, your new component includes implements="force:appHostable" in the <aura:component> tag.

Using configurations is optional. You can use them in any combination, including all or none.

The following configurations are available in the New Lightning Bundle panel.

| Configuration | Markup | Description |
| --- | --- | --- |
| Aura component bundle |
| Lightning Tab | implements="force:appHostable" | Creates a component for use as a navigation element in Lightning Experience or Salesforce mobile apps. |
| Lightning Page | implements="flexipage:availableForAllPageTypes" and access="global" | Creates a component for use in Lightning pages or the Lightning App Builder. |
| Lightning Record Page | implements="flexipage:availableForRecordHome, force:hasRecordId" and access="global" | Creates a component for use on a record home page in Lightning Experience. |
| Experience Builder Site Page (previously Lightning Communities Page) | implements="forceCommunity:availableForAllPageTypes" and access="global" | Creates a component that’s available for drag and drop in the Experience Builder. |
| Lightning Quick Action | implements="force:lightningQuickAction" | Creates a component that can be used with a Lightning quick action. |
| Lightning application bundle |
| Lightning Out Dependency App | extends="ltng:outApp" | Creates an empty Lightning Out dependency app. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For details of the markup added by each configuration, see the respective documentation for those features.

#### See Also

-   [Create Aura Components in the Developer Console](atlas.en-us.lightning.meta/lightning/components_create_devconsole.htm "The Developer Console is a convenient, built-in tool you can use to create new and edit existing Aura components and other bundles.")

-   [Configure Components for Custom Tabs](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm "Add the force:appHostable interface to an Aura component to allow it to be used as a custom tab in Lightning Experience, the Salesforce mobile app, and Salesforce mobile web.")

-   [Configure Components for Custom Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm "Add the force:lightningQuickAction or force:lightningQuickActionWithoutHeader interface to an Aura component to enable it to be used as a custom action in Lightning Experience or the Salesforce mobile app. You can use components that implement one of these interfaces as object-specific or global actions in both Lightning Experience and the Salesforce mobile app.")

-   [Configure Components for Lightning Pages and the Lightning App Builder](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm "There are a few steps to take before you can use your custom Aura components in either Lightning pages or the Lightning App Builder.")

-   [Configure Components for Lightning Experience Record Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm "After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.")

-   [Configure Components for Experience Builder](atlas.en-us.lightning.meta/lightning/components_config_for_builder.htm "Make your custom Aura components available to drag to the Lightning Components pane in Experience Builder.")

## Related Topics

- Create Aura Components in the Developer Console (atlas.en-us.lightning.meta/lightning/components_create_devconsole.htm)
- Configure Components for Custom Tabs (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm)
- Configure Components for Custom Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm)
- Configure Components for Lightning Pages and the Lightning App Builder (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder.htm)
- Configure Components for Lightning Experience Record Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
- Configure Components for Experience Builder (atlas.en-us.lightning.meta/lightning/components_config_for_builder.htm)
