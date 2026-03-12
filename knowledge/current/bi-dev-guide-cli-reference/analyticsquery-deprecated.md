---
title: "analytics:query (Deprecated)"
domain: bi-dev-guide-cli-reference
topic: analyticsquery-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:02.048Z
estimatedTokens: 873
keywords: [analytics, query, Deprecated, Execute, Examples, Command]
---

# analytics:query (Deprecated)

> Execute an Analytics query.

# analytics:query (Deprecated)

Execute an Analytics query.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

## Examples for analytics:query

```

```

```

```

```

```

## Command Syntax

sfdx analytics:query

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

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

\--loglevel LOGLEVEL

Optional

The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-u | \--targetusername TARGETUSERNAME

Optional

A username or alias for the target org. Overrides the default target org.

Type: string

\--apiversion APIVERSION

Optional

Override the API version used for API requests made by this command.

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
sfdx analytics:query -f query.saql
```

```
sfdx analytics:query -f query.sql -t America/Denver
```

```
sfdx analytics:query -q "..." --sql --limit 10 -r csv
```

## Related Topics

- reference information about the sf-style
                commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
- sf-style commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
