---
title: "Medication"
domain: health-cloud-object-reference
topic: medication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.455Z
estimatedTokens: 1415
keywords: [Medication, detailed, different, medications, API, version, 51.0, later, Calls, Additional, Objects, Associated, ​Medication, medication, FHIR, resource, maps, Salesforce​, V4​.0, Clinical]
---

# Medication

> Represents detailed information about different medications. This object
    is available in API version 51.0 and later.

# Medication

Represents detailed information about different medications. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BatchNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the batch number of the medication. |
| BrandNameAlternative | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe branded alternative for a generic medication. This field is available in API version 56.0 and later. |
| ExpirationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the expiration date of the medication. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| ManufacturerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe company that makes the medicine.Referenced ObjectsAccount |
| MedicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the medication. This field is available in API version 56.0 and later.Possible values are:Branded ProductGeneric ProductInnovator ProductTherapeutic Moeity |
| MedicationCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that identifies a medication.Referenced ObjectsCodeSetBundle |
| MedicationFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code for the dosage form this medication is manufactured in.Referenced ObjectsCodeSetBundle |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the medication. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the medication record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that's associated with the medication.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Financial Assistance Program permission set. |
|  |  |
| QuantityDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total volume of the medication contained in the packaged product. |
| QuantityNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the medication contained in the packaged product. |
| QuantityUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe measurement unit for the quantity.Referenced ObjectsUnitOfMeasure |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record on its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this item was last changed on the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the medication.Possible values are:ActiveEntered in errorInactive |

## Additional Information for Medication in Other Objects

In addition to creating a record using these fields, you can add more details to your Medication record by creating records in certain other objects, and referencing your Medication record as the parent record. Here’s the list of objects you can associate to Medication in this way, the type of information they add, and the field they use to reference Medication.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the medication record. | ParentRecordId |
| MedicinalIngredient | Adds information about the different ingredients used in the medication. | ParentRecordId |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

-   **[MedicinalIngredient](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_medicinalingredient.htm)**
    MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication. This object is available in API version 52.0 and later.

## Related Topics

- MedicationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MedicinalIngredient (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_medicinalingredient.htm)
- Medication (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_Medication.htm)
