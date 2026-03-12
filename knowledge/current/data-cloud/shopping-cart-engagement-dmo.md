---
title: "Shopping Cart Engagement DMO"
domain: data-cloud
topic: shopping-cart-engagement-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.910Z
estimatedTokens: 3118
keywords: [Shopping, Cart, Engagement, DMO, Data, Cloud, Platform, data, model, captured, user, actions, such, adding, removing, items, shopping, cart., API, Name]
---

# Shopping Cart Engagement DMO

> The Shopping Cart Engagement DMO is a Data Cloud Data Platform data
      model object (DMO) for data captured from user actions, such as adding and removing items from
      a shopping cart.

# Shopping Cart Engagement DMO

The Shopping Cart Engagement DMO is a Data Cloud Data Platform data model object (DMO) for data captured from user actions, such as adding and removing items from a shopping cart.

## Object API Name

ssot\_\_ShoppingCartEngagement\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Shopping Cart Engagement ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Engagement | Many To One: N:1 | Shopping Cart Engagement | Shopping Cart Engagement ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Shopping Cart Engagement | Shopping Cart Engagement ID |
| Shopping Cart Engagement | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Shopping Cart Engagement | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Shopping Cart Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Shopping Cart Engagement | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID |
| Shopping Cart Engagement | Case | Many To One: N:1 | Case | Case ID |
| Shopping Cart Engagement | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Shopping Cart Engagement | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Shopping Cart Engagement | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Shopping Cart Engagement | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Shopping Cart Engagement | Engagement Asset | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Shopping Cart Engagement | Engagement Publication | Many To One: N:1 | Device Application Template | Device Application Template ID |
| Shopping Cart Engagement | Engagement Asset | Many To One: N:1 | Email Publication | Email Publication ID |
| Shopping Cart Engagement | Lead | Many To One: N:1 | Email Template | Email Template ID |
| Shopping Cart Engagement | Market Journey Activity | Many To One: N:1 | Lead | Lead ID |
| Shopping Cart Engagement | Market Segment | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Shopping Cart Engagement | Product | Many To One: N:1 | Market Segment | Market Segment ID |
| Shopping Cart Engagement | Engagement Publication | Many To One: N:1 | Master Product | Master Product ID |
| Shopping Cart Engagement | Engagement Asset | Many To One: N:1 | SMS Publication | SMS Publication ID |
| Shopping Cart Engagement | Sales Order | Many To One: N:1 | SMS Template | SMS Template ID |
| Shopping Cart Engagement | Individual | Many To One: N:1 | Individual | Individual ID |
| Shopping Cart Product Engagement | Shopping Cart Engagement | Many To One: N:1 | Shopping Cart Engagement | Shopping Cart Engagement ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID to account contact. | text |
| Action Cadence Step | ssot__ActionCadenceStepId__c | A reference ID to action cadence step. | text |
| Adjusted Total Product Amount | ssot__AdjustedTotalProductAmount__c | The total product amount after any adjustments. | number |
| Case | ssot__CaseId__c | A reference ID to a recorded issue, for example laptop connectivity. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to the accounts’ contact point, for example physical address, email address, or phone number. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency | ssot__CurrencyId__c | A reference ID to the type of currency used. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name referring to the source of records also identified as the external source ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device Country | ssot__DeviceCountryId__c | A reference ID to the country where the device is located. | text |
| Device IP Address | ssot__DeviceIPAddress__c | The IP address of the device. | text |
| Device Latitude | ssot__DeviceLatitude__c | The Geo latitude of the device when engagement was recorded. | number |
| Device Locale | ssot__DeviceLocaleId__c | A reference ID to the user locale configured on the device. | text |
| Device Longitude | ssot__DeviceLongitude__c | The Geo longitude of device when engagement was recorded. | number |
| Device Postal Code | ssot__DevicePostalCode__c | The postal code associated with the device. | text |
| Engagement Asset | ssot__EngagementAssetId__c | A reference ID to the engagement asset. | text |
| Engagement Channel | ssot__EngagementChannelId__c | A reference ID to the engagement channel. | text |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID to the action taken in the engagement channel. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the type of engagement channel. | text |
| Engagement Date Time | ssot__EngagementDateTm__c | The date and time of engagement. Since the engagement happens after send, the engagement date must be after the Send Date Time. | dateTime |
| Engagement Event Direction | ssot__EngagementEventDirectionId__c | A reference ID to the engagement event direction, such as inbound or outbound. | text |
| Engagement Notes | ssot__EngagementNotesTxt__c | The details and notes about the engagement. | text |
| Engagement Number | ssot__EngagementNbr__c | A non-automatic, user-facing ID. | text |
| Engagement Publication | ssot__EngagementPublicationId__c | A reference ID to a background process that generates volumes of email messages, SMS messages, or other Engagement Vehicle types. | text |
| Engagement Type | ssot__EngagementTypeId__c | A reference ID to the type of engagement, for example email or phone. | text |
| Engagement Vehicle | ssot__EngagementVehicleId__c | A reference ID to the vehicle where the engagement was recorded. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to system that External Record Id was assigned. | text |
| Individual | ssot__IndividualId__c | A reference ID to a contact for the account. | text |
| Internal Engagement Actor | ssot__InternalEngagementActorId__c | A reference ID to an engagement actor that groups the different types of individuals targeted for marketing engagements, for example leads and account contacts. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Gift Order | ssot__IsGiftOrder__c | A flag to indicate if the order is a gift. | text |
| Is Test Send | ssot__IsTestSend__c | A flag to indicate if an engagement record was generated as part of testing. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadlId__c | A reference ID to a person or company that showed interest in products. | text |
| Link URL | ssot__LinkURL__c | A link to the web page accessed during the engagement. | text |
| Market Audience | ssot__MarketAudienceId__c | A reference ID to the intended audience that engagement was designed to reach. | text |
| Market Journey Activity | ssot__MarketJourneyActivityId__c | A reference ID to a step or activity that a customer configures in Salesforce Journey Builder tool for marketing associated with engagement. | text |
| Market Segment | ssot__MarketSegmentId__c | A reference ID to a group of people who share one or more common characteristics, and are grouped for marketing associated with engagement. | text |
| Marketing Email List | ssot__MarketingEmailListId__c | A reference ID to the marketing email list used for the engagement. | text |
| Name | ssot__Name__c | The name of the engagement. | text |
| Net Order Amount | ssot__NetOrderAmount__c | The order amount. | number |
| Product | ssot__ProductId__c | A reference ID to a product intended to be sold, for example goods, services, bundles, or made-to-order products. | text |
| Product Brand | ssot__ProductBrandName__c | The brand of a product, for example Northern Trail Outfitters. | text |
| Product Category | ssot__ProductCategoryName__c | The class of products, such as shoes or hats. | text |
| Product Color | ssot__ProductColorName__c | The color variant of a product displayed on the search result. | text |
| Product Display Position Number | ssot__ProductDisplayPositionNumber__c | The position number where the product is displayed. | number |
| Product Display Position | ssot__ProductDisplayPosition__c | The numeric position of the product in the displayed list. | number |
| Product Image URL | ssot__ProductImageURL__c | A link to the page that hosts the product photo or image. | text |
| Product Price | ssot__ProductPriceAmount__c | The price of the product displayed on the search result. | number |
| Product Quantity | ssot__ProductQuantity__c | The product package quantity that is displayed on the search result. | number |
| Product SKU | ssot__ProductSKU__c | A product’s Stock Keeping Unit (SKU). | text |
| Product SKU | ssot__ProductSKUNumber__c | The Stock Keeping Unit (SKU) number. | text |
| Product Style | ssot__ProductStyleName__c | The product style displayed on the search result. | text |
| Product View URL | ssot__ProductViewURL__c | A link to the detail page about the product displayed on the search result. | text |
| Promotion Coupon | ssot__PromotionCouponId__c | A reference ID to payment in the form of a voucher entitling the holder to a discount on a particular product. | text |
| Referrer URL | ssot__ReferrerURL__c | The URL of an application that directed the user to the software application that generated engagement. | text |
| Sales Order | ssot__SalesOrderId__c | An internal document generated by the seller indicating that the customer is ready to purchase products and services. | text |
| Sent Date Time | ssot__SentDateTm__c | The date and time of send. | dateTime |
| Session | ssot__SessionId__c | A reference ID to a session used to group related events together. | text |
| Shopping Cart | ssot__ShoppingCartId__c | A reference ID to the shopping cart for data captured from user actions, for example adding or removing items from the shopping cart. | text |
| Shopping Cart Engagement ID | ssot__Id__c | A unique ID used as the primary key for the Shopping Cart Engagement DMO. | text |
| Shopping Cart Event Type | ssot__ShoppingCartEventTypeId__c | A reference ID to the type of shopping cart interaction. | text |
| Target Engagement Actor | ssot__TargetEngagementActorId__c | A reference ID to an engagement actor that groups different types of individuals targeted for marketing associated with engagement, for example leads and account contacts. | text |
| Task | ssot__TaskId__c | A reference ID to business activity, for example making a phone call. In the user interface, tasks and event records are collectively referred to as activities. | text |
| Total Adjustment Amount | ssot__TotalAdjustmentAmount__c | The total amount after any adjustments. | number |
| Total Delivery Amount | ssot__TotalDeliveryAmount__c | The total amount of delivery costs. | number |
| Total Product Amount | ssot__TotalProductAmount__c | The total product amount. | number |
| Total Product Quantity | ssot__TotalProductQuantity__c | The total number of a product. | number |
| Total Product Tax Amount | ssot__TotalProductTaxAmount__c | The total tax amount of the product. | number |
| Total Tax Amount | ssot__TotalTaxAmount__c | The total tax amount. | number |
| Web Cookie | ssot__WebCookieId__c | A reference ID to a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. | text |
| Workflow | ssot__WorkflowId__c | A reference ID to the sequence of steps or processes from initiation to completion. | text |
