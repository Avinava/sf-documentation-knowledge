---
title: "Loyalty Transaction Journal DMO"
domain: data-cloud
topic: loyalty-transaction-journal-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.633Z
keywords: [Loyalty, Transaction, Journal, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Transaction Journal DMO

# Loyalty Transaction Journal DMO

The Loyalty Transaction Journal DMO is a Data Cloud data model object (DMO) for a collection of transactions related to a loyalty program. Loyalty Transaction Journals are related to a voucher, but could relate to other payment method types.

## Object API Name

ssot\_\_LoyaltyTransactionJournal\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Transaction Journal ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Ledger | Loyalty Transaction Journal | Many To One: N:1 | Loyalty Transaction Journal | Loyalty Transaction Journal ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Product Browse Engagement | Product Browse Engagement ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Product Order Engagement | Product Order Engagement ID |
| Loyalty Transaction Journal | Product | Many To One: N:1 | Goods Product | Goods Product ID |
| Loyalty Transaction Journal | Product | Many To One: N:1 | Bundle Product | Bundle Product ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Shopping Cart Engagement | Shopping Cart Engagement ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Message Engagement | Message Engagement ID |
| Loyalty Transaction Journal | Account Contact | Many To One: N:1 | Account Contact | Account Contact ID |
| Loyalty Transaction Journal | Brand | Many To One: N:1 | Brand | Brand ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Device Application Engagement | Device Application Engagement ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Email Engagement | Email Engagement ID |
| Loyalty Transaction Journal | Loyal Journal Subtype | Many To One: N:1 | Loyal Journal Subtype | Loyal Journal Subtype ID |
| Loyalty Transaction Journal | Loyalty Program Corporate Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Transaction Journal | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Transaction Journal | Loyalty Program Referred Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Transaction Journal | Loyalty Program Partner | Many To One: N:1 | Loyalty Program Partner | Loyalty Program Partner ID |
| Loyalty Transaction Journal | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Web Search Engagement | Web Search Engagement ID |
| Loyalty Transaction Journal | Engagement | Many To One: N:1 | Website Engagement | Website Engagement ID |
| Loyalty Transaction Journal | Related Loyalty Transaction Journal | Many To One: N:1 | Loyalty Transaction Journal | Loyalty Transaction Journal ID |
| Loyalty Transaction Journal | Loyalty Journal Type | Many To One: N:1 | Loyalty Journal Type | Loyalty Journal Type ID |
| Loyalty Transaction Journal | Payment Method | Many To One: N:1 | Voucher | Voucher ID |
| Loyalty Transaction Journal | Product | Many To One: N:1 | Master Product | Master Product ID |
| Loyalty Transaction Journal | Sales Order Product | Many To One: N:1 | Sales Order Product | Sales Order Product ID |
| Voucher | Loyalty Transaction Journal | Many To One: N:1 | Loyalty Transaction Journal | Loyalty Transaction Journal ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Account Contact | ssot__AccountContactId__c | A reference ID to an individual who has a role specific to the account. | text |
| Activity Date | ssot__ActivityDate__c | The date of the transaction. | dateTime |
| Benefit Action Process Type | ssot__BenefitActionProcessTypeId__c | A reference idea to the process type of the benefit. | text |
| Booked Fare Class | ssot__BookedFareClassId__c | A reference ID for the fare class that was booked, such as economy or first-class. | text |
| Booked Room Type | ssot__BookedRoomTypeId__c | A reference ID for the type of room booked. | text |
| Booking Date | ssot__BookingDate__c | The booking date of the voucher or related loyalty reward. | dateTime |
| Brand | ssot__BrandId__c | A reference ID to the brand association to the transaction journal. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency | ssot__CurrencyId__c | A reference ID to the currency related to the reward. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Engagement | ssot__EngagementId__c | A reference ID to the engagement related to the transaction. | text |
| Establishment Name | ssot__EstablishmentName__c | The name of the establishment related to the transaction. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Financial Transaction Type | ssot__FinancialTransactionTypeId__c | A reference ID to the type of the financial institution used for the transaction. | text |
| Flight Number | ssot__FlightNumber__c | The flight number related to the transaction. | text |
| Industry | ssot__IndustryId__c | A reference ID to the industry, for example, financial services or hospitality. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Invoice Date | ssot__InvoiceDate__c | The date of the invoice. | dateTime |
| Journal Date | ssot__JournalDate__c | The date of the journal. | dateTime |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Location | ssot__LocationId__c | A reference ID to the location related to the transaction. | text |
| Loyalty Journal Subtype | ssot__LoyaltyJournalSubtypeId__c | A reference ID for a subtype of a loyalty journal type, for example, a watched video or product review. | text |
| Loyalty Journal Type | ssot__LoyaltyJournalTypeId__c | A reference ID to the type of loyalty journal. | text |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to a marketing strategy designed to encourage customers to shop at or use the services of business associated with the program. | text |
| Loyalty Program Corporate Member | ssot__LoyaltyProgramCorporateMemberId__c | A reference ID to the corporate member of a loyalty program | text |
| Loyalty Program Member | ssot__LoyaltyProgramMemberId__c | A reference ID to the person who has joined a loyalty program | text |
| Loyalty Program Partner | ssot__LoyaltyProgramPartnerId__c | A reference ID to a company who provides a loyalty program offering to members. | text |
| Loyalty Program Referred Member | ssot__LoyaltyProgramReferredMemberId__c | A reference ID to a person referred to the program by a loyalty member. | text |
| Loyalty Transaction Journal Id | ssot__Id__c | A unique ID used as the primary key for the Loyalty Transaction Journal DMO. | text |
| Loyalty Transaction Journal Status | ssot__LoyaltyTransactionJournalStatus__c | The status of the loyalty transaction journal. | text |
| Name | ssot__Name__c | The name of a loyalty program transaction journal. | text |
| Payment Method | ssot__PaymentMethodId__c | A reference ID to the method of payment. | text |
| Payment Method Type | ssot__PaymentMethodTypeId__c | A reference ID to the type of payment method, for example a gift card or cash. | text |
| Product | ssot__ProductId__c | A reference ID to a product intended to be sold, for example goods, services, bundles, or made-to-order products. | text |
| Reason | ssot__ReasonText__c | The reason for the loyalty transaction. | text |
| Related Loyalty Transaction Journal | ssot__RelatedLoyaltyTransactionJournalId__c | A reference ID to related transaction records. | text |
| Sales Channel | ssot__SalesChannelId__c | A reference ID to the sales channel used to place order. | text |
| Sales Order Product | ssot__SalesOrderProductId__c | A reference ID to the product purchased in a sales order. | text |
| Transaction Amount | ssot__TransactionAmount__c | The amount of the transaction. | number |
| Transaction Quantity | ssot__TransactionQuantity__c | The number of transactions. | number |
| Transaction Quantity UOM | ssot__TransactionQuantityUOM__c | The transaction unit of measure, for example, credits. | text |
| Travel Destination Name | ssot__TravelDestinationName__c | The name of the travel destination. | text |
| Travel Distance Number | ssot__TravelDistanceNumber__c | The total distance, for example, 100. | number |
| Travel Distance UOM | ssot__TravelDistanceUOM__c | The total distance unit of measure, for example, miles. | text |
| Travel Origin Name | ssot__TravelOriginName__c | The name or location where the travel began. | text |
| Traveled Fare Class | ssot__TraveledFareClassId__c | A reference ID to the type of class, for example, first or business class. | text |