---
title: "CareRegisteredDevice"
domain: sfFieldRef
topic: careregistereddevice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.203Z
estimatedTokens: 551
keywords: [CareRegisteredDevice, device, registration, patient, care, program, enrollee, API, version, 49.0, later]
---

# CareRegisteredDevice

> Represents a device or device registration information for a patient or a care
      program enrollee. This object is available in API version 49.0 and later.

# CareRegisteredDevice

Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareRegisteredDevice in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeviceId | Asset ID | reference |  | 18 |  |  |
| DeviceTypeId | Code Set ID | reference |  | 18 |  |  |
| Id | Care Registered Device ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Care Registered Device Name | string |  | 255 |  |  |
| NameType | Name Type | multipicklist |  | 4099 | 0 |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| RegistrationDate | Registration Date | datetime |  |  |  |  |
| SafetyInformation | Safety Information | textarea |  | 255 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SupportContactDetail | Support Contact Details | textarea |  | 2000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UniqueDeviceId1 | Unique Device ID 1 | string |  | 60 |  |  |
| UniqueDeviceId1Issuer | Unique Device ID 1 Issuer | url |  | 1000 |  |  |
| UniqueDeviceId2 | Unique Device ID 2 | string |  | 60 |  |  |
| UniqueDeviceId2Issuer | Unique Device ID 2 Issuer | url |  | 1000 |  |  |
| UniqueDeviceId3 | Unique Device ID 3 | string |  | 60 |  |  |
| UniqueDeviceId3Issuer | Unique Device ID 3 Issuer | url |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
