---
title: "PaymentAuthorization"
domain: object-reference
topic: paymentauthorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.412Z
estimatedTokens: 2401
keywords: [PaymentAuthorization, payment, authorization, event, users, capture, reverse, against, reserve, funds, API, version, 48.0, later, Calls]
---

# PaymentAuthorization

> Represents a single payment authorization event where users can capture or
			reverse a payment against a reserve of funds. This object is available in API
		version 48.0 and later.

# PaymentAuthorization

Represents a single payment authorization event where users can capture or reverse a payment against a reserve of funds. This object is available in API version 48.0 and later.

A common type of payment authorization occurs when a user sees a pending transaction against their credit card account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can only delete a payment in draft state, which you specify in the **Status** field.

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustomer account.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount authorized for the payment event. |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAuthorized amount – total processed captured amount – total processed authorization reversal amount. Balance can be positive or negative. |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsers can enter comments to provide additional details about the authorization. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the payment authorization record. |
| Date | TypedateTimePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionBy default, the day the authorization record was created. Users can also enter a different date. Editable only when the payment authorization’s status is Draft. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the authorization takes effect. Editable only when the payment authorization’s status is Draft. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the person who initiated the payment. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAuthorizations can’t be captured after their expiration dates. |
| GatewayAuthCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAuthorization approval code from the payment gateway. |
| GatewayDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that of the gateway communication that leads to the successful payment authorization. |
| GatewayRefDetails | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional data that can’t be stored in other fields on the payment record. You can use this field for transactions following the initial transaction that creates the payment record. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML. |
| GatewayRefNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique transaction ID from the payment gateway. |
| GatewayResultCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGateway-specific result code. Must be mapped to a Salesforce-specific result code. |
| GatewayResultCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the gateway’s result code. This field is useful for providing more information around why the gateway returned a certain result code. |
| IpAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe IP address of the user who initiated the payment authorization. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MacAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe MAC address of the person who initiated the payment. |
| OrderPaymentSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder payment summaries show the balances of each authorization, capture, and refund made against an order. |
| PaymentAuthorizationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-provided unique ID for a payment authorization record. |
| PaymentGatewayId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce payment gateway record that created this authorization. This gateway will be used for subsequent captures.This is a relationship field.Relationship NamePaymentGatewayRelationship TypeLookupRefers ToPaymentGateway |
| PaymentGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment groups organize all the payment transactions that have been made against a record such as an account or contract. Populated from the authorization record if there is delayed payment.This is a relationship field.Relationship NamePaymentGroupRelationship TypeLookupRefers ToPaymentGroup |
| PaymentIntentGuid | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionUnique ID of the payment sent to Stripe or PayPal. Links the Payments Merchant Account record with the payment at the payment provider. |
| PaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer payment method provided during this authorization.This is a relationship field.Relationship NamePaymentMethodRelationship TypeLookupRefers ToPaymentMethod |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the person who initiated the payment. |
| ProcessingMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines whether the payment has been made outside of the payment platform.Possible values are:External—Transactions happened outside of the Salesforce payments platform.Salesforce—Salesforce made and recorded an external call to the payment gateway. |
| SfResultCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce-specific result code that can map to one or more gateway result codes. We recommend configuring the payment gateway adapter layer to map gateway result codes to the appropriate Salesforce result code.Possible values are:Decline—The gateway call failed, but it may still work if the transaction is attempted again. For example, the customer had insufficient funds or briefly lost their connection.Indeterminate—The gateway didn’t respond to the call. This response usually happens when Salesforce times out while waiting for a response from the gateway.PermanentFail—The gateway call failed and won’t work even if tried again. Gateway calls fail permanently for one of two reasons:Hard Decline: The customer’s payment account has been closed or terminated.Fraud: The gateway recognized the payment or payment method as known fraud.RequiresReview—The customer bank requires more information before completing the payment.Success—The gateway call succeeded.SystemError—Salesforce ended the payment request before receiving a response. For example, Salesforce lost credentials or access to its server. Salesforce ends payment calls if it doesn’t receive a response from the gateway within two minutes.ValidationError—Customer payment data was incorrect, such as a misspelling in the credit card address or an incorrect CVV. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines the state of this payment.Possible values are:Canceled—This payment has been unapplied from its target and can to longer be allocated.Draft—The payment can be edited before posting it and allocating it to a target.Failed—Authorization for the payment failed.Pending—Processed—This payment has been finalized and can be allocated against a target.Users can manually change the Status field’s values as follows:Draft to ProcessedProcessed to CanceledDraft to Canceled |
| TotalAuthReversalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all processed authorization reversals against the payment authorization.This is a calculated field. |
| TotalPaymentCaptureAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all authorization captures related to this payment authorization. |

#### See Also

-   [OrderPaymentSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm "Represents the current properties and state of payments using a single payment method that are applied to one OrderSummary. This object is available in API version 48.0 and later.")

## Related Topics

- OrderPaymentSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm)
