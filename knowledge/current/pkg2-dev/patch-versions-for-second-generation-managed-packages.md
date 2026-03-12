---
title: "Patch Versions for Second-Generation Managed Packages"
domain: pkg2-dev
topic: patch-versions-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.022Z
estimatedTokens: 952
keywords: [Patch, Versions, Second-Generation, Managed, Packages, way, fix, small, issues, package, introducing, major, feature, changes, Customers]
---

# Patch Versions for Second-Generation Managed Packages

> Patch versions are a way to fix small issues with your second-generation managed
    package without introducing major feature changes. Customers who are using an older version of
    your package can install a patch and not be forced to upgrade to a new major package
    version.

# Patch Versions for Second-Generation Managed Packages

Patch versions are a way to fix small issues with your second-generation managed package without introducing major feature changes. Customers who are using an older version of your package can install a patch and not be forced to upgrade to a new major package version.

Package versions follow a major.minor.patch.build number format. Any package version number that contains a non-zero patch number is a patch version. For example, 1.1.2.5 is a patch version, but 1.1.0.4 isn’t.

Patch versions are intended for small changes like a fixing a bug. You can’t:

-   Add package components.
-   Delete existing package components.
-   Change the API and dynamic Apex access controls.
-   Deprecate any Apex code.
-   Add new Apex class relationships, such as extends.
-   Add Apex access modifiers, such as virtual or global.
-   Add features, settings, package dependencies, or web services.
-   Change a component from protected to global.
-   Change the visibility of CustomSettings or CustomMetadataType from protected to public.

When creating a patch version, you must specify the package ancestor. The major and minor numbers of the patch version and the package ancestor must match. And the specified package ancestor must be managed-released.

You can specify another patch version as the package ancestor of a patch version. But you can’t specify a patch version as a direct ancestor of a non-patch version. Instead, use the [keyword](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_keywords.htm) “ancestorVersion" : "HIGHEST”, or specify a non-patch version as the ancestor.

Installed patch versions inherit the upgrade path of the non-patch version with the same major and minor number. For example, patch version 1.0.3 has the same upgrade path as 1.0.0. See [Specify a Package Ancestor in the Project File for a Second-Generation Managed Package](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm "When you create a second-generation managed package version you specify a package ancestor in your sfdx-project.json file. We require that the package ancestor you specify is the highest promoted package version number for that package. You can either update the ancestor version number each time you create a package version, or you can use a keyword.") for more information about how to specify a package ancestor.

When you create a patch version, the patch automatically inherits the features and settings defined in the package ancestor’s scratch org definition file. To create a patch, follow the same steps as you do when you create a package version, and increment the patch number.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

To enable patch versioning, log a case with [Salesforce Partner Support](atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm "Certain packaging features can only be enabled by Salesforce Partner Support.") and request that patch versioning be enabled in the org where you created the namespace for this package. Patch versioning is available to only to packages that have passed AppExchange security review.

#### See Also

-   [Specify a Package Ancestor in the Project File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm "Specify a Package Ancestor in the Project File for a Second-Generation Managed Package - HTML (New Window)")

-   [Second-Generation Managed Packaging Keywords](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_keywords.htm "Second-Generation Managed Packaging Keywords - HTML (New Window)")

## Related Topics

- Specify a Package Ancestor in the Project File for a Second-Generation Managed Package (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_ancestors.htm)
- Salesforce Partner Support (atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm)
