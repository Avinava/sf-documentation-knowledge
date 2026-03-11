---
title: "package push-upgrade abort"
domain: cli-commands
topic: package-push-upgrade-abort
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.907Z
keywords: [package, push-upgrade, abort, Abort, push, upgrade, scheduled., Only, requests, status, Created, Pending, aborted., Description, Examples, Flags]
---

# package push-upgrade abort

> Abort a package push upgrade that has been scheduled. Only push upgrade requests with a status of Created or Pending can be aborted.

## package push-upgrade abort

Abort a package push upgrade that has been scheduled. Only push upgrade requests with a status of Created or Pending can be aborted.

### Description for package push-upgrade abort

Specify the request ID that you want to abort. If applicable, the command displays errors related to the request.

To show all requests in the org, run "sf package pushupgrade list --package 033...".

### Examples for package push-upgrade abort

Cancel the specified package push upgrade request with the specified ID; uses your default Dev Hub org:

```

```

Cancel the specified package push upgrade request in the Dev Hub org with username devhub@example.com:

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