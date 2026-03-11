---
title: "MetadataWarningsHeader"
domain: tooling-api
topic: metadatawarningsheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:36.870Z
keywords: [MetadataWarningsHeader, Version, Supported, Calls, Field]
---

# MetadataWarningsHeader

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