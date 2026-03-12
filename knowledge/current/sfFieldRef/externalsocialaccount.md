---
title: "ExternalSocialAccount"
domain: sfFieldRef
topic: externalsocialaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.837Z
estimatedTokens: 566
keywords: [ExternalSocialAccount, managed, social, media, account, network, Facebook, Twitter, API, version, 29.0, later]
---

# ExternalSocialAccount

> Represents a managed social media account on a social network such
			as Facebook or Twitter. This object is available in API version 29.0 and
		later.

# ExternalSocialAccount

Represents a managed social media account on a social network such as Facebook or Twitter. This object is available in API version 29.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ExternalSocialAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_externalsocialaccount.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizedBy | Authorized by | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataSourceId | Data Source Id | string |  | 255 |  |  |
| DefaultResponseAccountId | Managed Social Account ID | reference |  | 18 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ExternalAccountId | External Account Id | string |  | 255 |  |  |
| ExternalPictureURL | Provider External Picture URL | url |  | 255 |  |  |
| Id | Managed Social Account ID | id |  | 18 |  |  |
| IsActive | Is Active Account | boolean |  |  |  |  |
| IsAuthenticated | Is Account Authenticated | boolean |  |  |  |  |
| IsCaseCreationEnabled | Is Case Creation Enabled | boolean |  |  |  |  |
| IsDataSourceActive | Active Data Source | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| ProfileUrl | Profile URL | url |  | 255 |  |  |
| Provider | Social Network | picklist |  | 255 |  |  |
| ProviderUserId | Provider User Id | string |  | 255 |  |  |
| RuleId | Rule Id | string |  | 255 |  |  |
| SocialPropertyId | Social Property Id | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TopicId | Topic Profile Id | string |  | 255 |  |  |
| UniqueName | Unique Name | string |  | 255 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
