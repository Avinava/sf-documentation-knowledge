---
title: "HealthcareFacilityNetwork"
domain: sfFieldRef
topic: healthcarefacilitynetwork
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.239Z
estimatedTokens: 559
keywords: [HealthcareFacilityNetwork, junction, identifying, insurance, network, location, business, entity, part, participation, records, stored]
---

# HealthcareFacilityNetwork

> Represents a junction object identifying the insurance network that a
			location or business entity is a part of. Network participation records are also stored
			in this object.

# HealthcareFacilityNetwork

Represents a junction object identifying the insurance network that a location or business entity is a part of. Network participation records are also stored in this object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthcareFacilityNetwork in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| GenderRestriction | Gender Restriction | picklist |  | 40 |  |  |
| HealthcareFacilityId | Healthcare Facility ID | reference |  | 18 |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| HighestValidAge | Highest Valid Age | int | 3 |  |  |  |
| Id | Healthcare Facility Network ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowestValidAge | Lowest Valid Age | int | 3 |  |  |  |
| Name | Facility Network Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PanelLimit | Panel Limit | double |  |  | 18 | 0 |
| PanelStatus | Panel Status | picklist |  | 40 |  |  |
| PayerNetworkId | Healthcare Payer Network ID | reference |  | 18 |  |  |
| PractitionerFacilityId | Healthcare Practitioner Facility ID | reference |  | 18 |  |  |
| PractitionerId | Contact ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
