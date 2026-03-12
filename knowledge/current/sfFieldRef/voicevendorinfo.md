---
title: "VoiceVendorInfo"
domain: sfFieldRef
topic: voicevendorinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.876Z
estimatedTokens: 422
keywords: [VoiceVendorInfo, Service, Cloud, Voice, Sales, Dialer, provider’s, vendor]
---

# VoiceVendorInfo

> Represents information about the Service Cloud Voice or Sales Dialer provider’s vendor.

# VoiceVendorInfo

Represents information about the Service Cloud Voice or Sales Dialer provider’s vendor.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VoiceVendorInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicevendorinfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorporateNumber | Corporate Number | phone |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Voice Vendor Info ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsCallerIdTwilioVerified | Is the caller ID phone number for the org verified with Twilio and using STIR/SHAKEN | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsStirShakenEnrolled | Is the org using STIR/SHAKEN protocols from Twilio | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LocalPresenceDefaultNumber | LocalPresence Default Number | phone |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TenantConfigVersion | Tenant Configuration Version | string |  | 10 |  |  |
| VendorAccountKey | Vendor Account Key | string |  | 255 |  |  |
| VendorProviderName | Vendor Provider Name | string |  | 255 |  |  |
| VendorType | Vendor Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
