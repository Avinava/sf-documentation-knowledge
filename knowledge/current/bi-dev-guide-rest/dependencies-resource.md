---
title: "Dependencies Resource"
domain: bi-dev-guide-rest
topic: dependencies-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.711Z
estimatedTokens: 308
keywords: [Dependencies, Resource, asset, URL, Formats, Version, Postman, Components, HTTP]
---

# Dependencies Resource

> Returns the dependencies for an asset.

# Dependencies Resource

Returns the dependencies for an asset.

The dependencies resource returns only assets on which you have view access.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getDependency](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-2da5fcbd-8a02-4169-9fce-30f72677624f?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDependencies()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dependencies.html)

## HTTP Methods

GET

## Response body for GET

[Dependency](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dependency.htm "An Analytics asset dependency.")

## Code Examples

```
/wave/dependencies/<assetId>
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dependency (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dependency.htm)
