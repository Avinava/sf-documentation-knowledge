---
title: "OrderDeliveryGroupSummary"
domain: object-reference
topic: orderdeliverygroupsummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.769Z
estimatedTokens: 2951
keywords: [OrderDeliveryGroupSummary, current, state, group, OrderItemSummaries, belonging, OrderSummary, fulfilled, delivery, delivered, address, shipment, include, isn’t, guaranteed]
---

# OrderDeliveryGroupSummary

> Represents the current properties and state of a group of OrderItemSummaries,
      belonging to one OrderSummary, to be fulfilled using the same delivery method and delivered to
      the same address. A single shipment can include them all, but that isn’t guaranteed.
      Corresponds to one or more order delivery group objects, consisting of an original object and
      any change objects applicable to it. This object is available in API version 48.0 and
    later.

# OrderDeliveryGroupSummary

Represents the current properties and state of a group of OrderItemSummaries, belonging to one OrderSummary, to be fulfilled using the same delivery method and delivered to the same address. A single shipment can include them all, but that isn’t guaranteed. Corresponds to one or more order delivery group objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the OrderSummary associated with the OrderDeliveryGroupSummary. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| DeliverToAddress | TypeaddressPropertiesFilter, NillableDescriptionAddress of the recipient. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| DeliverToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address city. |
| DeliverToCompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| DeliverToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address country. |
| DeliverToFullFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| DeliverToFullLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| DeliverToFullName | TypestringPropertiesFilter, Group, Nillable, SortDescription |
| DeliverToFullSalutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:Dr.Mr.Mrs.Ms.Prof. |
| DeliverTo​GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy of the geocode for the recipient address.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| DeliverToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with FulfilledToLongitude to specify the precise geolocation of the recipient address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| DeliverToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with FulfilledToLatitude to specify the precise geolocation of the recipient address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| DeliverToName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName on the recipient address. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| DeliverToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address postal code. |
| DeliverToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address state. |
| DeliverToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecipient address street. |
| DeliveryInstructions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecial instructions for the delivery. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the OrderDeliveryGroupSummary.This field can be edited. |
| DesiredDeliveryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDesired date for delivery. This field is informational, available for customizations. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| EmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the recipient. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| GiftMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionGift message to include. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments and tax, of the delivery charges associated with the OrderDeliveryGroupSummary. This value only includes OrderItemSummaries of type code Charge. |
| IsGift | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the OrderDeliveryGroupSummary represents a gift. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| OrderDeliveryGroup​SummaryNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the OrderDeliveryGroupSummary. |
| OrderDeliveryMethodId | TypereferencePropertiesFilter, Group, SortDescriptionID of the order delivery method specified for the OrderDeliveryGroupSummary. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| OrderSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderSummary associated with the OrderDeliveryGroupSummary. |
| OriginalOrderDelivery​GroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the original order delivery group associated with this summary object. Nillable=true only if the associated order summary is unmanaged. For managed order summaries, nillable=false. |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the recipient. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| PromisedDeliveryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPromised date for delivery. This field is informational, available for customizations. Users with the Edit Delivery Information user permission can modify this field.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price adjustments applied to delivery charges associated with the OrderDeliveryGroupSummary. This value only includes adjustments to OrderItemSummaries of type code Charge. |
| TotalAdjustment​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the price adjustments applied to the delivery charges associated with the OrderDeliveryGroupSummary, inclusive of tax. This amount is equal to TotalAdjustmentAmount + TotalAdjustmentTaxAmount.This field is available in API version 49.0 and later. |
| TotalAdjustment​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustmentAmount. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments but not tax, of the delivery charges associated with the OrderDeliveryGroupSummary. This value only includes adjustments to OrderItemSummaries of type code Charge. |
| TotalLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, not including adjustments or tax, of the delivery charges associated with the OrderDeliveryGroupSummary. |
| TotalLineAmt​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of the delivery charges associated with the OrderDeliveryGroupSummary, inclusive of tax. This amount is equal to TotalLineAmount + TotalLineTaxAmount.This field is available in API version 49.0 and later. |
| TotalLineTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalLineAmount. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAmount. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderDeliveryGroupSummaryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [OrderDeliveryGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroup.htm "A group of order items that share a delivery method and address. The delivery method and address are used during the fulfillment process, such as shipping as a gift, downloading, picking up in store, or shipping to a standard address This object is available in API version 48.0 and later.")

-   [OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderDeliveryGroupSummaryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OrderDeliveryGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroup.htm)
- OrderItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)
