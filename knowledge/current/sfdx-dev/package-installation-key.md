---
title: "Package Installation Key"
domain: sfdx-dev
topic: package-installation-key
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.754Z
estimatedTokens: 367
keywords: [Package, Installation, Key, ensure, security, metadata, specify, creating, version, creators, provide, authorized, subscribers, they, install]
---

# Package Installation Key

> To ensure the security of the metadata in your package, you must specify an
    installation key when creating a package version. Package creators provide the key to authorized
    subscribers so they can install the package. Package installers provide the key during
    installation, whether installing the package from the CLI or from a browser. An installation key
    is the first step during installation. The key ensures that no package information, such as the
    name or components, is disclosed until the correct installation key is supplied.

# Package Installation Key

To ensure the security of the metadata in your package, you must specify an installation key when creating a package version. Package creators provide the key to authorized subscribers so they can install the package. Package installers provide the key during installation, whether installing the package from the CLI or from a browser. An installation key is the first step during installation. The key ensures that no package information, such as the name or components, is disclosed until the correct installation key is supplied.

To set the installation key, add the \--installation-key parameter to the command when you create the package version. This command creates a package and protects it with the installation key.

```

```

Supply the installation key when you install the package version in the target org.

```

```

## Change the Installation Key for an Existing Package Version

You can change the installation key for an existing package version with the sf package version update command.

```

```

## Create a Package Version Without an Installation Key

If you don’t require security measures to protect your package metadata, you can create a package version without an installation key.

```

```

## Check Whether a Package Version Requires an Installation Key

To determine whether a package version requires an installation key, use either the sf package version list or sf package version report CLI command.

## Code Examples

```
sf package version create --package "Expense Manager" --installation-key "JSB7s8vXU93fI"
```

```
sf package install --package "Expense Manager" --installation-key "JSB7s8vXU93fI”
```

```
sf package version update --package "Expense Manager@1.2.0-4" --installation-key “HIF83kS8kS7C”
```

```
sf package version create --package "Expense Manager" --directory common \
--tag 'Release 1.0.0' --installation-key-bypass
```
