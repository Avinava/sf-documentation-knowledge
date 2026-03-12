---
title: "Payment"
domain: object-reference
topic: payment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.379Z
estimatedTokens: 3363
keywords: [Payment, event, shopper, credit, cards, capture, sale, doesn't, appear, shopper's, card, statement, API, version, 48.0]
---

# Payment

> Represents a single event when a shopper makes a payment. For credit cards,
			this event is a payment capture or payment sale, but it doesn't appear on the shopper's
			credit card statement. This object is available in API version 48.0 and
		later.

# Payment

Represents a single event when a shopper makes a payment. For credit cards, this event is a payment capture or payment sale, but it doesn't appear on the shopper's credit card statement. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can edit or delete a payment only in draft state, which you specify with the **Status** field.

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who made the payment.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount to be debited or captured. |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount – the net applied amount. |
| CancellationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the payment was voided. |
| CancellationEffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the cancellation of this payment takes effect. |
| CancellationGatewayDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gateway provides this date following a successful cancellation request. |
| CancellationGatewayRefNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem-provided unique transaction ID from the payment gateway. |
| CancellationGatewayResultCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGateway-specific result code. Must be mapped to a Salesforce-specific result code. |
| CancellationSfResultCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA Salesforce result code that can be mapped to one or more gateway result codes. We recommend that the payment gateway adapter layer maps gateway-specific codes to the Salesforce result code. |
| ClientContext | TypetextareaPropertiesNillableDescriptionContains caller context for payment APIs. Useful for re-establishing context during an asynchronous payment transaction. |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsers can provide additional details about the payment record. Supports a maximum of 1000 characters. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the invoiceʼs total amount with tax was converted to the corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate thatʼs used to convert the invoiceʼs total amount with tax to the corporate currency. Available in version 63.0 and later. |
| CorporateCurrencyISOCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. Available in version 63.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the payment group record. |
| Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when this payment record was created. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that this payment takes effect. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the user who initiated the payment. |
| GatewayDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gateway provides this date for reference following a successful gateway communication. |
| GatewayRefDetails | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional data that can’t be stored in other fields on the payment record. You can use this field for transactions following the initial transaction that creates the payment record. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML. |
| GatewayRefNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique transaction ID created by the payment gateway. |
| GatewayResultCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGateway-specific result code that must map to a Salesforce-specific result code. One Salesforce result code can map to multiple gateway result codes. |
| GatewayResultCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the gateway’s result code. |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionShows the payment’s financial impact against the customer’s accounts receivable. If the payment is valid, this value is the negative of the payment amount. If the payment is voided, this value is 0. |
| IpAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe IP address of the user who initiated the payment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record is possibly referenced (LastReferencedDate) but not viewed. |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used in this invoice. Available in API version 65.0 and later. This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| MacAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe MAC address of the person who initiated the payment. |
| NetApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal payment amount that has been applied, including adjustments. |
| NetPaymentCreditApplied | TypecurrencyPropertiesFilter, SortDescriptionTotal payment amount that has been credited. This amount is equal to TotalPaymentCreditApplied - TotalPaymentCreditUnapplied. This field is a calculated field.This field is available in API version 65.0 and later. |
| NetRefundApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal refund amount that has been applied to the payment, including adjustments. |
| OrderPaymentSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder payment summaries show the balances of each authorization, capture, and refund made against an order. |
| PaymentAuthorizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorization record for this payment. If there's a delayed capture (when the capture occurs after the authorization), all captures must be made against a previously successful authorization transaction.This field is a relationship field.Relationship NamePaymentAuthorizationRelationship TypeLookupRefers ToPaymentAuthorization |
| PaymentGatewayId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the payment gateway that processed the payment. If there’s a delayed payment, the field is populated from the authorization record.This field is a relationship field.Relationship NamePaymentGatewayRelationship TypeLookupRefers ToPaymentGateway |
| PaymentGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment groups organize all the payment transactions that have been made against a record such as an account or contract. If there’s a delayed payment, the field is populated from the authorization record.This field is a relationship field.Relationship NamePaymentGroupRelationship TypeLookupRefers ToPaymentGroup |
| PaymentIntentGuid | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionUnique ID of the payment sent to Stripe or PayPal. Links the Payments Merchant Account record with the payment at the payment provider. |
| PaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method that the customer used to provide this payment information.This field is a relationship field.Relationship NamePaymentMethodRelationship TypeLookupRefers ToPaymentMethod |
| PaymentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-created unique ID for this payment record. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the customer who initiated the payment. |
| ProcessingMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines whether the payment has been made outside of the payment platform.Possible values are:External: Transactions happened outside of the Salesforce payments platform.Salesforce: Salesforce made and recorded an external call to the payment gateway. |
| SfResultCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce-specific result code that can map to one or more gateway result codes. We recommend configuring the payment gateway adapter layer to map gateway result codes to the appropriate Salesforce result code.Possible values are:Decline: The gateway call failed, but if the problem is fixed and the transaction is retried, it can work. For example, the customer had insufficient funds or briefly lost their connection.Indeterminate: The gateway didn’t respond to the call. This response usually happens when Salesforce times out while waiting for a response from the gateway.PermanentFail: The gateway call failed. If tried again, it still doesn't work. Gateway calls fail permanently for one of two reasons:Hard Decline: The customer’s payment account has been closed or terminated.Fraud: The gateway recognized the payment or payment method as known fraud.RequiresReview: The customer bank requires more information before completing the payment.Success: The gateway call succeeded.SystemError: Salesforce ended the payment request before receiving a response. For example, Salesforce lost credentials or access to its server. Salesforce ends payment calls if it doesn’t receive a response from the gateway within two minutes.ValidationError: Customer payment data was incorrect, such as a misspelling in the credit card address or an incorrect CVV. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines the state of this payment.Possible values are:Canceled: This payment has been unapplied from its target and can no longer be allocated.Draft: The payment can be edited before posting it and allocating it to a target. The payment can also be deleted.Processed: This payment has been finalized and can be allocated against a target.Users can manually change the Status field’s values as follows:Draft to ProcessedProcessed to CanceledDraft to Canceled |
| TotalApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of this payment’s balance that has been applied against an invoice. |
| TotalPaymentCreditApplied | TypecurrencyPropertiesFilter, SortDescriptionThe total amount of all credit types that have been applied against this payment. This field is a calculated field.This field is available in API version 65.0 and later. |
| TotalPaymentCreditUnapplied | TypecurrencyPropertiesFilter, SortDescriptionThe total amount of all credit types that haven't been applied against this payment. This field is a calculated field.This field is available in API version 65.0 and later. |
| TotalRefundApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of a refund that has been applied against this payment. |
| TotalRefundUnapplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of a previously applied refund that has since been unapplied from this payment. |
| TotalUnapplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of this payment that was previously applied and then unapplied. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines how the customer used this payment.Possible values are:CaptureSale |

#### See Also

-   [OrderPaymentSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm "Represents the current properties and state of payments using a single payment method that are applied to one OrderSummary. This object is available in API version 48.0 and later.")

## Related Topics

- OrderPaymentSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm)
