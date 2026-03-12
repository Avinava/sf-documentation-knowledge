---
title: "OrderPaymentSummary"
domain: object-reference
topic: orderpaymentsummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.005Z
estimatedTokens: 2297
keywords: [OrderPaymentSummary, current, state, payments, payment, applied, OrderSummary, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# OrderPaymentSummary

> Represents the current properties and state of payments using a single payment
      method that are applied to one OrderSummary. This object is available in API version 48.0
    and later.

# OrderPaymentSummary

Represents the current properties and state of payments using a single payment method that are applied to one OrderSummary. This object is available in API version 48.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Unlike most summary objects, an OrderPaymentSummary isn’t related to a similarly named order payment object. Instead, it combines values from multiple payment objects that use the same payment method and apply to the same OrderSummary.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AuthorizationAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that has been authorized. |
| AuthorizationReversal​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the AuthorizationAmount that has been reversed. |
| AvailableToCaptureAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that’s available to be captured. Equal to AuthorizationAmount minus (CapturedAmount and PendingCaptureAmount and AuthorizationReversalAmount and PendingReverseAuthAmount). However, if the calculated amount is a negative number, this value is 0. |
| AvailableToRefundAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that’s available to be refunded. Equal to CapturedAmount plus PendingCaptureAmount minus (RefundedAmount and PendingRefundAmount). However, if the calculated amount is a negative number, this value is 0. |
| BalanceAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal balance of all payments associated with this summary object. |
| CapturedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that has been captured. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for the currency of the OrderSummary associated with the OrderPaymentSummary. Order Management APIs and actions that create an OrderPaymentSummary for an OrderSummary set this value. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| FullName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe full name of the payment method user. |
| LastPaymentGateway​LogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the most recent payment gateway log associated with the OrderPaymentSummary. |
| LastPaymentGateway​Message | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent message received from the payment gateway associated with the OrderPaymentSummary. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed a record related to this record.This field is available in API version 49.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record. A null value can mean that this record was only referenced (LastReferencedDate) and not viewed.This field is available in API version 49.0 and later. |
| Method | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderPaymentSummary. |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the OrderSummary associated with the OrderPaymentSummary. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who currently owns this OrderPaymentSummary. Default value is the user logged in to the API to perform the create. |
| PaymentCreditedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of credit associated with this OrderPaymentSummary.This field is available in API version 65.0 and later. |
| PaymentMethodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the payment method associated with this OrderPaymentSummary. |
| PendingAuthorization​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that’s pending authorization. |
| PendingCaptureAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that’s pending capture. |
| PendingRefundAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that’s pending refund. |
| PendingReverseAuth​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the AuthorizationAmount that’s pending reversal. |
| RefundedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that was refunded. |
| ReservedBalanceTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated field that summarizes the ReservedBalanceAmount for all OrderPaymentSummaryReferences for the OrderPaymentSummary. |
| Type | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe payment method type associated with the OrderPaymentSummary. For example, visa, mastercard, check, or giftcard. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[OrderPaymentSummaryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[OrderPaymentSummaryFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrderPaymentSummaryOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OrderPaymentSummaryShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [Payment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_payment.htm "Represents a single event when a shopper makes a payment. For credit cards, this event is a payment capture or payment sale, but it doesn't appear on the shopper's credit card statement. This object is available in API version 48.0 and later.")

-   [PaymentAuthorization](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentauthorization.htm "Represents a single payment authorization event where users can capture or reverse a payment against a reserve of funds. This object is available in API version 48.0 and later.")

-   [PaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentmethod.htm "Represents the method that a buyer uses to compensate the seller of a good or service. Common payment methods include cash, checks, credit or debit cards, money orders, bank transfers, and online payment services. This object is available in API version 48.0 and later.")

## Related Topics

- OrderPaymentSummaryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OrderPaymentSummaryFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrderPaymentSummaryOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- OrderPaymentSummaryShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
- Payment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_payment.htm)
- PaymentAuthorization (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentauthorization.htm)
- PaymentMethod (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentmethod.htm)
