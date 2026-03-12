---
title: "ListEmailMonthlyMetric"
domain: object-reference
topic: listemailmonthlymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.276Z
estimatedTokens: 1458
keywords: [ListEmailMonthlyMetric, monthly, engagement, metrics, email, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# ListEmailMonthlyMetric

> Represents the monthly engagement metrics for a single list email. This
      object is available in API version 49.0 and later.

# ListEmailMonthlyMetric

Represents the monthly engagement metrics for a single list email. This object is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Sales Engagement must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total hard and soft bounces that were triggered for this list email in the month.This field is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who successfully received this list email in the month.This field is a calculated field. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total hard bounces that were triggered for this list email in the month. |
| AllEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of link clicks by the recipients of this list email in the month. |
| AllEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who opened this list email in the month. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of out-of-office replies that were triggered for this list email in the month. |
| AllEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of replies to this list email in the month. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients to whom this list email was sent in the month. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total soft bounces that were triggered for this list email in the month. |
| HardBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent this list email with hard bounce tracking in the month. Available in API version 53.0 and later. |
| LinkClickTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent this list email with link click tracking in the month. Available in API version 53.0 and later. |
| ListEmailId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related list email.This field is a relationship field.Relationship NameListEmailRelationship TypeLookupRefers ToListEmail |
| Month | TypedatePropertiesFilter, Group, SortDescriptionThe month in which the engagement occurred. |
| MonthInt | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe month in which the engagement occurred, in yyyymm format. |
| OpenTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent this list email with open tracking in the month. Available in API version 53.0 and later. |
| OutOfOfficeTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent this list email with out-of-office tracking in the month. Available in API version 53.0 and later. |
| ReplyTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent this list email with reply tracking in the month. Available in API version 53.0 and later. |
| SoftBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were sent this list email with soft bounce tracking in the month. Available in API version 53.0 and later. |
| TrackableSendHardBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of recipients for whom this list email, sent with hard bounce tracking, resulted in a hard bounce in the month. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendLinkClickRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of recipients who clicked on a link in this list email that was sent with link click tracking in the month. Available in API version 53.0 and later.This field is a calculated field. |
| TrackableSendOpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of recipients who opened this list email that was sent with open tracking in the month. Available in API version 53.0 and later.This field is a calculated field. |
| TrackableSendOutOfOfficeRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of recipients for whom the list email, sent with out-of-office tracking, resulted in an out-of-office reply in the month. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendReplyRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of recipients for whom this list email, sent with reply tracking, resulted in a reply in the month. Available in API version 53.0 and later.This field is a calculated field. |
| TrackableSendSoftBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of recipients for whom this list email, sent with soft bounce tracking, resulted in a soft bounce in the month. Available in API version 54.0 and later.This field is a calculated field. |
| UniqueEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who clicked a link in this list email in the month. |
| UniqueEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who opened this list email in the month. |
| UniqueEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who replied to this list email in the month. |
