---
title: "Configure Offline Mode in the Field Service Mobile App"
domain: field-service
topic: configure-offline-mode-in-the-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:13.237Z
keywords: [Configure, Offline, Mode, Field, Service, Mobile, App]
---

# Configure Offline Mode in the Field Service Mobile App

# Configure Offline Mode in the Field Service Mobile App

Learn what to expect when Automatic Offline Mode is turned on in the Field Service mobile app and how you can adjust its settings.

The Field Service mobile app switches offline when no cellular signal and no wifi connection are available. When the app is in offline mode, it uses cached data, and it refreshes its data when it returns online.

The app determines whether to stay in offline mode by sending regular connection requests to the Salesforce API. After repeated failed requests, it enters or remains in offline mode. This means that in certain situations, the app can be in offline mode even when a cellular signal is available, wifi connection, or both.

1.  As an admin, go to the Manage Connected Apps page in Setup.
2.  Click **Salesforce Field Service for iOS** or **Salesforce Field Service for Android**. If your team is using both platforms, add a configuration for each.
3.  In the custom attribute list, click **New**.
4.  Add custom attributes to configure the way the app uses offline mode.
5.  After you add custom attributes to configure the app, ask your mobile workers to log out and then log in to the app for the changes to take effect.

You can change the following settings related to offline mode.

| Setting | Default Value | Setting Name |
| --- | --- | --- |
| Interval of the next Salesforce API connection check after a successful check when the app is online | 15 seconds | AO_DELAY_FOR_ONLINE_STATUS |
| Maximum number of failed requests before the app goes offline | 3 | AO_CONNECTION_FAILURE_THRESHOLD |
| Maximum number of successful requests for app to return online | 3 | AO_CONNECTION_SUCCESS_THRESHOLD |
| Interval of the next Salesforce API connection check after a failed check | 1 second | AO_DELAY_FOR_CHANGING_STATUS |
| The time the connection request can take before being considered a failed attempt | 5 seconds | AO_CONNECTION_CHECK_TIMEOUT |

Considerations

-   The app can switch between online and offline mode frequently depending on your settings. For example, if you set the Salesforce API connection check to ping every second and configure the app to go offline after one failed check, it can repeatedly switch between online and offline mode.
-   Connection checks don’t accurately reflect data retrieval calls. As a result, this feature keeps the app online, but data retrieval calls can still be slow.
-   If a flow is in progress when the app switches between offline and online mode, the flow can be interrupted.
-   If the app is online and you use it in areas of low network connectivity, some users experience long wait times for the data to refresh.