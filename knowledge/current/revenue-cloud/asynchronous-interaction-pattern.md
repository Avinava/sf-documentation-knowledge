---
title: "Asynchronous Interaction Pattern"
domain: revenue-cloud
topic: asynchronous-interaction-pattern
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:08.676Z
estimatedTokens: 1024
keywords: [Asynchronous, Interaction, Pattern, specify, asynchronous, request, must, add, callback, URI, integration, definition, Standard, Fulfillment, Provider, Apex, optional, attribute.]
---

# Asynchronous Interaction Pattern

> To specify an asynchronous request, you must add the callback URI to the integration
    definition for Standard Fulfillment Provider or Apex Type Provider as an optional
    attribute.

# Asynchronous Interaction Pattern

To specify an asynchronous request, you must add the callback URI to the integration definition for Standard Fulfillment Provider or Apex Type Provider as an optional attribute.

## Standard Fulfillment Provider

-   Provide the callback URI in the integration definition to accept the callback.
-   Use these steps to set up the async callout.
    -   -   Use the ResponseUri key to retrieve the Callback URI value from the payload.
        -   Use the StepId key to retrieve the Fulfillment Step value from the payload. If order item ID is returned instead of Fulfillment Step ID, use CorrelationId key to extract the value of the step ID. For example, callout:13Wxx0000004CAf:.
        -   Pass the StepId value to the callback URI endpoint. Return 202 response code to ensure the Fulfillment Step is in Running state. Otherwise, the 200 response code completes the step.

            Here's a sample payload.

            ```

            ```

-   Extract the step ID from the request. Find the Fulfillment Step ID in the org by using the extracted step ID and update the Fulfillment Step state to Completed.

## Apex Type Provider

-   Provide the callback URI in the integration definition to accept the callback.
-   Set up the async callout by using Apex Type Provider.
    -   -   Create an Apex class that implements the ProcessIntegrationProvider interface.

            Here's a sample that shows the addition of a callback URI to the provider attribute for Apex Type Provider.

            global with sharing class DFOAsyncApexSample implements industriesintegrationfwk.ProcessIntegrationProvider { private static final industriesintegrationfwk.ApexProviderAttr NAMED\_CRED\_ATTR = new industriesintegrationfwk.ApexProviderAttr('Named Credential', 'Named\_Credential', 'DFOCalloutMockCreds', true, 'String'); private static final industriesintegrationfwk.ApexProviderAttr CALLBACK\_URL\_ATTR = new industriesintegrationfwk.ApexProviderAttr('Callback URL', 'Callback\_URL', 'DFOCallbackUrl', true, 'String'); global static List<industriesintegrationfwk.ApexProviderAttr> getProviderAttributes() { List<industriesintegrationfwk.ApexProviderAttr> defaults = new List<industriesintegrationfwk.ApexProviderAttr>(); defaults.add(NAMED\_CRED\_ATTR); defaults.add(CALLBACK\_URL\_ATTR); return defaults; }

        -   Specify the Fulfillment Step ID as the value of the requestGuid parameter of the executeCallout method. You can also extract the Step ID from the CorrelationId key value. For example, "callout:13Wxx0000004CAf:".

            Here's a sample payload that assigns the provider attribute values.

            public interface ProcessIntegrationProvider { IntegrationCalloutResponse executeCallout(String requestGuid, String inputRecordId, String payload, Map<String, Object> attributes); List<ProviderAttr> getProviderAttributes(); }

    -   Set response code to 202 to indicate that the callout is asynchronously executed and in Processing state.

        Here's a sample payload that sets the response code.

        global with sharing class DFOAsyncApexSample implements industriesintegrationfwk.ProcessIntegrationProvider { ... IntegrationCalloutResponse executeCallout(String requestGuid, String inputRecordId, String payload, Map<String, Object> attributes){ // execute http request ... // set accepted if no failures IntegrationCalloutResponse acceptedResponse = new IntegrationCalloutResponse(true); acceptedResponse.setResponseCode(202); return new IntegrationCalloutResponse(); } }

    -   The callback URI is visible in the integration definition.

        ![Integration Definition for Apex Type Provider](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Frev_lifecycle_mgmt%2Fdynamic_revenue_orchestrator%2Fimages%2Fdynamic_revenue_orchestrator_integration_definition_apex_type_provider.png&folder=revenue_lifecycle_management_dev_guide)

-   Extract the step ID from the request. Find the Fulfillment Step ID in the org by using the extracted step ID and update the Fulfillment Step state to Completed.

    ```

    ```

## Code Examples

```
{
    "ResponseUri": "/services/apexrest/async/callout",
    "StepId": "802xx000001nb1MAAQ",
    "CorrelationId": "callout:13Wxx0000004CAf:",
    ...//Other values
}
```

```
FulfillmentStep step = new FulfillmentStep(id = 'stepId', State = 'Completed'); 
upsert step;
```
