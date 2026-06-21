---
title: "Data Processing Engine Additional Information"
domain: revenue-cloud
topic: data-processing-engine-additional-information
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-06-21T00:39:53.535Z
estimatedTokens: 204
keywords: [Processing, Engine, Additional, know, deployment, Revenue, Cloud, Considerations]
---

> Get to know additional deployment information for Data Processing Engine in Revenue
    Cloud.

# Data Processing Engine Additional Information

Get to know additional deployment information for Data Processing Engine in Revenue Cloud.

## Deployment Considerations

-   Data Processing Engine objects have Draft and Active states.
-   The objects must be created in Draft state and activated later. The activation is done through API.
-   Configuration can’t be changed after an object is updated to Active state.
-   Set the state of the object to Inactive for any modifications, and then set the state to Active.

## Other Information

-   Data Processing Engine has dependencies on these components.
    -   CRM Analytics or Data Cloud
    -   Bulk API
-   You can deploy Data Processing Engine definitions from one organization to another. Both organizations must be on the same Salesforce release version.
