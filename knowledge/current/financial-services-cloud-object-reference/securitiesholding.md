---
title: "SecuritiesHolding"
domain: financial-services-cloud-object-reference
topic: securitiesholding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.638Z
estimatedTokens: 1689
keywords: [SecuritiesHolding, securities, associated, insurance, policy, API, version, 47.0, later, Calls, Objects]
---

# SecuritiesHolding

> Represents the securities associated with an insurance policy. This
		object is available in API version 47.0 and later.

# SecuritiesHolding

Represents the securities associated with an insurance policy. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subcategory of asset type.Possible values are:AllocationAlternativeCommoditiesInternational EquityMunicipal BondSector EquityTaxable BondU.S. Equity |
| AssetCategoryName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe market capitalization and investing style.Possible values are:Large BlendLarge GrowthLarge ValueMid-Cap BlendMid-Cap GrowthMid-Cap ValueSmall BlendSmall GrowthSmall Value |
| AssetClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe major category of asset type.Possible values are:Alternative InvestmentsCash EquivalentsEquitiesFixed Income |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial account associated with the securities holding.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| FinancialSecurityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial security associated with the securities holding.This field is a relationship field.Relationship NameFinancialSecurityRelationship TypeLookupRefers ToFinancialSecurity |
| GainLoss | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionChange in the value of this holding since its purchase. |
| HouseholdId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe household this holding rolls up to.This field is a relationship field.Relationship NameHouseholdRelationship TypeLookupRefers ToAccount |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy this holding is related to.This field is a relationship field.Relationship NameInsurancePolicyRelationship TypeLookupRefers ToInsurancePolicy |
| InvestmentEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the investment. |
| InvestmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date of the investment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastUpdated | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp for when data for this holding was last updated by an external data source. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current market value of this holding. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the holding. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| PercentChange | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percent change in the value of this holding since its purchase. |
| Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent price per share. |
| PrimaryOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary owner of this holding. |
| PurchasePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPrice per share at the time of purchase. |
| Sector | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGroup of related or common stocks. |
| Shares | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of shares held. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. This field is unique within your organization. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SecuritiesHoldingChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[SecuritiesHoldingFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SecuritiesHoldingHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SecuritiesHoldingShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SecuritiesHoldingChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- SecuritiesHoldingFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- SecuritiesHoldingHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- SecuritiesHoldingShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
