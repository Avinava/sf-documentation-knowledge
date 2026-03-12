---
title: "Xmd List Resource"
domain: bi-dev-guide-rest
topic: xmd-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.906Z
estimatedTokens: 332
keywords: [Xmd, Resource, resources, version, dataset, main, system, user, view, asset, Xmds, refer, API, URL, Formats]
---

# Xmd List Resource

> Returns a list of Xmd resources for a version of a dataset. This list is for main,
      system, and user Xmd types. To view asset type Xmds, refer to the Asset Xmd API resource.

# Xmd List Resource

Returns a list of Xmd resources for a version of a dataset. This list is for main, system, and user Xmd types. To view asset type Xmds, refer to the [Asset Xmd API resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm "Returns the extended metadata (Xmd) that is associated with an asset, like a dashboard.").

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getXmd](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-05dec041-d761-4b70-a56a-bac8a1d72854?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## HTTP Methods

GET

## GET Response Body

[Xmd Metadata Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_metadata_collection.htm "A collection of Analytics Xmd metadata.")

## Example Response Body

```

```

## Code Examples

```
/wave/datasets/<datasetIdOrApiName>/versions/<versionID>/xmds
```

```
{
  "url" : "/services/data/v36.0/wave/datasets/0Fb4000000000FtCAI/versions/0Fc4000000001VOCAY/xmds",
  "xmds" : [ {
    "type" : "main",
    "url" : "/services/data/v36.0/wave/datasets/0Fb4000000000FtCAI/versions/0Fc4000000001VOCAY/xmds/main"
  }, {
    "type" : "user",
    "url" : "/services/data/v36.0/wave/datasets/0Fb4000000000FtCAI/versions/0Fc4000000001VOCAY/xmds/user"
  }, {
    "type" : "system",
    "url" : "/services/data/v36.0/wave/datasets/0Fb4000000000FtCAI/versions/0Fc4000000001VOCAY/xmds/system"
  } ]
}
```

## Related Topics

- Asset Xmd API resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm)
- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Xmd Metadata Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_metadata_collection.htm)
