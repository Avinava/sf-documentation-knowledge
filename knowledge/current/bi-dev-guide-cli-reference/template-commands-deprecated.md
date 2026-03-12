---
title: "template Commands (Deprecated)"
domain: bi-dev-guide-cli-reference
topic: template-commands-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:02.098Z
estimatedTokens: 5747
keywords: [template, Commands, Deprecated, manage, Analytics, templates, Examples, Command, display, lint, validate]
---

# template Commands (Deprecated)

> Create and manage Analytics templates.

# template Commands (Deprecated)

Create and manage Analytics templates.

-   **[analytics:template:create (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_create)**
    Creates Analytics templates.
-   **[analytics:template:delete (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_delete)**
    Deletes Analytics templates.
-   **[analytics:template:display (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_display)**
    Displays an Analytics template's details.
-   **[analytics:template:lint (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_lint)**
    Performs a lint check on an Analytics template. Requires either the ID or API name of template.
-   **[analytics:template:list (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_list)**
    Lists Analytics templates in the specified folder or target org.
-   **[analytics:template:update (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_update)**
    Updates Analytics templates.
-   **[analytics:template:validate (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm#bi_cli_reference_analytics_template_validate)**
    Performs an org readiness check for an Analytics template. Requires either the ID or API name of template.

## analytics:template:create (Deprecated)

Creates Analytics templates.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:create

```

```

```

```

### Command Syntax

sfdx analytics:template:create

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-f FOLDERID

\[\-r RECIPEIDS\]

\[\-l LABEL\]

\[\--description DESCRIPTION\]

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

The ID of the folder that contains the template data.

Type: id

\-r | \--recipeids RECIPEIDS

Optional

A comma-separated list of recipe IDs to include with the template.

Type: array

\-l | \--label LABEL

Optional

The label for the Analytics template (defaults to the app label).

Type: string

\--description DESCRIPTION

Optional

The description for the Analytics template (defaults to the app description).

Type: string

## analytics:template:delete (Deprecated)

Deletes Analytics templates.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:delete

```

```

### Command Syntax

sfdx analytics:template:delete

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-t TEMPLATEID

\[\--forcedelete\]

\[\--decouple\]

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

\-t | \--templateid TEMPLATEID

Required

The ID of the Analytics template.

Type: id

\--forcedelete

Optional

Force deletes the Analytics template and all linked Analytics apps.

Type: boolean

\--decouple

Optional

Decouple all linked Analytics apps.

Type: boolean

\-p | \--noprompt

Optional

Do not prompt to confirm force delete.

Type: boolean

## analytics:template:display (Deprecated)

Displays an Analytics template's details.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:display

```

```

```

```

### Command Syntax

sfdx analytics:template:display

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-t TEMPLATEID\]

\[\-n TEMPLATENAME\]

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

Optional

The ID of the Analytics template.

Type: id

\-n | \--templatename TEMPLATENAME

Optional

The name of the Analytics template.

Type: string

## analytics:template:lint (Deprecated)

Performs a lint check on an Analytics template. Requires either the ID or API name of template.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:lint

```

```

```

```

### Command Syntax

sfdx analytics:template:lint

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-n TEMPLATENAME\]

\[\-t TEMPLATEID\]

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

\-n | \--templatename TEMPLATENAME

Optional

API name of the template to submit for lint check.

Type: string

\-t | \--templateid TEMPLATEID

Optional

ID of the template to submit for lint check.

Type: string

## analytics:template:list (Deprecated)

Lists Analytics templates in the specified folder or target org.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:list

```

```

```

```

```

```

### Command Syntax

sfdx analytics:template:list

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-a\]

\[\-e\]

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

\-a | \--includesalesforcetemplates

Optional

Include Salesforce templates.

Type: boolean

\-e | \--includembeddedtemplates

Optional

Include EmbeddedApp templates.

Type: boolean

## analytics:template:update (Deprecated)

Updates Analytics templates.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:update

```

```

```

```

### Command Syntax

sfdx analytics:template:update

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-t TEMPLATEID\]

\[\-n TEMPLATENAME\]

\[\-f FOLDERID\]

\[\-r RECIPEIDS\]

\[\-v ASSETVERSION\]

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

Optional

The ID of the Analytics template.

Type: id

\-n | \--templatename TEMPLATENAME

Optional

The name of the Analytics template.

Type: string

\-f | \--folderid FOLDERID

Optional

The ID of the folder that contains the template data.

Type: id

\-r | \--recipeids RECIPEIDS

Optional

A comma-separated list of recipe IDs to include with the template.

Type: array

\-v | \--assetversion ASSETVERSION

Optional

Version number for upgrading the template.

Type: integer

## analytics:template:validate (Deprecated)

Performs an org readiness check for an Analytics template. Requires either the ID or API name of template.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:template:validate

```

```

```

```

```

```

### Command Syntax

sfdx analytics:template:validate

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-n TEMPLATENAME\]

\[\-t TEMPLATEID\]

\[\-f VALUESFILE\]

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

\-n | \--templatename TEMPLATENAME

Optional

API name of the template to run an org readiness check on.

Type: string

\-t | \--templateid TEMPLATEID

Optional

ID of the template to run an org readiness check on.

Type: string

\-f | \--valuesfile VALUESFILE

Optional

The file with values to override the template defaults with.

Type: filepath

## Code Examples

```
sfdx analytics:template:create -f folderid
```

```
sfdx analytics:template:create -f folderid -r "recipeid1, recipeid2"
```

```
sfdx analytics:template:delete -t templateid
```

```
sfdx analytics:template:display -t templateid
```

```
sfdx analytics:template:display -n templatename
```

## Related Topics

- analytics:template:create (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- analytics:template:delete (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- analytics:template:display (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- analytics:template:lint (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- analytics:template:list (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- analytics:template:update (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- analytics:template:validate (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template.htm)
- reference information about the sf-style
                commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
- sf-style commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
