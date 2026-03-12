---
title: "Set Up Your Development Environment"
domain: pkg2-dev
topic: set-up-your-development-environment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.184Z
estimatedTokens: 737
keywords: [Development, Environment, Second-generation, managed, packaging, uses, Salesforce, developer, tools, Ensure, orgs, installed, enabled, Dev, Hub]
---

# Set Up Your Development Environment

> Second-generation managed packaging uses Salesforce DX developer tools. Ensure that you
  have the required tools and orgs installed and enabled.

# Set Up Your Development Environment

Second-generation managed packaging uses Salesforce DX developer tools. Ensure that you have the required tools and orgs installed and enabled.

You use these tools for managed 2GP package development.

-   [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm), a rich set of commands to execute different packaging operations like package creation and package install
-   A source control system of your choosing
-   A Dev Hub org
-   [Salesforce Extension for Visual Studio Code](https://developer.salesforce.com/tools/vscode/en/vscode-desktop/install) (optional), an IDE designed to facilitate the development of Salesforce components

## Use the Dev Hub to Keep Track of Package Development

Your Dev Hub is the designated place to find and manage all your managed 2GP packages, scratch orgs, and namespaces. After you enable the Dev Hub setting on a Salesforce org, that Dev Hub becomes the owner of every managed 2GP package you create.

All Salesforce ISV and OEM partners should designate their Partner Business Org as their Dev Hub org. A Partner Business Org (PBO) is the production org where Salesforce Partners run their business.

-   **[Enable Dev Hub and Second-Generation Managed Packaging](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm)**
    The Dev Hub lets you create and manage second-generation managed packages and scratch orgs. Your Dev Hub is the designated place to find and manage all your managed 2GP packages, scratch orgs, and namespaces.
-   **[Limited Access License for Package Developers](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_slalf_pkg_dev.htm)**
    The Salesforce Limited Access - Free is designed for users whose role is to build customizations or applications. This license provides access to the Dev Hub, development tools, and environments. In the production org, this license restricts access to standard and custom objects. Partner Business Orgs (PBO) include 100 Salesforce Limited Access - Free user licenses.
-   **[Add a Limited Access User to Your Dev Hub Org](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_add_free_license_user.htm)**
    Provide your developers access to the Dev Hub and Salesforce DX development tools by adding a user with Salesforce Limited Access - Free license and the Limited Access user profile in your Dev Hub org. Then create and assign them a permission set to the required Dev Hub objects.
-   **[Assign Second-Generation Managed Packaging User Permissions](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_user_permission.htm)**
    To create second-generation managed packages and scratch orgs, developers require access to the Dev Hub org. We recommend enabling the Dev Hub in your Partner Business Org (PBO). A Salesforce admin can create a permission set to grant appropriate permissions to the required Dev Hub objects and system permission.

## Related Topics

- Enable Dev Hub and Second-Generation Managed Packaging (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm)
- Limited Access License for Package Developers (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_slalf_pkg_dev.htm)
- Add a Limited Access User to Your Dev Hub Org (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_add_free_license_user.htm)
- Assign Second-Generation Managed Packaging User Permissions (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_user_permission.htm)
