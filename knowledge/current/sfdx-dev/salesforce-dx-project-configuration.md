---
title: "Salesforce DX Project Configuration"
domain: sfdx-dev
topic: salesforce-dx-project-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.932Z
estimatedTokens: 2943
keywords: [Salesforce, Project, Configuration, file, sfdx-project.json, directory, facilitates, authorization, orgs, creation, second-generation, packages, tells, CLI, put]
---

# Salesforce DX Project Configuration

> The project configuration file sfdx-project.json
    indicates that the directory is a Salesforce DX project. The configuration file contains project
    information and facilitates the authorization of orgs and the creation of second-generation
    packages. It also tells Salesforce CLI where to put files when syncing between the project and
    org.

# Salesforce DX Project Configuration

The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.

We provide sample sfdx-project.json files in the sample repos for creating a project using Salesforce CLI or Salesforce Extensions for VS Code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Are you planning to create second-generation packages? When you’re ready, add packaging-specific configuration options to support package creation. See [Project Configuration File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm).

We recommend that you check in this file with your source.

```

```

You can manually edit these parameters.

## name (required for Salesforce Functions)

Salesforce DX or Salesforce Functions project name.

## namespace (optional)

The global namespace that is used with a package. The namespace must be registered with an org that is associated with your Dev Hub org. This namespace is assigned to scratch orgs created with the org create scratch command. If you’re creating an unlocked package, you have the option to create a package with no namespace.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

Register the namespace with Salesforce and then connect the org with the registered namespace to the Dev Hub org.

## oauthLocalPort (optional)

By default, the OAuth port is 1717. Change this port if 1717 is already in use and you plan to create a connected app in your Dev Hub org to support JWT-based authorization. Be sure you also follow the steps in [Create a Connected App in Your Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "Salesforce CLI requires either an external client app (preferred) or connected app in the org that you're authorizing.") to change the callback URL.

## packageAliases (optional)

Aliases for package IDs, which can often be cryptic. See [Project Configuration File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm) for details.

## packageDirectories (required)

Package directories indicate which directories to target when syncing source to and from the org. These directories can contain source files from your managed or unmanaged package. They can also contain unpackaged source files produced by, for example, an ant tool or change set. For information on all packageDirectories options, see [Project Configuration File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm).

Keep these things in mind when working with package directories.

-   The location of the package directory is relative to the project. Don’t specify an absolute path. The following two examples are equivalent.

    ```

    ```

-   You can have only one default path (package directory). If you have only one path, we assume it’s the default, so you don’t have to explicitly set the default parameter. If you have multiple paths, you must indicate which one is the default.
-   Salesforce CLI uses the default package directory as the target directory when retrieving changes from the org to the local project. This default path is also used when creating second-generation packages.
-   If you don’t specify an output directory, the default package directory is also where files are stored during source conversions. Source conversions are both from metadata format to source format, and from source format to metadata format.

## plugins (optional)

To use the [custom plugins you’ve created](https://github.com/salesforcecli/cli/wiki/Quick-Introduction-to-Developing-sf-Plugins) with your Salesforce DX project, add a plugins section to the sfdx-project.json file. In this section, add configuration values and settings to change your plugins’ behavior.

```

```

Store configuration variables for only those values that you want to check in to source control for the project. These configuration values affect your whole development team.

## pushPackageDirectoriesSequentially (optional) (Deprecated)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

This property is deprecated and applies only to the deprecated force:source:push command. It doesn't affect the behavior of the project deploy start command. To deploy packages sequentially, and in a specific order, use separate project deploy start commands in the desired order.

Set to true to push multiple package directories in the order they're listed in packageDirectories when using force:source:push. The directories are pushed in separate transactions. The default value of this property is false, which means that multiple package directories are deployed in a single transaction without regard to order. Example:

```

```

## replacements (optional)

Automatically replace strings in your metadata source files with specific values right before you deploy the files to an org.

See [Replace Strings in Code Before Deploying](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_string_replace.htm) for details.

## sfdcLoginUrl (optional)

The login URL that the org login commands use. If not specified, the default is https://login.salesforce.com. Override the default value if you want users to authorize to a specific Salesforce instance. For example, if you want to authorize into a sandbox org, set this parameter to https://test.salesforce.com.

If you don’t specify a default login URL here, or if you run org login outside the project, specify the instance URL when authorizing the org with the \--instance-url flag.

## sourceApiVersion (optional)

The API version that the source is compatible with.

The sourceApiVersion value determines the fields retrieved for each metadata type during project deploy, project retrieve, or project convert. This field is important if you’re using a metadata type that has changed in a recent release. You’d want to specify the version of your metadata source. For example, let's say a new field was added to the CustomTab for API version 63.0. If you retrieve components for version 57.0 or earlier, you see errors when running the project commands because the components don't include that field.

Don’t confuse this project configuration parameter with the [org-api-version](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm) CLI configuration variable, which has a similar name. See [How API Version and Source API Version Work in Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm) for more information and the default value.

## sourceBehaviorOptions (optional) (Beta)

Specify which metadata types in your Salesforce DX project are decomposed. Custom objects and custom object translations are always decomposed by default. Decomposition refers to splitting a single, often large, metadata XML file into smaller XML files based on its subtypes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Decomposition of permission sets, custom labels, sharing rules, and workflows is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/?_ga=2.247987783.1372150065.1709219475-629000709.1639001992). Use of this pilot or beta service is at the Customer's sole discretion.

