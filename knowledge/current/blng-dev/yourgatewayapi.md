---
title: "YourGatewayAPI"
domain: blng-dev
topic: yourgatewayapi
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.006Z
estimatedTokens: 249
keywords: [YourGatewayAPI, base, connects, Salesforce, Billing, package, payment, gateway, user, API, classes, different, needs, However, we've]
---

# YourGatewayAPI

> YourGatewayAPI is a base class that connects the Salesforce Billing package to your
        payment gateway package. All user gateway API classes will be different based on your needs.
        However, we've provided a template that you can use to help create your own.

# YourGatewayAPI

YourGatewayAPI is a base class that connects the Salesforce Billing package to your payment gateway package. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.

| Available in: |
| --- |


YourGatewayAPI references the following public classes.

-   [YourGatewayName](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_sample.htm "YourGateWayName is a base class. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.")
-   [YourGatewayNameUtils](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_utils_sample.htm "YourGatewayNameUtils is a singleton utility class that interacts with an external payment gateway. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.")

```

```

## Code Examples

```apex
global class YourGatewayAPI implements blng.PaymentGateWay, blng.PaymentGateWays, blng.PaymentGateWayStatus
{
    // ============================================================================
    // CONSTANT 
    // ============================================================================
    
    // ============================================================================
    // STATIC VARIABLES
    // ============================================================================
    
    // Attribute to implement singleton pattern for YourGatewayName  class
    private static YourGatewayName YourGatewayNameInstance;
    
     // ============================================================================
    // VARIABLES
    // ============================================================================

    // Attribute to implement singleton pattern for AuthorizeDotNet class
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
    /**
    * @name service
    * @description service method to create an only instance of TransactionService class
    *              if serviceInstance is NULL then only create a new instance otherwise 
    *              return the existing one
    * @param   NA 
    * @return TransactionService instance
    * @exception
    * @author 
    * @created 
    * @remark 
    * @change
    */   
    @TestVisible
    private static YourGatewayName service()
    {
        if (NULL == YourGatewayNameInstance)
        {
            YourGatewayNameInstance = YourGatewayName.getInstance();
        }
        return YourGatewayNameInstance;
    }

    /**
    * @name processPayments
    * @description Method to generate Token
    * @param 
    * @return
    * @exception
    * @author 
    * @created 2016-11-03
    * @remark 
    * @change
    */   
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
    
    /**
    * @name generateToken
    * @description Method to generate Token for a Payment Method
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception 
    * @author 
    * @created 
    * @remark 
    * @change
    */    
    global static Map<String, blng.TransactionResult> generateToken(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().generateToken(mapOfTransactionParameterById);
    }

    /**
    * @name voidTokenTransaction
    * @description Method to void Token for a Payment method Token
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author 
    * @created
    * @remark
    * @change
    */    
    global static Map<String, blng.TransactionResult> voidTokenTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().voidTokenTransaction(mapOfTransactionParameterById);
    }


    /**
    * @name authorizeTransaction
    * @description Method to Authorize a payment for a Invoice
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author
    * @created
    * @remark 
    * @change
    */  
    global static Map<String, blng.TransactionResult> authorizeTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().authorizeTransaction(mapOfTransactionParameterById);
    }

    /**
    * @name chargeTransaction
    * @description Method to Charge a payment for a Invoice
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author  
    * @created 
    * @remark 
    * @change 
    */      
    global static Map<String, blng.TransactionResult> chargeTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().chargeTransaction(mapOfTransactionParameterById);
    }

    /**
    * @name captureTransaction
    * @description Method to capture a payment for a Authorize Transaction
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception 
    * @author
    * @created
    * @remark 
    * @change
    */      
    global static Map<String, blng.TransactionResult> captureTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().captureTransaction(mapOfTransactionParameterById);
    }


    /**
    * @name voidTransaction
    * @description Method to Void a payment for a Invoice
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author
    * @created
    * @remark 
    * @change 
    */      
    global static Map<String, blng.TransactionResult> voidTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().voidTransaction(mapOfTransactionParameterById);
    }

    /**
    * @name refundTransaction
    * @description Method to Refund a payment for a payment Transaction
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author
    * @created
    * @remark
    * @change
    */ 
    global static Map<String, blng.TransactionResult> refundTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().refundTransaction(mapOfTransactionParameterById);
    }

    /**
    * @name nonReferencedRefund
    * @description Method to non Referenced Refund a payment for a Invoice
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionParameter]
    * @exception
    * @author
    * @created
    * @remark
    * @change
    */ 
    global static Map<String, blng.TransactionResult> nonReferredRefund(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().nonReferencedRefund(mapOfTransactionParameterById);
    }

    /**
    * @name voidRefundTransaction
    * @description Method to Void refund for a Refund Transaction
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author
    * @created
    * @remark 
    * @change
    */      
    global static Map<String, blng.TransactionResult> voidRefundTransaction(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().voidRefundTransaction(mapOfTransactionParameterById);
    }
    
    /**
    * @name getPaymentStatus
    * @description Method to get payment status for a Payment Transaction
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author
    * @created
    * @remark 
    * @change
    */      
    global static Map<String, blng.TransactionResult> getPaymentStatus(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
        return service().getPaymentStatus(mapOfTransactionParameterById);
    }
    
    /**
    * @name getRefundStatus
    * @description Method to get refund status for a Refund Transaction
    * @param Map[Key => String [unique Id],Value => TransactionParameter]
    * @return Map[Key => String [unique Id],Value => TransactionResult]
    * @exception
    * @author
    * @created
    * @remark 
    * @change
    */      
    global static Map<String, blng.TransactionResult> getRefundStatus(Map<String, blng.TransactionParameter> mapOfTransactionParameterById) 
    {
         return service().getPaymentStatus(mapOfTransactionParameterById);
    }
     /**
     * @name populateGatewayStatus
     * @description Method that populates the GatewayStatus enum on the TransactionResult,
     * given return codes that are already set in the TransactionResults
     * @param transactionResult
     */
    global static void populateGatewayStatus(blng.TransactionResult transactionResult)
    {
        service().populateGatewayStatus(transactionResult);
    }
}
```

## Related Topics

- YourGatewayName (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_sample.htm)
- YourGatewayNameUtils (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_utils_sample.htm)
