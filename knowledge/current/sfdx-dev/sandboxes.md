---
title: "Sandboxes"
domain: sfdx-dev
topic: sandboxes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.361Z
estimatedTokens: 658
keywords: [Sandboxes, copies, Salesforce, org, development, testing, training, compromising, data, applications, production]
---

# Sandboxes

> Sandboxes are copies of your Salesforce org that you can use for development, testing,
  and training, without compromising the data and applications in your production org.

# Sandboxes

Sandboxes are copies of your Salesforce org that you can use for development, testing, and training, without compromising the data and applications in your production org.


| User Permissions Needed |
| --- |
| To view a sandbox: | View Setup and Configuration |
| To create, refresh, activate, and delete a sandbox: | Manage Dev Sandboxes (Developer or Developer Pro only) or Manage Sandboxes (all sandbox types) |

Salesforce offers sandboxes and a set of deployment tools, so you can:

-   Isolate customization and development work from your production environment until you’re ready to deploy changes.
-   Test changes against copies of your production data and users.
-   Provide a training environment.
-   Coordinate individual changes into one deployment to production.

Traditionally, you or your admin has created and managed your sandboxes through the Setup UI. But we realize that many developers want the ability to create and manage their developer and testing environments programmatically, and to automate their CI processes. Salesforce CLI enables you to do both.

Alternatives to sandboxes are scratch orgs and Developer Edition orgs, which are used as development environments for many Salesforce development use cases. If you’re wondering whether to use a sandbox, scratch org, or Developer Edition org as your development environment, you’re not alone. To help you better understand which to choose, see the Salesforce Developers Blog: [Choose the Right Salesforce Org for the Right Job](https://developer.salesforce.com/blogs/2024/05/choose-the-right-salesforce-org-for-the-right-job).

-   **[Authorize Your Production Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_prod_org.htm)**
    JWT and Web-based flows require a production org with sandbox licenses instead of a Dev Hub. However, it’s OK if your production org is also a Dev Hub org.
-   **[Create a Sandbox Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm)**
    Before you can create a sandbox using Salesforce CLI, define the configuration for it in a sandbox definition file. The sandbox definition file is a blueprint for the sandbox. You can create different definition files for each sandbox type that you use in the development process.
-   **[Create, Clone, or Refresh a Sandbox](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_create_clone_sandboxes.htm)**
    Create a sandbox to use for development, testing, or training. Clone a sandbox to copy its data and metadata to another sandbox. Refresh an existing sandbox to get the latest metadata, and sometimes data, from the source org.

## Related Topics

- Authorize Your Production Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_prod_org.htm)
- Create a Sandbox Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm)
- Create, Clone, or Refresh a Sandbox (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_create_clone_sandboxes.htm)
