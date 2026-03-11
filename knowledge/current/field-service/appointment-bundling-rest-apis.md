---
title: "Appointment Bundling REST APIs"
domain: field-service
topic: appointment-bundling-rest-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.336Z
keywords: [Appointment, Bundling, REST, APIs, Limitations]
---

# Appointment Bundling REST APIs

# Appointment Bundling REST APIs

Use the Appointment Bundling REST APIs to create bundles, remove bundle members, start the automated process for creating bundles, unbundle one or more bundles, and update a bundle.

## Limitations

**Create Bundle, Remove Bundle Members, Unbundle, Unbundle Multiple, Update Bundle**

-   1000 API calls within 24 hours.
-   50 API calls per engineer license within 24 hours (in addition to the 1000 API calls).
-   10 concurrent API calls.

**Start Batch**

-   One API call per hour, per territory.

-   **[Create Bundle](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_rest_bundle.htm)**  
    Creates a bundle of service appointments manually. This resource accepts service appointment IDs and a manual bundling policy ID. The manual bundling policy specifies the bundling rules and has to be marked for manual bundling. This resource returns the ID of the bundle service appointment. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.
-   **[Remove Bundle Members](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_rest_remove.htm)**  
    Removes one or more service appointments from an existing bundle. This resource accepts service appointment IDs. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.
-   **[Start Batch](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_rest_startbatch.htm)**  
    Creates service appointment bundles automatically. The resource uses appointment bundle policies that are marked for automatic bundling. Service appointments that are already bundled manually stay untouched by this API. The resource returns the success or failure message of starting the batch process of automatic bundling. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.
-   **[Unbundle](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_rest_unbundle.htm)**  
    Unbundle a bundle of service appointments. This resource accepts a bundle ID. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.
-   **[Unbundle Multiple](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_rest_unbundlemultiple.htm)**  
    Unbundle one or more bundles of service appointments. This resource accepts one or more bundle IDs. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.
-   **[Update Bundle](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_rest_updatebundle.htm)**  
    Adds service appointments to an existing bundle. This resource accepts a bundle ID and service appointment IDs. This API is not supported in Gov Cloud. This endpoint is available in version 54.0 and later of the Salesforce API.