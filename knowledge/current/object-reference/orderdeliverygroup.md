---
title: "OrderDeliveryGroup"
domain: object-reference
topic: orderdeliverygroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.750Z
estimatedTokens: 1841
keywords: [OrderDeliveryGroup, group, order, items, share, delivery, address, fulfillment, process, shipping, gift, downloading, picking, store, standard]
---

# OrderDeliveryGroup

> A group of order items that share a delivery method and address. The delivery
      method and address are used during the fulfillment process, such as shipping as a gift,
      downloading, picking up in store, or shipping to a standard address This object is
    available in API version 48.0 and later.

# OrderDeliveryGroup

A group of order items that share a delivery method and address. The delivery method and address are used during the fulfillment process, such as shipping as a gift, downloading, picking up in store, or shipping to a standard address This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access Commerce Orders entities, your org must have a Salesforce Order Management license. Commerce Orders entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| DeliverToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe delivery group’s order items are delivered to this address. Created based on the values of the other DeliverTo fields. |
| DeliverToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity address value. Sent to DeliverToAddress. |
| DeliverToCompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| DeliverToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry address value. Sent to DeliverToAddress |
| DeliverToFullFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| DeliverToFullLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| DeliverToFullName | TypestringPropertiesFilter, Group, Nillable, SortDescription |
| DeliverToFullSalutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:Dr.Mr.Mrs.Ms.Prof. |
| DeliverToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionGeocode accuracy address value. Sent to DeliverToAddress. |
| DeliverToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLatitude address value. Sent to DeliverToAddress. |
| DeliverToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLongitude address value. Sent to DeliverToAddress. |
| DeliverToName | TypestringPropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionName of the delivery recipient. Sent to DeliverToAddress. |
| DeliverToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal Code address value. Sent to DeliverToAddress. |
| DeliverToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState address value. Sent to DeliverToAddress. |
| DeliverToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address value. Sent to DeliverToAddress. |
| DeliveryInstructions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText field for users to add other delivery instructions. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUser-defined description for this delivery group. |
| DesiredDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe buyer’s target delivery date for the order items included in the delivery group. |
| EmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe buyer’s email address. |
| GiftMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAn optional gift message that the buyer can define if they’re sending the order items as a gift to another recipient. Applies to all order items in the delivery group. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the group’s total delivery amount and total tax amount. |
| IsGift | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAll items in the delivery group are gifts. |
| OrderDeliveryGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique number used for referencing this order delivery group. |
| OrderDeliveryMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the order delivery method related to this order delivery group. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent order for this order delivery group. An order can have multiple order delivery groups. |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the buyer. |
| PromisedDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMerchant-defined date that the items in this group will be delivered to the customer. Usually defined based on an estimated date from the shipping provider. |
| RelatedDeliveryGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe original delivery group. Used for reference in change order scenarios. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all adjustments (of type Delivery Charge) made to order items in the order delivery group. |
| TotalAdjustmentAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all adjustments (of type Delivery Charge) made to order items in the order delivery group, including tax.This is a gross tax field.To access Commerce Orders fields, your org must have a Salesforce Order Management license. Commerce Orders fields are available only in Lightning Experience.This field is available in API v49.0 and later. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all adjustments (of type Delivery Charge) made to tax lines for order items in the order delivery group. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all Total Amount fields (of type Delivery Charge) on order items within this delivery group. On an order item, the total amount equals the quantity multiplied by the unit price, including adjustments and tax. |
| TotalLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of order items (of the type Delivery Charge). On an order item, the total line amount equals the quantity multiplied by the unit price, before adjustments or tax. |
| TotalLineAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all TotalLineAmtWithTax fields (of type Delivery Charge) on order items within this delivery group. On an order item, the total line amount with tax equals the quantity multiplied by the unit price, plus tax, before adjustments.This is a gross tax field.To access Commerce Orders fields, your org must have a Salesforce Order Management license. Commerce Orders fields are available only in Lightning Experience.This field is available in API v49.0 and later. |
| TotalLineTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all Total Line Tax Amount fields (of type Delivery Charge) on order items within this delivery group. On an order item, the total line tax amount equals the total tax for that line. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all Total Tax Amount fields (of type Delivery Charge) on order items within this order delivery group. |
