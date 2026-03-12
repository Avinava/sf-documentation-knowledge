---
title: "Lens File Metadata Resource"
domain: bi-dev-guide-rest
topic: lens-file-metadata-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.775Z
estimatedTokens: 349
keywords: [Lens, File, Metadata, Resource, creates, API, URL, Formats, Version, HTTP, POST]
---

# Lens File Metadata Resource

> Returns or creates the lens file metadata with the specified ID or
      API name.

# Lens File Metadata Resource

Returns or creates the lens file metadata with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lens​Id​Or​Api​Name | ID | The lens ID or API name to request the files for. | Required | 36.0 |
| page | String | A generated token that indicates the view of the lenses to be returned. | Optional | 36.0 |
| pageSize | Integer | The number of items to be returned in a single page. Minimum is 1,maximum is 200, and default is 25. | Optional | 36.0 |

## GET Response Body

[Wave File Metadata Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata_collection.htm "A collection of the metadata for Analytics files.")

## POST Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lens​Id​Or​Api​Name | ID | The lens ID or API name to upload the file to. | Required | 36.0 |

## POST Request Body

The binary upload to create the preview file.

## POST Response Body

[Wave File Metadata](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata.htm "The metadata for an Analytics file.")

## Code Examples

```
/wave/lenses/<lensIdOrApiName>/files
```

## Related Topics

- Wave File Metadata Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata_collection.htm)
- Wave File Metadata (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_file_metadata.htm)
