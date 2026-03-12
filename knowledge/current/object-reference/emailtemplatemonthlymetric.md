---
title: "EmailTemplateMonthlyMetric"
domain: object-reference
topic: emailtemplatemonthlymetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.482Z
estimatedTokens: 3056
keywords: [EmailTemplateMonthlyMetric, monthly, engagement, metrics, email, template, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# EmailTemplateMonthlyMetric

> Represents the monthly engagement metrics for an email template. This
      object is available in API version 53.0 and later.

# EmailTemplateMonthlyMetric

Represents the monthly engagement metrics for an email template. This object is available in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Sales Engagement must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AllEmailsBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total of hard and soft bounced emails for this email template in the month.This is a calculated field. |
| AllEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of successfully delivered emails for this email template in the month.This is a calculated field. |
| AllEmailsHardBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of hard bounced emails for this email template in the month. |
| AllEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails containing a link clicked by the recipient for this email template in the month. |
| AllEmailsNotDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails not delivered for this email template in the month. This field is available in API version 54.0 and later. |
| AllEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails opened by the recipient for this email template in the month. |
| AllEmailsOutOfOfficeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails that triggered an out-of-office reply for this email template in the month. |
| AllEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails replied to for this email template in the month. |
| AllEmailsSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent for this email template in the month.This is a calculated field. |
| AllEmailsSoftBouncedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails soft bounced for this email template in the month. |
| AllEmailsTrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with engagement tracking enabled for this email template in the month. |
| AllEmailsUntrackedSentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent without engagement tracking for this email template in the month. |
| DeliveredRecipientCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who were successfully delivered an email for this email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| DeliveredRecipientRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of unique recipients that received an email you sent. This field is available in API version 54.0 and later.This is a calculated field. |
| EmailTemplateId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related email template.This is a relationship field.Relationship NameEmailTemplateRelationship TypeLookupRefers ToEmailTemplate |
| HardBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with hard bounce tracking. This field is available in API version 54.0 and later. |
| HrdBncTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with hard bounce tracking. This field is available in API version 54.0 and later. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the monthly metric record is locked or not.The default value is 'false'. |
| LinkClickTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with link click tracking for the email template in the month. This field is available in API version 54.0 and later. |
| LinkClkTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with link tracking for the email template in the month. This field is available in API version 54.0 and later. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the monthly metric record can be edited or not.The default value is 'false'. |
| Month | TypedatePropertiesFilter, Group, SortDescriptionThe month in which the engagement occurred. |
| MonthInt | TypeintPropertiesFilter, Group, idLookup, SortDescriptionThe month in which the engagement occurred, in yyyymm format. |
| OooTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with out-of-office tracking for the email template in the month. Out-of-office tracking requires Inbox. This field is available in API version 54.0 and later. |
| OpenTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with open tracking for the email template in the month. This field is available in API version 54.0 and later. |
| OpenTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with open tracking for the email template in the month. This field is available in API version 54.0 and later. |
| OutOfOfficeTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with out-of-office tracking for the email template in the month. This field is available in API version 54.0 and later. |
| RecipientReplies | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique recipients who replied to an email for this email template in the month. This field is available in API version 54.0 and later. |
| RecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of unique email recipients for this email template in the month. This field is available in API version 54.0 and later. |
| RecipientsHardBounced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that hard-bounced an email for this email template in the month. Hard bounces can mean that the recipient's email address doesn't exist or is misspelled. This field is available in API version 54.0 and later. |
| RecipientsOutOfOffice | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that responded with an out-of-office reply for the email template in the month. This field is available in API version 54.0 and later. |
| RecipientsSoftBounced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients that soft-bounced an email for the email template in the month. A soft bounce often indicates a temporary issue with the recipient's email server, such as a full inbox. This field is available in API version 54.0 and later. |
| ReplyTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with reply tracking for this email template in the month. This field is available in API version 54.0 and later. |
| ReplyTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with reply tracking for the email template in the month. This field is available in API version 54.0 and later. |
| SftBncTrackableRecipientSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of recipients who received an email with soft bounce tracking for the email template in the month. This field is available in API version 54.0 and later. |
| SoftBounceTrackableSends | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of emails sent with soft bounce tracking for the email template in the month. This field is available in API version 54.0 and later. |
| SomeEmailsDeliveredCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of sent emails that were successfully delivered to at least one of its recipients for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| SomeEmailsDeliveredRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of sent and tracked emails that were successfully delivered to at least one of their recipients for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableRecipientSendHrdBncRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to unique recipients with hard bounce tracking that hard bounced for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableRecipientSendOooRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that received out-of-office replies from unique recipients for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableRecipientSendReplyRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies from unique recipients for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableRecipientSendSftBncRt | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent to unique recipients with soft bounce tracking that soft-bounced for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableSendHardBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with hard bounce tracking that hard bounced for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableSendLinkClickRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with link tracking that had link clicks for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableSendOpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with open tracking that were opened by the recipient for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableSendOutOfOfficeRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with out-of-office tracking that received out-of-office replies for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableSendReplyRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with reply tracking that received replies for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| TrackableSendSoftBounceRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of emails sent with soft bounce tracking that soft bounced for the email template in the month. This field is available in API version 54.0 and later.This is a calculated field. |
| UniqueEmailsLinkClickedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of link clicks by unique recipients for the email template in the month. |
| UniqueEmailsOpenedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times an email you sent was opened by a unique recipient for the email template in the month. When you send a list email, this field increments each time a recipient opens the received email. |
| UniqueEmailsRepliedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of replies from unique recipients for the email template in the month. |
