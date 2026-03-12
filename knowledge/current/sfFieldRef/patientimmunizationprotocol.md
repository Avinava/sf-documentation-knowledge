---
title: "PatientImmunizationProtocol"
domain: sfFieldRef
topic: patientimmunizationprotocol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.076Z
estimatedTokens: 346
keywords: [PatientImmunizationProtocol, protocol, followed, provider, patient’s, immunization, recommendations, vaccine, administered, child, PatientImmunization, API, version, 56.0, later]
---

# PatientImmunizationProtocol

> Represents the protocol followed by a provider for a patient’s immunization
         and its related details. The protocol defines the set of recommendations that are followed
         while a vaccine is administered. This object is a child of the PatientImmunization object. This object is available in API version 56.0
      and later.

# PatientImmunizationProtocol

Represents the protocol followed by a provider for a patient’s immunization and its related details. The protocol defines the set of recommendations that are followed while a vaccine is administered. This object is a child of the PatientImmunization object. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PatientImmunizationProtocol in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Patient Immunization Protocol ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientImmunizationId | Patient Immunization ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
