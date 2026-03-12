---
title: "autoinstall Commands"
domain: bi-dev-guide-cli-reference
topic: autoinstall-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:01.893Z
estimatedTokens: 2111
keywords: [autoinstall, Commands, Manage, Analytics, auto-install, requests, app, cancel, Examples, Command, display]
---

# autoinstall Commands

> Manage Analytics auto-install requests.

# autoinstall Commands

Manage Analytics auto-install requests.

-   **[analytics autoinstall app cancel](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm#bi_cli_reference_analytics_autoinstall_app_cancel_unified)**
    Cancels an auto-install request for an Analytics app.
-   **[analytics autoinstall app create](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm#bi_cli_reference_analytics_autoinstall_app_create_unified)**
    Creates auto-install request to create an Analytics app.
-   **[analytics autoinstall app delete](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm#bi_cli_reference_analytics_autoinstall_app_delete_unified)**
    Creates auto-install request to delete an Analytics app.
-   **[analytics autoinstall app update](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm#bi_cli_reference_analytics_autoinstall_app_update_unified)**
    Creates auto-install request to update an Analytics app.
-   **[analytics autoinstall display](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm#bi_cli_reference_analytics_autoinstall_display_unified)**
    Displays an Analytics auto-install request details.
-   **[analytics autoinstall list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm#bi_cli_reference_analytics_autoinstall_list_unified)**
    Lists Analytics auto-install requests in the specified target org.

## analytics autoinstall app cancel

Cancels an auto-install request for an Analytics app.

### Examples for analytics autoinstall app cancel

```

```

### Command Syntax

sf analytics autoinstall app cancel

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i AUTOINSTALLID

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

\-i | \--autoinstallid AUTOINSTALLID

Required

ID of the auto-install request to cancel.

Type: id

## analytics autoinstall app create

Creates auto-install request to create an Analytics app.

### Examples for analytics autoinstall app create

```

```

```

```

### Command Syntax

sf analytics autoinstall app create

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-t TEMPLATEID\]

\[\-n TEMPLATENAME\]

\[\-a ASYNC\]

\[\-c APPCONFIGURATION\]

\[\-w WAIT\]

\[\-p POLLINTERVAL\]

\[\--appdescription APPDESCRIPTION\]

\[\--applog APPLOG\]

\[\--appname APPNAME\]

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

\-t | \--templateid TEMPLATEID

Optional

The ID of the Analytics template.

Type: id

\-n | \--templatename TEMPLATENAME

Optional

The API name of the Analytics template.

Type: string

\-a | \--async ASYNC

Optional

Create app asynchronously.

Type: boolean

\-c|\--appconfiguration APPCONFIGURATION

Optional

Analytics auto-install app configuration file. For more details, see [Auto Install App Config Input](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_app_config_input.htm)

Type: string

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

\--appdescription APPDESCRIPTION

Optional

The description of the created app

Type: string

\--applog APPLOG

Optional

Specify to include app log details.

Type: boolean

\--appname APPNAME

Optional

The name of the created app

Type: string

## analytics autoinstall app delete

Creates auto-install request to delete an Analytics app.

### Examples for analytics autoinstall app delete

```

```

### Command Syntax

sf analytics autoinstall app delete

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-f FOLDERID

\[\-a\]

\[\-w WAIT\]

\[\-p POLLINTERVAL\]

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

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-a | \--async

Optional

Delete app asynchronously.

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

## analytics autoinstall app update

Creates auto-install request to update an Analytics app.

### Examples for analytics autoinstall app update

```

```

```

```

### Command Syntax

sf analytics autoinstall app update

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-t TEMPLATEID\]

\[\-n TEMPLATENAME\]

\-f FOLDERID

\[\-a ASYNC\]

\[\-w WAIT\]

\[\-p POLLINTERVAL\]

\[\--applog APPLOG\]

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

\-t | \--templateid TEMPLATEID

Optional

The ID of the Analytics template.

Type: id

\-n | \--templatename TEMPLATENAME

Optional

The API name of the Analytics template.

Type: string

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-a | \--async ASYNC

Optional

Update app asynchronously.

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

\--applog APPLOG

Optional

Specify to include app log details.

Type: boolean

## analytics autoinstall display

Displays an Analytics auto-install request details.

### Examples for analytics autoinstall display

```

```

### Command Syntax

sf analytics autoinstall display

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i AUTOINSTALLID

\[\-a\]

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

\-i | \--autoinstallid AUTOINSTALLID

Required

ID of the auto-install request.

Type: id

\-a | \--applog

Optional

Specify to include app creation log details.

Type: boolean

## analytics autoinstall list

Lists Analytics auto-install requests in the specified target org.

### Examples for analytics autoinstall list

```

```

### Command Syntax

sf analytics autoinstall list

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

## Code Examples

```
sf analytics autoinstall app cancel -i id
```

```
sf analytics autoinstall app create -t templateid
```

```
sf analytics autoinstall app create -n templatename
```

```
sf analytics autoinstall app delete -f folderid
```

```
sf analytics autoinstall app update -t templateid -f folderid
```

## Related Topics

- analytics autoinstall app cancel (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm)
- analytics autoinstall app create (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm)
- analytics autoinstall app delete (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm)
- analytics autoinstall app update (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm)
- analytics autoinstall display (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm)
- analytics autoinstall list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_autoinstall_unified.htm)
