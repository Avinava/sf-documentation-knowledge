---
title: "BalanceAdjustmentRequest"
domain: eu-developer-guide
topic: balanceadjustmentrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.089Z
estimatedTokens: 535
keywords: [BalanceAdjustmentRequest, financial, adjustment, backend, billing, system, Adjustments, requests, either, debit, credit, amounts, Often, give, customer]
---

# BalanceAdjustmentRequest

> The request to create a financial adjustment in a backend billing system.
         Adjustments requests can be for either debit or credit amounts. Often used to give the
         customer a goodwill gesture. This object is available in API version 62.0 and later.

# BalanceAdjustmentRequest

The request to create a financial adjustment in a backend billing system. Adjustments requests can be for either debit or credit amounts. Often used to give the customer a goodwill gesture. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe monetary amount of balance adjustment being requested |
| ApprovedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user associated with approving the balance adjustment requestThis field is a relationship field.Relationship NameApprovedByRefers ToUser |
| ApprovedOn | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the balance adjustment request was approved |
| BillingAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe billing profile associated with the balance adjustment requestThis field is a relationship field.Relationship NameBillingAccountRefers ToBillingAccount |
| BlockReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason why the balance adjustment request is placed on hold from further processing |
| IsBlocked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the balance adjustment request is placed on hold from further processingThe default value is false. |
| Reason | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reason that the balance adjustment is requested |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the current status of the balance adjustment requestPossible values are:GeneratedProcessed |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of balance adjustment requestedPossible values are:CreditDebit |
