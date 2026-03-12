---
title: "Next Steps"
domain: sfdx-setup
topic: next-steps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.205Z
estimatedTokens: 1404
keywords: [Steps, you’ve, installed, Salesforce, CLI, Development, Pathways]
---

# Next Steps

> Read on to learn what to do after you’ve installed Salesforce CLI.

# Next Steps

Read on to learn what to do after you’ve installed Salesforce CLI.

Check out the examples in the [Sample Gallery](https://developer.salesforce.com/code-samples-and-sdks "HTML (New Window)"). The gallery contains sample apps that show what you can build on the Salesforce platform. They’re continuously updated to incorporate the latest features and best practices.

Ramp up quickly on Salesforce CLI with the [Quick Start: Salesforce DX](https://trailhead.salesforce.com/en/content/learn/projects/quick-start-salesforce-dx) Trailhead project. Then dive right into development with the [Build Apps Together with Package Development](https://trailhead.salesforce.com/en/content/learn/trails/sfdx_get_started) trail.

Looking for a more visual developer experience? We got you covered! Check out [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode), which is built on Salesforce CLI.

Read the Salesforce DX documentation:

-   Salesforce DX Developer Guide to learn how to manage and develop apps on the Salesforce Platform across their entire lifecycle.
-   Salesforce CLI Command Reference for the complete list of CLI commands and how to use them.
-   Salesforce CLI Plugin Developer Guide to learn how to develop your own plugins for Salesforce CLI.

## Development Pathways

Salesforce CLI is a powerful tool that you can use to develop applications in many different ways. Here are some common pathways, with the required steps to get you started and suggestions on what to do next.

**Get Started: Use Scratch Orgs for Development**

A scratch org is a source-driven and disposable deployment of Salesforce code and metadata. Scratch orgs drive developer productivity and collaboration during the development process, and facilitate automated testing and continuous integration.

1.  As the Admin user, [enable Dev Hub](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm) in your Developer Edition, trial, or production org (if you're a customer), or your business org (if you're an AppExchange partner).

    If you don’t have an org, sign up for a free [Developer Edition org](https://developer.salesforce.com/promotions/orgs/dx-signup) on the Salesforce Developers website.

2.  If you want your dev team to create scratch orgs, [add them to your Dev Hub org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm).
3.  (Optional) [Turn on Einstein Features in your Dev Hub](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_einstein.htm) to eliminate the manual steps for enabling the chatbot feature in scratch orgs.
4.  [Clone a sample Salesforce DX project from GitHub and try out the most common CLI commands.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm) Then check out the Salesforce DX Developer Guide and learn about Salesforce DX project configuration, scratch orgs, synchronizing your code, and other developer topics.

**Get Started: Develop Second-Generation Managed Packages**

As an AppExchange partner, use second-generation managed packaging (2GP) to organize your source, build small modular packages, integrate with your version control system, and better use your custom Apex code.

1.  As the Admin user, [enable Dev Hub](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm) in your Developer Edition, trial, or production org (if you're a customer), or your business org (if you're an AppExchange partner).

    If you don’t have an org, sign up for a free [Developer Edition org](https://developer.salesforce.com/promotions/orgs/dx-signup) on the Salesforce Developers website.

2.  In the Dev Hub, [enable Second-Generation Packaging](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_secondgen_pkg.htm).
3.  If you want your dev team to create 2GP managed packages [add them to your Dev Hub org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm).
4.  Read all about 2GP managed packages and how to create them in the Salesforce DX Developer Guide.

**Get Started: Use a Sandbox**

Sandboxes are copies of your Salesforce org that you can use for development, testing, and training, without compromising the data and applications in your production org. You can turn on source tracking in your production org so Developer and Developer Pro sandboxes automatically track changes between the production org and your local development workspace.

1.  [Enable source tracking in your sandbox.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_source_tracking_sandboxes.htm)
2.  Learn how to use Salesforce CLI to create, manage, and develop with sandboxes by reading the Salesforce DX Developer Guide.

#### See Also

-   [*Salesforce DX Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev "Salesforce DX Developer Guide - HTML (New Window)")

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

-   [*Salesforce CLI Plugin Developer Guide*](https://github.com/salesforcecli/cli/wiki/Quick-Introduction-to-Developing-sf-Plugins "Salesforce CLI Plugin Developer Guide - HTML (New Window)")
