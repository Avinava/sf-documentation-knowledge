---
title: "Billing Fields on DisputeItem"
domain: revenue-cloud
topic: billing-fields-on-disputeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.454Z
estimatedTokens: 328
keywords: [Billing, DisputeItem, specific, invoice, line, charge, that’s, disputed, include, total, transaction, amount, date, reason, status]
---

# Billing Fields on DisputeItem

> Represents a specific invoice line or charge that’s being disputed. The
         details include the total transaction amount, transaction date, disputed amount, reason,
         and status of the dispute. This object is available in API version 66.0 and
      later.

# Billing Fields on DisputeItem

Represents a specific invoice line or charge that’s being disputed. The details include the total transaction amount, transaction date, disputed amount, reason, and status of the dispute. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Billing Operations User or the Billing Customer Service User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| ApprovedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that’s approved to be credited to the customer. |
| InvoiceLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice line ID associated with the dispute.This field is a relationship field.Relationship NameInvoice LineRefers ToInvoice Line |

#### See Also

-   [*Financial Services Cloud Developer Guide*: DisputeItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_disputeitem.htm)
