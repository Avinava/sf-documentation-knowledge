---
title: "Clean Rule Data Service Metrics"
domain: chatterapi
topic: clean-rule-data-service-metrics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.735Z
estimatedTokens: 113
keywords: [Clean, Rule, Data, Service, Metrics, services, associated, organization’s, active, integration, rules]
---

# Clean Rule Data Service Metrics

> Metrics for a data service associated with an active data
      integration rule.

# Clean Rule Data Service Metrics

Metrics for a data service associated with an active data integration rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cleanRule​ErrorsUrl | String | URL where update errors for the data service can be downloaded. | Small, 37.0 | 37.0 |
| cleanRuleId | String | ID of the data integration rule that uses the data service. | Small, 37.0 | 37.0 |
| cleanRuleName | String | Name of the data integration rule that uses the data service. | Small, 37.0 | 37.0 |
| entityName | String | Name of the record type associated with the data service. | Small, 37.0 | 37.0 |
| errorCount | Integer | Number of records with update errors for the data integration rule. | Small, 37.0 | 37.0 |
| matchedRecords | Integer | Number of records with a data integration rule status of In Sync, Different, or Skipped. | Small, 37.0 | 37.0 |
| processedRecords | Integer | Number of records processed by the data integration rule. | Small, 37.0 | 37.0 |
| totalRecords | Integer | Number of total records that are available for processing by the data integration rule. | Small, 37.0 | 37.0 |

#### See Also

-   [Clean Rule Data Service Metrics Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_clean_metric_collection.htm "Metrics for data services associated with all active data integration rules in an organization.")

## Code Examples

```
/clean/data-services/dataServiceId/metrics
```

## Related Topics

- Clean Rule Data
              Service Metrics Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_clean_metric_collection.htm)
- Clean Rule Data Service Metrics Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_clean_metric_collection.htm)
