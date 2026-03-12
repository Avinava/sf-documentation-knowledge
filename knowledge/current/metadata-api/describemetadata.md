---
title: "describeMetadata()"
domain: metadata-api
topic: describemetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.477Z
estimatedTokens: 395
keywords: [describeMetadata, call, retrieves, metadata, organization, includes, Apex, classes, triggers, custom, objects, standard, tab, define, app]
---

# describeMetadata()

> This call retrieves the metadata that describes your organization. This information
    includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets
    that define an app, and many other metadata types.

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

## Code Examples

```
DescribeMetadataResult = metadataConnection.describeMetadata(double apiVersion);
```

```apex
public void describeMetadata() {
  try {
    double apiVersion = 21.0;
    // Assuming that the SOAP binding has already been established.
    DescribeMetadataResult res = 
        metadataConnection.describeMetadata(apiVersion);
    StringBuffer sb = new StringBuffer();
    if (res != null && res.getMetadataObjects().length > 0) {
      for (DescribeMetadataObject obj : res.getMetadataObjects()) {
        sb.append("***************************************************
");
        sb.append("XMLName: " + obj.getXmlName() + "
");
        sb.append("DirName: " + obj.getDirectoryName() + "
");
        sb.append("Suffix: " + obj.getSuffix() + "
");
        sb.append("***************************************************
");
      }
    } else {
      sb.append("Failed to obtain metadata types.");
    }
    System.out.println(sb.toString());
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- DescribeMetadataResult (atlas.en-us.api_meta.meta/api_meta/meta_describemeta_result.htm)
