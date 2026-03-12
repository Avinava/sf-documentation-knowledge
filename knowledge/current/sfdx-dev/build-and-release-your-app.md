---
title: "Build and Release Your App"
domain: sfdx-dev
topic: build-and-release-your-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.085Z
estimatedTokens: 1050
keywords: [Build, Release, App, finish, writing, code, step, deploy, offer, different, deployment, options, role, needs, customer]
---

# Build and Release Your App

> When you finish writing your code, the next step is to deploy it. We offer different
    deployment options based on your role and needs as a customer, system integrator, or independent
    software vendor (ISV) partner.

# Build and Release Your App

When you finish writing your code, the next step is to deploy it. We offer different deployment options based on your role and needs as a customer, system integrator, or independent software vendor (ISV) partner.

To learn about the benefits of the different development models, review these Trailhead modules:

-   [Org Development Model](https://trailhead.salesforce.com/content/learn/modules/org-development-model)
-   [Package Development Model](https://trailhead.salesforce.com/content/learn/modules/sfdx_dev_model)
-   [Quick Start: Unlocked Packages](https://trailhead.salesforce.com/projects/quick-start-unlocked-packages "HTML (New Window)")
-   [Unlocked Packages for Customers](https://trailhead.salesforce.com/trails/sfdx_get_started/modules/unlocked-packages-for-customers "HTML (New Window)")

You have several tooling options, based on how you decide to build and release yours apps.

## Customers and Non-ISV Partners

-   [Agentforce Vibes IDE](https://developer.salesforce.com/docs/platform/code-builder/guide/codebuilder-overview.html) – A web-based integrated development environment that has all the power and flexibility of Visual Studio Code, Salesforce Extensions for VS Code, and Salesforce CLI in your web browser.
-   [Salesforce Extensions for VS Code](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/vscode-overview.html) – A set of extensions that come with rich tools for developing on the Salesforce platform.
-   [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm) – A command-line interface that simplifies development and build automation when working with your Salesforce org
-   [Metadata API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_use_cases_deploy_prod.htm) – An API for deploying, retrieving, creating, updatinge, or deleting customizations.
-   [DevOps Center](https://help.salesforce.com/s/articleView?id=platform.devops_center_setup.htm&type=5&language=en_US) – Change and release management for declarative and pro-code developers.
-   [Unlocked Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm) – For customers who want to organize metadata into a package and deploy the metadata (via packages) to different orgs.

## ISV Partners

-   Second-Generation Managed Packages

    If you’re an ISV that develops apps and lists them on AppExchange, Salesforce recommends managed packages.

    Second-generation managed packaging (managed 2GP) ushers in a new way for AppExchange partners to develop, distribute, and manage their apps and metadata. You can use managed 2GP to organize your source, build small modular packages, integrate with your version control system, and better utilize your custom Apex code. You can execute all packaging operations via Salesforce CLI, or automate them using scripts.

    For more information on managed 2GP packages, see the [Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm).

-   First-Generation Managed Packages

    Similar to managed 2GP, managed 1GP packages are used by ISVs to distribute their business apps to customers via AppExchange.

    If you’re familiar with first-generation managed packages and want to learn more about how 1GP differs from 2GP, see [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

    For more information on managed 1GP packages, see [Create a First-Generation Managed Package using Salesforce DX](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_release.htm).


-   **[Build and Release Your App with Metadata API](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi.htm)**
    Develop and test your app in your sandboxes. Use Salesforce CLI or Salesforce Extensions for VS Code to retrieve and deploy your source. This development work flow is called the org development model.

## Related Topics

- Build and Release Your App with Metadata API (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi.htm)
