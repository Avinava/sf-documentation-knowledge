---
title: "PaymentCreditLinePayment"
domain: object-reference
topic: paymentcreditlinepayment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.435Z
estimatedTokens: 847
keywords: [PaymentCreditLinePayment, payment, credit, line, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# PaymentCreditLinePayment

> A payment credit line payment. This object is available in API version
      65.0 and later.

# PaymentCreditLinePayment

A payment credit line payment. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce or D2C Commerce license is enabled. Users require the PaymentCredit and PaymentPlatform permission sets.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionAmount to apply to or unapply from the payment to the credit.This is a required field. |
| AppliedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate payment was applied. Can be the current date or a provided date. |
| AssociatedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the customer account.This field is a relationship field.Relationship NameAssociatedAccountRefers ToAccount |
| AssociatedLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the associated line.This field is a relationship field.Relationship NameAssociatedLineRefers ToPaymentCreditLinePayment |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionContains the ISO code for any currency allowed by the organization.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription regarding the payment credit. |
| HasBeenUnapplied | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the refund line record with type Applied has been unapplied. Not applicable for a refund line record with type Unapplied.This is a required field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PaymentCreditId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the payment credit.This field is a relationship field.This is a required field.Relationship NamePaymentCreditRefers ToPaymentCredit |
| PaymentCreditLine PaymentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionNumber of the payment credit line payment. This field is automatically generated.Example: PCLP-{000000000}. |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the applied payment credit.This field is a relationship field.Relationship NamePaymentRelationship TypeMaster-detailRefers ToPayment (the master object) |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionPayment credit type. This is a required field.Possible values are:AppliedUnapplied |
| UnappliedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate payment was unapplied. Can be the current date or a provided date. |
