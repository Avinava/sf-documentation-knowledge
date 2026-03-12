---
title: "Xmd Resource"
domain: bi-dev-guide-rest
topic: xmd-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.900Z
estimatedTokens: 358
keywords: [Xmd, Resource, extended, metadata, version, dataset, updates, user, file, URL, Formats, Components, HTTP, PUT]
---

# Xmd Resource

> Returns the extended metadata (Xmd) for a version of a dataset and
      updates the user Xmd file.

# Xmd Resource

Returns the extended metadata (Xmd) for a version of a dataset and updates the user Xmd file.

## Resource URL

```

```

```

```

```

```

For full details on Xmd, refer to the [Analytics Extended Metadata (Xmd) Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_intro.htm).

## Formats

JSON

## Available Version

36.0

## Available Components

-   LWC — [lightning/analyticsWaveApi getXmd()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-xmd.html)
-   LWC — [lightning/analyticsWaveApi updateXmd()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-xmd.html)

## HTTP Methods

GET PUT (on Xmd User type only)

## GET Response Body

[Xmd](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd.htm "The extended metadata (Xmd) for an Analytics dataset version.")

## PUT Request Body

[Xmd Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm "The extended metadata (Xmd) for an Analytics dataset version.")

The following JSON shows a PUT request to update measures in the User Xmd. The PUT request cannot be used to update System or Main Xmd types.

```

```

## PUT Response Body

[Xmd](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd.htm "The extended metadata (Xmd) for an Analytics dataset version.")

## Code Examples

```
/wave/datasets/<datasetID>/versions/<versionID>/xmds/main
```

```
/wave/datasets/<datasetID>/versions/<versionID>/xmds/system
```

```
/wave/datasets/<datasetID>/versions/<versionID>/xmds/user
```

```
{
  "measures" : [ {
    "conditionalFormatting" : { },
    "field" : "LastModifiedDate_day_epoch",
    "format" : {
      "delimiters" : { }
    },
    "label" : "LastModDate_day_epoch",
    "showInExplorer" : true
  }, {
    "conditionalFormatting" : { },
    "field" : "LastModifiedDate_sec_epoch",
    "format" : {
      "delimiters" : { }
    },
    "label" : "LastModDate_sec_epoch",
    "showInExplorer" : true
  } ]
}
```

## Related Topics

- Xmd (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd.htm)
- Xmd Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm)
