---
title: "Email Publication DMO"
domain: data-cloud
topic: email-publication-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.956Z
estimatedTokens: 1765
keywords: [Email, Publication, DMO, Data, Cloud, data, model, contains, information, publication, such, campaign, orchestration, used, channel, API, Name, Category, Primary, Subject]
---

# Email Publication DMO

> The Email Publication DMO is a Data Cloud data model object (DMO) that
      contains information about a publication such as a campaign or an orchestration used in the
      Email channel

# Email Publication DMO

The Email Publication DMO is a Data Cloud data model object (DMO) that contains information about a publication such as a campaign or an orchestration used in the Email channel

## Object API Name

ssot\_\_EmailPublication\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Email Publication Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Object | Field | Cardinality | Related Object | Related Field |
| Email Engagement | Engagement Publication | ManyToOne | Email Publication | Email Publication Id |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Body Text | ssot__BodyTxt__c | The text representation of an Email message. | text |
| Click Through Percent | ssot__ClickThroughPct__c | The percentage of emails sent which contained a tracked URL that was clicked by the recipient. | number |
| Click To Open Percent | ssot__ClickToOpenPct__c | The quantity of emails where the tracked URL was clicked, compared with the quantity that were opened, expressed as a percentage. | number |
| Created Date | ssot__CreatedDate__c | The date and time record was created. | datetime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by External Record Id. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where the record came from, whether that is the name of a cloud storage file or another connector’s external object. | text |
| Delivery Percent | ssot__DeliveryPct__c | The percentage of emails sent based on this template that were successfully delivered. | number |
| Description | ssot__Description__c | Detailed description of an in-person appointment. | text |
| Duration Seconds Quantity | ssot__DurationSecondsQty__c |  | number |
| Email Publication Id | ssot__Id__c | A unique ID used as the primary key for Email Publication Id. | text |
| Engagement Asset | ssot__EnagementAssetId__c | A reference ID to the engagement asset. | text |
| Engagement Asset content | ssot__EnagementAssetContentId__c | A reference ID to the engagement asset content. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the type of engagement channel. | text |
| Engagement Publication Number | ssot__EngagementPublicationNbr__c | The engagement publication number. | text |
| Engagement Publication Status | ssot__EngagementPublicationStatusId__c | The engagement publication status. | text |
| Engagement Publication Type | ssot__EnagementPublicationTypeId__c | The engagement publication type. | text |
| Engagement Topic Group | ssot__EngagementTopicGroupId__c | A reference ID for the master list of topics that Engagements can be about. | text |
| Error Message Text | ssot__ErrorMessageTxt__c | The text of the error message | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID for the system in which the External Record ID was assigned. | text |
| Failed Record Count | ssot__FailedRecordCt__c |  | number |
| From Address | ssot__FromAddr__c | Email address from which the emails are sent | text |
| From Name | ssot__FromName__c | The name of the person the email is from. | text |
| Has Attachment | ssot__HasAttachment__c | True if an attachment is included in this email. | text |
| HTML Body | ssot__HTMLBodyTxt__c | The HTML rendering of the email body. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to a business unit or other internal organization that owns the business account. | text |
| Is Tracked | ssot__IsTracked__c |  | text |
| Last Modified Date | ssot__LastModifiedDate__c | Date and time when the user last modified the record. | datetime |
| Name | ssot__Name__c | The name of the Email publication. | text |
| Open Percent | ssot__OpenPct__c | The number of emails opened compared to the number of emails sent, expressed as a percentage. | number |
| Opt Out Percent | ssot__OptOutPct__c | The quantity of emails that resulted in unsubscription, compared to the total number sent, expressed as a percentage. | number |
| Parent Engagement Publication | ssot__ParentEngagementPublicationId__c | A reference ID for another publication. This relationship enables engagement publication hierarchies. | text |
| Publication Attempts Number | ssot__PublicationAttemptsNbr__c |  | number |
| Publication Status Date | ssot__PublicationStatusDt__c |  | datetime |
| Reply to Address | ssot__ReplyToAddr__c | The reply-to address set on the generated emails. | text |
| Scheduled Date | ssot__ScheduledDt__c | The scheduled date and time to send the email to recipients. | datetime |
| Send Classification | ssot__SendClassificationId__c | A reference ID that determines how consent is checked. Enum values: Transactional (for example, placing an order implies opt-in for an order confirmation email), Commercial (promotional email requiring opt-in) | text |
| Send Mechanism Name | ssot__SendMechanismName__c | The mechanism used to send this email. | text |
| Successful Record Count | ssot__SuccessfulRecordCt__c |  | number |
| Total Delivered Quantity | ssot__TotalDeliveredQty__c | The number of times emails based on this template have been successfully delivered. | number |
| Total Hard Bounce Quantity | ssot__TotalHardBounceQty__c | The number of times emails based on this template have hard bounced due to invalid email addresses. | number |
| Total Opens Quantity | ssot__TotalOpensQty__c | The number of times emails based on this template have been opened. | number |
| Total Publication Items Count | ssot__TotalPublicationItemsCt__c |  | number |
| Total Sent Quantity | ssot__TotalSentQty__c | The number of emails sent. | number |
| Total Soft Bounce Quantity | ssot__TotalSoftBounceQty__c | The number of times emails based on this template have soft bounced (returned by server). | number |
| Total Spam Complaints Quantity | ssot__TotalSpamComplaintsQty__c | The number of emails that were reported as spam. | number |
| Total Tracked Link Clicks Quantity | ssot__TotalTrackedLinkClicksQty__c | The number of tracked URLs in emails that were opened. | number |
| Unique Click Through Percent | ssot__UniqueClickThroughPct__c | The percentage of emails sent which contained a tracked URL that was clicked by unique recipients. | number |
| Unique Opens Quantity | ssot__UniqueOpensQty__c | The number of emails that were opened by unique recipients. | number |
| Unique Opt Outs Quantity | ssot__UniqueOptOutsQty__c | The total number of emails that resulted in recipients unsubscribing. | number |
| Unique Tracked Link Clicks Quantity | ssot__UniqueTrackedLinkClicksQty__c | The number of tracked URLs in emails that were opened by unique recipients. | number |
