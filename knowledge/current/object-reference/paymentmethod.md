---
title: "PaymentMethod"
domain: object-reference
topic: paymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.618Z
estimatedTokens: 1351
keywords: [PaymentMethod, buyer, uses, compensate, seller, good, service, Common, payment, include, cash, checks, credit, debit, cards]
---

# PaymentMethod

> Represents the method that a buyer uses to compensate the seller of a good or service. Common payment methods include cash, checks, credit or debit cards, money orders, bank
			transfers, and online payment services. This object is available in API version 48.0 and later.

# PaymentMethod

Represents the method that a buyer uses to compensate the seller of a good or service. Common payment methods include cash, checks, credit or debit cards, money orders, bank transfers, and online payment services. This object is available in API version 48.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account entity linked to this payment method.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Comments | TypetextareaPropertiesNillableDescriptionUsers can add comments to provide additional details about a record. Maximum of 1000 characters. |
| CompanyName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCompany name for this payment method. Part of the payment method’s address. |
| ImplementorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionShows the type of payment method. |
| IsAutoPayEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the payment method can be used for recurring payments (True) or not (False). The default value is False.This field is available in API v55.0 and later. For orgs that upgraded from v54.0, you must add this field to the Payment Method page layout in the UI. It isn't automatically added. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA unique number assigned to the payment method. Numbers start at 1000 and are read only, but administrators can change the format. |
| NickName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUser-defined nickname for this payment method. |
| PaymentMethodAddress | TypeaddressPropertiesFilter, NillableDescriptionFull address related to the alternative payment method. For more information about address fields, see Address Compound Fields. |
| PaymentMethodCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPayment method address details. |
| PaymentMethodCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPayment method address details. |
| PaymentMethodDetails | TypestringPropertiesFilter, Group, Nillable, SortDescriptionOptional information about the payment method type. This field is available in API version 57.0 and later. |
| PaymentMethodGeocodeAccuracy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionAccuracy level of the geocode for the payment method address. An accuracy level contains information about the location of a latitude and longitude. For more information about geolocation fields, see Geolocation Compound Field.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| PaymentMethodLatitude | TypedoublePropertiesFilter, Nillable, SortDescriptionLatitude of the payment method address. Used with the PaymentMethodLongitude to specify the precise geolocation of the address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PaymentMethodLongitude | TypedoublePropertiesFilter, Nillable, SortDescriptionLongitude of the payment method address. Used with the PaymentMethodLatitude to specify the precise geolocation of the address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PaymentMethodPostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPart of the address for this payment method. |
| PaymentMethodState | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPayment method address details. |
| PaymentMethodStreet | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionPayment method address details. |
| PaymentMethodSubType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMore information about the payment method. For example, if the PaymentMethodType is Visa, this field can be a digital wallet. This field is available in API version 57.0 and later. |
| PaymentMethodType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe payment method used for the transaction, such as Visa, Mastercard, EPS, SepaDebit, UnionPay, and Klarna. Method types can also be direct debit payments like ACH, Becs, and BACS. This field is available in API version 57.0 and later. |
| SavedPaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the saved payment method record.Relationship NameSavedPaymentMethodRelationship TypeLookupRefers ToSavedPaymentMethod |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe state of the payment method.Possible values are:Active—The Payments platform can use the payment method to make payments.Canceled—The Payments platform can no longer use the payment method to make payments.InActive—The Payments platform currently can’t use the payment method to make payments. Admins can change this value to Active when needed. |

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Geolocation Compound
												Field (atlas.en-us.object_reference.meta/object_reference/compound_fields_geolocation.htm)
- Compound Field Considerations
												and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
