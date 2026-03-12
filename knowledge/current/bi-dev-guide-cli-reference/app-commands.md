---
title: "app Commands"
domain: bi-dev-guide-cli-reference
topic: app-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:01.822Z
estimatedTokens: 1729
keywords: [app, Commands, manage, Analytics, apps, Examples, Command, decouple, display]
---

# app Commands

> Create and manage Analytics apps.

# app Commands

Create and manage Analytics apps.

-   **[analytics app create](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm#bi_cli_reference_analytics_app_create_unified)**
    Creates an Analytics app.
-   **[analytics app decouple](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm#bi_cli_reference_analytics_app_decouple_unified)**
    Decouples an Analytics app from an Analytics template.
-   **[analytics app delete](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm#bi_cli_reference_analytics_app_delete_unified)**
    Delete Analytics apps.
-   **[analytics app display](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm#bi_cli_reference_analytics_app_display_unified)**
    Displays an Analytics app's details.
-   **[analytics app list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm#bi_cli_reference_analytics_app_list_unified)**
    Lists Analytics apps in the specified folder or target org.
-   **[analytics app update](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm#bi_cli_reference_analytics_app_update_unified)**
    Updates an Analytics app from a template.

## analytics app create

Creates an Analytics app.

### Examples for analytics app create

```

```

```

```

```

```

### Command Syntax

sf analytics app create

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-f DEFINITIONFILE\]

\[\-t TEMPLATEID\]

\[\-m TEMPLATENAME\]

\[\-n APPNAME\]

\[\-a\]

\[\-v\]

\[\-w WAIT\]

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

\-f | \--definitionfile DEFINITIONFILE

Optional

Analytics template definition file; required unless a --templateid value is specified.

Type: filepath

\-t | \--templateid TEMPLATEID

Optional

Template ID; required unless a --definitionfile value is specified.

Type: string

\-m | \--templatename TEMPLATENAME

Optional

The name of the Analytics template.

Type: string

\-n | \--appname APPNAME

Optional

The name of the created app.

Type: string

\-a | \--async

Optional

Create app asynchronously.

Type: boolean

\-v | \--allevents

Optional

Verbose display of all app create events.

Type: boolean

\-w | \--wait WAIT

Optional

Wait time in minutes for streaming app creation events (default 10).

Type: number

Default value: 10

## analytics app decouple

Decouples an Analytics app from an Analytics template.

### Examples for analytics app decouple

```

```

### Command Syntax

sf analytics app decouple

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-f FOLDERID

\-t TEMPLATEID

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

\-t | \--templateid TEMPLATEID

Required

Template ID.

Type: id

## analytics app delete

Delete Analytics apps.

### Examples for analytics app delete

```

```

### Command Syntax

sf analytics app delete

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-f FOLDERID

\[\-p\]

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

\-p | \--noprompt

Optional

Do not prompt to confirm delete.

Type: boolean

## analytics app display

Displays an Analytics app's details.

### Examples for analytics app display

```

```

### Command Syntax

sf analytics app display

\[\--json\]

\[\--apiversion APIVERSION\]

\-o TARGETORG

\-f FOLDERID

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

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-a | \--applog

Optional

Specify to include app creation log details.

Type: boolean

## analytics app list

Lists Analytics apps in the specified folder or target org.

### Examples for analytics app list

```

```

### Command Syntax

sf analytics app list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-f FOLDERID\]

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

Optional

ID of the folder that contains the app data.

Type: string

## analytics app update

Updates an Analytics app from a template.

### Examples for analytics app update

```

```

### Command Syntax

sf analytics app update

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-t TEMPLATEID

\-f FOLDERID

\[\-a\]

\[\-v\]

\[\-w WAIT\]

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

Required

The ID of the Analytics template.

Type: string

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-a | \--async

Optional

Update app asynchronously.

Type: boolean

\-v | \--allevents

Optional

Verbose display of all app update events.

Type: boolean

\-w | \--wait WAIT

Optional

Wait time in minutes for streaming app update events (default 10).

Type: number

Default value: 10

## Code Examples

```
sf analytics app create -t templateid -n appname
```

```
sf analytics app create -m templatename
```

```
sf analytics app create -f path_to_json_file
```

```
sf analytics app decouple -f folderId -t templateId
```

```
sf analytics app delete -f folderid
```

## Related Topics

- analytics app create (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm)
- analytics app decouple (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm)
- analytics app delete (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm)
- analytics app display (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm)
- analytics app list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm)
- analytics app update (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app_unified.htm)
