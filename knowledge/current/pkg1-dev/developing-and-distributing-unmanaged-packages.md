---
title: "Developing and Distributing Unmanaged Packages"
domain: pkg1-dev
topic: developing-and-distributing-unmanaged-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.542Z
estimatedTokens: 411
keywords: [Developing, Distributing, Unmanaged, Packages, open-source, projects, developers, one-time, drop, applications, require, customization, installation]
---

# Developing and Distributing Unmanaged Packages

> Unmanaged packages can be used for distributing open-source projects to developers, or
  as a one-time drop of applications that require customization after installation.

# Developing and Distributing Unmanaged Packages

Unmanaged packages can be used for distributing open-source projects to developers, or as a one-time drop of applications that require customization after installation.

After the components are installed from an unmanaged package, they can be edited in the org they’re installed in. The developer who creates and uploads an unmanaged package has no control over the installed components, and can't change or upgrade them.

As a best practice, install an unmanaged package only if the org used to upload the package still exists. If that org is deleted, you may not be able to install the unmanaged package.

Don’t use unmanaged packages for sandbox to production migration. Instead, use the Salesforce Extensions for Visual Studio Code or the Ant Migration Tool. If you’re using Enterprise, Unlimited, or Performance Edition, see [Change Sets](https://help.salesforce.com/s/articleView?id=platform.changesets.htm&type=5&language=en_US).

-   **[Create and Upload an Unmanaged Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_uploading_unmanaged.htm)**
    Use the following procedure to upload an unmanaged package through the UI. You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the Tooling API Developer Guide.
-   **[Components Available in Unmanaged Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_unmanaged_components.htm)**
    Not all components can be packaged for distribution.
-   **[Convert Unmanaged Packages to Managed](atlas.en-us.pkg1_dev.meta/pkg1_dev/convert_to_managed_package.htm)**

## Related Topics

- Create and Upload an Unmanaged Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_uploading_unmanaged.htm)
- Components Available in Unmanaged Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_unmanaged_components.htm)
- Convert Unmanaged Packages to Managed (atlas.en-us.pkg1_dev.meta/pkg1_dev/convert_to_managed_package.htm)
