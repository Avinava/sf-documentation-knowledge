---
title: "ActionCdncStpMonthlyMetric"
domain: object-reference
topic: actioncdncstpmonthlymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.875Z
estimatedTokens: 3213
keywords: [ActionCdncStpMonthlyMetric, monthly, engagement, metrics, action, cadence, step, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# ActionCdncStpMonthlyMetric

> Represents the monthly engagement metrics for an action cadence
         step. This object is available in API version 49.0 and later.

# ActionCdncStpMonthlyMetric

Represents the monthly engagement metrics for an action cadence step. This object is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Sales Engagement must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceStepId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related action cadence step.This is a relationship field.Relationship NameActionCadenceStepRelationship TypeThis is an overview-detail relationship field, where ActionCadenceStep is the master object.Refers ToActionCadenceStep |
| AllCallsCallBackLater | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this step with the call result Call Back Later. |
| AllCallsLeftVoicemail | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this step with the call result Left Voicemail. |
| AllCallsMeaningfulConnect | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this step with the call result Meaningful Connect. |
| AllCallsNotInterested | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this step with the call result Not Interested. |
| AllCallsUncategorized | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this step with no call result specified. |
| AllCallsUnqualified | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls in the month for this step with the call result Unqualified. |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total of hard and soft bounced emails for this step in the month.This is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successfully delivered emails for this step in the month.This is a calculated field. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of hard bounced emails for this step in the month. |
| AllEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails containing a link clicked by the recipient for this step in the month. |
| AllEmailsNotDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of sent emails that were bounced for all recipients on the email. Bounced emails aren’t marked as delivered. Available in API version 54.0 and later. |
| AllEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails opened by the recipient for this step in the month. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that triggered an out-of-office reply for this step in the month. |
| AllEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails replied to for this step in the month. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent for this step in the month.This is a calculated field. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails soft bounced for this step in the month. |
| AllEmailsTrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with engagement tracking enabled for this step in the month. Available in API version 51.0 and later. |
| AllEmailsUntrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent without engagement tracking for this step in the month. Available in API version 51.0 and later. |
| AllTotalCallsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of calls with all call results for this step in the month.This is a calculated field. |
| DeliveredRecipientCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that were successfully delivered an email. Available in API version 54.0 and later.This field is a calculated field. |
| DeliveredRecipientRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of unique recipients that received an email you sent. Available in API version 54.0 and later.This field is a calculated field. |
| HardBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with hard bounce tracking. Available in API version 54.0 and later. |
| HasTemplateAssigned | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this step has an associated email template or call script. Available in API version 52.0 and later.The default value is 'false'. |
| HrdBncTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with hard bounce tracking. Available in API version 54.0 and later. |
| IsCompoundMetric | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhen true, indicates that this metric represents engagement for a combination of the action cadence step and a single email template. The value is true for all action cadence steps created in Summer ’21 and later.When false, indicates that the metric represents engagement for the action cadence step and all email templates used on the step. The value is false for all action cadence steps created in Spring ’21 and earlier. The default value is 'false'.Available in API version 52.0 and later. |
| LinkClickTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with link click tracking. Available in API version 54.0 and later. |
| LinkClkTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with link tracking. Available in API version 54.0 and later. |
| Month | TypedatePropertiesFilter, Group, SortDescriptionThe month in which the engagement occurred. |
| MonthInt | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe month in which the engagement occurred, in yyyymm format. |
| OooTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with out-of-office tracking. Out-of-office tracking requires Inbox. Available in API version 54.0 and later. |
| OpenTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with open tracking. Available in API version 54.0 and later. |
| OpenTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with open tracking. Available in API version 54.0 and later. |
| OutOfOfficeTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with out-of-office tracking. Available in API version 54.0 and later. |
| RecipientReplies | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who replied to an email. Available in API version 54.0 and later. |
| RecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique email recipients. Available in API version 54.0 and later. |
| RecipientsHardBounced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that hard-bounced an email. Hard bounces can mean that the recipient's email address doesn't exist or is misspelled. Available in API version 54.0 and later. |
| RecipientsOutOfOffice | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that responded with an out-of-office reply. Available in API version 54.0 and later. |
| RecipientsSoftBounced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that soft-bounced an email. A soft bounce often indicates a temporary issue with the recipient's email server, such as a full inbox. Available in API version 54.0 and later. |
| ReplyTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with reply tracking. Available in API version 54.0 and later. |
| ReplyTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with reply tracking. Available in API version 54.0 and later. |
| SftBncTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with soft bounce tracking. Available in API version 53.0 and later. |
| SoftBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with soft bounce tracking. Available in API version 54.0 and later. |
| SomeEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of sent emails that were successfully delivered to at least one of its recipients. Available in API version 54.0 and later.This field is a calculated field. |
| SomeEmailsDeliveredRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of sent and tracked emails that were successfully delivered to at least one of their recipients. Available in API version 54.0 and later.This field is a calculated field. |
| TemplateId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the email template or call script associated with this step. Available in API version 52.0 and later.This is a polymorphic relationship field.Relationship NameTemplateRelationship TypeLookupRefers ToCallTemplate, EmailTemplate |
| TrackableRecipientSendHrdBncRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to unique recipients with hard bounce tracking that hard bounced. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendOooRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that received out-of-office replies from unique recipients. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendReplyRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies from unique recipients. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableRecipientSendSftBncRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to unique recipients with soft bounce tracking that soft-bounced. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendHardBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with hard bounce tracking that hard bounced. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendLinkClickRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with link tracking that had link clicks. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendOpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with open tracking that were opened by the recipient. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendOutOfOfficeRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that received out-of-office replies. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendReplyRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies. Available in API version 54.0 and later.This field is a calculated field. |
| TrackableSendSoftBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with soft bounce tracking that soft bounced. Available in API version 54.0 and later.This field is a calculated field. |
| UniqueEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who clicked a link in an email for this step in the month. |
| UniqueEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who opened an email for this step in the month. |
| UniqueEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who replied to an email for this step in the month. |
