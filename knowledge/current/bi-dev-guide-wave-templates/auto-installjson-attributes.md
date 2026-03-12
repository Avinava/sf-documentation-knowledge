---
title: "auto-install.json Attributes"
domain: bi-dev-guide-wave-templates
topic: auto-installjson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.446Z
estimatedTokens: 478
keywords: [auto-install.json, Attributes, file]
---

# auto-install.json Attributes

> The auto-install.json file attributes are:

# auto-install.json Attributes

The auto-install.json file attributes are:

| Attribute | Required | Description |
| --- | --- | --- |
| hooks | No | Container for hook types. |
| hooks → type | Yes | The type of auto-install hook. Valid values are: PackageInstall. |
| hooks → requestName | No | The name for the auto-install request. |
| configuration → appConfiguration | No | The configuration to use for creating the app. |
| configuration → appConfiguration → autoShareWithLicensedUsers | No | Indicates whether the app is automatically shared with users that have the AnalyticsViewOnlyEmbeddedApp license (true) or not (false). The default value is false. |
| configuration → appConfiguration → autoShareWithOriginator | No | Indicates whether the app is automatically shared with the user who initiated the auto-install request (true) or not (false). The default value is true. |
| configuration → appConfiguration → deleteAppOnConstructionFailure | No | Indicates whether the app is deleted when the auto-install request fails due to a construction error (true) or not (false). The default value is false. |
| configuration → appConfiguration → failOnDuplicateName | No | Indicates whether the app creation fails when an existing app or asset exists with the same developer name (true) or not (false). The default value is false. |
| configuration → appConfiguration → values | No | A map of variable values to use when creating the app. The variable names must correspond to variables defined in the variables.json file |

#### See Also

-   [Edit auto-install.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_auto_install_json.htm "auto-install.json configures the template for the auto-install framework. Always create this optional file if you plan to design your template for auto-installation via a managed package with an auto-install request.")

## Related Topics

- Edit auto-install.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_auto_install_json.htm)
