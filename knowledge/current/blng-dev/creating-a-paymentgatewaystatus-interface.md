---
title: "Creating a PaymentGatewayStatus Interface"
domain: blng-dev
topic: creating-a-paymentgatewaystatus-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.911Z
estimatedTokens: 132
keywords: [Creating, PaymentGatewayStatus, Salesforce, Billing, implements, populate, TransactionResult’s, GatewayStatus, code, external, gateway, transactionResult]
---

# Creating a PaymentGatewayStatus Interface

> Salesforce Billing implements the PaymentGatewayStatus interface to populate the
            TransactionResult’s GatewayStatus enum with the value of the return code
        that the external gateway set in transactionResult.

# Creating a PaymentGatewayStatus Interface

Salesforce Billing implements the PaymentGatewayStatus interface to populate the TransactionResult’s GatewayStatus enum with the value of the return code that the external gateway set in transactionResult.

```

```

So, if you want your gateway package to process a chargeTransaction sent from Salesforce Billing, the package must implement chargeTransaction within a PaymentGatewayAPI class. Let’s see how this configuration looks in a sample CyberSource implementation.

```

```

## Code Examples

```apex
global interface PaymentGateWayStatus
{
    void populateGatewayStatus(TransactionResult transactionResult);
}
```

```apex
global class CyberSourceAPI implements blng.PaymentGateWay, blng.PaymentGateWays, blng.PaymentGateWayStatus
{
    /**
    Implement other methods as described above
    */
    private static CyberSource service()
    {
        if (NULL == CyberSourceInstance)
        {
            CyberSourceInstance = CyberSource.getInstance();
        }
        return CyberSourceInstance;
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
