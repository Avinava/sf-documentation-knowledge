---
title: "Step 3. Configure Your Mobile SDK App"
domain: pushImplGuide
topic: step-3-configure-your-mobile-sdk-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.661Z
estimatedTokens: 456
keywords: [Step, Configure, Mobile, SDK, App, implement, push, notification, protocols, Salesforce, device, provider]
---

# Step 3. Configure Your Mobile SDK App

> In your Mobile SDK app, implement push notification protocols required by Salesforce and the device OS
    provider.

# Step 3. Configure Your Mobile SDK App

In your Mobile SDK app, implement push notification protocols required by Salesforce and the device OS provider.

Follow the instructions for your target mobile platform (Android, iOS, or hybrid).

-   **[Enable Push Notifications in a Salesforce Mobile SDK Android App](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_client_app_android.htm)**
    Perform these steps in your Android Mobile SDK app to receive push notifications.
-   **[Enable Push Notifications in a Salesforce Mobile SDK iOS App](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_client_app_ios.htm)**
    Perform these steps in your iOS Mobile SDK app to receive push notifications.
-   **[Enable Push Notifications in a Salesforce Mobile SDK Hybrid App](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_client_app_hybrid.htm)**
    Perform these steps in your hybrid Mobile SDK app to receive push notifications.
-   **[Handle Notification Encryption in Salesforce Mobile SDK Apps](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_encrypted_notifications.htm)**
    Mobile notifications travel from Salesforce, through third-party messaging services to mobile carriers, then on to mobile devices. Such an indirect path only increases the opportunities for malicious attacks. To guard against snooping or hacking, Salesforce encrypts Notification Builder notifications. Your app is responsible for decrypting these notifications.
-   **[Build Your Own In-App Notification Feature](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_in_app_tray.htm)**
    If you use the Salesforce mobile app, you’re familiar with the Salesforce Bell. The Bell provides an in-app notification tray that lists the current user’s most recent notifications. With Salesforce Notification APIs, you can design and build your own tray.

## Related Topics

- Enable Push Notifications in a Salesforce Mobile SDK Android App (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_client_app_android.htm)
- Enable Push Notifications in a Salesforce Mobile SDK iOS App (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_client_app_ios.htm)
- Enable Push Notifications in a Salesforce Mobile SDK Hybrid App (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_client_app_hybrid.htm)
- Handle Notification Encryption in Salesforce Mobile SDK Apps (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_encrypted_notifications.htm)
- Build Your Own In-App Notification Feature (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_in_app_tray.htm)
