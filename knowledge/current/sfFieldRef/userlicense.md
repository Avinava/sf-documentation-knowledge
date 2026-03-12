---
title: "UserLicense"
domain: sfFieldRef
topic: userlicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.108Z
estimatedTokens: 319
keywords: [UserLicense, user, license, organization, entitles, specific, functionality, determines, profiles, permission]
---

# UserLicense

> Represents a user license in your organization. A
   user license entitles a user to specific functionality and determines the profiles and permission
   sets available to the user.

# UserLicense

Represents a user license in your organization. A user license entitles a user to specific functionality and determines the profiles and permission sets available to the user.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserLicense](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userlicense.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | User License ID | id |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LicenseDefinitionKey | License Def. ID | string |  | 40 |  |  |
| MasterLabel | Master Label | string |  | 80 |  |  |
| Name | Name | string |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalLicenses | Total Licenses | int | 9 |  |  |  |
| UsedLicenses | Used Licenses | int | 9 |  |  |  |
| UsedLicensesLastUpdated | Used Licenses Last Updated | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
