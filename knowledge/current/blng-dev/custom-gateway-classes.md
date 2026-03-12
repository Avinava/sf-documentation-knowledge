---
title: "Custom Gateway Classes"
domain: blng-dev
topic: custom-gateway-classes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.923Z
estimatedTokens: 372
keywords: [Custom, Gateway, Classes, Salesforce, Billing, three, users, customize, integrate, their, chosen, payment]
---

# Custom Gateway Classes

> Salesforce Billing provides three classes that users can customize to integrate with
  their chosen payment gateway.

# Custom Gateway Classes

Salesforce Billing provides three classes that users can customize to integrate with their chosen payment gateway.

-   **[YourGatewayAPI](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm)**
    YourGatewayAPI is a base class that connects the Salesforce Billing package to your payment gateway package. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.
-   **[YourGatewayName](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_sample.htm)**
    YourGateWayName is a base class. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.
-   **[YourGatewayNameUtils](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_utils_sample.htm)**
    YourGatewayNameUtils is a singleton utility class that interacts with an external payment gateway. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.
-   **[YourHttpService](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourhttpservice_sample.htm)**
    YourHttpService is an example of common HTTP utilities that might be required while building a partner package. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.

## Related Topics

- YourGatewayAPI (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm)
- YourGatewayName (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_sample.htm)
- YourGatewayNameUtils (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayname_utils_sample.htm)
- YourHttpService (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourhttpservice_sample.htm)
