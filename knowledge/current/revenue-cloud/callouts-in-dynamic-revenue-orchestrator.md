---
title: "Callouts in Dynamic Revenue Orchestrator"
domain: revenue-cloud
topic: callouts-in-dynamic-revenue-orchestrator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:10.130Z
estimatedTokens: 1066
keywords: [Callouts, Dynamic, Revenue, Orchestrator, callout, step, ‌HTTP, calls, external, system, Data, Consumption, Framework, Process, Integration]
---

# Callouts in Dynamic Revenue Orchestrator

> Use callout step types to make ‌HTTP calls to an external system. Callout step types
    use the Data Consumption Framework and Process Type Integration for interface management and
    communication with external systems.

# Callouts in Dynamic Revenue Orchestrator

Use callout step types to make ‌HTTP calls to an external system. Callout step types use the Data Consumption Framework and Process Type Integration for interface management and communication with external systems.

Use callout step types to implement these features.

-   Endpoint configuration
-   Authentication parameters
-   Default sync and async implementation
-   Extensions or Apex Interfaces
-   Error handling and fallout management
-   Request and response logging
-   Timeouts

Dynamic Revenue Orchestrator supports these types of callouts.

| Type | Description |
| --- | --- |
| Standard Fulfillment Provider | Use this callout provider to use a fixed payload structure to request an order. You can also define Omnistudio Integration Procedures for request transformation and response handling. |
| Apex Type Provider | Use this callout provider to implement custom integration scenarios via the industriesintegrationfwk.ProcessIntegrationProvider Apex interface. |
| External Services Defined Provider | Use this callout provider to implement custom integration scenarios via external services through the OpenAPI specification. You can also define Omnistudio Integration Procedures for request transformation and response handling. To use this callout, the Omnistudio Admin and Omnistudio Runtime permissions are required. |

Callouts support these integration patterns.

| Type | Description |
| --- | --- |
| Sync | The callout step is completed when the external system returns a response. |
| Async | The callout step is set to In Progress when the external system returns the acknowledgment response with 202 HTTP code. The system waits until the external system sends a callback response to complete the callout step. See Asynchronous Interaction Pattern. |

-   **[Configure Callout Settings](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_callout_configuration_steps.htm)**
    Before you set up a callout provider, configure the callout settings. The settings include the creation of a named credential and an external credential, the creation of an integration definition, and the configuration of a fulfillment step definition.
-   **[Standard Fulfillment Provider](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_default_order_fulfillment_provider.htm)**
    The Standard Fulfillment Provider or CalloutIntegrationProvider is a provider for the order fulfillment usage type. A Fulfillment Designer can configure this provider.
-   **[Apex Type Provider](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_apex_type_provider.htm)**
    Implement custom integration logic via Apex by using the Apex Type Provider. This provider requires an Apex Integration Developer to implement a custom Apex adapter interface.
-   **[External Services Defined Provider](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_external_services_defined_provider.htm)**
    Generate interface contract and Apex types by using external services and Open API compatible schema.
-   **[Asynchronous Interaction Pattern](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_async_interaction_pattern.htm)**
    To specify an asynchronous request, you must add the callback URI to the integration definition for Standard Fulfillment Provider or Apex Type Provider as an optional attribute.
-   **[Input and Output Transformation Processors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_input_output_processors.htm)**
    Use input and output processors to process a standard fulfillment request before sending it to an external system.

#### See Also

-   [*Salesforce Help*: Data Consumption Framework](https://help.salesforce.com/s/articleView?id=ind.consumption_framework.htm&type=5&language=en_US "Salesforce Help: Data Consumption Framework - HTML (New Window)")

## Related Topics

- Asynchronous Interaction
              Pattern (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_async_interaction_pattern.htm)
- Configure Callout Settings (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_callout_configuration_steps.htm)
- Standard Fulfillment Provider (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_default_order_fulfillment_provider.htm)
- Apex Type Provider (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_apex_type_provider.htm)
- External Services Defined Provider (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_external_services_defined_provider.htm)
- Asynchronous Interaction Pattern (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_async_interaction_pattern.htm)
- Input and Output Transformation Processors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_input_output_processors.htm)
