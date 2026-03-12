---
title: "Package the External Client App for Canvas"
domain: platform-connect
topic: package-the-external-client-app-for-canvas
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.583Z
estimatedTokens: 721
keywords: [Package, External, Client, App, Canvas, created, tested, Previewer, deployed, Heroku, you’re, ready, distribute]
---

# Package the External Client App for Canvas

> After you created the canvas app, tested it in the Canvas App Previewer, and deployed it
    to Heroku, you’re ready to package and distribute it.

# Package the External Client App for Canvas

After you created the canvas app, tested it in the Canvas App Previewer, and deployed it to Heroku, you’re ready to package and distribute it.

Package an external client app for your canvas integration by creating a second-generation managed package (managed 2GP) using Salesforce CLI commands from a Salesforce DX project.

1.  [Configure default settings for a packaged external client.](https://help.salesforce.com/s/articleView?id=xcloud.configure_package_defaults_for_an_external_client_app.htm&language=en_US) The default values display in the policies tab on a distributed external client app and can be edited by admins.
2.  [Enable a Dev Hub org with a namespace prefix.](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm) The Dev hub org becomes the owner of your managed 2GP. A namespace is assigned to the package at the time that it’s created, and can’t be changed.
3.  [Configure a Salesforce DX project for external client apps.](https://help.salesforce.com/s/articleView?id=xcloud.configure_sfdx_for_external_client_apps.htm&language=en_US) With a Salesforce DX project, you use command-line interface (CLI) commands to work with your Salesforce org.
4.  [Create a 2GP managed package using CLI commands.](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev_2gp_developing_2gp_packages.htm) You can also create versions of the package to manage your changes and track what’s different each time you release or deploy.
5.  [Install a managed 2GP in a scratch org to test the package.](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_upgrade.htm) You can install or uninstall a managed 2GP using a Salesforce CLI command, or from the Setup page.
6.  [Distribute and release the managed 2GP.](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm) A new managed 2GP version is marked as beta when you create it. You can create multiple versions before creating a version that’s ready to be released and distributed.

You can configure the canvas settings before or after creating the external client app. After the canvas setting is created, it can only be disabled or enabled. The canvas setting can’t be deleted from Setup. However, you can delete the setting from the package.

#### See Also

-   [Package an External Client App](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&language=en_US "Package an External Client App - HTML (New Window)")

-   [Workflow for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_workflow.htm "Workflow for Second-Generation Managed Packages - HTML (New Window)")
