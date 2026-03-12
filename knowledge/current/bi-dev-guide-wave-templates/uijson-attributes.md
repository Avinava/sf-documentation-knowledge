---
title: "ui.json Attributes"
domain: bi-dev-guide-wave-templates
topic: uijson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.698Z
estimatedTokens: 424
keywords: [ui.json, Attributes, file]
---

# ui.json Attributes

> The ui.json file attributes are:

# ui.json Attributes

The ui.json file attributes are:

| Attribute | Required | Description |
| --- | --- | --- |
| pages | No | Container attribute only - array of UI pages to be displayed. |
| pages → title | Yes | String title to be displayed at the top of the page. |
| pages → variables | Yes | Array of variables to display on a page, 1 variable is necessary. |
| pages → variables → name | Yes | Variable name, must match name of variable defined in variables.json. |
| pages → variables → visibility | No | Variable visibility (visible, disabled, hidden) defined by conditional. |
| pages → condition | No | If condition is met, then the page will display; if the condition is not met, the page will not display. |
| pages → helpUrl | No | URL provided by template dev to additional content to help user with creating app. |
| pages → vfPage | No | Container attribute only: defines the VisualForce Page to customize this page. |
| pages → vfPage → name | Yes | The name of VisualForce class to use. |
| pages → vfPage → namespace | Yes, if org uses namespace. | The namespace for the org. |
| displayMessages | No | Container attribute only - array of custom display message, currently only 1 displayMessage is supported. |
| displayMessages → text | Yes | Text to display on the app creation progress landing page (running Astro page). |
| displayMessages → location | Yes | “AppLandingPage” is only supported location. |

#### See Also

-   [Edit ui.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_ui_json.htm "The ui.json file determines how your template displays the configuration wizard questions defined in variables.json.")

## Related Topics

- Edit ui.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_ui_json.htm)
