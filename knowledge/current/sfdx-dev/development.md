---
title: "Development"
domain: sfdx-dev
topic: development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.207Z
estimatedTokens: 1477
keywords: [Development, import, test, data, you’ve, completed, process, setting, project, Now, you’re, ready, start, Source, Files]
---

# Development

> After you import some test data, you’ve completed the process of setting up your project.
    Now, you’re ready to start the development process.

# Development

After you import some test data, you’ve completed the process of setting up your project. Now, you’re ready to start the development process.

## Create Source Files from the CLI

To add source files from the CLI, make sure that you’re working in an appropriate directory. For example, if your package directory is called force-app, create Apex classes in force-app/main/default/classes. You can organize your source as you want underneath each package directory except for documents, custom objects, and custom object translations.

As of API version 45.0, you can build Lightning components using two programming models: Lightning Web Components and Aura Components. To organize your components’ source files, your Aura components must be in the aura directory. Your Lightning web components must be in the lwc directory.

Execute one of these commands.

-   apex generate class
-   apex generate trigger
-   cmdt generate object
-   cmdt generate field
-   cmdt generate record
-   cmdt generate records
-   cmdt generate fromorg
-   lightning generate app
-   lightning generate component
-   lightning generate event
-   lightning generate interface
-   lightning generate test
-   schema generate sobject
-   schema generate field
-   schema generate platformevent
-   schema generate tab
-   static-resource generate
-   visualforce generate component
-   visualforce generate page

Many of the commands have these two helpful optional flags:

| Flag | Description |
| --- | --- |
| -d, --output-dir | The directory for saving the created files. If you don’t indicate a directory, your source is added to the current folder. To add the source to an existing directory, indicate the absolute or relative path. If you don’t indicate an absolute or a relative path and the directory doesn’t exist, Salesforce CLI attempts to create it for you. |
| -t, --template | Template used for the file creation. |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If you want to know more information about a command, run it with the \--help flag. For example, sf apex generate class --help.

## Edit Source Files

Use your favorite code editor to edit Apex classes, Visualforce pages and components, Lightning web components, and Aura components in your project. You can also make edits in the Setup UI of your org and then use project retrieve start to retrieve those changes to your project. For Lightning pages (FlexiPage files) that are already in your org, use the shortcut to open Lightning App Builder in a scratch org from your default browser. Lightning Pages are stored in the flexipages directory.

To edit a FlexiPage in your default browser—for example, to edit the Property\_Record\_Page source—execute this command from the flexipages directory.

```

```

If you want to generate a URL that loads the .flexipage-meta.xml file in Lightning App Builder but doesn’t launch your browser, use the \--url-only | -r flag.

```

```

-   **[Develop Against Any Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_any_org.htm)**
    After developing against scratch or sandbox orgs that have source tracking enabled, you eventually test and validate your changes in a non-source-tracked org.
-   **[Assign a Permission Set](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_assign_permset.htm)**
    After creating your scratch org and deploying the source, you must sometimes give your users access to your application, especially if your app contains custom objects.
-   **[Create Lightning Apps and Aura Components](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lightning.htm)**
    You can use Salesforce CLI to create Lightning apps and Aura components in your local Salesforce DX project. The generated files live in an aura directory in a package directory of your project.
-   **[Create Lightning Web Components](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lwc.htm)**
    You can use Salesforce CLI to create Lightning web components in your local Salesforce DX project. The generated files live in a lwc directory in a package directory of your project.
-   **[Create an Apex Class](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_apex.htm)**
    You can use Salesforce CLI to create Apex classes in your local Salesforce DX project. The generated class files live in a classes directory in a package directory of your project.
-   **[Create an Apex Trigger](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_trigger.htm)**
    Use Apex triggers to perform custom actions before or after a change to a Salesforce record, such as an insertion, update, or deletion. You can use Salesforce CLI to create Apex triggers in your local Salesforce DX project. The generated files live in a triggers directory in a package directory of your project.
-   **[Create a Custom Object](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_sobject.htm)**
    You can use Salesforce CLI to generate the metadata files for new custom objects in your local Salesforce DX project.
-   **[Execute Anonymous Apex](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_apex_run_anon.htm)**
    You can execute an anonymous block of Apex code in an org with the apex run Salesforce CLI command.
-   **[Run Apex Tests](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm)**
    When you’re ready to test changes to your source code, you can run Apex tests in an org using Salesforce CLI on the command line. You can also run Apex tests from Salesforce Extensions for VS Code or from within third-party continuous integration tools, such as Jenkins or CircleCI.

#### See Also

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_unified.htm "Salesforce CLI Command Reference - HTML (New Window)")

## Code Examples

```
sf org open --source-file Property_Record_Page.flexipage-meta.xml
```

```
sf org open --source-file Property_Record_Page.flexipage-meta.xml --url-only
```

## Related Topics

- Develop Against Any Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_any_org.htm)
- Assign a Permission Set (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_assign_permset.htm)
- Create Lightning Apps and Aura Components (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lightning.htm)
- Create Lightning Web Components (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lwc.htm)
- Create an Apex Class (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_apex.htm)
- Create an Apex Trigger (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_trigger.htm)
- Create a Custom Object (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_sobject.htm)
- Execute Anonymous Apex (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_apex_run_anon.htm)
- Run Apex Tests (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm)
