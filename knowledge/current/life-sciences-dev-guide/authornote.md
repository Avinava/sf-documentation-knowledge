---
title: "AuthorNote"
domain: life-sciences-dev-guide
topic: authornote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.421Z
estimatedTokens: 1329
keywords: [AuthorNote, Stores, notes, associated, different, records, along, author, time, authored, isn’t, necessarily, person, created, record]
---

# AuthorNote

> Stores notes associated with different types of records along with
         information about the author of the note and the time the note was authored. The author
         isn’t necessarily the person who created a record. The author is the person who provided
         the information in the note. This object is available in API version 52.0 and
      later.

# AuthorNote

Stores notes associated with different types of records along with information about the author of the note and the time the note was authored. The author isn’t necessarily the person who created a record. The author is the person who provided the information in the note. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AuthorId | TypePreferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the author of the note.This is a polymorphic relationship field.Relationship NameAuthorRelationship TypeLookupReferenced ObjectsAccountContactHealthcareProviderUser—This value is available in API version 55.0 and later. |
| AuthorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the author of the note. |
| AuthoredDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the note was authored. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the AuthorNote record. This value is generated automatically. |
| NoteText | TypetextareaPropertiesCreate, UpdateDescriptionThe contents of the note. |
| OwnerId | TypePolymorphic referencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the AuthorNote record.Relationship NameOwnerRelationship TypeLookupReferenced ObjectsGroup, User |
| ParentRecordId | TypePolymorhpic referencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences the parent record that the note is associated with.Referenced ObjectsAccountAllergyIntoleranceCareObservationCareRegisteredDeviceClinicalDetectedIssue—This value is available in API version 55.0 and later.ClinicalServiceRequestHealthConditionMedicationRequestMedicationStatementPatientImmunizationPatientMedicalProcedure |
| RecipientType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of recipient for an author note.Possible values are:PatientProviderThis field is available in API version 55.0 and later. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system the record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last changed in the source system. |

## Usage

When a record requires a related note with the information about the author of that note, that information is stored in an AuthorNote record. This AuthorNote record references the parent record it’s associated with using the ParentRecordId field.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AuthorNoteFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AuthorNoteHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AuthorNoteShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[AuthorNoteChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- AuthorNoteFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AuthorNoteHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- AuthorNoteShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- AuthorNoteChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
