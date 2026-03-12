---
title: "SAQL Query Input"
domain: bi-dev-guide-rest
topic: saql-query-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.835Z
estimatedTokens: 293
keywords: [SAQL, Query, Input, Analytics, written, SQL]
---

# SAQL Query Input

> An Analytics query written in SAQL or SQL.

# SAQL Query Input

An Analytics query written in SAQL or SQL.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| license​Attributes | Licenses​Attributes​Input | The Analytics license type and other properties. | Optional | 53.0 |
| name | String | The query name. | Optional | 41.0 |
| query | String | The query string. | Required | 40.0 |
| query​Language | Analytics​Query​Language​Enum | The language in which the query in written. The default value is SAQL. Valid values are:SAQLSQL | Required if the query is SQL. | 48.0 |
| timezone | String | The timezone for the query. The org must have timezone enabled for use in queries. | Optional | 43.0 |

#### See Also

-   [Query Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_query.htm "Executes a query written in Salesforce Analytics Query Language (SAQL) or SQL for CRM Analytics.")

-   [Query CRM Analytics Data with the Query API](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm "Use the CRM Analytics REST API to directly query analytics data using SAQL or SQL queries.")

## Related Topics

- Licenses​Attributes​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_license_attributes_input.htm)
- Query Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_query.htm)
- Query CRM Analytics Data with the Query API (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm)
