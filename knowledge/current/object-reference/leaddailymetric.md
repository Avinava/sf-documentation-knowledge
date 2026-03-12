---
title: "LeadDailyMetric"
domain: object-reference
topic: leaddailymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.629Z
estimatedTokens: 1847
keywords: [LeadDailyMetric, daily, engagement, metrics, lead, API, version, 52.0, later, Calls, Special, Access, Rules]
---

# LeadDailyMetric

> Represents the daily engagement metrics for a lead. This object is
      available in API version 52.0 and later.

# LeadDailyMetric

Represents the daily engagement metrics for a lead. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Inbox must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AllCallsCallBackLater | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this lead with the call result Call Back Later. |
| AllCallsLeftVoicemail | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this lead with the call result Left Voicemail. |
| AllCallsMeaningfulConnect | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this lead with the call result Meaningful Connect. |
| AllCallsNotInterested | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this lead with the call result Not Interested. |
| AllCallsUncategorized | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this lead with no call result specified. |
| AllCallsUnqualified | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the day for this lead with the call result Unqualified. |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total of hard and soft bounced emails for this lead in the day.This is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successfully delivered emails for this lead in the day.This is a calculated field. |
| AllEmailsDeliveredRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of tracked emails sent that were successfully delivered to this lead. This field is a calculated field.Available in API version 54.0 and later. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of hard bounced emails for this lead in the day. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that triggered an out of office reply for this lead in the day. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead in the day.This is a calculated field. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails soft bounced for this lead in the day. |
| AllEmailsTrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with engagement tracking enabled in the day. |
| AllEmailsUntrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead without engagement tracking enabled in the day. |
| AllTotalCallsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of calls to this lead with all call results in the day.This is a calculated field. |
| DailyCutOffTimeStamp | TypedateTimePropertiesFilter, SortDescriptionThe time of day when each 24-hour metrics period starts and ends. |
| Date | TypedatePropertiesFilter, Group, SortDescriptionThe date on which the engagement occurred. |
| DateInt | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe date on which the engagement occurred, in yyyymmdd format. |
| HardBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with hard bounce tracking.Available in API version 54.0 and later. |
| InboundEngagementsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of inbound engagements for this lead in the day. This field is a calculated field. The value is the sum of UniqueEmailsOpenedCount, UniqueEmailsRepliedCount, and UniqueEmailsLinkClickedCount.Available in API version 58.0 and later. |
| LeadId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related lead.This is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| LinkClickTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with link click tracking.Available in API version 54.0 and later. |
| OpenTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with open tracking.Available in API version 54.0 and later. |
| OutOfOfficeTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with out-of-office tracking.Available in API version 54.0 and later. |
| OutboundEngagementsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of outbound engagements for this lead in the day. This field is a calculated field. The value is the sum of AllTotalCallsCount and AllEmailsDeliveredCount.Available in API version 58.0 and later. |
| ReplyTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with reply tracking.Available in API version 54.0 and later. |
| SoftBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent to this lead with soft bounce tracking.Available in API version 54.0 and later. |
| TrackableSendHardBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to this lead with hard bounce tracking that hard bounced. This field is a calculated field.Available in API version 54.0 and later. |
| TrackableSendLinkClickRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to this lead with link tracking that had link clicks. This field is a calculated field.Available in API version 54.0 and later. |
| TrackableSendOpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to this lead with open tracking that were opened by the recipient. This field is a calculated field.Available in API version 54.0 and later. |
| TrackableSendOutOfOfficeRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to this lead with out-of-office tracking that received out-of-office replies. This field is a calculated field.Available in API version 54.0 and later. |
| TrackableSendReplyRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to this lead with reply tracking that received replies. This field is a calculated field.Available in API version 54.0 and later. |
| TrackableSendSoftBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to this lead with soft bounce tracking that soft bounced. This field is a calculated field.Available in API version 54.0 and later. |
| UniqueEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of individual emails in which the lead clicked a link in the day. |
| UniqueEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of individual emails opened by the lead in the day. |
| UniqueEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of individual emails replied to by the lead in the day. |
