---
title: "DisputeItem"
domain: financial-services-cloud-object-reference
topic: disputeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.979Z
estimatedTokens: 2651
keywords: [DisputeItem, transaction, that’s, disputed, API, version, 59.0, later, Calls]
---

# DisputeItem

> Represents a transaction that’s being disputed. This object is available
      in API version 59.0 and later.

# DisputeItem

Represents a transaction that’s being disputed. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcquirerReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier assigned to a transaction by the payment network if the transaction was done through a payment gateway. Available in version 61.0 and later. |
| ApprovedProvisionalCredit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe provisional credit amount that's approved for the dispute. Available in version 60.0 and later. |
| CardBrand | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the brand or network associated with the card that was used in the disputed transaction. |
| CardLastFourDigit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last four digits of the credit or debit card number that's associated with this transaction. These digits are commonly used to verify the transaction and identify the cardholder. Available in version 60.0 and later. |
| CardSixDigitBin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first six digits of the credit or debit card number that's associated with this transaction. These digits are used to identify the card issuer. Available in version 60.0 and later. |
| CardType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of card used in the transaction. Available in version 61.0 and later.Possible values are:Credit CardDebit CardPrepaid Card |
| CaseClaimIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of the claim associated with an arbitration or compliance case . Available in version 62.0 and later. |
| ClaimIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of the claim associated with the chargeback. Available in version 61.0 and later. |
| ClearingMerchantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the merchant or business that accepted the payment through a card transaction. Available in version 61.0 and later. |
| ClearingTrxnAmountLocal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cleared amount of the disputed transaction in the local currency.. Available in version 62.0 and later. |
| ClearingTrxnAmountLocalCrcy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cleared amount of the disputed transaction in the local currency. Available in version 62.0 and later. |
| DisputeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the transaction.This field is a relationship field.Relationship NameDisputeRelationship TypeLookupRefers ToDispute |
| DisputeReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Dispute Reason associated with the dispute item. Available in version 61.0 and later.This field is a relationship field.Relationship NameDisputeReasonRelationship TypeLookupRefers ToDisputeReason |
| DisputedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount in the transaction that's under question or dispute. |
| EnrichmentProvider | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the name of the enrichment provider that provides additional information associated with the transaction, such as merchant name, address, description, and URL. Available in version 60.0 and later. |
| FundFlowDirection | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the direction of funds in the transaction that's being disputed. Available in version 60.0 and later.Possible values are:CreditDebitINFLOWOUTFLOWWithdrawal |
| IsCardPresent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the payment card was present with the cardholder (true) or not (false) during the transaction. Available in version 61.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MerchantAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address of the merchant associated with the transaction. Available in version 60.0 and later. |
| MerchantCategory | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category associated with the merchant based on the type of products or services the merchant provides. Available in version 60.0 and later. |
| MerchantDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the merchant associated with the transaction. Available in version 60.0 and later. |
| MerchantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the merchant associated with the transaction. Available in version 60.0 and later. |
| MerchantUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe website URL of the merchant associated with the transaction. Available in version 60.0 and later. |
| MerchantLogoUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe logo URL of the merchant associated with the transaction. Available in version 60.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the DisputeItem record. |
| PaymentNetwork | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the payment network that faciliates the exchange of funds between parties involved. Available in version 61.0 and later.Possible values are:ACHAmerican ExpressDinersMastercardVisaZelle |
| ProvisionalCreditApproverId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User associated with the Dispute. The user is the approver of provisional credit amount. Available in version 60.0 and later.This field is a relationship field.Relationship NameProvisionalCreditApproverRelationship TypeLookupRefers ToUser |
| ProvisionalCreditDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the provisional credit amount was credited. Available in version 60.0 and later. |
| ProvisionalCreditStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the provisional credit amount. Available in version 60.0 and later.Possible values are:CompletedIn ProgressInitiatedNot Applicable |
| ReceiverBin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the entity who filed an arbitration or compliance case. Available in version 62.0 and later. |
| SenderBin | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the entity against which an arbitration or compliance case is filed. Available in version 62.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the disputed transaction.Possible values are:SubmittedInvalidNo longer disputedResolved |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount involved in the transaction. |
| TransactionCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code that identifies the type of transaction. |
| TransactionCurrencyCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code associated with the currency used in this transaction. |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date of the transaction. |
| TransactionDescription | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the transaction. |
| TransactionIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the transaction. |
| TransactionsApiSearchResult | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe search result of the transactions API. Available in version 61.0 and later. |
| TrxnApiAuthorizationResult | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe authorization information obtained from the transactions API. Available in version 61.0 and later. |
| TrxnApiClrAndStlResult | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe clearing and settlement information obtained from the transactions API. Available in version 61.0 and later. |
| TrxnAuthorizationIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier generated during the authorization phase of a transaction to verify the availability of sufficient funds in the cardholder's account to proceed with the transaction. Available in version 61.0 and later. |
| TrxnClearingIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier assigned to a transaction during clearing and settlement process to track the transaction's progress and facilitate funds transfer between parties. Available in version 61.0 and later. |
| ValidationOutcome | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the outcome of the validation rules run on the disputed transaction.Possible values are:Automatic write-offEligibleInvalid |
| ValidationOutcomeReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the transaction's validation outcome. Available in version 60.0 and later. |
