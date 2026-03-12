---
title: "EmbeddedServiceFlowConfig"
domain: metadata-api
topic: embeddedserviceflowconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.869Z
estimatedTokens: 226
keywords: [EmbeddedServiceFlowConfig, setup, node, creating, embedded, flow, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# EmbeddedServiceFlowConfig

> Represents a setup node for creating an
      embedded flow.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# EmbeddedServiceFlowConfig

Represents a setup node for creating an embedded flow. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EmbeddedServiceFlowConfig components are stored in the developer\_name.EmbeddedServiceFlowConfig file in the EmbeddedServiceFlowConfig folder.

## Version

EmbeddedServiceFlowConfig is available in API version 45.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Indicates whether the embedded flow is enabled (true) or not (false). Defaults to false. |

## Declarative Metadata Sample Definition

The following is an example of an EmbeddedServiceFlowConfig file.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmbeddedServiceFlowConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <enabled>true</enabled>
</EmbeddedServiceFlowConfig>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
