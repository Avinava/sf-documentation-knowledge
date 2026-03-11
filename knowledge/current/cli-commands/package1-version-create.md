---
title: "package1 version create"
domain: cli-commands
topic: package1-version-create
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T09:49:04.848Z
keywords: [package1, version, create, Create, first-generation, package, release, org., Description, Examples, Flags, Aliases]
---

# package1 version create

> Create a first-generation package version in the release org.

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