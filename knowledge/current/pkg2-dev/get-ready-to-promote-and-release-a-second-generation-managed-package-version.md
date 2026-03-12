---
title: "Get Ready to Promote and Release a Second-Generation Managed Package Version"
domain: pkg2-dev
topic: get-ready-to-promote-and-release-a-second-generation-managed-package-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.060Z
estimatedTokens: 774
keywords: [Ready, Promote, Release, Second-Generation, Managed, Package, Version, now, it’s, likely, you’ve, already, created, different, versions]
---

# Get Ready to Promote and Release a Second-Generation Managed Package Version

> By now it’s likely that you’ve already created many different versions of your managed
  2GP package and tested them. When you have a package version that you're ready to distribute,
  promoting the package version is the next step.

# Get Ready to Promote and Release a Second-Generation Managed Package Version

By now it’s likely that you’ve already created many different versions of your managed 2GP package and tested them. When you have a package version that you're ready to distribute, promoting the package version is the next step.

Each package version you create is a beta version, unless you promote it to the managed-released state. Beta versions can be installed in only scratch orgs and sandboxes. After you install a beta version into an org, you can’t later upgrade that installed beta version. Keep this in mind when you select which org to install and test your beta package version. If you use this sandbox as part of your release pipeline, then using a disposable scratch org is a better option to test your beta package.

A beta package version must pass a 75% code coverage requirement before it can be promoted. To learn more, see [Code Coverage for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_code_coverage.htm "HTML (New Window)").

To promote a package version to the released state, run the sf package version promote Salesforce CLI command. For step-by-step instructions on promoting a package version, see [Release a Second Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm "HTML (New Window)").

After a package version is promoted, you can install it in either a production org or development orgs, and can be distributed to your customers.

For every minor package version, you can promote only one beta version. For example, if you create several beta versions of package version 2.3, only one of those versions can be promoted. After promoting package version 2.3, start your new development using version number 2.4.

After a package version is promoted to the released state, you can't reverse the promotion. If you discover you don’t want to distribute a version you promoted, you can’t reverse that version back to the beta state. To ensure that that version isn’t inadvertently shared and installed in a customer org, we recommend you use the sf package version update Salesforce CLI command and set the installation key to something cryptic and difficult to guess.

#### See Also

-   [Considerations for Promoting Packages with Dependencies](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_considerations_pkg_dependency.htm "Considerations for Promoting Packages with Dependencies - HTML (New Window)")

-   [Release a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver_promote.htm "Release a Second-Generation Managed Package - HTML (New Window)")

-   [Code Coverage for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_code_coverage.htm "Code Coverage for Second-Generation Managed Packages - HTML (New Window)")
