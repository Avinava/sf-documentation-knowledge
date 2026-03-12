---
title: "Wave File Metadata"
domain: bi-dev-guide-rest
topic: wave-file-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.797Z
estimatedTokens: 297
keywords: [Wave, File, Metadata, Analytics]
---

# Wave File Metadata

> The metadata for an Analytics file.

# Wave File Metadata

The metadata for an Analytics file.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | Wave​User | The user that created the file. | Medium, 36.0 | 36.0 |
| created​Date | Date | The created date of the file. | Medium, 36.0 | 36.0 |
| id | String | The 18 character file ID. | Small, 36.0 | 36.0 |
| last​Accessed​Date | Date | The last accessed date of the file. | Medium, 36.0 | 36.0 |
| last​Modified​Date | Date | The last modified date of the file. | Medium, 36.0 | 36.0 |
| length | Integer | The size of the binary file. | Small, 36.0 | 36.0 |
| name | String | The name of the file. | Small, 36.0 | 36.0 |
| url | String | The URL of the file. | Small, 36.0 | 36.0 |

#### See Also

-   [Lens File Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files_id.htm "Returns or updates a file that is part of an Analytics lens.")

-   [Lens File Metadata Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files.htm "Returns or creates the lens file metadata with the specified ID or API name.")

## Related Topics

- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Lens File Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files_id.htm)
- Lens File Metadata Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_id_files.htm)
