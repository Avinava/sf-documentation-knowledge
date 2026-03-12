---
title: "PatientMedicalProcedureDetail"
domain: life-sciences-dev-guide
topic: patientmedicalproceduredetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.381Z
estimatedTokens: 1163
keywords: [PatientMedicalProcedureDetail, Associates, records, different, objects, patient, medical, procedure, record, add, multi-object, junction, API, version, 51.0]
---

# PatientMedicalProcedureDetail

> Associates records from different objects to a patient medical procedure record
      to add more information to the procedure record. This is a multi-object junction object.
    This object is available in API version 51.0 and later.

# PatientMedicalProcedureDetail

Associates records from different objects to a patient medical procedure record to add more information to the procedure record. This is a multi-object junction object. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a code set or code set bundle that adds information to a patient medical procedure record.Referenced ObjectsCodeSetCodeSetBundle |
| DetailRecordId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a record that adds information to a patient medical procedure record.Referenced ObjectsPatientMedicalProcedureCareObservationHealthConditionClinicalServiceRequestCareRegisteredDevice |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of information added to the patient medical procedure record.Possible values are:Based OnBody SiteComplicationComplication DetailFollow UpPart Of |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the patient medical procedure detail record. |
| PatientMedicalProcedureId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient medical procedure to which details are being added.Referenced ObjectsPatientMedicalProcedure |

## Usage

PatientMedicalProcedureDetail records add additional information to PatientMedicalProcedure records. This information may be of the following types, referencing the following types of records:

-   Based On: Clinical service requests
-   Body Site: Code sets or code set bundles
-   Complication: Code sets or code set bundles
-   Complication Detail: Health conditions
-   Follow Up: Code sets or code set bundles
-   Part Of: Patient medical procedures or clinical observations

The records providing this additional information is selected using either the DetailCodeId or DetailRecordId fields, and then the type of information is specified using the DetailType field. This information is then connected to the patient medical procedure record it belongs to using the PatientMedicalProcedureId field.

One record of PatientMedicalProcedureDetail can specify only one type and piece of information. If multiple detail types or detail instances are required in the parent procedure record, multiple records of PatientMedicalProcedureDetail are required.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PatientMedicalProcedureDetailChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[PatientMedicalProcedureDetailFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PatientMedicalProcedureDetailHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PatientMedicalProcedureDetailChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- PatientMedicalProcedureDetailFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PatientMedicalProcedureDetailHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
