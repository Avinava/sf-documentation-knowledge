---
title: "SvcInfoRelatedQuestionnaire"
domain: health-cloud-object-reference
topic: svcinforelatedquestionnaire
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.138Z
estimatedTokens: 940
keywords: [SvcInfoRelatedQuestionnaire, questionnaire, associated, service, coverage, API, version, 63.0, later, Calls, Objects]
---

# SvcInfoRelatedQuestionnaire

> Represents the questionnaire associated with a service information request or
         service information response coverage. This object is available in API version 63.0
      and later.

# SvcInfoRelatedQuestionnaire

Represents the questionnaire associated with a service information request or service information response coverage. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the service information related questionnaire. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RefQuestionnaireRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe OmniProcess record associated with the service information related questionnaire.This field is a polymorphic relationship field.Relationship NameRefQuestionnaireRecordRefers ToOmniProcess |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent service information request or service information response coverage record.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToServiceInfoResponseCoverage, ServiceInformationRequest |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SvcInfoRelatedQuestionnaireChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[SvcInfoRelatedQuestionnaireFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SvcInfoRelatedQuestionnaireHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SvcInfoRelatedQuestionnaireShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SvcInfoRelatedQuestionnaireChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- SvcInfoRelatedQuestionnaireFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- SvcInfoRelatedQuestionnaireHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- SvcInfoRelatedQuestionnaireShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
