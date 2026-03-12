---
title: "Simplify Unlocked Package Development by Creating and Specifying an Org Shape"
domain: sfdx-dev
topic: simplify-unlocked-package-development-by-creating-and-specifying-an-org-shape
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.819Z
estimatedTokens: 301
keywords: [Simplify, Unlocked, Package, Development, Creating, Specifying, Org, Shape, package’s, metadata, depends, complex, features, settings, licenses]
---

# Simplify Unlocked Package Development by Creating and Specifying an Org Shape

> If your package’s metadata depends on a complex set of features,
      settings, or licenses, it can be difficult to declaratively specify these dependencies in a
      scratch org definition file. Instead, create an org shape of your production org, or another
      development org, and specify that source org’s ID in your scratch org definition file. During
      package creation, we mimic the source org’s environment when we build and validate your
      package’s metadata.

# Simplify Unlocked Package Development by Creating and Specifying an Org Shape

If your package’s metadata depends on a complex set of features, settings, or licenses, it can be difficult to declaratively specify these dependencies in a scratch org definition file. Instead, create an org shape of your production org, or another development org, and specify that source org’s ID in your scratch org definition file. During package creation, we mimic the source org’s environment when we build and validate your package’s metadata.

Before using this feature, get familiar with how [Org Shape for Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm "HTML (New Window)") works.

Then [enable the scratch org setting](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_enable_org_shape.htm "HTML (New Window)") in your source org, [generate the org shape](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_create_shape.htm "HTML (New Window)"), and edit your scratch org definition file to include the org name and 15-character source org ID.

```

```

## Code Examples

```
{
  "orgName": "Acme",
  "sourceOrg": "00DB1230400Ifx5"
}
```
