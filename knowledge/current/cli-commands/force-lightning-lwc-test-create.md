---
title: "force lightning lwc test create"
domain: cli-commands
topic: force-lightning-lwc-test-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.169Z
keywords: [force, lightning, lwc, test, create, Description, Examples, Flags]
---

# force lightning lwc test create

## force lightning lwc test create

### Description for force lightning lwc test create

creates a Lightning web component test file with boilerplate code inside a \_\_tests\_\_ directory.

### Examples for force lightning lwc test create

```

```

### Flags

\--json

Optional

format output as json

Type: boolean

\--loglevel LOGLEVEL

Optional

logging level for this command invocation

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-f | \--filepath FILEPATH

Required

path to Lightning web component .js file to create a test for

Type: string