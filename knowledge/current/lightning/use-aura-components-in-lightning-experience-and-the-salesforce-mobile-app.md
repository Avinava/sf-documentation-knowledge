---
title: "Use Aura
      Components in Lightning Experience and the
      Salesforce Mobile App"
domain: lightning
topic: use-aura-components-in-lightning-experience-and-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.443Z
estimatedTokens: 681
keywords: [Aura, Components, Lightning, Experience, Salesforce, Mobile, App, Customize, extend, Launch, tabs, apps, actions]
---

# Use Aura
      Components in Lightning Experience and the
      Salesforce Mobile App

> Customize and extend Lightning Experience and the Salesforce mobile app with Aura
  components. Launch components from tabs, apps, and actions.

# Use Aura Components in Lightning Experience and the Salesforce Mobile App

Customize and extend Lightning Experience and the Salesforce mobile app with Aura components. Launch components from tabs, apps, and actions.

-   **[Configure Components for Custom Tabs](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm)**
    Add the force:appHostable interface to an Aura component to allow it to be used as a custom tab in Lightning Experience, the Salesforce mobile app, and Salesforce mobile web.
-   **[Add Aura Components as Custom Tabs in a Lightning Experience App](atlas.en-us.lightning.meta/lightning/components_using_lex_tab.htm)**
    Make your Aura components available for Lightning Experience users on desktop and in the Salesforce mobile app by displaying them in a custom tab in a Lightning Experience app.
-   **[Configure Components for Custom Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm)**
    Add the force:lightningQuickAction or force:lightningQuickActionWithoutHeader interface to an Aura component to enable it to be used as a custom action in Lightning Experience or the Salesforce mobile app. You can use components that implement one of these interfaces as object-specific or global actions in both Lightning Experience and the Salesforce mobile app.
-   **[Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)**
    Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.
-   **[Create an Email as a Quick Action](atlas.en-us.lightning.meta/lightning/components_using_email_quick_actions.htm)**
    In a custom component, create a button to launch the email composer with pre-populated content. To launch a record create a page with pre-populated field values, use the lightning:pageReferenceUtils and lightning:navigation components together.
-   **[Override Standard Actions with Aura Components](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides.htm)**
    Add the lightning:actionOverride interface to an Aura component to enable the component to be used to override a standard action on an object. You can override standard actions on most standard and all custom components. Overriding standard actions allows you to customize your org using Lightning components, including completely customizing the way you view, create, and edit records.

## Related Topics

- Configure Components for Custom Tabs (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm)
- Add Aura Components as Custom Tabs in a Lightning Experience App (atlas.en-us.lightning.meta/lightning/components_using_lex_tab.htm)
- Configure Components for Custom Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm)
- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
- Create an Email as a Quick Action (atlas.en-us.lightning.meta/lightning/components_using_email_quick_actions.htm)
- Override Standard Actions with Aura Components (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides.htm)
