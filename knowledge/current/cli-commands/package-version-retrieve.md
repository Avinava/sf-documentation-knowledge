---
title: "package version retrieve"
domain: cli-commands
topic: package-version-retrieve
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, retrieve, Retrieve, metadata, specified, version., Package, retrieved, only, second-generation, managed, versions, unlocked, packages., Description, Examples, Flags]
---

# package version retrieve

> Retrieve package metadata for a specified package version. Package metadata can be retrieved for only second-generation managed package versions or unlocked packages.

## package version retrieve

Retrieve package metadata for a specified package version. Package metadata can be retrieved for only second-generation managed package versions or unlocked packages.

### Description for package version retrieve

Retrieving a package version downloads the metadata into the directory you specify.

When you run this command, specify the subscriber package version ID (starts with 04t) and the path to an empty directory.

By default, the package version retrieve command is available to 2GP managed packages that were converted from 1GP. To use this command with a managed package created using 2GP (not converted from 1GP) or with an unlocked package, specify IsDevUsePkgZipRequested = true in the Package2VersionCreateRequest Tooling API object. If you run this command and the zip folder with the package version’s source files is missing, confirm that IsDevUsePkgZipRequested is set to true.

### Examples for package version retrieve

Retrieve package metadata for a converted subscriber package version ID (starts with 04t) into my-directory/ within your Salesforce DX project directory:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\-p | \--package PACKAGE

Required

Subscriber package version ID (starts with 04t).

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Path within your Salesforce DX project directory in which to download the metadata. This directory must be empty.

Type: option

Default value: force-app