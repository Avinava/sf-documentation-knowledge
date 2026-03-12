---
title: "CartDeliveryGroupMethod"
domain: object-reference
topic: cartdeliverygroupmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.145Z
estimatedTokens: 1323
keywords: [CartDeliveryGroupMethod, selected, delivery, cart, group, Lightning, B2B, Commerce, checkout, API, version, 49.0, later, Calls, Special]
---

# CartDeliveryGroupMethod

> Represents the selected delivery method for a cart delivery group used in
      Lightning B2B Commerce checkout. This object is available in API version 49.0 and
    later.

# CartDeliveryGroupMethod

Represents the selected delivery method for a cart delivery group used in Lightning B2B Commerce checkout. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartDeliveryGroupMethod object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustedShippingFee | TypecurrencyPropertiesFilter, Nillable, SortDescriptionShipping fee, including TotalAdjustmentAmount, for the delivery method. |
| Carrier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier that the buyer chose for their delivery method. Values are defined based on the user’s shipping service. This field is available in API version 59.0 or later. |
| CartCheckoutSessionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID used to identify your cart checkout session. |
| CartDeliveryGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the cart delivery group associated with the checkout session. |
| ClassOfService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier class of service that the buyer chose for their delivery method. Values are defined based on the user’s shipping service. This field is available in API version 59.0 or later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency used for your shipping fee. Default value is USD.Possible values are:USD—U.S. Dollar |
| DeliveryMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the selected order delivery method. |
| ExternalProvider | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the external shipping method provider. Optional field. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAssign new delivery groups to active delivery methods. The default value is False. This field is available in API version 59.0 or later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the delivery method. |
| ProcessTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMerchant-specified process time for the delivery method. Process time includes the time between when an order is placed and when the shipment is given to the shipping carrier. |
| ProcessTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of time used to define ProcessTime.Possible values are:DaysHoursWeeks |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. This product represents a delivery charge order product for a delivery using this delivery method. For example, you could create a product that represents an overnight express charge and assign it to an overnight express delivery method. If your store uses Salesforce Native Shipping, the ProductId is selected from a non-variation product with Shipping in its name. The term Shipping in a product name isn’t localized. If no matching product is found, a random non-variation product is used. This field is available in API version 59.0 or later. |
| ReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference number for an external delivery method. This field is available in API version 59.0 or later. |
| ShippingFee | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionShipping fee associated with the delivery method. Required field. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe adjustment amount of a promotion applicable to the delivery method. |
| TransitTimeMax | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum estimate of transit time for the delivery method. Transit time includes the time between when a shipping carrier receives a shipment and when the shipment arrives at the delivery address. |
| TransitTimeMin | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMinimum estimate of transit time for the delivery method. Transit time includes the time between when a shipping carrier receives a shipment and when the shipment arrives at the delivery address. |
| TransitTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of time used to define TransitTimeMax and TransitTimeMin.Possible values are:DaysHoursWeeks |
| WebCartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the WebCart associated with the cart delivery group method. Required field. |

## Usage

Use the CartDeliveryGroupMethod object to give commerce buyers the ability to choose a delivery method for a cart delivery group. Shipping integrations populate the delivery options that are available for a cart delivery group.
