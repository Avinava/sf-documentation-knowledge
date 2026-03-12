---
title: "package1 Commands"
domain: cli-commands
topic: package1-commands
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T05:14:03.371Z
estimatedTokens: 1594
keywords: [package1, Commands, Create, first-generation, package, version, release, org., create, Description, Examples, Flags, Aliases, get, display, list]
---

# package1 Commands

> Create a first-generation package version in the release org.

# package1 Commands

Commands to develop first-generation managed and unmanaged packages.

-   **[package1 version create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm#cli_reference_package1_version_create_unified)**
    Create a first-generation package version in the release org.
-   **[package1 version create get](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm#cli_reference_package1_version_create_get_unified)**
    Retrieve the status of a package version creation request.
-   **[package1 version display](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm#cli_reference_package1_version_display_unified)**
    Display details about a first-generation package version.
-   **[package1 version list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm#cli_reference_package1_version_list_unified)**
    List package versions for the specified first-generation package or for the org.

## package1 version create

Create a first-generation package version in the release org.

### Description for package1 version create

The package version is based on the contents of the specified metadata package. Omit --managed-released if you want to create an unmanaged package version.

### Examples for package1 version create

Create a first-generation package version from the package with the specified ID and name the package version "example"; use your default org:

```

```

Same as previous example, but provide a description and wait for 30 minutes for the package version to be created; use the specified org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--package-id PACKAGE-ID

Required

ID of the metadata package (starts with 033) of which you’re creating a new version.

Type: option

\-n | \--name NAME

Required

Package version name.

Type: option

\-d | \--description DESCRIPTION

Optional

Package version description.

Type: option

\-v | \--version VERSION

Optional

Package version in major.minor format, for example, 3.2.

Type: option

\-m | \--managed-released

Optional

Create a managed package version.

To create a beta version, don’t include this parameter.

Type: boolean

\-r | \--release-notes-url RELEASE-NOTES-URL

Optional

Release notes URL.

This link is displayed in the package installation UI to provide release notes for this package version to subscribers.

Type: option

\-p | \--post-install-url POST-INSTALL-URL

Optional

Post install URL.

The contents of the post-installation instructions URL are displayed in the UI after installation of the package version.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package (default: null).

Type: option

\-w | \--wait WAIT

Optional

Minutes to wait for the package version to be created (default: 2 minutes).

Type: option

### Aliases for package1 version create

```

```

## package1 version create get

Retrieve the status of a package version creation request.

### Examples for package1 version create get

Get the status of the creation request for the package version with the specified ID in your default org:

```

```

Same as previous example, but use the specified org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--request-id REQUEST-ID

Required

ID of the PackageUploadRequest (starts with 0HD).

Type: option

### Aliases for package1 version create get

```

```

## package1 version display

Display details about a first-generation package version.

### Examples for package1 version display

Display details about the first-generation package version with the specified ID in your default org:

```

```

Same as previous example, but use the specified org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--package-version-id PACKAGE-VERSION-ID

Required

ID (starts with 04t) of the metadata package version whose details you want to display.

Type: option

### Aliases for package1 version display

```

```

## package1 version list

List package versions for the specified first-generation package or for the org.

### Examples for package1 version list

List all first-generation package versions in your default org:

```

```

List package versions for the specified first-generation package in the specifief org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--package-id PACKAGE-ID

Optional

Metadata package ID (starts with 033) whose package versions you want to list.

If not specified, shows all versions for all packages (managed and unmanaged) in the org.

Type: option

### Aliases for package1 version list

```

```

## Code Examples

```
sf package1 version create --package-id 033... --name example
```

```
sf package1 version create --package-id 033... --name example --description "example description" --wait 30 --target-org myorg@example.com
```

```
force:package1:version:create
```

```
sf package1 version create get --request-id 0HD...
```

```
sf package1 version create get --request-id 0HD... --target-org myorg@example.com
```

## Related Topics

- package1 version create (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm)
- package1 version create get (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm)
- package1 version display (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm)
- package1 version list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm)
