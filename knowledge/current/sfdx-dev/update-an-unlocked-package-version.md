---
title: "Update an Unlocked Package Version"
domain: sfdx-dev
topic: update-an-unlocked-package-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.776Z
estimatedTokens: 153
keywords: [Unlocked, Package, Version, command, line, change, exception, can’t, release, status]
---

# Update an Unlocked Package Version

> You can update most properties of a package version from the command line. For example,
  you can change the package version name or description. One important exception is that you can’t
  change the release status.

# Update an Unlocked Package Version

You can update most properties of a package version from the command line. For example, you can change the package version name or description. One important exception is that you can’t change the release status.

If the most recent package version has been released, increment either the major, minor, or patch version number for the next package version you create.

Package version numbers use the format major.minor.patch.build. For example, if you released package 1.0.0.2, you could use 1.1.0.0, 2.0.0.0, or 1.0.1.0 for the next package version.

Example:

```

```

## Code Examples

```
sf package version update --package "Your Package Alias"
```
