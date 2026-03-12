---
title: "Sales Order DMO"
domain: data-cloud
topic: sales-order-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.548Z
estimatedTokens: 2725
keywords: [Sales, Order, DMO, Data, Cloud, model, around, current, pending, orders, API, Category, Primary, Subject, Area]
---

# Sales Order DMO

> The Sales Order DMO is a Data Cloud data model object (DMO) that provides
      information around current and pending sales orders.

# Sales Order DMO

The Sales Order DMO is a Data Cloud data model object (DMO) that provides information around current and pending sales orders.

## Object API Name

ssot\_\_SalesOrder\_\_dlm

## Category

Other

## Primary Subject Area

Sales Order

## Primary Key

Sales Order ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Sales Order | Bill To Account | Many To One (N:1) | Account | Account ID |
| Sales Order | Sold To Customer | Many To One (N:1) | Individual | Individual ID |
| Sales Order Product | Sales Order | Many To One (N:1) | Sales Order | Sales Order ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Activated By User | ssot__ActivatedByUserId__c | A reference ID to user who activated order. | text |
| Adjusted Product Tax Amount | ssot__AdjustedProductTaxAmount__c | The total product tax plus the total adjustment tax amount. | number |
| Adjusted Total Product Amount | ssot__AdjustedTotalProductAmount__c | The total product amount plus the total adjustment amount. | number |
| Bill To Account | ssot__BillToAccountId__c | A reference ID to account billed for order. Can only be updated when order's StatusCode value is Draft. | text |
| Bill To Address | ssot__BillToAddressId__c | A reference ID to billing address. | text |
| Bill To Contact | ssot__BillToContactId__c | A reference ID to customer billed for order. | text |
| Bill to Email | ssot__BilltoEmailId__c | A reference ID to email address of customer billed for order. | text |
| Bill to Phone Number | ssot__BilltoPhoneNumberId__c | A reference ID to phone number of customer billed for order. | text |
| Billing Day of the Month | ssot__BillingDayOfTheMonth__c | The day of the month that customer is invoiced. | number |
| Can Bill Now | ssot__CanBillNow__c | An indicator if a customer is eligible to bill. | text |
| CompanyAuthorizedBy | ssot__CompanyAuthorizedById__c | A reference ID to user who authorized the account associated with order. | text |
| Confirmation Recipient Email | ssot__ConfirmationRecipientEmailtext__c | A list of email addresses to send messages for order confirmation. Not for large volume implementations | text |
| Contract | ssot__ContractId__c | A reference ID to contract associated with order. Can only be updated when the order's Status Code value is Draft. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency Code | ssot__CurrencyCode__c | A reference ID to currency code for order. Currency code is used for all child objects, such as sales order product and sales order price adjustments. | text |
| CustomerAuthorizedBy | ssot__CustomerAuthorizedById__c | A reference ID to contact who authorized order. | text |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by External Record Id. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The order’s description. | text |
| Device | ssot__DeviceId__c | A reference ID to electronic unit where signals are tracked, for example fridge, watch or car. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for external data source record. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Filed Date | ssot__FiledDate__c | The date the order was filed. | dateTime |
| Grand Total Amount | ssot__GrandTotalAmount__c | The total amount of the order. | number |
| Internal Business Unit | ssot__InternalBusinessUnitId__c | A reference ID to business unit within seller organization responsible for order. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns business account. | text |
| Is Alerted | ssot__IsAlerted__c | An indicator if a user is notified when something went wrong during order workflow. | text |
| Is Anonymous | ssot__IsAnonymous__c | An indicator if the order was placed by unregistered guest user. | text |
| Is Closed | ssot__IsClosed__c | An indicator if the order is closed. Used to drive and halt workflows. | text |
| Is Contracted | ssot__IsContracted__c | An indicator if the order placed is under the terms of a contract. | text |
| Is Historical Only | ssot__IsHistoricalOnly__c | An indicator for when an order is historical and can’t be changed. | text |
| Is Suspended | ssot__IsSuspended__c | An indicator for when an order is suspended. | text |
| Is Tax Exempt | ssot__IsTaxExempt__c | An indicator for whether taxes apply to order. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The order name. | text |
| Opportunity | ssot__OpportunityId__c | A reference ID to the opportunity associated with order. | text |
| Order End Date | ssot__OrderEndDate__c | The date when the order ends, such as for a subscription. | dateTime |
| Order insurance Amount Currency | ssot__OrderinsuranceAmountCurrency__c | A reference ID to the currency of the order insurance amount. | text |
| Order Number | ssot__OrderNumber__c | A unique number assigned to order and displayed to end users. | text |
| Order Start Date | ssot__OrderStartDate__c | The date when order becomes effective, such as when a subscription begins. | dateTime |
| Original Order | ssot__OriginalOrderId__c | A reference ID to the parent order. | text |
| Owner User Id | ssot__OwnerUserId__c | A reference ID to the user or entity who owns this order. | text |
| Price Calculation Status Message | ssot__PriceCalculationStatusMessagetext__c | The status message describing the state of the order’s price calculation. | text |
| Promise Date | ssot__PromiseDate__c | The date the order was promised. | dateTime |
| Purchase Order Date | ssot__PurchaseOrderDate__c | The date of purchase order. | dateTime |
| Purchase Order Number | ssot__PurchaseOrderNumber__c | The number identifying a purchase order. | text |
| Quote | ssot__QuoteId__c | A reference ID to quote associated with order. | text |
| Renewal Term | ssot__RenewalTermId__c | A reference ID to length of renewal term for renewal orders. | text |
| Renewal Uplift Rate | ssot__RenewalUpliftRate__c | For renewal orders, percentage of increase or decrease in order quantity. | number |
| Requested Start Date | ssot__RequestedStartDate__c | The customer's preferred date for order fulfillment. | dateTime |
| Sales Channel | ssot__SalesChannelId__c | A reference ID to the sales channel used to place order. | text |
| Sales Order Confirmation Status | ssot__SalesOrderConfirmationStatusId__c | A reference ID to what stage of customer approval and finalization has been achieved. | text |
| Sales Order Id | ssot__Id__c | A unique ID used as primary key for Sales Order DMO. | text |
| Sales Order Status | ssot__SalesOrderStatusId__c | Current order status, for example, draft, ready for review, or placed. | text |
| Sales Order System Status | ssot__SalesOrderSystemStatusId__c | A reference ID to order status with fixed values such as draft or activated. | text |
| Sales Order Type | ssot__SalesOrderTypeId__c | A reference ID to type of order, for example, change, renewal, or amendment. | text |
| Sales Store | ssot__SalesStoreId__c | A reference ID to the store used to place order. | text |
| Sales Order Change Logs Relationship | ssot__SalesOrderChangeLogs__c |  | text |
| Sales Order Delivery Groups Relationship | ssot__SalesOrderDeliveryGroups__c |  | text |
| Sales Order Payment Summaries Relationship | ssot__SalesOrderPaymentSummaries__c |  | text |
| Sales Order Price Adjustments Relationship | ssot__SalesOrderPriceAdjustments__c |  | text |
| Seller | ssot__SellerId__c | A reference ID to order seller. | text |
| Ship To Address | ssot__ShipToAddressId__c | A reference ID to location where order is shipped. | text |
| Ship To Contact | ssot__ShipToContactId__c | A reference ID to contact entity to whom order is shipped. | text |
| Ship To Email | ssot__ShipToEmailId__c | A reference ID to email of contact entity to whom order is shipped. | text |
| Shopping Cart Id | ssot__ShoppingCartId__c | A reference ID to shopping cart that customer used to select products in order, before placing order. | text |
| Sold To Customer | ssot__SoldToCustomerId__c | A reference ID to the customer. | text |
| Total Adjusted Delivery Tax Amount | ssot__TotalAdjustedDeliveryTaxAmount__c | The total delivery tax amount, if adjusted. | number |
| Total Adjustment Amount | ssot__TotalAdjustmentAmount__c | The sum of all order price adjustments, excluding taxes on any adjustments. | number |
| Total Adjustment Tax Amount | ssot__TotalAdjustmentTaxAmount__c | The total tax amount, if adjusted. | number |
| Total Amount Currency | ssot__TotalAmountCurrencyId__c | A reference ID to the currency of the total amount. | text |
| Total Booking Amount | ssot__TotalBookingAmount__c | The total amount of a sales order product booking. | number |
| Total Canceled Billing Amount | ssot__TotalCancelledBillingAmount__c | The total of all canceled orders. | number |
| Total Delivery Amount | ssot__TotalDeliveryAmount__c | A total of product, adjustment, and delivery fee amounts, but excluding taxes. | number |
| Total Delivery Amount Currency | ssot__TotalDeliverytAmountCurrencyId__c | A reference ID to the currency of the total delivery amount. | text |
| Total Delivery Fee Amount | ssot__TotalDeliveryFeeAmount__c | The total fee for delivery. | number |
| Total Delivery Fee Currency | ssot__TotalDeliveryFeeCurrencyId__c | A reference ID to currency of the total delivery amount. | text |
| Total Delivery Tax Amount | ssot__TotalDeliveryTaxAmount__c | The total amount of delivery tax. | number |
| Total Pending Billing Amount | ssot__TotalPendingBillingAmount__c | The total pending for all orders. | number |
| Total Product Amount | ssot__TotalProductAmount__c | The total cost of the product. | number |
| Total Product Amount Currency | ssot__TotalProductAmountCurrencyId__c | A reference ID to currency of the total product amount. | text |
| Total Product Tax Amount | ssot__TotalProductTaxAmount__c | The total amount of taxes for all product. | number |
| Total Product Tax Amount Currency | ssot__TotalProductTaxAmountCurrencyId__c | A reference ID to currency of the total product tax amount. | text |
| Total Tax Amount | ssot__TotalTaxAmount__c | The total amount of taxes. | number |
| User Device Session | ssot__UserDeviceSessionId__c |  | text |
