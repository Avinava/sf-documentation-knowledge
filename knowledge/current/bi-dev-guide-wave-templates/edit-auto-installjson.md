---
title: "Edit auto-install.json"
domain: bi-dev-guide-wave-templates
topic: edit-auto-installjson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.493Z
estimatedTokens: 504
keywords: [Edit, auto-install.json, configures, template, auto-install, framework, Always, file, plan, design, auto-installation, via, managed, package]
---

# Edit auto-install.json

> auto-install.json configures the template for the
    auto-install framework. Always create this optional file if you plan to design your template for
    auto-installation via a managed package with an auto-install request.

# Edit auto-install.json

auto-install.json configures the template for the auto-install framework. Always create this optional file if you plan to design your template for auto-installation via a managed package with an auto-install request.

Template developers use this file to specify the configuration of the auto-install framework hook and the app installation. When this file is created, add the autoInstallDefinition attribute to the template-info.json file.

## Example

```

```

The example creates an auto-install hook to install the template via a managed package, naming the auto-install request Hook for the Auto-Install Template. The supported auto-install hooks are PackageInstall only.

The appConfiguration specifies that the installed app will:

-   not fail creation if an app or assets exist with the same developer name
-   be automatically shared with appropriately licensed users
-   be automatically shared with the user that created the auto-install request
-   be deleted if app creation fails for any reason; for create requests only, it doesn’t apply to app upgrades
-   be created with the template variable values in the values map

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_wave_templates)

#### Important

Because users don’t use the CRM Analytics Studio wizard to create the app, an app name attribute is required. To specify the app name, add a name attribute in the template’s folder.json file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Templates packaged for automatic install can’t be dependent templates. The creation of auto-install requests can’t guarantee dependent templates are installed in the correct order.

#### See Also

-   [auto-install.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_auto_install_json_attributes.htm "The auto-install.json file attributes are:")

## Code Examples

```
{
  "hooks": [
    {
      "type" : "PackageInstall",
      "requestName" : "Hook for the Auto-Install Template"
    }
  ],
  "configuration" : {
    "appConfiguration" :{
      "failOnDuplicateNames" : false,
      "autoShareWithLicensedUsers" : true,
      "autoShareWithOriginator" : true,
      "deleteAppOnConstructionFailure" : true,
      "values" : {
        "value1" : "testString",
        "value2" : false
      }
    }
  }
}
```

## Related Topics

- auto-install.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_auto_install_json_attributes.htm)
