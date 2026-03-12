---
title: "Creating a PaymentGateways Interface"
domain: blng-dev
topic: creating-a-paymentgateways-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.916Z
estimatedTokens: 195
keywords: [Creating, PaymentGateways, uses, processPayments, evaluates, payment, transaction’s, perform, action]
---

# Creating a PaymentGateways Interface

> The
            PaymentGateways interface uses the
            processPayments method, which evaluates the payment
        transaction’s type to perform a payment action.

# Creating a PaymentGateways Interface

The PaymentGateways interface uses the processPayments method, which evaluates the payment transaction’s type to perform a payment action.

The PaymentGateways interface calls the processPayments method, which evaluates the TransactionParameter object.

```

```

The processPayments method can perform different actions based on the TransactionType value of the TransactionParameter’s paymentGatewayParameter. When you configure your PaymentGateways interface, define all the TransactionType string variables that processPayments can accept. Then, add your logic for identifying the transaction type and calling the appropriate method. We’ve provided a sample here for a CyberSource payment gateway implementation.

## Example

```

```

## Code Examples

```apex
global interface PaymentGateways 
{
    Map<String, TransactionResult> processPayments(Map<String, TransactionParameter> mapOfTransactionParameterById,PaymentGatewayParameter paymentGatewayParameter);
}
```

```apex
global class CyberSourceAPI implements blng.PaymentGateWay, blng.PaymentGateWays, blng.PaymentGateWayStatus
{
    // ============================================================================
    // CONSTANT 
    // ============================================================================
    
    // ============================================================================
    // STATIC VARIABLES
    // ============================================================================
    
    // Attribute to implement singleton pattern for CyberSource class
    private static CyberSource CyberSourceInstance;

    // ============================================================================
    // VARIABLES
    // ============================================================================
    //Billing sends following strings for the transactions
    private static final String GENERATE_TOKEN = 'generateToken';
    private static final String AUTHORIZE_TRANSACTION = 'authorizeTransaction';
    private static final String CHARGE_TRANSACTION = 'chargeTransaction';
    private static final String VOID_TRANSACTION = 'voidTransaction';
    private static final String REFUND_TRANSACTION = 'refundTransaction'; 
    private static final String CAPTURE_TRANSACTION = 'captureTransaction';
    private static final String VOID_REFUND_TRANSACTION = 'voidRefundTransaction';
    private static final String VOID_TOKEN_TRANSACTION = 'voidTokenTransaction';
    private static final String GET_PAYMENT_STATUS = 'getPaymentStatus';
    private static final String GET_REFUND_STATUS = 'getRefundStatus';
    private static final String NON_REFERRED_REFUND = 'nonReferredRefund';
    private static final String PROCESS_PAYMENTS = 'processPayments';
    // ============================================================================
    // Methods
    // ============================================================================
    
    global static Map<String, blng.TransactionResult> processPayments(Map<String, blng.TransactionParameter> mapOfTransactionParameterById, blng.PaymentGatewayParameter paymentGatewayParameter)
    {
        if(paymentGatewayParameter.getTransactionType() == GENERATE_TOKEN)
        {
            return generateToken(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == AUTHORIZE_TRANSACTION)
        {
            return authorizeTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == CHARGE_TRANSACTION)
        {
            return chargeTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == VOID_TRANSACTION)
        {
            return voidTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == REFUND_TRANSACTION)
        {
            return refundTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == CAPTURE_TRANSACTION)
        {
            return captureTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == VOID_REFUND_TRANSACTION)
        {
            return voidRefundTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == VOID_TOKEN_TRANSACTION)
        {
            return voidTokenTransaction(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == GET_PAYMENT_STATUS)
        {
            return getPaymentStatus(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == GET_REFUND_STATUS)
        {
            return getRefundStatus(mapOfTransactionParameterById);
        }
        else if(paymentGatewayParameter.getTransactionType() == NON_REFERRED_REFUND)
        {
            return nonReferredRefund(mapOfTransactionParameterById);
        }

        return NULL;
   }
}
```
