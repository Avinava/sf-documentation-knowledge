---
title: "Use the Salesforce CLI to Retrieve the Template Files"
domain: bi-dev-guide-wave-templates
topic: use-the-salesforce-cli-to-retrieve-the-template-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.532Z
estimatedTokens: 322
keywords: [Salesforce, CLI, Retrieve, Template, Files, Pull, metadata, scratch, org, local, workspace, command, project, start]
---

# Use the Salesforce CLI to Retrieve the Template Files

> Pull the template metadata from the scratch org to your local workspace using the
  Salesforce CLI command sf project retrieve start.

# Use the Salesforce CLI to Retrieve the Template Files

Pull the template metadata from the scratch org to your local workspace using the Salesforce CLI command sf project retrieve start.

The command stores the template files on your system under the folder force-app\\main\\default\\waveTemplates\\MyNewTemplate

Access them locally on your file system for further development using the IDE of your choice.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

If you created your template in CRM Analytics Studio, use the CLI to log in to your org and then use the sf project retrieve start --metadata "WaveTemplateBundle:MyTemplate" CLI command to retrieve your files for editing. For information on setting up and using the CLI for template development, see [Prerequisites](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_prerequisites.htm "Take care of these tasks before creating CRM Analytics templates.").

#### See Also

-   [Salesforce CLI Command Reference: project retrieve start](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_retrieve_start_unified)

## Related Topics

- Prerequisites (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_prerequisites.htm)
