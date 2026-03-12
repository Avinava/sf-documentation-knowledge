---
title: "PaymentGroup"
domain: object-reference
topic: paymentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.514Z
estimatedTokens: 301
keywords: [PaymentGroup, Top-level, groups, payment, transactions, processed, order, invoice, standalone, isn’t, users, execute, authorizations, captures, refunds]
---

# PaymentGroup

> Top-level object that groups all payment transactions that are processed for an
      order or invoice. PaymentGroup is a standalone object, so it isn’t required for users to
      execute payment transactions (authorizations, captures, refunds, and sales). This object
    is available in API version 48.0 and later.

# PaymentGroup

Top-level object that groups all payment transactions that are processed for an order or invoice. PaymentGroup is a standalone object, so it isn’t required for users to execute payment transactions (authorizations, captures, refunds, and sales). This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Commerce Payments entities, your org must have a Salesforce Order Management license with the Payment Platform org permission activated. Commerce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| PaymentGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-defined unique ID for the payment group. |
| SourceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order or invoice related to all the payment transactions in the payment group.This is a relationship field.Relationship NameSourceObjectRelationship TypeLookupRefers ToOrder |
