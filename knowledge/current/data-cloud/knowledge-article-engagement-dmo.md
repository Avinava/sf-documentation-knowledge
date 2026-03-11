---
title: "Knowledge Article Engagement DMO"
domain: data-cloud
topic: knowledge-article-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.535Z
keywords: [Knowledge, Article, Engagement, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Knowledge Article Engagement DMO

# Knowledge Article Engagement DMO

Stores the user engagement details related to a Knowledge Article. It’s a logical subtype of EngagementAction. Provided by the Knowledge Engagement Ingestion API. This DMO is available in API version 58 and later.

## API Name

ssot\_\_KnowledgeArticleEngagement\_\_dlm

## Category

Unassigned

## Primary Subject Area

Knowledge Articles

## Primary Key Label

Knowledge Article Engagement Id (ssot\_Id\_c)

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Knowledge Article Engagement | Knowledge Article Version | Many To One (N:1) | Knowledge Article Version | Knowledge Article Version Id | Knowledge Engagement Ingestion API |
| Knowledge Article Engagement | Source Reference | Many To One (N:1) | Case | Case Id | Service |
| Knowledge Article Engagement | User | Many To One (N:1) | User | Iser Id | Service |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | An individual who has a role specific to an account. | text | Knowledge Engagement Ingestion API |
| Article View Context | ssot__ArticleViewContextDescription__c | The context in which the article was viewed. | text | Knowledge Engagement Ingestion API |
| Browser Model | ssot__BrowserModel__c | The specific version or release of a web browser where the article was viewed, which includes its features, capabilities, and rendering engine. | text | Knowledge Engagement Ingestion API |
| Browser Name | ssot__BrowserName__c | The name of the client browser using the website where the article was viewed. | text | Knowledge Engagement Ingestion API |
| Contact Point | ssot__ContactPointId__c | A specific email address, phone number, or other contact method that was used to communicate with a Party. | text | Knowledge Engagement Ingestion API |
| Created Date | ssot__CreatedDate__c | The date and time when this record was created. | dateTime | Knowledge Engagement Ingestion API |
| Data Source | ssot__DataSourceId__c | The system where the data in this record originated. | text | Knowledge Engagement Ingestion API |
| Data Source Object | ssot__DataSourceObjectId__c | An object or table in the Data Source where the data in this record originated. | text | Knowledge Engagement Ingestion API |
| Device Country | ssot__DeviceCountry__c | The country of the computing device's geographic coordinates at the time of the session. | text | Knowledge Engagement Ingestion API |
| Device IP Address | ssot__DeviceIPAddress__c | A unique address that identifies a device on the internet. | text | Knowledge Engagement Ingestion API |
| Device Latitude | ssot__DeviceLatitude__c | The north/south geographic coordinate of a user's device during a session. | number | Knowledge Engagement Ingestion API |
| Device Locale | ssot__DeviceLocale__c | A geographic or political region that shares language and customs. Users of a software app often set their locale. Examples are en-US or fr-CH, which are locales for English US or French Switzerland respectively. | text | Knowledge Engagement Ingestion API |
| Device Longitude | ssot__DeviceLongitude__c | The east/west geographic coordinate of a user's device during a session. | number | Knowledge Engagement Ingestion API |
| Device Model Name | ssot__DeviceModelName__c | The model name of the device. | text | Knowledge Engagement Ingestion API |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code of the computing device's geographic coordinates at the time of the session. | text | Knowledge Engagement Ingestion API |
| Device Type | ssot__DeviceType__c | The name of the client device type using the website or marketing link as free text. | text | Knowledge Engagement Ingestion API |
| Engagement Action Reason | ssot__EngagementActionReasonText__c | The additional data about the Engagement Channel Action. | text | Knowledge Engagement Ingestion API |
| Engagement Channel | ssot__EngagementChannelId__c | An actor or business that serves as a provider for an Engagement Channel Type. For example AT&T, Telia and T-Mobile are Engagement Channels for the phone call Engagement Channel Type. | text | Knowledge Engagement Ingestion API |
| Engagement Channel Action | ssot__EngagementChannelAction__c | An activity or operation that can be performed for an Engagement Channel Type, and for which there’s business interest in recording details. For example, for the SMS Engagement Channel Type, there’s business value in the Sent, Delivered, and Read actions | text | Knowledge Engagement Ingestion API |
| Engagement Channel Type | ssot__EngagementChannelType__c | An actor or business that serves as a provider for an Engagement Channel Type. For example AT&T, Telia and T-Mobile are Engagement Channels for the phone call Engagement Channel Type. | text | Knowledge Engagement Ingestion API |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of the Engagement/Channel Action. For certain Engagement Vehicles types, this could be different than the system datetime when the record is stored. | dateTime | Knowledge Engagement Ingestion API |
| Engagement Event Direction | ssot__EngagementEventDirection__c | Many engagement subtypes involve messages that are either inbound or outbound. This field can be used to define which direction an engagement instance is, either inbound or outbound. | text | Knowledge Engagement Ingestion API |
| External Record Id | ssot__ExternalRecordId__c | The corresponding record Id from an external data source system. | text | Knowledge Engagement Ingestion API |
| External Source Id | ssot__ExternalSourceId__c | The system in which the ExternalRecordId was assigned. | text | Knowledge Engagement Ingestion API |
| Flow Element Run | ssot__FlowElementRunId__c | The state of a single element within a business process step execution, for example, Joe Smith's Drip Campaign "Send Follow-up Email" element flow execution. | text | Knowledge Engagement Ingestion API |
| Geographic Region | ssot__GeographicRegion__c | The area where the user was located when using the software application. | text | Knowledge Engagement Ingestion API |
| Individual | ssot__IndividualId__c | A reference ID for the individual associated with the engagement. | text | Knowledge Engagement Ingestion API |
| Internal Organization | ssot__InternalOrgnizationId__c | A reference ID for the business unit or other internal organization that owns the business account. | text | Knowledge Engagement Ingestion API |
| IP Address | ssot__IPAddress__c | The IP address from the client using the website. | text | Knowledge Engagement Ingestion API |
| Is Test Send | ssot__IsTestSend__c | Indicates whether the engagement is the result of a communication that was sent for testing purposes (true) or not (false). The default is false. | text | Knowledge Engagement Ingestion API |
| Knowledge Article Engagement Id | ssot__Id__c | The primary key. | text | Knowledge Engagement Ingestion API |
| Knowledge Article User Type | ssot__KnowledgeArticleUserType__c | The user type for the article. Example values are A (API User), I (Internal User), C (Experience Cloud Customer User), P (Experience Cloud Customer User). | text | Knowledge Engagement Ingestion API |
| Knowledge Article Version | ssot__KnowledgeArticleVersionId__c | The reference ID to the associated knowledge article version. | text | Knowledge Engagement Ingestion API |
| Lead | ssot__LeadId__c | A person or company that showed interest in the company's products. | text | Knowledge Engagement Ingestion API |
| Link Name | ssot__LinkName__c | The label associated with a link URL that is embedded in a page, email, or message. | text | Knowledge Engagement Ingestion API |
| Link URL | ssot__LinkURL__c | When the software application or web page that generated the engagement was accessed via a link or deep link. this stores the URL that was used (unpersonalized). | text | Knowledge Engagement Ingestion API |
| Name | ssot__Name__c | The name of an instance of an engagement, which is an action for an email send, SMS or other communication. | text | Knowledge Engagement Ingestion API |
| OS Model Name | ssot__OSModelName__c | The operating system model name of the client device using the website. | text | Knowledge Engagement Ingestion API |
| OS Name | ssot__OSName__c | The operating system name of the client device using the website. | text | Knowledge Engagement Ingestion API |
| OS Version Number | ssot__OSVersionNumber__c | The version of the operating system, for example "Ventura 13.4.1" is a version number of the Mac operating system. | text | Knowledge Engagement Ingestion API |
| Personalization | ssot__PersonalizationId__c | The personalization ID uniquely identifies a personalization request for a particular personalization point and individual serviced by the personalization pipeline. | text | Knowledge Engagement Ingestion API |
| Personalization Content | ssot__PersonalizationContentId__c | The ID for a unique piece of personalized digital content. | text | Knowledge Engagement Ingestion API |
| Personalization Request | ssot__PersonalizationRequestId__c | The request ID to the Personalization service, which results in one or more personalization content records. | text | Knowledge Engagement Ingestion API |
| Personalization Service Provider | ssot__PerslServiceProviderName__c | The name of the service that provided personalization. | text | Knowledge Engagement Ingestion API |
| Recipient IP Address | ssot__RecipientIPAddress__c | The IP address of the device used to receive the email message. | text | Knowledge Engagement Ingestion API |
| Recipient Message Id | ssot__RecipientMessageId__c | The ID for a particular recipient of an email message, and common for all engagement actions related to the recipient's email message or other engagement channel type. | text | Knowledge Engagement Ingestion API |
| Referrer | ssot__Referrer__c | The contextual data about the user's usage of the site or application that referred them to the software application that generated the engagement, for example a campaign or search advertisement. | text | Knowledge Engagement Ingestion API |
| Resolved URL | ssot__ResolvedURL__c | The personalized URL is used when the software application or web page that generated the engagement was accessed via a link or deep link. | text | Knowledge Engagement Ingestion API |
| SMS Template | ssot__SMSTemplateId__c | The standard form of a message that can be personalized and customized with data specific to an individual recipient, market segment, or other customization factor. | text | Knowledge Engagement Ingestion API |
| Source Reference | ssot__SourceReferenceId__c | The unique ID of the non-knowledge record, like a case record or chat record, where the article was shown. | text | Knowledge Engagement Ingestion API |
| Source Reference Object | ssot__SourceReferenceObject__c | The name of the source reference object, for example, Case. | text | Knowledge Engagement Ingestion API |
| Used For Grounding | ssot__UsedForGrounding__c | Indicates whether the GPT service produced a reply to an agent that is based on a Knowledge Article, and the agent used that reply (true) or if the service didn’t produce a reply, or the reply wasn’t used by the agent (false). | text | Knowledge Engagement Ingestion API |
| User Agent | ssot__UserAgentText__c | A field in HTTP requests, email envelopes, and other communication protocols that is decomposed into data such as browser type, device type, and other data. | text | Knowledge Engagement Ingestion API |
| User | ssot__UserId__c | The ID for the associated User. | text | Knowledge Engagement Ingestion API |
| Web Cookie | ssot__WebCookieId__c | A small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. | text | Knowledge Engagement Ingestion API |
| Web Session | ssot__WebSession__c | A group of user interactions with a website or device app that take place within a given time frame. | text | Knowledge Engagement Ingestion API |
| Website | ssot__Websiteid__c | The ID of the related site that is hosted on the internet. | text | Knowledge Engagement Ingestion API |