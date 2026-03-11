---
title: "ReturnOrder"
domain: field-service
topic: returnorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.851Z
keywords: [ReturnOrder, Supported, Calls, Special, Access, Rules, Fields, Usage, Example, Associated, Objects]
---

# ReturnOrder

# ReturnOrder

Represents the return or repair of inventory or products in Field Service, or the return of order products in Order Management. This object is available in API version 42.0 and later.

Return orders are available in Lightning Experience, Salesforce Classic, the Salesforce mobile app, the Field Service mobile app for Android and iOS, and communities built using Salesforce Tabs + Visualforce.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service or Order Management must be enabled. If return orders are enabled by a Salesforce Order Management license, they must be created with a Status corresponding to the Status Category Activated. The default Statuses corresponding to Activated are Submitted and Approved.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the return order.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the return order.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the return order.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. ISO code for the currency of the OrderSummary associated with the ReturnOrder.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD.This field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes or context about the return order. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the items are being returned to. For example, if the return order tracks the return of products from a technician’s van to a warehouse, the warehouse is the destination location.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| ExpectedArrivalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the items are expected to arrive at the destination location. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAuthorizations can’t be captured after their expiration dates.This field is available in API version 50.0 and later. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments and tax, of the products, fees, and delivery charges on the return order. This includes all return order line items associated with the return order. This amount is equal to TotalAmount + TotalTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the return order was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the return order was last viewed. |
| LifeCycleType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the order summary is managed by Salesforce Order Management (MANAGED) or by an external system (UNMANAGED). An unmanaged order summary is stored in Salesforce for reference purposes.Some Order Management APIs reject input records that are associated with unmanaged order summaries.Order Management does not update financial bucket fields on some records that are associated with unmanaged order summaries.A user with the EditUnmanagedOrderSummaries or B2BCommerceIntegrator permission can edit certain fields on objects related to unmanaged order summaries that are normally only accessible via APIs.Possible values are:MANAGED—ManagedUNMANAGED—UnmanagedThis field is available in API version 50.0 and later. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the return order. When you associated a return order with an order, you can associate the return order’s line items with order products.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the order summary associated with the return order.This field is available in API version 50.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the return order.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product request associated with the return order. When you associated a return order with a product request, you can associate the return order’s line items with the product request’s line items.A return order might be related to a product request if the return order tracks the return of unused products or products to be repaired or replaced. For example, a technician creates a product request for three motors to prepare for a field visit. If the technician finds that only two motors are needed, they can create a return order to return the third to the original location, and list the product request in this field.This is a relationship field.Relationship NameProductRequestRelationship TypeLookupRefers ToProductRequestThis field is available only if Field Service or Health Cloud is enabled. |
| ProductServiceCampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product service campaign associated with the return orderThis field is available only if Field Service is enabled. |
| RefundInstructionsHint | TypetextareaPropertiesNillableDescriptionStores a JSON representation of the payment credit and refund sequences for ensure credit, ensure refund, and the change orders associated with it.This field is available in API version 65.0 and later. |
| ReturnOrderNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) Auto-generated number identifying the return order. |
| ReturnedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user returning the items.This is a relationship field.Relationship NameReturnedByRelationship TypeLookupRefers ToUser |
| ShipFromAddress | TypeaddressPropertiesFilter, NillableDescriptionThe return shipping address. This address tracks the location of the items at the start of the return or repair. For example, if a customer is returning an item, the Ship From address is the customer’s address. |
| ShipFromCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the return shipping address. This address tracks the location of the items at the start of the return or repair. For example, if a customer is returning an item, the Ship From address is the customer’s address. |
| ShipFromCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the return shipping address. This address tracks the location of the items at the start of the return or repair. For example, if a customer is returning an item, the Ship From address is the customer’s address. |
| ShipFromGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the return shipping address. See Compound Fields Considerations and Limitations for details on geolocation compound fields. This field is available in the API only. |
| ShipFromLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the return shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Fields Considerations and Limitations for details on geolocation compound fields. This field is available in the API only. |
| ShipFromLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the return shipping address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Fields Considerations and Limitations for details on geolocation compound fields. This field is available in the API only. |
| ShipFromPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the return shipping address. This address tracks the location of the items at the start of the return or repair. For example, if a customer is returning an item, the Ship From address is the customer’s address. |
| ShipFromState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the return shipping address. This address tracks the location of the items at the start of the return or repair. For example, if a customer is returning an item, the Ship From address is the customer’s address. |
| ShipFromStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the return shipping address. This address tracks the location of the items at the start of the return or repair. For example, if a customer is returning an item, the Ship From address is the customer’s address. |
| ShipmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of shipment associated with the return order. Available values are:Standard (default value)RushOvernightNext Business DayPick Up |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe items’ location at the start of the return or repair. For example, if the return order tracks the return of products from a technician’s service vehicle to a warehouse, the service vehicle is the source location.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the return order. Available values are:DraftSubmittedApprovedCanceledClosedIf return orders are enabled by a Salesforce Order Management license, they must be created with a Status corresponding to the Status Category Activated. The default Statuses corresponding to Activated are Submitted and Approved. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus category of the return order. Processing of the return order depends on this value. Each status category corresponds to one or more statuses.Possible values are:ActivatedCanceledClosedDraftPendingThis field is available in API version 50.0 and later. |
| TaxLocaleType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe system used to handle tax on the original order associated with the return order. Gross usually applies to taxes like value-added tax (VAT), and Net usually applies to taxes like sales tax.Possible values are:Automatic (displays most prices and taxes as combined values)Gross (displays most prices and taxes as combined values)Net (displays most prices and taxes as separate values)This field is available in API version 50.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAdjusted total, not including tax, of the return order line items, including products, fees, and delivery charges, on the ReturnOrder.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalDeliveryAdjustAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the delivery charges on the return order. This value only includes adjustments to return order line items of type code Charge.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalDeliveryAdjustAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the delivery charges on the return order, inclusive of tax. This value only includes adjustments to return order line items of type code Charge. This amount is equal to TotalDeliveryAdjustAmount + TotalDeliveryAdjustTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalDeliveryAdjustTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalDeliveryAdjustAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalDeliveryAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of the delivery charges on the return order. This value only includes return order line items of type code Charge.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalDeliveryAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the delivery charges on the return order, inclusive of tax. This value only includes return order line items of type code Charge. This amount is equal to TotalDeliveryAmount + TotalDeliveryTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalDeliveryTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalDeliveryAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalFeeAdjustAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the fees on the return order. This value only includes adjustments to return order line items of type Fee.This is a calculated field.This field is available in API version 56.0 and later. |
| TotalFeeAdjustAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the fees on the return order, inclusive of tax. This value only includes adjustments to return order line items of type Fee. This amount is equal to TotalFeeAdjustAmount + TotalFeeAdjustTaxAmount.This is a calculated field.This field is available in API version 56.0 and later. |
| TotalFeeAdjustTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalFeeAdjustAmount.This is a calculated field.This field is available in API version 56.0 and later. |
| TotalFeeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of the fees on the return order. This value only includes return order line items of type Fee.This is a calculated field.This field is available in API version 56.0 and later. |
| TotalFeeAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the fees on the return order, inclusive of tax. This value only includes return order line items of type Fee. This amount is equal to TotalFeeAmount + TotalFeeTaxAmount.This is a calculated field.This field is available in API version 56.0 and later. |
| TotalFeeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalFeeAmount.This is a calculated field.This field is available in API version 56.0 and later. |
| TotalProductAdjustAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the products on the return order. This value only includes adjustments to return order line items of type code Product.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalProductAdjustAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the products on the return order, inclusive of tax. This value only includes adjustments to return order line items of type code Product. This amount is equal to TotalProductAdjustAmount + TotalProductAdjustTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalProductAdjustTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalProductAdjustmentAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalProductAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of the product charges on the return order. This value only includes return order line items of type code Product.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalProductAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the product charges on the return order, inclusive of tax. This value only includes return order line items of type code Product. This amount is equal to TotalProductAmount + TotalProductTaxAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalProductTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalProductAmount.This is a calculated field.This field is available in API version 50.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAmount.This is a calculated field.This field is available in API version 50.0 and later. |

