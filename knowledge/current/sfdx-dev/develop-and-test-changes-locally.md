---
title: "Develop and Test Changes Locally"
domain: sfdx-dev
topic: develop-and-test-changes-locally
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.096Z
estimatedTokens: 594
keywords: [Develop, Test, Changes, Locally, source, deploying, retrieving, Developer, sandbox]
---

# Develop and Test Changes Locally

> Develop changes in source format, deploying to and retrieving from your Developer
  sandbox.

# Develop and Test Changes Locally

Develop changes in source format, deploying to and retrieving from your Developer sandbox.

These steps provide the high-level work flow.

1.  Create a DX project.

    A DX project has a specific structure and configuration files that Salesforce DX tooling requires. See [Create a Salesforce DX Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm "A Salesforce DX project has a specific structure and a configuration file that identifies the directory as a Salesforce DX project.").

2.  Create a source control repository or use an existing one.

    If you’re using an existing repo, be sure it has the required DX configuration files. See [Salesforce DX Project Structure and Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm "A Salesforce DX project has a specific project structure and source format. Source format uses a different set of files and file extensions from what Metadata API uses. When you retrieve metadata from the org with the project retrieve start command, Salesforce CLI stores it in source format in your project. When you deploy metadata, Salesforce CLI converts it into the format that Metadata API requires.").

3.  Authorize the Developer sandbox.

    See [Authorize an Org Using a Browser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm "Authorize an org with a browser by running a CLI command and entering your credentials in the browser that automatically opens. That’s it!").

4.  Perform development tasks in your developer sandbox.
5.  Retrieve the changes from the developer sandbox.

    If your sandbox is source tracked, changes are automatically identified. To retrieve just the changed metadata:

    ```

    ```

    If your sandbox isn’t source tracked, or want to retrieve metadata that hasn’t changed, or you want to retrieve many changes, you can use a manifest (package.xml).

    ```

    ```

    Run sf project retrieve start --help for all command options with examples.

6.  Commit the changes to the source control repository.

Next: Deploy all changes the team has made to the first testing environment to test those changes. See Salesforce CLI Reference: [deploy Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_deploy_commands_unified.htm).

## Code Examples

```
sf project retrieve start --manifest path/to/package.xml
```

## Related Topics

- Create a Salesforce DX Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm)
- Salesforce DX Project Structure and Source Format (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)
- Authorize an Org Using a Browser (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm)
