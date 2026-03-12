---
title: "dataset Commands"
domain: bi-dev-guide-cli-reference
topic: dataset-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.002Z
estimatedTokens: 896
keywords: [dataset, Commands, Manage, Analytics, datasets, display, Examples, Command, rows, fetch]
---

# dataset Commands

> Manage Analytics datasets.

# dataset Commands

Manage Analytics datasets.

-   **[analytics dataset display](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataset_unified.htm#bi_cli_reference_analytics_dataset_display_unified)**
    Displays an Analytics dataset's details.
-   **[analytics dataset list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataset_unified.htm#bi_cli_reference_analytics_dataset_list_unified)**
    Lists Analytics datasets in the specified target org.
-   **[analytics dataset rows fetch](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataset_unified.htm#bi_cli_reference_analytics_dataset_rows_fetch_unified)**
    Fetch the rows of an Analytics dataset.

## analytics dataset display

Displays an Analytics dataset's details.

### Examples for analytics dataset display

```

```

```

```

### Command Syntax

sf analytics dataset display

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATASETID\]

\[\-n DATASETNAME\]

### Parameters

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

\-i | \--datasetid DATASETID

Optional

Dataset ID.

Type: id

\-n | \--datasetname DATASETNAME

Optional

Dataset api name.

Type: string

## analytics dataset list

Lists Analytics datasets in the specified target org.

### Examples for analytics dataset list

```

```

### Command Syntax

sf analytics dataset list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

### Parameters

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

## analytics dataset rows fetch

Fetch the rows of an Analytics dataset.

### Examples for analytics dataset rows fetch

```

```

```

```

### Command Syntax

sf analytics dataset rows fetch

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATASETID\]

\[\-n DATASETNAME\]

\[\--limit LIMIT\]

\[\-r RESULTFORMAT\]

### Parameters

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

\-o TARGETORG

Required

Username or alias of the target org. Not required if the target-org configuration variable is set.

Type: string

\-i | \--datasetid DATASETID

Optional

Dataset ID.

Type: id

\-n | \--datasetname DATASETNAME

Optional

Dataset api name.

Type: string

\--limit LIMIT

Optional

The maximum number of rows to include.

Type: number

\-r | \--resultformat RESULTFORMAT

Optional

Result format emitted to stdout.

Type: enum

Valid values are: human, csv, or json

Default value: human

## Code Examples

```
sf analytics dataset display -i datasetId
```

```
sf analytics dataset display -n datasetApiName
```

```
sf analytics dataset rows fetch -i datasetId
```

```
sf analytics dataset rows fetch -n datasetApiName -r csv
```

## Related Topics

- analytics dataset display (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataset_unified.htm)
- analytics dataset list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataset_unified.htm)
- analytics dataset rows fetch (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataset_unified.htm)
