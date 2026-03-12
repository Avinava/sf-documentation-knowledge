---
title: "PaymentGatewayLog"
domain: object-reference
topic: paymentgatewaylog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.498Z
estimatedTokens: 1862
keywords: [PaymentGatewayLog, Stores, exchanged, Salesforce, payments, platform, external, payment, gateways, Gateway, logs, record, payloads, entities, API]
---

# PaymentGatewayLog

> Stores information exchanged between the Salesforce payments platform and
      external payment gateways. Gateway logs can also record payloads from external payment
      entities. This object is available in API version 48.0 and later.

# PaymentGatewayLog

Stores information exchanged between the Salesforce payments platform and external payment gateways. Gateway logs can also record payloads from external payment entities. This object is available in API version 48.0 and later.

Deleting or archiving a payment gateway log doesn’t impact financial data on other payment entities.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| GatewayAuthCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAuthorization approval code from the gateway. |
| GatewayAVSCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode sent by gateways that use an address verification system. |
| GatewayDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that of the gateway communication that leads to the creation of this gateway log. |
| GatewayMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInformation or error messages sent from the gateway. |
| GatewayRefNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique transaction ID created by the payment gateway. |
| GatewayResultCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGateway-specific result code. Must be mapped to a Salesforce-specific result code. |
| GatewayResultCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the gateway’s result code. This field is useful for providing more information around why the gateway returned a certain result code. |
| InteractionStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the result of communication between the payments platform and a payment gateway.Possible values are:FailedInitiatedNoOpSuccessTimeout |
| InteractionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the type of interaction with the gateway. This field is required for logs created in Salesforce.Possible values are:AuthorizationAuthorizationReversalAvsCaptureCheckGiftCardBalancePostAuthReferencedRefundSaleTokenizeVoid |
| IsNotification | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFor asynchronous transactions, shows whether the gateway log belongs to the notification (yes) or the initial transaction (no).Possible values are:NoYes |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OrderPaymentSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder payment summaries show the balances of each authorization, capture, and refund made against an order. |
| PaymentGatewayId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Payments Platform payment gateway record used for communication with the external payment gateway.This field is a relationship field.Relationship NamePaymentGatewayRelationship TypeLookupRefers ToPaymentGateway |
| PaymentGatewayLogNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated unique ID for this payment gateway log record. |
| ReferencedEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionForeign key with DomainSet of PaymentAuth and Payment.This field is a polymorphic relationship field.Relationship NameReferencedEntityRelationship TypeLookupRefers ToCardPaymentMethod, Payment, PaymentAuthAdjustment, PaymentAuthorization, Refund |
| Request | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRaw payload. No sensitive attributes are stored. |
| Response | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRaw payload. |
| RetryCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe retry category returned by the payment gateway for the failed payment. This field is available in API version 66.0 and later.Possible values are:CardLimit— Insufficient funds, exceeded spending limits, or other restrictions on the card.GatewayConnection— Connectivity or communication errors between systems, including upstream gateway errors.PaymentInformation— Missing or incorrect data such as incorrect card numbers, addresses, or currencies.PaymentProcessing— Payment account is invalid, closed, restricted, or the transaction was declined for reasons other than insufficient funds.Security— Security violations or issues such as fraud, risk, authentication, verification, and authorization.Unknown— Payment gateway error code isn't recognized or isn't mapped to a specific category. |
| SfRefNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf an IdempotencyKey was passed in the API request, its value is stored here in text format. |
| SfResultCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce-specific result code that can map to one or more gateway result codes. We recommend configuring the payment gateway adapter layer to map gateway result codes to the appropriate Salesforce result code.Possible values are:Decline: The gateway call failed. If the transaction is attempted again, it can still work. For example, the customer has insufficient funds or briefly lost their connection.Indeterminate: The gateway didn’t respond to the call. This response usually happens when Salesforce times out while waiting for a response from the gateway.PermanentFail: The gateway call failed and can’t work. Gateway calls fail permanently for one of two reasons:Hard Decline: The customer’s payment account has been closed or terminated.Fraud: The gateway recognized the payment or payment method as known fraud.RequiresReview: The customer bank requires more information before completing the payment.Success: The gateway call succeeded.SystemError: Salesforce ended the payment request before receiving a response. For example, Salesforce lost credentials or access to its server. Salesforce ends payment calls if it doesn’t receive a response from the gateway within two minutes.ValidationError: Customer payment data was incorrect, such as a misspelling in the credit card address or an incorrect CVV. |
