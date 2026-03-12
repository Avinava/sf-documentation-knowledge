---
title: "ProductDisbursement"
domain: life-sciences-dev-guide
topic: productdisbursement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.769Z
estimatedTokens: 1832
keywords: [ProductDisbursement, product, disbursed, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProductDisbursement

> Represents details about the product being disbursed. This object is
      available in API version 65.0 and later.

# ProductDisbursement

Represents details about the product being disbursed. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores additional information about the product disbursement. |
| Comments | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments for the product disbursement. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the products disbursed. |
| DisbursementDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the product disbursement. |
| DisbursementToAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe destination account associated with the product disbursed.This field is a relationship field.Relationship NameDisbursementToAccountRefers ToAccount |
| InventoryCountReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the reference record of the inventory count after the disbursement.This field is a polymorphic relationship field.Relationship NameInventoryCountReferenceRefers ToInventoryCntProdtBatchItem |
| InventoryOperationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory operation associated with the product disbursement.This field is a relationship field.Relationship NameInventoryOperationRefers ToInventoryOperation |
| IsDisbursed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is disbursed (true) or not (false).The default value is false. |
| IsProductSerialized | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product disbursed is serialized (true) or not (false).The default value is false. |
| IsResolutionRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the disbursement was made with insufficient inventory and requires reconciliation after enough stock is available.The default value is false. |
| IsSignatureCaptured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the signature was captured during disbursement.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product to be disbursed. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity associated with the product disbursement.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the product to be disbursed.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product item at a particular location to be disbursed.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product to be disbursed. |
| ProductionBatchId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the production batch of the products disbursed.This field is a relationship field.Relationship NameProductionBatchRefers ToProductionBatch |
| ProductionBatchNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identification number of the batch that the disbursed product belongs to. |
| QuantityDisbursed | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of products that are disbursed. |
| QuantityRequested | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of products requested to be disbursed. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit used to measure the quantity of products disbursed. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the product disbursement. |
| ViolationMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe violation message for product disbursement. |
| ViolationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of violation that happens during the product disbursement. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the visit associated with the product disbursement.This field is a relationship field.Relationship NameVisitRefers ToVisit |
| WarningMessage | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe warning message for product disbursement. |
| WarningType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of warning displayed during the product disbursement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductDisbursementFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductDisbursementHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductDisbursementShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductDisbursementFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductDisbursementHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProductDisbursementShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
