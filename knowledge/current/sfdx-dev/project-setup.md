---
title: "Project Setup"
domain: sfdx-dev
topic: project-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.920Z
estimatedTokens: 1482
keywords: [Project, Setup, Salesforce, structure, org’s, metadata, code, configuration, org, templates, sample, data, team’s, tests, bring]
---

# Project Setup

> A Salesforce DX project provides a project structure for your org’s metadata (code and
    configuration), org templates, sample data, and all your team’s tests. To bring consistency to
    your team’s development processes, store these items in a source control system (SCS). Retrieve
    the contents of your team’s repository when you’re ready to develop a new feature.

# Project Setup

A Salesforce DX project provides a project structure for your org’s metadata (code and configuration), org templates, sample data, and all your team’s tests. To bring consistency to your team’s development processes, store these items in a source control system (SCS). Retrieve the contents of your team’s repository when you’re ready to develop a new feature.

What makes a project a Salesforce DX project? It includes an sfdx-project.json file, which defines the project’s configuration. This .json file includes connected app information for Salesforce CLI, in which directories project files are located, packaging directory structure for 2GP packages, and which API version you want to use, if not the latest.

You have different options to create a Salesforce DX project depending on how you want to begin. You can use your preferred SCS. Most of our examples use Git.

| Use the Sample Repository on GitHub | Explore the features of Salesforce DX using one of our sample repos and your own SCS and toolset. |
| --- | --- |
| Create a Salesforce DX Project from Existing Source | Start with an existing Salesforce app to create a Salesforce DX project. |
| Create a Salesforce DX Project | Create an app on the Salesforce Platform using a Salesforce DX project. |

-   **[Sample Repository on GitHub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_clone_repo.htm)**
    To get started quickly, see the dreamhouse-lwc GitHub repo. This standalone application contains an example DX project with multiple Apex classes, Aura components, custom objects, sample data, and Apex tests.
-   **[Create a Salesforce DX Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm)**
    A Salesforce DX project has a specific structure and a configuration file that identifies the directory as a Salesforce DX project.
-   **[Salesforce DX Project Structure and Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)**
    A Salesforce DX project has a specific project structure and source format. Source format uses a different set of files and file extensions from what Metadata API uses. When you retrieve metadata from the org with the project retrieve start command, Salesforce CLI stores it in source format in your project. When you deploy metadata, Salesforce CLI converts it into the format that Metadata API requires.
-   **[How to Exclude Source When Syncing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)**
    When syncing metadata between your local file system and a target org, you often have source files you want to exclude. Similarly, you often want to exclude certain files when converting source to Salesforce DX source format. In both cases, you can exclude individual files or all files in a specific directory with a .forceignore file.
-   **[Create a Salesforce DX Project from Existing Source](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_from_existing.htm)**
    If you’re a Salesforce developer, partner, or ISV, you likely have existing source in a managed package in your packaging org or application source in your sandbox or production org. Before you begin using Salesforce DX, retrieve the existing source into a Salesforce DX project.
-   **[Convert Files in Metadata Format to Source Format](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm)**
    If you already have a repo in which you’ve retrieved metadata from an org using the Metadata API directly, the files are in metadata format. You can convert these files into source format and add them to your Salesforce DX project. You can then deploy and retrieve them to and from your org using CLI commands and use source tracking to track changes.
-   **[Salesforce DX Usernames and Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm)**
    Many Salesforce CLI commands connect to an org to complete their task. For example, the org create scratch command, which creates a scratch org, connects to a Dev Hub org. The project deploy start and project retrieve start commands synchronize source code between your project and an org. In each case, the CLI command requires a username to determine which org to connect to. Usernames are unique within the entire Salesforce ecosystem and are associated with just one org.
-   **[Link a Namespace to a Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm)**
    To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.
-   **[Salesforce DX Project Configuration](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)**
    The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.
-   **[Multiple Package Directories](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_mpd.htm)**
    When you create your Salesforce DX project, we recommend that you organize your metadata into logical groupings by creating multiple package directories locally. You then define these directories in your sfdx-project.json file. You can group similar code and source files for an application or customization to better organize your team’s repository. Later, if you decide to use unlocked or second-generation managed packages (2GP), these directories correspond to the actual unlocked or 2GP packages.
-   **[Replace Strings in Code Before Deploying or Packaging](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_string_replace.htm#sfdx_dev_ws_string_replace)**
    Automatically replace strings in your metadata source files with specific values right before you deploy the files to an org or create a package version.

## Related Topics

- Sample Repository on GitHub (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_clone_repo.htm)
- Create a Salesforce DX Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm)
- Salesforce DX Project Structure and Source Format (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)
- How to Exclude Source When Syncing (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
- Create a Salesforce DX Project from Existing Source (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_from_existing.htm)
- Convert Files in Metadata Format to Source Format (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm)
- Salesforce DX Usernames and Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm)
- Link a Namespace to a Dev Hub Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm)
- Salesforce DX Project Configuration (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
- Multiple Package Directories (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_mpd.htm)
