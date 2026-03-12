---
title: "folder.json Attributes"
domain: bi-dev-guide-wave-templates
topic: folderjson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.543Z
estimatedTokens: 449
keywords: [folder.json, Attributes, file]
---

# folder.json Attributes

> The folder.json file attributes are:

# folder.json Attributes

The folder.json file attributes are:

| Attribute | Required | Description |
| --- | --- | --- |
| name | Yes for auto-installed templates, No for templates that use the configuration wizard | Folder developer name. For apps created from auto-installed templates, the folder developer name is required for the creation of app. |
| label | No | Folder label. |
| description | No | Folder description. |
| featuredAssets | Yes | Container for assets; this can be empty if no featuredAssets are present. |
| featuredAssets → default | No | Container for assets. |
| featuredAssets → default→ assets | No | Container for array of assets. |
| featuredAssets → default→ assets→ id element | No | Tokenized ID of dashboard asset. |
| featuredAssets → default→ assets→ name | No | Asset name. |
| featuredAssets → default→ assets→ namespace | No | Asset namespace. |
| featuredAssets → default→ assets→ type | No | Asset type, such as dashboards, lenses, or eltDatflows. Can be null. |
| shares | No | Sharing rules for the folder. |
| shares → sharedWithID | Yes, if shares is used. | User ID or Group ID to share this folder with. |
| shares → accessType | Yes, if shares is used. | Access type for the sharing rule. Valid values are EDIT, MANAGE, and VIEW. |
| shares → shareType | Yes, if shares is used. | The sharing type for the sharing rule. Valid values are Group, Organization, Role, RoleAndSubordinates, RoleAndSubordinatesInternal, User, PortalRole, PortalRoleAndSubordinates, AllCspUsers, AllPrmUsers, PartnerUsers, and CustomerPortalUser. |

#### See Also

-   [Edit folder.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_folder_json.htm "The folder.json file describes the featuredAssets for the application.")

## Related Topics

- Edit folder.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_folder_json.htm)
