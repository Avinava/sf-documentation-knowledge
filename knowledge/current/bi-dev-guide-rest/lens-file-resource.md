---
title: "Lens File Resource"
domain: bi-dev-guide-rest
topic: lens-file-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.778Z
estimatedTokens: 209
keywords: [Lens, File, Resource, updates, part, Analytics, URL, Formats, Version, HTTP, PUT]
---

# Lens File Resource

> Returns or updates a file that is part of an Analytics
      lens.

# Lens File Resource

Returns or updates a file that is part of an Analytics lens.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## HTTP Methods

GET PUT

## GET and PUT Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fileId | Id | The 18 character file ID to return. | Required | 36.0 |
| lens​Id​Or​Api​Name | ID | The lens ID or API name to request the files for. | Required | 36.0 |

## GET Response Body

Returns the binary stream of the contents of the specified file.

## PUT Request Body

The binary upload to update the preview file with.

## PUT Response Body

[Wave File Metadata](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata.htm "The metadata for an Analytics file.")

## Code Examples

```
/wave/lenses/<lensIdOrApiName>/files/<fileId>
```

## Related Topics

- Wave File Metadata (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata.htm)
