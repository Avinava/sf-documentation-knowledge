---
title: "DataExtensionError"
domain: mc-apis
topic: dataextensionerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.252Z
estimatedTokens: 139
keywords: [DataExtensionError, error, messages, creating, updating, data, extensions]
---

# DataExtensionError

> The DataExtensionError object specifies error messages related to creating or updating data extensions and related fields.

# DataExtensionError

The DataExtensionError object specifies error messages related to creating or updating data extensions and related fields.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ErrorCode | xsd:string | Identifies the error of an API request via a numeric code. |
| ErrorMessage | xsd:string | Contains a human-readable detailed message that provides more information about the error. For example, row errors for a data extension where rows cannot be found. |
| Name | xsd:string | Name of the object or property. |
