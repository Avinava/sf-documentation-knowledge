---
title: "SaveResult"
domain: metadata-api
topic: saveresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.494Z
keywords: [SaveResult, Version, Properties]
---

# SaveResult

# SaveResult

Contains result information for the createMetadata, updateMetadata, or renameMetadata call.

## Version

Available in API version 30.0 and later.

## Properties

| Name | Type | Description |
| --- | --- | --- |
| errors | Error[] | An array of errors returned if the operation wasn't successful. |
| fullName | string | The full name of the component processed. |
| success | boolean | Indicates whether the operation was successful (true) or not (false). |