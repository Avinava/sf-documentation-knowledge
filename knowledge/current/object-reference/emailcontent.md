---
title: "EmailContent"
domain: object-reference
topic: emailcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.325Z
estimatedTokens: 1507
keywords: [EmailContent, marketing, email, asset, Account, Engagement, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# EmailContent

> Represents a marketing email asset for use with Account
			Engagement. This object is available in API version 50.0 and later.

# EmailContent

Represents a marketing email asset for use with Account Engagement. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

EmailContent is only available for orgs that use Account Engagement. The Manage Email Content user permission is required. Users also need the CRM User, Sales, or Service User permission set. EmailContent isn’t available for custom portal or guest users.

## Fields

| Field | Details |
| --- | --- |
| ClickThroughRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of visitors who click links contained in emails delivered (sent minus bounces) to them. Multiple clicks for a same link are counted. |
| ClickToOpenRatio | TypepercentPropertiesFilter, Nillable, SortDescriptionThe number of unique clicks divided by unique HTML opens. |
| DeliveryRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of the emails that were delivered compared to the number that bounced (soft and hard). Note: this data includes emails that were delivered to the recipient's spam folder. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the email content, for example, Promotion Mass Mailing. |
| HtmlBody | TypetextareaPropertiesNillableDescriptionThe body of the email in HTML format. The field is read-only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp that indicates when the current user last viewed the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, the record could have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the email asset. |
| OpenRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of unique HTML opens compared to the total number of emails delivered (sent minus bounces). |
| OptOutRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of users that have opted out compared to the total number of emails sent. |
| SpamComplaintRate | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of spam complaints compared to the total number emails sent. |
| Subject | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionContent of the subject line. |
| TemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Email Template field is mostly read-only. You can populate the Email Template field only during record create to prevent overwriting data on the email content record. |
| TextBody | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe body of the email in plain text format. The character limit is 384, 000. |
| TotalDelivered | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of emails minus hard and soft bounces. Note: this data includes emails that were delivered to the recipient's spam folder. |
| TotalHardBounced | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe total number of emails that permanently returned to the sender because the address is invalid. A hard bounce can occur because the domain name doesn't exist or because the recipient is unknown. |
| TotalOpens | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe total number of times a prospect’s email client loaded the images in the HTML version of the email. We also record an open if the prospect clicks a link within the HTML or text email without downloading images. A click indicates that they viewed the message. Some email clients (Outlook, Apple Mail, Thunderbird) do not display images by default. Account Engagement counts an open each time the images load. |
| TotalSent | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The total number of list emails sent, including bounced, opted-out, and invalid To: addresses. |
| TotalSoftBounced | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The total number of times a recipient’s mail server acknowledged the email, but returned it to the sender. Sometimes it is because the recipient's mailbox is full or the mail server is temporarily unavailable. After 5 soft bounces, Account Engagement opts the prospect out of emails. |
| TotalSpamComplaints | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The total number of prospects that reported the email as spam. |
| TotalTrackedLinkClicks | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The number of times prospects clicked a link in the email. |
| UniqueClickThroughRate | TypepercentPropertiesFilter, Nillable, SortDescriptionRead-only field. The percentage of visitors who clicked a link contained in an email |
| UniqueOpens | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The number of prospects who loaded the images in the HTML version of the email. The Unique Opens category counts each recipient only one time, even if the prospect loaded images more than once. |
| UniqueOptOuts | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The total number of prospects that have clicked the link to unsubscribe or opted out of all emails in the Email Preference Center. They are removed from future email sends. |
| UniqueTrackedLinkClicks | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only field. The number of times a prospect clicked a link in the email. This metric doesn’t include multiple clicks of the same link. |
