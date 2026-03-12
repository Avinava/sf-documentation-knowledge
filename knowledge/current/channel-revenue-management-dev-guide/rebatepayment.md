---
title: "RebatePayment"
domain: channel-revenue-management-dev-guide
topic: rebatepayment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.690Z
estimatedTokens: 220
keywords: [RebatePayment, Tracks, payment, generated, member, back, end, processing, API, version, 51.0, later, Calls]
---

# RebatePayment

> Tracks if the payment has been generated for this member for back end
      processing. This object is available in API version 51.0 and later.

# RebatePayment

Tracks if the payment has been generated for this member for back end processing. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionAmount to be paid out. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the rebate program. |
| PaymentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when payment is issued. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the payout.Possible values are:GeneratedPaidRejected |
