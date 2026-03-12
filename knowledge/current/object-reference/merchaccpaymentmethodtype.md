---
title: "MerchAccPaymentMethodType"
domain: object-reference
topic: merchaccpaymentmethodtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.761Z
estimatedTokens: 675
keywords: [MerchAccPaymentMethodType, Refers, payment, defined, MerchAccPaymentMethodSet, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# MerchAccPaymentMethodType

> Refers to a payment method that is in a payment method set, which is
         defined by the MerchAccPaymentMethodSet object. This object is
      available in API version 58.0 and later.

# MerchAccPaymentMethodType

Refers to a payment method that is in a payment method set, which is defined by the MerchAccPaymentMethodSet object. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license with the Payments permission enabled for your org. Salesforce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only when the multicurrency feature is enabled. Contains the ISO code for any currency used by the org. |
| PaymentInstrumentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of instrument the payer can pay with.Possible values are:us_bank_account - ACH_Debitaffirm - Affirmafterpay - Afterpayafterpay_clearpay - Afterpay/Clearpayamazon_pay - Amazon Payapplepay - Apple Payau_becs_debit - BECS_Debitbacs_debit - BACS_Debitbancontact - Bancontactcard - Credit Cardscashapp - Cash Appclearpay - Clearpayeps - EPSgooglepay - Google Payideal - iDEALklarna - Klarnalink - Linkpaypal - PayPalsepa_debit - SEPA Debitvenmo - Venmowechat_pay - WeChat Pay |
| PaymentMethodSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the MerchAccPaymentMethodSet.This field is a relationship field.Relationship NamePaymentMethodSetRelationship TypeLookupRefers ToMerchAccPaymentMethodSet |
| PaymentMethodSetTypeNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned ID for the MerchAccPaymentMethodSet. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSort order for the MechAccPaymentMethodType within the MerchAccPaymentMethodSetExperience. |

## Associated Objects

This object has these associated object. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MerchAccPaymentMethodTypeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MerchAccPaymentMethodTypeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
