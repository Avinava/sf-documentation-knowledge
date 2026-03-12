---
title: "TaxEngine"
domain: object-reference
topic: taxengine
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.760Z
estimatedTokens: 1673
keywords: [TaxEngine, tax, engine, instance, provider, well, merchant, credentials, specific, Subscription, Management, calculates, order, item, Calculation]
---

# TaxEngine

> A tax engine represents both an instance of a tax engine provider as well as
         the merchant credentials for that specific instance. When Subscription Management
         calculates tax on an order item, it sends a request through Subscription Management Tax
         Calculation API to an external tax engine. The Salesforce tax engine record contains
         information passed to the external tax engine, such as This object is available in API
      version 55.0 and later.

# TaxEngine

A tax engine represents both an instance of a tax engine provider as well as the merchant credentials for that specific instance. When Subscription Management calculates tax on an order item, it sends a request through Subscription Management Tax Calculation API to an external tax engine. The Salesforce tax engine record contains information passed to the external tax engine, such as This object is available in API version 55.0 and later.

The merchant credentials are stored in a named credential record in Salesforce. The named credential record is referenced in the tax engine object’s Merchant Credentials field.

The tax adapter Apex class ID is stored in the tax engine provider. When a user calls Calculate Tax API, Subscription Management interacts with the external tax provider using the adapter class and the named credentials.

The tax engine address and seller code from the TaxEngine record are also used in the interaction.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available when Subscription Management or Commerce Subscriptions is enabled. If your org has Subscription Management and Commerce Subscriptions enabled, then Subscription Management takes precedence.

## Special Access Rules

This object is available with Subscription Management, Commerce Subscriptions, and Billing (Revenue Cloud). If your org has Subscription Management and Commerce Subscriptions enabled, then Subscription Management takes precedence.

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_taxengine.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the tax engine provider and merchant credential. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionShows information about the external platform used for the tax engine. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| MerchantCredentialId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLooks up to the merchant credential setup entity in Salesforce. CommerceTax Tax Calculation API sends this information to the external tax engine for use in the tax calculation process.This field is a relationship field.Relationship NameMerchantCredentialRelationship TypeLookupRefers ToNamedCredential |
| SellerCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSeller code of the transaction for which the tax engine integration log was captured. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionShows the status of the tax engine.Possible values are:Active—This tax engine is available for use.Inactive—This tax engine isn't available for use. |
| TaxEngineAddress | TypeaddressPropertiesFilterDescriptionThe compound form of the tax engine address. Read-only. See Address Compound Fields for details on compound address fields. |
| TaxEngineCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the tax engine address. Maximum size is 40 characters. |
| TaxEngineCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the tax engine address. Maximum size is 80 characters. |
| TaxEngineGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the tax engine address. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| TaxEngineLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with TaxEngineLongitude to specify the precise geolocation of a tax engine address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| TaxEngineLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with TaxEngineLatitude to specify the precise geolocation of a tax engine address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| TaxEngineName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the tax engine. |
| TaxEnginePostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the tax engine address. Postal code maximum size is 20 characters. |
| TaxEngineProviderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Id of the tax engine provider.This field is a relationship field.Relationship NameTaxEngineProviderRelationship TypeLookupRefers ToTaxEngineProvider |
| TaxEngineState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the tax engine address. State maximum size is 80 characters. |
| TaxEngineStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the tax engine address. Maximum of 255 characters. |
| TaxPrvdAccountIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the external tax provider’s account. This field is only available if Commerce Subscriptions is enabled for your org. Available in API version 63.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the tax engine used to calculate tax. This field is only available if Commerce Subscriptions is enabled for your org. Available in API version 63.0 and later.Possible values are:CommerceTaxExtension—Commerce Tax ExtensionRevenueCloudTaxExtension—Revenue Cloud Tax ExtensionStandardTaxEngine—Standard Tax ExtensionStripeNative—Stripe Native |
