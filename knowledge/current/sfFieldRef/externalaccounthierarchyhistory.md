---
title: "ExternalAccountHierarchyHistory"
domain: sfFieldRef
topic: externalaccounthierarchyhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.762Z
estimatedTokens: 302
keywords: [ExternalAccountHierarchyHistory, history, changes, external, account, hierarchy, API, version, 50.0, later]
---

# ExternalAccountHierarchyHistory

> Represents the history of changes to values in the fields of an
         external account hierarchy. This object is available in API version 50.0 and
      later.

# ExternalAccountHierarchyHistory

Represents the history of changes to values in the fields of an external account hierarchy. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ExternalAccountHierarchyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_externalaccounthierarchyhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| ExternalAccountHierarchyId | External Account Hierarchy ID | reference |  | 18 |  |  |
| Field | Changed Field | picklist |  | 255 |  |  |
| Id | External Account Hierarchy History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
