---
title: "HostedPaymentPageTransactionAPI Class"
domain: blng-dev
topic: hostedpaymentpagetransactionapi-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.026Z
estimatedTokens: 1080
keywords: [HostedPaymentPageTransactionAPI, API, Apex, Salesforce, Billing, customers, call, save, credit, card, tokenization, transaction, new, Usage, Inputs]
---

# HostedPaymentPageTransactionAPI Class

> Global API Apex class for Salesforce Billing. Contains methods
            that customers can call to save a credit card with tokenization or make a transaction
            using a new credit card.

# HostedPaymentPageTransactionAPI Class

Global API Apex class for Salesforce Billing. Contains methods that customers can call to save a credit card with tokenization or make a transaction using a new credit card.

## Namespace

blng

## Usage

The HostedPaymentPageTransactionAPI class contains the chargeTransaction method, which allows users to make a transaction using a new credit card, and the savePaymentMethod method, which allows users to save a credit card with tokenization.

## Inputs

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressLine1 | String | First line in the address of the user making the payment. | Optional | 48.0 |
| addressLine2 | String | Second line in the address of the user making the payment. | Optional | 48.0 |
| city | String | City | Optional | 48.0 |
| country | String | Country | Optional | 48.0 |
| postalCode | String | Postal code | Optional | 48.0 |
| state | String | State | Optional | 48.0 |

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cardHolderName | String | Full name of the card holder. | Required | 48.0 |
| cardNumber | String | Number of the credit card. | Required | 48.0 |
| cardType | String | Card network type. Valid values are:AmericanExpressDiscoverMasterCardVisa | Required | 48.0 |
| cvv | String | CVV | Required | 48.0 |
| expiryMonth | Integer | Card expiration month. | Required | 48.0 |
| expiryYear | Integer | Card expiration year. | Required | 48.0 |

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| address | String | Address of the payment method holder. | Required | 48.0 |
| autopay | Boolean | Defines whether Salesforce Billing saves a record of the payment method to the customer’s account for use in future payment runs. One account can have only one payment method with autopay enabled. | Optional | 48.0 |
| email | String | Email of the payment method holder. | Optional | 48.0 |
| firstName | String | First name of the payment method holder. | Required | 48.0 |
| lastName | String | Last name of the payment method holder. | Required | 48.0 |
| cardPaymentMethod | cardPaymentMethod | Card details for the payment method. | Required | 48.0 |
| paymentType | String | Type of payment method. Valid values are:Credit Card | Required | 48.0 |
| saveForFuture | Boolean | Indicates whether Salesforce saves a record of the payment method for future use. | Optional | 48.0 |

-   **[HostedPaymentPageTransactionAPI Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm#apex_System_HostedPaymentPageTransactionAPI_methods)**


## HostedPaymentPageTransactionAPI Methods

The following are methods for HostedPaymentPageTransactionAPI.

-   **[chargeTransaction(chargeRequest)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm#apex_System_HostedPaymentPageTransactionAPI_chargeTransaction)**
    Use this method to charge the desired amount from the buyer’s card.
-   **[savePaymentMethod(paymentMethodRequest)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm#apex_System_HostedPaymentPageTransactionAPI_savePaymentMethod)**
    Use this method to save a payment method. Currently supports saving only credit cards.

### chargeTransaction(chargeRequest)

Use this method to charge the desired amount from the buyer’s card.

#### Signature

global static String chargeTransaction(String chargeRequest)

#### Parameters

chargeRequest

Type: String

Represents a charge request made to the payment gateway.

#### Return Value

Type: String

Represents a charge transaction response.

#### Example

Example format for a charge request input.

```

```

### savePaymentMethod(paymentMethodRequest)

Use this method to save a payment method. Currently supports saving only credit cards.

#### Signature

global static String savePaymentMethod(String paymentMethodRequest)

#### Parameters

paymentMethodRequest

Type: String

Represents a request to save a payment method.

#### Return Value

Type: String

Represents a save payment method response.

#### Example

Example format for a save payment method request input.

```

```

## Code Examples

```
{
    "accountId": "0018A00000QcPDpQAN",
    "gatewayId": "a1x8A000000OZG2",
    "amount": 10,
    "paymentMethod": {
        "firstName": "Muneer Ahmed",
        "lastName": "Shaik",
        "email": "mas@sf.com",
        "saveForFuture": true,
        "autoPay": true,
        "paymentType": "Credit Card",
        "address": {
            "addressLine1": "Address 1",
            "addressLine2": "Address 2",
            "city": "SF",
            "state": "CA",
            "country": "United States",
            "postalCode": "41111"
        },
        "cardPaymentMethod": {
            "cardHolderName": "Muneer Ahmed Shaik",
            "cardType": "Visa",
            "cardNumber": "4111111111111111",
            "cvv": "111",
            "expiryMonth": "2",
            "expiryYear": "2021"
        }
    }    
  }
```

```
{
    "accountId": "0018A00000QcPDpQAN",
    "gatewayId": "a1x8A000000OZG2",
    "paymentMethod": {
        "firstName": "Muneer Ahmed",
        "lastName": "Shaik",
        "email": "mas@sf.com",
        "paymentType": "Credit Card",
        "address": {
            "addressLine1": "Address 1",
            "addressLine2": "Address 2",
            "city": "SF",
            "state": "CA",
            "country": "United States",
            "postalCode": "41111"
        },
        "cardPaymentMethod": {
            "cardHolderName": "Muneer Ahmed Shaik",
            "cardType": "Visa",
            "cardNumber": "4111111111111111",
            "cvv": "111",
            "expiryMonth": "2",
            "expiryYear": "2021"
        }
    }
  }
```

## Related Topics

- HostedPaymentPageTransactionAPI Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm)
- chargeTransaction(chargeRequest) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm)
- savePaymentMethod(paymentMethodRequest) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_System_HostedPaymentPageTransactionAPI.htm)
