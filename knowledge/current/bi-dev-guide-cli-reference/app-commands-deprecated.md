---
title: "app Commands (Deprecated)"
domain: bi-dev-guide-cli-reference
topic: app-commands-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:01.805Z
estimatedTokens: 4775
keywords: [app, Commands, Deprecated, manage, Analytics, apps, Examples, Command, decouple, display]
---

# app Commands (Deprecated)

> Create and manage Analytics apps.

# app Commands (Deprecated)

Create and manage Analytics apps.

-   **[analytics:app:create (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm#bi_cli_reference_analytics_app_create)**
    Creates an Analytics app.
-   **[analytics:app:decouple (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm#bi_cli_reference_analytics_app_decouple)**
    Decouples an Analytics app from an Analytics template.
-   **[analytics:app:delete (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm#bi_cli_reference_analytics_app_delete)**
    Delete Analytics apps.
-   **[analytics:app:display (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm#bi_cli_reference_analytics_app_display)**
    Displays an Analytics app's details.
-   **[analytics:app:list (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm#bi_cli_reference_analytics_app_list)**
    Lists Analytics apps in the specified folder or target org.
-   **[analytics:app:update (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm#bi_cli_reference_analytics_app_update)**
    Updates an Analytics app from a template.

## analytics:app:create (Deprecated)

Creates an Analytics app.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:app:create

```

```

```

```

```

```

### Command Syntax

sfdx analytics:app:create

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

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

## analytics:app:decouple (Deprecated)

Decouples an Analytics app from an Analytics template.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:app:decouple

```

```

### Command Syntax

sfdx analytics:app:decouple

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-f FOLDERID

\-t TEMPLATEID

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

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-t | \--templateid TEMPLATEID

Required

Template ID.

Type: id

## analytics:app:delete (Deprecated)

Delete Analytics apps.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:app:delete

```

```

### Command Syntax

sfdx analytics:app:delete

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-f FOLDERID

\[\-p\]

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

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-p | \--noprompt

Optional

Do not prompt to confirm delete.

Type: boolean

## analytics:app:display (Deprecated)

Displays an Analytics app's details.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:app:display

```

```

### Command Syntax

sfdx analytics:app:display

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-f FOLDERID

\[\-a\]

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

\-f | \--folderid FOLDERID

Required

ID of the folder that contains the app data.

Type: id

\-a | \--applog

Optional

Specify to include app creation log details.

Type: boolean

## analytics:app:list (Deprecated)

Lists Analytics apps in the specified folder or target org.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:app:list

```

```

### Command Syntax

sfdx analytics:app:list

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-f FOLDERID\]

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

\-f | \--folderid FOLDERID

Optional

ID of the folder that contains the app data.

Type: string

## analytics:app:update (Deprecated)

Updates an Analytics app from a template.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:app:update

```

```

### Command Syntax

sfdx analytics:app:update

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

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
sfdx analytics:app:create -t templateid -n appname
```

```
sfdx analytics:app:create -m templatename
```

```
sfdx analytics:app:create -f path_to_json_file
```

```
sfdx analytics:app:decouple -f folderId -t templateId
```

```
sfdx analytics:app:delete -f folderid
```

## Related Topics

- analytics:app:create (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm)
- analytics:app:decouple (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm)
- analytics:app:delete (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm)
- analytics:app:display (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm)
- analytics:app:list (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm)
- analytics:app:update (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_app.htm)
- reference information about the sf-style
                commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
- sf-style commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
