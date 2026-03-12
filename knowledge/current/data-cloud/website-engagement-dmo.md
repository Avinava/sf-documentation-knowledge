---
title: "Website Engagement DMO"
domain: data-cloud
topic: website-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.098Z
estimatedTokens: 2486
keywords: [Website, Engagement, DMO, Data, Cloud, data, model, any, associated, website, engagement, such, views, clicks., API, Name, Category, Primary, Subject, Area]
---

# Website Engagement DMO

> The Website Engagement DMO is a Data Cloud data model object (DMO) for
      any data associated with website engagement, such as views or clicks.

# Website Engagement DMO

The Website Engagement DMO is a Data Cloud data model object (DMO) for any data associated with website engagement, such as views or clicks.

## Object API Name

ssot\_\_WebsiteEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Website Engagement ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Engagement | Many To One: N:1 | Website Engagement | Website Engagement ID |
| Website Engagement | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Website Engagement | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Website Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Website Engagement | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Website Engagement | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Website Engagement | Individual | Many To One: N:1 | Individual | Individual ID |
| Website Engagement | Sales Order | Many To One: N:1 | Sales Order | Sales Order ID |
| Website Engagement | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID |
| Website Engagement | Case | Many To One: N:1 | Case | Case ID |
| Website Engagement | Engagement Asset | Many To One: N:1 | Device Application Template | Device Application Template ID |
| Website Engagement | Lead | Many To One: N:1 | Lead | Lead ID |
| Website Engagement | Engagement Asset ID | Many To One: N:1 | SMS Template | SMS Template ID |
| Website Engagement | Engagement Publication ID | Many To One: N:1 | Email Publication | Email Publication ID |
| Website Engagement | Engagement Asset ID | Many To One: N:1 | Email Template | Email Template ID |
| Website Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Website Engagement | Website Engagement ID | Many To One: N:1 | Loyalty Transaction Journal | Engagement ID |
| Website Engagement | Market Journey Activity ID | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Website Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Website Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID to account contact. | text |
| Action Cadence Step | ssot__ActionCadenceStepId__c | A reference ID to action cadence step. | text |
| Browser Name | ssot__BrowserName__c | The name of the user’s browser. | text |
| Case | ssot__CaseId__c | A reference ID to a recorded issue, for example laptop connectivity. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to accounts’ contact point, for example physical address, email address, or phone number. | text |
| Country | ssot__CountryId__c | A reference ID to country derived from IP address of client. | text |
| Country Region | ssot__CountryRegionId__c | A reference ID for the country or region. | text |
| Created Date | ssot__CreatedDate__c | The date a record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by External Record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Device Country | ssot__DeviceCountryId__c | A reference ID to country where device is located. | text |
| Device IP Address | ssot__DeviceIPAddress__c | The IP address of device. | text |
| Device Latitude | ssot__DeviceLatitude__c | The geo latitude of device when engagement was recorded. | number |
| Device Locale | ssot__DeviceLocaleId__c | A reference ID to user locale configured on device. | text |
| Device Longitude | ssot__DeviceLongitude__c | The geo longitude of device when engagement was recorded. | number |
| Device OS Name | ssot__DeviceOSName__c | The name of the device’s operating system. | text |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code associated with device. | text |
| Device Type | ssot__DeviceTypeTxt__c | A reference ID to type of device. | text |
| Domain Name | ssot__DomainName__c | The domain name used for the engagement. | text |
| Engagement Asset | ssot__EngagementAssetId__c | A reference ID to engagement asset. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID to engagement channel. | text |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID to engagement channel action. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the type of engagement channel. | text |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of the user’s engagement. | dateTime |
| Engagement Event Direction | ssot__EngagementEventDirectionId__c | A reference ID for the engagement event direction, for example, inbound or outbound. | text |
| Engagement Notes | ssot__EngagementNotesTxt__c | The details about what transpired during engagement. | text |
| Engagement Number | ssot__EngagementNbr__c | A user-facing ID that isn’t automatically set. | text |
| Engagement Publication | ssot__EngagementPublicationId__c | A reference ID to background process that generates volumes of email messages, SMS messages, or other engagement vehicle types. | text |
| Engagement Type | ssot__EngagementTypeId__c | A reference ID to the type of engagement, for example email or phone. | text |
| Engagement Vehicle | ssot__EngagementVehicleId__c | A reference ID to vehicle where engagement was recorded. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to the system’s external record ID. | text |
| Individual | ssot__IndividualId__c | A reference ID to contact for account. | text |
| Internal Engagement Actor | ssot__InternalEngagementActorId__c | A reference ID to engagement actor that groups the different types of individuals targeted for marketing engagements, for example leads and account contacts. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| IP Address | ssot__IPAddr__c | The IP address of client visiting website. | text |
| Is Test Send | ssot__IsTestSend__c | An indicator if the engagement record was generated as part of testing. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadlId__c | A reference ID to person or company that showed interest in products. | text |
| Link URL | ssot__LinkURL__c | A link where software application or web page accessed generated engagement. | text |
| Market Audience | ssot__MarketAudienceId__c | A reference ID to intended audience that engagement was designed to reach. | text |
| Market Journey Activity | ssot__MarketJourneyActivityId__c | A reference ID to step or activity that customer configures in Salesforce Journey Builder tool for marketing associated with engagement. | text |
| Market Segment | ssot__MarketSegmentId__c | A reference ID to group of people who share one or more common characteristics, and are grouped for marketing associated with engagement. | text |
| Marketing Email List | ssot__MarketingEmailListId__c | A reference ID to the marketing email list. | text |
| Name | ssot__Name__c | The engagement’s name. | text |
| Page URL | ssot__PageURL__c | The URL of web page that was visited. | text |
| Referrer | ssot__Referrer__c | The method that generated user engagement, for example, a campaign or advertisement. | text |
| Referrer URL | ssot__ReferrerURL__c | The URL of application that directed user to software application that generated engagement. | text |
| Sales Order | ssot__SalesOrderId__c | A reference ID referring to the sales order. | text |
| Sent Date Time | ssot__SentDateTm__c | The sent date and time of the engagement. | dateTime |
| Session | ssot__SessionId__c | A reference ID to the user session. | text |
| Shopping Cart | ssot__ShoppingCartId__c | A reference ID to shopping cart for data captured from user actions, for example adding or removing items from shopping cart. | text |
| Target Engagement Actor | ssot__TargetEngagementActorId__c | A reference ID to engagement actor that groups different types of individuals targeted for marketing associated with engagement, for example leads and account contacts. | text |
| Task | ssot__TaskId__c | A reference ID to business activity, for example making a phone call. In the user interface, tasks and event records are collectively referred to as activities. | text |
| Web Cookie | ssot__WebCookieId__c | A reference ID to small piece of data sent from website and stored on user's computer by user's web browser while user is browsing. | text |
| Web Session ID | ssot__WebSessionId__c | A reference ID for the web session. | text |
| Website Engagement Id | ssot__Id__c | A unique ID used as primary key for the Website Engagement DMO. | text |
| Website Visit End Time | ssot__VisitEndTm__c | The date and time when the page was last visited. | dateTime |
| Website Visit Start Time | ssot__VisitStartTm__c | The date and time when the page was first visited. | dateTime |
| Workflow | ssot__WorkflowId__c | A reference ID to the sequence of steps or processes from initiation to completion. | text |