Don't manually update your sfdx-project.json file with this option. Rather, run the project convert source-behavior Salesforce CLI command which updates the file for you, and also breaks up the associated metadata file XML into smaller files. See [Start Decomposing the Optional Metadata Types (Beta)](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_decomposed_md_types.htm#sfdx_dev_ws_start_decompose "The Salesforce DX project file (sfdx-project.json) determines which of the optional metadata types are decomposed. But don't update it manually. Rather, run the project convert source-behavior Salesforce CLI command which updates the project file for you, and also breaks up the associated metadata file XML into smaller files.") for details.

Possible values:

-   decomposeCustomLabelsBeta2—Decompose the [CustomLabels](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customlabels.htm) metadata type.
-   decomposeExternalServiceRegistrationBeta—Decompose the [ExternalServiceRegistration](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_externalserviceregistration.htm) metadata type.
-   decomposePermissionSetBeta2—Decompose the [PermissionSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_permissionset.htm) metadata type.
-   decomposeSharingRulesBeta—Decompose the [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) metadata type
-   decomposeWorkflowBeta—Decompose the [WorkFlow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_workflow.htm) metadata type.

Example:

```

```

#### See Also

-   [Link a Namespace to a Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm "To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.")

-   [Authorization](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")

-   [How to Exclude Source When Syncing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm "When syncing metadata between your local file system and a target org, you often have source files you want to exclude. Similarly, you often want to exclude certain files when converting source to Salesforce DX source format. In both cases, you can exclude individual files or all files in a specific directory with a .forceignore file.")

-   [Retrieve Source from the Scratch Org to Your Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm "After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.")

-   [Deploy Source From Your Project to the Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm "After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.")

## Code Examples

```
{ 
"packageDirectories" : [ 
    { "path": "force-app", "default": true}, 
    { "path" : "unpackaged" }, 
    { "path" : "utils" } 
  ],
"namespace": "", 
"sfdcLoginUrl" : "https://login.salesforce.com", 
"sourceApiVersion": "63.0"
}
```

```
"path": "helloWorld" 
"path" : "./helloWorld"
```

```
"plugins": {
  "yourPluginName": {
    "timeOutValue": "2"
  },
  "yourOtherPluginName": {
    "yourCustomProperty": true
  }
}
```

```
"packageDirectories": [
    {
      "path": "es-base-custom",
      "default": true
    },
    {
      "path": "es-base-ext"
    }
  ],
  "pushPackageDirectoriesSequentially": true,
```

```
"sourceBehaviorOptions": ["decomposePermissionSetBeta2", "decomposeCustomLabelsBeta2"]
```

## Related Topics

- Create a Connected App in Your Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)
- Start Decomposing the Optional Metadata Types (Beta) (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_decomposed_md_types.htm)
- Link a Namespace to a Dev Hub Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm)
- Authorization (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
- How to Exclude Source When Syncing (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
- Retrieve Source from the Scratch Org to Your Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
- Deploy Source From Your Project to the Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)
