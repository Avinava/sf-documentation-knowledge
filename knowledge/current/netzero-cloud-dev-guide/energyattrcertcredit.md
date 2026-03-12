---
title: "EnergyAttrCertCredit"
domain: netzero-cloud-dev-guide
topic: energyattrcertcredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.141Z
estimatedTokens: 1614
keywords: [EnergyAttrCertCredit, energy, attribute, certificate, credits, purchase, API, version, 59.0, later, Calls, Associated, Objects]
---

# EnergyAttrCertCredit

> Represents information about the energy attribute certificate credits
         related to energy attribute certificate purchase. This object is available in API
      version 59.0 and later.

# EnergyAttrCertCredit

Represents information about the energy attribute certificate credits related to energy attribute certificate purchase. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CleanEnergyProjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe clean energy project related to the energy attribute certificate purchase that's associated with the purchase of energy attribute certificate credits.This field is a relationship field.Relationship NameCleanEnergyProjectRelationship TypeLookupRefers ToCleanEnergyProject |
| CleanEnergyType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe clean energy type from clean energy project related to the energy attribute certificate purchase that's associated with the purchase of energy attribute certificate credits.Possible values are:BiomassGeothermalSolarWind |
| CostPerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost of the credits for each unit of emissions. |
| CreditsAllocatedInMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe credits that are allocated to the emissions inventory of the organization measured in megawatt hour (MWh). |
| CreditsAvailableInMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe credits that are available after allocation measured in megawatt hour (MWh). |
| CreditsIssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the credits were issued. |
| CreditsPurchasedInMwh | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe credits that are purchased by the organization measured in megawatt hour (MWh). |
| CreditsRetiredDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the credits are retired from the registry. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the energy attribute certificate credit record. |
| EnergyAttrCertPurchaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe energy attribute certificate purchase record that's associated with the purchase of energy attribute certificate credits.This field is a relationship field.Relationship NameEnergyAttrCertPurchaseRelationship TypeLookupRefers ToEnergyAttrCertPurchase |
| IsRetired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the energy attribute certificate credit is retired (true) or not (false) so it can be allocated to the stationary asset energy use records.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the energy attribute certificate credit record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the energy attribute certificate credits were purchased. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the organization responsible for supplying the energy attribute certificate credits.This field is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount spent on the credits. |
| VintagePeriod | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe period when the energy attribute certificate credits were issued. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EnergyAttrCertCreditChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[EnergyAttrCertCreditFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EnergyAttrCertCreditHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EnergyAttrCertCreditShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EnergyAttrCertCreditChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EnergyAttrCertCreditFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EnergyAttrCertCreditHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EnergyAttrCertCreditShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
