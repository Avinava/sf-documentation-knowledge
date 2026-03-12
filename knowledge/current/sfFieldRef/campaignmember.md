---
title: "CampaignMember"
domain: sfFieldRef
topic: campaignmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.187Z
estimatedTokens: 673
keywords: [CampaignMember, relationship, campaign, either, lead, contact, Accounts, Members, setting, enabled, org, represent, account]
---

# CampaignMember

> The CampaignMember object represents the relationship between a
   campaign and either a lead or a contact. If the Accounts as Campaign Members setting is enabled
   in an org, CampaignMember can also represent the relationship between a campaign and an
   account.

# CampaignMember

The CampaignMember object represents the relationship between a campaign and either a lead or a contact. If the Accounts as Campaign Members setting is enabled in an org, CampaignMember can also represent the relationship between a campaign and an account.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CampaignMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_campaignmember.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CampaignId | Campaign ID | reference |  | 18 |  |  |
| City | City | string |  | 40 |  |  |
| CompanyOrAccount | Company (Account) | string |  | 255 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DoNotCall | Do Not Call | boolean |  |  |  |  |
| Email | Email | email |  | 80 |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| FirstRespondedDate | First Responded Date | date |  |  |  |  |
| HasOptedOutOfEmail | Email Opt Out | boolean |  |  |  |  |
| HasOptedOutOfFax | Fax Opt Out | boolean |  |  |  |  |
| HasResponded | Responded | boolean |  |  |  |  |
| Id | Campaign Member ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| LeadOrContactId | Related Record ID | reference |  | 18 |  |  |
| LeadOrContactOwnerId | Related Record Owner ID | reference |  | 18 |  |  |
| LeadSource | Lead Source | picklist |  | 255 |  |  |
| MobilePhone | Mobile | phone |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| Salutation | Salutation | picklist |  | 255 |  |  |
| State | State/Province | string |  | 80 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Street | Street | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 128 |  |  |
| Type | Type | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
