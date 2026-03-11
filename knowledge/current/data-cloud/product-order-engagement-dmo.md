---
title: "Product Order Engagement DMO"
domain: data-cloud
topic: product-order-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.907Z
keywords: [Product, Order, Engagement, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Product Order Engagement DMO

# Product Order Engagement DMO

The Product Order Engagement DMO is a Data Cloud data model object (DMO) for a user’s online shopping order data.

## Object API Name

ssot\_\_ProductOrderEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Product Order Engagement ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Engagement | Many To One: N:1 | Product Order Engagement | Product Order Engagement ID |
| Product Order Engagement | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID |
| Product Order Engagement | Case | Many To One: N:1 | Case | Case ID |
| Product Order Engagement | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Product Order Engagement | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Product Order Engagement | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Product Order Engagement | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Product Order Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Product Order Engagement | Engagement Asset | Many To One: N:1 | Device Application Template | Device Application Template ID |
| Product Order Engagement | Engagement Publication | Many To One: N:1 | Email Publication | Email Publication ID |
| Product Order Engagement | Engagement Asset | Many To One: N:1 | Email Template | Email Template ID |
| Product Order Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Product Order Engagement | Lead | Many To One: N:1 | Lead | Lead ID |
| Product Order Engagement | Market Journey Activity | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Product Order Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Product Order Engagement | Engagement Asset | Many To One: N:1 | SMS Template | SMS Template ID |
| Product Order Engagement | Individual | Many To One: N:1 | Individual | Individual ID |
| Product Order Engagement | Sales Order | Many To One: N:1 | Sales Order | Sales Order ID |
| Sales Order Product Engagement | Product Order Engagement | Many To One: N:1 | Product Order Engagement | Product Order Engagement ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID to account contact. | text |
| Action Cadence Step | ssot__ActionCadenceStepId__c | A reference ID to action cadence step. | text |
| Adjusted Total Product Amount | ssot__AdjustedTotalProductAmount__c | The total amount of a product after adjustments. | number |
| Case | ssot__CaseId__c | A reference ID to a recorded issue, for example laptop connectivity. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to accounts’ contact point, for example physical address, email address, or phone number. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency | ssot__CurrencyId__c | A reference ID to the currency of an order. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device Country | ssot__DeviceCountryId__c | A reference ID to country where device is located. | text |
| Device IP Address | ssot__DeviceIPAddress__c | The IP address of a device. | text |
| Device Latitude | ssot__DeviceLatitude__c | The geo latitude of the device when the engagement was recorded. | number |
| Device Locale | ssot__DeviceLocaleId__c | A reference ID to user locale configured on device. | text |
| Device Longitude | ssot__DeviceLongitude__c | The geo longitude of the device when the engagement was recorded. | number |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code associated with device. | text |
| Engagement Asset | ssot__EngagementAssetId__c | A reference ID for the type of engagement asset. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID for the engagement channel. | text |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID for the engagement action. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID for the engagement channel type. | text |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of the engagement. | dateTime |
| Engagement Event Direction | ssot__EngagementEventDirectionId__c | The engagement event direction where values are inbound or outbound. | text |
| Engagement Notes | ssot__EngagementNotesTxt__c | The details about what transpired during engagement. | text |
| Engagement Number | ssot__EngagementNbr__c | A user-facing ID that isn’t automatically set using auto-number. | text |
| Engagement Publication | ssot__EngagementPublicationId__c | A reference ID for a background process that generates volumes of emails, SMS, or other engagement types. | text |
| Engagement Type | ssot__EngagementTypeId__c | A reference ID to type of engagement, for example email or phone. | text |
| Engagement Vehicle | ssot__EngagementVehicleId__c | A reference ID for the vehicle through which the engagement was recorded. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Individual | ssot__IndividualId__c | A reference ID to contact for account. | text |
| Internal Engagement Actor | ssot__InternalEngagementActorId__c | A reference ID for an internal engagement actor that groups the different types of individuals who are targets of marketing engagements. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Is Gift Order | ssot__IsGiftOrder__c | An indicator if the order is a gift. | text |
| Is Test Send | ssot__IsTestSend__c | An indicator if the engagement record was generated as part of testing. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadlId__c | A reference ID to person or company that showed interest in products. | text |
| Link URL | ssot__LinkURL__c | The URL that was used to access a software application or web page. | text |
| Market Audience | ssot__MarketAudienceId__c | A reference ID to intended audience that engagement was designed to reach. | text |
| Market Journey Activity | ssot__MarketJourneyActivityId__c | A reference ID to step or activity that customer configures in Salesforce Journey Builder tool for marketing associated with engagement. | text |
| Market Segment | ssot__MarketSegmentId__c | A reference ID to group of people who share one or more common characteristics, and are grouped for marketing associated with engagement. | text |
| Marketing Email List | ssot__MarketingEmailListId__c | A reference ID for a set of email addresses that is used for marketing communications. | text |
| Name | ssot__Name__c | The name of the engagement. | text |
| Net Order Amount | ssot__NetOrderAmount__c | The total order amount. | number |
| Product Order Engagement ID | ssot__Id__c | A reference ID for the Product Order Engagement DMO. | text |
| Product Order Event Type | ssot__ProductOrderEventTypeId__c | A reference ID to the product order event type. | text |
| Referrer | ssot__Referrer__c | A container that stores contextual data about the user's usage of the site or the application that referred them to the software application that generated the engagement. For example, a campaign or search advertisement. | text |
| Referrer URL | ssot__ReferrerURL__c | The URL of application that directed user to software application that generated engagement. | text |
| Sales Order | ssot__SalesOrderId__c | An internal document generated by seller indicating that customer is ready to purchase products and services. | text |
| Sent Date Time | ssot__SentDateTm__c | The date and time when the publication or communication was sent. | dateTime |
| Session | ssot__SessionId__c | A reference ID for the session used to group related events together. | text |
| Shopping Cart | ssot__ShoppingCartId__c | A reference ID to shopping cart for data captured from user actions, for example adding or removing items from shopping cart. | text |
| Target Engagement Actor | ssot__TargetEngagementActorId__c | A reference ID to engagement actor that groups different types of individuals targeted for marketing associated with engagement, for example leads and account contacts. | text |
| Task | ssot__TaskId__c | A reference ID to business activity, for example making a phone call. | text |
| Total Adjustment Amount | ssot__TotalAdjustmentAmount__c | The total amount of an order after adjustments. | number |
| Total Delivery Amount | ssot__TotalDeliveryAmount__c | The total amount of delivery for an order. | number |
| Total Product Tax Amount | ssot__TotalProductTaxAmount__c | The total amount of tax on a product. | number |
| Total Tax Amount | ssot__TotalTaxAmount__c | The total amount of tax on an order. | number |
| Web Cookie | ssot__WebCookieId__c | A reference ID to small piece of data sent from website and stored on user's computer by user's web browser while user is browsing. | text |
| Workflow | ssot__WorkflowId__c | A reference ID to the sequence of steps or processes in software application. | text |