---
title: "UserTerritory2Association"
domain: sfFieldRef
topic: userterritory2association
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.468Z
estimatedTokens: 283
keywords: [UserTerritory2Association, association, assignment, territory, user, record, Sales, Territories, enabled]
---

# UserTerritory2Association

> Represents an association (by assignment) between a territory and a user
      record. Available only if Sales Territories has been enabled.

# UserTerritory2Association

Represents an association (by assignment) between a territory and a user record. Available only if Sales Territories has been enabled.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserTerritory2Association](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userterritory2association.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Id | User Territory Association ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| RoleInTerritory2 | Role in Territory | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2Id | Territory ID | reference |  | 18 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
