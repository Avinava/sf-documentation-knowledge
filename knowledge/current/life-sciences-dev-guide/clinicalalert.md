---
title: "ClinicalAlert"
domain: life-sciences-dev-guide
topic: clinicalalert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.068Z
estimatedTokens: 1446
keywords: [ClinicalAlert, notification, significance, different, healthcare, entities, subject, alert, may, patient, location, provider, procedure, medication, API]
---

# ClinicalAlert

> Represents a warning or notification of significance related to different
      healthcare entities. The subject of the alert may be a patient, a location, a provider, a
      procedure, or even a medication. This object is available in API version 51.0 and later.

# ClinicalAlert

Represents a warning or notification of significance related to different healthcare entities. The subject of the alert may be a patient, a location, a provider, a procedure, or even a medication. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Categories | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the category that the alert belongs to.Possible values are:ClinicalDietDrugLabSubject Contact |
| CodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the alert. |
| CodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that represents the alert.Referenced ObjectsCodeSetBundle |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the alert was deactivated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the clinical alert record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user that this record belongs to. |
| RaisedById | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person or facility that raised the alert.Referenced ObjectsHealthcareProviderHealthcarePractitionerFacilityCareRegisteredDevice |
| RelatedEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe encounter that this alert is related to.Referenced ObjectsClincialEncounter |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the alert was activated. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the clinical alert.Possible values are:ActiveEntered-In-ErrorInactive |
| SubjectId | Typepolymorphic referencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person or entity the alert is about.ExamplesA patient experiencing kidney failure.A location with an avian flu outbreak.A practitioner flagged from referrals.A medication that’s flagged for special circumstances.Referenced ObjectsLocationHealthcareProviderMedicationPatientMedicalProcedureAccount |

## Additional Information for Clinical Alert in Other Objects

In addition to creating a record using these fields, you can add more details to your clinical alert record by creating records in certain other objects, and referencing your ClinicalAlert record as the parent record. Here’s the list of objects you can associate to ClinicalAlert in this way, the type of information they add, and the field they use to reference ClinicalAlert.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the clinical alert. | ParentRecordId |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalAlertFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalAlertHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalAlertShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[ClinicalAlertChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalAlertFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalAlertHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ClinicalAlertShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
- ClinicalAlertChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
