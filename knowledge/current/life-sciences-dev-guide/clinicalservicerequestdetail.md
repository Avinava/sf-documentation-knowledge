---
title: "ClinicalServiceRequestDetail"
domain: life-sciences-dev-guide
topic: clinicalservicerequestdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.167Z
estimatedTokens: 1153
keywords: [ClinicalServiceRequestDetail, Associates, records, different, objects, clinical, service, record, add, multi-object, junction, API, version, 51.0, later]
---

# ClinicalServiceRequestDetail

> Associates records from different objects to a clinical service request record
      to add more information to it. This is a multi-object junction object. This object is
    available in API version 51.0 and later.

# ClinicalServiceRequestDetail

Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object junction object. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalServiceRequestId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the parent service request record.Referenced ObjectsClinicalServiceRequest |
| DetailCodeId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a code set or code set bundle that adds information to a clinical service request record.Referenced ObjectsCodeSetCodeSetBundle |
| DetailRecordId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a record that adds information to a clinical service request record.Referenced ObjectsClinicalServiceRequestMedicationRequestHealthcareFacilityCareObservationHealthConditionDiagnosticSummarySpecimen |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the relation between the service request and the detail record.Possible values are:Based OnBody SiteReason ReferenceRequest FacilitySpecimen |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the clinical service request detail record. |

## Usage

ClinicalServiceRequestDetail records add additional information to ClinicalServiceRequest records. This information may be of the following types, referencing the following types of records:

-   Based On: Clinical service requests or medication requests
-   Body Site: Code sets or code set bundles
-   Reason Reference: Health conditions, care observations, or diagnostic summaries
-   Request Facility: Healthcare facilities, code sets, or code set bundles

The records providing this additional information is selected using either the DetailCodeId or DetailRecordId fields, and then the type of information is specified using the DetailType field. This information is then connected to the clinical service request record it belongs to using the ClinicalServiceRequestId field.

One record of ClinicalServiceRequestDetail can specify only one type and piece of information. If multiple detail types or detail instances are required in the parent clinical service request record, multiple records of ClinicalServiceRequestDetail are required.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalServiceRequestDetailFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalServiceRequestDetailHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalServiceRequestDetailChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalServiceRequestDetailFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalServiceRequestDetailHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ClinicalServiceRequestDetailChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
