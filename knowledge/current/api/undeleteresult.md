---
title: "UndeleteResult"
domain: api
topic: undeleteresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.599Z
estimatedTokens: 137
keywords: [UndeleteResult, undelete, call]
---

# UndeleteResult

> The undelete() call returns an
   undeleteResult object with the following properties:

# UndeleteResult

The [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin.") call returns an undeleteResult object with the following properties:

| Name | Type | Description |
| --- | --- | --- |
| Id | ID | ID of the record being undeleted. |
| success | boolean | Indicates whether the undelete was successful (true) or not (false). |
| errors | Error[] | If an error occurred during the undelete() call, an array of one or more Error objects providing the error code and description. |

## Related Topics

- undelete() (atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm)
