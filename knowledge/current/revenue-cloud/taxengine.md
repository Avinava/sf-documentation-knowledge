---
title: "TaxEngine"
domain: revenue-cloud
topic: taxengine
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:11.577Z
estimatedTokens: 906
keywords: [TaxEngine, Represents, information, instance, tax, engine, provider, well, merchant, credentials, specific, instance., API, version, 62.0, later., Supported, Calls, Special, Access]
---

# TaxEngine

> Represents information about an instance of a tax engine provider as
         well as the merchant credentials for that specific instance. This object is available
      in API version 62.0 and later.

# TaxEngine

Represents information about an instance of a tax engine provider as well as the merchant credentials for that specific instance. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of an instance of the tax engine provider and merchant credential. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionInformation about the external platform used for the tax engine. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax engine record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax engine record. If this value is null, it’s possible that the user only accessed the tax engine record or a related list view (LastReferencedDate), but not viewed the tax engine record itself. |
| MerchantCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The merchant credential setup object in Salesforce. The Tax Calculation API sends the merchant credential's information to the external tax engine that's used for tax calculation.This field is a relationship field.Relationship NameMerchantCredentialRefers ToNamedCredential |
| SellerCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The seller code of the transaction for which the tax engine integration log was captured. |
| ShouldCaptureTaxesAtHeader | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether taxes are captured at the header level (true) or not (false).The default value is false. Available in API version 66.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the tax engine record.Valid values are:ActiveInactive |
| TaxEngineAddress | TypeaddressPropertiesFilterDescriptionRequired. The compound form of the tax engine address. See Address Compound Fields for details on compound address fields.This field is a read-only field. |
| TaxEngineName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the tax engine record. |
| TaxEngineProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The tax engine provider that's related to the tax engine record.This field is a relationship field.Relationship NameTaxEngineProviderRefers ToTaxEngineProvider |
| TaxPrvdAccountIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the external tax provider's account. Available in API version 63.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the tax engine that's used to calculate tax.Valid values are:CommerceTaxExtensionRevenueCloudTaxExtensionStandardTaxEngineRevenueStandardTaxEngine—Available in API version 66.0 and later.StripeNativeAvailable in API versions 63.0 and later. |
