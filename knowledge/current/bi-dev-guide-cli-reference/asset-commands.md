---
title: "asset Commands"
domain: bi-dev-guide-cli-reference
topic: asset-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:01.849Z
estimatedTokens: 994
keywords: [asset, Commands, Manage, Analytics, publishing, publisher, Examples, Command, deleteall]
---

# asset Commands

> Manage Analytics asset publishing.

# asset Commands

Manage Analytics asset publishing.

-   **[analytics asset publisher create](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm#bi_cli_reference_analytics_asset_publisher_create_unified)**
    Create a publisher record for the Analytics asset.
-   **[analytics asset publisher delete](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm#bi_cli_reference_analytics_asset_publisher_delete_unified)**
    Delete an Analytics asset publisher.
-   **[analytics asset publisher deleteall](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm#bi_cli_reference_analytics_asset_publisher_deleteall_unified)**
    Deletes Analytics asset publishers.
-   **[analytics asset publisher list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm#bi_cli_reference_analytics_asset_publisher_list_unified)**
    Lists Analytics asset publishers.

## analytics asset publisher create

Create a publisher record for the Analytics asset.

### Examples for analytics asset publisher create

```

```

### Command Syntax

sf analytics asset publisher create

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i ASSETID

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

\-i | \--assetid ASSETID

Required

Asset ID under development.

Type: id

## analytics asset publisher delete

Delete an Analytics asset publisher.

### Examples for analytics asset publisher delete

```

```

### Command Syntax

sf analytics asset publisher delete

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i ID

\-a ASSETID

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

\-i | \--id ID

Required

Asset Publisher ID under development.

Type: id

\-a | \--assetid ASSETID

Required

Asset ID under development.

Type: id

## analytics asset publisher deleteall

Deletes Analytics asset publishers.

### Examples for analytics asset publisher deleteall

```

```

### Command Syntax

sf analytics asset publisher deleteall

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i ASSETID

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

\-i | \--assetid ASSETID

Required

Asset ID under development.

Type: id

\-p | \--noprompt

Optional

Do not prompt to confirm delete.

Type: boolean

## analytics asset publisher list

Lists Analytics asset publishers.

### Examples for analytics asset publisher list

```

```

### Command Syntax

sf analytics asset publisher list

\[\--json\]

\[\--apiversion APIVERSION\]

\[\-o\]

\-i ASSETID

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

\-i | \--assetid ASSETID

Required

Asset ID under development.

Type: id

## Code Examples

```
sf analytics asset publisher create -i assetId
```

```
sf analytics asset publisher delete -a assetId -i assetPublisherId
```

```
sf analytics asset publisher deleteall -i assetId
```

```
sf analytics asset publisher list -i assetId
```

## Related Topics

- analytics asset publisher create (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm)
- analytics asset publisher delete (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm)
- analytics asset publisher deleteall (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm)
- analytics asset publisher list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_asset_unified.htm)
