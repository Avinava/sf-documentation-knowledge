---
title: "Step 8: Update an Existing Template"
domain: bi-dev-guide-wave-templates
topic: step-8-update-an-existing-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.701Z
estimatedTokens: 1012
keywords: [Step, Template, changing, source, app’s, dashboards, lenses, datasets, CRM, Analytics, Studio, Updating, Asset, Version]
---

# Step 8: Update an Existing Template

> Update a template after changing the source app’s dashboards, lenses, and datasets in
    CRM Analytics Studio.

# Step 8: Update an Existing Template

Update a template after changing the source app’s dashboards, lenses, and datasets in CRM Analytics Studio.

-   Using Analytics Studio. Update the template. For more information, see [Managing Your Templates](https://help.salesforce.com/s/articleView?id=analytics.bi_template_manage.htm&type=5&language=en_US).
-   Using Analytics CLI. Use the analytics template update command.
-   Using VS Code. Use the **Update Analytics Template** command.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_wave_templates)

#### Important

You update a template only after changing the source app in Analytics Studio. When you edit template JSON files in your IDE, you deploy those changes to the template using the CLI or VS Code push command. See Step 4, Deploy the WaveTemplate Object.

When you update the template, it’s saved to your development org with a new version. For example, the version 1.0 becomes 2.0. You can then update the existing managed package for the template with the new version and deploy it. Admins managing standard apps based on the previous version of the template are prompted to upgrade their apps.

Upgraded Apps From New Versions Overwrite Customizations to Downstream Apps

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Overwriting customizations applies to standard apps only. Embedded apps can’t be customized by users.

If the admin upgrades the app from a new template version, any customizations made to downstream apps are overwritten. To preserve customizations, we advise admins to save customized app assets before upgrading so they can copy the customizations into the new version.

Admins can elect to not upgrade from a new version and preserve the original downstream app with its customizations. To help admins determine the value of upgrading, provide details about the new template version in the releaseNotes.html file referred to by template-info.json.

## Updating the Asset Version

When a template is created from an app, each asset is represented as a JSON file, generated at the current API version. The API version is stored as the assetVersion in template-info.json. When the template is installed in an org and used, in each subsequent release the Analytics assets are created using the template assetVersion, not the current API version. Updating the assetVersion allows the template to provide the latest features for the assets in the app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Updating a template without specifying the assetVersion downgrades assets to the assetVersion stored in template-info.json, even if the asset was created or updated at the current API version. Recipes are the only assets that are always created and updated with the current API version.

To update the API version of the template assets, the assetVersion must be specified on the template update call via the CLI. The assetVersion takes an Integer that is a valid Salesforce API version.

For the CLI, use the \-v parameter to specify the assetVersion. For example, analytics:template:update -v 54.0.

Specifying the assetVersion on a template update impacts all the template assets, including dashboards, datasets, and dataflows. Recipe assets are always created with the current API version, regardless of the assetVersion.

We recommend template developers complete these steps when updating the assetVersion.

-   Retain a copy of the template before using the update call, in case template assets fail to update as expected.
-   Test the template update by creating apps in a test org. Verify that the updated assets work and have the new features for the version.
-   If there are template rules, it’s possible the JSON path attributes must be corrected to reflect any changes made by the assetVersion update. Test that all rules and any conditionals still work.
