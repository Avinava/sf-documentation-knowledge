---
title: "ConfigurationInputEnum Enum"
domain: revenue-cloud
topic: configurationinputenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.218Z
estimatedTokens: 231
keywords: [ConfigurationInputEnum, Specifies, configuration, input, request, place, order., Usage, Values, quote.]
---

# ConfigurationInputEnum Enum

> Specifies the configuration input for the request to place a quote.

# ConfigurationInputEnum Enum

Specifies the configuration input for the request to place a quote.

## Usage

Use these enum values for the configurationInputEnum property in the [PlaceQuoteRLMApexProcessor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteRLMApexProcessor.htm#apex_class_placequote_PlaceQuoteRLMApexProcessor "Contains methods to place a quote with details of the graph request, pricing preferences, and configuration options.") class.

## Enum Values

The placequote.ConfigurationInputEnum enum has these values.

| Value | Description |
| --- | --- |
| RunAndAllowErrors | Run the configuration and proceed with order ingestion upon encountering any configuration errors. |
| RunAndBlockErrors | Run the configuration and block order ingestion upon encountering any configuration errors. |
| Skip | Skip the configuration execution. |

## Related Topics

- PlaceOrderExecutor Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderExecutor.htm)
- PlaceQuoteRLMApexProcessor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteRLMApexProcessor.htm)
