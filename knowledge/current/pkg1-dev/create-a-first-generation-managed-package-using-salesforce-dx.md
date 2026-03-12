---
title: "Create a First-Generation Managed Package using Salesforce
    DX"
domain: pkg1-dev
topic: create-a-first-generation-managed-package-using-salesforce-dx
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.709Z
estimatedTokens: 1203
keywords: [First-Generation, Managed, Package, Salesforce, you’re, ISV, want, build, bundle, components, application, piece, functionality, great, way]
---

# Create a First-Generation Managed Package using Salesforce
    DX

> If you’re an ISV, you want to build a managed package. A managed package is a bundle of
    components that make up an application or piece of functionality. A managed package is a great
    way to release an app for sale and to support licensing your features. You can protect
    intellectual property because the source code of many components isn’t available through the
    package. You can also roll out upgrades to the package.

# Create a First-Generation Managed Package using Salesforce DX

If you’re an ISV, you want to build a managed package. A managed package is a bundle of components that make up an application or piece of functionality. A managed package is a great way to release an app for sale and to support licensing your features. You can protect intellectual property because the source code of many components isn’t available through the package. You can also roll out upgrades to the package.

When you’re working with your production org, you create a .zip file of metadata components and deploy them through Metadata API. The .zip file contains:

-   A package manifest (package.xml) that lists what to retrieve or deploy
-   One or more XML components organized into folders

If you don’t have the packaged source already in the source format, you can retrieve it from the org and convert it using the CLI.

-   **[Enable Dev Hub and Second-Generation Managed Packaging](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_pkg_enable_devhub.htm)**
    The Dev Hub lets you create and manage second-generation managed packages and scratch orgs. Your Dev Hub is the designated place to find and manage all your managed 2GP packages, scratch orgs, and namespaces.
-   **[Limited Access License for Package Developers](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_pkg_slalf_pkg_dev.htm)**
    The Salesforce Limited Access - Free is designed for users whose role is to build customizations or applications. This license provides access to the Dev Hub, development tools, and environments. In the production org, this license restricts access to standard and custom objects. Partner Business Orgs (PBO) include 100 Salesforce Limited Access - Free user licenses.
-   **[Add a Limited Access User to Your Dev Hub Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_pkg_add_free_license_user.htm)**
    Provide your developers access to the Dev Hub and Salesforce DX development tools by adding a user with Salesforce Limited Access - Free license and the Limited Access user profile in your Dev Hub org. Then create and assign them a permission set to the required Dev Hub objects.
-   **[Link a Namespace to a Dev Hub Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_reg_namespace.htm)**
    To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.
-   **[Scratch Orgs and Package Development](atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_hub_intro.htm)**
    Scratch orgs are temporary Salesforce orgs intended for development and automation. They enable source-driven deployments of Salesforce code and metadata. A scratch org is fully configurable, allowing developers to emulate different Salesforce editions with various features and preferences.
-   **[Build and Release Your App with Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack.htm)**
    If you developed and tested your app, you’re well on your way to releasing it. Luckily, when it’s time to build and release an app as a managed package, you’ve got options. You can package an app you developed from scratch. If you’re experimenting, you can also build a sample app from Salesforce and emulate the release process.
-   **[Packaging Checklist](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_package_checklist.htm)**
    Ready to deploy your packaging metadata and start creating a package? Take a few minutes to verify that you covered the items in this checklist, and you’re good to go.
-   **[Deploy the Package Metadata to the Packaging Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_deploy.htm)**
    Before you deploy the package metadata into your packaging org, you convert from source format to metadata format.
-   **[Create a Beta Version of Your App](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_beta.htm)**
    Test your app in a scratch org, or share the app for evaluation by creating a beta version.
-   **[Install the Package in a Target Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_install.htm)**
    After you create a package with the CLI, install the package in a target org. You can install the package in any org you can authenticate, including a scratch org.
-   **[Create a Managed Package Version of Your App](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_create.htm)**
    After your testing is done, your app is almost ready to be published in your enterprise or on AppExchange. Generate a new managed package version in your Dev Hub org.
-   **[View Information About a Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_viewinfo.htm)**
    View the details about a specific package version, including its metadata package ID, package name, release state, and build number.

## Related Topics

- Enable Dev Hub and Second-Generation Managed Packaging (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_pkg_enable_devhub.htm)
- Limited Access License for Package Developers (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_pkg_slalf_pkg_dev.htm)
- Add a Limited Access User to Your Dev Hub Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_pkg_add_free_license_user.htm)
- Link a Namespace to a Dev Hub Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_reg_namespace.htm)
- Scratch Orgs and Package Development (atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_hub_intro.htm)
- Build and Release Your App with Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack.htm)
- Packaging Checklist (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_package_checklist.htm)
- Deploy the Package Metadata to the Packaging Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_deploy.htm)
- Create a Beta Version of Your App (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_beta.htm)
- Install the Package in a Target Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_install.htm)
