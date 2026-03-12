---
title: "CustodyChainEntry"
domain: life-sciences-dev-guide
topic: custodychainentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.709Z
estimatedTokens: 1672
keywords: [CustodyChainEntry, entry, event, chain, custody, API, version, 59.0, later, Calls, Associated, Objects]
---

# CustodyChainEntry

> Represents information about an entry or event in the chain of custody.
      This object is available in API version 59.0 and later.

# CustodyChainEntry

Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe assessment task for which a custody chain entry is created.This field is a relationship field.Relationship NameAssessmentTaskRelationship TypeLookupRefers ToAssessmentTask |
| CustodianId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user, organization, or location that has custody of the item.This field is a polymorphic relationship field.Relationship NameCustodianRelationship TypeLookupRefers ToAccount, Contact, ServiceTerritory, User |
| CustodyItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent custody item that's associated with the custody chain entry record.This field is a relationship field.Relationship NameCustodyItemRelationship TypeMaster-DetailRefers ToCustodyItem |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the custody chain entry record of the item. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of custody chain entry the item. |
| EnrolleeWorkOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe care program enrollee work order for which a custody chain entry is created.This field is a relationship field.Relationship NameEnrolleeWorkOrderRelationship TypeLookupRefers ToCarePgmEnrolleeWorkOrder |
| EnrolleeWorkOrderStepId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe care program enrollee work order step for which a custody chain entry is created.This field is a relationship field.Relationship NameEnrolleeWorkOrderStepRelationship TypeLookupRefers ToCarePgmEnrolleeWkOrdStep |
| ItemCustodySiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place where the item is held in custody.This field is a polymorphic relationship field.Relationship NameItemCustodySiteRelationship TypeLookupRefers ToAddress, Location, ServiceTerritory |
| ItemVerificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of verification for the item.Possible values are:DualSignatureFiveSignaturesFourSignaturesNoSignatureNotApplicableSingleSignatureThreeSignatures |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the custody chain entry record. |
| RecordUpdateInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores information about the update in the custody chain entry for which the record was created. |
| ReferenceObjectApiName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe API name of the reference object storing the stage, step, or task, or the custom object record for which the custody chain entry is created. For internal use only.Possible values are:AssessmentTask—Assessment TaskCarePgmEnrolleeWkOrdStep—Care Program Enrollee Work Order StepCarePgmEnrolleeWorkOrder—Care Program Enrollee Work OrderForecastingItem__hd—Forecasting Item (Historical) |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stage, step, task, or any custom object for which the custody entry is created.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToAssessmentTask, CarePgmEnrolleeWkOrdStep, CarePgmEnrolleeWorkOrder |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of custody chain entry for the item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the custody entry record.Possible values are:CompletedNewRejected |
| StatusCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the custody entry record's status.Possible values are:CompletedNewRejected |
| VerificationProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of process in which a verification is performed.Possible values are:ParallelSequential |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CustodyChainEntryChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CustodyChainEntryFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustodyChainEntryHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CustodyChainEntryChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CustodyChainEntryFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CustodyChainEntryHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
