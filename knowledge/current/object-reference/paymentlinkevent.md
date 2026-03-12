---
title: "PaymentLinkEvent"
domain: object-reference
topic: paymentlinkevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.606Z
estimatedTokens: 357
keywords: [PaymentLinkEvent, payment, link, platform, event, Subscribe, events, listen, respond, they’re, published, Salesforce, Flow, triggered, API]
---

# PaymentLinkEvent

> Represents a payment link platform event. Subscribe to these events so you
         can listen and respond to them when they’re published. For example, create a Salesforce
         Flow that is triggered when one of these events is published. This object is available
      in API version 59.0 and later.

# PaymentLinkEvent

Represents a payment link platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.

For more information about platform events, see the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm "HTML (New Window)").

## Supported Calls

describeSObjects()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license and Payments must be enabled for your org. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| ChangeType | TypepicklistPropertiesRestricted picklistDescriptionType of payment link event, which triggers and event notification.Possible values are:Create–Payment link created.Delete–Payment link deleted.Update–Payment link property changed. |
| PaymentLinkId | TypereferencePropertiesNillableDescriptionType of payment link event. You can write code to operate conditionally on the value of this field. For example, you can ignore a create change but get notified of updates.This field is a relationship field.Relationship NamePaymentLinkRelationship TypeLookupRefers ToPaymentLink |
