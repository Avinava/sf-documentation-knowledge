---
title: "Configuring Salesforce Billing to Access Your PaymentGatewayAPI Class"
domain: blng-dev
topic: configuring-salesforce-billing-to-access-your-paymentgatewayapi-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.899Z
estimatedTokens: 236
keywords: [Configuring, Salesforce, Billing, Access, PaymentGatewayAPI, integrate, payment, gateway, package, know, process, convert, results, data, custom]
---

# Configuring Salesforce Billing to Access Your PaymentGatewayAPI Class

> To integrate with a payment gateway package, Salesforce Billing must know which gateway
        package class contains the methods required to process a payment request and convert the
        results to data that Salesforce Billing can read. The Salesforce Billing custom setting
        Payment Gateway Config defines the class that Salesforce Billing calls from the gateway
        package. You must also add code that installs a record of the class in
        PaymentGatewayConfig.

# Configuring Salesforce Billing to Access Your PaymentGatewayAPI Class

To integrate with a payment gateway package, Salesforce Billing must know which gateway package class contains the methods required to process a payment request and convert the results to data that Salesforce Billing can read. The Salesforce Billing custom setting Payment Gateway Config defines the class that Salesforce Billing calls from the gateway package. You must also add code that installs a record of the class in PaymentGatewayConfig.

First, create your primary gateway package class. For ease of reference, name it after your payment gateway, followed by “API.” The class must implement all three of our payment gateway interfaces. Here’s an example for CyberSource.

```

```

Next, add code that lets you install a record of the class in PaymentGatewayConfig. For this example, we’ve titled our method insertPaymentGatewayConfigCustomSettings.

```

```

## Code Examples

```apex
global class CyberSourceAPI implements blng.PaymentGateWay, blng.PaymentGateWays, blng.PaymentGateWayStatus
{}
```

```apex
public void insertPaymentGatewayConfigCustomSettings()
{
    String gatewayName = 'CyberSource';
    List<blng__PaymentGatewayConfig__c> listofConfiguration = new List<blng__PaymentGatewayConfig__c>();
    blng__PaymentGatewayConfig__c gateway = new blng__PaymentGatewayConfig__c(
            Name = gatewayName,
            blng__ClassName__c = CyberSource.class.getName().substringBefore(gatewayName) + gatewayName + 'API');
    listofConfiguration.add(gateway);

    // get the all custom settings to check whether system has already settings or not
    Map<String, blng__PaymentGatewayConfig__c> mapOfConfigurationValues = blng__PaymentGatewayConfig__c.getAll();
    // if system does not have the gateway, then insert it
    if(!mapOfConfigurationValues.containskey(gatewayName)) {
        insert listofConfiguration;
    }
}
```
