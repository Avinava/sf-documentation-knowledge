---
title: "General Considerations"
domain: mobile-offline
topic: general-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.428Z
estimatedTokens: 1173
keywords: [General, Considerations, Consider, planning, Lightning, web, components, development, efforts]
---

# General Considerations

> Consider these general details when planning your Lightning web components development
  efforts.

# General Considerations

Consider these general details when planning your Lightning web components development efforts.

-   Salesforce mobile apps can only perform operations on known records, and for record creation, object metadata is required.

    In online scenarios, mobile apps can fetch missing data as needed. However, in offline scenarios, creating new records or performing operations on existing record data is restricted to the data already present in the app, such as object metadata.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    While specific Salesforce mobile apps may have slight variations, this outlines the recommended approach for managing Salesforce data offline.

    If your workflow involves other applications that also interact with Salesforce data, it's crucial to ensure that the latest data changes are synced with Salesforce mobile applications before using them offline.

-   The Lightning Web Components framework includes a wide range of built-in components, a number of modules that enable features, and a range of wire adapters for data access. The implementation available in LWC Offline supports a subset of these features. See additional details elsewhere in this guide.
-   Use the if:true and if:false directives to ensure your mobile offline components are properly primed when being used.
-   You can only use Lightning web components that are used as global or object-specific quick actions.
-   Object-specific quick actions can only be added to record detail pages.
-   Your components must be Lightning **web** components.
    -   You can’t use Aura-based Lightning components, despite the similar name.
    -   You can’t use Visualforce at all with Lightning web components.
-   [Headless quick actions](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_quick_actions_headless "HTML (New Window)") aren’t supported at this time.
-   [Deep links to quick actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_schema.htm "HTML (New Window)") are supported. Deep links to **global** quick actions aren’t supported at this time.
-   To work offline, your custom components must be statically analyzable by the Salesforce service so that they can be preloaded before going offline. See [Offline Environment Details](atlas.en-us.mobile_offline.meta/mobile_offline/offline_considerations.htm "The offline environment presents a number of technical challenges for LWC Offline-enabled mobile apps, and for your Lightning web components.") for details.
-   Calling alert() from JavaScript in a Lightning web component is unsupported. It’s also an anti-pattern in Lightning web components. For debugging and logging, use console.log() and console.error(). Better yet, use Chrome DevTools or Safari Web Inspector.
-   For user-facing messages, the correct pattern is to use a toast message. However, support for the lightning/platformShowToastEvent module is incomplete. Use [LightningAlert](https://developer.salesforce.com/docs/component-library/bundle/lightning-alert/documentation "HTML (New Window)") instead.
-   Lightning web components perform minimal validations while offline. It’s possible for a record to be changed, or a new record created, which passes local validation while offline. However, it’s possible for this record to subsequently fail server-side validation when the draft record is uploaded. Record drafts that fail server-side validation block the offline queue and prevent record changes from uploading. Manually clear the invalid record to unblock the queue.
-   Depending on context, it can be unclear which field of a draft record has failed server-side validation.
-   Some Lightning web components don’t render properly due to incorrect form factor detection in certain circumstances. See the known issues in [Modules Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_modules_support.htm "Lightning web component modules in the lightning namespace are described in the Component Reference in the Lightning Web Components Developer Guide. Modules scoped with @salesforce are described in @salesforce Modules in the Lightning Web Components Developer Guide. All modules are being reviewed for correct behavior in LWC Offline-enabled mobile apps.") for details.
-   A maximum of 50 records are fetched for each related list. The list size indicator — for example, “(50+)” — reflects the number of records downloaded to the app, not the number of records that exist. This limit will be customizable in a future release.

## Related Topics

- Offline Environment Details (atlas.en-us.mobile_offline.meta/mobile_offline/offline_considerations.htm)
- Modules Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_modules_support.htm)
