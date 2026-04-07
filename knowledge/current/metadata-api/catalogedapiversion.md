---
title: "CatalogedApiVersion"
domain: metadata-api
topic: catalogedapiversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T07:46:04.322Z
estimatedTokens: 315
keywords: [CatalogedApiVersion, version, API, consumable, Salesforce, Catalog, Parent, File, Suffix, Directory, Location, Special, Access, Rules, Declarative]
---

# CatalogedApiVersion

> Represents a version of an API that is consumable in Salesforce
			using API Catalog.

# CatalogedApiVersion

Represents a version of an API that is consumable in Salesforce using API Catalog.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CatalogedApiVersion components have the suffix .catalogedApiVersion and are stored in the catalogedApiVersions folder.

## Version

CatalogedApiVersion components are available in API version 65.0 and later.

## Special Access Rules

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| catalogedApi | string | Required. An API managed for consumption in Salesforce using API Catalog. |
| description | string | The description defined when the API is cataloged. |
| externalSourceIdentifier | string | The ID of the API in the external source that it's imported from. |
| label | string | Required. The API name as it appears in API Catalog. |
| version | string | Required. The ID of the API version information. |

## Declarative Metadata Sample Definition

This XML is an example of a CatalogedApiVersion component.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CatalogedApiVersion xmlns="http://soap.sforce.com/2006/04/metadata">
    <catalogedApi>PetstoreEngineeringv109C60C7C</catalogedApi>
    <externalSourceIdentifier>urn:ms:03ff2c74-d0ea-4eba-a536-36dfd2d0fdbb:api-project::petstore-engineering/v1</externalSourceIdentifier>
    <label>petstore-engineering</label>
    <version>v1lwWZmDFyJYIFValk</version>
</CatalogedApiVersion>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
