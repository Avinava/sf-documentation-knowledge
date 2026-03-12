---
title: "Develop Second-Generation Managed Packages"
domain: pkg2-dev
topic: develop-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.174Z
estimatedTokens: 770
keywords: [Develop, Second-Generation, Managed, Packages, Ready, started, package, new, versions]
---

# Develop Second-Generation Managed Packages

> Ready to get started? Create your first second-generation managed package, and then
  update and create new versions of your package.

# Develop Second-Generation Managed Packages

Ready to get started? Create your first second-generation managed package, and then update and create new versions of your package.

-   **[Create a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_base.htm)**
    A package is a top-level container that holds important details about the app or package: the package name, description, and associated namespace. When you’re ready to test or share your package, use the sf package create Salesforce CLI command to create a package.
-   **[View Package Details for a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_pkg_details.htm)**
    View the details of previously created second-generation managed packages from the command line.
-   **[Create Versions of a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver.htm)**
    A package version is a fixed snapshot of the package contents and related metadata. The package version is an installable, immutable artifact that lets you manage changes and track what’s different each time you release or deploy a specific set of changes.
-   **[Guidance for Package Version Numbering](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_version_guidance.htm)**
    Use package versions to evolve your managed package, and release subsequent package versions without breaking existing package users. Every package version is a fixed snapshot of the package contents and related metadata.
-   **[View Details about a Second-Generation Managed Package Version](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_pkg_ver.htm)**
    Retrieve details about second-generation managed package versions that are in progress, or have already been created.
-   **[Project Configuration File for a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm)**
    The project configuration file is a blueprint for your project. The settings in the file create an outline of your managed 2GP package and determine the package attributes and package contents.
-   **[Get Ready to Promote and Release a Second-Generation Managed Package Version](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_get_ready_promote.htm)**
    By now it’s likely that you’ve already created many different versions of your managed 2GP package and tested them. When you have a package version that you're ready to distribute, promoting the package version is the next step.
-   **[Specify a Package Ancestor in the Project File for a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm)**
    When you create a second-generation managed package version you specify a package ancestor in your sfdx-project.json file. We require that the package ancestor you specify is the highest promoted package version number for that package. You can either update the ancestor version number each time you create a package version, or you can use a keyword.

## Related Topics

- Create a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_base.htm)
- View Package Details for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_pkg_details.htm)
- Create Versions of a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver.htm)
- Guidance for Package Version Numbering (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_version_guidance.htm)
- View Details about a Second-Generation Managed Package Version (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_view_pkg_ver.htm)
- Project Configuration File for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm)
- Get Ready to Promote and Release a Second-Generation Managed Package Version (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_get_ready_promote.htm)
- Specify a Package Ancestor in the Project File for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm)
