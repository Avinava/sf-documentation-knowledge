---
title: "Develop Unlocked Packages"
domain: sfdx-dev
topic: develop-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.763Z
estimatedTokens: 828
keywords: [Develop, Unlocked, Packages, package, top-level, container, holds, app, associated]
---

# Develop Unlocked Packages

> A package is a top-level container that holds important details about the app or
        package: the package name, description, and associated namespace.

# Develop Unlocked Packages

A package is a top-level container that holds important details about the app or package: the package name, description, and associated namespace.

You supply the package details in the package descriptor section of your sfdx-project.json project configuration file.

-   **[Create and Update an Unlocked Package](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_base.htm)**
    When you’re ready to test or share your package, use the sf package create command to create a package.
-   **[Create New Versions of an Unlocked Package](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver.htm)**
    A package version is a fixed snapshot of the package contents and related metadata. The package version lets you manage changes and track what’s different each time you release or deploy a specific set of changes.
-   **[Guidance for Package Version Numbering](atlas.en-us.sfdx_dev.meta/sfdx_dev/dev2gp_version_guidance.htm)**
    Use package versions to evolve your managed package, and release subsequent package versions without breaking existing package users. Every package version is a fixed snapshot of the package contents and related metadata.
-   **[Code Coverage for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_code_coverage.htm)**
    Before you can promote and release an unlocked package, the Apex code must meet a minimum 75% code coverage requirement. You can install package versions that don't meet code coverage requirements only in scratch orgs and sandboxes.
-   **[Considerations for Promoting Packages with Dependencies](atlas.en-us.sfdx_dev.meta/sfdx_dev/dev2gp_considerations_pkg_dependency.htm)**
    If your company is developing a package that has a package dependency, ask yourself these questions before promoting (releasing) a new package version.
-   **[Release an Unlocked Package](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver_promote.htm)**
    Each new package version is marked as beta when its created. As you develop your package, you may create several package versions before you create a version that is ready to be released and installed in production orgs.
-   **[Update an Unlocked Package Version](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver_update.htm)**
    You can update most properties of a package version from the command line. For example, you can change the package version name or description. One important exception is that you can’t change the release status.
-   **[Hard-Deleted Components in Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_hard_deleted_components.htm)**
    When these components are removed from an unlocked package, they're hard deleted from the target install org during the package upgrade.
-   **[Delete an Unlocked Package or Package Version](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_package_deletion.htm)**
    Use the sf package version delete and sf package delete to delete packages and package versions that you no longer need.
-   **[View Package Details](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_view_pkg_details.htm)**
    View the details of previously created packages and package versions from the command line.

## Related Topics

- Create and Update an Unlocked Package (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_base.htm)
- Create New Versions of an Unlocked Package (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver.htm)
- Guidance for Package Version Numbering (atlas.en-us.sfdx_dev.meta/sfdx_dev/dev2gp_version_guidance.htm)
- Code Coverage for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_code_coverage.htm)
- Considerations for Promoting Packages with Dependencies (atlas.en-us.sfdx_dev.meta/sfdx_dev/dev2gp_considerations_pkg_dependency.htm)
- Release an Unlocked Package (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver_promote.htm)
- Update an Unlocked Package Version (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create_pkg_ver_update.htm)
- Hard-Deleted Components in Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_hard_deleted_components.htm)
- Delete an Unlocked Package or Package Version (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_package_deletion.htm)
- View Package Details (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_view_pkg_details.htm)
