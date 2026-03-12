---
title: "EmailDomainFilter"
domain: sfFieldRef
topic: emaildomainfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.783Z
estimatedTokens: 335
keywords: [EmailDomainFilter, filter, determines, whether, email, relay, restricted, specific, domains, API, version, 43.0, later]
---

# EmailDomainFilter

> Represents a filter that determines whether an email relay is
			restricted to a specific list of domains. This object is available in API version
		43.0 and later.

# EmailDomainFilter

Represents a filter that determines whether an email relay is restricted to a specific list of domains. This object is available in API version 43.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailDomainFilter](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emaildomainfilter.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmailRelayId | Email Relay ID | reference |  | 18 |  |  |
| FromDomain | Sender Domain | textarea |  | 4000 |  |  |
| Id | Email Domain Filter ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PriorityNumber | Priority | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ToDomain | Recipient Domain | textarea |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
