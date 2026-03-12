---
title: "Create a Salesforce DX Project from Existing Source"
domain: sfdx-dev
topic: create-a-salesforce-dx-project-from-existing-source
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.940Z
estimatedTokens: 1433
keywords: [Salesforce, Project, Source, you’re, developer, partner, ISV, likely, managed, package, packaging, org, application, sandbox, production]
---

# Create a Salesforce DX Project from Existing Source

> If you’re a Salesforce developer, partner, or ISV, you likely have existing source in a
  managed package in your packaging org or application source in your sandbox or production org.
  Before you begin using Salesforce DX, retrieve the existing source into a Salesforce DX
  project.

# Create a Salesforce DX Project from Existing Source

If you’re a Salesforce developer, partner, or ISV, you likely have existing source in a managed package in your packaging org or application source in your sandbox or production org. Before you begin using Salesforce DX, retrieve the existing source into a Salesforce DX project.

1.  Create a Salesforce DX project.

    ```

    ```

2.  Change to the project directory.

    ```

    ```

3.  Retrieve your source by running the project retrieve start command. The location and format of your current source determine the command flags you must use.

    | Format and Location of Current Source | Command To Retrieve Your Source |
    | --- | --- |
    | You’re a partner who has your source already defined as a managed package in your packaging org. | sf project retrieve start --package-name <package-name> --target-org <sourceOrg-username-or-alias>The --target-org flag specifies the username or alias for the source org (such as a packaging org) from which you’re retrieving the source. The --package-name flag specifies the package name; if the name contains a space, enclose it in double quotes.By default, the command creates a package directory, with the same name as your package, in the DX project directory. The command then retrieves the source from your package and organizes it in the new directory using the standard DX source format structure. Use the --output-dir to specify a different directory; the command creates the directory if it doesn’t exist. |
    | You have a manifest file, typically called package.xml, that defines your unpackaged source in a sandbox or production org. | sf project retrieve start --manifest <manifest-file> --target-org <sourceOrg-username-or-alias>The --target-org flag specifies the username or alias for the org (such as a sandbox or production) from which you’re retrieving the source. The --manifest flag indicates the path to the manifest file, typically called package.xml.By default, the command retrieves the source into the existing force-app package directory of your DX project Use the --output-dir to specify a different directory; the command creates the directory if it doesn’t exist. |

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

    #### Tip

    If you already have a repo that follows the directory structure created from a Metadata API retrieve, then your source files in the repo are in metadata format. You can convert these files into source format and include them in your Salesforce DX project. See [Convert Files in Metadata Format to Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm "If you already have a repo in which you’ve retrieved metadata from an org using the Metadata API directly, the files are in metadata format. You can convert these files into source format and add them to your Salesforce DX project. You can then deploy and retrieve them to and from your org using CLI commands and use source tracking to track changes.") for details.

4.  If the retrieve created a package directory in your project, add it to your sfdx-project.json file.

Do you have source in a sandbox or production org, but you don’t have a manifest file (package.xml) for retrieving it to your project? Use the project generate manifest CLI command to create one. For example, this command generates a manifest from the metadata components in the org with the alias prod-org.

```

```

See the command help for more examples and information.

```

```

You can also refer to [Sample package.xml Manifest Files](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/manifest_samples.htm) in the Metadata API Developer Guide.

#### See Also

-   [Create a Salesforce DX Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm "A Salesforce DX project has a specific structure and a configuration file that identifies the directory as a Salesforce DX project.")

-   [Salesforce DX Project Structure and Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm "A Salesforce DX project has a specific project structure and source format. Source format uses a different set of files and file extensions from what Metadata API uses. When you retrieve metadata from the org with the project retrieve start command, Salesforce CLI stores it in source format in your project. When you deploy metadata, Salesforce CLI converts it into the format that Metadata API requires.")

-   [Salesforce DX Project Configuration](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")

-   [Convert Files in Metadata Format to Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm "If you already have a repo in which you’ve retrieved metadata from an org using the Metadata API directly, the files are in metadata format. You can convert these files into source format and add them to your Salesforce DX project. You can then deploy and retrieve them to and from your org using CLI commands and use source tracking to track changes.")

-   [*VS Code Command*: SFDX: Create Project, SFDX: Create Project with Manifest](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/create-project.html "VS Code Command: SFDX: Create Project, SFDX: Create Project with Manifest - HTML (New Window)")

## Code Examples

```
sf project generate --name MyProject
```

```
cd MyProject
```

```
sf project generate manifest --from-org prod-org
```

```
sf project generate manifest --help
```

## Related Topics

- Convert Files in Metadata Format to Source Format (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm)
- Create a Salesforce DX Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm)
- Salesforce DX Project Structure and Source Format (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)
- Salesforce DX Project Configuration (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
