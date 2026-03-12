---
title: "EnergyAttrCertPurchase"
domain: netzero-cloud-dev-guide
topic: energyattrcertpurchase
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.151Z
estimatedTokens: 1603
keywords: [EnergyAttrCertPurchase, purchase, energy, attribute, certificates, clean, project, supplier, includes, terms, engagement, delivery, certificate, API, version]
---

# EnergyAttrCertPurchase

> Represents information about the purchase of energy attribute
         certificates from the clean energy project supplier. The information includes terms of
         engagement and the delivery type of energy attribute certificate. This object is
      available in API version 59.0 and later.

# EnergyAttrCertPurchase

Represents information about the purchase of energy attribute certificates from the clean energy project supplier. The information includes terms of engagement and the delivery type of energy attribute certificate. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CertifiedBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the organization that certified the clean energy project at the time of purchase. |
| CleanEnergyProjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe clean energy project associated with the energy attribute certificate purchase.This field is a relationship field.Relationship NameCleanEnergyProjectRelationship TypeLookupRefers ToCleanEnergyProject |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the energy attribute certificate purchase. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the engagement with the power supplier. |
| ExpectedAnnualPowerGnrn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected annual power generation measured in megawatts (MW). |
| InvoiceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice number associated with the energy attribute certificate purchase. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the energy attribute certificate purchase record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PlannedAnnualPowerGnrn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned annual power generation measured in megawatt hour (MWh). |
| ProjRegistryIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier that's assigned by the registry to the clean energy project. |
| PurchaseOrderNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purchase order number associated with the energy attribute certificate purchase. |
| PurchaseType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of purchase or agreement with the supplier of energy attribute certificate credits.Possible values are:OtherPower Purchase AgreementRenewable TariffSelf GenerationUnbundledVirtual Power Purchase Agreement |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the engagement with the power supplier. |
| TotEnrgyAttrCrAllocMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy attribute credits allocated for the energy attribute certificate purchase measured in megawatt hour (MWh). |
| TotEnrgyAttrCrAvlMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy attribute credits available for the energy attribute certificate purchase measured in megawatt hour (MWh). |
| TotEnrgyAttrCrPurchMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy attribute credits purchased for the energy attribute certificate purchase measured in megawatt hour (MWh). |
| TotalSpend | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total spend for the energy attribute certificate purchase. |
| TradeLocation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe hub and delivery location where the electricity products are traded. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EnergyAttrCertPurchaseChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[EnergyAttrCertPurchaseFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EnergyAttrCertPurchaseHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EnergyAttrCertPurchaseShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EnergyAttrCertPurchaseChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- EnergyAttrCertPurchaseFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- EnergyAttrCertPurchaseHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- EnergyAttrCertPurchaseShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
