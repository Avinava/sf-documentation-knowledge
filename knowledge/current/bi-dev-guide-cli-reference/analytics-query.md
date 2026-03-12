---
title: "analytics query"
domain: bi-dev-guide-cli-reference
topic: analytics-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.053Z
estimatedTokens: 365
keywords: [analytics, query, Execute, Examples, Command]
---

# analytics query

> Execute an Analytics query.

# analytics query

Execute an Analytics query.

## Examples for analytics query

```

```

```

```

```

```

## Command Syntax

sf analytics query

\[\--json\]

\[\--apiversion APIVERSION\]

\-o TARGETORG

\[\-f QUERYFILE\]

\[\-q QUERY\]

\[\--nomapnames\]

\[\--sql\]

\[\-t TIMEZONE\]

\[\--connector CONNECTOR\]

\[\--limit LIMIT\]

\[\-r RESULTFORMAT\]

## Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--api-version APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-o TARGETORG

Required

Username or alias of the target org. Not required if the target-org configuration variable is set.

Type: string

\-f | \--queryfile QUERYFILE

Optional

Path to the file containing the query to execute.

Type: filepath

\-q | \--query QUERY

Optional

The query to execute.

Type: string

\--nomapnames

Optional

Skip mapping dataset names in the SAQL query to ids.

Type: boolean

\--sql

Optional

Execute the query as SQL.

Type: boolean

\-t | \--timezone TIMEZONE

Optional

The timezone for the query.

Type: string

\--connector CONNECTOR

Optional

Execute the SQL query against this external data connector id or name.

Type: string

\--limit LIMIT

Optional

The maximum number of rows to include.

Type: number

\-r | \--resultformat RESULTFORMAT

Optional

Result format emitted to stdout.

Type: enum

Permissible values are: human, csv, json

Default value: human

## Code Examples

```
sf analytics query -f query.saql
```

```
sf analytics query -f query.sql -t America/Denver
```

```
sf analytics query -q "..." --sql --limit 10 -r csv
```
