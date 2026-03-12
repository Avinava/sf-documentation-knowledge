---
title: "Test Your Converted Managed 2GP Package"
domain: pkg1-dev
topic: test-your-converted-managed-2gp-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.487Z
estimatedTokens: 327
keywords: [Test, Converted, Managed, 2GP, Package, migrate, subscribers, strongly, recommend, install, newly, new, scratch, org, functionality]
---

# Test Your Converted Managed 2GP Package

> Before you migrate your first subscribers, we strongly recommend you install your newly
  converted managed 2GP package into a new scratch org and test its functionality. If you prefer,
  you can also install the converted package in a sandbox, or developer edition org.

# Test Your Converted Managed 2GP Package

Before you migrate your first subscribers, we strongly recommend you install your newly converted managed 2GP package into a new scratch org and test its functionality. If you prefer, you can also install the converted package in a sandbox, or developer edition org.

1.  Create a scratch org. When creating your scratch org, be sure to include a scratch org definition file that includes any Salesforce features that your package depends on.

    ```

    ```

2.  Migrate the converted package.

    To verify the 04t ID of the converted package, run sf package version list and review the command output. Then run the package install command and specify the 04t ID. In this scenario, the package version is being migrated, not installed.

    Example:

    ```

    ```

    Next, explore your package and test its functionality. Make sure everything is operating as expected. Note that the converted package is a beta version.


During phase one you can convert your 1GP package, install the converted package in a scratch org, and try out package migration by using packages that are installed in scratch orgs. By testing these steps in a scratch org first, you can understand how package migration works, before migrating packages used by active customers.

## Code Examples

```
sf org create scratch --target-dev-hub MyHub --definition-file config/project-scratch-def.json
```

```
sf package install --package 04t...
```
