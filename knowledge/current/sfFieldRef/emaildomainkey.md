---
title: "EmailDomainKey"
domain: sfFieldRef
topic: emaildomainkey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.790Z
estimatedTokens: 525
keywords: [EmailDomainKey, domain, key, organization’s, authenticate, outbound, email, Salesforce, behalf, API, version, 28.0, later]
---

# EmailDomainKey

> Represents a domain key for an organization’s domain, used to
      authenticate outbound email that Salesforce sends on the organization’s behalf. This
    object is available in API version 28.0 and later.

# EmailDomainKey

Represents a domain key for an organization’s domain, used to authenticate outbound email that Salesforce sends on the organization’s behalf. This object is available in API version 28.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailDomainKey](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emaildomainkey.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AlternatePublicKey | Alternate Public Key | textarea |  | 32000 |  |  |
| AlternateSelector | Alternate Selector | string |  | 63 |  |  |
| AlternateTxtRecordName | Alternate TXT Record Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Domain | Domain | string |  | 255 |  |  |
| DomainMatch | Domain Match | picklist |  | 255 |  |  |
| DomainMatchPattern | Domain Match Pattern | string |  | 255 |  |  |
| Id | Email Domain Key ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| KeySize | Key Size | int | 9 |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PlatformType | Platform Type | picklist |  | 255 |  |  |
| PublicKey | Public Key | textarea |  | 32000 |  |  |
| Selector | Selector | string |  | 63 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusMessage | Status Message | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ThirdSelector | Third Selector | string |  | 63 |  |  |
| ThirdTxtRecordName | Third TXT Record Name | string |  | 255 |  |  |
| TxtRecordName | TXT Record Name | string |  | 255 |  |  |
| TxtRecordsPublishState | TXT Record Status | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
