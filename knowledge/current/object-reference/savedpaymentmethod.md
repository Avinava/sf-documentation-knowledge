---
title: "SavedPaymentMethod"
domain: object-reference
topic: savedpaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:16.580Z
estimatedTokens: 2945
keywords: [SavedPaymentMethod, payment, saved, authenticated, customer, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# SavedPaymentMethod

> Represents a payment method saved by an authenticated customer. This
      object is available in API version 58.0 and later

# SavedPaymentMethod

Represents a payment method saved by an authenticated customer. This object is available in API version 58.0 and later

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountHolderEmail | TypestringPropertiesFilter, Group, Nillable, SortDescriptionEmail address of the payment method holder. |
| AccountHolderName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFull name of the payment method holder. |
| AsyncGatewayRefNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionThe payment transaction ID created by the payment gateway for asynchronous payments. This field is available in API version 66.0 and later.For Adyen, use the pspReference.For Stripe, use the fingerprint value. |
| BankAccountHolderType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDetermines whether the bank account is held by a business or an individual.Possible values are:BusinessIndividual |
| BankAccountType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCharacterizes the bank account, such as a checking or savings account. |
| BankCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCode that represents the bank who issued the payment method. |
| BankName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the bank that issued the payment method. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe billing address of the account holder of the payment method. This is the compound form of the billing address. Read-only. For details on compound address fields, see Address Compound Fields. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. Maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. Maximum size is 80 characters. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the billing address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. Maximum size is 20 characters. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. Maximum size is 80 characters. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. |
| ExpiryMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionMonth the payment method expires. |
| ExpiryYear | TypeintPropertiesFilter, Group, Nillable, SortDescriptionYear the payment method expires. |
| ExtendedPaymentMethodType | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionOther saved payment methods used for the transaction. This field is required when the value of the Type field is extd_altrn_payment_method_type or extd_wallet. This field is available in API version 66.0 and later. |
| GatewayReference | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA reference to the saved payment owner at the payment gateway. For example, a Stripe customer ID. |
| GatewayToken | TypeencryptedstringPropertiesNillableDescriptionUnencrypted unique token ID generated by the payment gateway to represent the card payment method during transactions. GatewayToken is for use with APIs earlier than version 52.0. For version 53.0 and latter, use the GatewayTokenEncrypted field. To secure the token, use the GatewayTokenEncrypted field.An error message appears if you try to record a GatewayToken for a card payment method that already has a GatewayToken or GatewayTokenEncrypted value. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionCustomer’s default payment method.The default value is false. |
| IsMerchantCreated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the merchant saved the payment method on behalf of the payer. The Payer must provide consent to the merchant to save this information.The default value is false. |
| IsSharedWithinSameAccount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the saved payment method is visible to all contacts in an account (true) or only to the contact who created it (false). The default value is false.This field is available in API version 64.0 and later. |
| Issuer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFinancial institution issuing the payment method. |
| Last4 | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLast four digits of the payment method account number. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record or list view related to this record, but didn’t access it directly. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it's possible the user referenced this record but didn’t view it directly. |
| MerchantAccountId | TypereferencePropertiesFilter, Group, SortDescriptionIdentifies the Salesforce Payments Merchant Account.This field is a relationship field.Relationship NameMerchantAccountRelationship TypeLookupRefers ToMerchantAccount |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the saved payment method. |
| Network | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSaved payment method card network, for example Visa or Union Pay. |
| Nickname | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAdditional name or label to easily identify the payment method. |
| PaymentGatewayId | TypereferencePropertiesFilter, Group, SortDescriptionThe payment gateway that is used to create a gateway token. For transactions with a saved payment method in Salesforce, this field stores the payment gateway ID used in the transaction. This field is a relationship field.This field is a relationship field.Relationship NamePaymentGatewayRelationship TypeLookupRefers ToPaymentGateway |
| PaymentMethodSubType | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionA payment method that exists as a subtype of a payment method type. For example, Visa, Mastercard, and American Express exist as subtypes of the Card payment method. This field is available in API version 66.0 and later. |
| ProcessingMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the payment was made outside of the Salesforce platform. This field is available in API version 66.0 and later.Possible values are:ExternalSalesforce |
| ReferenceOwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the Account or Contact record that owns the payment method.This field is a polymorphic relationship field.Relationship NameReferenceOwnerRelationship TypeLookupRefers ToAccount or Contact |
| StandardEntryClassCode | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA three-letter code that indicates how a customer or a business initiated and authorized an ACH payment.Possible values are:CCD—Corporate credit or debit entryPPD—Prearranged payment or deposit entryTEL—Telephone-initiated entryWEB—Internet or mobile-initiated entry |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus of the saved payment method.Possible values are:ActiveAwaitingPaymentErrored—FailedExpired |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of saved payment method.Possible values are:au_becs_debitbacs_debitbancontactcardextd_apm_typeextd_walletidealsepa_debitus_bank_account – ACH Direct Debit |
| UsageType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates if the payment method is used on or off session.Possible values are:OffSessionOnSessionRestrictedOffSession |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SavedPaymentMethodChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[SavedPaymentMethodFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SavedPaymentMethodHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SavedPaymentMethodOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SavedPaymentMethodShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- Address Compound
                                 Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- SavedPaymentMethodChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- SavedPaymentMethodFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SavedPaymentMethodHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- SavedPaymentMethodOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SavedPaymentMethodShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
