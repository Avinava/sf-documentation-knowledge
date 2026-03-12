---
title: "File Information, Batch"
domain: chatterapi
topic: file-information-batch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.386Z
estimatedTokens: 167
keywords: [File, Batch, files, IDs]
---

# File Information, Batch

> Information about a list of
files, specified by file IDs. Get information about a list of files
and delete a list of files.

# File Information, Batch

Information about a list of files, specified by file IDs. Get information about a list of files and delete a list of files.

The number of file IDs you can specify is limited by the length of the URL. In general, you can specify up to 100 file IDs in a comma-separated list.

Resource

```

```

```

```

Available since version

36.0

In versions 26.0–35.0, use /chatter/files/batch/fileIds and /connect/communities/communityId/chatter/files/batch/fileIds, which require Chatter.

HTTP methods

GET, DELETE

Response body

[Batch Result Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_result.htm "Batch result item.")

## Code Examples

```
/connect/files/batch/fileIds
```

```
/connect/communities/communityId/files/batch/fileIds
```

## Related Topics

- Batch Result Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_result.htm)
