---
title: "Workflow for Unlocked Packages"
domain: sfdx-dev
topic: workflow-for-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.901Z
estimatedTokens: 801
keywords: [Workflow, Unlocked, Packages, install, package, directly, Salesforce, command, line]
---

# Workflow for Unlocked Packages

> You can create and install an unlocked package directly from the Salesforce command
        line.

# Workflow for Unlocked Packages

You can create and install an unlocked package directly from the Salesforce command line.

Review and complete the steps in [Before You Create Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_before.htm "When you use unlocked packaging, to be sure that you set it up correctly, verify the following.") before starting this workflow.

The basic workflow includes these steps. See specific topics for details about each step.

1.  Create a DX project.

    ```

    ```

2.  Authorize the Dev Hub org, and create a scratch org.

    ```

    ```

    When you perform this step, include the \--set-default-dev-hub option. You can then omit the Dev Hub username when running subsequent Salesforce CLI commands.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

    #### Tip

    If you define an alias for each org you work with, it’s easy to switch between different orgs from the command line. You can authorize different orgs as you iterate through the package development cycle.

3.  Create a scratch org and develop the package. You can use VS Code and the Setup UI in the scratch org to build and retrieve the pieces you want to include in your package. Navigate to the expenser-app directory, and then run this command.

    ```

    ```

4.  Verify that all package components are in the project directory where you want to create a package.
5.  From the Salesforce DX project directory, create the package.

    ```

    ```

6.  Review your sfdx-project.json file. The CLI automatically updates the project file to include the package directory and creates an alias based on the package name.

    ```

    ```

    Notice the placeholder values for versionName and versionNumber.

    Specify the features and org settings required for the metadata in your package using an external .json file, such as the scratch org definition file. You can specify using the \--definition-file flag with the sf package version create command, or list the definition file in your sfdx-project.json file. See: [Project Configuration File for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_file.htm "The project configuration file is a blueprint for your project. The settings in the file create an outline of your package and determine the package attributes and package contents.")

7.  Create a package version. This example assumes the package metadata is in the force-app directory.

    ```

    ```

8.  Install and test the package version in a scratch org. Use a different scratch org from the one you used in step three.

    ```

    ```

9.  After the package is installed, open the scratch org to view the package.

    ```

    ```


Package versions are beta until you promote them to a managed-released state. See: [Release an Unlocked Package](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver_promote.htm "Each new package version is marked as beta when its created. As you develop your package, you may create several package versions before you create a version that is ready to be released and installed in production orgs.").

## Code Examples

```
sf project generate --output-dir expense-manager-workspace --name expenser-app
```

```
sf org login web --set-default-dev-hub --alias MyDevHub
```

```
sf org create scratch --definition-file config/project-scratch-def.json --alias MyTestOrg1 --duration-days 30
```

```
sf package create --name "Expense Manager" --path force-app 
--package-type Unlocked
```

```
{
   "packageDirectories": [
      {
         "path": "force-app",
         "default": true,
         "package": "Expense Manager",
         "versionName": "ver 0.1",
         "versionNumber": "0.1.0.NEXT"
      }
   ],
   "namespace": "",
   "sfdcLoginUrl": "https://login.salesforce.com",
   "sourceApiVersion": "59.0",
   "packageAliases": {
      "Expense Manager": "0Hoxxx"
   }
}
```

## Related Topics

- Before You Create Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_before.htm)
- Project Configuration File for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_file.htm)
- Release an Unlocked Package (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver_promote.htm)
