---
title: "UserMonthlyMetric"
domain: object-reference
topic: usermonthlymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.855Z
estimatedTokens: 3030
keywords: [UserMonthlyMetric, monthly, engagement, metrics, user, API, version, 52.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# UserMonthlyMetric

> Represents the monthly engagement metrics for a user. This object is
      available in API version 52.0 and later.

# UserMonthlyMetric

Represents the monthly engagement metrics for a user. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Sales Engagement must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AllCallsCallBackLater | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this user with the call result Call Back Later. |
| AllCallsLeftVoicemail | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this user with the call result Left Voicemail. |
| AllCallsMeaningfulConnect | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this user with the call result Meaningful Connect. |
| AllCallsNotInterested | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this user with the call result Not Interested. |
| AllCallsUncategorized | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this user with no call result specified. |
| AllCallsUnqualified | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this user with the call result Unqualified. |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total of hard and soft bounced emails sent by this user in the month.This is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successfully delivered emails sent by this user in the month.This is a calculated field. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of hard bounced emails sent by this user in the month. |
| AllEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails containing a link clicked by the recipient sent by this user in the month. |
| AllEmailsNotDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that were undelivered for all recipients on the email. Available in API version 54.0 and later. |
| AllEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails opened by the recipient sent by this user in the month. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that triggered an out-of-office reply sent by this user in the month. |
| AllEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails replied to for this user in the month. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user in the month.This is a calculated field. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user that soft bounced in the month. |
| AllEmailsTrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user with engagement tracking enabled in the month. |
| AllEmailsUntrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user without engagement tracking enabled in the month. |
| AllTotalCallsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of calls with all call results for this user in the month.This is a calculated field. |
| DeliveredRecipientCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who successfully received an email. Available in API version 53.0 and later.This is a calculated field. |
| DeliveredRecipientRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of unique recipients who successfully received an email. Available in API version 53.0 and later.This is a calculated field. |
| HardBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with hard bounce tracking. Available in API version 53.0 and later. |
| HrdBncTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with hard bounce tracking. Available in API version 53.0 and later. |
| LinkClickTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with link click tracking. Available in API version 53.0 and later. |
| LinkClkTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with link click tracking. Available in API version 53.0 and later. |
| Month | TypedatePropertiesFilter, Group, SortDescriptionThe month in which the engagement occurred. |
| MonthInt | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe month in which the engagement occurred, in yyyymm format. |
| OooTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with out-of-office tracking. Available in API version 53.0 and later. |
| OpenTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with open tracking. Available in API version 53.0 and later. |
| OpenTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with open tracking. Available in API version 53.0 and later. |
| OutOfOfficeTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with out-of-office tracking. Available in API version 53.0 and later. |
| RecipientReplies | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who responded to an email. Available in API version 53.0 and later. |
| RecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who were sent an email. Available in API version 53.0 and later. |
| RecipientsHardBounced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of email recipients who were sent an email that hard bounced. Available in API version 54.0 and later. |
| RecipientsOutOfOffice | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who responded with an out-of-office reply. Available in API version 54.0 and later. |
| RecipientsSoftBounce | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email that soft bounced. Available in API version 54.0 and later. |
| ReplyTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with reply tracking. Available in API version 53.0 and later. |
| ReplyTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with reply tracking. Available in API version 53.0 and later. |
| SftBncTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with soft bounce tracking. Available in API version 53.0 and later. |
| SoftBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with soft bounce tracking. Available in API version 53.0 and later. |
| SomeEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that were successfully delivered to at least one recipient on the email. Available in API version 54.0 and later.This field is a calculated field. |
| SomeEmailsDeliveredRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails that were successfully delivered to at least one recipient on the email. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendHrdBncRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of unique recipients who hard bounced an email with hard bounce tracking. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendOooRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that resulted in out-of-office replies from unique recipients. This field is a calculated field. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendReplyRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies from unique recipients. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendSftBncRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to unique recipients with soft bounce tracking that soft bounced.This field is a calculated field. Available in API version 54.0 and later. |
| TrackableSendHardBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with hard bounce tracking that hard bounced. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendLinkClickRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with link tracking that had link clicks. Available in API version 53.0 and later.This field is a calculated field. |
| TrackableSendOpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with open tracking that were opened by a recipient. Available in API version 53.0 and later.This field is a calculated field. |
| TrackableSendOutOfOfficeRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that received out-of-office replies. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendReplyRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies. Available in API version 53.0 and later.This field is a calculated field. |
| TrackableSendSoftBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with soft bounce tracking that soft bounced. Available in API version 54.0 and later.This field is a calculated field. |
| UniqueEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who clicked a link in an email sent by this user in the month. |
| UniqueEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who opened an email sent by this user in the month. |
| UniqueEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who replied to an email sent by this user in the month. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related user.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserMonthlyMetricOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermonthlymetricownersharingrule.htm "Represents the rules for sharing the user monthly metric with users other than the owner.")

Sharing rules are available for the object.

[UserMonthlyMetricShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserMonthlyMetricOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermonthlymetricownersharingrule.htm)
- UserMonthlyMetricShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
