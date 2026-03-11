---
title: "package1 version list"
domain: cli-commands
topic: package1-version-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.848Z
keywords: [package1, version, list, List, package, versions, specified, first-generation, org., Examples, Flags, Aliases]
---

# package1 version list

> List package versions for the specified first-generation package or for the org.

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