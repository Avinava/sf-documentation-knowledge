---
title: "ApplicationFormParticipant"
domain: financial-services-cloud-object-reference
topic: applicationformparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.422Z
estimatedTokens: 1036
keywords: [ApplicationFormParticipant, application, form, participant, API, version, 61.0, later, Calls, Associated, Objects]
---

# ApplicationFormParticipant

> Represents information about the application form participant.
      This object is available in API version 61.0 and later.

# ApplicationFormParticipant

Represents information about the application form participant. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe application form associated with the participant.This field is a relationship field.Relationship NameApplicationFormRelationship TypeMaster-detailRefers ToApplicationForm (the master object) |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional information about the participant. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application form participant is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application form participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant that's associated with the application form.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe default access level for a role that a participant can have in the context of a parent record.This field is a relationship field.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormParticipantChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicationFormParticipantFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormParticipantHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApplicationFormParticipantChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicationFormParticipantFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApplicationFormParticipantHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
