---
title: "CatalogedApiArtifactVersionInfo"
domain: metadata-api
topic: catalogedapiartifactversioninfo
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-04-07T18:36:23.378Z
estimatedTokens: 266
keywords: [CatalogedApiArtifactVersionInfo, API, Catalog, that’s, referenced, entities, Parent, File, Suffix, Directory, Location, Declarative, Metadata, Sample, Definition]
---

> Represents API version information in API Catalog
			that’s referenced by other entities.

# CatalogedApiArtifactVersionInfo

Represents API version information in API Catalog that’s referenced by other entities.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CatalogedApiArtifactVersionInfo components have the suffix .catalogedApiArtifactVersionInfo and are stored in the catalogedApiArtifactVersionInfos folder.

## Version

CatalogedApiArtifactVersionInfo components are available in API version 65.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| releaseNotes | string | The API release notes. |
| revision | int | The API revision. |
| type | string | Required. The API type. |
| version | string | Required. The API version. |

## Declarative Metadata Sample Definition

This XML is an example of a CatalogedApiArtifactVersionInfo component.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CatalogedApiArtifactVersionInfo xmlns="http://soap.sforce.com/2006/04/metadata">
    <revision>1</revision>
    <type>API</type>
    <version>v1</version>
</CatalogedApiArtifactVersionInfo>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
