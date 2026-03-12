---
title: "Query Calculated Insights"
domain: data-cloud
topic: query-calculated-insights
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.057Z
estimatedTokens: 545
keywords: [Query, Calculated, Insights, API, calls, only, support, data, collection, Data, Cloud, object., query, selected, SQL, dimensions, measures, optional, filters., Key]
---

# Query Calculated Insights

> The Calculated Insights API calls only support data collection from the Data Cloud Calculated Insights object. You can use this API to query Calculated
    Insights with selected SQL dimensions and measures with optional filters.

# Query Calculated Insights

The Calculated Insights API calls only support data collection from the Data Cloud Calculated Insights object. You can use this API to query Calculated Insights with selected SQL dimensions and measures with optional filters.

For details on how to use Calculated Insights calls from within Data Cloud, see the [Calculated Insights online Help topics](https://help.salesforce.com/articleView?id=c360_a_calculated_insights.htm&language=en_US).

This API library follows the standard REST specification.

## Key Properties

-   The call return limit defaults to the max limit of 4,999 rows returned.
-   Pagination support via limit, offset, and order by parameters.

## Call Reference

[GET /api/v1/insight/metadata/(ci-name)](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insights_meta_ci_name.htm "The metadata includes the dimension and measure that are part of the calculated insight.")

[GET /api/v1/insight/calculated-insights/(ci-name)](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insights_ci_ci_name.htm "Use this API to query your Calculated Insights. Users can filter by selecting different dimensions, measures, and filters.")

-   **[GET /api/v1/insight/metadata](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_insight_metadata.htm)**
    The metadata includes the dimension and measure that are part of the calculated insight.
-   **[GET /api/v1/insight/metadata/(ci-name)](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insights_meta_ci_name.htm)**
    The metadata includes the dimension and measure that are part of the calculated insight.
-   **[GET /api/v1/insight/calculated-insights/(ci-name)](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insights_ci_ci_name.htm)**
    Use this API to query your Calculated Insights. Users can filter by selecting different dimensions, measures, and filters.

#### See Also

-   [API Limits for Profile, Query, and Calculated Insights](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm "There are three distinct classes of APIs used to extract data from Data Cloud (formerly Customer Data Platform): Profile, Query, and Calculated Insights.")

## Related Topics

- GET /api/v1/insight/metadata/(ci-name) (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insights_meta_ci_name.htm)
- GET /api/v1/insight/calculated-insights/(ci-name) (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insights_ci_ci_name.htm)
- GET /api/v1/insight/metadata (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_v1_insight_metadata.htm)
- API Limits for Profile, Query, and Calculated Insights (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm)
