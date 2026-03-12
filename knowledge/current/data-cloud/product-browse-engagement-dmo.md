---
title: "Product Browse Engagement DMO"
domain: data-cloud
topic: product-browse-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.456Z
estimatedTokens: 2872
keywords: [Product, Browse, Engagement, DMO, Data, Cloud, model, captured, user, action, searching, products, viewing, API, Category]
---

# Product Browse Engagement DMO

> Product Browse Engagement DMO is a Data Cloud data model object (DMO) for
      data captured from a user action, such as searching for products or viewing a list of
      products.

# Product Browse Engagement DMO

Product Browse Engagement DMO is a Data Cloud data model object (DMO) for data captured from a user action, such as searching for products or viewing a list of products.

## Object API Name

ssot\_\_ProductBrowseEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Product Browse Engagement ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Engagement | Many To One: N:1 | Product Browse Engagement | Product Browse Engagement ID |
| Product Browse Engagement | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Product Browse Engagement | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Product Browse Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Product Browse Engagement | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID |
| Product Browse Engagement | Case | Many To One: N:1 | Case | Case ID |
| Product Browse Engagement | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Product Browse Engagement | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Product Browse Engagement | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Product Browse Engagement | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Product Browse Engagement | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Product Browse Engagement | Engagement Asset | Many To One: N:1 | Device Application Template | Device Application Template ID |
| Product Browse Engagement | Engagement Publication | Many To One: N:1 | Email Publication | Email Publication ID |
| Product Browse Engagement | Engagement Asset | Many To One: N:1 | Email Template | Email Template ID |
| Product Browse Engagement | Lead | Many To One: N:1 | Lead | Lead ID |
| Product Browse Engagement | Market Journey Activity | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Product Browse Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Product Browse Engagement | Engagement Asset | Many To One: N:1 | SMS Template | SMS Template ID |
| Product Browse Engagement | Individual | Many To One: N:1 | Individual | Individual ID |
| Product Browse Engagement | Sales Order | Many To One: N:1 | Sales Order | Sales Order ID |
| Product Browse Engagement | Product | Many To One: N:1 | Master Product | Master Product ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID to account contact. | text |
| Action Cadence Step | ssot__ActionCadenceStepId__c | A reference ID to action cadence step. | text |
| Case | ssot__CaseId__c | A reference ID to a recorded issue, for example laptop connectivity. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to accounts’ contact point, for example physical address, email address, or phone number. | text |
| Created Date | ssot__CreatedDate__c | The date a record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by External Record Id. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Device Country | ssot__DeviceCountryId__c | A reference ID to country where device is located. | text |
| Device IP Address | ssot__DeviceIPAddress__c | The IP address of device. | text |
| Device Latitude | ssot__DeviceLatitude__c | The geo latitude of the device when the engagement was recorded. | Number |
| Device Locale | ssot__DeviceLocaleId__c | A reference ID to user locale configured on device. | text |
| Device Longitude | ssot__DeviceLongitude__c | The geo longitude of device when engagement was recorded. | Number |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code associated with device. | text |
| Engagement Asset | ssot__EngagementAssetId__c | A reference ID for the type of engagement asset. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID for the engagement channel. | text |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID for the engagement action. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID for the engagement channel type. | text |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of the engagement. | dateTime |
| Engagement Event Direction | ssot__EngagementEventDirectionId__c | The engagement event direction where values are inbound or outbound. | text |
| Engagement Notes | ssot__EngagementNotesTxt__c | The details about what transpired during the engagement. | text |
| Engagement Number | ssot__EngagementNbr__c | A user-facing ID that isn’t automatically set using auto-number. | text |
| Engagement Publication | ssot__EngagementPublicationId__c | A reference ID for a background process that generates volumes of emails, SMS, or other engagement types. | text |
| Engagement Type | ssot__EngagementTypeId__c | A reference ID to type of engagement, for example email or phone. | text |
| Engagement Vehicle | ssot__EngagementVehicleId__c | A reference ID for the vehicle through which the engagement was recorded. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Individual | ssot__IndividualId__c | A reference ID to contact for account. | text |
| Internal Engagement Actor | ssot__InternalEngagementActorId__c | A reference ID to engagement actor that groups the different types of individuals targeted for marketing engagements, for example leads and account contacts. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Is Test Send | ssot__IsTestSend__c | An indicator if the engagement record was generated as part of testing. | text |
| Keyword Search | ssot__KeywordSearch__c | The words or terms provided by user for text-based search. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadlId__c | A reference ID to person or company that showed interest in products. | text |
| Link URL | ssot__LinkURL__c | The URL that was used to access a software application or web page. | text |
| Market Audience | ssot__MarketAudienceId__c | A reference ID to intended audience that engagement was designed to reach. | text |
| Market Journey Activity | ssot__MarketJourneyActivityId__c | A reference ID to step or activity that customer configures in Salesforce Journey Builder tool for marketing associated with engagement. | text |
| Market Segment | ssot__MarketSegmentId__c | A reference ID to group of people who share one or more common characteristics, and are grouped for marketing associated with engagement. | text |
| Marketing Email List | ssot__MarketingEmailListId__c | A reference ID for a set of email addresses that is used for marketing communications. | text |
| Name | ssot__Name__c | The name of the engagement. | text |
| Product | ssot__ProductId__c | A reference ID to product intended to be sold, for example goods, services, bundles, or made-to-order products. | text |
| Product Brand | ssot__ProductBrandName__c | The brand of a product, for example Northern Trail Outfitters. | text |
| Product Browse Engagement ID | ssot__Id__c | A unique ID used as primary key for the Product Browse Engagement DMO. | text |
| Product Category | ssot__ProductCategoryName__c | The class of products, such as shoes or hats. | text |
| Product Color | ssot__ProductColorName__c | The color variant of product displayed on search result. | text |
| Product Display Position | ssot__ProductDisplayPosition__c | The numeric position of product in list displayed. | number |
| Product Image URL | ssot__ProductImageURL__c | A link to the page that hosts product photo or image. | text |
| Product List ID | ssot__ProductListId__c | A reference ID to the product list identifier. | text |
| Product Price | ssot__ProductPriceAmount__c | The product price displayed on search result. | number |
| Product Quantity | ssot__ProductQuantity__c | The product package quantity displayed on search result. | number |
| Product SKU | ssot__ProductSKU__c | The Stock Keeping Unit (SKU) of product displayed on search result. | text |
| Product Style | ssot__ProductStyleName__c | The product style displayed on search result. | text |
| Product View URL | ssot__ProductViewURL__c | A link to the detail page about product displayed on search result. | text |
| Referrer | ssot__Referrer__c | A container that stores contextual data about the user's usage of the site or the application that referred them to the software application that generated the engagement. For example, a campaign or search advertisement. | text |
| Referrer URL | ssot__ReferrerURL__c | The URL of application that directed user to software application that generated engagement. | text |
| Sales Order | ssot__SalesOrderId__c | An internal document generated by seller indicating that customer is ready to purchase products and services. | text |
| Search Filter Type | ssot__SearchFilterTypeId__c | A reference ID to search filter types such as price or color. | text |
| Search Filter Value | ssot__SearchFilterValue__c | The value associated with a search filter. | text |
| Search Result Filter Type | ssot__SearchResultFilterTypeId__c | A reference ID to the types filtered in search results. | text |
| Search Result Sort Type | ssot__SearchResultSortTypeId__c | A reference ID to types sorted in search results. | text |
| Search Result Sort Value | ssot__SearchResultSortValue__c | The values sorted in search results. | text |
| Sent Date Time | ssot__SentDateTm__c | The date and time when the publication or communication was sent. | dateTime |
| Session | ssot__SessionId__c | A reference ID for the session used to group related events together. | text |
| Shopping Cart | ssot__ShoppingCartId__c | A reference ID to shopping cart for data captured from user actions, for example adding or removing items from shopping cart. | text |
| Target Engagement Actor | ssot__TargetEngagementActorId__c | A reference ID to engagement actor that groups different types of individuals targeted for marketing associated with engagement, for example leads and account contacts. | text |
| Task | ssot__TaskId__c | A reference ID to business activity, for example making a phone call. | text |
| Web Cookie | ssot__WebCookieId__c | A reference ID to small piece of data sent from website and stored on user's computer by user's web browser while user is browsing. | text |
| Workflow | ssot__WorkflowId__c | A reference ID to sequence of steps or processes in software application. | text |
