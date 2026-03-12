---
title: "Payment Authorization Reversal Service API"
domain: apex-guide
topic: payment-authorization-reversal-service-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.850Z
estimatedTokens: 885
keywords: [Payment, Authorization, Reversal, Service, API, transaction, negates, releasing, hold, funds, customer’s, provide, users, ability, reverse]
---

# Payment Authorization Reversal Service API

> An authorization reversal is a transaction that negates an authorization by releasing
    the hold on funds in a customer’s payment method. Use the authorization reversal service to
    provide users with the ability to reverse an outstanding payment authorization.

# Payment Authorization Reversal Service API

An authorization reversal is a transaction that negates an authorization by releasing the hold on funds in a customer’s payment method. Use the authorization reversal service to provide users with the ability to reverse an outstanding payment authorization.

Sometimes, a customer performs a payment authorization but then needs to cancel all or part of the authorization later. For example, the customer bought three items, and then realized that the first item is already in their stock. Commerce Payments API allows you to reverse all or part of an outstanding payment authorization.

After the customer payment gateway authorizes a payment, Commerce Payments creates a payment authorization record to store information about the authorization. When a user or process performs a reversal against the authorization, the authorization reversal service creates a payment authorization adjustment to store information. The adjustment is related to the authorization.

If the payment authorization is associated with an order payment summary, then the reversal amount is added to the order payment summary’s AuthorizationReversalAmount and subtracted from its AvailableToCaptureAmount. But the AvailableToCaptureAmount is never below 0, even if a reversal makes its calculation a negative amount.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For an authorization reversal, the payment gateway log’s OrderPaymentSummaryId always defaults to null. If there’s an associated order payment summary, your code can set the value.

Call the authorization reversal service by making a POST request to the following endpoint.

**Endpoint**

```

```

The service accepts one authorization reversal request per call. The following payment authorization adjustment API parameters are accepted.

| Parameter | Required | Description |
| --- | --- | --- |
| amount | Required | Amount to be reversed from the authorization. Must be greater than zero.Salesforce doesn't provide validations comparing PaymentAuthorizationAdjustment.Amount to PaymentAuthorization.Amount.If the payment gateway allows the reversal amount to be greater than the authorization amount, the authorization's resulting balance can be negative. If your gateway supports authorization balances below zero and you want to avoid gateway calls, configure your adapter to query the authorization amount, balance, and total reversal amount, and don’t call the endpoint if the balance is less than zero. |
| accountId | Optional | Account ID to which this authorization reversal is linked. |
| effectiveDate | Optional | The date that the reversal applies to the authorization. |
| email | Optional | Fraud parameter |
| ipAddress | Optional | Fraud parameter |
| macAddress | Optional | Fraud parameter |
| phone | Optional | Fraud parameter |
| comments | Optional | User-provided comments about the authorization reversal. Must be less than 1000 characters. |

## Sample Request and Response

This request calls a $150 reversal against an authorization.

```

```

**Sample Response - Success**

A successful authorization reversal response provides information about the gateway’s response and the values to construct a payment authorization adjustment entity.

```

```

The resulting payment authorization adjustment in Salesforce would look like this.

If an error is returned, the response contains the gateway's error code and error message.

**Sample Response - Error**

```

```

## Code Examples

```
/commerce/payments/authorizations/${*authorizationId*}/reversals
```

```
{
  "accountId":"",
  "amount": "150",*  "comments": "authorization reversal request",
  "effectiveDate":"2020-10-18T11:32:27.000Z",
  "ipAddress": "202.95.77.70",
  "macAddress": "00-14-22-01-23-45",
  "phone": "100-456-67",
  "email": "test@example.org",
  "additionalData":{
       //add additional parameters if needed
      "key1":"value1",
      "key2":"value2",
      "key3":"value3",
      "key4":"value4",
      "key5":"value5"
    }
}
```

```
HPP Status Code: 201
{
  "gatewayResponse" : {
    "gatewayDate" : "2020-10-23T15:21:58.833Z",
    "gatewayReferenceNumber" : "439XXXXXXX",
    "gatewayResultCode" : "00",
    "gatewayResultCodeDescription" : "Transaction Normal",
    "salesforceResultCode" : "Success"
  },
  "paymentAuthAdjustment" : {
    "amount" : "150.0",
    "currencyIsoCode" : "USD",
    "effectiveDate" : "2020-10-18T11:32:27.000Z",
    "id" : "9tvR00000004Cf1MAE",
    "paymentAuthAdjustmentNumber" : "PAA-00XXXXXXX",
    "requestDate" : "2020-10-23T15:21:58.000Z",
    "status" : "Processed"
  },
  "paymentGatewayLogs" : [ {
    "createdDate" : "2020-10-23T15:21:58.000Z",
    "gatewayResultCode" : "00",
    "id" : "0XtXXXXXXXXXXXXXXX",
    "interactionStatus" : "Success"
  } ]
}
```

```
{
    "errorCode":"",
    "errorMessage":""
}
```
