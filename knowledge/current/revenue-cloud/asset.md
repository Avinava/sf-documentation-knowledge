---
title: "Asset"
domain: revenue-cloud
topic: asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.725Z
estimatedTokens: 5146
keywords: [Asset, item, commercial, product, sold, company, competitor, customer, purchased, Calls, Usage, Associated, Objects]
---

# Asset

> Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.

# Asset

Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription(Required) ID of the Account associated with this asset. Must be a valid account ID. Required if ContactId isn’t specified.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Address | TypeaddressPropertiesFilter, NillableDescriptionRepresents the physical address or geolocation of the asset. |
| AssetLevel | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe asset’s position in an asset hierarchy. If the asset has no parent or child assets, its level is 1. Assets that belong to a hierarchy have a level of 1 for the root asset, 2 for the child assets of the root asset, 3 for their children, and so forth. On assets created before the introduction of this field, the asset level defaults to –1. After the asset record is updated, the asset level is calculated and automatically updated. |
| AssetProvidedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that provided the asset, typically a manufacturer.This field is a relationship field.Relationship NameAssetProvidedByRelationship TypeLookupRefers ToAccount |
| AssetServicedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account in charge of servicing the asset.This field is a relationship field.Relationship NameAssetServicedByRelationship TypeLookupRefers ToAccount |
| AssetTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset type associated with the asset.This field is a relationship field.This field is available in API version 62.0 and later for users with the Health Cloud Appointment Management permission set.Relationship NameAssetTypeRelationship TypeLookupRefers ToAssetType |
| Availability | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of expected uptime where the asset was available for use. |
| AveragetimetoRepair | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the number of hours it typically takes to repair an asset after a failure. |
| AveragetimeBetweenFailure | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the number of hours that typically elapses before the asset is likely to fail again. |
| AverageUptimePerDay | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average number of hours per day the asset is expected to be available for use. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city detail for the address. |
| ConsequenceOfFailure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business impact associated with the asset’s failure. Using this field, you can address the asset’s health and take action using Flows. To enable this field, use Object Manager to update the field availability. Make sure that the field is visible for field-level security and for page layout. To learn more, see What Determines Field Access. The picklist values aren’t predefined in orgs created before Winter ’22 that aren’t Field Service enabled. This field is available in API version 53.0 and later.Possible values are:InsignificantMinorModerateMajorCritical |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired if AccountId isn’t specified. ID of the Contact associated with this asset. Must be a valid contact ID that has an account parent (but doesn’t need to match the asset’s AccountId).This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Country | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country detail for the address. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the invoice. The default value is USD.This field is available in API version 55.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| CurrentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionReserved for future use.This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| CurrentLifecycleEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the end of the period shown as current. System-populated field inherited from the end date of the current asset state period. If that field is empty, as with an evergreen subscription, the Current Lifecycle End Date field is also empty.This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| CurrentMrr | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe asset’s monthly recurring revenue during the current asset state period. System-populated field inherited from the monthly recurring revenue on the current asset state period. If no asset state period is current, the value is 0. Label is Current Monthly Recurring Revenue.This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| CurrentQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe asset’s quantity during the current asset state period. System-populated field inherited from the quantity on the current asset state period. If no asset state period is current, the value is 0.This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the asset. |
| DigitalAssetStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of digital tracking of the asset. The default picklist includes the following values:OnOffWarningError |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the matching record in an external system. This field is available in API version 49.0 and later. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address. |
| HasLifecycleManagement | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue if this asset is a lifecycle-managed asset, otherwise false. You can’t switch an asset to a lifecycle-managed asset or the reverse. This field is system populated.The default value is false.This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| InstallDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the asset was installed. |
| IsCompetitorProduct | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this Asset represents a product sold by a competitor (true) or not (false). The default value is false. Its UI label is Competitor Asset. |
| IsInternal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the asset is produced or used internally (true) or not (false). The default value is false. Its UI label is Internal Asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the asset was last modified. Its UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the asset was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. |
| LifecycleEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the end of the asset’s lifecycle. System-populated field inherited from the end date of the final asset state period. If that field is empty, as with an evergreen subscription, the lifecycle has no end date. This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| LifecycleStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the beginning of the asset’s lifecycle. System-populated field inherited from the start date of the earliest asset state period. This field can’t be edited. When a new asset action affects the start date of an asset state period, the period is deleted and a new one is generated. This field is available in API version 50.0 and later. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset’s location. Typically, this location is the place where the asset is stored, such as a warehouse or van.If you have access to the location entity, it doesn’t necessarily mean you can access the location id field. To access the location, you must have userHasLocation user access. |
| Longitude | TypedoublePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. |
| ManufactureDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the asset was manufactured. This field is available from API version 49.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescription(Required) Name of the asset. Label is Asset Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe asset’s owner. By default, the asset owner is the user who created the asset record. Its UI label is Asset Owner.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset’s parent asset. Its UI label is Parent Asset.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAsset |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code for the address. |
| Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPrice paid for this asset. |
| PricingSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPricing source to use when amending or renewing an asset.Valid values are:LastTransaction—Last TransactionPriceBookListPrice—Price Book or List PriceAvailable in API version 60.0 and later. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription(Optional) ID of the Product2 associated with this asset. Must be a valid Product2 ID. Its UI label is Product.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe product code of the related product. |
| ProductDescription | TypestringPropertiesFilter, Sort, NillableDescriptionThe product description of the related product. |
| ProductFamily | TypepicklistPropertiesFilter, Group, Sort, NillableDescriptionThe product family of the related product. |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which this asset was purchased. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity purchased or installed. The Quantity field value isn’t set by Customer Asset Lifecycle Management. Instead, you can populate the field as you need. |
| QuantityIncreasePricingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify which pricing type to use when the quantity of this asset is increased. Its UI label is Pricing Type for Quantity Increase. This field is available in API version 56.0 and later. This field is available when Revenue Cloud is enabled.Possible values are:LastNegotiatedPrice—Available in API version 58.0 and later.ListPrice |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier for the asset.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| Reliability | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of expected uptime where the asset wasn’t subject to unplanned downtime. |
| RenewalPricingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe price used when renewing a subscription. Its UI label is Pricing Type for Renewal. This field is available in API version 55.0 and later. This field is available when Revenue Cloud is enabled.Possible values are:LastNegotiatedPriceListPrice |
| RenewalTerm | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWith Renewal Term Unit, defines the default subscription term for renewal quotes. This field is available in API version 55.0 and later. This field is available when Revenue Cloud is enabled. |
| RenewalTermUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time for a subscription term. This field is available in API version 55.0 and later. This field is available when Revenue Cloud is enabled.Possible values are:Annual—Available in API version 58.0 and later. —UI label is Years.Months |
| RootAssetId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read only) The top-level asset in an asset hierarchy. Depending on where an asset lies in the hierarchy, its root could be the same as its parent. Its UI label is Root Asset.This field is a relationship field.Relationship NameRootAssetRelationship TypeLookupRefers ToAsset |
| SalesStoreId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the RetailStore or WebStore associated with this Asset.This field is a polymorphic relationship field.To access this field, your org must have a Salesforce Order Management license or a B2B Commerce License.This field is available in API v60.0 and later.Relationship NameSalesStoreRelationship TypeLookupRefers ToRetailStore, WebStore |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSerial number for this asset. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state detail for the address. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustomizable picklist of values. The default picklist includes the following values:PurchasedShippedInstalledRegisteredObsolete |
| StatusReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe explanation of the device status. This field is available from API version 49.0 and later.Possible values are:Not ReadyOffOfflineOnlinePausedStandby |
| StockKeepingUnit | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SKU assigned to the related product. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street detail for the address. |
| SumDowntime | TypedoublePropertiesFilter, Nillable, SortDescriptionAccumulated downtime (planned and unplanned), determined as follows:When only UptimeRecordStart is set, the sum of all downtime from UptimeRecordStartWhen UptimeRecordStart and UptimeRecordEnd are set, the sum of all downtime from UptimeRecordStart to UptimeRecordEndOtherwise, downtime isn’t accumulated. |
| SumUnplannedDowntime | TypedoublePropertiesFilter, Nillable, SortDescriptionAccumulated unplanned downtime, determined as follows:When only UptimeRecordStart is set, the sum of all unplanned downtime from UptimeRecordStartWhen UptimeRecordStart and UptimeRecordEnd are set, the sum of all unplanned downtime from UptimeRecordStart to UptimeRecordEndOtherwise, unplanned downtime isn’t accumulated. |
| TotalLifecycleAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of revenue for the asset, including revenue from each stage in the asset lifecycle. This field is available when CPQ Plus, Salesforce Billing, or Revenue Cloud is enabled. |
| UptimeRecordEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date until which SumDowntime and SumUnplannedDowntime are accumulated. |
| UptimeRecordStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which SumDowntime and SumUnplannedDowntime are accumulated. |
| UsageEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when usage for this asset ends or expires. |
| Uuid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID for the asset. This field is available in API version 49.0 and later. |

