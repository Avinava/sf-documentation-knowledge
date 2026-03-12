---
title: "FinServ_FinancialHolding__c"
domain: financial-services-cloud-object-reference
topic: finservfinancialholdingc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.291Z
estimatedTokens: 931
keywords: [FinServ_FinancialHolding__c, financial, holding, investment, account, shares, stock, FinServ, _FinancialHolding, Calls]
---

# FinServ_FinancialHolding__c

> Represents a financial holding in an investment account, such as shares
   of stock.

# FinServ\_FinancialHolding\_\_c

Represents a financial holding in an investment account, such as shares of stock.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetCategory__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubcategory of asset type. Valid values:U.S. EquitySector EquityAllocationInternational EquityAlternativeCommoditiesTaxable BondMunicipal Bond |
| AssetCategoryName__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMarket capitalization and investing style. Valid values:Large GrowthLarge ValueLarge BlendSmall GrowthSmall ValueSmall BlendMid-Cap GrowthMid-Cap ValueMid-Cap Blend |
| AssetClass__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMajor category of asset type. Valid values:EquitiesFixed IncomeCash EquivalentsAlternative Investments |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionFinancial account that this holding is related to. |
| GainLoss__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionChange in value since purchase. |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHousehold that this holding rolls up to. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionTimestamp for when this financial holding last had a task or event action associated with the record. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort,DescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastUpdated__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimestamp for when data for this holding was last updated by an external data source. |
| LastViewedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimestamp for when the current user last viewed this record. |
| MarketValue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent market value. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of this holding. |
| PercentChange__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPercent change in value since purchase. |
| Price__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent price per share. |
| PrimaryOwner__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary owner of this holding. |
| PurchasePrice__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionPrice per-share at time of purchase. |
| Securities__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the securities held. Label is Symbol. |
| Shares__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionNumber of shares held. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the holding in an external data source. |
| Symbol__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTicker symbol for the securities held. The value is copied from Securities__c and can’t be changed. |