## Usage

You can use return orders to track customer returns, customer repairs, or the return of inventory from a technician’s van stock to a warehouse or supplier. Customers can initiate a return from a community, or agents can create return orders in response to a customer call or technician request.

Return orders are composed of return order line items, which allow you to add details about the items being returned. To represent the returned items, each line item must list one or more of the following: product, product item, asset, product request line item, and order product. Return orders can be associated with a product request, case, account, contact, and order if needed. This versatility lets you use return orders to track a wide range of return scenarios.

## Example

{ "RefundInstructionsHint": { "PaymentCreditSequence": \[ { "OrderPaymentSummaryId": "0bMxx0000000000001", "Amount": 50, "CreditType": "GIFT\_CARD", "Rank": 1 }, { "OrderPaymentSummaryId": "0bMxx0000000000002", "Amount": 50, "CreditType": "CHECK", "Rank": 2 } \] }, "RefundSequence": \[ { "OrderPaymentSummaryId": "0bMxx0000000000001", "Amount": 50, "Rank": 1 }, { "OrderPaymentSummaryId": "0bMxx0000000000002", "Amount": 50, "Rank": 2 } \], "ChangeOrders": \[ { "ChangeOrderId": "801xx000003Gd01111", "FeeChangeOrderId": null, "NetAmount": -75 } \] }

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ReturnOrderChangeEvent (API version 48.0)

Change events are available for the object.

ReturnOrderFeed

Feed tracking is available for the object.

ReturnOrderHistory

History is available for tracked fields of the object.

ReturnOrderOwnerSharingRule

Sharing rules are available for the object.

ReturnOrderShare

Sharing is available for the object.