---
title: "Email Message DMO"
domain: data-cloud
topic: email-message-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.698Z
estimatedTokens: 1359
keywords: [Email, Message, DMO, Data, Cloud, model, usually, text, possibly, HTML, including, attachments, sent, received, over]
---

# Email Message DMO

> The Email Message DMO is a Data Cloud data model object (DMO) for an
      email message, usually text, but possibly HTML, including attachments sent or received over
      the network.

# Email Message DMO

The Email Message DMO is a Data Cloud data model object (DMO) for an email message, usually text, but possibly HTML, including attachments sent or received over the network.

## Object API Name

ssot\_\_EmailMessage\_\_dlm

## Category

Engagement

## Primary Subject Area

## Primary Key

Email Message ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Email Message | Case ID | Many To One: N:1 | Case | Case ID |
| Email Message | Created By | Many To One: N:1 | User | User ID |
| Email Message | Last Modified By | Many To One: N:1 | User | User ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Case Id | ssot__CaseId__c | A reference ID to the associated case. | text |
| Channel Engagement Number | ssot__ChannelEngagementNumber__c | The channel engagement number for the email messagel. | text |
| Country Region | ssot__CountryRegion__c | The country or region for the email message. | text |
| Created By | ssot__CreatedById__c | A reference ID to the user who created the record. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Created Date Time | ssot__CreatedDateTime___c | The time the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Email Header | ssot__EmailHeaderText__c | The header text for the email message. | text |
| Email Message | ssot__EmailMessageText__c | The message text for the email message. | text |
| Email Message Id | ssot__Id__c | A unique ID used as the primary key for the email message DMO. | text |
| Email Status | ssot__EmailStatus__c | The status of the email message. | text |
| Email Subject | ssot__EmailSubjectText__c | The subject text for the email message. | text |
| Email Thread | ssot__EmailThreadId__c | A reference ID to the email thread the message is associated with. | text |
| Engagement Channel Type | ssot__EngagementChannelType__c | The engagement channel type for the email message. | text |
| External BCC Email Address List | ssot__ExternalBCCEmailAddressListText__c | The external BCC email address list for the email message. | text |
| First Open Date | ssot__FirstOpenDate__c | The date the message was first opened. | dateTime |
| From Address | ssot__FromAddress__c | The from address of the email message. | text |
| From Name | ssot__FromName__c | The from name of the email message. | text |
| HasRelatedDocument | ssot__HasRelatedDocument__c | An indicator if the email message has a related document. | text |
| HTML Body | ssot__HTMLBodyText__c | The HTML body text for the email message. | text |
| Internal BCC Email Address List | ssot__InternalBCCEmailAddressListText__c | The internal BCC email address list for the email message. | text |
| Internal CC Email Address List | ssot__InternalCCEmailAddressListText__c | The internal CC email address list for the email message. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the email message. | text |
| Is Bounced | ssot__IsBounced__c | An indicator if the email message has bounced. | text |
| Is Incoming | ssot__IsIncoming__c | An indicator if the email message is an incoming message. | text |
| Is Opened | ssot__IsOpened__c | An indicator if the email message has been opened. | text |
| Is Private Draft | ssot__IsPrivateDraft__c | An indicator if the email message is a private draft. | text |
| Is Tracked | ssot__IsTracked__c | An indicator if the email message is tracked. | text |
| Last Modified By | ssot__LastModifiedById__c | A reference ID to the user that made the last update. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lastest Open Date | ssot__LastestOpenDate__c | The date the message was opened last. | dateTime |
| Market Journey Activity | ssot__MarketJourneyActivity__c | The market journey activity for the email message. | text |
| Message Date | ssot__MessageDate__c | The date the email message was sent. | dateTime |
| Message Purpose | ssot__MessagePurpose__c | The purpose for the email message. | text |
| Name | ssot__Name__c | The name of the case. | text |
| Related To | ssot__RelatedToId__c | A reference ID to the related item for the email message. | text |
| Related To Object | ssot__RelatedToObject__c | The related object for the message. | text |
| Reply To Address | ssot__ReplyToAddress__c | The reply to address for the email message. | text |
| Reply To Email Message | ssot__ReplyToEmailMessageId__c | A reference ID to the reply to message for the email message. | text |
| Software Application | ssot__SoftwareApplication__c | The software application for the email message. | text |
| Subject | ssot__Subject__c | The subject for the email message. | text |
| To Email Address List | ssot__ToEmailAddressListText__c | The to email address list for the email message. | text |
