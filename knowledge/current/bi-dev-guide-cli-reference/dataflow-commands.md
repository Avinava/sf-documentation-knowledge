---
title: "dataflow Commands"
domain: bi-dev-guide-cli-reference
topic: dataflow-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:01.979Z
estimatedTokens: 2011
keywords: [dataflow, Commands, Manage, Analytics, dataflows, jobs, history, Examples, Command, revert, job, display, stop, start]
---

# dataflow Commands

> Manage Analytics dataflows and dataflow jobs.

# dataflow Commands

Manage Analytics dataflows and dataflow jobs.

-   **[analytics dataflow history list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_history_list_unified)**
    Lists history records for Analytics dataflows in the specified target org.
-   **[analytics dataflow history revert](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_history_revert_unified)**
    Revert to a specified history record.
-   **[analytics dataflow job display](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_job_display_unified)**
    Display the status of an Analytics dataflow job.
-   **[analytics dataflow job list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_job_list_unified)**
    Lists jobs for an Analytics dataflow.
-   **[analytics dataflow job stop](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_job_stop_unified)**
    Stops an Analytics dataflow job.
-   **[analytics dataflow list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_list_unified)**
    Lists Analytics dataflows in the specified target org.
-   **[analytics dataflow start](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_start_unified)**
    Starts an Analytics dataflow.
-   **[analytics dataflow update](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm#bi_cli_reference_analytics_dataflow_update_unified)**
    Update an Analytics dataflow.

## analytics dataflow history list

Lists history records for Analytics dataflows in the specified target org.

### Examples for analytics dataflow history list

```

```

### Command Syntax

sf analytics dataflow history list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i DATAFLOWID

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

\-i | \--dataflowid DATAFLOWID

Required

The ID of the dataflow to show history records.

Type: id

## analytics dataflow history revert

Revert to a specified history record.

### Examples for analytics dataflow history revert

```

```

### Command Syntax

sf analytics dataflow history revert

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i DATAFLOWID

\-y HISTORYID

\[\-l LABEL\]

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

\-i | \--dataflowid DATAFLOWID

Required

The ID of the dataflow to show history records.

Type: id

\-y | \--historyid HISTORYID

Required

The ID of the dataflow history record.

Type: id

\-l | \--label LABEL

Optional

Label for new reverted history record.

Type: string

## analytics dataflow job display

Display the status of an Analytics dataflow job.

### Examples for analytics dataflow job display

```

```

### Command Syntax

sf analytics dataflow job display

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATAFFLOWJOBID\]

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

\-i | \--dataflowjobid DATAFLOWJOBID

Required

ID of the dataflow job to display.

Type: id

## analytics dataflow job list

Lists jobs for an Analytics dataflow.

### Examples for analytics dataflow job list

```

```

### Command Syntax

sf analytics dataflow job list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATAFFLOWID\]

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

\-i | \--dataflowid DATAFLOWID

Required

ID of the dataflow to list the jobs for.

Type: id

## analytics dataflow job stop

Stops an Analytics dataflow job.

### Examples for analytics dataflow job stop

```

```

### Command Syntax

sf analytics dataflow job stop

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATAFFLOWJOBID\]

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

\-i | \--dataflowjobid DATAFLOWJOBID

Required

ID of the dataflow job to stop.

Type: id

## analytics dataflow list

Lists Analytics dataflows in the specified target org.

### Examples for analytics dataflow list

```

```

### Command Syntax

sf analytics dataflow list

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

## analytics dataflow start

Starts an Analytics dataflow.

### Examples for analytics dataflow start

```

```

### Command Syntax

sf analytics dataflow start

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATAFFLOWID\]

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

\-i | \--dataflowid DATAFLOWID

Required

ID of the dataflow to start.

Type: id

## analytics dataflow update

Update an Analytics dataflow.

### Examples for analytics dataflow update

```

```

### Command Syntax

sf analytics dataflow update

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i DATAFFLOWID\]

\[\-f DATAFFLOWFILE\]

\[\-s DATAFFLOWSTR\]

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

\-i | \--dataflowid DATAFLOWID

Required

ID of the dataflow to start.

Type: id

\-f | \--dataflowfile DATAFLOWFILE

Optional

The dataflow JSON file to update the dataflow with.

Type: filepath

\-s | \--dataflowstr DATAFLOWSTR

Optional

The dataflow JSON string to update the dataflow with.

Type: string

## Code Examples

```
sf analytics dataflow history list --dataflowid <dataflowid>
```

```
sf analytics dataflow history revert -i <dataflowid> -y <historyid> -l <historyLabel>
```

```
sf analytics dataflow job display --dataflowjobid dataflowJobId
```

```
sf analytics dataflow job list --dataflowid dataflowId
```

```
sf analytics dataflow job stop --dataflowjobid dataflowJobId
```

## Related Topics

- analytics dataflow history list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow history revert (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow job display (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow job list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow job stop (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow start (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
- analytics dataflow update (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dataflow_unified.htm)
