---
title: "Wave Folder"
domain: bi-dev-guide-rest
topic: wave-folder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.098Z
estimatedTokens: 729
keywords: [Wave, Folder, Analytics]
---

> An Analytics folder.

# Wave Folder

An Analytics folder.

Properties

WaveFolder inherits properties from the abstract [BaseWaveAsset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm "The base Analytics asset."). These base properties appear in WaveFolder alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| app​Log | App​Log | The application log from the creation or upgrade of the application. | Supplemental, 49.0 | 49.0 |
| application​Status | Connect​Wave​Application​Status​Enum | The creation status of application. Valid values are:Cancelled​StatusCompleted​StatusDataflow​In​Progress​StatusExtension​Asset​Type​In​Progress​StatusFailed​StatusIn​Progress​StatusNew​Status | Medium, 36.0 | 36.0 |
| attached​Files | Asset​Reference[] | The id's of the files attached to the Analytics folder | Big, 39.0 | 39.0 |
| can​Be​Shared​Externally | Boolean | Indicates whether this app can be shared with Experience Cloud site users (true) or not (false). | Big, 37.0 | 37.0 |
| defaultAsset | Asset​Reference | The default dashboard or lens that is presented when the app is viewed in App Runtime mode. | Big, 37.0 | 37.0 |
| featured​Assets | Map<String, Featured​Assets> | The map of featured assets for this application to be used in the UI. | Big, 39.0 | 39.0 |
| icon | Asset​Reference | The asset icon. | Small, 36.0 | 36.0 |
| installationHistoryUrl | String | The URL to the app's installation history. | Small, 56.0 | 56.0 |
| is​Pinned | Boolean | Indicates whether this app is pinned (true) or not (false). | Small, 39.0 | 39.0 |
| schedule | Map<String, Wave​Folder​Schedule> | The reoccurring schedule for app related tasks, like data refresh. | Big, 57.0 | 57.0 |
| shares | Wave​Folder​Share[] | The folder shares list. | Big, 36.0 | 36.0 |
| template​Options | Template​Options | The options used on the last action performed on a templated Analytics application. | Big, 37.0 | 37.0 |
| template​Source​Id | String | The source template ID or api name used to create the folder or application. | Medium, 36.0 | 36.0 |
| template​Values | Map<String, Object> | The map of template values used to create or update the folder or application. | Big, 37.0 | 37.0 |
| template​Version | String | The version of the template this application was created from. | Medium, 37.0 | 37.0 |

#### See Also

-   [Folders List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm "Returns a collection of apps or folders and creates an Analytics app, which is a folder that contains Analytics dataset, lenses, and dashboard.")

-   [Folder Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm "Returns, deletes, updates, or replaces an Analytics app or folder with the specified ID.")

## Related Topics

- BaseWaveAsset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm)
- App​Log (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_app_log.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Featured​Assets (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_featured_assets.htm)
- Wave​Folder​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_schedule.htm)
- Wave​Folder​Share (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_share.htm)
- Template​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_options.htm)
- Folders List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm)
- Folder Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm)
