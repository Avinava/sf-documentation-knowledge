---
title: "SMS Publication DMO"
domain: data-cloud
topic: sms-publication-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.943Z
estimatedTokens: 1366
keywords: [SMS, Publication, DMO, Data, Cloud, data, model, process, sends, set, messages, multiple, recipients., API, Name, Category, Primary, Subject, Area, Key]
---

# SMS Publication DMO

> The SMS Publication DMO is a Data Cloud data model object (DMO) for
      the process that sends out a set of SMS messages to multiple recipients.

# SMS Publication DMO

The SMS Publication DMO is a Data Cloud data model object (DMO) for the process that sends out a set of SMS messages to multiple recipients.

## Object API Name

ssot\_\_SMSPublication\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

SMS Publication ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Device Application Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Email Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Email Publication | Parent Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Message Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Product Browse Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Product Order Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Shopping Cart Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| SMS Publication | Engagement Asset | Many To One: N:1 | Device Application Template | Device Application Template ID |
| SMS Publication | Engagement Asset | Many To One: N:1 | SMS Template | SMS Template ID |
| SMS Publication | Parent Engagement Publication | Many To One: N:1 | Email Publication | Email Publication ID |
| SMS Publication | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| SMS Publication | Engagement Asset | Many To One: N:1 | Device Application Template | Device Application Template ID |
| SMS Publication | Parent Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| SMS Publication | Engagement Asset | Many To One: N:1 | Email Template | Email Template ID |
| Web Search Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Website Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to a logical name for a system that is the source of records identified by External Record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to the logical name of the object where the record originated, for example a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | A description of the SMS publication. | text |
| Duration Seconds Quantity | ssot__DurationSecondsQty__c | The number of seconds related to the message. | number |
| Engagement Asset | ssot__EnagementAssetId__c | A reference ID to the engagement asset. | text |
| Engagement Asset Content | ssot__EnagementAssetContentId__c | A reference ID to the engagement asset content. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the type of engagement channel. | text |
| Engagement Publication Number | ssot__EngagementPublicationNbr__c | The number or identifier of an engagement publication. | text |
| Engagement Publication Status | ssot__EngagementPublicationStatusId__c | A reference ID to the status of the engagement publication. | text |
| Engagement Publication Type | ssot__EnagementPublicationTypeId__c | A reference ID to the type of engagement publication. | text |
| Engagement Topic Group | ssot__EngagementTopicGroupId__c | A reference ID to a group of engagement topics. | text |
| Error Message Text | ssot__ErrorMessageTxt__c | The text’s error message. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Failed Record Count | ssot__FailedRecordCt__c | The number of failed records. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the SMS publication. | text |
| Parent Engagement Publication | ssot__ParentEngagementPublicationId__c | A reference ID to the parent record’s engagement publication. | text |
| Publication Attempts Number | ssot__PublicationAttemptsNbr__c | The number of attempts to send the publication. | number |
| Publication Status Date | ssot__PublicationStatusDt__c | The date of SMS publication. | dateTime |
| Send Classification | ssot__SendClassificationId__c | A reference ID to how consent is checked for example transactional or commercial. | text |
| SMS Publication ID | ssot__Id__c | A unique ID used as the primary key for the SMS Publication DMO. | text |
| Successful Record Count | ssot__SuccessfulRecordCt__c | The number of successful records. | number |
| Total Publication Items Count | ssot__TotalPublicationItemsCt__c | The total number of publication items. | number |
