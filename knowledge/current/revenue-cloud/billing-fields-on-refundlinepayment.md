---
title: "Billing Fields on RefundLinePayment"
domain: revenue-cloud
topic: billing-fields-on-refundlinepayment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.511Z
estimatedTokens: 243
keywords: [Billing, Fields, RefundLinePayment, Standard, fields, extend, Refund, Line, Payment, represent, information, accounting, periods, legal, entities., API, version, 64.0, later., Special]
---

# Billing Fields on RefundLinePayment

> Standard fields extend the Refund Line Payment object for use in
         Billing to represent information about accounting periods for legal entities. This
      object is available in API version 64.0 and later.

# Billing Fields on RefundLinePayment

Standard fields extend the Refund Line Payment object for use in Billing to represent information about accounting periods for legal entities. This object is available in API version 64.0 and later.

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period related to the refund.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntityAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the refund.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
