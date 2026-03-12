---
title: "CrbnEmssnScopeAllocVal"
domain: netzero-cloud-dev-guide
topic: crbnemssnscopeallocval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.745Z
estimatedTokens: 994
keywords: [CrbnEmssnScopeAllocVal, scope, allocation, fuel, API, version, 54.0, later, Calls, Associated, Objects]
---

# CrbnEmssnScopeAllocVal

> Represents the scope allocation by fuel type. This object is
      available in API version 54.0 and later.

# CrbnEmssnScopeAllocVal

Represents the scope allocation by fuel type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CrbnEmssnScopeAllocId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent carbon emissions scope allocation record for this allocation value record.This is a relationship field.Relationship NameCrbnEmssnScopeAllocRelationship TypeLookupRefers ToCrbnEmssnScopeAlloc |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe fuel type for this allocation value record. For custom fuels, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the FuelType object}; for example, ftPackage_custom_wood, else this value is custom_{DeveloperName of the FuelType object}; for example, custom_wood.Possible values are:CityGas—City GasCoolingDieselElectricityFuelOil—Fuel OilHeatHeavyOil—Heavy OilKeroseneLightOil—Light OilLiquidNaturalGasLNG—Liquid Natural Gas (LNG)NaturalGas—Natural GasPropaneRefrigerantSteam |
| FuelTypeAllocation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe GHG protocol scope for the selected fuel type.Possible values are:SCOPE1—Scope 1SCOPE2—Scope 2SCOPE3Downstream—Scope 3 DownstreamSCOPE3DownstreamLeasedAssets—Scope 3 Downstream Leased AssetsSCOPE3EmpComut—Scope 3 Employee CommutingSCOPE3Franchises—Scope 3 FranchisesSCOPE3Investments—Scope 3 InvestmentsSCOPE3Upstream—Scope 3 UpstreamSCOPE3UseOfSoldProducts—Scope 3 Use of Sold ProductsSCP3CptlGoods—Scope 3 Capital GoodsSCP3EndLifeTreatSoldProducts—Scope 3 End-of-Life Treatment of Sold ProductsSCP3FuelEnergyRelatedActv—Scope 3 Fuel and Energy-Related ActivitiesSCP3ProcessingSoldPrdct—Scope 3 Processing of Sold ProductsSCP3PurchGoodsServices—Scope 3 Purchased Goods and ServicesSCP3UpstrmLsdAst—Scope 3 Upstream Leased AssetsSCP3WasteGeneratedInOperations—Scope 3 Waste Generated In Operations |
| CrbnEmssnScopeAllocValFuelTypeRefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is available in API version 57.0 and later.This field is a relationship field.Relationship NameCrbnEmssnScopeAllocValFuelTypeRefRelationship TypeLookupRefers ToFuelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CrbnEmssnScopeAllocValFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CrbnEmssnScopeAllocValHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CrbnEmssnScopeAllocValFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- CrbnEmssnScopeAllocValHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
