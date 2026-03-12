---
title: "ProviderVisitRqstSample"
domain: life-sciences-dev-guide
topic: providervisitrqstsample
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.138Z
estimatedTokens: 1318
keywords: [ProviderVisitRqstSample, sample, products, requested, shipped, health, care, provider, visit, API, version, 65.0, later, Calls, Associated]
---

# ProviderVisitRqstSample

> Represents sample products requested to be shipped to the health care
         provider during a visit. This object is available in API version 65.0 and
         later.

# ProviderVisitRqstSample

Represents sample products requested to be shipped to the health care provider during a visit. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the samples are delivered to the provider. |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation captured on signature capture or provider visit submission for auditability. |
| DeliveryStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDelivery status of the sample order. |
| DistributorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the distributor for the samples. |
| ExpectedDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpected delivery date of the samples. |
| IsCalcForDirToPhysician | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the samples have been calculated for territory product quantity allocation.The default value is false. |
| IsSignatureCaptured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the signature was captured.The default value is false. |
| IsTrackedForSmplTrxnLimit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the samples are tracked in sample limit transaction.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastShippedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the number of items in the previous shipment. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the provider visit requested sample. |
| OrderTrackingIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTracking number of the sample shipment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The sample product requested by the provider.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProviderVisitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The associated provider visit record.This field is a relationship field.Relationship NameProviderVisitRelationship TypeMaster-detailRefers ToProviderVisit (the master object) |
| RequestedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequested quantity of samples. |
| ShippedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionShipped quantity of the samples. |
| ShippingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the samples are shipped. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| ViolationType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe type of violation. |
| VisitId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. The associated visit record.This field is a relationship field.Relationship NameVisitRelationship TypeMaster-detailRefers ToVisit (the master object) |
| WarningMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWarning message displayed for the validation of territory product quantity allocation. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderVisitRqstSampleHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProviderVisitRqstSampleHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
