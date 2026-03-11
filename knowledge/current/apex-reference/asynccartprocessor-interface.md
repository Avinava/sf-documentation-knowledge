---
title: "AsyncCartProcessor Interface"
domain: apex-reference
topic: asynccartprocessor-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.827Z
keywords: [AsyncCartProcessor, Interface, startCartProcessAsync, method, called, asynchronously, integration, framework., Calling, begins, cart, processing, Commerce, checkout., integrationInfo, cartId, Signature, Parameters, Return, Value]
---

# AsyncCartProcessor Interface

> The startCartProcessAsync method is called asynchronously by the
      integration framework. Calling this method begins cart processing for Commerce checkout.

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