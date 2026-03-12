---
title: "Folder Resources"
domain: bi-dev-guide-rest
topic: folder-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.753Z
estimatedTokens: 426
keywords: [Folder, Resources, Analytics, folders, represent, apps, collection, assets, created, users, templates]
---

# Folder Resources

> Analytics folders represent apps, a collection of assets. Folders can be created by users or by Analytics templates.

# Folder Resources

Analytics folders represent apps, a collection of assets. Folders can be created by users or by Analytics templates.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Folders List Resource | Returns a collection of apps or folders and creates an Analytics app | GET POST | /wave/folders |
| Folder Resource | Returns a folder, updates a folder, or deletes a folder. | GET PATCH DELETE | /wave/folders/<folderId> |
| Folder Schedule Resource | Returns a folder schedule, updates a folder schedule, or deletes a folder schedule. | GET PATCH DELETE | /wave/folders/<folderId>/schedule |
| Folder Settings Resource | Returns folder settings or updates folder settings. | GET PUT | /wave/folders/<folderId>/settings |

-   **[Folders List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm)**
    Returns a collection of apps or folders and creates an Analytics app, which is a folder that contains Analytics dataset, lenses, and dashboard.
-   **[Folder Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm)**
    Returns, deletes, updates, or replaces an Analytics app or folder with the specified ID.
-   **[Folder Schedule Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id_schedule.htm)**
    Returns, deletes, or updates the schedule for an Analytics app or folder with the specified ID.
-   **[Folder Settings Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id_settings.htm)**
    Returns or updates the settings for an Analytics app or folder with the specified ID.

## Related Topics

- Folders List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders.htm)
- Folder Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id.htm)
- Folder Schedule Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id_schedule.htm)
- Folder Settings Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_id_settings.htm)
