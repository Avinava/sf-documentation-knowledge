---
title: "Edit folder.json"
domain: bi-dev-guide-wave-templates
topic: edit-folderjson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.495Z
estimatedTokens: 356
keywords: [Edit, folder.json, file, featuredAssets, application]
---

# Edit folder.json

> The folder.json file describes the featuredAssets for the application.

# Edit folder.json

The folder.json file describes the featuredAssets for the application.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

This file is required for embedded apps because it specifies the name and label for the templated app along with setting sharing rules for the app. The embedded app can’t be shared with other users and groups using CRM Analytics Studio.

Template developers can use it to specify the order of the dashboards in the application instead of accepting the default behavior of alphabetizing by dashboard label.

## Example

```

```

The previous example tells the application to display the "ZDashboard" first, as the most prominent dashboard, rather than the default of A, B, then Z. If a dashboard has a conditional attribute in template-info.json that resolves so that the dashboard isn’t added at app creation time, a rule must be added to the template-to-app-rules.json to remove the dashboard from the folder.json file. This rule removes that dashboard entry from the featuredAssets list at runtime and prevents app creation from failing with a "Dashboard not found" error. The rule looks like this:

```

```

#### See Also

-   [folder.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_folder_json_attributes.htm "The folder.json file attributes are:")

## Code Examples

```
{
    "name": "My Templated App",
    "featuredAssets": {
        "default": {
            "assets": [
                {"id": "${App.Dashboards['ZDashboard'].Id}"},
                {"id": "${App.Dashboards['BDashboard'].Id}"},
                {"id": "${App.Dashboards['ADashboard'].Id}"}
            ]
        }
    },
    "shares": [
        {
            "shareType": "Organization",
            "accessType": "View"
        }
    ]
}
```

```
{
    "name": "RemoveDashboardZFromFolderJson",
    "condition": "${!Variables.HasDashboardZ}",
    "appliesTo": [
        {
            "type": "folder",
            "name": "*"
        }
    ],
    "actions": [
        {
            "action": "delete",
            "description": "Remove conditional dashboard",
            "path": "$.featuredAssets.default.assets..[?(@.id=~ /^.DashboardZ.$/i)]"
        }
    ]
}
```

## Related Topics

- folder.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_folder_json_attributes.htm)
