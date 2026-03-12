---
title: "CareRegisteredDevice"
domain: health-cloud-object-reference
topic: careregistereddevice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.601Z
estimatedTokens: 1608
keywords: [CareRegisteredDevice, device, registration, patient, care, program, enrollee, API, version, 49.0, later, Calls, Additional, Objects, Associated]
---

# CareRegisteredDevice

> Represents a device or device registration information for a patient or a care
      program enrollee. This object is available in API version 49.0 and later.

# CareRegisteredDevice

Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramEnrolleeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care program enrollee to whom this device is registered. |
| DeviceId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe asset ID for the device.Referenced ObjectsAsset |
| DeviceTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the device.Examples: Cystoscope, oxygen tentReferenced ObjectsCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this device registration record. |
| PatientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account ID of the patient to whom this device is registered.Referenced ObjectsAccount |
| RegistrationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when this device was registered. |
| SafetyInformation | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health and safety information about with the device. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the system from which the record was sourced. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the device registration is active.Possible values are:ActiveInactive |
| SupportContactDetail | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContact details of the person or organization that provides support for the device. |
| UniqueDeviceId1 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique device identifier (UDI) assigned to device label or package. It identifies the labeler and the specific version or model of a device. A device may have multiple UDIs since it could have been sold in multiple jurisdictions. |
| UniqueDeviceId1Issuer | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe organization that issued the UDI1 for the device. |
| UniqueDeviceId2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique device identifier (UDI) assigned to device label or package. It identifies the labeler and the specific version or model of a device. A device may have multiple UDIs since it could have been sold in multiple jurisdictions. |
| UniqueDeviceId2Issuer | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe organization that issued the UDI2 for the device. |
| UniqueDeviceId3 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique device identifier (UDI) assigned to device label or package. It identifies the labeler and the specific version or model of a device. A device may have multiple UDIs since it could have been sold in multiple jurisdictions. |
| UniqueDeviceId3Issuer | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe organization that issued the UDI3 for the device. |

## Additional Information for CareRegisteredDevice in Other Objects

In addition to creating a record using these fields, you can add more details to your CareRegisteredDevice record by creating records in certain other objects, and referencing your CareRegisteredDevice record as the parent record. Here’s the list of objects you can associate to CareRegisteredDevice in this way, the type of information they add, and the field they use to reference CareRegisteredDevice.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the CareRegisteredDevice record. This identifier is not the same as the device’s UID. | ParentRecordId |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareRegisteredDeviceChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareRegisteredDeviceFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareRegisteredDeviceHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareRegisteredDeviceChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareRegisteredDeviceFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareRegisteredDeviceHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
