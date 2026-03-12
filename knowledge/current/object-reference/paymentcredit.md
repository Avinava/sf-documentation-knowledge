---
title: "PaymentCredit"
domain: object-reference
topic: paymentcredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.424Z
estimatedTokens: 1118
keywords: [PaymentCredit, Tracks, amount, money, customer, store, credit, gift, card, another, It's, linked, original, payment, record]
---

# PaymentCredit

> Tracks the amount of money returned to the customer. The return can be a
         store credit, a gift card, or another type of credit. It's linked to the original payment
         record and includes the total credit amount issued. This object is available in API
      version 65.0 and later.

# PaymentCredit

Tracks the amount of money returned to the customer. The return can be a store credit, a gift card, or another type of credit. It's linked to the original payment record and includes the total credit amount issued. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce or D2C Commerce license is enabled. Users require the PaymentCredit and PaymentPlatform permission sets.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who made the payment.This field is a relationship field.This is a required field.Relationship NameAccountRefers ToAccount |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionThe amount to be credited.This is a required field. |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionBalance of payment credits (NetApplied - TotalCredit TransactionAmount - TotalCredit PendingTransactionAmount). |
| Comments | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProvide additional details about the payment credit transaction. |
| CreditMemoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the credit memo associated with the payment credit.This field is a relationship field.Relationship NameCreditMemoRefers ToCreditMemo |
| CreditType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCredit types available.This is a dynamic picklist that the user can define. Possible values are:CreditGift CardGift Certificate |
| CreditTypeCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA static enum showing the credit category type.Possible value is:Credit |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionContains the ISO code for any currency allowed by the organization.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionEffective date of the payment credit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| NetApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all credit amounts apllied for this payment credit (TotalCreditApplied - TotalCreditUnapplied). |
| OrderPaymentSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the order payment summary.This field is a relationship field.Relationship NameOrderPaymentSummaryRefers ToOrderPaymentSummary |
| PaymentCreditNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the payment credit record. This field is automatically generated.Example: PC-{000000000}. |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the payment associated with the payment credit.This field is a relationship field.Relationship NamePaymentRefers ToPayment |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the return order associated with the payment credit.This field is a relationship field.Relationship NameReturnOrderRefers ToReturnOrder |
| TotalApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of all applied amounts from the payment credit line payment. |
| TotalCreditPendingTxnAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of pending payment credits. |
| TotalCreditTxnAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of processed payment credits. |
| TotalUnapplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of all the unapplied amounts from the payment credit line payment. |
