---
title: "Base Components Support"
domain: mobile-offline
topic: base-components-support
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.420Z
estimatedTokens: 1259
keywords: [Base, Components, Support, described, Lightning, Web, reviewed, correct, behavior, LWC, Offline-enabled, mobile, apps, Additional, Component]
---

# Base Components Support

> Base components are described in the Lightning Web Components Reference. All components
  are being reviewed for correct behavior in LWC Offline-enabled mobile apps.

# Base Components Support

Base components are described in the Lightning Web Components Reference. All components are being reviewed for correct behavior in LWC Offline-enabled mobile apps.

The following table provides details for base components where support is incomplete or not available. Base components that are generally available but not listed here are supported.

-   ![Limited Support](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_caution.png&folder=mobile_offline) — **Limited Support**. Can be used, but has known (and possibly unknown) issues.
-   ![Not Supported](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_not_supported.png&folder=mobile_offline)— **Not Supported**. Doesn’t work, or shouldn’t be used.

| Component | Status | Comments |
| --- | --- | --- |
| lightning-combobox |  | Supported for use, but not mobile friendly. |
| lightning-datatable |  | This complex component was never designed for mobile use, and its behavior in mobile contexts is subject to change without notice.See this post in the Trailblazer community for sample code for a simplified, mobile-friendly data table. |
| lightning-file-upload |  |  |
| lightning-formatted-address |  | The static map feature only works in online mode. If a user is offline, an error message is displayed instead. |
| lightning-formatted-date-time |  | Supported for en-US locale only. |
| lightning-formatted-rich-text |  | URLs don’t open within a navigation view; external URLs work, but links to records don’t. Additionally, you can’t open any URL with a target="_blank" attribute. |
| lightning-formatted-time |  | Supported for en-US locale only. |
| lightning-formatted-url |  | URLs don’t open within a navigation view; external URLs work, but links to records don’t. Additionally, you can’t open any URL with a target="_blank" attribute. |
| lightning-input |  | Supported for en-US locale only. |
| lightning-input-address |  | The address lookup feature only works in online mode. If a user is offline, an error message is displayed instead. |
| lightning-input-rich-text |  | Associated components, lightning-rich-text-toolbar-button and lightning-rich-text-toolbar-button-group, aren’t supported.Image uploading within a rich text field isn’t supported. |
| lightning-map |  | This component requires a connection to a mapping service, and can’t work while offline.If users access this component while offline, an error message is displayed instead. |
| lightning-pill |  | URLs don’t open within a navigation view; external URLs work, but links to records don’t. |
| lightning-pill-container |  | URLs don’t open within a navigation view; external URLs work, but links to records don’t. |
| lightning-record-form |  | lightning-record-form doesn’t work with draft records, that is, records created while offline. See Considerations for getRecordUi for an explanation of the limitations.Lookup fields are read-only.Getters and setters aren’t supported in offline priming. In your custom components, make sure attributes passed to lightning-record-form are either hardcoded or have a simple API. |
| lightning-record-edit-form |  | lightning-record-edit-form doesn’t work with draft records, that is, records created while offline. See Considerations for getRecordUi for an explanation of the limitations.Lookup fields are read-only.Getters and setters aren’t supported in offline priming. In your custom components, make sure attributes passed to lightning-record-edit-form are either hardcoded or have a simple API.If the input field isn’t on the page layout, you must pass the field in using optional-fields. |
| lightning-record-view-form |  | lightning-record-view-form doesn’t work with draft records, that is, records created while offline. See Considerations for getRecordUi for an explanation of the limitations.Getters and setters aren’t supported in offline priming. In your custom components, make sure attributes passed to lightning-record-view-form are either hardcoded or have a simple API.If the input field isn’t on the page layout, you must pass the field in using optional-fields. |
| lightning-tab |  | Supported for use, but not mobile friendly. |
| lightning-tabset |  | Supported for use, but not mobile friendly. |
| lightning-tree-grid |  |  |

## Additional Component Considerations

Several localization and globalization issues affect a number of components. These issues generally affect formatting of dates, times, currencies, and numbers. They’re mostly irritating, but only cosmetic. However, a few can cause errors, most often due to incorrect processing of numbers with too many digits (15 or more digits) in them. If you encounter these, try rounding the number manually in JavaScript, to no more than 14 digits of precision, before passing it to a base component.

None of the lightningsnapin-\* components are supported.

#### See Also

-   [*Component Reference*](https://https://developer.salesforce.com/docs/component-library/overview/components "Component Reference - HTML (New Window)")

## Related Topics

- Considerations for getRecordUi (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_wire_adapters_support.htm)
