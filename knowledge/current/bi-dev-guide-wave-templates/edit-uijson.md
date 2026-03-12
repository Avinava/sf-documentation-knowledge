---
title: "Edit ui.json"
domain: bi-dev-guide-wave-templates
topic: edit-uijson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.518Z
estimatedTokens: 630
keywords: [Edit, ui.json, file, determines, how, template, displays, configuration, wizard, questions, defined, variables.json]
---

# Edit ui.json

> The ui.json file determines how your template
  displays the configuration wizard questions defined in variables.json.

# Edit ui.json

The ui.json file determines how your template displays the configuration wizard questions defined in variables.json.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

This file isn’t used in an embedded app. Templates with a templateType of embeddedapp aren’t visible in CRM Analytics Studio for install.

The UI file determines wizard page layout, defining the order in which variables described in variables.json appear on a page.

```

```

The displayMessages text is visible to the user on the page that displays the app creation progress.

![The app landing page showing the app creation progress and the custom displayMessages text.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templated_app_displayMessage.png&folder=bi_dev_guide_wave_templates)

-   **[Page Condition Syntax for ui.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_page_cond_syntax_ui_json.htm)**
    You can make a page's appearance conditional on the value of a variable. For example, if the user answers “No” when asked if there is a Products dimension, you can use a conditional to ensure that no Products-related page displays in the wizard. Adding page conditions enables wizard page flow. If the condition is met, then the page with the condition will display; if the condition is not met, the page will not display. Use the following syntax to instruct which conditionals control the display of pages.
-   **[Variables Array in ui.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_vars_array_ui_json.htm)**
    Use a variables array to display a question to users conditionally. You can optionally display a question as disabled in the case where an answer has been found or computed using Apex Class. To accommodate variable condition and other fields, the variables array must be an array of objects instead of an array of variable names.
-   **[Use VisualForce To Customize the Wizard UI](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_creating_custom_wizard_vf.htm)**
    To customize wizard appearance beyond the default interface, use VisualForce and a JavaScript library.

#### See Also

-   [ui.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_ui_json_attributes.htm "The ui.json file attributes are:")

## Code Examples

```
{ 
"ui" :{ 
  "pages": [
    {
      "title":"Customization Questions",
      "variables":[ 
        { "name": "customizeUserObjectInfo" } 
      ]
    } ,
    { 
      "title":"User Object Information",
      // Only show this page if the user checked the "customizeUserObjectInfo" checkbox. 
      "condition":"{{Variables.customizeUserObjectInfo == 'Yes'}}", 
      "variables":[ 
        { "name": "userObjectUsernameField" }, 
        { "name": "userObjectName" },
        { "name": "pageConditionVariable" }, 
        { "name": "showBoolean" }
      ],
      "helpUrl":"https://salesforce.com/wave/salesapp/page1/help.html" 
    }, 
    { 
      "title":"Job Information", 
      "variables":[ 
        { "name": "maxAllowedOffset" },
        { "name": "booleanExample", "visibility": "{{Variables.showBoolean ? 'Visible' : 'Hidden'}}" },
      ],
      "helpUrl":"https://salesforce.com/wave/salesapp/page2/help.html" 
    } 
  ],
  "displayMessages": [
    { 
      "text":"When we're done creating the app, we'll send you an email.",
      "location": "AppLandingPage"
    }
  ] 
}
```

## Related Topics

- Page Condition Syntax for ui.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_page_cond_syntax_ui_json.htm)
- Variables Array in ui.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_vars_array_ui_json.htm)
- Use VisualForce To Customize the Wizard UI (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_creating_custom_wizard_vf.htm)
- ui.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_ui_json_attributes.htm)
