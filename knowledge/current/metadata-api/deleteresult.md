---
title: "DeleteResult"
domain: metadata-api
topic: deleteresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.818Z
keywords: [DeleteResult, Version, Properties]
---

# DeleteResult

# DeleteResult

Contains result information for the deleteMetadata call.

## Version

Available in API version 30.0 and later.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| errors | Error[] | An array of errors returned if the operation wasn’t successful. |
| fullName | string | The full name of the deleted component. |
| success | boolean | Indicates whether the deletion was successful (true) or not (false). |