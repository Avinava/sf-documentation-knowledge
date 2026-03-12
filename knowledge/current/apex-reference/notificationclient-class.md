---
title: "NotificationClient Class"
domain: apex-reference
topic: notificationclient-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.957Z
estimatedTokens: 602
namespace: CommercePayments
keywords: [NotificationClient, Communicates, payment, platform, regarding, gateway’s, notification., Usage, Example, record, notification]
---

# NotificationClient Class

> Communicates with the payment platform regarding the gateway’s
      notification.

**Namespace:** `CommercePayments`

# NotificationClient Class

Communicates with the payment platform regarding the gateway’s notification.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Specify the CommercePayments namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

CommercePayments.NotificationClient ntc = new CommercePayments.NotificationClient();

This class is used in asynchronous payment gateway adapters. The notification client contains API for communicating with the payments platform regarding the gateway’s notification. When the gateway sends a notification, the gateway adapter invokes the record method in NotificationClient to request that the platform updates notification details.

## Example

The NotificationSaveResult class creates a saveResult object to store the result of the save request made to the payment gateway.

commercepayments.NotificationSaveResult saveResult = commercepayments.NotificationClient.record(notification);

-   **[NotificationClient Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationClient.htm#apex_commercepayments_NotificationClient_methods)**


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

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- NotificationClient Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationClient.htm)
- record(notification) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationClient.htm)
- Type:
              BaseNotification (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- NotificationSaveResult (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm)
