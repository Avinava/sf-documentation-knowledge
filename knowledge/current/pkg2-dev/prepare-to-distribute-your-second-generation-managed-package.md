---
title: "Prepare to Distribute Your Second-Generation Managed Package"
domain: pkg2-dev
topic: prepare-to-distribute-your-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:27.044Z
estimatedTokens: 691
keywords: [Prepare, Distribute, Second-Generation, Managed, Package, release, version, ensure, understand, code, coverage, requirements, logistics, how, publish]
---

# Prepare to Distribute Your Second-Generation Managed Package

> Before you release a version of your second-generation managed package, ensure that you
  understand the code coverage requirements, release logistics, and how to publish your app on
  AppExchange.

# Prepare to Distribute Your Second-Generation Managed Package

Before you release a version of your second-generation managed package, ensure that you understand the code coverage requirements, release logistics, and how to publish your app on AppExchange.

-   **[Code Coverage for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_code_coverage.htm)**
    Before you can release and distribute a second-generation managed package version on AppExchange, the Apex code must meet a minimum 75% code coverage requirement. And every Apex Trigger in a package needs test coverage.
-   **[Package Installation Key for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_installkey.htm)**
    To ensure the security of the metadata in your second-generation managed package, you must specify an installation key when creating a package version. Package creators provide the key to authorized subscribers so they can install the package. Package installers provide the key during installation, whether installing the package from the CLI or from a browser. An installation key is the first step during installation. The key ensures that no package information, such as the name or components, is disclosed until the correct installation key is supplied.
-   **[Release a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm)**
    Each new second-generation managed package version is marked as beta when created. As you develop your package, you may create several package versions before you create a version that is ready to be released and distributed. Only released package versions can be listed on AppExchange and installed in customer orgs.
-   **[Share Release Notes and Post-Install Instructions for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_release_note_urls.htm)**
    Share details with your subscribers about what’s new and changed in a released second-generation managed package.
-   **[Publishing Your App on AppExchange](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_publish_appexchange.htm)**
    If you’ve published a first-generation managed package, you’ll notice the process for publishing a second-generation managed package (managed 2GP) is different. After you link your Dev Hub org to the AppExchange partner console, all your released managed 2GP package versions are visible in the partner console.
-   **[Recommend a Specific Package Version to Your Subscribers](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_recommended_version.htm)**
    You can choose to recommend that your subscribers upgrade to a specific, released version of your package.

## Related Topics

- Code Coverage for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_code_coverage.htm)
- Package Installation Key for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_installkey.htm)
- Release a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm)
- Share Release Notes and Post-Install Instructions for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_release_note_urls.htm)
- Publishing Your App on AppExchange (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_publish_appexchange.htm)
- Recommend a Specific Package Version to Your Subscribers (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_recommended_version.htm)
