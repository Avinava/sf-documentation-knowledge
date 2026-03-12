---
title: "dashboard Commands (Deprecated)"
domain: bi-dev-guide-cli-reference
topic: dashboard-commands-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:01.919Z
estimatedTokens: 3099
keywords: [dashboard, Commands, Deprecated, Manage, Analytics, dashboards, history, Examples, Command, revert]
---

# dashboard Commands (Deprecated)

> Manage Analytics dashboards.

# dashboard Commands (Deprecated)

Manage Analytics dashboards.

-   **[analytics:dashboard:history:list (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm#bi_cli_reference_analytics_dashboard_history_list)**
    Lists history records for Analytics dashboards in the specified target org.
-   **[analytics:dashboard:history:revert (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm#bi_cli_reference_analytics_dashboard_history_revert)**
    Revert to a specified history record.
-   **[analytics:dashboard:list (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm#bi_cli_reference_analytics_dashboard_list)**
    Lists Analytics dashboards in the specified target org.
-   **[analytics:dashboard:update (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm#bi_cli_reference_analytics_dashboard_update)**
    Updates an Analytics dashboard.

## analytics:dashboard:history:list (Deprecated)

Lists history records for Analytics dashboards in the specified target org.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:dashboard:history:list

```

```

### Command Syntax

sfdx analytics:dashboard:history:list

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i DASHBOARDID

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

\-i | \--dashboardid DASHBOARDID

Required

The ID of the dashboard to show history records.

Type: id

## analytics:dashboard:history:revert (Deprecated)

Revert to a specified history record.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:dashboard:history:revert

```

```

### Command Syntax

sfdx analytics:dashboard:history:revert

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i DASHBOARDID

\-y HISTORYID

\[\-l LABEL\]

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

## analytics:dashboard:list (Deprecated)

Lists Analytics dashboards in the specified target org.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:dashboard:list

```

```

### Command Syntax

sfdx analytics:dashboard:list

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

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

## analytics:dashboard:update (Deprecated)

Updates an Analytics dashboard.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:dashboard:update

```

```

```

```

### Command Syntax

sfdx analytics:dashboard:update

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i DASHBOARDID

\[\-y CURRENTHISTORYID\]

\[\-r\]

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

\-i | \--dashboardid DASHBOARDID

Required

Dashboard ID.

Type: id

\-y | \--currenthistoryid CURRENTHISTORYID

Optional

Current History ID to display.

Type: id

\-r | \--removecurrenthistory

Optional

Remove Current History ID from dashboard.

Type: boolean

## Code Examples

```
sfdx analytics:dashboard:history:list --dashboardid <dashboardid>
```

```
sfdx analytics:dashboard:history:revert -i <dashboardid> -y <historyid> -l <historyLabel>
```

```
sfdx analytics:dashboard:update -i dashboardId -y currentHistoryId
```

```
sfdx analytics:dashboard:update -i dashboardId -r
```

## Related Topics

- analytics:dashboard:history:list (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm)
- analytics:dashboard:history:revert (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm)
- analytics:dashboard:list (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm)
- analytics:dashboard:update (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_dashboard.htm)
- reference information about the sf-style
                commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
- sf-style commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
