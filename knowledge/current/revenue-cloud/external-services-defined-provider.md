---
title: "External Services Defined Provider"
domain: revenue-cloud
topic: external-services-defined-provider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:10.142Z
estimatedTokens: 677
keywords: [External, Services, Defined, Provider, Generate, contract, Apex, Open, API, compatible, schema, Service, Integration, Definition, Configurations]
---

# External Services Defined Provider

> Generate interface contract and Apex types by using external services and Open API
    compatible schema.

# External Services Defined Provider

Generate interface contract and Apex types by using external services and Open API compatible schema.

To ‌configure the callout settings for External Services Defined Provider, see [Configuration Steps](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_callout_configuration_steps.htm "Before you set up a callout provider, configure the callout settings. The settings include the creation of a named credential and an external credential, the creation of an integration definition, and the configuration of a fulfillment step definition.").

​​As an integration specialist user or admin user, perform these steps.

-   Set up an external service and actions.
-   In the external service definition, include integration parameters such as error codes, credentials, and path.

## External Service

Use external services for outbound integrations from Salesforce by using low-code, process-based integrations to enhance your Apex integrations. See [External Services](https://help.salesforce.com/s/articleView?id=platform.external_services.htm&type=5&language=en_US "HTML (New Window)").

## Integration Definition Configurations

You can configure these additional features for the integration definition.

-   Select the **Save the request and response as attachments to the record** checkbox for the integration definition to save request and response payloads as attachments to the Integration Provider Execution record. Content publish limits apply when saving request and response payloads as attachments. Use [Shield Platform Encryption](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_overview.htm&type=5&language=en_US "HTML (New Window)") for secure storage of sensitive information.

-   [Define Input and Output Processors for the Integration Definition](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_input_output_processors.htm "HTML (New Window)") for the pre-processing of the standard fulfillment request before you send the request to an external system. See [Omnistudio Integration Procedures](https://help.salesforce.com/s/articleView?id=xcloud.os_omnistudio_integration_procedures_48334.htm&type=5&language=en_US "HTML (New Window)").

See [Create an Integration Definition](https://help.salesforce.com/s/articleView?id=ind.consumption_framework_integration_definitions.htm&type=5&language=en_US "HTML (New Window)").

## Step Definition

Set the created integration definition on the Step Definition record with Callout as the step type.

## Related Topics

- Configuration Steps (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_callout_configuration_steps.htm)
