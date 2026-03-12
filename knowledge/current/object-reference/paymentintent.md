---
title: "PaymentIntent"
domain: object-reference
topic: paymentintent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.567Z
estimatedTokens: 3459
keywords: [PaymentIntent, data, temporarily, stored, transaction’s, lifecycle, identify, buyer, merchant, amount, sending, timestamp, API, version, 58.0]
---

# PaymentIntent

> Represents data temporarily stored during a transaction’s lifecycle
         that can identify the buyer, the merchant, and the amount the buyer is sending to the
         merchant. Data such as timestamp and amount returned can also be stored in
         PaymentIntent. This object is available in API version 58.0 and later.

# PaymentIntent

Represents data temporarily stored during a transaction’s lifecycle that can identify the buyer, the merchant, and the amount the buyer is sending to the merchant. Data such as timestamp and amount returned can also be stored in PaymentIntent. This object is available in API version 58.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license with the Payments permission enabled for your org. Salesforce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account record of the buyer.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AmountCapturable | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPayment amount that a merchant can collect after the fulfillment of an order. |
| AmountRefundable | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the payment that the merchant can refund. |
| AuthorizationReversal​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount canceled before completing the transfer of funds from buyer to merchant. |
| AuthorizedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount authorized by the payer’s bank. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe billing address of the account holder. This field is the compound form of the billing address. Read-only. For details on compound address fields, see Address Compound Fields. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. The maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. The maximum size is 80 characters. |
| BillingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the billing address. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the billing address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. Maximum size is 20 characters. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. Maximum size is 80 characters. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address. |
| CapturedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount that a merchant secured from a buyer. |
| ContextData | TypestringPropertiesNillableDescriptionAdditional metadata or information about a payment, such as the source of the payment, user data, or any other relevant information that can help in processing or tracking the payment. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code for any currency allowed by the organization. Available only for orgs with the multicurrency feature enabled.Possible values are:EuroUSDThe default is USD. |
| DisputeEvidenceDueDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate by which the merchant must submit information related to the dispute. |
| DisputeFee | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that the credit card company charges the merchant for each disputed payment. The fee is also known as a chargeback fee. |
| DisputeStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the disputed transaction.Possible values are:Closed—The dispute inquiry is closed.Created—The payment gateway opens a payment dispute.Lost—The bank ruled in the account owner’s favor and refunded the charge. The refund is permanent and the dispute fee isn’t returned.Won—The bank ruled in the merchant's favor. The issuing bank returns the debited chargeback amount to the payment gateway, who passes this amount back to the merchant. |
| DisputedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount the customer is challenging. |
| EntryMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how the payment information was provided.Possible values are:Flow—Salesforce flow that initiated the payment.Merchant—The credit card isn’t available so the merchant entered the payment information via the phone or an email.Payer_Online—The payer entered their payment information online.Place_Order_V2—The payment was initiated from the Place Order V2 Orchestration.TapToPay—The card was available and the payer tapped that card or device on the payment terminal. |
| Guid | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionUnique ID of the payment sent to Stripe or PayPal. This ID links the Payments Merchant Account record with the payment at the payment provider. |
| IncurrenceStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of an orphaned payment. An orphaned payment occurs when a payment transaction is complete, but the workflow is disrupted, and the payment isn't recorded in the consuming flow. An unexpected error can cause an orphaned payment. For example, a payment is accepted at checkout, but the order doesn't get placed because of a network issue.Possible values are:Canceled—The workflow was disrupted and the payment was canceled or refunded.Claimed—The payment was recorded and the workflow was completed.Pending—The consuming workflow hasn't recorded the payment yet.If there isn't a value for this field, it means that the consumer doesn't rely on it to track orphaned payments. |
| IntentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount that a merchant expects to receive from a buyer. |
| IsCaptureComplete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionVerification whether the funds for a given payment are paid.The default value is false. |
| IsEvidenceSubmitted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionStatus of the requested information that the merchant provides to the bank about the dispute.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced but not viewed. |
| MerchantAccountId | TypereferencePropertiesFilter, Group, SortDescriptionRequired field. The merchant account record associated with a payment intent record.This field is a relationship field.Relationship NameMerchantAccountRelationship TypeLookupRefers ToMerchantAccount |
| PaymentGatewayId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe payment gateway record that processed the payment.Relationship NamePaymentGatewayRelationship TypeLookupRefers ToPaymentGateway |
| PaymentGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPayment groups organize all the payment transactions that have been made against a record such as an account or contract.This is a relationship field.This field is available in API version 65.0 and later.Relationship NamePaymentGroupRelationship TypeLookupRefers ToPaymentGroup |
| PaymentInitiationSourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe payment initiation source record associated with the payment. The record identifies the originating application and object of the payment..loRelationship NamePaymentInitiationSourceRelationship TypeLookupRefers ToPaymentInitiaionSource |
| PaymentIntentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAutogenerated number assigned to the payment record, for example PI-000000001. |
| PaymentLinkGmvDate | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionDate the payment is captured from a payment link transaction. The total amount paid is expressed as the Gross Merchandise Value (GMV). |
| PaymentLinkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe payment link record.This field is a relationship field.Relationship NamePaymentLinkRelationship TypeLookupRefers ToPaymentLink |
| PaymentMethodDetails | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAdditional information about the payment method type such as the four last digits of a card number. |
| PaymentMethodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe payment method record, indicating a card payment method, digital wallet, or alternative payment method.This field is a polymorphic relationship field.Relationship NamePaymentMethodRelationship TypeLookupRefers ToPaymentMethod |
| PaymentMethodSubType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA payment method that exists as a subtype of a payment method type. For example, Visa, Mastercard, and American Express exist as subtypes of payment method types such as Apple Pay and Google Pay. |
| PaymentMethodType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPayment method used for the transaction. |
| ProviderReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA payment record at the payment gateway that identifies the payment provider. |
| RefundedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal or partial amount refunded to the buyer due to product return, merchant’s lack of inventory, or shipping and delivering problems. |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionDelivery address for the purchase. The compound form of the shipping address. Read-only. See Address Compound Fields for details on compound address fields. |
| ShippingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. City maximum size is 40 characters. |
| ShippingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. Country maximum size is 80 characters. |
| ShippingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the shipping address. |
| ShippingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the shipping address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. The maximum size of the postal code is 20 characters. |
| ShippingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. State maximum size is 80 characters. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address. Maximum of 255 characters. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the payment record.Possible values are:AuthorizedCanceledCreatedExpiredFailedPartiallyCapturedPartiallyRefundedPendingRefundedSucceeded |
| SubmittedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe submitted by record, which identifies who processes the payment on the customer's behalf. The customer provides the authorization to submit the payment over the phone or through the mail.This field is a relationship field.Relationship NameSubmittedByRelationship TypeLookupRefers ToUser |

## Related Topics

- Address Compound
                                 Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
