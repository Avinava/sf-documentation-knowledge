---
title: "dashboard Commands"
domain: bi-dev-guide-cli-reference
topic: dashboard-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:01.932Z
estimatedTokens: 1073
keywords: [dashboard, Commands, Manage, Analytics, dashboards, history, Examples, Command, revert]
---

# dashboard Commands

> Manage Analytics dashboards.

# dashboard Commands

Manage Analytics dashboards.

-   **[analytics dashboard history list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm#bi_cli_reference_analytics_dashboard_history_list_unified)**
    Lists history records for Analytics dashboards in the specified target org.
-   **[analytics dashboard history revert](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm#bi_cli_reference_analytics_dashboard_history_revert_unified)**
    Revert to a specified history record.
-   **[analytics dashboard list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm#bi_cli_reference_analytics_dashboard_list_unified)**
    Lists Analytics dashboards in the specified target org.
-   **[analytics dashboard update](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm#bi_cli_reference_analytics_dashboard_update_unified)**
    Updates an Analytics dashboard.

## analytics dashboard history list

Lists history records for Analytics dashboards in the specified target org.

### Examples for analytics dashboard history list

```

```

### Command Syntax

sf analytics dashboard history list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i DASHBOARDID

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

\-i | \--dashboardid DASHBOARDID

Required

The ID of the dashboard to show history records.

Type: id

## analytics dashboard history revert

Revert to a specified history record.

### Examples for analytics dashboard history revert

```

```

### Command Syntax

sf analytics dashboard history revert

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i DASHBOARDID

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

\-i | \--dashboardid DASHBOARDID

Required

The ID of the dashboard to show history records.

Type: id

\-y | \--historyid HISTORYID

Required

The ID of the dashboard history records.

Type: id

\-l | \--label LABEL

Optional

Label for new reverted history record.

Type: string

## analytics dashboard list

Lists Analytics dashboards in the specified target org.

### Examples for analytics dashboard list

```

```

### Command Syntax

sf analytics dashboard list

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

## analytics dashboard update

Updates an Analytics dashboard.

### Examples for analytics dashboard update

```

```

```

```

### Command Syntax

sf analytics dashboard update

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i DASHBOARDID

\[\-y CURRENTHISTORYID\]

\[\-r\]

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

\-i | \--dashboardid DASHBOARDID

Required

Dashboard ID.

Type: id

\-y | \--currenthistoryid CURRENTHISTORYID

Optional

Current History ID to display.

Type: id

\-r | \--removecurrenthistoryREMOVECURRENTHISTORY

Optional

Remove Current History ID from dashboard.

Type: boolean

## Code Examples

```
sf analytics dashboard history list --dashboardid <dashboardid>
```

```
sf analytics dashboard history revert -i <dashboardid> -y <historyid> -l <historyLabel>
```

```
sf analytics dashboard update -i dashboardId -y currentHistoryId
```

```
sf analytics dashboard update -i dashboardId -r
```

## Related Topics

- analytics dashboard history list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm)
- analytics dashboard history revert (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm)
- analytics dashboard list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm)
- analytics dashboard update (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard_unified.htm)
