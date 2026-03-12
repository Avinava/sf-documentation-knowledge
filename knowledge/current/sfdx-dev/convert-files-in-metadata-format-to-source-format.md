---
title: "Convert Files in Metadata Format to Source Format"
domain: sfdx-dev
topic: convert-files-in-metadata-format-to-source-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.935Z
estimatedTokens: 441
keywords: [Convert, Files, Metadata, Source, already, repo, you’ve, retrieved, org, API, directly, add, Salesforce, project, deploy]
---

# Convert Files in Metadata Format to Source Format

> If you already have a repo in which you’ve retrieved metadata from an org using the
  Metadata API directly, the files are in metadata format. You can convert these files into source
  format and add them to your Salesforce DX project. You can then deploy and retrieve them to and
  from your org using CLI commands and use source tracking to track changes.

# Convert Files in Metadata Format to Source Format

If you already have a repo in which you’ve retrieved metadata from an org using the Metadata API directly, the files are in metadata format. You can convert these files into source format and add them to your Salesforce DX project. You can then deploy and retrieve them to and from your org using CLI commands and use source tracking to track changes.

The convert command ignores all files that start with a “dot,” such as .DS\_Store. To exclude more files from the convert process, add a .forceignore file.

1.  Change to your Salesforce DX project directory.
2.  Convert the files from metadata format to source format with the project convert mdapi command. Let’s say your metadata-format files are in a directory called /Users/testing/mdapi\_project.

    ```

    ```

    The \--root-dir flag is the name of the directory that contains the metadata format files.

    The converted source is stored in the default package directory indicated in the sfdx-project.json file, typically named force-app. Use the \--output-dir flag to put the converted files in a different package directory; the command creates the directory if it doesn’t exist.

3.  If the convert created a package directory in your project, add it to your sfdx-project.json file.

#### See Also

-   [Salesforce DX Project Configuration](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")

## Code Examples

```
sf project convert mdapi --root-dir /Users/testing/mdapi_project
```

## Related Topics

- Salesforce DX Project Configuration (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
