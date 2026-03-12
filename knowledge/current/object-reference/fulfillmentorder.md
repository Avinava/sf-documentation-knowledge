---
title: "FulfillmentOrder"
domain: object-reference
topic: fulfillmentorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.837Z
estimatedTokens: 4310
keywords: [FulfillmentOrder, group, products, fees, delivery, charges, order, share, fulfillment, location, recipient, FulfillmentOrderLineItems, belonging, associated, OrderItemSummary]
---

# FulfillmentOrder

> Represents a group of products, fees, and delivery charges on a single
			order that share the same fulfillment location, delivery method, and recipient. The
			FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with
			OrderItemSummary objects belonging to a single OrderSummary. This object is
		available in API version 48.0 and later.

# FulfillmentOrder

Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Account or Person Account associated with the FulfillmentOrder. It represents the shopper in the storefront.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActiveDate | TypedatetimePropertiesFilter, Group, Nillable, SortDescriptionDate when the FulfillmentOrder becomes active.This field is available in API version 61.0 and later. |
| BillToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Contact associated with the FulfillmentOrder. It represents the shopper in the storefront when not using person accounts.This field is available in API version 49.0 and later.This field is a relationship field.Relationship NameBillToContactRelationship TypeLookupRefers ToContact |
| ClosedDate | TypedatetimePropertiesFilter, Group, Nillable, SortDescriptionDate the FulfillmentOrder closed. Automatically entered.This field is available in API version 61.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. ISO code for the currency of the OrderSummary associated with the FulfillmentOrder.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD.This field is available in API version 49.0 and later. |
| DeliveryDate | TypedatetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the FulfillmentOrder was delivered.This field is a relationship field. |
| DeliveryMethodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the DeliveryMethod used for this FulfillmentOrder.This field is a relationship field.Relationship NameDeliveryMethodRelationship TypeLookupRefers ToOrderDeliveryMethod |
| FulfilledFromLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Location handling this FulfillmentOrder.This field is a relationship field.Relationship NameFulfilledFromLocationRelationship TypeLookupRefers ToLocation |
| FulfilledToAddress | TypeaddressPropertiesFilter, NillableDescriptionAddress of the recipient. |
| FulfilledToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address city. |
| FulfilledToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address country. |
| FulfilledToEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the recipient. |
| FulfilledTo​GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy of the geocode for the recipient address.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| FulfilledToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with FulfilledToLongitude to specify the precise geolocation of the recipient address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| FulfilledToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with FulfilledToLatitude to specify the precise geolocation of the recipient address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| FulfilledToName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName on the recipient address. |
| FulfilledToPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the recipient. |
| FulfilledToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address postal code. |
| FulfilledToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address state. |
| FulfilledToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address street. |
| FulfillmentOrderNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the FulfillmentOrder. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments and tax, of the products, fees, and delivery charges on the FulfillmentOrder. This amount includes all FulfillmentOrderLineItems associated with the FulfillmentOrder. This amount is equal to TotalAmount + TotalTaxAmount. |
| InvoiceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Invoice associated with the FulfillmentOrder.This field is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| IsReship | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the FulfillmentOrder is for a reshipment. The default value is false.This field is available in API version 53.0 and later. |
| IsSuspended | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the FulfillmentOrder is suspended. The default value is false. |
| ItemCount | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of the quantities of the FulfillmentOrderLineItems included in the FulfillmentOrder. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. A null value can mean that this record has only been referenced (LastReferencedDate) and not viewed. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the original Order that generated the FulfillmentOrder.This field is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the OrderSummary associated with the FulfillmentOrder.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who currently owns this FulfillmentOrder. Default value is the User logged in to the API to perform the create.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessingTimeInMinutes | TypelongPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionHow many minutes it took to process the FulfillmentOrder, from the start of processing to completion. |
| StartFulfillmentDate | TypedatetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the fulfillment process was started for the FulfillmentOrder. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionStatus of the FulfillmentOrder. Each status corresponds to one status category, shown here in parentheses. You can customize the status picklist to represent your business processes, but the status category picklist is fixed because processing is based on those values. If you customize the status picklist, include at least one status value for each status category.Default values are:Allocated (Activated)Assigned (Fulfilling)Cancelled (Cancelled)Draft (Draft)Fulfilled (Closed)Pick Complete (Fulfilling) This value is available in API v56.0 and later.Pickpack (Fulfilling)Printed (Fulfilling) This value is available in API v56.0 and later.Rejected (Rejected) This value is available in API v56.0 and later. |
| StatusCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus category of the FulfillmentOrder. Processing of the FulfillmentOrder depends on this value. Each status category corresponds to one or more statuses.Possible values are:ACTIVATED—ActivatedCANCELLED—CancelledCLOSED—ClosedDRAFT—DraftFULFILLING—FulfillingREJECTED—Rejected This value is available in API v56.0 and later. |
| TaxLocaleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe system used to handle tax on the original Order associated with the FulfillmentOrder. Gross usually applies to taxes like value-added tax (VAT), and Net usually applies to taxes like sales tax.Possible values are:Gross (displays most prices and taxes as combined values)Net (displays most prices and taxes as separate values)This field is available in API version 49.0 and later. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the products on the FulfillmentOrder. This value only includes adjustments to FulfillmentOrderLineItems of type code Product, not adjustments to delivery charges or fees. |
| TotalAdjustment​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the products on the Fulfillment Order, inclusive of tax. This value only includes adjustments to FulfillmentOrderLineItems of type code Product. This amount is equal to TotalAdjustmentAmount + TotalAdjustmentTaxAmount.This field is available in API version 49.0 and later. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustmentAmount. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAdjusted total, not including tax, of the FulfillmentOrderLineItems, including products, fees, and delivery charges, on the Fulfillment Order. |
| TotalDelivery​AdjustAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the delivery charges on the Fulfillment Order. This value only includes adjustments to FulfillmentOrderLineItems of type Delivery Charge. |
| TotalDeliveryAdjust​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the delivery charges on the Fulfillment Order, inclusive of tax. This value only includes adjustments to FulfillmentOrderLineItems of type Delivery Charge. This amount is equal to TotalDeliveryAdjustAmount + TotalDeliveryAdjustTaxAmount.This field is available in API version 49.0 and later. |
| TotalDelivery​AdjustTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalDeliveryAdjustAmount. |
| TotalDeliveryAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of the delivery charges on the FulfillmentOrder. This value only includes FulfillmentOrderLineItems of type Delivery Charge. |
| TotalDelivery​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the delivery charges on the FulfillmentOrder, inclusive of tax. This value only includes FulfillmentOrderLineItems of type Delivery Charge. This amount is equal to TotalDeliveryAmount + TotalDeliveryTaxAmount.This field is available in API version 49.0 and later. |
| TotalDeliveryTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalDeliveryAmount. |
| TotalFeeAdjustAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the fees on the FulfillmentOrder. This value only includes adjustments to FulfillmentOrderLineItems of type Fee.This field is available in API version 56.0 and later. |
| TotalFeeAdjustAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the fees on the FulfillmentOrder, inclusive of tax. This value only includes adjustments to FulfillmentOrderLineItems of type Fee. This amount is equal to TotalFeeAdjustAmount + TotalFeeAdjustTaxAmount.This field is available in API version 56.0 and later. |
| TotalFeeAdjustTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalFeeAdjustAmount.This field is available in API version 56.0 and later. |
| TotalFeeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the fees on the FulfillmentOrder, excluding adjustments and tax. This value only includes FulfillmentOrderLineItems of type Fee.This field is available in API version 56.0 and later. |
| TotalFeeAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the fees on the FulfillmentOrder, inclusive of tax. This value only includes FulfillmentOrderLineItems of type Fee. This amount is equal to TotalFeeAmount + TotalFeeTaxAmount.This field is available in API version 56.0 and later. |
| TotalFeeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalFeeAmount.This field is available in API version 56.0 and later. |
| TotalProductAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the products on the FulfillmentOrder, excluding order adjustments, delivery charges, and fees. This value only includes FulfillmentOrderLineItems of type code Product. |
| TotalProduct​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the products on the FulfillmentOrder, inclusive of tax. This value only includes FulfillmentOrderLineItems of type code Product. This amount is equal to TotalProductAmount + TotalProductTaxAmount.This field is available in API version 49.0 and later. |
| TotalProductTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalProductAmount. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAmount. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the FulfillmentOrder. Each type corresponds to one type category, shown here in parentheses. You can customize the type picklist to represent your business processes, but the type category picklist is fixed because processing is based on those values. If you customize the type picklist, include at least one type value for each type category.Default values are:Download (Digital)Email (Digital)In Store Pickup (Physical)Retail Store (Physical)Supplier (Drop Ship)Warehouse (Physical) |
| TypeCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType category of the FulfillmentOrder. Processing of the FulfillmentOrder depends on this value. Each type category corresponds to one or more types.Possible values are:DIGITAL—DigitalDROPSHIP—Drop ShipPHYSICAL—Physical |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[FulFillmentOrderChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 62.0)

Change events are available for the object.

[FulfillmentOrderFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[FulfillmentOrderOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[FulfillmentOrderShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

#### See Also

-   [FulfillmentOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm "Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.")

-   [Order](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm "Represents an order associated with a contract or an account.")

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- FulfillmentOrderLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm)
- Order (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
