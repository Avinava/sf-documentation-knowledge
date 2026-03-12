---
title: "Request an App Review on a Mobile Device"
domain: mobile-offline
topic: request-an-app-review-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.761Z
estimatedTokens: 613
keywords: [App, Review, Mobile, Device, Lightning, web, component, prompt, users, rate, submit, stores, Apple, Google, Their]
---

# Request an App Review on a Mobile Device

> A Lightning web component can use a mobile device to prompt users to rate and submit a
    review of your app to the app stores (Apple and Google). Their feedback can help improve your
    app experience, encourage downloads, and improve your app’s discoverability.

# Request an App Review on a Mobile Device

A Lightning web component can use a mobile device to prompt users to rate and submit a review of your app to the app stores (Apple and Google). Their feedback can help improve your app experience, encourage downloads, and improve your app’s discoverability.

AppReviewService requires access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

AppReviewService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[AppReviewService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_intro.htm)**
    Your component can deliver any user experience you desire.
-   **[Use the AppReviewService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_in_a_lightning_component.htm)**
    To develop a Lightning web component with app review features, use the AppReviewService API.
-   **[AppReviewService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_example.htm)**
    Here’s a minimal but complete example of a Lightning web component that uses AppReviewService to request an app review.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_compatibility.htm)**
    AppReviewService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when AppReviewService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_considerations.htm)**
    Consider these guidelines and limitations when developing features that use the AppReviewService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* AppReviewService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-appreviewservice.html "Lightning Web Components Developer Guide: AppReviewService
    API - HTML (New Window)")

## Related Topics

- AppReviewService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_intro.htm)
- Use the AppReviewService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_in_a_lightning_component.htm)
- AppReviewService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_considerations.htm)
