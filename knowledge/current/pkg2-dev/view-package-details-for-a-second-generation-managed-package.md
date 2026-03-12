---
title: "View Package Details for a Second-Generation Managed
    Package"
domain: pkg2-dev
topic: view-package-details-for-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.162Z
estimatedTokens: 174
keywords: [View, Package, Second-Generation, Managed, previously, created, packages, command, line]
---

# View Package Details for a Second-Generation Managed
    Package

> View the details of previously created second-generation managed packages from the
    command line.

# View Package Details for a Second-Generation Managed Package

View the details of previously created second-generation managed packages from the command line.

To display a list of all packages in the Dev Hub org, use this command.

```

```

You can view the namespace, package name, ID, and other details in the output.

```

```

Include optional parameters to filter the list results based on the modification date, creation date, and to order by specific fields or package IDs. To limit the details, use \--concise.

To show expanded details, use \--verbose The verbose parameter displays these additional details.

-   Created By
-   Error Notification Username
-   Subscriber Package ID

## Code Examples

```
sf package list --target-dev-hub my-hub
```

```
Namespace Prefix  Name              Id                  Alias         Description  Type
───────────────   ────────────────  ──────────────────  ────────────  ───────────  ───────
db_exp_manager    Expenser App      0HoB00000004CzRKAU  Expenser App               Managed
db_exp_manager    Expenser Logic    0HoB00000004CzMKAU  Expenser Logic             Managed
db_exp_manager    Expenser Schema   0HoB00000004CzHKAU  Expenser Schema            Managed
```
