---
title: "PaymentTerm"
domain: object-reference
topic: paymentterm
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.681Z
estimatedTokens: 764
keywords: [PaymentTerm, company's, expectations, receiving, payment, API, version, 55.0, later, Calls, Special, Access, Rules, Usage]
---

# PaymentTerm

> Defines your company's method and expectations for receiving payment.
      This object is available in API version 55.0 and later.

# PaymentTerm

Defines your company's method and expectations for receiving payment. This object is available in API version 55.0 and later.

Timely payment helps your company maintain cash flow. Payment terms are used to determine the payment due date on invoices. Use with the PaymentTermItem object.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymentterm.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser-defined field that describes the payment term. For example, use Net 30 to describe a payment term where the payment is due within 30 days of the billing date. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this payment term is the default term for your org. A default payment term must be defined in your org.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the payment term. For example, Net 30 or Cash on delivery (COD).This name appears on the invoice. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the payment term is available for use on invoices.Possible values are:Active—The payment term is available for use and can be applied to an order. Only active payment terms can be applied to transactions or orders.Draft—The payment term exists but isn't activated yet.Inactive—The payment term exists but can't be applied to new transactions or orders.The default value is Draft. |

## Usage

A payment term is applied to an order or transaction, and is passed on to the billing schedule that’s used to generate the invoice. The due date on the invoice is derived from the payment.

For example, a Net 30 payment term means that the customer has 30 days to pay from the invoice date. Suppose that an invoice with a Net 30 payment term is generated on January 1. The invoice date is January 1, and the due date is January 31 (1 + 30 days = 31).
