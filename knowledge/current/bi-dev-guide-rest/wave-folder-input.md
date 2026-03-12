---
title: "Wave Folder Input"
domain: bi-dev-guide-rest
topic: wave-folder-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.944Z
estimatedTokens: 455
keywords: [Wave, Folder, Input, Analytics, implements, BaseWaveFolderInput]
---

# Wave Folder Input

> An Analytics folder. This implements BaseWaveFolderInput.

# Wave Folder Input

An Analytics folder. This implements BaseWaveFolderInput.

## Properties

Inherits from [Base Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm "The base Analytics folder asset.")

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| application​Status | Connect​Wave​Application​Status​Enum | The creation status of application. Valid values are:Cancelled​StatusCompleted​StatusDataflow​In​Progress​StatusExtension​Asset​Type​In​Progress​StatusFailed​StatusIn​Progress​StatusNew​Status | Required | 36.0 |
| attached​Files | Asset​Reference​Input[] | The list of attached file IDs. | Required | 39.0 |
| can​Be​Shared​Externally | Boolean | Indicates whether the app is shared in Communities (true) or not (false). | Required | 39.0 |
| default​Asset | Asset​Reference​Input | The default dashboard or lens presented for this app during app runtime. | Required | 37.0 |
| featured​Assets | Map<String, Featured​Assets​Input> | The map of featured assets for this application to be used in the UI. | Required | 39.0 |
| is​Pinned | Boolean | Indicates whether the app is a pinned app (true) or not (false). | Required | 39.0 |
| shares | Wave​Folder​Share​Input[] | The folder shares list. | Required | 36.0 |

#### See Also

-   [Folders List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm "Returns a collection of apps or folders and creates an Analytics app, which is a folder that contains Analytics dataset, lenses, and dashboard.")

-   [Folder Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm "Returns, deletes, updates, or replaces an Analytics app or folder with the specified ID.")

## Related Topics

- Base Wave Folder
      Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Featured​Assets​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_featured_assets_input.htm)
- Wave​Folder​Share​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_share_input.htm)
- Folders List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm)
- Folder Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm)
