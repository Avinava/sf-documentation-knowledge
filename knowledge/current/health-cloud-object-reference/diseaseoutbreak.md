---
title: "DiseaseOutbreak"
domain: health-cloud-object-reference
topic: diseaseoutbreak
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.925Z
estimatedTokens: 1532
keywords: [DiseaseOutbreak, disease, outbreak, monitored, health, organization, API, version, 64.0, later, Calls, Associated, Objects]
---

# DiseaseOutbreak

> Represents a disease outbreak monitored by the public health
         organization. This object is available in API version 64.0 and later.

# DiseaseOutbreak

Represents a disease outbreak monitored by the public health organization. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the disease outbreak. |
| DetectionDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time of the disease outbreak detection. |
| DiseaseDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe disease definition associated with the disease outbreak.This field is a relationship field.Relationship NameDiseaseDefinitionRefers ToDiseaseDefinition |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date and time of the disease outbreak. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location, address, or healthcare facility associated with the disease outbreak.This field is a polymorphic relationship field.Relationship NameLocationReferenceRecordRefers ToAddress, HealthcareFacility, Location |
| ManuallyRecordedconfirmedCnt | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manually recorded count of people affected by the disease outbreak, based on informal reports. |
| ManuallyRecordedsuspectedCnt | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manually recorded count of people suspected to be affected by the disease outbreak, based on informal reports. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the disease outbreak. |
| OutbreakLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the geographical scope of the outbreak, such as local, multi-jurisdictional, provincial, national, or facility-based.Possible values are:FacilityLocalMultiJurisdictionalNationalProvincial |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedDiseaseOutbreakId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA related outbreak associated with the disease outbreak.This field is a relationship field.Relationship NameRelatedDiseaseOutbreakRefers ToDiseaseOutbreak |
| ReportedById | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user who reported the disease outbreak.This field is a polymorphic relationship field.Relationship NameReportedByRefers ToUser |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date and time of the disease outbreak. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the disease outbreak.Possible values are:CompletedInProgressNew |
| TotalConfirmedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total confirmed count of people affected by the disease outbreak. |
| TotalSuspectedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total suspected count of people affected by the disease outbreak. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DiseaseOutbreakChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DiseaseOutbreakHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DiseaseOutbreakOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DiseaseOutbreakShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DiseaseOutbreakChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DiseaseOutbreakHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DiseaseOutbreakOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DiseaseOutbreakShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
