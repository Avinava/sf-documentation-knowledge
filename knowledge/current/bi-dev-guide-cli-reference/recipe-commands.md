---
title: "recipe Commands"
domain: bi-dev-guide-cli-reference
topic: recipe-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.068Z
estimatedTokens: 435
keywords: [recipe, Commands, Manage, Analytics, recipes, Examples, Command, start]
---

# recipe Commands

> Manage Analytics recipes.

# recipe Commands

Manage Analytics recipes.

-   **[analytics recipe list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_recipe_unified.htm#bi_cli_reference_analytics_recipe_list_unified)**
    Lists Analytics recipes in the specified target org.
-   **[analytics recipe start](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_recipe_unified.htm#bi_cli_reference_analytics_recipe_start_unified)**
    Starts a Data Prep recipe.

## analytics recipe list

Lists Analytics recipes in the specified target org.

### Examples for analytics recipe list

```

```

### Command Syntax

sf analytics recipe list

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

## analytics recipe start

Starts a Data Prep recipe.

### Examples for analytics recipe start

```

```

### Command Syntax

sf analytics recipe start

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-i RECIPEID\]

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

\-i | \--recipeid RECIPEID

Required

ID of the recipe to start.

Type: id

## Code Examples

```
sf analytics recipe start --recipe recipeId
```

## Related Topics

- analytics recipe list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_recipe_unified.htm)
- analytics recipe start (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_recipe_unified.htm)
