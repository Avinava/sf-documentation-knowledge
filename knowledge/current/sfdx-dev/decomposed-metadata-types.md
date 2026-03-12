---
title: "Decomposed Metadata Types"
domain: sfdx-dev
topic: decomposed-metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.959Z
estimatedTokens: 3845
keywords: [Decomposed, Metadata, Decomposition, refers, splitting, often, large, XML, file, smaller, files, subtypes, result, referred, source]
---

# Decomposed Metadata Types

> Decomposition refers to splitting a single, often large, metadata XML file into smaller
        XML files based on its subtypes. The result is referred to as source format. By default, a
        Salesforce DX project always decomposes custom objects and custom object translations. You
        can also optionally specify that other metadata types, such as permission sets and custom
        labels, be decomposed.

# Decomposed Metadata Types

Decomposition refers to splitting a single, often large, metadata XML file into smaller XML files based on its subtypes. The result is referred to as source format. By default, a Salesforce DX project always decomposes custom objects and custom object translations. You can also optionally specify that other metadata types, such as permission sets and custom labels, be decomposed.

## Start Decomposing the Optional Metadata Types (Beta)

The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Decomposition of permission sets, custom labels, sharing rules, and workflows is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/?_ga=2.247987783.1372150065.1709219475-629000709.1639001992). Use of this pilot or beta service is at the Customer's sole discretion.

Before you begin, commit all your DX project source files to your version control system. Committing the files ensures that you can easily see what changed in your project. You can also revert the changes if necessary.

1.  Open a terminal or command prompt and change to your Salesforce DX project directory.
2.  Optionally execute a dry run of the CLI command to display what it does before it actually changes your DX project. For example, to dry run the decomposition of permission sets, run this command:

    ```

    ```

    See [this table](#table_jdc_zhr_fdc) for the \--behavior values for the other metadata types you can optionally decompose.

3.  When you're ready to update your DX project, run the same command but without the \--dry-run flag:

    ```

    ```

    If your default org is enabled for source tracking, the CLI command returns an error. This error is expected, because decomposing your local metadata causes the source tracking system to get out of sync with the org. Follow the directions in the error message and try again.

4.  If you deleted your default org, recreate it and deploy your local source.

When the project convert source-behavior command finishes, your sfdx-project.json file is updated to always decompose permission sets, or whatever type you specified. The existing source files in your local package directories are converted into the new decomposed format. You can now deploy and retrieve your metadata as usual.

If you change your mind and don't want to decompose the optional types, revert the changes made by the project convert source-behavior and recreate your source-tracking orgs.

This table provides the list of metadata types that are decomposed by default, and the types that you can optionally decompose. For optional metadata types, the table also shows the corresponding \--behavior flag value.

| Metadata Type | Value of --behavior Flag | Details About the Source Format Structure |
| --- | --- | --- |
| CustomObject | Not needed; type is decomposed by default. | Custom Objects |
| CustomObjectTranslation | Not needed; type is decomposed by default. | Custom Object Translations |
| CustomLabels | decomposeCustomLabelsBeta2 | Custom Labels (Beta) |
| ExternalServiceRegistration | decomposeExternalServiceRegistrationBeta | External Service Registrations (Beta) |
| PermissionSet | decomposePermissionSetBeta2 | Permission Sets (Beta) |
| SharingRules | decomposeSharingRulesBeta | Sharing Rules (Beta) |
| Workflow | decomposeWorkflowBeta | Workflows (Beta) |

## Source Format Structure of Decomposed Metadata Types

This section provides details about how the decomposed metadata types are broken down into their local source format structure.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Decomposition of the optional metadata types (custom labels, permission sets, sharing rules, and workflows) is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/?_ga=2.247987783.1372150065.1709219475-629000709.1639001992). Use of this pilot or beta service is at the Customer's sole discretion.

### Custom Objects

Custom objects are decomposed by default.

When you convert from metadata format to source format, your custom objects are placed in the <package-directory>/main/default/objects directory. Each object has its own subdirectory that reflects the type of custom object. Some parts of the custom objects are extracted into in these subdirectories:

-   businessProcesses
-   compactLayouts
-   fields
-   fieldSets
-   indexes
-   listViews
-   recordTypes
-   sharingReasons
-   validationRules
-   webLinks

The parts of the custom object that aren’t extracted are placed in a <object-name>.object-meta.xml file.

### Custom Object Translations

Custom object translations are decomposed by default.

Custom object translations reside in the <package-directory>/main/default/objectTranslations directory, each in their own subdirectory named after the custom object translation. Custom object translations and field translations are extracted into their own files within the custom object translation’s directory.

-   For field names, <field\_name>.fieldTranslation-meta.xml

-   For object names, <object\_name>.objectTranslation-meta.xml


The remaining pieces of the custom object translation that aren’t field translations are placed in a file called <objectTranslation-name>.objectTranslation-meta.xml.

