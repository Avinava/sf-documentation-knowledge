---
title: "Move Metadata from Production to Your Local File System"
domain: metadata-api
topic: move-metadata-from-production-to-your-local-file-system
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.036Z
keywords: [Move, Metadata, Production, Local, File, System, See]
---

# Move Metadata from Production to Your Local File System

# Move Metadata from Production to Your Local File System

To make development changes without affecting your existing configurations, use Metadata API to move metadata to your local file system. Next, push metadata from your local file system to a shareable repository for development.

When you build customizations on Salesforce, you must preserve the functionality of your existing org during the development cycle. To build customizations without affecting your production org, save your production metadata in a version control system. Git integrates best with SFDX tools.

First, move the required metadata from the production org to your local file system. To move metadata to your local machine, use a retrieve call instead of a source pull. Next, push your files to a repository that is accessible to your team members with Git commands. The repository is now the original source of production metadata for your team’s development cycle.

Now that your production metadata is stored in a repository, move the necessary metadata back to your local file system to begin development work.

#### See Also

-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")
    
-   [source Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source)