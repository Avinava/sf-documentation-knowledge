---
title: "describeMetadata()"
domain: metadata-api
topic: describemetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.883Z
keywords: [describeMetadata, Syntax, Arguments, Permissions, Note, Sample, Code—Java, Response, describeValueType]
---

# describeMetadata()

# describeMetadata()

This call retrieves the metadata that describes your organization. This information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that define an app, and many other metadata types.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| apiVersion | double | The API version for which you want metadata, for example, 66.0. |

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Sample Code—Java

```

```

## Response

[DescribeMetadataResult](atlas.en-us.api_meta.meta/api_meta/meta_describemeta_result.htm "Contains information about the organization that is useful for developers working with declarative metadata.")

## When to Use describeMetadata() and describeValueType()?

Use the describeMetadata() call to get high-level information about all the metadata types that are available for your organization, such as type names and file suffixes. Use the describeValueType() call to get granular information about a specific metadata type, such as fields contained within the type.