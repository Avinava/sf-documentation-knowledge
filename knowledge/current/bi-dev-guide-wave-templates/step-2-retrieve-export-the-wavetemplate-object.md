---
title: "Step 2: Retrieve (Export) the WaveTemplate Object"
domain: bi-dev-guide-wave-templates
topic: step-2-retrieve-export-the-wavetemplate-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.617Z
estimatedTokens: 482
keywords: [Step, Retrieve, Export, WaveTemplate, CRM, Analytics, templates, different, any, metadata, Visualforce, pages, Apex, classes, JSON]
---

# Step 2: Retrieve (Export) the WaveTemplate Object

> CRM Analytics templates are no different than any other metadata (such as Visualforce
  pages and Apex classes). You can retrieve the WaveTemplate
  object and its JSON files for editing using CLI or Microsoft Visual Studio (VS) Code. Then store
  them in a source code management system, and work with them using the development environment of
  your choice.

# Step 2: Retrieve (Export) the WaveTemplate Object

CRM Analytics templates are no different than any other metadata (such as Visualforce pages and Apex classes). You can retrieve the WaveTemplate object and its JSON files for editing using CLI or Microsoft Visual Studio (VS) Code. Then store them in a source code management system, and work with them using the development environment of your choice.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Performing this step overwrites your template object folder contents. If you’ve edited JSON files (such as rules.json), make sure you first push those changes back to the development org as described in [Step 4: Deploy the WaveTemplate Object](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_deploy_object.htm "After editing its JSON files, deploy the template object back to the development org to see the results of your work and for testing.").

-   **[Use the Salesforce CLI to Retrieve the Template Files](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_export_using_cli.htm)**
    Pull the template metadata from the scratch org to your local workspace using the Salesforce CLI command sf project retrieve start.
-   **[Use Visual Studio Code to Retrieve the Template Files](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_export_using_vscode.htm)**
    Pull the template metadata from the scratch org to your local workspace using the Command Palette **Pull Source from Default Scratch Org**. Use VS Code to view and edit the template files.
-   **[Template Folder Structure](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_folder_structure.htm)**
    Decompressing the exported template file exposes the following folder structure.

## Related Topics

- Step 4: Deploy the WaveTemplate Object (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_deploy_object.htm)
- Use the Salesforce CLI to Retrieve the Template Files (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_export_using_cli.htm)
- Use Visual Studio Code to Retrieve the Template Files (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_export_using_vscode.htm)
- Template Folder Structure (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_folder_structure.htm)
