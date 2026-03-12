---
title: "Billing Fields on PaymentLineInvoice"
domain: revenue-cloud
topic: billing-fields-on-paymentlineinvoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.492Z
estimatedTokens: 365
keywords: [Billing, Fields, PaymentLineInvoice, Standard, fields, extend, represent, information, legal, entities, entity, accounting, periods., API, version, 64.0, later., Supported, Calls, Special]
---

# Billing Fields on PaymentLineInvoice

> Standard fields extend the PaymentLineInvoice object for use in
         Billing to represent information about legal entities and legal entity accounting
         periods. This object is available in API version 64.0 and later.

# Billing Fields on PaymentLineInvoice

Standard fields extend the PaymentLineInvoice object for use in Billing to represent information about legal entities and legal entity accounting periods. This object is available in API version 64.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period related to the payment line invoice.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the payment line invoice.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |

#### See Also

-   [*Object Reference for the Salesforce Platform*: PaymentLineInvoice](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentlineinvoice.htm "Object Reference for the Salesforce Platform: PaymentLineInvoice - HTML (New Window)")
