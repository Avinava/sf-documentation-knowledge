---
title: "Configure Deep Linking for the Field Service Mobile App"
domain: field-service
topic: configure-deep-linking-for-the-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.206Z
keywords: [Configure, Deep, Linking, Field, Service, Mobile, App]
---

# Configure Deep Linking for the Field Service Mobile App

# Configure Deep Linking for the Field Service Mobile App

Your field technicians rely on their mobile devices to perform complex tasks, and some of those tasks require them to navigate between multiple tabs, flows, or actions. With deep linking, you can send users directly to the right spot in the app.

Deep linking enables mobile apps to interact with each other using links called URIs, or Uniform Resource Identifiers. URIs have the power to point users to a specific location in a mobile app. Field Service has a pre-defined URI scheme that allows users to launch the Field Service app from a link in an email, website, or third-party application. An administrator or developer can create custom URIs to display specific tabs in the Field Service app. For example, you could integrate a third-party app that your field technicians use for billing.

If an unauthenticated user taps on a Field Service URI, they will be taken to the login screen. Once they log in, they need to tap the URI again to view the linked page.

-   **[Deep Linking Schema for the Field Service Mobile App](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_schema.htm)**  
    Use the predefined URI schema for the Field Service mobile app on Android and iOS devices.
-   **[Hide Deep Linking Security Dialog](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_hide_security_dialog.htm)**  
    Each time a user opens a deep link to an action from the Field Service mobile app, a security dialog prompts the user to confirm the action. You can hide this Launch action? dialog by configuring the deep link URL with a security key.
-   **[Pass Data to an LWC with Deep Linking](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_pass_data.htm)**  
    Pass data between Lightning web components (LWC) or from external apps to an LWC with deep linking. LWC with deep linking is available for the Field Service mobile app on both Android and iOS devices.