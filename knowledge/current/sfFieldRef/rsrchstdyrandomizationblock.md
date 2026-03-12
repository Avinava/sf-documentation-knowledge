---
title: "RsrchStdyRandomizationBlock"
domain: sfFieldRef
topic: rsrchstdyrandomizationblock
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:12.727Z
estimatedTokens: 376
keywords: [RsrchStdyRandomizationBlock, block, that’s, generated, research, study, randomization, API, version, 61.0, later]
---

# RsrchStdyRandomizationBlock

> Represents the details of a block that’s generated through the parameters
         specified in the research study randomization. This object is available in API version
      61.0 and later.

# RsrchStdyRandomizationBlock

Represents the details of a block that’s generated through the parameters specified in the research study randomization. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RsrchStdyRandomizationBlock in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentBlockItemSeqNumber | Current Block Item Sequence Number | int | 9 |  |  |  |
| Id | Research Study Randomization Block ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ResearchStdyRandomizationId | Research Study Randomization ID | reference |  | 18 |  |  |
| RsrchStdyRndmCriteriaSrcId | Research Study Randomization Criteria Source ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
