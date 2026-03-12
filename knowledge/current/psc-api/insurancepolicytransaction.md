---
title: "InsurancePolicyTransaction"
domain: psc-api
topic: insurancepolicytransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.976Z
estimatedTokens: 1136
keywords: [InsurancePolicyTransaction, transaction, change, affects, premium, insurance, policy, endorsement, renewal, cancellation, API, version, 60.0, later, Calls]
---

# InsurancePolicyTransaction

> Represents a transaction related to a change that affects the premium of an
         insurance policy, such as an endorsement, renewal, or cancellation. This object is
      available in API version 60.0 and later.

# InsurancePolicyTransaction

Represents a transaction related to a change that affects the premium of an insurance policy, such as an endorsement, renewal, or cancellation. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

## Fields

| Field | Details |
| --- | --- |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The insurance policy this transaction is related to.This field is a relationship field.Relationship NameInsurancePolicyRelationship TypeLookupRefers ToInsurancePolicy |
| InsurancePolicyVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current version of the insurance policy.This field is a relationship field.Relationship NameInsurancePolicyVersionRelationship TypeLookupRefers ToInsurancePolicy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the transaction. |
| ParentTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction this insurance policy transaction is related to. For example, a charge transaction is the parent transaction for a payment made against that charge.This field is a relationship field.Relationship NameParentTransactionRelationship TypeLookupRefers ToInsurancePolicyTransaction |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current status of a policy transaction.Possible values are:ApprovedPendingRejectedReversed |
| TotalTransactionAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of transaction, including transaction fee and tax.This field is a calculated field. |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction amount. |
| TransactionEffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of the transaction. |
| TransactionFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe prorated fee for the transaction. |
| TransactionNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn identifier for the transaction from an external system. |
| TransactionPostedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the amount was charged to the customer. |
| TransactionTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe prorated tax on the transaction amount. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of transaction.Possible values are:CancellationCreditDepositEndorsementLoanPremium PaymentRenewalSurchargeSurrenderWithdrawal |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsurancePolicyTransactionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsurancePolicyTransactionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsurancePolicyTransactionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- InsurancePolicyTransactionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
