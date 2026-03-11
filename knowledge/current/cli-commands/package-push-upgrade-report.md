---
title: "package push-upgrade report"
domain: cli-commands
topic: package-push-upgrade-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.318Z
keywords: [package, push-upgrade, report, Retrieve, status, push, upgrade., Description, Examples, Flags, Aliases]
---

# package push-upgrade report

> Retrieve the status of a package push upgrade.

## package push-upgrade report

Retrieve the status of a package push upgrade.

### Description for package push-upgrade report

Specify the request ID for which you want to view details. If applicable, the command displays errors related to the request.

To show all requests in the org, run "sf package pushupgrade list".

### Examples for package push-upgrade report

Retrieve details about the package push upgrade with the specified ID; uses your default Dev Hub org:

```

```

Retrieve details about the specified package push request in the Dev Hub org with username devhub@example.com:

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

\-i | \--push-request-id PUSH-REQUEST-ID

Required

ID of the package push request (starts with 0DV). This ID is returned after the package push-upgrade schedule command completes successfully.

Type: option

### Aliases for package push-upgrade report

```

```