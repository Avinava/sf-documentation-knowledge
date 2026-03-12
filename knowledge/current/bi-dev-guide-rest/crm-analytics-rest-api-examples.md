---
title: "CRM Analytics REST API Examples"
domain: bi-dev-guide-rest
topic: crm-analytics-rest-api-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.591Z
estimatedTokens: 575
keywords: [CRM, Analytics, REST, API, Examples, perform, tasks]
---

# CRM Analytics REST API Examples

> Use CRM Analytics REST API examples to perform tasks.

# CRM Analytics REST API Examples

Use CRM Analytics REST API examples to perform tasks.

While using the CRM Analytics REST API, keep this in mind:

-   Request parameters may be included as part of the CRM Analytics REST API resource URL, for example, /wave/folders?q=searchtext. A request body is a rich input which may be included as part of the request. When accessing a resource, you can use either a request body or request parameters. You cannot use both.
-   With a request body, use Content-Type: application/json or Content-Type: application/xml.
-   With request parameters, use Content-Type: application/x-www-form-urlencoded.
-   To test working example of the CRM Analytics API endpoints and view payload information, see the[CRM Analytics Connect API Collection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/collection/12721794-da62aee9-0da3-4f68-9083-1e10118bc2dd?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.")

-   **[Query CRM Analytics Data with the Query API](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm)**
    Use the CRM Analytics REST API to directly query analytics data using SAQL or SQL queries.
-   **[Backup and Restore Previous Versions of CRM Analytics Assets with History API](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_asset_history.htm)**
    When you edit CRM Analytics dashboards, lenses, recipes, and dataflows, CRM Analytics backs them up automatically. When you save a new version of an asset, CRM Analytics creates a snapshot of it. You can then preview snapshots and revert to previous versions using the REST History API.
-   **[Run, Schedule, and Sync CRM Analytics Data with REST APIs](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)**
    You can use the CRM Analytics REST API to automate features, like running and scheduling data syncs, dataflows and recipes.

## Related Topics

- CRM Analytics Rest API
            Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Query CRM Analytics Data with the Query API (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_query_data.htm)
- Backup and Restore Previous Versions of CRM Analytics Assets with History API (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_asset_history.htm)
- Run, Schedule, and Sync CRM Analytics Data with REST APIs (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
