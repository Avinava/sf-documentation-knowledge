---
title: "View Package Details"
domain: sfdx-dev
topic: view-package-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.860Z
estimatedTokens: 174
keywords: [View, Package, previously, created, packages, versions, command, line]
---

# View Package Details

> View the details of previously created packages and package versions from the command
    line.

# View Package Details

View the details of previously created packages and package versions from the command line.

To display a list of all packages in the Dev Hub org, use this command.

```

```

You can view the namespace, package name, ID, and other details in the output.

```

```

Include optional parameters to filter the list results based on the modification date, creation date, and to order by specific fields or package IDs. To limit the details, use \--concise. To show expanded details, use \--verbose.

To display a list of all package versions in the Dev Hub org, use this command.

```

```

You can view the namespace, version name, and other details in the output.

```

```

## Code Examples

```
sf package list --target-dev-hub my-hub
```

```
Name              Id                  Alias           Description  Type
───────────────   ──────────────────  ──────────────  ───────────  ───────────  ───────
Expenser App      0HoB00000004CzRKAU  Expenser App                 Unlocked
Expenser Logic    0HoB00000004CzMKAU  Expenser Logic               Unlocked
Expenser Schema   0HoB00000004CzHKAU  Expenser Schema              Unlocked
```

```
sf package version list --target-dev-hub my-hub
```

```
Package Name      Namespace  Version  Sub Pkg Ver Id       Alias                    Installation Key  Released  
───────────────  ──────────  ───────  ───────────────────  ───────────────────────  ─────────────────  ───────
Expenser Schema              0.1.0.1  04tB0000000719qIAA   Expenser Schema@0.1.0-1   false             true
Expenser Schema              0.2.0.1  04tB000000071AjIAI   Expenser Schema@0.2.0-1   false             true
Expenser Schema              0.3.0.1  04tB000000071AtIAI   Expenser Schema@0.3.0-1   false             false
Expenser Schema              0.3.0.2  04tB000000071AyIAI   Expenser Schema@0.3.0-2   false             true
Expenser Schema              0.3.1.1  04tB0000000KGU6IAO   Expenser Schema@0.3.1-1   false             false
Expenser Schema              0.3.1.2  04tB0000000KGUBIA4   Expenser Schema@0.3.1-2   false             true
Expenser Schema              0.3.2.1  04tB0000000KGUQIA4   Expenser Schema@0.3.2-1   false             true
Expenser Logic               0.1.0.1  04tB0000000719vIAA   Expenser Logic@0.1.0-1    false             true
Expenser App                 0.1.0.1  04tB000000071A0IAI   Expenser App@0.1.0-1      false             true
```
