---
title: "SurveyInvitation"
domain: sfFieldRef
topic: surveyinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.765Z
estimatedTokens: 466
keywords: [SurveyInvitation, invitation, sent, participant, survey]
---

# SurveyInvitation

> Represents the invitation sent to a participant to complete the
			survey.

# SurveyInvitation

Represents the invitation sent to a participant to complete the survey.

For more information, see SurveyInvitation in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommunityId | Network ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmailBrandingId | Survey Email Branding ID | reference |  | 18 |  |  |
| Id | Survey Invitation ID | id |  | 18 |  |  |
| InvitationLink | Invitation Link | url |  | 255 |  |  |
| InviteExpiryDateTime | Invitation Expires On | datetime |  |  |  |  |
| IsDefault | Is Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OptionsAllowGuestUserResponse | Let Guests Respond | boolean |  |  |  |  |
| OptionsAllowParticipantAccessTheirResponse | Can See Their Response | boolean |  |  |  |  |
| OptionsCollectAnonymousResponse | Can Respond Anonymously | boolean |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParticipantId | Participant ID | reference |  | 18 |  |  |
| ResponseStatus | Response Status | picklist |  | 255 |  |  |
| SurveyId | Survey ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UUID | UUID | string |  | 36 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
