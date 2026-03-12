---
title: "How Salesforce Developer Experience (DX) Tooling Changes the Way You Work"
domain: sfdx-dev
topic: how-salesforce-developer-experience-dx-tooling-changes-the-way-you-work
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:18.280Z
estimatedTokens: 1368
keywords: [How, Salesforce, Developer, Experience, Tooling, Changes, Way, Work, modern, manage, develop, apps, platform, across, their]
---

# How Salesforce Developer Experience (DX) Tooling Changes the Way You Work

> Salesforce DX tooling provides modern experience to manage and develop apps on the
        platform across their entire lifecycle. It brings together source-driven development, team
        collaboration with governance, and new levels of agility for custom app development on
        Salesforce based on modern best practices.

# How Salesforce Developer Experience (DX) Tooling Changes the Way You Work

Salesforce DX tooling provides modern experience to manage and develop apps on the platform across their entire lifecycle. It brings together source-driven development, team collaboration with governance, and new levels of agility for custom app development on Salesforce based on modern best practices.

Highlights include:

-   Your tools, your way. You use the developer tools you already know.
-   The ability to apply best practices to software development. Source code and metadata exist outside of the org and provide more agility to develop Salesforce apps in a team environment. Instead of the org, your version control system is the source of truth.
-   A powerful command-line interface (CLI) removes the complexity of working with your Salesforce org for development, continuous integration, and delivery.
-   Flexible and configurable scratch orgs that you build for development and automated environments. This new type of org makes it easier to build your apps and packages.
-   You can use any IDE or text editor you want with the CLI and externalized source.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Salesforce DX tooling requires the API Enabled system permission, which provides programmatic access to your org's information.

## Are You Ready to Begin?

Here’s the basic order for doing your work using Salesforce DX. These workflows include the most common CLI commands. For all commands, see the Salesforce CLI Command Reference.

-   [Install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
-   [Enable Dev Hub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm "The Dev Hub lets you create scratch orgs, unlocked packages, and second-generation managed packages. Your Dev Hub is also the designated place to manage all your scratch orgs, packages, and namespaces.")
-   [Use a Sample Repo to Get Started](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm "The quickest way to get going with Salesforce DX tooling is to clone the dreamhouse-lwc GitHub repo. Use its configuration files and Salesforce application to try some commonly used Salesforce CLI commands. In addition to source code for the application, the repo includes sample data and Apex tests.")
-   [Create an Application](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_create_new_app.htm "Follow the basic workflow when you are starting from scratch to create and develop an app that runs on the Lightning Platform.")
-   [Migrate or Import Existing Source](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_existing_app.htm "Use the Metadata API to retrieve the code, and then convert your source for use in a Salesforce DX project.")

Optionally, install:

-   [Salesforce Extensions for VS Code](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/vscode-overview.html)
-   [Agentforce Vibes IDE](https://developer.salesforce.com/docs/platform/code-builder/guide/codebuilder-overview.html)
-   [DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_setup.htm&type=5&language=en_US)

-   **[Get Started by Using a Sample Repo](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm)**
    The quickest way to get going with Salesforce DX tooling is to clone the dreamhouse-lwc GitHub repo. Use its configuration files and Salesforce application to try some commonly used Salesforce CLI commands. In addition to source code for the application, the repo includes sample data and Apex tests.
-   **[Get Started by Creating a New DX Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_get_started_dx.htm)**
    Let's say you're a Salesforce developer who creates awesome org customizations using declarative tools and builders, such as Flow and Lightning App Builder. You've heard about source-driven development, and want to move in that direction. You therefore need to extract your customizations from your org and store them in a source control system, such as GitHub, which then becomes your new source of truth. But you're not quite sure how it all works and would like to get some hands on practice using simple use cases. Keep reading!
-   **[Create an Application](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_create_new_app.htm)**
    Follow the basic workflow when you are starting from scratch to create and develop an app that runs on the Lightning Platform.
-   **[Migrate or Import Existing Source](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_existing_app.htm)**
    Use the Metadata API to retrieve the code, and then convert your source for use in a Salesforce DX project.
-   **[Salesforce DX Release Notes](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_releasenotes.htm)**
    Use the Salesforce Release Notes to learn about the most recent updates and changes to development environments, packaging, platform development tools, and Salesforce APIs.

#### See Also

-   [Developer Experience (DX) Developer Center](https://developer.salesforce.com/developer-centers/developer-experience "Developer Experience (DX) Developer Center - HTML (New Window)")

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

## Related Topics

- Enable Dev Hub (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm)
- Use a Sample
                        Repo to Get Started (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm)
- Create an
                        Application (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_create_new_app.htm)
- Migrate or
                        Import Existing Source (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_existing_app.htm)
- Get Started by Using a Sample Repo (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm)
- Get Started by Creating a New DX Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_get_started_dx.htm)
- Create an Application (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_create_new_app.htm)
- Migrate or Import Existing Source (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_existing_app.htm)
- Salesforce DX Release Notes (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_releasenotes.htm)
