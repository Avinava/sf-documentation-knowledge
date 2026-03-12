---
title: "PaymentIntentEvent"
domain: object-reference
topic: paymentintentevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.574Z
estimatedTokens: 795
keywords: [PaymentIntentEvent, payment, intent, platform, event, Subscribe, events, listen, respond, they’re, published, Salesforce, Flow, triggered, API]
---

# PaymentIntentEvent

> Represents a payment intent platform event. Subscribe to these events so you
         can listen and respond to them when they’re published. For example, create a Salesforce
         Flow that is triggered when one of these events is published. This object is available
      in API version 59.0 and later.

# PaymentIntentEvent

Represents a payment intent platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published. This object is available in API version 59.0 and later.

For more information about platform events, see the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm "HTML (New Window)").

## Supported Calls

describeSObjects()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license and Payments must be enabled for your org. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| ChangeType | TypepicklistPropertiesRestricted picklistDescriptionType of payment intent event that triggers an event notification. You can write code to operate conditionally on the value of this field. For example, you can ignore an authorization but get notified of captures.Possible values are:Authorize–Payment is authorized.AuthorizeFailure–There’s an error preventing the payment authorizationCapture–Payment is captured.CaptureFailure– An error prevented the payment capture.Refund–Payment is refunded.RefundFailure–An error prevented the payment refund. |
| PaymentInitiationSourceApplication | TypepicklistPropertiesNillable, Restricted picklistDescriptionSalesforce application initiating the payment. This field is available in API version 63.0 and later.Possible values are:CollectionsCommerceCustomFieldServiceOrderManagementPaymentsRevenueSalesSchedulerService |
| PaymentInitiationSourceChannel | TypestringPropertiesNillableDescriptionIdentifies the channel in the Payment Initiation Source record for which the event occurs. This field is available in API version 63.0 and later. |
| PaymentInitiationSource | TypereferencePropertiesNillableDescriptionIdentifies the Payment Initiation Source record for which the event occurs. This field is available in API version 63.0 and later.This field is a relationship field.Relationship NamePaymentInitiationSourceRefers ToPaymentInitiationSource |
| PaymentInitiationSourceProcess | TypestringPropertiesNillableDescriptionIdentifies the process in the Payment Initiation Source record for which the event occurs. |
| PaymentIntentGuid | TypestringPropertiesNillableDescriptionIdentifies the GUID in the Payment Initiation Source record for which the event occurs. This field is available in API version 63.0 and later. |
| PaymentIntent | TypereferencePropertiesNillableDescriptionIdentifies the PaymentIntent record for which the event occurs. This field is available in API version 63.0 and later.This field is a relationship field.Relationship NamePaymentIntentRelationship TypeLookupRefers ToPaymentIntent |
| PaymentLink | TypereferencePropertiesNillableDescriptionIdentifies the payment link record for which the event occurs. This field is available in API version 63.0 and later.This field is a relationship field.Relationship NamePaymentLinkRefers ToPaymentLink |
