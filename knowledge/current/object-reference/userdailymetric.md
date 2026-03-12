---
title: "UserDailyMetric"
domain: object-reference
topic: userdailymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.744Z
estimatedTokens: 2192
keywords: [UserDailyMetric, daily, engagement, metrics, user, API, version, 52.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# UserDailyMetric

> Represents the daily engagement metrics for a user. This object is
      available in API version 52.0 and later.

# UserDailyMetric

Represents the daily engagement metrics for a user. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Sales Engagement must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AllCallsCallBackLater | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this user with the call result Call Back Later. |
| AllCallsLeftVoicemail | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this user with the call result Left Voicemail. |
| AllCallsMeaningfulConnect | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this user with the call result Meaningful Connect. |
| AllCallsNotInterested | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this user with the call result Not Interested. |
| AllCallsUncategorized | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this user with no call result specified. |
| AllCallsUnqualified | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this user with the call result Unqualified. |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total of hard and soft bounced emails for this user in the day.This is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successfully delivered emails for this user in the day.This is a calculated field. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of hard bounced emails for this user in the day. |
| AllEmailsNotDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that were undelivered for all recipients on the email. Available in API version 54.0 and later.This is a calculated field. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that triggered an out-of-office reply for this user in the day. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user in the day.This is a calculated field. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails soft bounced for this user in the day. |
| AllEmailsTrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user with engagement tracking enabled in the day. |
| AllEmailsUntrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent by this user without engagement tracking enabled in the day. |
| AllTotalCallsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of calls by this user with all call results in the day.This is a calculated field. |
| DailyCutOffTimeStamp | TypedateTimePropertiesFilter, SortDescriptionThe time of day when each 24-hour metrics period starts and ends. |
| Date | TypedatePropertiesFilter, Group, SortDescriptionThe date on which the engagement occurred. |
| DateInt | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe date on which the engagement occurred, in yyyymmdd format. |
| HardBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with hard bounce tracking. Available in API version 53.0 and later. |
| LinkClickTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with link click tracking. Available in API version 53.0 and later. |
| OpenTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with open tracking. Available in API version 53.0 and later. |
| OutOfOfficeTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with out-of-office tracking. Available in API version 53.0 and later. |
| RecipientReplies | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who responded to an email. Available in API version 53.0 and later. |
| RecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who were sent an email. Available in API version 53.0 and later. |
| ReplyTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent an email with reply tracking. Available in API version 53.0 and later. |
| ReplyTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with reply tracking. Available in API version 53.0 and later. |
| SoftBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with soft bounce tracking. Available in API version 53.0 and later. |
| SomeEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that were successfully delivered to at least one recipient on the email. Available in API version 54.0 and later.This is a calculated field. |
| SomeEmailsDeliveredRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails that were successfully delivered to at least one recipient on the email. Available in API version 54.0 and later.This is a calculated field. |
| TrackableRecipientSendReplyRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies from unique recipients. Available in API version 53.0 and later.This is a calculated field. |
| TrackableSendHardBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with hard bounce tracking that hard bounced. Available in API version 54.0 and later.This is a calculated field. |
| TrackableSendLinkClickRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with link tracking that had link clicks. Available in API version 53.0 and later.This is a calculated field. |
| TrackableSendOpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with open tracking that were opened by a recipient. Available in API version 53.0 and later.This is a calculated field. |
| TrackableSendOutOfOfficeRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that received out-of-office replies. Available in API version 54.0 and later.This is a calculated field. |
| TrackableSendReplyRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies. Available in API version 53.0 and later.This is a calculated field. |
| TrackableSendSoftBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with soft bounce tracking that soft bounced. Available in API version 54.0 and later.This is a calculated field. |
| UniqueEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who clicked a link in an email sent by the user on the day. |
| UniqueEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who opened an email sent by the user on the day. |
| UniqueEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who replied to an email sent by the user on the day. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related user.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserDailyMetricOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdailymetricownersharingrule.htm "Represents the rules for sharing the user daily metric with users other than the owner.")

Sharing rules are available for the object.

[UserDailyMetricShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserDailyMetricOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_userdailymetricownersharingrule.htm)
- UserDailyMetricShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
