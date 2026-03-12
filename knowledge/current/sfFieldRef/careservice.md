---
title: "CareService"
domain: sfFieldRef
topic: careservice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:52.400Z
estimatedTokens: 347
keywords: [CareService, healthcare, treatment, service, procedure, offered, provider, practitioner, facility, API, version, 59.0, later]
---

# CareService

> Represents a healthcare treatment, service, or procedure offered by a
         provider, practitioner, or facility. This object is available in API version 59.0 and
      later.

# CareService

Represents a healthcare treatment, service, or procedure offered by a provider, practitioner, or facility. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareService in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Id | Care Service ID | id |  | 18 |  |  |
| IsAppointmentRequired | Appointment Required | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Care Service Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferralMethods | Referral Methods | multipicklist |  | 4099 | 0 |  |
| ServiceProvision | Service Provision | multipicklist |  | 4099 | 0 |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
