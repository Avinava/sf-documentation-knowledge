---
title: "Release an Unlocked Package"
domain: sfdx-dev
topic: release-an-unlocked-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.774Z
estimatedTokens: 235
keywords: [Release, Unlocked, Package, new, version, marked, beta, created, develop, may, several, versions, ready, released, installed]
---

# Release an Unlocked Package

> Each new package version is marked as beta when its created. As you develop your
        package, you may create several package versions before you create a version that is ready
        to be released and installed in production orgs.

# Release an Unlocked Package

Each new package version is marked as beta when its created. As you develop your package, you may create several package versions before you create a version that is ready to be released and installed in production orgs.

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

You can promote and release only once for each package version number, and you can’t undo this change.

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
Created Date                    2018-05-08 09:48
Installation URL
https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000NPbBIAW
```
