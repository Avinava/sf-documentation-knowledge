---
title: "Modules Support"
domain: mobile-offline
topic: modules-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.439Z
estimatedTokens: 1219
keywords: [Modules, Support, Lightning, web, component, described, Components, Developer, scoped, @salesforce, reviewed, correct, behavior, LWC, Offline-enabled]
---

# Modules Support

> Lightning web component modules in the lightning namespace are described in the Component Reference in the Lightning Web
    Components Developer Guide. Modules scoped with @salesforce are described in @salesforce
    Modules in the Lightning Web Components Developer Guide. All modules are being reviewed for
    correct behavior in LWC Offline-enabled mobile apps.

# Modules Support

Lightning web component modules in the lightning namespace are described in the Component Reference in the Lightning Web Components Developer Guide. Modules scoped with @salesforce are described in @salesforce Modules in the Lightning Web Components Developer Guide. All modules are being reviewed for correct behavior in LWC Offline-enabled mobile apps.

The following table presents current findings.

-   ![Supported](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_supported.png&folder=mobile_offline) — **Supported**. Expected to behave as documented.
-   ![Limited Support](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_caution.png&folder=mobile_offline) — **Limited Support**. Can be used, but has known (and possibly unknown) issues.
-   ![Not Supported](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_not_supported.png&folder=mobile_offline) — **Not Supported**. Might work, but shouldn’t be used.

| Module | Status | Comments |
| --- | --- | --- |
| lightning Namespace ModulesThese modules contain resources that don’t change and are universal to all orgs. |
| lightning/alertCreate an alert modal within your component. |  |  |
| lightning/confirmCreate a confirm modal within your component. |  |  |
| lightning/empApiProvides methods for subscribing to a streaming channel and listening to event messages. |  | Not supported in mobile apps. |
| lightning/flowSupportProvides events to control flow navigation and notify the flow of changes in attribute values. |  |  |
| lightning/messageServiceCommunicates across the DOM between Visualforce pages, Aura components, and Lightning web components. |  | Lightning Aura components and Visualforce aren’t supported in the Field Service mobile app. This isn’t expected to change. |
| lightning/navigationGenerates a URL or navigates to a page reference. |  | Available for use, but supported page reference types are limited. See Navigation for details. |
| lightning/pageReferenceUtilsProvides utilities for encoding and decoding default field values. |  | Not supported in mobile apps. |
| lightning/platformResourceLoaderImports a third-party JavaScript or CSS library. |  | Not supported for offline use. |
| lightning/platformShowToastEventDisplays toasts to provide feedback to a user following an action, such as after a record is created. |  | You can import this module and fire toast events. However, toast messages aren’t handled or displayed. Use lightning/alert, lightning/confirm, or lightning/prompt instead. |
| lightning/promptCreate a prompt modal within your component. |  |  |
| lightning/userConsentCookieUtility functions to incorporate the Cookie Consent mechanism in your components. |  | Relevant only for Experience Builder pages. |
| @salesforce Scoped ModulesThe shape of these modules can be dynamic, defined by your organization’s metadata. |
| @salesforce/apexImport Apex methods as functions that a component can call either via @wire or imperatively. |  | See Use Apex While Mobile and Offline for usage details. |
| @salesforce/apexContinuationImport methods from Apex continuation classes. |  | See Use Apex While Mobile and Offline for usage details. |
| @salesforce/client/formFactorImport a name that refers to the form factor of the hardware running the app. |  | This module “works,” but always returns Small when used in an LWC Offline-enabled app. |
| @salesforce/communityImport the ID of the current Experience Builder site. |  | Relevant only for Experience Builder pages. |
| @salesforce/contentAssetUrlImport content asset files. |  |  |
| @salesforce/i18nImport internationalization properties. |  |  |
| @salesforce/labelImport labels defined in your Salesforce organization. |  |  |
| @salesforce/messageChannelImport a Lightning message channel that a component can use to communicate via the Lightning Message Service. |  | Lightning Message Service isn’t supported in LWC Offline-enabled mobile apps. |
| @salesforce/resourceUrlImport static resources defined in your Salesforce organization. |  |  |
| @salesforce/schemaImport references to Salesforce objects and fields defined in your org. |  |  |
| @salesforce/userImport the current user’s ID. |  |  |
| @salesforce/userPermissionImport a permission and check whether it’s assigned to the current user. |  |  |
| @salesforce/customPermissionImport a custom permission and check whether it’s assigned to the current user. |  |  |

#### See Also

-   [*Component Reference*](https://https://developer.salesforce.com/docs/component-library/overview/components "Component Reference - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* @salesforce Modules](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules "Lightning Web Components Developer Guide:
    @salesforce Modules - HTML (New Window)")

## Related Topics

- Navigation (atlas.en-us.mobile_offline.meta/mobile_offline/navigation.htm)
- Use Apex While Mobile and Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex.htm)
