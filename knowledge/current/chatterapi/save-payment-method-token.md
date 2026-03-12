---
title: "Save Payment Method Token"
domain: chatterapi
topic: save-payment-method-token
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.175Z
estimatedTokens: 885
keywords: [Save, Payment, Token, Store, setup, intent, SavedPaymentMethod, record, Special, Access, Rules]
---

# Save Payment Method Token

> Store the setup intent and payment method details in the
      SavedPaymentMethod object. Update the setup
      intent and payment method details record. Delete the payment method details
    record.

# Save Payment Method Token

Store the setup intent and payment method details in the SavedPaymentMethod object. Update the setup intent and payment method details record. Delete the payment method details record.

The Save Payment Method Token API call happens after the Save Payment Method request with the save payment method details is made to the payment gateway, such as Stripe, and the Setup Intent creation happens at the payment gateway end. The setup intent and payment method details are fetched from the payment gateway and stored in the SavedPaymentMethod object. This is a synchronous call.

## Special Access Rules

To access Salesforce Payments resources, your need the following license and permissions:

-   Salesforce Payments License
-   Payments Administrator permission set

Resource

```

```

Example

```

```

Available version

60.0

HTTP methods

DELETE, PATCH, POST

Request parameters for DELETE and PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | Owner of the saved payment method. | Required | 58.0 |

Response body for PATCH

[Saved Payment Method Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_saved_payment_methods_output.htm "An individual saved payment method for an account or contact.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | Additional data you can pass in the request. This property can include a maximum of five key-value pairs. Each key and value can contain up to 255 characters. | Optional | 59.0 |
| flowContext | String | Checkout or My Account flow for this payment method. | Optional | 59.0 |
| gatewayCustomer​Reference | String | Owner associated with the payment method to the payment gateway. | Required | 60.0 |
| gatewayInitiator​Reference | String | Specifies the gateway initiator reference, such as setup intent ID for gateway Stripe. | Required | 60.0 |
| id | String | Salesforce ID of the saved payment method record. | Optional | 58.0 |
| isDefault | Boolean | Marks the saved payment method as the default method to use for transactions. | Optional | 58.0 |
| paymentGatewayId | String | Salesforce ID of the Payment Gateway object record. | Required | 58.0 |
| paymentMethodType | String | Payment method type, such as a credit card. | Required | 59.0 |
| referenceOwnerId | String | ID of the merchant account of the contact record. | Required | 58.0 |
| usageType | String | Specifies whether the payment method is used OnSession or OffSession. | Required | 58.0 |

Response body for POST

[Saved Payment Method Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_saved_payment_methods_output.htm "An individual saved payment method for an account or contact.")

#### See Also

-   [*Object Reference for the Salesforce Platform*: SavedPaymentMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_savedpaymentmethod.htm "Object Reference for the Salesforce Platform: SavedPaymentMethod - HTML (New Window)")

-   [*Connect REST API Developer Guide*: Saved Payment Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_payments_saved_payment_method.htm "Connect REST API Developer Guide: Saved Payment Method - HTML (New Window)")

## Code Examples

```
/payments/merchant-accounts/${merchantAccountId}/saved-payment-methods/saveToken
```

```
https://yourInstance.salesforce.com/services/data/v66.0/payments/merchant-accounts/${merchantAccountId}/saved-payment-methods/saveToken
```

```
{
    "gatewayCustomerReference" : "cus_N9hYyZflb2ObdN",
    "gatewayInitiatorReference" : "seti_1Mm8s8LkdIwHu7ix0OXBfTRG",
    "paymentGatewayId" : "0b0xx00000000w5AAA",
    "paymentMethodType" :"card",
    "referenceOwnerId" : "001xx000003Gmk3AAC" ,
    "usageType" : "OffSession"
}
```

## Related Topics

- Saved Payment Method
              Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_saved_payment_methods_output.htm)
