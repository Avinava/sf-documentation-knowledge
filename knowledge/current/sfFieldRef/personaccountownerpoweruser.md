---
title: "PersonAccountOwnerPowerUser"
domain: sfFieldRef
topic: personaccountownerpoweruser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.042Z
estimatedTokens: 459
keywords: [PersonAccountOwnerPowerUser, user, own, customer, partner, portal, accounts, Person, account, owner, power, users, large, number, either]
---

# PersonAccountOwnerPowerUser

> Represents a user who can own more than 50,000 customer or partner portal
         accounts. Person account owner power users can own a large number of either customer or
         partner users. Their role can’t be changed and they must be at the root of the role
         hierarchy. Person account owner power user objects can't be created if deferred sharing is
         turned on for your org. Person account owner power user objects can be created while
         deferred sharing is turned off for an org. Deferred sharing can be turned back on after
         person account owner power user objects have been created. This object is available in
      API version 57.0 and later.

# PersonAccountOwnerPowerUser

Represents a user who can own more than 50,000 customer or partner portal accounts. Person account owner power users can own a large number of either customer or partner users. Their role can’t be changed and they must be at the root of the role hierarchy. Person account owner power user objects can't be created if deferred sharing is turned on for your org. Person account owner power user objects can be created while deferred sharing is turned off for an org. Deferred sharing can be turned back on after person account owner power user objects have been created. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PersonAccountOwnerPowerUser](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_personaccountownerpoweruser.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Person Account Owner Power User ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
| PortalType | Portal Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
