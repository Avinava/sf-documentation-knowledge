---
title: "Migrate or Import Existing Source"
domain: sfdx-dev
topic: migrate-or-import-existing-source
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.287Z
estimatedTokens: 1173
keywords: [Migrate, Import, Source, Metadata, API, retrieve, code, convert, Salesforce, project]
---

# Migrate or Import Existing Source

> Use the Metadata API to retrieve the code, and then convert your source for use in a
    Salesforce DX project.

# Migrate or Import Existing Source

Use the Metadata API to retrieve the code, and then convert your source for use in a Salesforce DX project.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If your current repo follows the directory structure that is created from a Metadata API retrieve, you can skip the retrieve step and go directly to converting the source.

1.  [Set up your project.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm "A Salesforce DX project provides a project structure for your org’s metadata (code and configuration), org templates, sample data, and all your team’s tests. To bring consistency to your team’s development processes, store these items in a source control system (SCS). Retrieve the contents of your team’s repository when you’re ready to develop a new feature.")
2.  [Retrieve your metadata.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_from_existing.htm "If you’re a Salesforce developer, partner, or ISV, you likely have existing source in a managed package in your packaging org or application source in your sandbox or production org. Before you begin using Salesforce DX, retrieve the existing source into a Salesforce DX project.")
3.  [Convert the metadata formatted source you just retrieved to source format.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm "If you already have a repo in which you’ve retrieved metadata from an org using the Metadata API directly, the files are in metadata format. You can convert these files into source format and add them to your Salesforce DX project. You can then deploy and retrieve them to and from your org using CLI commands and use source tracking to track changes.")
4.  [Authorize the Developer Hub org for the project.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")
5.  [Configure your local project.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")
6.  [Create a scratch org.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.")
7.  [Push the source from your project to the scratch org.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm "After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.")
8.  [Develop the app.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop.htm "After you import some test data, you’ve completed the process of setting up your project. Now, you’re ready to start the development process.")
9.  [Pull the source to sync your project and scratch org.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm "After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.")
10.  [Run tests.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm "When you’re ready to test changes to your source code, you can run Apex tests in an org using Salesforce CLI on the command line. You can also run Apex tests from Salesforce Extensions for VS Code or from within third-party continuous integration tools, such as Jenkins or CircleCI.")
11.  Add, commit, and push changes. Create a pull request.

Deploy your app using one of the following methods:

-   Build and release your app with managed packages.
-   [Build and release your app using the Metadata API.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi.htm "Develop and test your app in your sandboxes. Use Salesforce CLI or Salesforce Extensions for VS Code to retrieve and deploy your source. This development work flow is called the org development model.")

## Related Topics

- Set up your
            project. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm)
- Retrieve your metadata. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_from_existing.htm)
- Convert the
            metadata formatted source you just retrieved to source format. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm)
- Authorize the Developer Hub org for
            the project. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
- Configure your local
            project. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
- Create a
            scratch org. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
- Push the
            source from your project to the scratch org. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)
- Develop the app. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop.htm)
- Pull the
            source to sync your project and scratch org. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
- Run tests. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm)
