---
title: "package1 version create get"
domain: cli-commands
topic: package1-version-create-get
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.848Z
keywords: [package1, version, create, get, Retrieve, status, package, creation, request., Examples, Flags, Aliases]
---

# package1 version create get

> Retrieve the status of a package version creation request.

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