---
title: "SMS Template DMO"
domain: data-cloud
topic: sms-template-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.639Z
estimatedTokens: 959
keywords: [SMS, Template, DMO, Data, Cloud, model, reusable, standard, text, messages, API, Category, Primary, Subject, Area]
---

# SMS Template DMO

> The SMS Template DMO is a Data Cloud data model object (DMO) for a
      reusable, standard format for text (SMS) messages.

# SMS Template DMO

The SMS Template DMO is a Data Cloud data model object (DMO) for a reusable, standard format for text (SMS) messages.

## Object API Name

ssot\_\_SMSTemplate\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

SMS Template ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Device Application Engagement | Engagement Asset | Many To One (N:1) | SMS Template | SMS Template ID |
| Email Engagement | Engagement Asset | Many To One (N:1) | SMS Template | SMS Template ID |
| Message Engagement | Engagement Asset | Many To One (N:1) | SMS Template | SMS Template ID |
| Device Application Template | Device Application Template ID | Many To One (N:1) | SMS Template | SMS Template ID |
| SMS Template | Parent Engagement Asset | Many To One (N:1) | Device Application Template | Device Application Template ID |
| Email Publication | Engagement Asset | Many To One (N:1) | SMS Template | SMS Template ID |
| SMS Template | Parent Engagement Asset ID | Many To One (N:1) | Email Template | Email Template ID |
| Email Template | Parent Engagement Asset | Many To One (N:1) | SMS Template | SMS Template ID |
| Product Browse Engagement | Engagement Asset | Many To One (N:1) | SMS Template | SMS Template ID |
| Product Order Engagement | Engagement Asset ID | Many To One (N:1) | SMS Template | SMS Template ID |
| Shopping Cart Engagement | Engagement Asset ID | Many To One (N:1) | SMS Template | SMS Template ID |
| SMS Publication | Engagement Asset ID | Many To One (N:1) | SMS Template | SMS Template ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Engagement Asset Number | ssot__EngagementAssetNbr__c | The engagement asset number. | text |
| Engagement Asset Type | ssot__EngagementAssetTypeId__c | A reference ID to the type of engagement asset | text |
| Engagement Message Type | ssot__EngagementMessageTypeId__c | A reference ID to the engagement message type. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Message Format Type | ssot__MessageFormatTypeId__c | A reference ID to the format type of the message. | text |
| Name | ssot__Name__c | The name of the SMS engagement. | text |
| Parent Engagement Asset | ssot__ParentEngagementAssetId__c | A reference ID to the associated parent engagement asset. | text |
| Send Classification | ssot__SendClassificationId__c | A reference ID to the two types of send classifications: Transactional (placing an order implies opt-in for an order confirmation email) or Commercial (promotional email requiring opt-in). | text |
| SMS Template Body text | ssot__SMSTemplateBodyTxt__c | The body of the SMS message. | text |
| SMS Template ID | ssot__Id__c | A unique ID used as primary key for the SMS Template DMO. | text |
