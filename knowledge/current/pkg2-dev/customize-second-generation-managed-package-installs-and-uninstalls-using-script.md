---
title: "Customize Second-Generation Managed Package Installs and Uninstalls Using Scripts"
domain: pkg2-dev
topic: customize-second-generation-managed-package-installs-and-uninstalls-using-script
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.037Z
estimatedTokens: 415
keywords: [Customize, Second-Generation, Managed, Package, Installs, Uninstalls, Scripts, 2GP, install, upgrade, specifying, Apex, post, script, run]
---

# Customize Second-Generation Managed Package Installs and Uninstalls Using Scripts

> Customize a second-generation managed package (managed 2GP) install or upgrade by
    specifying an Apex post install script to run automatically after a subscriber installs or
    upgrades a managed 2GP package. You can also specify an Apex uninstall script to run
    automatically when a subscriber uninstalls a managed 2GP package.

# Customize Second-Generation Managed Package Installs and Uninstalls Using Scripts

Customize a second-generation managed package (managed 2GP) install or upgrade by specifying an Apex post install script to run automatically after a subscriber installs or upgrades a managed 2GP package. You can also specify an Apex uninstall script to run automatically when a subscriber uninstalls a managed 2GP package.

For more information, see [Run Apex on Package Install/Upgrade](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/apex_post_install_script.htm "HTML (New Window)") and [Run Apex on Package Uninstall](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/apex_uninstall_script.htm "HTML (New Window)").

Specify post install and uninstall scripts in the sfdx-project.json file.

```

```

You can also use the \--post-install-script and the \--uninstall-script Salesforce CLI parameters with the sf package version create command. The CLI parameters override the scripts specified in the sfdx-project.json file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Include the Apex classes for your post-install and uninstall scripts with the metadata in your package.

You can designate an active Dev Hub org user to receive email notifications for Apex gacks, and install, upgrade, or uninstall failures associated with your packages. In Salesforce CLI run sf package create --error-notification-username me@devhub.org or sf package update --error-notification-username me@devhub.org. In Tooling API, use the PackageErrorUsername field on the Package2 object.

## Code Examples

```
"packageDirectories": [
      {
         "path": "expenser-schema",
         "default": true,
         "package": "Expense Schema",
         "versionName": ""ver 0.3.2"",
         "versionNumber": "0.3.2.NEXT",
         "postInstallScript": "PostInstallScript",
         "uninstallScript": "UninstallScript",
         "postInstallUrl": "https://expenser.com/post-install-instructions.html",
         "releaseNotesUrl": "https://expenser.com/winter-2020-release-notes.html"
        },
        ],
       {
         "namespace": "db_exp_manager",
         "sfdcLoginUrl": "https://login.salesforce.com",
         "sourceApiVersion": "47.0",
         "packageAliases": {
             "Expenser Schema": "0HoB00000004CzHKAU",
             "Expenser Schema@0.1.0-1": "04tB0000000719qIAA"
          }
```
