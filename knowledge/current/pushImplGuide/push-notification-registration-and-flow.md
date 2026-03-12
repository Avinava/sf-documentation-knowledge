---
title: "Push Notification Registration and Flow"
domain: pushImplGuide
topic: push-notification-registration-and-flow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.719Z
estimatedTokens: 682
keywords: [Push, Notification, Registration, Flow, enable, notifications, register, several, different, entities, configure, settings]
---

# Push Notification Registration and Flow

> To enable push notifications, you register with several different entities and
    configure the required settings.

# Push Notification Registration and Flow

To enable push notifications, you register with several different entities and configure the required settings.

Entities involved when sending a push notification include:

-   The OS vendor that delivers the notification to devices
-   The Salesforce organization that sends the notification
-   The mobile devices that receive and display the notification

Here is an outline of the registration process for developers.

1.  Register with the mobile OS vendor, such as Apple or Google, for push service.
2.  Create a external client app in Salesforce to upload the push credentials, such as the iOS .p12 certificate or the Android token.
3.  Enable the mobile client app to handle push notifications using the Salesforce Mobile SDK.
4.  Write Apex triggers to send push notifications when certain events occur on Salesforce records.
5.  (For partners only) For partners who are developing the push notification triggers for other customer organizations, this additional step should be performed.

    Create a second-generation managed package containing the external client app and Apex triggers. Distribute this package to customer organizations.


The following figure illustrates the complete push notification flow for customers who develop their own mobile apps and Apex triggers. The flow consists of the following sequence of events:

1.  Developer registration with the OS vendor (Apple in this figure)
2.  external client app setup in Salesforce
3.  Sending the push notification via the trigger from the Salesforce organization
4.  Delivery of the push notification to mobile devices by the OS vendor

Push Notification Flow for Customers ![Push notification flow for customers](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmobile_push_notifications%2Fimages%2Fmobile_pns_flow_developer.png&folder=pushImplGuide)

The Push Notification Service sends the message to the users specified in the send call of the Apex Messaging.PushNotification class.

This next figure illustrates the complete push notification flow for partners and customers. In addition to the flow represented in the previous diagram, this flow includes steps for customers who have installed the partner’s package. It includes purchase of the partner app, and installation of the partner’s package to get the external client app and the Apex triggers. The last few steps of sending and delivering the push notification are similar to the previous flow.

Push Notification Flow for Partners and Customers ![Push notification flow for partners and customers](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmobile_push_notifications%2Fimages%2Fmobile_pns_flow_partner.png&folder=pushImplGuide)
