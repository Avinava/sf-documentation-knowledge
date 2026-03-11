---
title: "Set Up a Synchronous Payment Gateway Adapter"
domain: apex-guide
topic: set-up-a-synchronous-payment-gateway-adapter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.729Z
keywords: [Set, Synchronous, Payment, Gateway, Adapter, See]
---

# Set Up a Synchronous Payment Gateway Adapter

# Set Up a Synchronous Payment Gateway Adapter

For payments transactions, you can configure Salesforce to interface with a synchronous payment gateway adapter.

| Available in: Salesforce Summer ’20 and later |
| --- |
| Available in: API 49.0 and later |
  

To access the commercepayments API, you need the PaymentPlatform org permission.

1.  Create your payment gateway adapter Apex classes. For instructions, see [Building a Synchronous Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_concept.htm "In synchronous payment configurations, the Salesforce payment platform sends transaction information to the gateway, and then waits for a gateway response that contains the final transaction status. Salesforce creates a transaction only if the transaction is successful in the gateway.").
2.  Create a named credential.
    1.  From Setup, in the Quick Find box, enter Named Credentials, and then select **New.**.
    2.  Complete the required fields, including the URL for your payment gateway.
3.  Create a payment gateway provider. The PaymentGatewayProvider object stores details about the payment gateway that Salesforce Payments communicates with when processing a transaction.
    1.  Generate an access token according to the instructions in [Connect to Connect REST API Using OAuth](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/quickstart_connecting.htm "HTML (New Window)").
        
        The response includes the access token, specified in the access\_token property, and the server instance, specified in the instance\_url property. Use this information to make API calls to build the payment gateway provider.
        
    2.  Execute a POST call to the resource using the domain in the instance\_url. For example, https://instance\_name.my.salesforce.com/services/data/vapi\_version/tooling/sobjects/PaymentGatewayProvider.
        
        Use this payload as the request body, replacing value with the correct data.
        
        ```
        
        ```
        
4.  Create a payment gateway record. The PaymentGateway object stores information about the connection to the external payment gateway. The record requires these field values.
    -   Payment Gateway Name: Name of the external payment gateway.
    -   Merchant Credential ID: ID of the named credential that you created.
    -   Payment Gateway Provider ID: ID of the payment gateway provider that you created.
    -   Status: Active

#### See Also

-   [*Object Reference for the Salesforce Platform*: PaymentGateway](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentgateway.htm "Object Reference for the Salesforce Platform: PaymentGateway - HTML (New Window)")
    
-   [*Object Reference for the Salesforce Platform*: PaymentGatewayProvider](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentgatewayprovider.htm "Object Reference for the Salesforce Platform:
    PaymentGatewayProvider - HTML (New Window)")