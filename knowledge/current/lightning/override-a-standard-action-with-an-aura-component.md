---
title: "Override a Standard Action with an Aura Component"
domain: lightning
topic: override-a-standard-action-with-an-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.453Z
estimatedTokens: 362
keywords: [Override, Standard, Action, Aura, Component, Lightning, Experience, mobile]
---

# Override a Standard Action with an Aura Component

> You can override a standard action with an Aura component in both Lightning
        Experience and mobile.

# Override a Standard Action with an Aura Component

You can override a standard action with an Aura component in both Lightning Experience and mobile.

You need at least one Aura component in your org that implements the lightning:actionOverride interface. You can use a custom component of your own, or a component from a managed package.

Go to the object management settings for the object with the action you plan to override.

1.  Select **Buttons, Links, and Actions**.
2.  Select **Edit** for the action you want to override.
3.  Select **Lightning component** for the area you want to set the override.
4.  From the drop-down menu, select the name of the Lightning component to use as the action override.
5.  Select **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Users won’t see changes to action overrides until they reload Lightning Experience or the Salesforce mobile app.

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US "Salesforce Help: Find Object Management
    Settings - HTML (New Window)")

-   [*Salesforce Help*: Override Standard Buttons and Tab Home Pages](https://help.salesforce.com/HTViewHelpDoc?id=links_customize_override.htm&language=en_US "Salesforce Help: Override Standard Buttons and Tab
    Home Pages - HTML (New Window)")
