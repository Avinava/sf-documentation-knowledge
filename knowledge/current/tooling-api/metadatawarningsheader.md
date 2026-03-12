---
title: "MetadataWarningsHeader"
domain: tooling-api
topic: metadatawarningsheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:44.227Z
estimatedTokens: 121
keywords: [MetadataWarningsHeader, Allows, save, metadata, even, warnings, returned., Version, Supported, Calls, Field]
---

# MetadataWarningsHeader

> Allows you to save metadata even if warnings are
            returned.

# MetadataWarningsHeader

Allows you to save metadata even if warnings are returned.

## Version

This header is available in API version 35.0 and later.

## Supported Calls

delete(), update(), upsert()

## Field

| Field Name | Type | Description |
| --- | --- | --- |
| ignoreSaveWarnings | boolean | If true, you can save metadata such as a flow even if there are warnings, but not if there are errors.See also Allow Metadata Save Operations to Complete with Returned Warnings |

## Related Topics

- Allow Metadata Save Operations to Complete with Returned Warnings (atlas.en-us.api_tooling.meta/api_tooling/tooling_metadata_save_warning.htm)
