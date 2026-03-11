---
title: "Error"
domain: metadata-api
topic: error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.299Z
keywords: [Error, Version, Properties]
---

# Error

# Error

Represents an error that occurred during a synchronous CRUD (createMetadata(), updateMetadata(), or deleteMetadata()) operation.

## Version

Available in API version 30.0 and later.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| extendedErrorDetails | ExtendedErrorDetails | More details about the error, including an extended error code and extra error properties, when available. Reserved for future use.For a description of the ExtendedErrorDetails element, see ExtendedErrorDetails in the SOAP API Developer Guide. |
| fields | string[] | An array containing names of fields that affected the error condition. |
| message | string | The error message text. |
| statusCode | StatusCode | A status code corresponding to the error.For a description of each StatusCode value, see StatusCode in the SOAP API Developer Guide. |