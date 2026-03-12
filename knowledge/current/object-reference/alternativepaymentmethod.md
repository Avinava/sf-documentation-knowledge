---
title: "AlternativePaymentMethod"
domain: object-reference
topic: alternativepaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.233Z
estimatedTokens: 2706
keywords: [AlternativePaymentMethod, payment, isn’t, cash, debit, card, credit, aren’t, defined, CardPaymentMethod, DigitalWallet, objects, Examples, alternative, include]
---

# AlternativePaymentMethod

> Represents a payment method that isn’t cash, a debit card, or a credit
			card. This object defines methods that aren’t defined by the CardPaymentMethod or DigitalWallet objects. Examples of alternative payment
			methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment
			method for processing transactions through a payment gateway. This object is
		available in API version 51.0 and later.

# AlternativePaymentMethod

Represents a payment method that isn’t cash, a debit card, or a credit card. This object defines methods that aren’t defined by the [CardPaymentMethod](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm "Represents a credit card or debit card payment method, which implements the PaymentMethod object. This object is available in API version 48.0 and later.") or [DigitalWallet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_digitalwallet.htm "Represents a customer’s digital wallet service. Salesforce Payments can use a digital wallet as a payment source when processing payments through a payment gateway. This object is available in API version 48.0 and later.") objects. Examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. AlternativePaymentMethod functions the same as any other type of payment method for processing transactions through a payment gateway. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for the alternative payment method.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AlternativePaymentMethod​Number | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSalesforce ID number for the alternative payment method. |
| AuditEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the payment owner where audit information about payments is sent. |
| BankAccountHolderType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDetermines if the bank account is held by a business or an individual.Possible values are:BusinessIndividual |
| BankAccountType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of bank account such as a checking or savings account. |
| BillingFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of the payment method owner, based on their billing address details.This field is available in API version 58.0 and later. |
| BillingLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name of the payment method owner, based on their billing address details.This field is available in API version 58.0 and later. |
| BillingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first and last name of the payment method owner, based on their billing address details.This field is available in API version 58.0 and later. |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUsers can add comments to provide additional details about a record. Maximum of 1000 characters. |
| CompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCompany name for this payment method. Part of the payment method’s address. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the payment method holder. |
| ExtendedPaymentMethodType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOther alternative payment methods used for the transaction. This field is available in API version 66.0 and later. |
| GatewayToken | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionTokenized form of the alternative payment method, returned by the gateway. Stored as encrypted text. |
| GatewayTokenDetails | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA unique tokenized ID generated by the payment gateway when this payment method first interacts with the gateway. Used to identify the payment method during future transactions. |
| IpAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIP address for the payment method owner. |
| IsAutoPayEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the payment method can be used for recurring payments (True) or not (False). The default value is False.This field is available in API v55.0 and later. For orgs that upgraded from v54.0, you must add this field to the Alternative Payment Method page layout in the UI. It isn't automatically added. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MacAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMac Address of the payment method holder. |
| NickName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser-defined nickname for this payment method. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the alternative payment method.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentGatewayId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the payment gateway entity used to handle transactions from this payment method.This field is a relationship field.Relationship NamePaymentGatewayRelationship TypeLookupRefers ToPaymentGateway |
| PaymentMethodAddress | TypeaddressPropertiesFilter, NillableDescriptionFull address associated with the alternative payment method. For more information about address fields, see Address Compound Fields. |
| PaymentMethodCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment method address details. |
| PaymentMethodCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment method address details. |
| PaymentMethodDetails | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionOptional information about the payment method type. This field is available in API version 57.0 and later. |
| PaymentMethodGeocode​Accuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the payment method address. An accuracy level contains information about the location of a latitude and longitude. For more information about geolocation fields, see Geolocation Compound Field.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| PaymentMethodLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLatitude of the payment method address. Used with the PaymentMethodLongitude to specify the precise geolocation of the address. For details about geolocation compound fields, see Compound Field Considerations and Limitations. |
| PaymentMethodLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLongitude of the payment method address. Used with the PaymentMethodLatitude to specify the precise geolocation of the address. For details about geolocation compound fields, see Compound Field Considerations and Limitations. |
| PaymentMethodPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the address for this payment method. |
| PaymentMethodState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the address for this payment method. |
| PaymentMethodStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the address for this payment method. |
| PaymentMethodSubType | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionMore information about the payment method. For example, if the PaymentMethodType is Visa, this field can be a digital wallet. This field is available in API version 57.0 and later. |
| PaymentMethodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPayment method used for the transaction, such as Visa, Mastercard, EPS, SepaDebit, and Klarna. This field is available in API version 57.0 and later. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the payment method's owner. |
| ProcessingMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates whether the payment method was created in Salesforce or externally. Required.Possible values are:External: Select this value if you create the alternative payment method record through any method other than the Salesforce Payments Connect API.Salesforce: Select this value if you use Salesforce Payments Connect API to create the alternative payment method record. |
| SavedPaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the saved payment method record.Relationship NameSavedPaymentMethodRelationship TypeLookupRefers ToSavedPaymentMethod |
| StandardEntryClassCode | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA three-letter code that indicates how a customer or a business initiated and authorized an ACH payment.Possible values are:CCD—Corporate credit or debit entryPPD—Pre-arranged payment and deposit entryTEL—Telephone-initiated entryWEB—Internet or mobile-initiated entry |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state of the payment method. Required.Possible values are:Active—The Payments platform can use the alternative payment method to make payments. Active alternative payment methods can't be deleted.Canceled—The Payments platform can no longer use the payment method to make payments. A value of Canceled can't be changed back to Active or InactiveInActive—The Payment platform currently can't use the payment method to make payments. Admins can change this value to Active or Canceled when needed. |

## Related Topics

- CardPaymentMethod (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm)
- DigitalWallet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_digitalwallet.htm)
- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Geolocation Compound Field (atlas.en-us.object_reference.meta/object_reference/compound_fields_geolocation.htm)
- Compound Field Considerations
												and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
