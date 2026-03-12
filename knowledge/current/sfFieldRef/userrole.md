---
title: "UserRole"
domain: sfFieldRef
topic: userrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.436Z
estimatedTokens: 408
keywords: [UserRole, user, role, organization]
---

# UserRole

> Represents a user role in your organization.

# UserRole

Represents a user role in your organization.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserRole](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userrole.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CaseAccessForAccountOwner | Case Access Level for Account Owner | picklist |  | 40 |  |  |
| ContactAccessForAccountOwner | Contact Access Level for Account Owner | picklist |  | 40 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| ForecastUserId | User ID | reference |  | 18 |  |  |
| Id | Role ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MayForecastManagerShare | May Forecast Manager Share | boolean |  |  |  |  |
| Name | Name | string |  | 80 |  |  |
| OpportunityAccessForAccountOwner | Opportunity Access Level for Account Owner | picklist |  | 40 |  |  |
| ParentRoleId | Parent Role ID | reference |  | 18 |  |  |
| PortalAccountId | Account ID | reference |  | 18 |  |  |
| PortalAccountOwnerId | User ID | reference |  | 18 |  |  |
| PortalRole | Portal Role | picklist |  | 40 |  |  |
| PortalType | Portal Type | picklist |  | 40 |  |  |
| RollupDescription | Description | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
