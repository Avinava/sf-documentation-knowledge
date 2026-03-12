---
title: "Commerce: Fulfillment Order Mapping"
domain: data-cloud
topic: commerce-fulfillment-order-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:13.143Z
estimatedTokens: 832
keywords: [Commerce, Fulfillment, Order, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., information, how]
---

# Commerce: Fulfillment Order Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order data is information about how a
         sales order is delivered to a customer and who delivers it. For example, the warehouse that
         fills an order and the required information about the process.

# Commerce: Fulfillment Order Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order data is information about how a sales order is delivered to a customer and who delivers it. For example, the warehouse that fills an order and the required information about the process.

## DLO to DMO Mapping

These data mappings relate to the FulfillmentOrder object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | FulfillmentOrder | id |
| AccountNumber | reference | FulfillmentOrder | AccountId |
| BillToContactId | reference | FulfillmentOrder | BillToContactId |
| CurrencyIsoCode | picklist | FulfillmentOrder | CurrencyCode |
| DeliveryMethodId | reference | FulfillmentOrder | OrderDeliveryMethodId |
| FulfilledToCountry | string | FulfillmentOrder | FufilledToCountryCodeId |
| FulfilledToEmailAddress | email | FulfillmentOrder | FulfilledToEmailAddressId |
| FulfilledToLatitude | double | FulfillmentOrder | FufilledToLatitudeCode |
| FulfilledToLongitude | double | FulfillmentOrder | FufilledToLongitudeCode |
| FulfilledToName | string | FulfillmentOrder | FulfilledToNm |
| FulfilledToPhone | phone | FulfillmentOrder | FulfilledToPhoneId |
| FulfillmentOrderNumber | string | FulfillmentOrder | FulfillmentOrderNumber |
| GrandTotalAmount | currency | FulfillmentOrder | GrandTotalAmount |
| IsReship | boolean | FulfillmentOrder | isReship |
| IsSuspended | boolean | FulfillmentOrder | isSuspended |
| ItemCount | double | FulfillmentOrder | TotalItemCount |
| OrderSummaryId | reference | FulfillmentOrder | SalesOrderId? |
| Status | picklist | FulfillmentOrder | FulfillmentStatusId |
| StatusCategory | picklist | FulfillmentOrder | FulfillmentStatusCategoryId |
| TaxLocaleType | picklist | FulfillmentOrder | TaxationPolicyId |
| TotalAdjustmentAmount | currency | FulfillmentOrder | TotalAdjustmentAmount |
| TotalAdjustmentAmtWithTax |  | FulfillmentOrder | TotalAdjustmentWithTaxAmount |
| TotalAdjustmentTaxAmount |  | FulfillmentOrder | TotalAdjustmentTaxAmount |
| TotalAmount | currency | FulfillmentOrder | TotalAmount |
| TotalDeliveryAdjustAmount | currency | FulfillmentOrder | TotalDeliveryAdjAmount |
| TotalDeliveryAdjustAmtWithTax | currency | FulfillmentOrder | ATotalDeliveryAdjstWithTaxAmount |
| TotalDeliveryAdjustTaxAmount | currency | FulfillmentOrder | TotalDeliveryAdjTaxAmount |
| TotalDeliveryAmount | currency | FulfillmentOrder | TotalDeliveryAmount |
| TotalDeliveryAmtWithTax | currency | FulfillmentOrder | TotalDeliveryWithTaxAmount |
| TotalDeliveryTaxAmount | currency | FulfillmentOrder | TotalDeliveryTaxAmount |
| TotalProductAmount | currency | FulfillmentOrder | TotalProductAmount |
| TotalProductAmtWithTax | currency | FulfillmentOrder | TotalProductWithTaxAmount |
| TotalProductTaxAmount | currency | FulfillmentOrder | TotalProductTaxAmount |
| TotalTaxAmount | currency | FulfillmentOrder | TotalTaxAmount |
| Type | picklist | FulfillmentOrder | FulfillmentTypeId |
| TypeCategory | picklist | FulfillmentOrder | FulfillmentTypeCategoryId |
| SystemModstamp | dateTime | FulfillmentOrder | SystemModstamp |
