---
title: "Create an Application"
domain: sfdx-dev
topic: create-an-application
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.283Z
estimatedTokens: 885
keywords: [Application, Follow, basic, workflow, starting, scratch, develop, app, runs, Lightning, Platform]
---

# Create an Application

> Follow the basic workflow when you are starting from scratch to create and develop an
  app that runs on the Lightning Platform.

# Create an Application

Follow the basic workflow when you are starting from scratch to create and develop an app that runs on the Lightning Platform.

1.  [Set up your project.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm "A Salesforce DX project provides a project structure for your org’s metadata (code and configuration), org templates, sample data, and all your team’s tests. To bring consistency to your team’s development processes, store these items in a source control system (SCS). Retrieve the contents of your team’s repository when you’re ready to develop a new feature.")
2.  [Authorize the Developer Hub org for the project.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")
3.  [Configure your local project.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "The project configuration file sfdx-project.json indicates that the directory is a Salesforce DX project. The configuration file contains project information and facilitates the authorization of orgs and the creation of second-generation packages. It also tells Salesforce CLI where to put files when syncing between the project and org.")
4.  [Create a scratch org.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.")
5.  [Push the source from your project to the scratch org.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm "After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.")
6.  [Develop the app.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop.htm "After you import some test data, you’ve completed the process of setting up your project. Now, you’re ready to start the development process.")
7.  [Pull the source to keep your project and scratch org in sync.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm "After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.")
8.  [Run tests.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm "When you’re ready to test changes to your source code, you can run Apex tests in an org using Salesforce CLI on the command line. You can also run Apex tests from Salesforce Extensions for VS Code or from within third-party continuous integration tools, such as Jenkins or CircleCI.")
9.  Add, commit, and push changes. Create a pull request.

Deploy your app using one of the following methods:

-   Build and release your app with managed packages
-   [Build and release your app using the Metadata API](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi.htm "Develop and test your app in your sandboxes. Use Salesforce CLI or Salesforce Extensions for VS Code to retrieve and deploy your source. This development work flow is called the org development model.")

## Related Topics

- Set up your
      project. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm)
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
      source to keep your project and scratch org in sync. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
- Run tests. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm)
- Build and release
      your app using the Metadata API (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi.htm)
