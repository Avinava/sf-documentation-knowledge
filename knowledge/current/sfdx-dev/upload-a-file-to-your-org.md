---
title: "Upload a File to Your Org"
domain: sfdx-dev
topic: upload-a-file-to-your-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.199Z
estimatedTokens: 420
keywords: [Upload, File, Org, data, CLI, command, local, uploaded, ContentDocument, standard, finishes, outputs, new, record, Salesforce]
---

# Upload a File to Your Org

> Use the data create file CLI command to upload a
    local file to your org. The file is uploaded to the ContentDocument standard object; when the
    command finishes it outputs the new record ID. In the Salesforce UI, the uploaded file is
    available from the Files tab. The command always creates a new file in the org; you can’t update
    an existing file. If you create a file with the name of an existing file, a new duplicate record
    is created.

# Upload a File to Your Org

Use the data create file CLI command to upload a local file to your org. The file is uploaded to the ContentDocument standard object; when the command finishes it outputs the new record ID. In the Salesforce UI, the uploaded file is available from the Files tab. The command always creates a new file in the org; you can’t update an existing file. If you create a file with the name of an existing file, a new duplicate record is created.

This simple example shows how to upload the file called astro.png to an org with the alias new-scratch-org:

```

```

By default, the Title field of the new ContentDocument record is the same as the name of the file (without the extension). In the example, the title is astro. Use the \--title flag to give it a new title:

```

```

By default, the uploaded file isn’t attached to a Salesforce record, such as an account or contact. If you know the ID of the record to which you want to attach the uploaded file, specify it with the \--parent-id flag. This example attaches the file to a contact because the ID starts with 003:

```

```

#### See Also

-   [*Salesforce CLI Command Reference*: data Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm "Salesforce CLI Command Reference: data Commands - HTML (New Window)")

-   [*Object Reference for the Salesforce Platform*: ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm "Object Reference for the Salesforce Platform: ContentDocument - HTML (New Window)")

## Code Examples

```
sf data create file --file astro.png --target-org new-scratch-org
```

```
sf data create file --file astro.png --title "Astro Running" --target-org new-scratch-org
```

```
sf data create file --file astro.png --parent-id 003O300000WLdtwIAD --title "Astro Running" --target-org new-scratch-org
```
