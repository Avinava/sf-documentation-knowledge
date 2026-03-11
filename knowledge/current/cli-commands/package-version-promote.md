---
title: "package version promote"
domain: cli-commands
topic: package-version-promote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, promote, Promote, released., Description, Examples, Flags, Aliases]
---

# package version promote

> Promote a package version to released.

## package version promote

Promote a package version to released.

### Description for package version promote

Supply the ID or alias of the package version you want to promote. Promotes the package version to released status.

### Examples for package version promote

Promote the package version with the specified ID to released; uses your default Dev Hub org:

```

```

Promote the package version with the specified alias to released; uses the Dev Hub org with username devhub@example.com:

```

```

Promote the package version with an alias that has spaces to released:

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

ID (starts with 04t) or alias of the package version to promote.

Type: option

\-n | \--no-prompt

Optional

Don't prompt to confirm setting the package version as released.

Type: boolean

### Aliases for package version promote

```

```