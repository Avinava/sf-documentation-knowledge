---
title: "Email Engagement DMO"
domain: data-cloud
topic: email-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:13.928Z
estimatedTokens: 2383
keywords: [Email, Engagement, DMO, Data, Cloud, data, model, captured, various, sources, engagement, channel., API, Name, Category, Primary, Subject, Area, Key, Relationships]
---

# Email Engagement DMO

> The Email Engagement DMO is a Data Cloud data model object (DMO) for data
      captured from various data sources about engagement in the Email channel.

# Email Engagement DMO

The Email Engagement DMO is a Data Cloud data model object (DMO) for data captured from various data sources about engagement in the Email channel.

## Object API Name

ssot\_\_EmailEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Email Engagement Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Email Engagement | Engagement Asset | ManyToOne (N:1) | Device Application Template | Device Application Template Id |
| Email Engagement | Engagement Asset | ManyToOne (N:1) | SMS Template | SMS Template Id |
| Email Engagement | Market Journey Activity | ManyToOne (N:1) | Market Journey Activity | Market Journey Activity Id |
| Email Engagement | Engagement Publication | ManyToOne (N:1) | Email Publication | Email Publication Id |
| Email Engagement | Engagement Asset | ManyToOne (N:1) | Email Template | Email Template Id |
| Email Engagement | Individual | ManyToOne (N:1) | Individual | Individual Id |
| Engagement Topic | Engagement | ManyToOne (N:1) | Email Engagement | Email Engagement Id |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID to account contact. | text |
| Action Cadence Step | ssot__ActionCadenceStepId__c | A reference ID to action cadence step. | text |
| Case | ssot__CaseId__c | A reference ID to a recorded issue, for example laptop connectivity. | text |
| City Name | ssot__CityName__c | The city of recipient derived from IP address at time of engagement event. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to accounts’ contact point, for example physical address, email address, or phone number. | text |
| Country | ssot__CountryId__c | A reference ID to country of recipient derived from IP address at time of engagement event. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | datetime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device Country | ssot__DeviceCountryId__c | A reference ID to the country where device is located. | text |
| Device IP Address | ssot__DeviceIPAddress__c | The IP address of device. | text |
| Device Latitude | ssot__DeviceLatitude__c | The Geo latitude of the device when engagement was recorded. | number |
| Device Locale | ssot__DeviceLocaleId__c | A reference ID to user locale configured on device. | text |
| Device Longitude | ssot__DeviceLongitude__c | The Geo longitude of the device when engagement was recorded. | number |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code associated with device. | text |
| Email Domain Name | ssot__EmailDomainName__c | The subset of email address that represents domain after @ sign. | text |
| Email Engagement Id | ssot__Id__c | A unique ID used as primary key for the Email Engagement DMO. | text |
| Email From Address | ssot__EmailFromAddr__c | The email address of sender profile associated with email at time of send. | text |
| Email From Name | ssot__EmailFromName__c | The sender profile name associated with email at time of send. | text |
| Email Name | ssot__EmailName__c | The email message name associated at time of send. | text |
| Engagement Asset | ssot__EngagementAssetId__c | A reference ID to the engagement asset. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID to the engagement channel. | text |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID to the engagement channel action. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the type of engagement channel. | text |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of engagement. Engagement records result from activities occurring later than the send, so Engagement Date Time must be later than Send Date Time. | datetime |
| Engagement Event Direction | ssot__EngagementEventDirectionId__c | The engagement event direction where values are Inbound or Outbound. | text |
| Engagement Notes | ssot__EngagementNotesTxt__c | The details about what transpired during engagement. | text |
| Engagement Number | ssot__EngagementNbr__c | A user-facing ID that isn’t automatically set using auto-number. | text |
| Engagement Publication | ssot__EngagementPublicationId__c | A reference ID to background process that generates volumes of email messages, SMS messages, or other Engagement Vehicle types. Publications can be specific to Engagement Channel Actions. | text |
| Engagement Type | ssot__EngagementTypeId__c | A reference ID to the type of engagement, for example email or phone. | text |
| Engagement Vehicle | ssot__EngagementVehicleId__c | A reference ID for the engagement vehicle. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Individual | ssot__IndividualId__c | A reference ID to contact for account. | text |
| Internal Engagement Actor | ssot__InternalEngagementActorId__c | A reference ID to engagement actor that groups the different types of individuals targeted for marketing engagements, for example leads and account contacts. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Test Send | ssot__IsTestSend__c | A flag to indicate if an engagement record was generated as part of testing. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | datetime |
| Lead | ssot__LeadlId__c | A reference ID to person or company that showed interest in products. | text |
| Link URL | ssot__LinkURL__c | The link where software application or web page accessed, generated the engagement. | text |
| Market Audience | ssot__MarketAudienceId__c | A reference ID to the intended audience that engagement was designed to reach. | text |
| Market Journey Activity | ssot__MarketJourneyActivityId__c | A reference ID to step or activity that customer configures in Salesforce Journey Builder tool for marketing associated with engagement. | text |
| Market Segment | ssot__MarketSegmentId__c | A reference ID to group of people who share one or more common characteristics, and are grouped for marketing associated with engagement. | text |
| Marketing Email List | ssot__MarketingEmailListId__c | A reference ID to the marketing email list used for the engagement. | text |
| Name | ssot__Name__c | The name of the engagement. | text |
| Referrer | ssot__Referrer__c | The name of a generic marketing method that generated user engagement, for example a campaign or search advertisement. For example, a campaign or search advertisement. | text |
| Referrer URL | ssot__ReferrerURL__c | The URL of application that directed user to the software application that generated engagement. | text |
| Sales Order | ssot__SalesOrderId__c | An internal document generated by seller indicating that customer is ready to purchase products and services. | text |
| Send Classification | ssot__SendClassificationId__c | A reference ID to how consent is checked, for example Transactional such as placing an order implies opt-in for an order confirmation email or a commercial promotional email requiring opt-in | text |
| Sent Date Time | ssot__SentDateTm__c | The date and time of send. | datetime |
| Session | ssot__SessionId__c | A reference ID to session used to group related events together. | text |
| Shopping Cart | ssot__ShoppingCartId__c | A reference ID to the shopping cart for data captured from user actions, for example adding or removing items from shopping cart. | text |
| State Province | ssot__StateProvinceId__c | A reference ID to the state of recipient derived from IP address at time of engagement event. | text |
| State Province Code | ssot__StateProvinceTxt__c | A reference ID to the state/province code of recipient derived from IP address at time of engagement event. | text |
| Subject Line Text | ssot__SubjectLineTxt__c | The associated email subject line at the time of send. | text |
| Target Engagement Actor | ssot__TargetEngagementActorId__c | A reference ID to engagement actor that groups different types of individuals targeted for marketing associated with engagement, for example leads and account contacts. | text |
| Task | ssot__TaskId__c | A reference ID to business activity, for example making a phone call. In the user interface, tasks and event records are collectively referred to as activities. | text |
| Web Cookie | ssot__WebCookieId__c | A reference ID to a small piece of data sent from website and stored on user's computer by user's web browser while user is browsing. | text |
| Workflow | ssot__WorkflowId__c | A reference ID to a sequence of steps or processes in software application where a piece of work passes from initiation to completion. | text |
