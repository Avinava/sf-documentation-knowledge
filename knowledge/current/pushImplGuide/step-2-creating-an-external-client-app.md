---
title: "Step 2. Creating
  an
  External Client App"
domain: pushImplGuide
topic: step-2-creating-an-external-client-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.686Z
estimatedTokens: 773
keywords: [Step, Creating, External, Client, App, Once, you’ve, registered, mobile, vendor’s, push, service, Salesforce]
---

# Step 2. Creating
  an
  External Client App

> Once you’ve registered your mobile app with the OS vendor’s push service, the next step
  is to create
  an
  external client app in Salesforce.

# Step 2. Creating an External Client App

Once you’ve registered your mobile app with the OS vendor’s push service, the next step is to create an external client app in Salesforce.

| Available in: Lightning Experience |
| --- |
| External Client Apps can be created in: Group, Professional, Enterprise, Essentials, Performance, Unlimited, and Developer EditionsExternal Client Apps can be installed in: All Editions |


| User Permissions Needed |
| --- |
| To read, create, update, or delete connected apps: | Customize Application AND eitherModify All Data OR Create, edit, and delete External Client Apps |
| To update all fields except Profiles, Permission Sets, and Service Provider SAML Attributes: | Customize Application AND eitherModify All Data OR Create, edit, and delete External Client Apps |
| To update Profiles, Permission Sets, and Service Provider SAML Attributes: | Customize Application AND Modify All Data AND Manage Profiles and Permission Sets |
| To rotate the consumer key and consumer secret: | Allow consumer key and secret rotation |
| To install and uninstall connected apps: | Customize Application AND eitherModify All Data OR Create, edit, and delete External Client Apps |
| To install and uninstall packaged connected apps: | Customize Application AND eitherModify All Data OR Create, edit, and delete External Client AppsAND Download AppExchange Packages |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

Connected apps creation is restricted as of Spring ‘26. You can continue to use existing connected apps during and after Spring ‘26. However, we recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) instead. If you must continue creating connected apps, contact Salesforce Support.

See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&language=en_US) for more details.

Use the Salesforce external client app to provide the registration certificate or token of your mobile client app so that Salesforce can send push notifications. Also, the external client app provides the unique API name that identifies the mobile app to send notifications to.

-   **[Create an External Client App for Android](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_create_external_client_app_android.htm)**

-   **[Create an External Client App for Apple iOS](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_create_external_client_app_apple.htm)**

-   **[Testing Your External Client App Push Configuration](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_test_conn_app_push.htm)**
    To run a quick test of your push notification setup, use the Send Test Notification page. Troubleshoot round-trip push notifications in a synchronous mechanism without having to configure custom notification types, Apex calls, or REST calls. You can also gain insights into what’s going on behind the scenes in the asynchronous environment of real-world push notifications.

## Related Topics

- Create an External Client App for Android (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_create_external_client_app_android.htm)
- Create an External Client App for Apple iOS (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_create_external_client_app_apple.htm)
- Testing Your External Client App Push Configuration (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_test_conn_app_push.htm)
