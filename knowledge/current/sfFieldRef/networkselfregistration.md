---
title: "NetworkSelfRegistration"
domain: sfFieldRef
topic: networkselfregistration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:04.883Z
estimatedTokens: 557
keywords: [NetworkSelfRegistration, account, self-registering, Experience, Cloud, users, associated, site, admin, specify, setting, self-registration, isn’t, Salesforce, creates]
---

# NetworkSelfRegistration

> Represents the account that self-registering Experience Cloud users are associated with by default. Self-registering users in an Experience Cloud site are required to
		be associated with an account, which the admin must specify while setting up self-registration for the site. If an account isn’t specified, Salesforce creates person accounts (when enabled)
		for self-registering users. This object is available in API version 34.0 and later.

# NetworkSelfRegistration

Represents the account that self-registering Experience Cloud users are associated with by default. Self-registering users in an Experience Cloud site are required to be associated with an account, which the admin must specify while setting up self-registration for the site. If an account isn’t specified, Salesforce creates person accounts (when enabled) for self-registering users. This object is available in API version 34.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkSelfRegistration](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkselfregistration.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApexHandlerId | Class ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExecuteApexHandlerAsId | User ID | reference |  | 18 |  |  |
| Id | Experience Self Registration Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| OptionsDisableStandardRgstrComponent | Disable the standard components for self-registration on Aura and LWR sites | boolean |  |  |  |  |
| OptionsIncludePassword | IncludePassword | boolean |  |  |  |  |
| OptionsShowEmail | Email | boolean |  |  |  |  |
| OptionsShowFirstName | First Name | boolean |  |  |  |  |
| OptionsShowLastName | Last Name | boolean |  |  |  |  |
| OptionsShowMobilePhone | Mobile | boolean |  |  |  |  |
| OptionsShowNickname | ShowNickname | boolean |  |  |  |  |
| OptionsShowUsername | ShowUsername | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationMethod | Verification Method | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
