---
title: "Tokenization Service API"
domain: apex-guide
topic: tokenization-service-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.874Z
estimatedTokens: 766
keywords: [Tokenization, Service, API, credit, card, process, replaces, sensitive, customer, one-time, algorithmically, generated, number, token, payment]
---

# Tokenization Service API

> The credit card tokenization process replaces sensitive customer information with a
  one-time algorithmically generated number, called a token, to use during the payment transaction.
  Salesforce stores the token and then uses that token as a representation of the credit card used
  for transactions. The token stores information about the credit card without storing sensitive
  customer data such as credit card numbers. To add tokenization capabilities to your payment
  services, implement our Tokenization API.

# Tokenization Service API

The credit card tokenization process replaces sensitive customer information with a one-time algorithmically generated number, called a token, to use during the payment transaction. Salesforce stores the token and then uses that token as a representation of the credit card used for transactions. The token stores information about the credit card without storing sensitive customer data such as credit card numbers. To add tokenization capabilities to your payment services, implement our Tokenization API.

In a typical tokenization process, the payments platform accepts customer payment method data and passes it to a remote token service server on the payment gateway, outside of Salesforce. The server provides the tokenized value for storage on the platform. For example, a customer provides a credit card number of 4111 1111 1111 1234. The token server stores this value, associates it with a token of 2537446225198291, and sends that token for storage on the platform.

During communication with the merchant, the merchant sends the 2537446225198291 token to the token server. The token server confirms that it matches the customer’s token, and authorizes the merchant to perform the transaction against the customer’s card.

The Commerce Payments Tokenization API accepts credit card information and uses the external payment gateway configured through the customer's Salesforce org to tokenize the card information. It then returns the tokenization representation. The API then saves the token in [CardPaymentMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm).

Call the tokenization service by making a POST request to this endpoint.

```

```

The Tokenization Service accepts these request parameters from payment and related entities.

| Parameter | Required or Optional | Details |
| --- | --- | --- |
| cardPaymentMethod | Some of the related fields for this parameter, shown in the sample request of this topic, are required. See CardPaymentMethod | Details of the credit card to be tokenized. For Type, see CardPaymentMethod |
| accountId | Optional | Salesforce Account ID of the card owner. |
| address | Optional | Address information of the customer who owns the credit card payment method being tokenized. |
| paymentGatewayId | Required | The external payment gateway related to the tokenization server. |
| email | Optional | Fraud parameter. |
| ipAddress | Optional | Fraud parameter. |
| macAddress | Optional | Fraud parameter. |
| phone | Optional | Fraud parameter. |
| additionalData | Optional | Any additional data required by the gateway to tokenize a credit card payment method. |

## Sample Request and Response

This sample request provides a customer's credit card information for tokenization. Some optional parameters are left blank.

```

```

A successful tokenization response updates the payment method and provides information about the gateway response and any payment gateway logs.

```

```

## Code Examples

```
/commerce/payments/payment-methods
```

```
{
    "cardPaymentMethod": {
        "cardHolderName":"Carol Smith",
        "expiryMonth": "05",
        "expiryYear": "2025", 
        "startMonth": "",
        "startYear": "",
        "cvv": "000",
        "cardNumber": "4111111111111111",
        "cardCategory": "Credit",
        "cardType": "Visa",
        "nickName": "",
        "cardHolderFirstName": "Carol",
        "cardHolderLastName": "Smith",
        "email" : "csmith@example.com",
        "comments" : "",
        "accountId": "000XXXXXXXX"
    },
    "address":{
        "street": "128 1st Street",
        "city": "San Francisco",
        "state": "CA",
        "country": "USA",
        "postalCode": "94015",
        "companyName": "Salesforce"
    },
    "paymentGatewayId" : "000XXXXXXXX",
    "email": ""
    "ipAddress": "",
    "macAddress": "",
    "phone": "",
   
    "additionalData":{
         //add additional information if needed
        "key1":"value1",
        "key2":"value2",
        "key3":"value3",
        "key4":"value4",
        "key5":"value5"
    }
}
```

```
{
  "paymentMethod": {
    "id": "03OR0000000xxxxxxx",
    "accountId" : "001xx000000xxxxxxx",
    "status" : "Active"
  },
  "gatewayResponse" : {
    "gatewayResultCode": "00",
    "gatewayResultCodeDescription": "Transaction Normal",
    "gatewayDate": "2020-12-08T04:03:20.000Z",
    "gatewayAvsCode" : "7638788018713617",
    "gatewayMessage" : "8313990738208498",
    "salesforceResultCode": "Success",
    "gatewayTokenEncrypted" : "SF701252"
  }
  "paymentGatewayLogs" : [ {
    "createdDate" : "2020-12-08T04:03:20.000Z",
    "gatewayResultCode" : "00",
    "id" : "0XtR0000000xxxxxxx",
    "interactionStatus" : "NoOp"
  } ],
}
```
