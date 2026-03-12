---
title: "Configure Unlocked Packages"
domain: sfdx-dev
topic: configure-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:18.739Z
estimatedTokens: 859
keywords: [Configure, Unlocked, Packages, include, entry, sfdx-project.json, file, package, specify, alias, version, dependencies, features, org, settings]
---

# Configure Unlocked Packages

> You include an entry in the sfdx-project.json file for each
        package to specify its alias, version details, dependencies, features, and org settings.
        From the command line, you can also set or change options, such as specifying an
        installation key, update the package name, or add a description.

# Configure Unlocked Packages

You include an entry in the sfdx-project.json file for each package to specify its alias, version details, dependencies, features, and org settings. From the command line, you can also set or change options, such as specifying an installation key, update the package name, or add a description.

-   **[Project Configuration File for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_file.htm)**
    The project configuration file is a blueprint for your project. The settings in the file create an outline of your package and determine the package attributes and package contents.
-   **[Unlocked Packaging Keywords](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_keywords.htm)**
    A keyword is a variable that you can use to specify a package version number.
-   **[Package Installation Key](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_installkey.htm)**
    To ensure the security of the metadata in your package, you must specify an installation key when creating a package version. Package creators provide the key to authorized subscribers so they can install the package. Package installers provide the key during installation, whether installing the package from the CLI or from a browser. An installation key is the first step during installation. The key ensures that no package information, such as the name or components, is disclosed until the correct installation key is supplied.
-   **[Extract Dependency Information from Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_extract_dependency_info.htm)**
    For an installed unlocked package, you can now run a simple SOQL query to extract its dependency information. You can also create a script to automate the installation of unlocked packages with dependencies.
-   **[Understanding Namespaces](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_plan_namespaces.htm)**
    A namespace is a 1-15 character alphanumeric identifier that distinguishes your package and its contents from other packages in your org.
-   **[Share Release Notes and Post-Install Instructions](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_release_note_urls.htm)**
    Share details about what’s new and changed in a released unlocked package with your users.
-   **[Specify Unpackaged Metadata or Apex Access for Apex Tests (Unlocked Packages)](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_unpackaged_md.htm)**

-   **[Best Practices for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_best_practices.htm)**
    We suggest that you follow these best practices when working with unlocked packages.
-   **[Package IDs and Aliases for Unlocked Packages](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_pkg_ids.htm)**
    During the package lifecycle, packages and package versions are identified by an ID or package alias. When you create a package or package version, Salesforce CLI creates a package alias based on the package name, and stores that name in the sfdx-project.json file. When you run CLI commands or write scripts to automate packaging workflows, it’s often easier to reference the package alias, instead of the package ID or package version ID.
-   **[Frequently Used Unlocked Packaging Operations](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_packaging_operations.htm)**

## Related Topics

- Project Configuration File for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_file.htm)
- Unlocked Packaging Keywords (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_keywords.htm)
- Package Installation Key (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_config_installkey.htm)
- Extract Dependency Information from Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_extract_dependency_info.htm)
- Understanding Namespaces (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_plan_namespaces.htm)
- Share Release Notes and Post-Install Instructions (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_release_note_urls.htm)
- Specify Unpackaged Metadata or Apex Access for Apex Tests (Unlocked Packages) (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_unpackaged_md.htm)
- Best Practices for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_best_practices.htm)
- Package IDs and Aliases for Unlocked Packages (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_pkg_ids.htm)
- Frequently Used Unlocked Packaging Operations (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_packaging_operations.htm)
