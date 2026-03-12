---
title: "analytics enable"
domain: bi-dev-guide-cli-reference
topic: analytics-enable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.011Z
estimatedTokens: 239
keywords: [analytics, enable, target, org, Examples, Command]
---

# analytics enable

> Enable Analytics in the target org.

# analytics enable

Enable Analytics in the target org.

## Examples for analytics enable

```

```

```

```

## Command Syntax

sf analytics enable

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-a\]

\[\-w WAIT\]

\[\-p POLLINTERVAL\]

## Parameters

\-o TARGETORG

Required

Username or alias of the target org. Not required if the target-org configuration variable is set.

Type: string

\--json

Optional

Format output as JSON.

Type: boolean

\--apiversion APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-a | \--async

Optional

Enable asynchronously.

Type: boolean

\-w | \--wait WAIT

Optional

Wait time in minutes for auto-install request to finish (default 10).

Type: number

Default value: 10

\-p | \--pollinterval POLLINTERVAL

Optional

Polling interval in milliseconds for checking auto-install request status (default 5000).

Type: number

Default value: 5000

## Code Examples

```
sf analytics enable -o "MyTargetOrg"
```
