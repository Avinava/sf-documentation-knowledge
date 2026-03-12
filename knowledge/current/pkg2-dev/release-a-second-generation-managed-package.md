---
title: "Release a Second-Generation Managed Package"
domain: pkg2-dev
topic: release-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.034Z
estimatedTokens: 265
keywords: [Release, Second-Generation, Managed, Package, new, version, marked, beta, created, develop, may, several, versions, ready, released]
---

# Release a Second-Generation Managed Package

> Each new second-generation managed package version is marked as beta when created. As you
    develop your package, you may create several package versions before you create a version that
    is ready to be released and distributed. Only released package versions can be listed on
    AppExchange and installed in customer orgs.

# Release a Second-Generation Managed Package

Each new second-generation managed package version is marked as beta when created. As you develop your package, you may create several package versions before you create a version that is ready to be released and distributed. Only released package versions can be listed on AppExchange and installed in customer orgs.

Before you promote the package version, ensure that the user permission, **Promote a package version to released**, is enabled in the Dev Hub org associated with the package. Consider creating a permission set with this user permission, and then assign the permission set to the appropriate user profiles.

When you’re ready to release, use sf package version promote.

```

```

If the command is successful, a confirmation message appears.

```

```

After the update succeeds, view the package details.

```

```

Confirm that the value of the Released property is true.

```

```

You can promote and release only one time for each package version number, and you can’t undo this change.

## Code Examples

```
sf package version promote --package "Expense Manager@1.3.0-7"
```

```
Successfully promoted the package version, ID: 04tB0000000719qIAA to released.
```

```
sf package version report --package "Expense Manager@1.3.0.7"
```

```
=== Package Version
NAME                            VALUE
──────────────────────────────  ───────────────────
Name                            ver 1.0
Alias                           Expense Manager-1.0.0.5
Package Version Id              05iB0000000CaahIAC
Package Id                      0HoB0000000CabmKAC
Subscriber Package Version Id   04tB0000000NPbBIAW
Version                         1.0.0.5
Description                     update version
Branch
Tag                             git commit id 08dcfsdf
Released                        true
Created Date                    2021-05-08 09:48
Installation URL
https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000NPbBIAW
```
