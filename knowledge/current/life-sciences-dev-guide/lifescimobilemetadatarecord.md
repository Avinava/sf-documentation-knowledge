---
title: "LifeSciMobileMetadataRecord"
domain: life-sciences-dev-guide
topic: lifescimobilemetadatarecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.481Z
estimatedTokens: 943
keywords: [LifeSciMobileMetadataRecord, metadata, created, mobile, application, API, version, 65.0, later, Calls]
---

# LifeSciMobileMetadataRecord

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
