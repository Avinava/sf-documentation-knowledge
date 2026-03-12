---
title: "Scratch Org Definition Files vs Org Shape in Package Development"
domain: pkg2-dev
topic: scratch-org-definition-files-vs-org-shape-in-package-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.105Z
estimatedTokens: 1101
keywords: [Scratch, Org, Definition, Files, Shape, Package, Development, file, orgs, new, versions, blueprint, want, work, Build]
---

# Scratch Org Definition Files vs Org Shape in Package Development

> The scratch org definition file is used when you create scratch orgs, and also when you
    create new package versions. The scratch org definition file is a blueprint for your scratch org
    and defines the shape of the org you want for your package development work.

# Scratch Org Definition Files vs Org Shape in Package Development

The scratch org definition file is used when you create scratch orgs, and also when you create new package versions. The scratch org definition file is a blueprint for your scratch org and defines the shape of the org you want for your package development work.

## Build Your Own Scratch Definition File

If you read [How Scratch Orgs Fit in the Package Development Workflow](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_how_fit_pkg_dev.htm "Scratch orgs are an essential tool in both developing and testing the app you want to package. Scratch orgs also help with continuous integration (CI) processes to automate package development steps. For example, you could write a script that creates a package version, creates a scratch org, installs the package version into the scratch org, runs Apex tests, and emails the test results to the release manager.") you might recall that the CLI command for creating scratch orgs includes a flag called \--definition-file.

```

```

In this example, project-scratch-def.json is the scratch org definition file. To learn more about what can be specified in this definition file, see [Build Your Own Scratch Org Definition File](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm) in the Salesforce DX Developer Guide.

Similarly the CLI \--definition-file flag can be used when creating a new package version.

```

```

When used in the package version create command, the scratch org definition file is used to specify the features, settings, or limits that your package requires.

## When to Use Org Shape

If you're developing managed packages to distribute on AppExchange, we expect that you know what features and settings your packages depends on, and expect you to specify these requirements in a scratch org definition file. But there are scenarios like unlocked packages, or if you're moving from 1GP to 2GP package development, where using [Org Shape for Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm) can be useful.

During org shape creation, we capture the features, settings, edition, licenses, and limits of the specified source org. By using org shape you don’t have to manually list these items in the scratch org definition file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

The source org you use for org shape can’t be a sandbox or scratch org.

Later when you create a package version, specify the org ID for the source org in the scratch org definition file.

```

```

For more detailed instructions on enabling and creating org shape, review [Create a Scratch Org Based on an Org Shape](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm) in the Salesforce DX Developer Guide.

If you’re moving from managed 1GP package development to 2GP package development, creating an org shape of your 1GP packaging org could be useful as you begin 2GP package development. Creating an org shape of your 1GP packaging org ensures that the features required for your package metadata are specified.

#### See Also

-   [How Scratch Orgs Fit in the Package Development Workflow](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_how_fit_pkg_dev.htm "Scratch orgs are an essential tool in both developing and testing the app you want to package. Scratch orgs also help with continuous integration (CI) processes to automate package development steps. For example, you could write a script that creates a package version, creates a scratch org, installs the package version into the scratch org, runs Apex tests, and emails the test results to the release manager.")

-   [*Salesforce DX Developer Guide*: Build Your Own Scratch Org Definition File](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm "Salesforce DX Developer Guide: Build Your Own Scratch Org Definition File - HTML (New Window)")

-   [*Salesforce DX Developer Guide*: Create a Scratch Org Based on an Org Shape](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm "Salesforce DX Developer Guide: Create a Scratch Org Based on an Org Shape - HTML (New Window)")

## Code Examples

```
sf org create scratch --target-dev-hub MyHub --definition-file config/project-scratch-def.json
```

```
sf package version create --package "Expenser App" 
--definition-file config/project-scratch-def.json --code-coverage
```

```
{
  "orgName": "Acme",
  "sourceOrg": "00DB1230400Ifx5"
}
```

## Related Topics

- How Scratch Orgs Fit in the Package Development Workflow (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_how_fit_pkg_dev.htm)
