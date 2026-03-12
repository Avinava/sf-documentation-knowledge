---
title: "FinServ_PolicyPaymentMethod__c"
domain: financial-services-cloud-object-reference
topic: finservpolicypaymentmethodc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.418Z
estimatedTokens: 489
keywords: [FinServ_PolicyPaymentMethod__c, premium, payment, policy, credit, card, debit, internet, banking, API, version, 47.0, later, FinServ, _PolicyPaymentMethod]
---

# FinServ_PolicyPaymentMethod__c

> Represents the premium payment method for a policy, such as credit card, debit
      card, or internet banking. This object is available in API version 47.0 and
    later.

# FinServ\_PolicyPaymentMethod\_\_c

Represents the premium payment method for a policy, such as credit card, debit card, or internet banking. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| EndDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the financial account was removed as the active payment method. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe financial account that is used to make any payments for the policy. For example, debit card, credit card, bank account. |
| InsurancePolicy__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe policy for which this payment setup is done. |
| IsActive__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this financial account and its billing configuration are active. |
| IsPrimaryAccount__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the financial account is the primary billing account for the policy. |
| PaymentPercentage__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the total bill amount that is charged to this financial account. |
| StartDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the financial account was added as an active payment method. |
