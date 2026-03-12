---
title: "Motifs Resources"
domain: chatterapi
topic: motifs-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.823Z
estimatedTokens: 549
keywords: [Motifs, Resources, URLs, small, medium, large, motif, icons, Records, different, depending, record, include, type’s, base]
---

# Motifs Resources

> Returns URLs for sets of small, medium, and large
         motif icons. Records have different sets of motif icons depending on the record type. The
         motif can also include the record type’s base color.

# Motifs Resources

Returns URLs for sets of small, medium, and large motif icons. Records have different sets of motif icons depending on the record type. The motif can also include the record type’s base color.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/motifs/idOrPrefix | Returns a set of small, medium, and large motif icons for the specified record. Can also return the base color for the specified record. |
| /connect/motifs/batch/idOrPrefixList | Returns a set of small, medium, and large motif icons for the specified records. Can also contain the base color for each specified record. |

## Motifs Resource

Returns a set of small, medium, and large motif icons for the specified record. Can also return the base color for the specified record.

Specify either an ID or key prefix for idOrPrefix.

Resource

```

```

```

```

Available since release

27.0

HTTP methods

GET or HEAD

Response body

[Motif](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.")

Example of GET

Request for user motifs: /connect/motifs/005D0000001LLO1

Response:

```

```

## Batch Motifs Resource

Returns a set of small, medium, and large motif icons for the specified records. Can also contain the base color for each specified record.

Specify a comma-separated list of IDs and key prefixes for idOrPrefixList. You can mix IDs and key prefixes in the same request.

Resource

```

```

```

```

Available since release

27.0

HTTP methods

GET or HEAD

Response body

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

Example of GET

Request for motifs for a user and a file: /connect/motifs/batch/005D0000001LLO1,069D00000001FHF

Response:

```

```

## Code Examples

```
/connect/communities/communityId/motifs/idOrPrefix
```

```
{
   "color": "1797C0",
   "largeIconUrl": "/img/icon/profile64.png",
   "mediumIconUrl": "/img/icon/profile32.png",
   "smallIconUrl": "/img/icon/profile16.png"
}
```

```
/connect/communities/communityId/motifs/batch/idOrPrefixList
```

```
{"results": [
   {
      "result": {
         "color": "1797C0",
         "largeIconUrl": "/img/icon/profile64.png",
         "mediumIconUrl": "/img/icon/profile32.png",
         "smallIconUrl": "/img/icon/profile16.png"
      },
      "statusCode": 200
   },
   {
      "result": {
         "color": "993333",
         "largeIconUrl": "/img/content/content64.png",
         "mediumIconUrl": "/img/content/content32.png",
         "smallIconUrl": "/img/icon/files16.png"
      },
      "statusCode": 200
   }
]}
```

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
