---
title: "PaymentCreditTransaction"
domain: object-reference
topic: paymentcredittransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.443Z
estimatedTokens: 731
keywords: [PaymentCreditTransaction, payment, credit, transaction, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# PaymentCreditTransaction

> A payment credit transaction. This object is available in API version
      65.0 and later.

# PaymentCreditTransaction

A payment credit transaction. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce or D2C Commerce license is enabled. Users require the PaymentCredit and PaymentPlatform permission sets.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionAmount of the payment credit transaction.This is a required field. |
| AssociatedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the customer account.This field is a relationship field.Relationship NameAssociatedAccountRefers ToAccount |
| ClientContext | TypetextareaPropertiesNillableDescriptionAdditional information about the payment credit transaction. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionContains the ISO code for any currency allowed by the organization.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference ID used to track the payment credit transaction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PaymentCreditId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the payment credit.This field is a relationship field.This is a required field.Relationship NamePaymentCreditRelationship TypeMaster-detailRefers ToPaymentCredit (the master object) |
| PaymentCreditTransactionNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionNumber of the payment credit transaction. This field is automatically generated.Example: PCT-{000000000}. |
| ProcessingMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCredit transaction processing mode.Possible values are:ExternalSalesforceThis is a required field. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA static enum showing the status of the credit transaction.Possible values are:CanceledDraftFailedPendingProcessed |
| TransactionMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMessage describing the transaction. |
