---
title: "UserMonthlyMetric"
domain: sfFieldRef
topic: usermonthlymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.151Z
estimatedTokens: 1350
keywords: [UserMonthlyMetric, monthly, engagement, metrics, user]
---

# UserMonthlyMetric

> Represents the monthly engagement metrics for a user.

# UserMonthlyMetric

Represents the monthly engagement metrics for a user.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserMonthlyMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_UserMonthlyMetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllCallsCallBackLater | All Calls Call Back Later Count | int | 9 |  |  |  |
| AllCallsLeftVoicemail | All Calls Left Voicemail Count | int | 9 |  |  |  |
| AllCallsMeaningfulConnect | All Calls Meaningful Connect Count | int | 9 |  |  |  |
| AllCallsNotInterested | All Calls Not Interested Count | int | 9 |  |  |  |
| AllCallsUncategorized | All Calls Uncategorized Count | int | 9 |  |  |  |
| AllCallsUnqualified | All Calls Unqualified Count | int | 9 |  |  |  |
| AllEmailsBouncedCount | All Emails Bounced Count | int | 9 |  |  |  |
| AllEmailsDeliveredCount | All Emails Delivered Count | int | 9 |  |  |  |
| AllEmailsHardBouncedCount | All Emails Hard Bounced Count | int | 9 |  |  |  |
| AllEmailsLinkClickedCount | All Emails Link Clicked Count | int | 9 |  |  |  |
| AllEmailsNotDeliveredCount | All Emails Not Delivered Count | int | 9 |  |  |  |
| AllEmailsOpenedCount | All Emails Opened Count | int | 9 |  |  |  |
| AllEmailsOutOfOfficeCount | All Emails Out of Office Count | int | 9 |  |  |  |
| AllEmailsRepliedCount | All Emails Replied Count | int | 9 |  |  |  |
| AllEmailsSentCount | All Emails Sent Count | int | 9 |  |  |  |
| AllEmailsSoftBouncedCount | All Emails Soft Bounced Count | int | 9 |  |  |  |
| AllEmailsTrackedSentCount | All Emails Tracked Sent Count | int | 9 |  |  |  |
| AllEmailsUntrackedSentCount | All Emails Untracked Sent Count | int | 9 |  |  |  |
| AllTotalCallsCount | All Total Calls Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliveredRecipientCount | Delivered Recipient Count | int | 9 |  |  |  |
| DeliveredRecipientRate | Delivered Recipient Rate | percent |  |  | 5 | 2 |
| HardBounceTrackableSends | Hard Bounce Trackable Sends | int | 9 |  |  |  |
| HrdBncTrackableRecipientSends | Hard Bounce Trackable Recipient Sends | int | 9 |  |  |  |
| Id | User Monthly Metric ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LinkClickTrackableSends | Link Click Trackable Sends | int | 9 |  |  |  |
| LinkClkTrackableRecipientSends | Link Click Trackable Recipient Sends | int | 9 |  |  |  |
| Month | Month | date |  |  |  |  |
| MonthInt | Month Int | int | 9 |  |  |  |
| OooTrackableRecipientSends | Out Of Office Trackable Recipient Sends | int | 9 |  |  |  |
| OpenTrackableRecipientSends | Open Trackable Recipient Sends | int | 9 |  |  |  |
| OpenTrackableSends | Open Trackable Sends | int | 9 |  |  |  |
| OutOfOfficeTrackableSends | Out Of Office Trackable Sends | int | 9 |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecipientReplies | Recipient Replies | int | 9 |  |  |  |
| RecipientSends | Recipient Sends | int | 9 |  |  |  |
| RecipientsHardBounced | Recipients Hard Bounced | int | 9 |  |  |  |
| RecipientsOutOfOffice | Recipients Out Of Office | int | 9 |  |  |  |
| RecipientsSoftBounced | Recipients Soft Bounced | int | 9 |  |  |  |
| ReplyTrackableRecipientSends | Reply Trackable Recipient Sends | int | 9 |  |  |  |
| ReplyTrackableSends | Reply Trackable Sends | int | 9 |  |  |  |
| SftBncTrackableRecipientSends | Soft Bounce Trackable Recipient Sends | int | 9 |  |  |  |
| SoftBounceTrackableSends | Soft Bounce Trackable Sends | int | 9 |  |  |  |
| SomeEmailsDeliveredCount | Some Emails Delivered Count | int | 9 |  |  |  |
| SomeEmailsDeliveredRate | Some Emails Delivered Rate | percent |  |  | 5 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TrackableRecipientSendHrdBncRt | Trackable Recipient Send Hard Bounce Rate | percent |  |  | 5 | 2 |
| TrackableRecipientSendOooRate | Trackable Recipient Send Out of Office Rate | percent |  |  | 5 | 2 |
| TrackableRecipientSendReplyRt | Trackable Recipient Send Reply Rate | percent |  |  | 5 | 2 |
| TrackableRecipientSendSftBncRt | Trackable Recipient Send Soft Bounce Rate | percent |  |  | 5 | 2 |
| TrackableSendHardBounceRate | Trackable Send Hard Bounce Rate | percent |  |  | 5 | 2 |
| TrackableSendLinkClickRate | Trackable Send Link Click Rate | percent |  |  | 5 | 2 |
| TrackableSendOpenRate | Trackable Send Open Rate | percent |  |  | 5 | 2 |
| TrackableSendOutOfOfficeRate | Trackable Send Out Of Office Rate | percent |  |  | 5 | 2 |
| TrackableSendReplyRate | Trackable Send Reply Rate | percent |  |  | 5 | 2 |
| TrackableSendSoftBounceRate | Trackable Send Soft Bounce Rate | percent |  |  | 5 | 2 |
| UniqueEmailsLinkClickedCount | Unique Emails Link Clicked Count | int | 9 |  |  |  |
| UniqueEmailsOpenedCount | Unique Emails Opened Count | int | 9 |  |  |  |
| UniqueEmailsRepliedCount | Unique Emails Replied Count | int | 9 |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
