---
title: "Asset"
domain: retail-api
topic: asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.590Z
estimatedTokens: 3238
keywords: [Asset, Standard, custom, extend, Consumer, Goods, Cloud, represent, item, commercial, product, sold, company, competitor, customer]
---

# Asset

> Standard and custom fields extend the standard Asset object in
         Consumer Goods Cloud to represent an item of commercial value, such as a product sold by
         your company or a competitor, that a customer has purchased. This object is available
      in API version 55.0 and later.

# Asset

Standard and custom fields extend the standard Asset object in Consumer Goods Cloud to represent an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. ID of the Account related to the asset. Must be a valid account ID.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the Asset address |
| AssetLevel | TypeintPropertiesFilter, Group, Nillable, SortDescriptionAsset’s position in the asset hierarchy: Assets that have no parent or child assets, or that belong to a hierarchy have a level of 1 for the root asset. Child assets of the root asset have a level of 2, the children of level 2 assets have a level of 3, and so on.NoteThe asset level of assets created before the introduction of this field defaults to –1. After the asset record is updated, the asset level is calculated and automatically updated. |
| AssetProvidedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that provided the asset, typically a manufacturer.This field is a relationship field.Relationship NameAssetProvidedByRelationship TypeLookupRefers ToAccount |
| AssetServicedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount in charge of servicing the asset.This field is a relationship field.Relationship NameAssetServicedByRelationship TypeLookupRefers ToAccount |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity in the address. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the related contact record.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry in the address. |
| CurrentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionReserved for future use.Available when CPQ Plus, Salesforce Billing, or Subscription Management is enabled. |
| CurrentLifecycleEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionEnd of the period shown as current. Auto-populated field inherited from the end date of the current asset state period. If the field is empty, as with an evergreen subscription, the Current Lifecycle End Date field is empty. |
| CurrentMrr | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAsset’s monthly recurring revenue during the current asset state period. Auto-populated field inherited from the monthly recurring revenue on the current asset state period. If no asset state period is current, the value is 0. Label is Current Monthly Recurring Revenue. |
| CurrentQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionAsset’s quantity during the current asset state period. Auto-populated field inherited from the quantity on the current asset state period. If no asset state period is current, the value is 0. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the asset. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionShipping geocode accuracy:Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| HasLifecycleManagement | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this asset is lifecycle-managed (true) or not (false). After setting this value, the value can’t be changed. Auto-populated field.The default value is false. |
| InstallDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the asset was installed. |
| IsCompetitorProduct | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the asset represents a product sold by a competitor (true) or not (false).The default value is false. |
| IsInternal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the asset is produced or used internally (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time that the asset was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time that the asset was last viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLatitude of the asset. |
| LifecycleEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionEnd of the asset’s lifecycle. Auto-populated field inherited from the end date of the final asset state period. If the field is empty, as with an evergreen subscription, the lifecycle has no end date. This field is available when CPQ Plus, Salesforce Billing, or Subscription Management is enabled. |
| LifecycleStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionBeginning of the asset’s lifecycle. Auto-populated field inherited from the start date of the earliest asset state period. This field can’t be edited. When a new asset action affects the start date of an asset state period, a new period is generated. This field is available when CPQ Plus, Salesforce Billing, or Subscription Management is enabled. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the GPS coordinates of the asset.Relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAsset’s location. Typically, this location is the place where the asset is stored, such as a warehouse or van. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAsset’s owner. By default, the asset owner is the user who created the asset record.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAsset’s parent asset.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAsset |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code in the asset address. |
| Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPricing information for an asset. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. ID of Product2 related to this asset. Must be a valid Product2 ID.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionProduct code of the related product. |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which this asset was purchased. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAsset quantity purchased or installed. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RootAssetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead-only. The top-level asset in an asset hierarchy. Depending on where an asset lies in the hierarchy, the asset’s root can be the same as the parent.This field is a relationship field.Relationship NameRootAssetRelationship TypeLookupRefers ToAsset |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSerial number of the asset. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState in the asset address. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates asset’s status:Possible values are:ActiveDamagedInactiveCustomizable picklist. |
| StockKeepingUnit | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStock keeping unit assigned to the related product. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet name in the asset address. |
| TotalLifecycleAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of revenue for the asset, including revenue from each stage in the asset lifecycle. The field is available when CPQ Plus, Salesforce Billing, or Subscription Management is enabled. |
| UsageEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date or expiry date for asset use. |
| cgcloud_Asset_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the asset template.This field is a relationship field.Relationship Namecgcloud_dev__Asset_Template__rRelationship TypeLookupRefers Tocgcloud_dev__Asset_Template__c |
| cgcloud_Asset_Type__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of asset.This field is a relationship field.Relationship Namecgcloud_dev__Asset_Type__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud_Brand__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the brand of the child product. |
| cgcloud_Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud_Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud_Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud_dev__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This field is a calculated field.FormulaCASE($User.cgcloud_dev__Language_Postfix__c, "Language1", cgcloud_dev__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud_dev__Description_Language_2__c,cgcloud_dev__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud_dev__Description_Language_3__c,cgcloud_dev__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud_dev__Description_Language_4__c,cgcloud_dev__Description_Language_1__c), cgcloud_dev__Description_Language_1__c) |
| cgcloud_ERP_Asset_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the asset number assigned by the ERP. |
| cgcloud_Manufacturer_Serial_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSerial number given by the manufacturer. |
| cgcloud_Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionGeneral note about the asset. |
| cgcloud_Ownership_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the ownership type of the asset:Possible values are:LeasedOwned |
| cgcloud_POS__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to Point of Sale(POS).This field is a relationship field.Relationship Namecgcloud_dev__POS__rRelationship TypeLookupRefers Tocgcloud_dev__POS__c |
| cgcloud_Production_Year__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionHolds the production year of the asset. |
| cgcloud_Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org of the template:Possible values are:0000000100020003 |
| cgcloud_Service_Phone_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number from the service support of the asset. |
| cgcloud_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the asset is valid. |
| cgcloud_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the asset is valid. |

## Code Examples

```
CASE($User.cgcloud_dev__Language_Postfix__c,
"Language1", cgcloud_dev__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud_dev__Description_Language_2__c,cgcloud_dev__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud_dev__Description_Language_3__c,cgcloud_dev__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud_dev__Description_Language_4__c,cgcloud_dev__Description_Language_1__c),
cgcloud_dev__Description_Language_1__c)
```
