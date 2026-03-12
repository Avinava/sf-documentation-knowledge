---
title: "template Commands"
domain: bi-dev-guide-cli-reference
topic: template-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.119Z
estimatedTokens: 2300
keywords: [template, Commands, manage, Analytics, templates, Examples, Command, display, lint, validate]
---

# template Commands

> Create and manage Analytics templates.

# template Commands

Create and manage Analytics templates.

-   **[analytics template create](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_create_unified)**
    Creates Analytics templates.
-   **[analytics template delete](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_delete_unified)**
    Deletes Analytics templates.
-   **[analytics template display](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_display_unified)**
    Displays an Analytics template's details.
-   **[analytics template lint](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_lint_unified)**
    Performs a lint check on an Analytics template. Requires either the ID or API name of template.
-   **[analytics template list](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_list_unified)**
    Lists Analytics templates in the specified folder or target org.
-   **[analytics template update](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_update_unified)**
    Updates Analytics templates.
-   **[analytics template validate](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm#bi_cli_reference_analytics_template_validate_unified)**
    Performs an org readiness check for an Analytics template. Requires either the ID or API name of template.

## analytics template create

Creates Analytics templates.

### Examples for analytics template create

```

```

```

```

### Command Syntax

sf analytics template create

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-f FOLDERID

\[\-r RECIPEIDS\]

\[\-l LABEL\]

\[\-d DATATRANSFORMIDS\]

\[\--description DESCRIPTION\]

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

\-d | \--datatransformids DATATRANSFORMIDS

Optional

A comma-separated list of data transform IDs to include with the template.

Type: array

\--description DESCRIPTION

Optional

The description for the Analytics template (defaults to the app description).

Type: string

## analytics template delete

Deletes Analytics templates.

### Examples for analytics template delete

```

```

### Command Syntax

sf analytics template delete

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\-t TEMPLATEID

\[\--forcedelete\]

\[\--decouple\]

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

\-t | \--templateid TEMPLATEID

Required

The ID of the Analytics template.

Type: id

\--forcedelete FORCEDELETE

Optional

Force deletes the Analytics template and all linked Analytics apps.

Type: boolean

\--decouple DECOUPLE

Optional

Decouple all linked Analytics apps.

Type: boolean

\-p | \--noprompt NOPROMPT

Optional

Do not prompt to confirm force delete.

Type: boolean

## analytics template display

Displays an Analytics template's details.

### Examples for analytics template display

```

```

```

```

### Command Syntax

sf analytics template display

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-t TEMPLATEID\]

\[\-n TEMPLATENAME\]

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

The name of the Analytics template.

Type: string

## analytics template lint

Performs a lint check on an Analytics template. Requires either the ID or API name of template.

### Examples for analytics template lint

```

```

```

```

### Command Syntax

sf analytics template lint

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-n TEMPLATENAME\]

\[\-t TEMPLATEID\]

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

\-n | \--templatename TEMPLATENAME

Optional

API name of the template to submit for lint check.

Type: string

\-t | \--templateid TEMPLATEID

Optional

ID of the template to submit for lint check.

Type: string

## analytics template list

Lists Analytics templates in the specified folder or target org.

### Examples for analytics template list

```

```

```

```

```

```

### Command Syntax

sf analytics template list

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-a\]

\[\-e\]

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

\-a | \--includesalesforcetemplates INCLUDESALESFORCETEMPLATES

Optional

Include Salesforce templates.

Type: boolean

\-e | \--includembeddedtemplates INCLUDEEMBEDDEDTEMPLATES

Optional

Include EmbeddedApp templates.

Type: boolean

## analytics template update

Updates Analytics templates.

### Examples for analytics template update

```

```

```

```

### Command Syntax

sf analytics template update

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-t TEMPLATEID\]

\[\-n TEMPLATENAME\]

\[\-f FOLDERID\]

\[\-r RECIPEIDS\]

\[\-d DATATRANSFORMIDS\]

\[\-v ASSETVERSION\]

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

\-d | \--datatransformids DATATRANSFORMIDS

Optional

A comma-separated list of data transform IDs to include with the template.

Type: array

\-v | \--assetversion ASSETVERSION

Optional

Version number for upgrading the template.

Type: integer

## analytics template validate

Performs an org readiness check for an Analytics template. Requires either the ID or API name of template.

### Examples for analytics template validate

```

```

```

```

```

```

### Command Syntax

sf analytics template validate

\[\--json\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-n TEMPLATENAME\]

\[\-t TEMPLATEID\]

\[\-f VALUESFILE\]

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
sf analytics template create -f folderid
```

```
sf analytics template create -f folderid -r "recipeid1, recipeid2"
```

```
sf analytics template delete -t templateid
```

```
sf analytics template display -t templateid
```

```
sf analytics template display -n templatename
```

## Related Topics

- analytics template create (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
- analytics template delete (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
- analytics template display (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
- analytics template lint (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
- analytics template list (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
- analytics template update (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
- analytics template validate (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)
