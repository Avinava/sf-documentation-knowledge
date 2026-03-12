---
title: "Commerce Einstein Webstore Resources"
domain: chatterapi
topic: commerce-einstein-webstore-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:14.148Z
estimatedTokens: 772
keywords: [Commerce, Einstein, Webstore, Resources, status, deployment, configuration, Export, purge, activity, product, recommendations]
---

# Commerce Einstein Webstore Resources

> Get the status of a Commerce Einstein deployment. Get the Commerce Einstein
  configuration. Export and purge Commerce Einstein activity. Get Commerce Einstein product
  recommendations.

# Commerce Einstein Webstore Resources

Get the status of a Commerce Einstein deployment. Get the Commerce Einstein configuration. Export and purge Commerce Einstein activity. Get Commerce Einstein product recommendations.

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/webstores/webstoreId/ai/status | Get the status of a Commerce Einstein deployment for a store. |
| /commerce/webstores/webstoreId/ai/configuration | Get the Commerce Einstein configuration for a store. |
| /commerce/webstores/webstoreId/ai/activities​/export-jobs | Enqueue a job to export Commerce Einstein activity for a store. |
| /commerce/webstores/webstoreId/ai/activities​/export-jobs/jobId | Get the status of a Commerce Einstein activity export job for a store. |
| /commerce/webstores/webstoreId/ai/activities​/export-jobs/jobId/file-content | Download an exported Commerce Einstein activity file for a store. |
| /commerce/webstores/webstoreId/ai/activities​/purge-jobs | Enqueue a job to purge Commerce Einstein activity for a store. |
| /commerce/webstores/webstoreId/ai/activities​/purge-jobs/jobId | Get the status of a Commerce Einstein activity purge job for a store. |
| /commerce/webstores/webstoreId/ai/recommendations | Get Commerce Einstein product recommendations. |

-   **[Commerce Einstein Webstore Deployment Status](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_status.htm)**
    Get the status of a Commerce Einstein deployment for a store.
-   **[Commerce Einstein Webstore Configuration](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_config.htm)**
    Get the Commerce Einstein configuration for a store.
-   **[Commerce Einstein Webstore Activities, Export](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_export.htm)**
    Enqueue a job to export Commerce Einstein activity for a store.
-   **[Commerce Einstein Webstore Activities, Export Status](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_export_status.htm)**
    Get the status of a Commerce Einstein activity export job for a store.
-   **[Commerce Einstein Webstore Activities, Download Export File](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_export_file.htm)**
    Download an exported Commerce Einstein activity file for a store.
-   **[Commerce Einstein Webstore Activities, Purge](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_purge.htm)**
    Enqueue a job to purge Commerce Einstein activity for a store.
-   **[Commerce Einstein Webstore Activities, Purge Status](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_purge_status.htm)**
    Get the status of a Commerce Einstein activity purge job for a store.
-   **[Commerce Einstein Webstore Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_recommendations.htm)**
    Get Commerce Einstein product recommendations.

## Related Topics

- /commerce/webstores/webstoreId/ai/status (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_status.htm)
- /commerce/webstores/webstoreId/ai/configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_config.htm)
- /commerce/webstores/webstoreId/ai/activities​/export-jobs (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_export.htm)
- /commerce/webstores/webstoreId/ai/activities​/export-jobs/jobId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_export_status.htm)
- /commerce/webstores/webstoreId/ai/activities​/export-jobs/jobId/file-content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_export_file.htm)
- /commerce/webstores/webstoreId/ai/activities​/purge-jobs (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_purge.htm)
- /commerce/webstores/webstoreId/ai/activities​/purge-jobs/jobId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_activities_purge_status.htm)
- /commerce/webstores/webstoreId/ai/recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_recommendations.htm)
- Commerce Einstein Webstore Deployment Status (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_status.htm)
- Commerce Einstein Webstore Configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_ai_config.htm)
