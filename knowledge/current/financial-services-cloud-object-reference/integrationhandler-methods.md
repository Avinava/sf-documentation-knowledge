---
title: "IntegrationHandler Methods"
domain: financial-services-cloud-object-reference
topic: integrationhandler-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.961Z
estimatedTokens: 625
keywords: [IntegrationHandler, call, invoke, executeOmniCallback, getOmniContinuation, directly]
---

# IntegrationHandler Methods

> The following are methods for IntegrationHandler. You can
        use the call method to invoke the executeOmniCallback or getOmniContinuation method, or you
        can invoke those methods directly.

# IntegrationHandler Methods

The following are methods for IntegrationHandler. You can use the call method to invoke the executeOmniCallback or getOmniContinuation method, or you can invoke those methods directly.

-   **[call(action, args)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_call.htm)**
    This method calls one of the available IntegrationHandler actions and passes arguments to that action.
-   **[executeCallout(requestId, payload, devName)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeCallout.htm)**
    Calls the provider class defiled in the Integration Definition record referenced by the devName parameter. The Industries: SendApex Async Request invocable action calls this method.
-   **[executeLightningCallback(labels, state)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeLightningCallback.htm)**
    Calls back the method that is called automatically after the Continuation from getLightningContinuation is executed. Internally calls the callback method of the provider.
-   **[executeOmniCallback(input, output, options)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeOmniCallback.htm)**
    Calls back the method that is called automatically after the Continuation from getOmniContinuation is executed. Internally calls the callback method of the provider.
-   **[getLightningContinuation(requestId, params, devName, input)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_getLightningContinuation.htm)**
    Gets the Continuation object returned by the provider defined in the Integration Definition record referenced by the devName parameter.
-   **[getOmniContinuation(requestId, params, options, devName, input)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_getOmniContinuation.htm)**
    Gets the Continuation object returned by the provider defined in the Integration Definition record referenced by the devName parameter.

## Related Topics

- call(action, args) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_call.htm)
- executeCallout(requestId, payload, devName) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeCallout.htm)
- executeLightningCallback(labels, state) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeLightningCallback.htm)
- executeOmniCallback(input, output, options) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeOmniCallback.htm)
- getLightningContinuation(requestId, params, devName, input) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_getLightningContinuation.htm)
- getOmniContinuation(requestId, params, options, devName, input) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_getOmniContinuation.htm)
