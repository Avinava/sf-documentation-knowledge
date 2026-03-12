---
title: "Considerations for Promoting Packages with Dependencies"
domain: pkg2-dev
topic: considerations-for-promoting-packages-with-dependencies
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:26.074Z
estimatedTokens: 1003
keywords: [Considerations, Promoting, Packages, Dependencies, company, developing, package, dependency, ask, yourself, questions, releasing, new, version, Specifying]
---

# Considerations for Promoting Packages with Dependencies

> If your company is developing a package that has a package dependency, ask yourself
  these questions before promoting  (releasing) a new package version.

# Considerations for Promoting Packages with Dependencies

If your company is developing a package that has a package dependency, ask yourself these questions before promoting (releasing) a new package version.

Are you:

-   Developing the base and extension package in parallel?
-   Specifying skip validation when creating new package versions?
-   Using the keywords LATEST or RELEASED when specifying the package dependency?

If you answered no to all these questions, your package doesn't have any tricky dependency scenarios and you can promote it when it's ready. If you answered yes to any of these questions, keep reading.

## Specifying Skip Validation

When you create a package version and specify [skip validation](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver.htm), the version is created without validating dependencies, package ancestors, or metadata.

If you develop your base package using skip validation, test your extension package using either a stable and previously promoted version of the base package, or a non-skip validated base package version.

Most importantly, if you’re developing a version of your base package and extension package in parallel, ensure that you:

-   First promote the base package version.
-   Then specify the promoted package version in the dependency section of your extension package using the keyword RELEASED.
-   Finally, create the extension package version.

After testing the extension package version, you then promote it. This process ensures that the extension package version that you promote to the released state has as its dependency the promoted base package version.

## Using the Keyword LATEST or RELEASED

A keyword is a variable that you can use to specify a package version number. The keyword LATEST maps to the most recently created package version, which might not be the same as the promoted and released package version.

The keyword RELEASED maps to the promoted and released package version.

For example: If you create versions 1.0.0.1, 1.0.0.2, and 1.0.0.3, and promote version 1.0.0.2, then 1.0.0.RELEASED = 1.0.0.2, but 1.0.0.LATEST = 1.0.0.3.

## Example

Your company created a base package called PkgBase, and an extension package called PkgExtn.

PkgBase is under active development, and the development team is creating versions that specify \--skip-validation.

PkgExtn version 2.3 is under active development and references its dependency on PkgBase by using the following definition in the sfdx-project.json.

```

```

Before promoting version 2.3 of PkgExtn, you must test it using the promoted version 1.1.0 of PkgBase. Update the PkgExtn dependency section of your sfdx-project.json and change the dependency from 1.1.0.LATEST to 1.1.0.RELEASED. If the tests succeed, then create a new version of PkgExtn and ensure it works as expected with the promoted base package version.

#### See Also

-   [Create and Update Versions of a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver.htm "Create and Update Versions of a Second-Generation Managed Package - HTML (New Window)")

-   [Get Ready to Promote and Release a Second-Generation Managed Package Version](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_get_ready_promote.htm "Get Ready to Promote and Release a Second-Generation Managed Package Version - HTML (New Window)")

-   [Create Dependencies Between Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_dependencies.htm "Create Dependencies Between Second-Generation Managed Packages - HTML (New Window)")

-   [Second-Generation Managed Packaging Keywords](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_config_keywords.htm "Second-Generation Managed Packaging Keywords - HTML (New Window)")

## Code Examples

```
{
         "path": "pkg-extension",
         "default": false,
         "package": "PkgExtn",
         "versionName": "v 2.3",
         "versionDescription": "Winter 2025",
         "versionNumber": "2.3.0.NEXT", 
         "dependencies": [
            {
               "package": "PkgBase",
               "versionNumber": "1.1.0.LATEST"

            },
```