See [Salesforce Help: Translation Workbench](https://help.salesforce.com/s/articleView?id=platform.workbench.htm&type=5&language=en_US) for more information.

### Custom Labels (Beta)

Custom labels aren’t decomposed by default; you must specifically configure your DX project to decompose them. See [Start Decomposing the Optional Metadata Types (Beta)](#sfdx_dev_ws_start_decompose "The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.") for details.

By default, all custom labels for your entire org are contained in a single file called CustomLabels.labels-meta.xml that resides in the <package-directory>/labels directory. Each package directory can have its own CustomLabels.labels-meta.xml file.

If you choose to decompose custom labels, individual CustomLabel components appear one time in a dedicated \*.label-meta.xml source file. The name of each \*.label-meta.xml source file is derived from the fullName of the CustomLabel component it contains. This example shows four custom label files in the default package directory.

![Custom labels decomposed source structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcustom-labels-decomposed.png&folder=sfdx_dev)

You can further organize custom labels in your DX project, as long as you follow these guidelines:

-   All \*.label-meta.xml source files must be contained by a labels source directory.
-   You can create a labels source directory in each of your multiple package directories in your DX project.
-   You can create subdirectories of the labels source directory to further organize your \*.label-meta.xml files.

Here are some examples of different ways you can organize custom labels.

![Custom labels organized outside the default package directory](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcustom-labels-decomposed-2.png&folder=sfdx_dev)

![Custom labels organized using a subdirectory](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcustom-labels-decomposed-3.png&folder=sfdx_dev)

![Custom labels organized in multiple package directories and subdirectories](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcustom-labels-decomposed-4.png&folder=sfdx_dev)

### External Service Registrations (Beta)

External service registrations aren’t decomposed by default; you must specifically configure your DX project to decompose them. See [Start Decomposing the Optional Metadata Types (Beta)](#sfdx_dev_ws_start_decompose "The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.") for details.

By default, an external service registration is contained in a file called <external-service-registration-name>.externalServiceRegistration-meta.xml that resides in the <package directory>/main/default/externalServiceRegistrations directory.

If you choose to decompose external service registrations, they’re still stored in the top-level <package directory>/main/default/externalServiceRegistrations directory. But each registration is decomposed into two source files when you retrieve it to your Salesforce DX project. One of the files is in YAML format and contains an OpenAPI spec. When you deploy the registration to your org, the two files are re-converted into the one metadata API XML file.

For example, let's say the name of your external service registration metadata component is BankService. The two source files after decomposition are:

-   BankService.yaml : A YAML file that contains the contents of the schema metadata component field. This field contains an OpenAPI 2.0.x or OpenAPI 3.0.x schema in JSON or YAML format. If the field's content is in JSON format in your org, it's always converted to YAML format when retrieved to your DX project.
-   BankService.externalServiceRegistration-meta.xml : A standard metadata API XML file that contains all the fields *except* schema.

### Permission Sets (Beta)

Permission sets aren’t decomposed by default; you must specifically configure your DX project to decompose them. See [Start Decomposing the Optional Metadata Types (Beta)](#sfdx_dev_ws_start_decompose "The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.") for details.

By default, a permission set is contained in a file called <permission-set-name>.permissionset-meta.xml that resides in the <package-directory>/main/default/permissionsets directory.

If you choose to decompose permission sets, they’re still stored in the top-level <package-directory>/main/default/permissionsets directory. This graphic shows how a sample permission set called MyPermSet is then decomposed into its smaller XML files.

![Permission set source structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fperm-sets-decomposed.png&folder=sfdx_dev)

Here are some highlights about the decomposition:

-   The decomposed files for a specific permission set are contained in a subdirectory named the same as the permission set, MyPermSet in our example.
-   The specific permission set directory contains a single file called <Name>.permissionset-meta.xml file, where <Name> is the directory name. This XML file contains information such as the permission set label, description, and license. In our example, the file is called MyPermSet.permissionset-meta.xml.
-   The objectSettings directory consolidates object-related permissions and settings into a single file for each object, with name <ObjectName>.objectSettings-meta.xml.
-   The remaining permissions and settings are in focused files with a category-specific extension, such as MyPermSet.applicationVisibilities-meta.xml or MyPermSet.flowAccesses-meta.xml.

### Sharing Rules (Beta)

Sharing rules aren’t decomposed by default; you must specifically configure your DX project to decompose them. See [Start Decomposing the Optional Metadata Types (Beta)](#sfdx_dev_ws_start_decompose "The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.") for details.

By default, all sharing rules for an object are contained in a file called <object-name>.sharingRules-meta.xml that resides in the <package directory>/main/default/sharingRules directory. The object-name refers to the object to which the sharing rule applies.

If you choose to decompose sharing rules, they’re still stored in the top-level <package directory>/main/default/sharingRules directory. But the sharing rules are grouped into subdirectories with the same name as the object that the sharing rule is associated with. Within this object subdirectory, parts of the sharing rule are extracted into these subdirectories.

-   sharingCriteriaRules
-   sharingGuestRules
-   sharingOwnerRules
-   sharingTerritoryRules

The parts of the sharing rule that aren’t extracted are placed in a <object-name>.sharingRules-meta.xml file.

### Workflows (Beta)

Workflows aren’t decomposed by default; you must specifically configure your DX project to decompose them. See [Start Decomposing the Optional Metadata Types (Beta)](#sfdx_dev_ws_start_decompose "The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.") for details.

By default, all workflows for an object are contained in a file called <object-name>.workflow-meta.xml that resides in the <package directory>/main/default/workflows directory. The object-name refers to the object to which the workflow applies.

If you choose to decompose workflows, they’re still stored in the top-level <package directory>/main/default/workflows directory. But the workflows are grouped into subdirectories with the same name as the object that the workflow is associated with. Within this object subdirectory, parts of the workflow are extracted into these subdirectories.

-   workflowAlerts
-   workflowFieldUpdates
-   workflowKnowledgePublishes
-   workflowOutboundMessages
-   workflowRules
-   workflowSends
-   workflowTasks

The parts of the workflow that aren’t extracted are placed in a <object-name>.workflow-meta.xml file.

## Code Examples

```
sf project convert source-behavior --behavior decomposePermissionSetBeta2 --dry-run
```

```
sf project convert source-behavior --behavior decomposePermissionSetBeta2
```
