---
title: "Accept On-Site Payments with Tap-to-Pay"
domain: mobile-offline
topic: accept-on-site-payments-with-tap-to-pay
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.148Z
estimatedTokens: 707
keywords: [Accept, On-Site, Payments, Tap-to-Pay, Lightning, web, component, mobile, device, let, customers, capability, plug-in, pay, workers]
---

# Accept On-Site Payments with Tap-to-Pay

> A Lightning web component can use a mobile device to let your customers use the
    Tap-to-Pay capability of the Payments plug-in to pay mobile workers directly. The Field Service
    mobile app then integrates with Pay Now to connect the Lightning web component to a secure
    payment system that processes the interaction.

# Accept On-Site Payments with Tap-to-Pay

A Lightning web component can use a mobile device to let your customers use the Tap-to-Pay capability of the Payments plug-in to pay mobile workers directly. The Field Service mobile app then integrates with Pay Now to connect the Lightning web component to a secure payment system that processes the interaction.

The PaymentsService plugin allows Field Service mobile workers to collect payments from their customers using Tap to Pay. This service integrates with Salesforce Payments and Stripe as a payment provider. Tap to Pay is supported on iOS and Android devices with Stripe as the payment provider.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

PaymentsService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[PaymentsService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_intro.htm)**
    Your component can deliver any user experience you want, but you must follow a common flow for any component that calls for a Payment Service.
-   **[Use the PaymentsService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_in_a_lightning_component.htm)**
    To develop an LWC with the Payments Service plug-in features, use the Payments Plugin API as your method for accessing a device’s native Tap to Pay functionality.
-   **[PaymentsService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_example.htm)**
    Here’s a basic example of a Lightning web component minimal HTML template that includes a button that initiates collecting payment.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_compatibility.htm)**
    PaymentsService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when PaymentsService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_considerations.htm)**
    Consider these guidelines and limitations when developing features that use the PaymentsService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* PaymentsService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-paymentsservice.html "Lightning Web Components Developer Guide: PaymentsService
    API - HTML (New Window)")

## Related Topics

- PaymentsService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_intro.htm)
- Use the PaymentsService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_in_a_lightning_component.htm)
- PaymentsService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_considerations.htm)
