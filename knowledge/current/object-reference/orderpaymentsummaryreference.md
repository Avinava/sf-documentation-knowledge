---
title: "OrderPaymentSummaryReference"
domain: object-reference
topic: orderpaymentsummaryreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.015Z
estimatedTokens: 1072
keywords: [OrderPaymentSummaryReference, junction, order, payment, summary, shared, another, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# OrderPaymentSummaryReference

> OrderPaymentSummaryReference is a junction object that allows an order
         payment summary to be shared with another order summary.  This object is available in
      API version 60.0 and later.

# OrderPaymentSummaryReference

OrderPaymentSummaryReference is a junction object that allows an order payment summary to be shared with another order summary. This object is available in API version 60.0 and later.

An order summary can share an order payment summary with any of its child order summaries (exchange order summaries). Each child can share the order payment summary with its children, and so on. Conceptually, the original order summary and its children form a tree structure, with the original order summary as the root node. If a new order payment summary is created for an exchange order summary anywhere in the tree, the new order payment summary can only be shared with that exchange order summary’s children (and their descendents), if any.

The purpose of the OrderPaymentSummaryReference object is to establish how order summaries share order payment summaries. This is only possible if the relationship between the two order summaries has already been established. A corresponding OrderSummaryRelationship record must already exist that relates a parent order summary (MainOrderSummary) with its child (AssociateOrderSummary). The record’s AssociatedRelationshipType field must be set to Exchange.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AuthorizationAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that has been authorized. |
| CapturedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that has been captured. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for the currency of the OrderSummary associated with the OrderPaymentSummary. Order Management APIs and actions that create an OrderPaymentSummary for an OrderSummary set this value. The default value is USD.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed a record related to this record.This field is available in API version 49.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record. A null value can mean that this record was only referenced (LastReferencedDate) and not viewed.This field is available in API version 49.0 and later. |
| Method | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderPaymentSummary. |
| OrderPaymentSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the OrderPaymentSummary shared with the OrderSummary (exchange order).This field is a relationship field.Relationship NameOrderPaymentSummaryRelationship TypeLookupRefers ToOrderPaymentSummary |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the OrderSummary (exchange order) that the OrderPaymentSummary is shared with.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| RefundedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the OrderPaymentSummary that was refunded. |
| ReservedBalanceAmount | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionReserved balance amount for the exchange order for the order payment summary relationship. |
| ReservedBalanceTotalAmount | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionSummary of all the ReservedBalanceAmount for all the order payment summary references. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of reference between the OrderSummary and the OrderPaymentSummary.Possible values are:Shared |
