---
title: "Commerce Einstein Resources"
domain: chatterapi
topic: commerce-einstein-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:14.009Z
estimatedTokens: 709
keywords: [Commerce, Einstein, Resources, status, deployment, configuration, Export, purge, activity]
---

# Commerce Einstein Resources

> Get the status of a Commerce Einstein deployment. Get the Commerce Einstein
      configuration. Export and purge Commerce Einstein activity.

# Commerce Einstein Resources

Get the status of a Commerce Einstein deployment. Get the Commerce Einstein configuration. Export and purge Commerce Einstein activity.

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/einstein/webstores/webstoreId/status | Get the status of a Commerce Einstein deployment for a store. |
| /commerce/einstein/webstores/webstoreId/configuration | Get the Commerce Einstein configuration for a store. |
| /commerce/einstein/webstores/webstoreId/activities​/export-jobs | Enqueue a job to export Commerce Einstein activity for a store. |
| /commerce/einstein/webstores/webstoreId/activities​/export-jobs/jobId | Get the status of a Commerce Einstein activity export job for a store. |
| /commerce/einstein/webstores/webstoreId/activities​/export-jobs/jobId/file-content | Download an exported Commerce Einstein activity file for a store. |
| /commerce/einstein/webstores/webstoreId/activities​/purge-jobs | Enqueue a job to purge Commerce Einstein activity for a store. |
| /commerce/einstein/webstores/webstoreId/activities​/purge-jobs/jobId | Get the status of a Commerce Einstein activity purge job for a store. |

-   **[Commerce Einstein Webstore Deployment Status](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_status.htm)**
    Get the status of a Commerce Einstein deployment for a store.
-   **[Commerce Einstein Webstore Configuration](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_config.htm)**
    Get the Commerce Einstein configuration for a store.
-   **[Commerce Einstein Webstore Activities, Export](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export.htm)**
    Enqueue a job to export Commerce Einstein activity for a store.
-   **[Commerce Einstein Webstore Activities, Export Status (Deprecated after v54.0)](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export_status.htm)**
    Get the status of a Commerce Einstein activity export job for a store.
-   **[Commerce Einstein Webstore Activities, Download Export File](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export_file.htm)**
    Download an exported Commerce Einstein activity file for a store.
-   **[Commerce Einstein Webstore Activities, Purge](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_purge.htm)**
    Enqueue a job to purge Commerce Einstein activity for a store.
-   **[Commerce Einstein Webstore Activities, Purge Status](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_purge_status.htm)**
    Get the status of a Commerce Einstein activity purge job for a store.

## Related Topics

- /commerce/einstein/webstores/webstoreId/status (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_status.htm)
- /commerce/einstein/webstores/webstoreId/configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_config.htm)
- /commerce/einstein/webstores/webstoreId/activities​/export-jobs (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export.htm)
- /commerce/einstein/webstores/webstoreId/activities​/export-jobs/jobId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export_status.htm)
- /commerce/einstein/webstores/webstoreId/activities​/export-jobs/jobId/file-content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export_file.htm)
- /commerce/einstein/webstores/webstoreId/activities​/purge-jobs (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_purge.htm)
- /commerce/einstein/webstores/webstoreId/activities​/purge-jobs/jobId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_purge_status.htm)
- Commerce Einstein Webstore Deployment Status (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_status.htm)
- Commerce Einstein Webstore Configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_config.htm)
- Commerce Einstein Webstore Activities, Export (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_einstein_webstore_activities_export.htm)
