---
title: "Einstein Discovery
  REST API Resources Overview"
domain: bi-dev-guide-rest-sdd
topic: einstein-discovery-rest-api-resources-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:05.079Z
estimatedTokens: 608
keywords: [Einstein, Discovery, REST, API, Resources, access, insights, Filtering, Responses]
---

# Einstein Discovery
  REST API Resources Overview

> The Einstein Discovery REST API
  provides resources so you can access your Einstein Discovery insights.

# Einstein Discovery REST API Resources Overview

The Einstein Discovery REST API provides resources so you can access your Einstein Discovery insights.

All Einstein Discovery REST API resources are accessed using:

-   A base URL for your company (for example, https://yourInstance.salesforce.com)
-   Version information (for example, /services/data/v53.0)
-   A named resource (for example, /smartdatadiscovery)

Put together, an example of the full URL to the resource is:

```

```

Org and Object Identifiers

Id fields in Salesforce, and for Einstein Discovery, are typically 15-character, base-62, case-sensitive strings. However, many Salesforce APIs, including the Einstein Discovery REST API, use 18-character, case-insensitive strings—for example, the Id property of the Story resource /smartdatadiscovery/stories/<storyID>. The last 3 digits are a checksum of the preceding 15 characters. The use of case-insensitive Id’s eases interaction with external applications and development environments that use case-insensitive references. To convert an 18-character Id back to a 15-character ID, simply remove the last 3 characters.

General Resources

General resources for Einstein Discovery are covered here, while specific features like prediction definitions and stories have their own sections.

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Metrics Resource | Returns the metrics for Einstein Discovery. | GET | /smartdatadiscovery/metrics |
| Narrative Resource | Returns the narrative data for an Einstein Discovery story. | POST | /smartdatadiscovery/narrative |
| Predict Resource | Creates an Einstein Discovery prediction. | POST | /smartdatadiscovery/predict |
| Predict History Resource | Query the history of Einstein Discovery predictions. | POST | /smartdatadiscovery/predict-history |
| Smart Data Discovery Resource | Lists the top-level resources available for Einstein Discovery. | GET | /smartdatadiscovery |

## Filtering REST Responses

In addition to Einstein Discovery REST API input parameters, you can use the following Connect REST API input parameters to filter the results returned from a request: filterGroup, external, and internal. For more information, see [Specifying Response Sizes](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_returns_filters.htm) in the Connect REST API Developer Guide.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v55.0/smartdatadiscovery
```

## Related Topics

- Metrics Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_metrics.htm)
- Narrative Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_narrative.htm)
- Predict Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_predict.htm)
- Predict History Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_predict_history.htm)
- Smart Data Discovery Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_smart_data_discovery.htm)
