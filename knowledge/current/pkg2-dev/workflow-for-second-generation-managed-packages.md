---
title: "Workflow for Second-Generation Managed Packages"
domain: pkg2-dev
topic: workflow-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.170Z
estimatedTokens: 1439
keywords: [Workflow, Second-Generation, Managed, Packages, install, package, 2GP, directly, command, line]
---

# Workflow for Second-Generation Managed Packages

> You can create and install a second-generation managed package (managed 2GP) directly
        from the command line.

# Workflow for Second-Generation Managed Packages

You can create and install a second-generation managed package (managed 2GP) directly from the command line.

Review and complete the steps in [Before You Create Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm "When you use second-generation managed packaging, to be sure that you set it up correctly, verify the following.") before starting this workflow.

The basic managed 2GP workflow includes these steps. See specific topics for details about each step.

1.  Create a DX project.

    ```

    ```

2.  Authorize the Dev Hub org.

    ```

    ```

    When you perform this step, include the \---set-default-dev-hub option. You can then omit the Dev Hub username when running subsequent Salesforce CLI commands.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pkg2_dev)

    #### Tip

    If you define an alias for each org you work with, it’s easy to switch between different orgs from the command line. You can authorize different orgs as you iterate through the package development cycle.

3.  Create a scratch org and develop the app you want to package. You can use VS Code and the Setup UI in the scratch org to build and retrieve the pieces you want to include in your package. Navigate to the expenser-app directory, and then run this command.

    ```

    ```

4.  Verify that all package components are in the project directory where you want to create a package. If you’re trying out the exact steps and commands in this workflow, you must add at least one piece of metadata before you continue to the next step.
5.  In the sfdx-project.json file, specify a namespace using the namespace attribute. For example: “namespace”: “exp-mgr”

    If you specified a namespace when you created a Salesforce DX project in step one, you can skip this step. Before adding a namespace, make sure that you’ve linked the [namespace](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm "With second-generation managed packaging (managed 2GP), you can share a single namespace with multiple packages. Since sharing of code is much easier if your package shares the same namespace, we recommend that you use a single namespace for all of your managed 2GP packages.") to your Dev Hub org.

6.  From the Salesforce DX project directory, create the package.

    ```

    ```

    Your new managed 2GP package has the namespace you specified in the sfdx-project.json file.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg2_dev)

    #### Important

    After you create a package, you can’t change or add a namespace, or change the Dev Hub the package is associated with.

7.  Review your sfdx-project.json file. The CLI automatically updates the project file to include the package directory and creates an alias based on the package name.

    ```

    ```

    Notice the placeholder values for versionName and versionNumber. You can update these values, or indicate base packages that this package depends on. Your project file displays the namespace you created.

    Specify the features and org settings required for the metadata in your package using an external .json file, such as the scratch org definition file. You can specify using the \--definition-file flag with the sf package version create command, or list the definition file in your sfdx-project.json file. See: [Project Configuration File for a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm "The project configuration file is a blueprint for your project. The settings in the file create an outline of your managed 2GP package and determine the package attributes and package contents.")

8.  Create a package version. This example assumes the package metadata is in the force-app directory.

    ```

    ```

9.  Install and test the package version in a scratch org. Use a different scratch org from the one you used in step three.

    ```

    ```

10.  After the package is installed, open the scratch org to view the package.

     ```

     ```


Package versions are beta until you promote them to a managed-released state. See: [Release a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm "Each new second-generation managed package version is marked as beta when created. As you develop your package, you may create several package versions before you create a version that is ready to be released and distributed. Only released package versions can be listed on AppExchange and installed in customer orgs.").

#### See Also

-   [Before You Create Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm "Before You Create Second-Generation Managed Packages - HTML (New Window)")

-   [Create and Register Your Namespace for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm "Create and Register Your Namespace for Second-Generation Managed Packages - HTML (New Window)")

-   [Project Configuration File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm "Project Configuration File for a Second-Generation Managed Package - HTML (New Window)")

-   [Release a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm "Release a Second-Generation Managed Package - HTML (New Window)")

## Code Examples

```
sf project generate --output-dir expense-manager-workspace --name expenser-app
```

```
sf org login web --set-default-dev-hub
```

```
sf org create scratch --definition-file config/project-scratch-def.json
```

```
sf package create --name "Expense Manager" --path force-app --package-type Managed
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
   "namespace": "exp-mgr",
   "sfdcLoginUrl": "https://login.salesforce.com",
   "sourceApiVersion": "51.0",
   "packageAliases": {
      "Expense Manager": "0Hoxxx"
   }
}
```

## Related Topics

- Before You Create Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm)
- namespace (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm)
- Project Configuration File for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm)
- Release a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm)
