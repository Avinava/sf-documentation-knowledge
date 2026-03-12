---
title: "FldSvcObjChg"
domain: sfFieldRef
topic: fldsvcobjchg
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.206Z
estimatedTokens: 389
keywords: [FldSvcObjChg, change, made, service, appointment’s, tracked, API, version, 63.0, later]
---

# FldSvcObjChg

> Represents a change made to one of a service appointment’s tracked fields.
       This object is available in API version 63.0 and later.

# FldSvcObjChg

Represents a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FldSvcObjChg](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fldsvcobjchg.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Activity | Activity | picklist |  | 40 |  |  |
| ActivityDetails | Activity Details | string |  | 1000 |  |  |
| ActivityTimeStamp | Activity Time Stamp | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Field Service Object Change ID | id |  | 18 |  |  |
| IsPrimary | Is Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OriginalSvcAppointment | Original Service Appointment | string |  | 15 |  |  |
| ServiceAppointmentId | Service Appointment ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeZone | Time Zone | picklist |  | 40 |  |  |
| Transaction | Transaction | string |  | 256 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
