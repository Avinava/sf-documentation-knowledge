---
title: "VoiceVendorLine"
domain: sfFieldRef
topic: voicevendorline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.882Z
estimatedTokens: 388
keywords: [VoiceVendorLine, user’s, phone, number, reserved, vendor]
---

# VoiceVendorLine

> Represents a user’s phone number reserved with the
		vendor.

# VoiceVendorLine

Represents a user’s phone number reserved with the vendor.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VoiceVendorLine](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicevendorline.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CallUsageInSecondsLastMonth | Call Usage in Seconds Last Month | int | 8 |  |  |  |
| ConversationChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Voice Vendor Line ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPhoneTwilioVerified | Is the phone number verified with Twilio and using STIR/SHAKEN | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PhoneNumber | PhoneNumber | phone |  | 40 |  |  |
| ShouldRecord | ShouldRecord | boolean |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| VoiceVendorInfoId | Voice Vendor Info ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
