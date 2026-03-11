---
title: "NotificationClient Methods"
domain: apex-reference
topic: notificationclient-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.031Z
keywords: [NotificationClient, Methods, Stores, results, notification, request., record, Signature, Parameters, Return, Value]
---

# NotificationClient Methods

> Stores the results of a notification request.

## NotificationClient Methods

The following are methods for NotificationClient.

-   **[record(notification)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationClient.htm#apex_commercepayments_NotificationClient_record)**  
    Stores the results of a notification request.

### record(notification)

Stores the results of a notification request.

#### Signature

global static commercepayments.NotificationSaveResult record(commercepayments.BaseNotification notification)

#### Parameters

notification

[Type: BaseNotification](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_class_commercepayments_BaseNotification "Abstract class for storing notification information sent from payment gateways.")

#### Return Value

Type: [NotificationSaveResult](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm#apex_class_commercepayments_NotificationSaveResult "Contains the result of the payment platform’s attempt to record data from the gateway’s notification.")