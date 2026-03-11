---
title: "package convert"
domain: cli-commands
topic: package-convert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.318Z
keywords: [package, convert, Convert, managed-released, first-generation, managed, second-generation, package., Description, Examples, Flags, Aliases]
---

# package convert

> Convert a managed-released first-generation managed package into a second-generation managed package.

## package convert

Convert a managed-released first-generation managed package into a second-generation managed package.

### Description for package convert

The package conversion command automatically selects the latest released major.minor first-generation managed package version, and converts it into a second-generation managed package version.

Use --patch-version to specify a released patch version.

To retrieve details about a package version create request, including status and package version ID (04t), run "sf package version create report -i 08c...".

To protect the contents of your package and to prevent unauthorized installation of your package, specify the --installation-key flag.

To promote a package version to released, you must use the --code-coverage parameter. The package must also meet the code coverage requirements.

To list package version creation requests in the org, run "sf package version create list".

### Examples for package convert

Create a second-generation managed package version from the first-generation managed package with the specified ID and give it the installation key "password123"; uses your default Dev Hub org:

```

```

Similar to previous example, but uses the specified Dev Hub org:

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

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID (starts with 033) of the first-generation managed package to convert.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package.

Either an --installation-key value or the --installation-key-bypass flag is required.

Type: option

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a definition file that contains features and org preferences that the metadata of the package version depends on.

This definition file is similar to the scratch org definition file.

Type: option

\-x | \--installation-key-bypass

Optional

Bypass the installation key requirement.

If you bypass this requirement, anyone can install your package. Either an --installation-key value or the --installation-key-bypass flag is required.

Type: boolean

\-w | \--wait WAIT

Optional

Minutes to wait for the package version to be created.

Type: option

Default value: 0 minutes

\-m | \--seed-metadata SEED-METADATA

Optional

Directory containing metadata to be deployed prior to conversion.

The directory containing metadata that will be deployed on the build org prior to attempting package conversion.

Type: option

\--verbose

Optional

Display verbose command output.

Type: boolean

\-a | \--patch-version PATCH-VERSION

Optional

Specific released patch version to be converted.

Specify a released patch version as major.minor.patch to convert to a second-generation managed package version.

Type: option

\-c | \--code-coverage

Optional

Calculate and store the code coverage percentage by running the packaged Apex tests included in this package version.

Before you can promote and release a managed package version, the Apex code must meet a minimum 75% code coverage requirement.

Type: boolean

### Aliases for package convert

```

```