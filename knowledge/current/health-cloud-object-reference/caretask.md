---
title: "CareTask"
domain: health-cloud-object-reference
topic: caretask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.766Z
estimatedTokens: 1902
keywords: [CareTask, additional, healthcare-related, task, process, status, beneficiary, tasks, API, version, 61.0, later, Calls, Associated, Objects]
---

# CareTask

> Represents additional information about a healthcare-related task such as
         process status, beneficiary, and related tasks. This object is available in API
      version 61.0 and later.

# CareTask

Represents additional information about a healthcare-related task such as process status, beneficiary, and related tasks. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |  |
| --- | --- | --- |
| ActionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA name or code that describes the task.This field is a polymorphic relationship field.Relationship NameActionCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |  |
| ActualEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the task ends. |  |
| ActualStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the task starts. |  |
| BeneficiaryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party who benefits from the task.This field is a polymorphic relationship field.Relationship NameBeneficiaryRelationship TypeLookupRefers ToAccount, HealthcareProvider |  |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated clinical encounter for which the task was created.This field is a relationship field.Relationship NameClinicalEncounterRelationship TypeLookupRefers ToClinicalEncounter |  |
| ContentResource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the endpoints or URLs to relevant educational resources such as PDFs. |  |
| ExpectedEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the task is expected to end. |  |
| ExpectedStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the task is expected to start. |  |
| ExtlTaskDefIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID or URL of the external task definition in the source system. |  |
| GroupIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe shared ID of multiple independent tasks. |  |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |  |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |  |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the task is performed.This field is a polymorphic relationship field.Relationship NameLocationRelationship TypeLookupRefers ToHealthcareFacility, Location |  |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care task record. |  |
| OwnedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party who's responsible for executing the task.This field is a polymorphic relationship field.Relationship NameOwnedByRelationship TypeLookupRefers ToAccount, CareRegisteredDevice, Contact, User |  |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the care task record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |  |
| ParentCareTaskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated care task.This field is a relationship field.Relationship NameParentCareTaskRelationship TypeLookupRefers ToCareTask |  |
| ProcessStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business-specific process status of the task.This field is a polymorphic relationship field.Relationship NameProcessStatusRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |  |
| RequestedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party who created the task.This field is a polymorphic relationship field.Relationship NameRequestedByRelationship TypeLookupRefers ToAccount, CareRegisteredDevice, Contact, HealthcareProvider, User |  |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number in which the task is performed. |  |
| ShouldIgnore | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the action specified in the task should be ignored or performed.The default value is false. |  |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system. |  |
| SourceSystemModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in the external source system. |  |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |  |
| StatusReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the status of the task. |  |
| TaskId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe task associated with the care task.This field is a relationship field.Relationship NameTaskRelationship TypeLookupRefers ToTask |  |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareTaskChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CareTaskFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareTaskHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareTaskShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareTaskChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareTaskFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareTaskHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareTaskShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
