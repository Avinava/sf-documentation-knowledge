---
title: "RelatedRecordAssocCriteria"
domain: sfFieldRef
topic: relatedrecordassoccriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.161Z
estimatedTokens: 414
namespace: NamespacePrefix
keywords: [RelatedRecordAssocCriteria, criteria, automatically, linking, records, accounts, leads, opportunities, cases, branches, work, API, version, 52.0, later]
---

# RelatedRecordAssocCriteria

> Defines criteria for automatically linking records like accounts, leads,
         opportunities, and cases with the branches that work with them. This object is
      available in API version 52.0 and later.

**Namespace:** `NamespacePrefix`

# RelatedRecordAssocCriteria

Defines criteria for automatically linking records like accounts, leads, opportunities, and cases with the branches that work with them. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RelatedRecordAssocCriteria in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssociationHandlerApexClassId | Class ID | reference |  | 18 |  |  |
| AssociationType | Association Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EventType | Event Type | picklist |  | 255 |  |  |
| Id | Related Record Association ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PreCondition | Precondition | string |  | 255 |  |  |
| ReferenceObject | Reference Object | picklist |  | 255 |  |  |
| SelectedOwnerField | Selected Owner Field | string |  | 255 |  |  |
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
