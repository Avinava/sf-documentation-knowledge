---
title: "asset Commands (Deprecated)"
domain: bi-dev-guide-cli-reference
topic: asset-commands-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:01.838Z
estimatedTokens: 3026
keywords: [asset, Commands, Deprecated, Manage, Analytics, publishing, publisher, Examples, Command, deleteall]
---

# asset Commands (Deprecated)

> Manage Analytics asset publishing.

# asset Commands (Deprecated)

Manage Analytics asset publishing.

-   **[analytics:asset:publisher:create (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm#bi_cli_reference_analytics_asset_publisher_create)**
    Create a publisher record for the Analytics asset.
-   **[analytics:asset:publisher:delete (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm#bi_cli_reference_analytics_asset_publisher_delete)**
    Delete an Analytics asset publisher.
-   **[analytics:asset:publisher:deleteall(Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm#bi_cli_reference_analytics_asset_publisher_deleteall)**
    Deletes Analytics asset publishers.
-   **[analytics:asset:publisher:list (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm#bi_cli_reference_analytics_asset_publisher_list)**
    Lists Analytics asset publishers.

## analytics:asset:publisher:create (Deprecated)

Create a publisher record for the Analytics asset.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:asset:publisher:create

```

```

### Command Syntax

sfdx analytics:asset:publisher:create

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i ASSETID

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

\-i | \--assetid ASSETID

Required

Asset ID under development.

Type: id

## analytics:asset:publisher:delete (Deprecated)

Delete an Analytics asset publisher.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:asset:publisher:delete

```

```

### Command Syntax

sfdx analytics:asset:publisher:delete

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i ID

\-a ASSETID

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

\-i | \--id ID

Required

Asset Publisher ID under development.

Type: id

\-a | \--assetid ASSETID

Required

Asset ID under development.

Type: id

## analytics:asset:publisher:deleteall(Deprecated)

Deletes Analytics asset publishers.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:asset:publisher:deleteall

```

```

### Command Syntax

sfdx analytics:asset:publisher:deleteall

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i ASSETID

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

\-i | \--assetid ASSETID

Required

Asset ID under development.

Type: id

\-p | \--noprompt

Optional

Do not prompt to confirm delete.

Type: boolean

## analytics:asset:publisher:list (Deprecated)

Lists Analytics asset publishers.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:asset:publisher:list

```

```

### Command Syntax

sfdx analytics:asset:publisher:list

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\-i ASSETID

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

\-i | \--assetid ASSETID

Required

Asset ID under development.

Type: id

## Code Examples

```
sfdx analytics:asset:publisher:create -i assetId
```

```
sfdx analytics:asset:publisher:delete -a assetId -i assetPublisherId
```

```
sfdx analytics:asset:publisher:deleteall -i assetId
```

```
sfdx analytics:asset:publisher:list -i assetId
```

## Related Topics

- analytics:asset:publisher:create (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm)
- analytics:asset:publisher:delete (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm)
- analytics:asset:publisher:deleteall(Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm)
- analytics:asset:publisher:list (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset.htm)
- reference information about the sf-style
                commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
- sf-style commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
