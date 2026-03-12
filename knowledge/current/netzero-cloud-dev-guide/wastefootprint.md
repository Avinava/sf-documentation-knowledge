---
title: "WasteFootprint"
domain: netzero-cloud-dev-guide
topic: wastefootprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.392Z
estimatedTokens: 1943
keywords: [WasteFootprint, volume, aggregated, waste, carbon, emissions, generated, either, part, operations, end-, of-, life, product, API]
---

# WasteFootprint

> Represents the volume of aggregated waste and carbon emissions from waste
         generated either as part of operations or during the end- of- life of a product. This
      object is available in API version 54.0 and later.

# WasteFootprint

Represents the volume of aggregated waste and carbon emissions from waste generated either as part of operations or during the end- of- life of a product. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualEmssnInventoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emissions inventory associated with the aggregate waste footprint emissions.This field is a relationship field.Relationship NameAnnualEmssnInventoryRelationship TypeLookupRefers ToAnnualEmssnInventory |
| AuditApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of audit approval for this waste footprint record.Possible values are:ApprovedPending Approval |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescription |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the waste-usage data is sent for reporting. |
| FootprintStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:CompletedData CollectionData ValidationExternal AuditInternal AuditWaste Source Confirmation |
| GeneratedWasteDetailRecordCnt | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of generated waste records associated with this waste footprint record. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the waste footprint record and the associated energy use records are locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReportingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when this waste footprint record data is due to be sent to a reporting body. |
| ReportingYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| Scope1EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions value that’s calculated based on scope 1 emissions from the associated generated waste records. |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 emissions source record associated with the waste related to non-stationary assets, such as waste related to the end-of-life treatment of sold products.This is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| Scp3DnstrmEndLifeSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 downstream emissions from the end-of-life treatment of sold products. This value is calculated based on the scope 3 downstream emissions from the end-of-life treatment of sold products of the associated generated waste records. |
| Scp3UpstrmWstGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 upstream emissions from the waste generated in operations. This value is calculated based on the scope 3 upstream emissions from waste generated in operations of the associated generated waste records. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the waste-usage data is sent for reporting. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset environmental source record associated with the waste related to stationary assets, such as the waste generated in operations.This is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| SuplScope1EmissionsInTco2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 1 emissions value that’s added to the total scope 1 emissions. |
| SuplScp3DnstrmEndLifeSoldPrdct | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental downstream scope 3 emissions from the end-of-life treatment of sold products. This value is added to the total scope 3 downstream emissions from the end-of-life treatment of sold products. |
| SuplScp3UpstrmWstGenInOper | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental upstream scope 3 emissions from the waste generated in operations. This value is added to the total scope 3 upstream emissions from waste generated in operations. |
| TotalWasteQuantityinTonnes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total quantity of waste in tonnes that’s calculated based on the associated generated waste records. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WasteFootprintChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[WasteFootprintFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WasteFootprintHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WasteFootprintShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WasteFootprintChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- WasteFootprintFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- WasteFootprintHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- WasteFootprintShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
