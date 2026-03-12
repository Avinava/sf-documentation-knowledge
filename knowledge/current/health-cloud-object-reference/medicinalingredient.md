---
title: "MedicinalIngredient"
domain: health-cloud-object-reference
topic: medicinalingredient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.689Z
estimatedTokens: 1238
keywords: [MedicinalIngredient, child, Medication, substances, drugs, ingredients, API, version, 52.0, later, Calls, Usage, Associated, Objects]
---

# MedicinalIngredient

> MedicinalIngredient is a child object of Medication that represents
         substances or drugs that are used as ingredients in the medication.  This object is
      available in API version 52.0 and later.

# MedicinalIngredient

MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IngredientId | TypePolymorphic referencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe substance that’s used as an ingredient in the medication. If the ingredient is another medication or drug, reference a Medication record. If the ingredient is not a medication, reference a code set bundle record with the system-defined code that represents the ingredient.Referenced ObjectsMedication, CodeSetBundle |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the ingredient is an active ingredient in the medication. An active ingredient affects the therapeutic action of the medication.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |
| OwnerId | TypePolymorphic referencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Referenced ObjectsGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe medication that this ingredient is a part of.This is a relationship field.Referenced ObjectsMedication |
| StrengthDenominator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe denominator value of the ingredient’s strength or quantity in the medication. |
| StrengthDenominatorUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of StrengthDenominatorReferenced ObjectsUnitOfMeasure |
| StrengthNumerator | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numerator value of the ingredient’s strength or quantity in the medication. |
| StrengthNumeratorUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of StrengthNumeratorThis is a relationship field.Refers ToUnitOfMeasure |

## Usage

Ingredients are added to a medication record by creating MedicinalIngredient records to represent each ingredient, and then referencing the medication record using the ParentRecordId field in all the MedicinalIngredient records.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicinalIngredientChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[MedicinalIngredientFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedicinalIngredientHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MedicinalIngredientShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MedicinalIngredientChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MedicinalIngredientFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MedicinalIngredientHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- MedicinalIngredientShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
