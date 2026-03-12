---
title: "Scope3PcmtItem"
domain: netzero-cloud-dev-guide
topic: scope3pcmtitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.881Z
estimatedTokens: 2354
keywords: [Scope3PcmtItem, procurement, corporate, spending, entry, records, considered, amount, organization, spends, goods, services, API, version, 54.0]
---

# Scope3PcmtItem

> Represents the procurement (corporate spending) entry records. Procurement is
         considered as the amount that the organization spends on goods and services. This
      object is available in API version 54.0 and later.

# Scope3PcmtItem

Represents the procurement (corporate spending) entry records. Procurement is considered as the amount that the organization spends on goods and services. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalculatedScope3EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions for this procurement item record. This value is calculated based on the amount spent, the total scope 3 emissions per million spent, and the parent procurement summary record’s inflation rate. |
| FinalScorecardEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe final scorecard emissions value when the calculation type is Sustainability Scorecard. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the scope 3 procurement item record is locked for editing because the associated carbon footprint is locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| PcmtEmssnFctrSetItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe procurement emissions factor set item that contains the emissions factor to be applied to this procurement item.This is a relationship field.Relationship NamePcmtEmssnFctrSetItemRelationship TypeLookupRefers ToPcmtEmssnFctrSetItem |
| ProcurementEmssnFactorSetEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated emissions when the calculation type is Procurement Emission Factor Set. |
| ProcurementSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent scope 3 procurement summary record for this scope 3 procurement item record.This is a relationship field.Relationship NameProcurementSummaryRelationship TypeLookupRefers ToScope3PcmtSummary |
| ProductEmissionsFactorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product emissions factor that's used to calculate the quantity-based emissions for this procurement item.This field is a relationship field.Relationship NameProductEmissionsFactorRelationship TypeLookupRefers ToProductEmissionsFactor |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that's being purchased in this procurement item.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| PurchaseQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the items that are purchased in this procurement item. |
| ReportDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date to include in reports and dashboards. The report date is set to the spent date, carbon footprint report end date, the first day of the calendar or fiscal year of the carbon footprint reporting year, or the current date. |
| Scope3EmissionsCalculationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe calculation type for the scope 3 emissions.Possible values are:ALLOCATED_SCORECARD_EMISSIONS—Allocated Scorecard EmissionsCALCULATED_SCOPE_3_EMISSIONS—Spend-Based EmissionsQUANTITY_BASED_EMISSIONS—Quantity-Based EmissionsThe default value is CALCULATED_SCOPE_3_EMISSIONS. |
| Scope3EmissionsInTco2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe calculated scope 3 emissions if you don’t enter the emissions value provided by the vendor. |
| Scope3GhgCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe scope 3 GHG category.Possible values are:Business TravelCapital GoodsDownstream Leased AssetsDownstream Transportation and DistributionEmployee CommutingEnd-of-Life Treatment of Sold ProductsFranchisesFuel and Energy-Related ActivitiesInvestmentsProcessing of Sold ProductsPurchased Goods and ServicesUncategorizedUpstream Leased AssetsUpstream Transportation and DistributionUse of Sold ProductsWaste Generated In Operations |
| Scp3QtyBsdEmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe calculated quantity-based scope 3 emissions for this procurement item record. The value is calculated based on the quantity of items purchased and the product emissions factor. |
| Scp3UncatgEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions value if you don’t select the scope 3 GHG category.This is a calculated field. |
| SpendingCategory1 | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe first-level spending category for the procurement item. |
| SpendingCategory2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe second-level spending category for the procurement item, that’s a subset of the first-level spending category. |
| SpendingCategory3 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe third-level spending category for the procurement item, that’s a subset of the second-level spending category. |
| SpentAmount | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe amount spent for this procurement item in the currency selected for the parent procurement summary record. |
| SpentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the amount was spent for this procurement item. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier associated with this procurement item.This is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| SustainabilityScorecardId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent supplier sustainability scorecard record that's associated with the procurement item.This is a relationship field.Relationship NameSustainabilityScorecardRelationship TypeLookupRefers ToSustainabilityScorecard |
| TotScpe3EmssnPerMillionSpent | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal scope 3 emissions per million spent that’s adjusted according to the inflation rate in the associated scope 3 procurement summary record. |
| UnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the items that are purchased in this procurement item. For custom unit of measure, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the SustainabilityUom object}; for example, ftPackage_custom_bundle, else this value is custom_{DeveloperName of the SustainabilityUom object}; for example, custom_bundle.Possible values are:EachGallonsLitersLongTon—Long TonMetricTonne—Metric TonneShortTon—Short Tongkglb |
| VendorPrvdScope3EmssnInTco2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe scope 3 emissions provided by the vendor to override the calculated total scope 3 emissions. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[Scope3PcmtItemChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[Scope3PcmtItemFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[Scope3PcmtItemHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- Scope3PcmtItemChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- Scope3PcmtItemFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- Scope3PcmtItemHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
