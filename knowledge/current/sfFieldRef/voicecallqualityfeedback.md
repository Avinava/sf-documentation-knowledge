---
title: "VoiceCallQualityFeedback"
domain: sfFieldRef
topic: voicecallqualityfeedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.784Z
estimatedTokens: 311
keywords: [VoiceCallQualityFeedback, feedback, Sales, Dialer, user, quality, VoiceCall]
---

# VoiceCallQualityFeedback

> Represents feedback given by a Sales Dialer user about the quality of
			a VoiceCall
			.

# VoiceCallQualityFeedback

Represents feedback given by a Sales Dialer user about the quality of a VoiceCall .

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VoiceCallQualityFeedback](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecallqualityfeedback.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FeedbackText | Feedback Text | textarea |  | 32000 |  |  |
| FeedbackType | Feedback Type | string |  | 255 |  |  |
| Id | VoiceCallQualityFeedback ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VoiceCallId | Voice Call ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
