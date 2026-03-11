---
title: "AllOrNoneHeader"
domain: metadata-api
topic: allornoneheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.452Z
keywords: [AllOrNoneHeader, Version, Supported, Calls, Usage, Fields, Sample, Code—Java]
---

# AllOrNoneHeader

# AllOrNoneHeader

Indicates whether to roll back all metadata changes when some of the records in a call result in failures.

## Version

This header is available in API version 34.0 and later.

## Supported Calls

[createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously."), [updateMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm "Updates one or more metadata components in your organization synchronously."), [upsertMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_upsertMetadata.htm "Creates or updates one or more metadata components in your organization synchronously."), [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.")

## Usage

If this header isn’t used in API version 34.0 and later, by default a call can save a partial set of records (equivalent to AllOrNoneHeader=false)—the records that are processed successfully are saved and records that have failures aren’t saved.

## Fields

| Field Name | Type | Description |
| --- | --- | --- |
| allOrNone | boolean | Set to true to cause all metadata changes to be rolled back if any records in the call cause failures. Set to false to enable saving only the records that are processed successfully when other records in the call cause failures. |

## Sample Code—Java

Add the AllOrNoneHeader to the metadata connection before you perform a call as follows:

```

```

This next example shows how to use the AllOrNoneHeader when creating two custom objects. Because the second custom object doesn’t have the required Name field, the create() call can’t create this custom object and rolls back the first custom object. The output is shown after this code sample.

```

```

This is the output that the sample returns. The first record is rolled back and the second has a failure.

```

```