---
title: "Web Search Engagement DMO"
domain: data-cloud
topic: web-search-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.754Z
estimatedTokens: 2604
keywords: [Web, Search, Engagement, DMO, Data, Cloud, model, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Web Search Engagement DMO

> The Web Search Engagement DMO is a Data Cloud data model object (DMO)
      for web search engagement data.

# Web Search Engagement DMO

The Web Search Engagement DMO is a Data Cloud data model object (DMO) for web search engagement data.

## Object API Name

ssot\_\_WebSearchEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Web Search Engagement ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Engagement | Many To One: N:1 | Web Search Engagement | Web Search Engagement ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Web Search Engagement | Web Search Engagement ID |
| Web Search Engagement | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID |
| Web Search Engagement | Case | Many To One: N:1 | Case | Case ID |
| Web Search Engagement | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Web Search Engagement | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Web Search Engagement | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Web Search Engagement | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Web Search Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Web Search Engagement | Engagement Asset | Many To One: N:1 | Device Application Template | Device Application Template ID |
| Web Search Engagement | Engagement Publication | Many To One: N:1 | Email Publication | Email Publication ID |
| Web Search Engagement | Engagement Asset | Many To One: N:1 | Email Template | Email Template ID |
| Web Search Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Web Search Engagement | Individual | Many To One: N:1 | Individual | Individual ID |
| Web Search Engagement | Lead | Many To One: N:1 | Lead | Lead ID |
| Web Search Engagement | Market Journey Activity | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Web Search Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Web Search Engagement | Engagement Publication | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Web Search Engagement | Engagement Asset | Many To One: N:1 | SMS Template | SMS Template ID |
| Web Search Engagement | Sales Order | Many To One: N:1 | Sales Order | Sales Order ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID for the account contact. | text |
| Action Cadence Step | ssot__ActionCadenceStepId__c | A reference ID for the action cadence step. | text |
| Browser Name | ssot__BrowserName__c | The name of client browser using website, entered as free text. | text |
| Case | ssot__CaseId__c | A reference ID to a support case. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID for the accounts’ contact point, for example, an address, an email, social network handle. | text |
| Country | ssot__CountryId__c | A reference ID to country code associated with client's IP address. | text |
| Country Region Name | ssot__CountryRegionId__c | A reference ID to the region name associated with a client's IP address. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by External Record Id. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Device Country | ssot__DeviceCountryId__c | A reference ID for the country of a specific device. | text |
| Device IP Address | ssot__DeviceIPAddress__c | The IP address of the device. | text |
| Device Latitude | ssot__DeviceLatitude__c | The geo latitude of the device when the engagement was recorded. | number |
| Device Locale | ssot__DeviceLocaleId__c | A reference ID for the user locale configured on the device. | text |
| Device Longitude | ssot__DeviceLongitude__c | The geo longitude of the device when the engagement was recorded. | number |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code associated with the device. | text |
| Device Type | ssot__DeviceTypeTxt__c | The name of client device type using website, entered as free text. | text |
| Domain Name | ssot__DomainName__c | The domain name associated with client's IP address. | text |
| Engagement Asset | ssot__EngagementAssetId__c | A reference ID for the type of engagement asset. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID for the engagement channel. | text |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID for the engagement action. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID for the engagement channel type. | text |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of engagement. | dateTime |
| Engagement Event Direction | ssot__EngagementEventDirectionId__c | A reference ID for the engagement event direction, for example, inbound or outbound. | text |
| Engagement Notes | ssot__EngagementNotesTxt__c | The details about what transpired during the engagement. | text |
| Engagement Number | ssot__EngagementNbr__c | A user-facing ID for an engagement. | text |
| Engagement Publication | ssot__EngagementPublicationId__c | A reference ID for a background process that generates volumes of emails, SMS, or other engagement types. | text |
| Engagement Type | ssot__EngagementTypeId__c | A reference ID for one of the defined varieties of engagement, for example, an email or phone engagement. | text |
| Engagement Vehicle | ssot__EngagementVehicleId__c | A reference ID for the vehicle through which the engagement was recorded. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Individual | ssot__IndividualId__c | A reference ID to contact for account. | text |
| Internal Engagement Actor | ssot__InternalEngagementActorId__c | A reference ID for an internal engagement actor that groups the different types of individuals who are targets of marketing engagements. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| IP Address | ssot__IPAddr__c | The IP address of a client using website. | text |
| Is Test Send | ssot__IsTestSend__c | An indicator if the engagement record was generated as part of testing. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadlId__c | A reference ID for a person or company that showed interest in the company's products. | text |
| Link URL | ssot__LinkURL__c | The URL that was used to access a software application or web page. | text |
| Market Audience | ssot__MarketAudienceId__c | A reference ID to a market audience or the people you want to reach with marketing communication. | text |
| Market Journey Activity | ssot__MarketJourneyActivityId__c | A reference ID for a step or activity that a customer configures in the Salesforce Journey Builder tool. | text |
| Market Segment | ssot__MarketSegmentId__c | A reference ID for a group of people who share one or more common characteristics, grouped for marketing purposes who are associated with this engagement. | text |
| Marketing Email List | ssot__MarketingEmailListId__c | A reference ID for a set of email addresses that is used for marketing communications. | text |
| Name | ssot__Name__c | The name of the engagement. | text |
| OS Name | ssot__OSName__c | The name of operating system on a client’s device using the website. | text |
| Referrer | ssot__Referrer__c | A container that stores contextual data about the user's usage of the site or the application that referred them to the software application that generated the engagement. For example, a campaign or search advertisement. | text |
| Referrer URL text | ssot__ReferrerURL__c | The URL of the application that the user was using before being directed to the software application that generated this engagement. | text |
| Sales Order | ssot__SalesOrderId__c | A reference ID for the internal document generated by the seller. | text |
| Search Engine Name | ssot__SearchEngineName__c | The name of the search engine used by client, entered as free text. | text |
| Search Keywords text | ssot__SearchKeywordsTxt__c | The keywords used by client when searching. | text |
| Sent Date Time | ssot__SentDateTm__c | The date and time when the publication or communication was sent. | dateTime |
| Session | ssot__SessionId__c | A reference ID for the session used to group related events together. | text |
| Shopping Cart | ssot__ShoppingCartId__c | A reference ID for the shopping cart for data captured from user actions such as adding and removing items from a shopping cart. | text |
| Target Engagement Actor | ssot__TargetEngagementActorId__c | A reference ID for how groups of individuals are targeted for marketing engagements, for example, leads. | text |
| Task | ssot__TaskId__c | A reference ID that represents a business activity such as making a phone call or other to-do items. | text |
| Web Cookie | ssot__WebCookieId__c | A reference ID for a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. | text |
| Web Search Engagement ID | ssot__Id__c | A unique ID used as primary key for the Web Search Engagement DMO. | text |
| Web Session ID | ssot__WebSessionId__c | A reference ID to the web session identifier used to group related web events together. | text |
| Workflow | ssot__WorkflowId__c | A reference ID for a sequence of steps or processes in a software application through which a piece of work passes from initiation to completion. | text |
