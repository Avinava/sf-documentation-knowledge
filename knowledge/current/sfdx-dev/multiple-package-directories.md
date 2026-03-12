---
title: "Multiple Package Directories"
domain: sfdx-dev
topic: multiple-package-directories
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.966Z
estimatedTokens: 2073
keywords: [Multiple, Package, Directories, Salesforce, project, recommend, organize, metadata, logical, groupings, creating, locally, define, sfdx-project.json, file]
---

# Multiple Package Directories

> When you create your Salesforce DX project, we recommend that you organize your metadata
    into logical groupings by creating multiple package directories locally. You then define these
    directories in your sfdx-project.json file. You can group
    similar code and source files for an application or customization to better organize your team’s
    repository. Later, if you decide to use unlocked or second-generation managed packages (2GP),
    these directories correspond to the actual unlocked or 2GP packages.

# Multiple Package Directories

When you create your Salesforce DX project, we recommend that you organize your metadata into logical groupings by creating multiple package directories locally. You then define these directories in your sfdx-project.json file. You can group similar code and source files for an application or customization to better organize your team’s repository. Later, if you decide to use unlocked or second-generation managed packages (2GP), these directories correspond to the actual unlocked or 2GP packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

For clarity, a package directory refers to the local (client-side) directory that contains decomposed metadata files, that is, metadata in source format. This directory doesn’t always result in an unlocked or 2GP package. Package refers to an unlocked or 2GP package.

In your sfdx-project.json file, list each package directory separately in the packageDirectories section. Each local package directory adheres to the standard Salesforce DX project structure.

The multiple package directory structure is client-side (local) only. When you deploy the source to the org with project deploy start, there’s no association between its local package directory location and the package in the org. You specify that metadata belongs to a specific unlocked or 2GP package in an org by explicitly installing the package.

All of the project commands that deploy, retrieve, and convert metadata support multiple package directories.

## How Do I Set It Up?

Setting up multiple package directories is easy. How you organize your local source code among these directories takes more thought and planning, and depends on your development environment. Plan how to organize your code before you get started. Keep your source code well organized as your project grows to make it easier and more efficient for your developers to work.

Let’s say you put the decomposed metadata files for a custom object MyObject in the default package directory. You can then put files for a new field MyField on MyObject in a different “extension” package directory without having to also include the MyObject files. Although this example is simple, you can organize your code in any number of different ways. [These blog posts](https://developer.salesforce.com/blogs/2018/06/working-with-modular-development-and-unlocked-packages-part-1.html) provide some ideas.

Here’s how you set up multiple package directories. Let’s first look at a sample sfdx-project.json snippet:

```

```

The sample sfdx-project.json snippet defines three package directories: es-base-custom (the default), es-base-ext, and es-base-styles. Let’s say your top-level local project directory is called easy-spaces-lwc. The directory hierarchy underneath it looks something like this:

![Image showing directory hierarchy of the easy-spaces-lwd project directory.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_mpd_hierarchy.png&folder=sfdx_dev)

Each es-base-\* directory adheres to the standard Salesforce DX project structure. For example, the es-base-ext directory looks something like this:

![Image showing directory hierarchy of es-base-ext subdirectory of the easy-spaces-lwc project directory.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_mpd_hierarchy_details.png&folder=sfdx_dev)

Now add the decomposed metadata source to these multiple package directories in the way that best suits your development environment.

## How Does It Work?

Let's go through a few examples to see how project deploy start and project retrieve start work with multiple package directories.

For new orgs, the default project deploy start command deploys all the metadata in all multiple package directories listed in your sfdx-project.json file. After that, the command deploys only metadata that's new, changed, or marked for delete. By default, the command deploys the metadata in a single transaction, as if you had just one package directory.

```

```

You can also target the metadata you want to deploy. You can deploy specific package directories, specific metadata components, components listed in a manifest file, and more. This example deploys the metadata in the es-base-custom package directory:

```

```

To deploy more than one package directory, specify the \--source-dir flag multiple times. This example deploys all the package directories configured in the sample sfdx-project.json file shown in the previous section.

```

```

This example deploys all Apex classes found in all your multiple package directories:

```

```

When you run project retrieve start, the command retrieves all remote changes from the org into your local project. For each retrieved component, the command looks in all package directories for a local match. If it finds a match, the command updates it. If it doesn't find a match, the command copies the local component into the default package directory, which in our example is es-base-custom.

```

```

You can then move the retrieved files into the package directory that makes sense for your project. After you deploy the moved files back to the org with project deploy start, Salesforce CLI tracks their new location.

You can also use project retrieve start to retrieve targeted metadata from your org. Existing metadata is retrieved into its correct local package directory and new metadata into the default package directory. This example retrieves only the metadata components contained in the local es-base-custom package directory:

```

```

This example retrieves all Apex classes from your org; new classes go into the default package directory and classes that exist locally go into their corresponding package directory.

```

```

## Push Source Sequentially

By default, project deploy start deploys metadata to your org in a single transaction, regardless of the order that you list your multiple package directories in sfdx-project.json. But sometimes you must specify the exact order that the package directories are pushed. Reasons include:

-   The number of recomposed metadata component files in your local project exceeds the Salesforce metadata limit of 10,000 files per retrieve or deploy. One workaround is to split up your metadata into multiple package directories that each contain less than this limit and push each directory sequentially, and thus separately.
-   You have dependencies between multiple package directories, which requires that they be pushed in a specific order.
-   More than one package directory contains the same metadata component, and you want to specify which one is deployed last so it's not overwritten.

If you need multiple deployments in a specific order, run project deploy start several times with the \--source-dir or \--metadata flags in the desired order.

#### See Also

-   [*Developer Guide*: Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm "Developer Guide: Second-Generation Managed
    Packages - HTML (New Window)")

-   [*Developer Guide*: Install and Uninstall Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_upgrade.htm "Developer Guide: Install and Uninstall Second-Generation
    Managed Packages - HTML (New Window)")

-   [Salesforce DX Project Structure and Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm "A Salesforce DX project has a specific project structure and source format. Source format uses a different set of files and file extensions from what Metadata API uses. When you retrieve metadata from the org with the project retrieve start command, Salesforce CLI stores it in source format in your project. When you deploy metadata, Salesforce CLI converts it into the format that Metadata API requires.")

-   [*Salesforce Developers Blog*: Working with Modular Development and Unlocked Packages](https://developer.salesforce.com/blogs/2018/06/working-with-modular-development-and-unlocked-packages-part-1.html "Salesforce Developers Blog: Working with Modular Development and Unlocked Packages - HTML (New Window)")

## Code Examples

```
"packageDirectories": [
    {
      "path": "es-base-custom",
      "default": true
    },
    {
      "path": "es-base-ext"
    },
    {
      "path": "es-base-styles"
    }
  ],
```

```
sf project deploy start --target-org my-org
```

```
sf project deploy start --source-dir es-base-custom --target-org my-org
```

```
sf project deploy start --source-dir es-base-custom --source-dir es-base-ext --source-dir es-base-styles --target-org my-org
```

```
sf project deploy start --metadata ApexClass --target-org my-org
```

## Related Topics

- Salesforce DX Project Structure and Source Format (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)
