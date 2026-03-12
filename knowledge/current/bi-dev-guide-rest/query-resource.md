---
title: "Query Resource"
domain: bi-dev-guide-rest
topic: query-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.792Z
estimatedTokens: 500
keywords: [Query, Resource, Executes, written, Salesforce, Analytics, Language, SAQL, SQL, CRM, Postman]
---

# Query Resource

> Executes a query written in Salesforce Analytics Query Language
      (SAQL) or SQL for CRM Analytics.

# Query Resource

Executes a query written in Salesforce Analytics Query Language (SAQL) or SQL for CRM Analytics.

Resource URL

```

```

Formats

JSON

Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [postQuery](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-78ef861a-f5e0-46dd-b43d-150275044da1?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

Available Components

-   Apex — [Wave.executeQuery()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
-   Aura — [<wave:sdk> executeQuery()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)
-   LWC — [lightning/analyticsWaveApi executeQuery()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_analytics_execute_query)

HTTP Methods

POST

Request body for POST

[Saql​Query​Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_saql_query_input.htm "An Analytics query written in SAQL or SQL.")

Response body for POST

[Literal JSON](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_literal_json.htm "A string of JSON content results, usually for a query response.")

Execute a Query

For examples of how to execute SAQL and SQL queries, see [Query CRM Analytics Data with the Query API](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm "Use the CRM Analytics REST API to directly query analytics data using SAQL or SQL queries.").

## Code Examples

```
/wave/query
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Saql​Query​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_saql_query_input.htm)
- Literal JSON (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_literal_json.htm)
- Query CRM Analytics Data with the Query API (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm)
