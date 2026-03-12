---
title: "FunctionReference"
domain: metadata-api
topic: functionreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.172Z
estimatedTokens: 350
keywords: [FunctionReference, Represents, information, deployed, Salesforce, Function, invoked, org., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location, Version]
---

# FunctionReference

> Represents information about a deployed Salesforce Function
      that can be invoked from the org.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# FunctionReference

Represents information about a deployed Salesforce Function that can be invoked from the org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FunctionReference does not support direct access and should be managed using Salesforce CLI commands associated with Functions. A FunctionReference component file has the suffix .functions and is stored in the functions directory.

## Version

FunctionReference components are available in API version 52.0 and later.

## Special Access Rules

FunctionReference components can’t be used directly. Always use Salesforce CLI commands associated with Functions to properly deploy Functions and associate Functions with orgs. Attempting to manipulate FunctionReference components directly without using Functions CLI commands is not supported.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Represents the description of the Salesforce Function. |
| label | string | Represents the label for the Salesforce Function. |
| permissionSet | string | Represents a set of permissions that's used to control org resources that the Function has access to. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
