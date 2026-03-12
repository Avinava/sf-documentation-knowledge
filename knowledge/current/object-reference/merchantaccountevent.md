---
title: "MerchantAccountEvent"
domain: object-reference
topic: merchantaccountevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.776Z
estimatedTokens: 434
keywords: [MerchantAccountEvent, merchant, account, platform, event, Subscribe, events, listen, respond, they’re, published, Salesforce, Flow, triggered, API]
---

# MerchantAccountEvent

> Represents a merchant account platform event. Subscribe to these events so
         you can listen and respond to them when they’re published. For example, create a Salesforce
         Flow that is triggered when one of these events is published. This object is available
      in API version 59.0 and later.

# MerchantAccountEvent

Represents a merchant account platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.

For more information about platform events, see the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm "HTML (New Window)").

## Supported Calls

describeSObjects()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license and Payments must be enabled for your org. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| ChangeType | TypepicklistPropertiesRestricted picklistDescriptionType of merchant account event, which triggers an event notification. You can write code to listen to operate conditionally on the value of this field. For example, you can ignore a create change but get notified of updates.Possible values are:Create–Merchant account is created.Disable–The account is deactivated. For example, the payment provider or the merchant disables an account due to fraudulent activity.PaymentEnable–The account is active and ready to receive payments.PayoutEnable–The account is ready to receive payouts.Update–Merchant account property change occurs. |
| MerchantAccountId | TypereferencePropertiesNillableDescriptionIdentifies the merchant account for which the event occurs.This field is a relationship field.Relationship NameMerchantAccountRelationship TypeLookupRefers ToMerchantAccount |
