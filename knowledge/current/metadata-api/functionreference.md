---
title: "FunctionReference"
domain: metadata-api
topic: functionreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:26.393Z
estimatedTokens: 308
keywords: [FunctionReference, deployed, Salesforce, Function, invoked, org, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location]
---

> Represents information about a deployed Salesforce Function
      that can be invoked from the org.
    This type extends the Metadata metadata type and inherits its fullName field.

# FunctionReference

Represents information about a deployed Salesforce Function that can be invoked from the org. This type extends the Metadata metadata type and inherits its fullName field.

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
