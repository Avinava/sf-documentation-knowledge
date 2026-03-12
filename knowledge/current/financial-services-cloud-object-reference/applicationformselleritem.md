---
title: "ApplicationFormSellerItem"
domain: financial-services-cloud-object-reference
topic: applicationformselleritem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.476Z
estimatedTokens: 1880
keywords: [ApplicationFormSellerItem, junction, application, form, seller, product, API, version, 61.0, later, Digital, Lending, permission, Calls, Associated]
---

# ApplicationFormSellerItem

> Represents a junction between an application form and a seller
         product. This object is available in API version 61.0 and later. Available with
      Digital Lending permission set.

# ApplicationFormSellerItem

Represents a junction between an application form and a seller product. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product that's being applied for in the application. For example, home loan or auto loan.This field is a relationship field.Relationship NameApplicationFormProductRelationship TypeMaster-detailRefers ToApplicationFormProduct (the master object) |
| BuiltUpArea | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe built-up area of the property. |
| BuiltUpAreaUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the built up area. |
| ConstructionStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe construction stage of the property. |
| EngineNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe engine number of the vehicle. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| Make | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make of the seller item. |
| Mileage | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe mileage of the seller item. |
| Model | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model of the seller item. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe seller item name. |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe iformation about the financial asset owned by an individual or account.This field is a relationship field.Relationship NamePartyFinancialAssetRelationship TypeLookupRefers ToPartyFinancialAsset |
| Price | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the product. |
| PropertyAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address of the property. |
| PropertyAge | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe age of the property. |
| PropertyCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the property. |
| PropertyCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the property. |
| PropertyGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe geocode of the property.Valid values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| PropertyLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the property. |
| PropertyLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the property. |
| PropertyPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the property. |
| PropertyState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the property. |
| PropertyStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the property |
| PropertyUnitIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit identifier of the property. |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that the applicant has shown interest in buying. For example, a home or vehicle.This field is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToAsset, Product2, VendorProject |
| ScheduledDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe delivery date of the product to the applicant. |
| SellerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe seller ID of the seller item.This field is a relationship field.Relationship NameSellerRelationship TypeLookupRefers ToAccount |
| Trim | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trim type of the seller item. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of product.Valid values are:BusVehicle |
| VehicleIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the vehicle. |
| VehicleRegistrationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe registration number of the vehicle. |
| Year | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacture date of the seller item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormSellerItemChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicationFormSellerItemFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormSellerItemHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApplicationFormSellerItemChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicationFormSellerItemFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApplicationFormSellerItemHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
