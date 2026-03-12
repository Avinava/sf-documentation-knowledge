---
title: "How Scratch Orgs Fit in the Package Development Workflow"
domain: pkg2-dev
topic: how-scratch-orgs-fit-in-the-package-development-workflow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.102Z
estimatedTokens: 1038
keywords: [How, Scratch, Orgs, Fit, Package, Development, Workflow, essential, tool, developing, testing, app, want, help, continuous]
---

# How Scratch Orgs Fit in the Package Development Workflow

> Scratch orgs are an essential tool in both developing and testing the app you want to
    package. Scratch orgs also help with continuous integration (CI) processes to automate package
    development steps. For example, you could write a script that creates a package version, creates
    a scratch org, installs the package version into the scratch org, runs Apex tests, and emails
    the test results to the release manager.

# How Scratch Orgs Fit in the Package Development Workflow

Scratch orgs are an essential tool in both developing and testing the app you want to package. Scratch orgs also help with continuous integration (CI) processes to automate package development steps. For example, you could write a script that creates a package version, creates a scratch org, installs the package version into the scratch org, runs Apex tests, and emails the test results to the release manager.

## Develop Your Package in a Scratch Org

When developing a package, it’s preferable to use a namespaced scratch org. A namespaced scratch org prepends scratch org metadata with the package namespace. This is true for both metadata you create in the scratch org, and any metadata you deploy to the scratch org.

To create a namespaced scratch org, use your Dev Hub org to create the scratch org. Before you create the scratch org:

-   Ensure that the namespace you plan to use is already [associated with your Dev Hub org](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_reg_namespace.htm).
-   Specify the namespace in your sfdx-project.json file.
-   Create a [scratch org definition file](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm) and include any features, settings, or limits that your org needs.

When you create a scratch org both the namespace and ancestry information listed in sfdx-project.json file are pulled into the scratch org. The ancestry information, specified as ancestorId or ancestorVersion in your sfdx-project.json file, seeds the scratch org with manageability rules, and later warns you if you attempt to change metadata in a way that's incompatible with the specified ancestor version. This way, you learn of issues during development instead of during the creation of the next package version.

To create a namespaced scratch org that includes ancestor information in the scratch org, run this CLI command.

```

```

If you don’t want the ancestor and manageability rules seeded into the scratch org, include the \--no-ancestors flag when you create the scratch org.

When you are ready to create a new package version, see [Create Versions of a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver.htm).

## Test Your Package in a Scratch Org

When testing your package, create a scratch org that doesn’t have a namespace. Use the \--no-namespace parameter when you create the scratch org.

```

```

After you create the scratch org, [install the package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_cli.htm) into the scratch org, and begin testing.

## Enable Data Cloud for Scratch Orgs

To use Data Cloud components in scratch orgs or to add these components to a package, Data Cloud for Scratch Orgs must be enabled. Log a case with [Salesforce Partner Support](https://partners.salesforce.com/) and request that Data Cloud for Scratch Orgs be enabled on your Partner Business Org. Data Cloud for Scratch Orgs is only available to scratch orgs associated with the Dev Hub in your Partner Business Org.

#### See Also

-   [*Salesforce DX Developer Guide*: Create Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Salesforce DX Developer Guide: Create Scratch Orgs - HTML (New Window)")

-   [*Salesforce CLI Command Reference*: org create scratch](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_create_scratch_unified "Salesforce CLI Command Reference: org create scratch - HTML (New Window)")

-   [*Salesforce DX Developer Guide*: Select the Salesforce Release for a Scratch Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_version_selection.htm "Salesforce DX Developer Guide: Select the Salesforce Release for a Scratch Org - HTML (New Window)")

## Code Examples

```
sf org create scratch --target-dev-hub MyHub --definition-file config/project-scratch-def.json
```

```
sf org create scratch --definition-file config/project-scratch-def.json --no-namespace --no-ancestors
```
