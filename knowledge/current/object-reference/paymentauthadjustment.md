---
title: "PaymentAuthAdjustment"
domain: object-reference
topic: paymentauthadjustment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.394Z
estimatedTokens: 1894
keywords: [PaymentAuthAdjustment, adjustment, made, authorized, transaction, API, version, 51.0, later, Calls, Special, Access, Rules]
---

# PaymentAuthAdjustment

> Shows information about an adjustment made to an authorized
			transaction. This object is available in API version 51.0 and later.

# PaymentAuthAdjustment

Shows information about an adjustment made to an authorized transaction. This object is available in API version 51.0 and later.

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
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account for the payment authorization adjustment. Inherited from the payment authorization.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionAmount of adjustment applied to the parent payment authorization. |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsers can add comments to provide additional details about a record. Maximum of 1000 characters. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the payment authorization adjustment record. |
| Date | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the adjustment occurred. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the adjustment takes effect on the authorization. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the parent payment authorization owner. |
| GatewayDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the reversal transaction occurred in the payment gateway. |
| GatewayRefDetails | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional data that can’t be stored in other fields on the payment record. You can use this field for transactions following the initial transaction that creates the payment record. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML. |
| GatewayRefNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique transaction ID created by the payment gateway. |
| GatewayResultCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGateway-specific result code. Must be mapped to a Salesforce-specific result code |
| GatewayResultCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the gateway’s result code. This field is useful for providing more information around why the gateway returned a certain result code. |
| IpAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe IP address of the user who initiated the payment adjustment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MacAddress | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe MAC address of the person who initiated the payment. |
| PaymentAuthAdjustmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-provided unique ID for a payment authorization adjustment record. |
| PaymentAuthorizationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the payment authorization on which the adjustment occurred.This is a relationship field.Relationship NamePaymentAuthorizationRelationship TypeLookupRefers ToPaymentAuthorization |
| PaymentIntentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the payment intent record.This field is a relationship field.Relationship NamePaymentIntentRelationship TypeLookupRefers ToPaymentIntent |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the customer who initiated the authorization adjustment. |
| ProcessingMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines whether the payment has been made outside of the payment platform.Possible values are:External—Transactions happened outside of the Salesforce payments platform.Salesforce—Salesforce made and recorded an external call to the payment gateway. |
| SfResultCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce-specific result code that can map to one or more gateway result codes. We recommend configuring the payment gateway adapter layer to map gateway result codes to the appropriate Salesforce result code.Possible values are:Decline—The gateway call failed, but it might work if the transaction is attempted again. For example, the customer had insufficient funds or briefly lost their connection.Indeterminate—The gateway didn’t respond to the call. This response usually happens when Salesforce times out while waiting for a response from the gateway.PermanentFail—The gateway call failed and won’t work even if tried again. Gateway calls fail permanently for one of two reasons:Hard Decline: The customer’s payment account has been closed or terminated.Fraud: The gateway recognized the payment or payment method as known fraud.RequiresReview—The customer bank requires more information before completing the payment.Success—The gateway call succeeded.SystemError—Salesforce ended the payment request before receiving a response. For example, Salesforce lost credentials or access to its server. Salesforce ends payment calls if it doesn’t receive a response from the gateway within two minutes.ValidationError—Customer payment data was incorrect, such as a misspelling in the credit card address or an incorrect CVV. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines the state of the payment authorization reversal.Possible values are:Canceled—The payment authorization reversal has been canceled. The parent authorization has returned to its pre-reversal balance.Draft: The payment authorization reversal can be edited before applying it against the parent authorization.Pending: The payment authorization reversal is pending. This value is available in API version 61.0 and later.Processed—The payment authorization reversal has been finalized.Users can manually change the Status field’s values as follows:Draft to ProcessedProcessed to CanceledDraft to Canceled |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines how the customer used the reversal.Possible value is:Reversal |
