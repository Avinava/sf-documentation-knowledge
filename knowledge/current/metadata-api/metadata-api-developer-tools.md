---
title: "Metadata API Developer Tools"
domain: metadata-api
topic: metadata-api-developer-tools
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.501Z
estimatedTokens: 935
keywords: [Metadata, API, Developer, Tools, Salesforce, Extensions, Visual, Studio, Code, CLI, access, commands, streamline, process]
---

# Metadata API Developer Tools

> Use the Salesforce Extensions for Visual Studio Code on Salesforce CLI to access Metadata
    API commands. Salesforce CLI and the Salesforce Extensions for Visual Studio Code streamline the
    process of using Metadata API.

# Metadata API Developer Tools

Use the Salesforce Extensions for Visual Studio Code on Salesforce CLI to access Metadata API commands. Salesforce CLI and the Salesforce Extensions for Visual Studio Code streamline the process of using Metadata API.

The easiest way to access the functionality in Metadata API is to use the Salesforce Extensions for Visual Studio Code or Salesforce CLI. Both tools are built on top of Metadata API and use the standard tools to simplify working with Metadata API.

-   The Salesforce Extensions for Visual Studio Code includes tools for developing on the Salesforce platform in the lightweight, extensible VS Code editor. These tools provide features for working with development orgs (scratch orgs, sandboxes, and DE orgs), Apex, Aura components, and Visualforce.
-   Salesforce CLI is ideal if you use scripting or the command line for moving metadata between a local directory and a Salesforce org.

For more information about the Salesforce Extensions for Visual Studio Code or Salesforce CLI, see [Salesforce Tools and Toolkits](https://developer.salesforce.com/tools "HTML (New Window)").

If you prefer to build your own client applications, the underlying calls of Metadata API have been exposed for you to use directly. This guide gives you more information about working directly with Metadata API.

You can use the Metadata API to manage setup and customization information (metadata) in Salesforce. For example:

-   Export customizations as XML metadata files. See [Working with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.").
-   Migrate configuration changes between orgs. See [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.").
-   Modify existing customizations using XML metadata files. See [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") and [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.").
-   Manage customizations programmatically. See [CRUD-Based Metadata Development](atlas.en-us.api_meta.meta/api_meta/meta_calls_intro.htm "Use the CRUD-based metadata calls to create, update, or delete setup and configuration components for your organization or application. These configuration components include custom objects, custom fields, and other configuration metadata. The metadata calls mimic the behavior in the Salesforce user interface for creating, updating, or deleting components. Whatever rules apply there also apply to these calls.").

You can modify metadata in test orgs in Developer Edition or sandboxes, and then deploy tested changes to production orgs in Enterprise, Unlimited, or Performance Editions. You can also create scripts to populate a new org with your custom objects, custom fields, and other components.

#### See Also

-   [Deploying and Retrieving Metadata](atlas.en-us.api_meta.meta/api_meta/file_based.htm)

## Related Topics

- Working with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- CRUD-Based Metadata Development (atlas.en-us.api_meta.meta/api_meta/meta_calls_intro.htm)
- Deploying and Retrieving Metadata (atlas.en-us.api_meta.meta/api_meta/file_based.htm)
