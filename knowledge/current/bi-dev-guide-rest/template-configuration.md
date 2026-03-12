---
title: "Template Configuration"
domain: bi-dev-guide-rest
topic: template-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.627Z
estimatedTokens: 261
keywords: [Template, Configuration, Analytics]
---

# Template Configuration

> The configuration for an Analytics Template.

# Template Configuration

The configuration for an Analytics Template.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID or fully qualified name of the template. | Small, 55.0 | 55.0 |
| layout | UI​Layout​Definition | The user interface layout definition for the template. | Small, 56.0 | 56.0 |
| name | String | The local API name of the template. | Small, 55.0 | 55.0 |
| namespace | String | The namespace of the template provider. | Small, 55.0 | 55.0 |
| ui | UI​Definition | The user interface definition for the template. | Small, 36.0 | 36.0 |
| variables | Map <String, Variable​Definition> | A map of the defined variables for the template. | Small, 36.0 | 36.0 |

The following JSON is an example response body.

```

```

#### See Also

-   [Template Configuration Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_configuration.htm "Returns the configuration of an Analytics template.")

## Code Examples

```
{
  "ui": {
    "pages": [
      {
        "title": "Application Preferences",
        "variables": [
          "lensDashboardName",
          "dashboardHeader"
        ]
      },
      {
        "title": "Other preferences",
        "variables": [
          "emailNotifications",
          "emailAddress"
        ]
      }
    ]
  },
  "variables": {
    "numberPicked": {
      "defaultValue": 3,
      "description": "A number between 1 and 10.",
      "excludeSelected": false,
      "excludes": [],
      "label": "Please pick a number between 1 and 10?",
      "required": true,
      "variableType": {
        "enums": [],
        "max": 10,
        "min": 1,
        "type": "NumberType"
      }
    },
    "lensDashboardName": {
      "defaultValue": "My View of Election Data",
      "description": "The name of the sample lens.",
      "excludeSelected": false,
      "excludes": [],
      "label": "What would you like to name your lens and dashboard?",
      "required": true,
      "variableType": {
      "  type": "StringType"
      }
    },
    "dashboardHeader": {
      "defaultValue": "Wow! Interactive Dashboards are Nice!",
      "description": "The dashboard header.",
      "excludeSelected": false,
      "excludes": [],
      "label": "What would you like the dashboard header to say?",
      "required": true,
      "variableType": {
        "enums": [],
        "type": "StringType"
      }
    },
    "emailNotifications": {
      "defaultValue": "Yes",
      "description": "Email notifications",
      "excludeSelected": false,
      "excludes": [],
      "label": "Would you like to receive emails for promotions?",
      "required": false,
      "variableType": {
        "enums": ["Yes","No"],
        "type": "StringType"
      }
    },
    "emailAddress": {
      "defaultValue": null,
      "description": "Your email address.",
      "excludeSelected": false,
      "excludes": [],
      "label": "Please enter your email address?",
      "required": false,
      "variableType": {
        "enums": [],
        "type": "StringType"
        }
      }
    }
}
```

## Related Topics

- UI​Layout​Definition (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_ui_layout_definition.htm)
- UI​Definition (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_ui_definition.htm)
- Variable​Definition (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_definition.htm)
- Template Configuration Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_configuration.htm)
