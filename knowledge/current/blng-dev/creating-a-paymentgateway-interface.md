---
title: "Creating a PaymentGateway Interface"
domain: blng-dev
topic: creating-a-paymentgateway-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.908Z
estimatedTokens: 385
keywords: [Creating, PaymentGateway, several, basic, transaction, PaymentGatewayAPI, implements, handle, gateway, requests, allow, credit, card, token, process]
---

# Creating a PaymentGateway Interface

> The PaymentGateway interface contains several basic transaction methods that the
            PaymentGatewayAPI class implements to handle
        gateway requests. The methods allow PaymentGatewayAPI to create a credit card token, process
        a payment charge, void a payment, authorize a payment, and refund a payment.

# Creating a PaymentGateway Interface

The PaymentGateway interface contains several basic transaction methods that the PaymentGatewayAPI class implements to handle gateway requests. The methods allow PaymentGatewayAPI to create a credit card token, process a payment charge, void a payment, authorize a payment, and refund a payment.

Create a credit card token

Map<String, TransactionResult> generateToken(Map<String, TransactionParameter> mapOfTransactionParameterById,PaymentGatewayParameter paymentGatewayParameter);

Process a payment charge

Map<String, TransactionResult> chargeTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById,PaymentGatewayParameter paymentGatewayParameter);

Void a payment

Map<String, TransactionResult> voidTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById,PaymentGatewayParameter paymentGatewayParameter);

Authorize a payment

Map<String, TransactionResult> authorizeTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById,PaymentGatewayParameter paymentGatewayParameter);

Refund a payment

Map<String, TransactionResult> refundTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById,PaymentGatewayParameter paymentGatewayParameter);

So, if you want your gateway package to process a chargeTransaction sent from Salesforce Billing, the package must implement chargeTransaction within a PaymentGatewayAPI class. Let’s see how this configuration looks in a sample CyberSource implementation.

## Example

```

```

## Code Examples

```apex
global class CyberSourceAPI implements blng.PaymentGateWay
{
    global static Map<String, blng.TransactionResult> generateToken(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().generateToken(mapOfTransactionParameterById);
    }

    global static Map<String, blng.TransactionResult> authorizeTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().authorizeTransaction(mapOfTransactionParameterById);
    }
     
    global static Map<String, blng.TransactionResult> chargeTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().chargeTransaction(mapOfTransactionParameterById);
    }
  
    global static Map<String, blng.TransactionResult> voidTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().voidTransaction(mapOfTransactionParameterById);
    }

    global static Map<String, blng.TransactionResult> refundTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().refundTransaction(mapOfTransactionParameterById);
    }
}
```
