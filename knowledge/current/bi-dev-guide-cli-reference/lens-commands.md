---
title: "lens Commands"
domain: bi-dev-guide-cli-reference
topic: lens-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.041Z
estimatedTokens: 752
keywords: [lens, Commands, Manage, Analytics, lenses, history, Examples, Command, revert]
---

# lens Commands

> Manage Analytics lenses.

# lens Commands

Manage Analytics lenses.

-   **[analytics lens history list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_lens_unified.htm#bi_cli_reference_analytics_lens_history_list_unified)**
    Lists history records for Analytics lenses in the specified target org.
-   **[analytics lens history revert](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_lens_unified.htm#bi_cli_reference_analytics_lens_history_revert_unified)**
    Revert to a specified history record.
-   **[analytics lens list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_lens_unified.htm#bi_cli_reference_analytics_lens_list_unified)**
    Lists Analytics lenses in the specified target org.

## analytics lens history list

Lists history records for Analytics lenses in the specified target org.

### Examples for analytics lens history list

```

```

### Command Syntax

sf analytics lens history list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i LENSID

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

\-i | \--lensid LENSID

Required

The ID of the lens to show history records.

Type: id

## analytics lens history revert

Revert to a specified history record.

### Examples for analytics lens history revert

```

```

### Command Syntax

sf analytics lens history revert

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-i LENSID

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

\-i | \--lensid LENSID

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

## analytics lens list

Lists Analytics lenses in the specified target org.

### Examples for analytics lens list

```

```

### Command Syntax

sf analytics lens list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--loglevel LOGLEVEL

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
sf analytics lens history list --lensid <lensid>
```

```
sf analytics dashboard history revert -i <dashboardid> -y <historyid> -l <historyLabel>
```

## Related Topics

- analytics lens history list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_lens_unified.htm)
- analytics lens history revert (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_lens_unified.htm)
- analytics lens list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_lens_unified.htm)
