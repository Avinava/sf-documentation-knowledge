---
title: "Programmatic Navigation Actions"
domain: mobile-offline
topic: programmatic-navigation-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.674Z
estimatedTokens: 683
keywords: [Programmatic, Navigation, Actions, features, require, complicated, designs, control, user, scheme, define, JavaScript]
---

# Programmatic Navigation Actions

> Some features require more complicated navigation designs. For the most complete control
  of your user interface and navigation scheme, define navigation actions using
  JavaScript.

# Programmatic Navigation Actions

Some features require more complicated navigation designs. For the most complete control of your user interface and navigation scheme, define navigation actions using JavaScript.

In Lightning web components, navigation actions are built using the navigation service, provided by the [lightning/navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation "HTML (New Window)") module. See [Navigate to Different Page Types](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_page_types "HTML (New Window)") in the Lightning Web Components Developer Guide to get started.

This module is supported for use in LWC Offline-enabled mobile apps. Each different Salesforce mobile app has different features, and each implements support for the navigation service independently. As a consequence, there are some differences in available and supported navigation actions. See the documentation for your specific mobile apps for more details.

-   **[Navigation Actions in the Salesforce Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions_sapp.htm)**
    Use these supported programmatic navigation actions in your Lightning web components intended for use in Salesforce Mobile App Plus.
-   **[Navigation Actions in the Field Service Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions_field_service.htm)**
    Use these supported programmatic navigation actions in your Lightning web components intended for use in the Field Service Mobile app.
-   **[Common Navigation Actions](atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions_common.htm)**
    These common navigation actions aren’t specific to Salesforce. Depending on your situation, use the LWC navigation service, or in some special cases use standard JavaScript code techniques.

#### See Also

-   [*Lightning Web Components Developer Guide:* Basic Navigation](https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate-basic.html "Lightning Web Components Developer Guide: Basic Navigation - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Navigate to Different Page Types](https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate-page-types.html "Lightning Web Components Developer Guide: Navigate to Different Page
    Types - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* PageReference Types](https://developer.salesforce.com/docs/platform/lwc/guide/reference-page-reference-type.html "Lightning Web Components Developer Guide: PageReference Types - HTML (New Window)")

## Related Topics

- Navigation Actions in the Salesforce Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions_sapp.htm)
- Navigation Actions in the Field Service Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions_field_service.htm)
- Common Navigation Actions (atlas.en-us.mobile_offline.meta/mobile_offline/navigation_programmatic_actions_common.htm)
