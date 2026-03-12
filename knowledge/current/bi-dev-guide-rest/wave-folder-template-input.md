---
title: "Wave Folder Template Input"
domain: bi-dev-guide-rest
topic: wave-folder-template-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.955Z
estimatedTokens: 326
keywords: [Wave, Folder, Template, Input, templated, Analytics, implements, BaseWaveFolderInput]
---

# Wave Folder Template Input

> A templated Analytics folder. This implements BaseWaveFolderInput.

# Wave Folder Template Input

A templated Analytics folder. This implements BaseWaveFolderInput.

## Properties

Inherits from [Base Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm "The base Analytics folder asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| template​Options | Template​Options​Input | The template directive options for determining the final actions when upgraded a Analytics app from a template. | Required | 37.0 |
| template​Source​Id | String | The template source ID or API name used to create the Analytics app. | Required | 36.0 |
| template​Values | String | The runtime template values to use when creating a Analytics app, as specified by the template. | Required | 36.0 |

#### See Also

-   [Folders List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm "Returns a collection of apps or folders and creates an Analytics app, which is a folder that contains Analytics dataset, lenses, and dashboard.")

-   [Folder Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm "Returns, deletes, updates, or replaces an Analytics app or folder with the specified ID.")

## Related Topics

- Base Wave Folder
       Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm)
- Template​Options​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm)
- Folders List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm)
- Folder Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm)
