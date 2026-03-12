---
title: "Salesforce DX Project Structure and Source
            Format"
domain: sfdx-dev
topic: salesforce-dx-project-structure-and-source-format
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.645Z
estimatedTokens: 1850
keywords: [Salesforce, Project, Structure, Source, specific, uses, different, files, file, extensions, Metadata, API, retrieve, org, start]
---

# Salesforce DX Project Structure and Source
            Format

> A Salesforce DX project has a specific project structure and source format. Source
        format uses a different set of files and file extensions from what Metadata API uses. When
        you retrieve metadata from the org with the project retrieve
            start command, Salesforce CLI stores it in source format in your project. When
        you deploy metadata, Salesforce CLI converts it into the format that Metadata API requires.

# Salesforce DX Project Structure and Source Format

A Salesforce DX project has a specific project structure and source format. Source format uses a different set of files and file extensions from what Metadata API uses. When you retrieve metadata from the org with the project retrieve start command, Salesforce CLI stores it in source format in your project. When you deploy metadata, Salesforce CLI converts it into the format that Metadata API requires.

## Source Transformation

It’s not uncommon for metadata formatted source to be very large, making it difficult to find what you want. If you work on a team with other developers who update the same metadata at the same time, you have to deal with merging multiple updates to the file. If you’re thinking that there has to be a better way, you’re right.

Before, all custom objects and object translations were stored in one large metadata file.

![before: custom objects and custom object translation in one big metadata file](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fworkspace_setup%2Fimages%2Fsource_before.png&folder=sfdx_dev)

We solve this problem by providing a new source shape that breaks down, or decomposes, these large source files to make them more digestible and easier to manage with a version control system. It’s called source format. Source format makes it much easier to find what you want to change or update. And you're less likely to overwrite a team member's change if it's decomposed.

A Salesforce DX project decomposes custom objects and custom object translations into intuitive subdirectories by default. If you want, you can also specify that other metadata types, such as permission sets and custom labels, are decomposed.

See [Decomposed Metadata Types](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_decomposed_md_types.htm#sfdx_dev_ws_decomposed_md_types "Decomposition refers to splitting a single, often large, metadata XML file into smaller XML files based on its subtypes. The result is referred to as source format. By default, a Salesforce DX project always decomposes custom objects and custom object translations. You can also optionally specify that other metadata types, such as permission sets and custom labels, be decomposed.") for details on how we decompose custom objects and custom object translations and how to configure more metadata types to be similarly decomposed.

![after: custom objects and custom object translations transformed into smaller bits](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fworkspace_setup%2Fimages%2Fsource_after.png&folder=sfdx_dev)

## Static Resources

Static resources must reside in the /main/default/staticresources directory. The project deploy and project retrieve commands support auto-expanding or compressing archive MIME types within your project. These behaviors support both the .zip and .jar MIME types. This way, the source files are more easily integrated in your Salesforce DX project and version control system.

For example, if you upload a static resource archive through the scratch org’s Setup UI, the project retrieve start command expands it into its directory structure within the project. To mimic this process from the file system, add the directory structure to compress directly into the static resources directory root, then create the associated .resource-meta.xml file. If an archive exists as a single file in your project, it’s always treated as a single file and not expanded.

This example illustrates how different types of static resources are stored in your local project. You can see an expanded .zip archive called expandedzippedresource and its related .resource-meta.xml file. You also see a couple .jpg files being stored with their MIME type, and a single file being stored with the legacy .resource extension

![static resources reside in staticresources folder](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fscratch_orgs%2Fimages%2Fsfdx_staticresources.png&folder=sfdx_dev)

See [Salefsorce Help: Static Resources](https://help.salesforce.com/s/articleView?id=platform.pages_static_resources.htm&type=5&language=en_US) for more information.

## File Extensions

When you convert existing metadata format to source format, we create an XML file for each bit. All files that contain XML markup now have an .xml extension so that your XML editor recognizes them as XML files and you can look at them. To sync your local projects and scratch orgs, Salesforce DX projects use a particular directory structure for custom objects, custom object translations, Lightning web components, Aura components, and documents.

For example, if you had an object called Case, source format provides an XML version called Case.object-meta.xml. If you have an app called DreamHouse, we create a file called DreamHouse.app-meta.xml. You get the idea.

Traditionally, static resources are stored on the file system as binary objects with a .resource extension. Source format handles static resources differently by supporting content MIME types. For example, .gif files are stored as a .gif instead of .resource. By storing files with their MIME extensions, you can manage and edit your files using the associated editor on your system.

You can have a combination of existing static resources with their .resource extension, and newly created static resources with their MIME content extensions. Existing static resources with .resource extensions keep that extension, but any new static resources show up in your project with their MIME type extensions. We allow .resource files to support the transition for existing customers. Although you get this additional flexibility, we recommend storing your files with their MIME extensions.

## Aura Components

Aura bundles and components must reside in a directory named aura under the <package directory> directory.

![Screenshot of aura directory in a Salesforce DX project.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fscratch_orgs%2Fimages%2Fsdd_aura_folder.png&folder=sfdx_dev)

## Lightning Web Components

Lightning web components must reside in a directory named lwc under the <package directory> directory.

![Screenshot of LWC directory in a Salesforce DX project.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fscratch_orgs%2Fimages%2Fsfdx_lwc.png&folder=sfdx_dev)

## ExperienceBundle and DigitalExperienceBundle for Experience Cloud Sites

The ExperienceBundle metadata type represents an Aura or an LWR site, and must reside in a directory named experiences under the <package directory> directory. The experiences directory contains a folder for each Aura or LWR site in your org.

The DigitalExperiencBundle metadata type represents an enhanced LWR site, and must reside in a directory named digitalExperiences under the <package directory> directory. The digitalExperiences/site directory contains a folder for each enhanced LWR site in your org.

## Documents

Documents must be inside the directories of their parent document folder. The parent document folder must be in a directory called documents. Each document has a corresponding metadata XML file that you can view with an XML editor.

![screen shot of sample documents folder structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fscratch_orgs%2Fimages%2Fsdd_documents_folder.png&folder=sfdx_dev)

## Related Topics

- Decomposed Metadata Types (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_decomposed_md_types.htm)
