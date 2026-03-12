---
title: "MerchAccPaymentMethodSet"
domain: object-reference
topic: merchaccpaymentmethodset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.755Z
estimatedTokens: 453
keywords: [MerchAccPaymentMethodSet, ordered, payment, merchant's, cudstomer, checkout, configure, multiple, designated, specific, locale, region, sale, channel, API]
---

# MerchAccPaymentMethodSet

> Defines an ordered list of payment methods that are available to a merchant's
         cudstomer  during checkout. You can configure multiple payment method sets, each designated
         for a specific locale, payment region, or sale channel. This object is available in
      API version 58.0 and later.

# MerchAccPaymentMethodSet

Defines an ordered list of payment methods that are available to a merchant's cudstomer during checkout. You can configure multiple payment method sets, each designated for a specific locale, payment region, or sale channel. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license with the Payments permission enabled for your org. Salesforce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. The ISO code for any currency allowed by the organization. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique name for the object given by the Payments admin. |
| MerchantAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionForeign key to the MerchantAccount.This field is a relationship field.Relationship NameMerchantAccountRelationship TypeLookupRefers ToMerchantAccount |
| PaymentMethodSetNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned ID for the MerchAccPaymentMethodSet. |
| PaymentMethodSummary | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSummary field that is automatically populated with comma-separated values from MerchAccPaymentMethodType.This field is a calculated field. |
