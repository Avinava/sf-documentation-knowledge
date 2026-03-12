---
title: "HlthCareProvTreatedCondition"
domain: sfFieldRef
topic: hlthcareprovtreatedcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.532Z
estimatedTokens: 420
keywords: [HlthCareProvTreatedCondition, junction, healthcare, provider, facility, practitioner, problem, definition, that's, health, condition, disease, illness, links, doctor]
---

# HlthCareProvTreatedCondition

> Represents a junction object between a healthcare provider, facility, or
         practitioner and a problem definition that's related to a health condition, such as disease
         or illness. For example, this object links a doctor to the treatment of diabetes, or a
      facility to the treatment of spinal injuries. This object is available in API version 59.0 and
      later.

# HlthCareProvTreatedCondition

Represents a junction object between a healthcare provider, facility, or practitioner and a problem definition that's related to a health condition, such as disease or illness. For example, this object links a doctor to the treatment of diabetes, or a facility to the treatment of spinal injuries. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HlthCareProvTreatedCondition in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConditionId | Problem Definition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Id | Healthcare Provider Treated Condition ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Healthcare Provider Treated Condition Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
