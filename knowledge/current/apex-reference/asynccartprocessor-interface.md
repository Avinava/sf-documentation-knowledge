---
title: "AsyncCartProcessor Interface"
domain: apex-reference
topic: asynccartprocessor-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.140Z
estimatedTokens: 732
keywords: [AsyncCartProcessor, implement, asynchronous, integrations, B2B, Commerce., startCartProcessAsync, integrationInfo, cartId, Example, Implementation]
---

# AsyncCartProcessor Interface

> Use this interface to implement asynchronous integrations in B2B
      Commerce.

# AsyncCartProcessor Interface

Use this interface to implement asynchronous integrations in B2B Commerce.

## Namespace

[Sfdc\_Checkout](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm "The Sfdc_Checkout namespace provides an interface and classes for B2B Commerce apps in Salesforce.")

-   **[AsyncCartProcessor Methods](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm#apex_sfdc_checkout_AsyncCartProcessor_methods)**

-   **[AsyncCartProcessor Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm#apex_interface_sfdc_checkout_AsyncCartProcessor_Example)**


## AsyncCartProcessor Methods

The following are methods for AsyncCartProcessor.

-   **[startCartProcessAsync(integrationInfo, cartId)](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm#apex_sfdc_checkout_AsyncCartProcessor_startCartProcessAsync)**
    The startCartProcessAsync method is called asynchronously by the integration framework. Calling this method begins cart processing for Commerce checkout.

### startCartProcessAsync(integrationInfo, cartId)

The startCartProcessAsync method is called asynchronously by the integration framework. Calling this method begins cart processing for Commerce checkout.

#### Signature

public sfdc\_checkout.IntegrationStatus startCartProcessAsync(sfdc\_checkout.IntegrationInfo integrationInfo, Id cartId)

#### Parameters

integrationInfo

Type: [IntegrationInfo](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationInfo.htm#apex_class_sfdc_checkout_IntegrationInfo "Provides the values that B2B Commerce Checkout uses to map requests to responses, necessary metadata, and context.")

Provides values that B2B Commerce checkout APIs use to map requests to responses, necessary metadata, and context.

cartId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

ID of the WebCart object.

#### Return Value

Type: [IntegrationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_checkout_IntegrationStatus.Status.htm "The IntegrationStatus.Status enum describes the status of the current integration.")

Status of the current integration. Possible values are SUCCESS and FAILED.

## AsyncCartProcessor Example Implementation

This is an example implementation of the sfdc\_checkout.AsyncCartProcessor interface.

```

```

AsyncCartProcessor is a base interface. There are four interfaces that extend it, including CartInventoryValidation, CartPriceCalculations, CartShippingCharges, and CartTaxCalculations. For more information about these interfaces, including code examples and test classes, see [Checkout Integrations](https://github.com/forcedotcom/b2b-commerce-on-lightning-quickstart/tree/master/examples/checkout/integrations "HTML (New Window)").

## Code Examples

```apex
global interface checkout_AsyncCartProcessor {
 
   //Integration for async processing
   IntegrationStatus startCartProcessAsync(
      IntegrationInfo integrationInfo,
      Id cartId);
}
```

## Related Topics

- Sfdc_Checkout (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm)
- AsyncCartProcessor Methods (atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm)
- AsyncCartProcessor Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm)
- startCartProcessAsync(integrationInfo, cartId) (atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm)
- IntegrationInfo (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationInfo.htm)
- IntegrationStatus (atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_checkout_IntegrationStatus.Status.htm)