## Usage

Use this object to track products sold to customers. With asset tracking, a client application can quickly determine which products were previously sold or are currently installed at a specific account. You can also create hierarchies of up to 10,000 assets.

For example, suppose that your company wants to renew and upsell opportunities on products sold in the past. Similarly, your company can track competitive products in a customer environment where products can be replaced or swapped out.

Asset tracking is also useful for product support, providing detailed information to assist with product-specific support issues. For example, the PurchaseDate or SerialNumber can indicate whether a given product has certain maintenance requirements, including product recalls. Similarly, the UsageEndDate can indicate when the asset was removed from service or when a license or warranty expires.

If an application creates an Asset record, it must specify a Name and either an AccountId, ContactId, or both.

With REST API, use the getRelatedListInfo function to get information about related lists on the asset. Note that when requesting information about PrimaryAssets, the response is labeled Related Assets, and the response for RelatedAssets is labeled Primary Assets.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, those objects are available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 44.0)

Change events are available for the object.

[AssetFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssetHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssetOwnerSharingRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetownersharingrule.htm "Represents the rules for sharing an Asset with users other than the owner. This object is available in API version 33.0 and later.")

Sharing rules are available for the object.

[AssetShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetshare.htm "Represents a sharing entry on an Asset. This object is available in API version 33.0 and later.")

Sharing is available for the object.

## Related Topics

- AssetOwnerSharingRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetownersharingrule.htm)
- AssetShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetshare.htm)
