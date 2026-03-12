---
title: "Email Template DMO"
domain: data-cloud
topic: email-template-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:13.965Z
estimatedTokens: 1226
keywords: [Email, Template, DMO, Data, Cloud, data, model, standard, form, email, message, personalized, customized, based, campaign., API, Name, Category, Primary, Subject]
---

# Email Template DMO

> The Email Template DMO is a Data Cloud data model object (DMO) for the
      standard form of an email message that can be personalized and customized based on a
      campaign.

# Email Template DMO

The Email Template DMO is a Data Cloud data model object (DMO) for the standard form of an email message that can be personalized and customized based on a campaign.

## Object API Name

ssot\_\_EmailTemplate\_\_dlm

## Category

Other

## Primary Subject Area

Engagement

## Primary Key

Email Template ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Device Application Engagement | Engagement Asset | ManyToOne | Email Template | Email Template ID |
| Email Engagement | Engagement Asset | ManyToOne | Email Template | Email Template ID |
| Message Engagement | Engagement Asset | ManyToOne | Email Template | Email Template ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| API Version | ssot__APIVersionName__c | The variant number of email API used with template. | text |
| Body | ssot__BodyTxt__c | The content of an email. | text |
| Created Date | ssot__CreatedDate__c | The date record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for logical name for system that is source of records identified by External Record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Delivery Percent | ssot__DeliveryPct__c | The percentage of emails based on template that were successfully delivered. | number |
| Email Template Body Text | ssot__EmailTemplateBodyTxt__c | Text representation of email. | text |
| Email Template ID | ssot__Id__c | A unique ID used as primary key for Email Template DMO. | text |
| Email Template Style | ssot__EmailTemplateStyleId__c | A reference ID for enumeration values of Email Template Style: None, FreeForm, FormalLettter, PromotionRight, PromotionLeft, Newsletter, and Products. | text |
| Email Template Type | ssot__EmailTemplateTypeId__c | A reference ID for enumeration values of email template type, such as text or HTML. | text |
| Engagement Asset Number | ssot__EngagementAssetNbr__c | A number assigned to an engagement asset. | text |
| Engagement Asset Type | ssot__EngagementAssetTypeId__c | A reference ID for the description of an engagement asset type, such as an email or phone. | text |
| Engagement Message Type | ssot__EngagementMessageTypeId__c | A reference ID for the description of an Engagement Message Type. Examples include: Outbound, Location Entry, Location Entry, Beacon. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID for the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when user last modified record. | dateTime |
| Message Format Type | ssot__MessageFormatTypeId__c | A reference ID for description of the format of the asset/template. Examples include Landing Page, Application Alert. | text |
| Name | ssot__Name__c | The engagement’s name. | text |
| Namespace Prefix Text | ssot__NamespacePrefixTxt__c | A value that defines a unique set of email templates. | text |
| Parent Engagement Asset | ssot__ParentEngagementAssetId__c | A reference ID to the parent record’s engagement asset. | text |
| Send Classification | ssot__SendClassificationId__c | A reference ID for the method of how user consents to email engagement, for example transactional or commercial. | text |
| Subject | ssot__SubjectTxt__c | The main topic of email. | text |
| Times Used Quantity | ssot__TimesUsedQty__c | The number of times emails based on template has been used to create published emails. | text |
| Total Delivered Quantity | ssot__TotalDeliveredQty__c | The number of times emails based on template that were successfully delivered. | number |
| Total Hard Bounced Quantity | ssot__TotalHardBouncedQty__c | The number of times emails based on template have hard bounced (invalid email address). | number |
| Total Opens Quantity | ssot__TotalOpensQty__c | The number of times emails based on template have been opened. | number |
| Total Sent Quantity | ssot__TotalSentQty__c | The number of times published emails based on template have been sent. | number |
| Total Soft Bounced Quantity | ssot__TotalSoftBouncedQty__c | The number of times emails based on template have soft bounced (returned by server). | number |
| User Interface Type | ssot__UITypeTxt__c | The description of type of user interface (UI) presented in received email message. | text |
