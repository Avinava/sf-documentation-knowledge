---
title: "Prerequisites"
domain: bi-dev-guide-wave-templates
topic: prerequisites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.599Z
estimatedTokens: 1255
namespace: Set
keywords: [Prerequisites, Take, care, tasks, creating, CRM, Analytics, templates]
---

# Prerequisites

> Take care of these tasks before creating CRM Analytics templates.

**Namespace:** `Set`

# Prerequisites

Take care of these tasks before creating CRM Analytics templates.

Licenses and Permission Sets

Make sure you and members of your team each have a CRM Analytics platform license--either CRM Analytics Growth or CRM Analytics Plus.

Assign the following permission sets to yourself and members of your team:

-   For CRM Analytics Growth licenses, CRM Analytics Admin
-   For CRM Analytics Plus licenses, CRM Analytics Plus Admin

Org preferences

Set your Org Preferences to enable CRM Analytics templates. In the Admin Setup page, under Settings, select Enable CRM Analytics Templates. You must enable this preference to create CRM Analytics templates.

Developer Edition Org Namespace

Set up a namespace for your development org to enable the use of Managed Packages. Set up your namespace before creating any CRM Analytics assets.

CLI Developers

To use CLI for template development, enable the Dev Hub, which lets you create and manage scratch orgs. Also, install the Analytics CLI Plugin.

1.  Enable Dev Hub in your org. See [Enable Dev Hub in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm).
2.  Install the Salesforce Command-Line Interface (CLI). See [Install the Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm).
3.  Create a Salesforce DX project. See [Create a Salesforce DX Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm).
4.  Create a scratch org. See [Create Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm).
5.  Install the CLI Analytics plugin by running the command sf plugins install @salesforce/analytics.
6.  Verify the installation by listing the available analytics commands. Run the command sf analytics --help.

For a reference to all available Analytics CLI commands, see the [Salesforce Analytics CLI Plugin Command Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference.htm).

Visual Studio Code Developers

Use VS Code as your template IDE for template customization. VS Code provides the CLI commands from the Command Palette and content assist and validation for the template json files. For more information, see [Use Visual Studio (VS) Code and the Salesforce Extensions for CRM Analytics Template Development](https://help.salesforce.com/s/articleView?id=analytics.bi_templatesdev_vs_code_intro.htm&type=5&language=en_US).

CRM Analytics REST API access

Refer to the documentation on [Authentication to the CRM Analytics REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_authentication.htm) to access and use the API.

Source app and its ID

Typically, you build an app and it becomes a source app when you create a template from it. You can also use a template to create a source app. However you create the app, note the 18-character app ID in the URL. It’s shown here in boldface:https://salesforce.com/analytics/wave/wave.apexp?tsid=2x0x0002xxx#application/00l0b000002AynIAAS. The ID becomes the folderId you use as you work with the WaveTemplate object.

Create a Source App From Scratch

Use CRM Analytics Studio to build an app with lenses, dashboards, datasets, recipes, and the default Salesforce dataflow.

Create a Source App From a Template

1.  Create an app from the template using the wizard. Use the Analytics CLI to create the app if you must set variables that the wizard doesn't expose. In the CLI, use an analytics app create command.
2.  Next, turn the app into the source app by coupling it with the template. With the Analytics CLI, use analytics template update with the folderSourceID. See [Step 8: Update an Existing Template.](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_update_template.htm "Update a template after changing the source app’s dashboards, lenses, and datasets in CRM Analytics Studio.")

Now, the new app becomes the source app in the org. Any updates made to the folder assets in the new source app are tied to the template.

Org Data Considerations

Creating a template from your app isn’t a way to move data from one org to another. Datasets are templatized with header references. For datasets built by recipes and dataflows, they’re populated with data from the user org when the app is created. For external datasets created by CSV uploads, only minimal data is present when a new app is created from the template. For example, if the source app contains a dataset created with a CSV upload, the template is created with a sample CSV that is only one dataset part of the original CSV. When a user creates an app from the template, they must upload their own CSV or a CSV provided to them to update and complete the dataset.

## Related Topics

- Step 8: Update an Existing Template. (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_update_template.htm)
