---
title: "LifeSciMobileMetadataRecord"
domain: life-sciences-dev-guide
topic: lifescimobilemetadatarecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:00.781Z
estimatedTokens: 1276
keywords: [LifeSciMobileMetadataRecord, metadata, created, mobile, application, API, 65.0]
---

> Represents the metadata created for the mobile application. This object
      is available in API version 65.0 and later.

# LifeSciMobileMetadataRecord

Represents the metadata created for the mobile application. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationVersionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the version name for the mobile application. |
| ApplicationVersionNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the version number for the mobile application. |
| ErrorLog | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the error log. |
| IntegrationErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the error code that occurs while intergation. |
| IntegrationErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the error message that occurs while intergation. |
| IntegrationStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the status of the integration.Possible values are:ErrorNewOkPendingThe default value is New. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MetadataDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the content document associated with the metadata.This field is a relationship field.Relationship NameMetadataDocumentRefers ToContentDocument |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the metadata. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentMobileMetadataRecId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the parent metadata.This field is a relationship field.Relationship NameParentMobileMetadataRecRefers ToLifeSciMobileMetadataRecord |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the profile associated with metadata.This field is a relationship field.Relationship NameProfileRefers ToProfile |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIdentifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the system from which data is loaded into the object. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRepresents the status of metadata.Possible values are:ActiveInProgressInactiveLoadingNewProcessingPublishedQueuedValidatingValidatedThe default value is New. |
| UpdateAvailableAlertDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the alert date to update the metadata. |
| UpdateDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the due date to update the metadata. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciMobileMetadataRecordFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciMobileMetadataRecordHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LifeSciMobileMetadataRecordShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciMobileMetadataRecordFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciMobileMetadataRecordHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- LifeSciMobileMetadataRecordShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
