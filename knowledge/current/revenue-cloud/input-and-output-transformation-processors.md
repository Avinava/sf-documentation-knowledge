---
title: "Input and Output Transformation Processors"
domain: revenue-cloud
topic: input-and-output-transformation-processors
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:10.148Z
estimatedTokens: 296
keywords: [Input, Output, Transformation, Processors, process, standard, fulfillment, sending, external, system, Prerequisites]
---

# Input and Output Transformation Processors

> Use input and output processors to process a standard fulfillment request before
    sending it to an external system.

# Input and Output Transformation Processors

Use input and output processors to process a standard fulfillment request before sending it to an external system.

## Prerequisites

-   Omnistudio license is required.
-   Omnistudio Admin permission set license is assigned to Integration Configuration User (Fulfillment Designer).
-   The input and output procedure attributes of an integration definition, which are available from Setup, are assigned with the Omnistudio Integration Procedure request and response. You can use Type\_Subtype or Id of OmniProcess as the values for attributes.

When a callout step is executed, these steps are followed.

-   The defined integration procedures are identified for request and response handling from an integration definition.
-   The input processor generates the request by using Fulfillment Step Source > SourceIdentifier as the InputRecordId input parameter value. For example, the ID of an order item.
-   The output processor handles the response by passing a map to the Integration Procedure service. The results from the Integration Procedure are used to identify any errors and details are passed to Dynamic Revenue Orchestrator.
