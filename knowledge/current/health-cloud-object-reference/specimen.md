---
title: "Specimen"
domain: health-cloud-object-reference
topic: specimen
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.766Z
estimatedTokens: 2237
keywords: [Specimen, sample, analysis, API, version, 64.0, later, Calls, Associated, Objects]
---

# Specimen

> Represents a sample used for analysis. This object is available in API
      version 64.0 and later.

# Specimen

Represents a sample used for analysis. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BodySiteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe body site code set bundle associated with a specimen that represents the anatomical collection site.This field is a relationship field.Relationship NameBodySiteRefers ToCodeSet |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the specimen.This field is a relationship field.Relationship NameCaseRefers ToCase |
| CollectionDeviceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe device code set bundle associated with a specimen that represents the device used to collect the specimen. For example, SST tube, red top tube, or 100-mL sterile polycup.This field is a relationship field.Relationship NameCollectionDeviceCodeRefers ToCodeSet |
| CollectionDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total time period over which the specimen was collected. |
| CollectionDurationUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure of the collection duration.This field is a relationship field.Relationship NameCollectionDurationUomRefers ToUnitOfMeasure |
| CollectionEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the collection from the specimen. |
| CollectionMethodCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method code set bundle associated with a specimen that represents the method used to collect the specimen. For example, Biopsy.This field is a relationship field.Relationship NameCollectionMethodCodeRefers ToCodeSet |
| CollectionQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of specimen collected. For example, the volume of a blood sample, or the physical measurement of an anatomic pathology sample. |
| CollectionQuantityUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for collected quantity.This field is a relationship field.Relationship NameCollectionQuantityUomRefers ToUnitOfMeasure |
| CollectionStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the collection from the specimen. |
| CollectorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the healthcare provider that collected the specimen.This field is a polymorphic relationship field.Relationship NameCollectorRefers ToAccount, HealthcareProvider |
| ConditionCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe condition code set bundle associated with a specimen that represents the state of the specimen.This field is a relationship field.Relationship NameConditionCodeRefers ToCodeSetBundle |
| FastingDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total time period over which the individual fasted before sample collection. |
| FastingDurationUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the unit of measure for the fasting duration.This field is a relationship field.Relationship NameFastingDurationUomRefers ToUnitOfMeasure |
| FastingStatusCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fasting status code set bundle associated with specimen that represents the fasting status of the individual from whom the specimen was collected.This field is a relationship field.Relationship NameFastingStatusCodeRefers ToCodeSet |
| FeatureCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe feature code set bundle associated with a specimen that represents the type of physical feature or landmark of a specimen, which is highlighted for context by the collector.This field is a relationship field.Relationship NameFeatureCodeRefers ToCodeSetBundle |
| GroupingMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the specimen is part of a group or pooled with other specimens.Possible values are:GroupedPooledThe default value is Grouped. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the specimen. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when a specimen is received by the testing laboratory. |
| SourceReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents where a specimen came from. For example, from a patient, from a location (the source of an environmental sample), a sampling of a substance, a biologically derived product, or a device.This field is a polymorphic relationship field.Relationship NameSourceReferenceRecordRefers ToAccount, Location |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the specimen.Possible values are:AvailableEnteredInErrorUnavailableUnsatisfactoryThe default value is Available. |
| TypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type code set bundle associated with a specimen that represents the type of material that forms the specimen.This field is a relationship field.Relationship NameTypeRefers ToCodeSet |
| UsageCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage code set bundle associated with a specimen that represents the role of the specimen in the testing workflow.This field is a relationship field.Relationship NameUsageCodeRefers ToCodeSetBundle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SpecimenChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[SpecimenHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SpecimenOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SpecimenShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SpecimenChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- SpecimenHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- SpecimenOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SpecimenShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
