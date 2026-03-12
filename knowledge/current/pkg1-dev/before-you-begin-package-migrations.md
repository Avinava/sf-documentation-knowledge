---
title: "Before You Begin Package Migrations"
domain: pkg1-dev
topic: before-you-begin-package-migrations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.483Z
estimatedTokens: 718
keywords: [Begin, Package, Migrations, you’ve, never, created, worked, managed, 2GP, packages, scratch, orgs, Salesforce, CLI, take]
---

# Before You Begin Package Migrations

> If you’ve never created or worked with managed 2GP packages, scratch orgs, or Salesforce
  CLI, take some time to learn more about Salesforce DX and second-generation managed
  packages.

# Before You Begin Package Migrations

If you’ve never created or worked with managed 2GP packages, scratch orgs, or Salesforce CLI, take some time to learn more about Salesforce DX and second-generation managed packages.

Review [Know Your Orgs for Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before_know_orgs.htm), [How Scratch Orgs Fit in the Package Development Workflow](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_how_fit_pkg_dev.htm), and [Before You Create Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_before.htm) and ensure you have enabled:

-   Dev Hub in your Partner Business Org
-   Second-Generation Managed Packaging in your Dev Hub

The [Second-Generation Managed Packages](https://trailhead.salesforce.com/content/learn/modules/second-generation-managed-packages) Trailhead module is a great resource to learn more about 2GP.

## Prerequisites for Package Conversion

Before starting package conversion, review the requirements regarding metadata support, API version, and managed-released versions. Ensure your package meets these criteria.

Metadata Support

If your 1GP package contains metadata that isn’t currently supported in 2GP packages, the package conversion fails. You can compare the metadata in your package against the [Metadata Coverage Report](https://developer.salesforce.com/docs/metadata-coverage) and ensure the metadata in your 1GP managed package is also supported in 2GP.

Alternatively, you can identify metadata issues by running the CLI package convert command. The package convert CLI command detects and reports back to you any 1GP metadata types that prevent the package from being converted to 2GP. Using the package convert CLI command in this way lets you quickly assess whether you have any packaged metadata that isn’t supported in 2GP. During package conversion, your original managed 1GP package isn’t altered. It’s safe to test out the conversion command, before you are ready to migrate your packages to 2GP.

If your package contains metadata that isn’t supported in managed 2GP, either remove the metadata from your package, or wait to convert the package until managed 2GP supports that metadata type.

API Version

You can convert first-generation managed packages created using API version 57 (Spring ’23) or higher.

Managed-Released Package Versions

You can convert managed-released package versions only.

User Permissions

Package conversion and migration require the second-generation managed packaging user permissions. See [Assign Second-Generation Managed Packaging User Permissions](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_user_permission.htm) for details.
