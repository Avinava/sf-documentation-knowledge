---
title: "Add an Einstein Discovery Story to a CRM Analytics
    Template"
domain: bi-dev-guide-wave-templates
topic: add-an-einstein-discovery-story-to-a-crm-analytics-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.371Z
estimatedTokens: 764
keywords: [Add, Einstein, Discovery, Story, CRM, Analytics, Template, stories, added, app, referring, template-info.json, file, Metadata, Examples]
---

# Add an Einstein Discovery Story to a CRM Analytics
    Template

> Einstein Discovery stories can be added to an app template by referring to the story
    in the template-info.json file.

# Add an Einstein Discovery Story to a CRM Analytics Template

Einstein Discovery stories can be added to an app template by referring to the story in the template-info.json file.

## Create the Story

Before adding the story to a template, create it using Einstein Discovery. (See [Create a Story](https://help.salesforce.com/articleView?id=bi_edd_create.htm&type=5&language=en_US).) We recommend testing your story in CRM Analytics Studio before adding it to a template. Also, add the story JSON to the template. See the following section “Configure a Story” for instructions about editing the story JSON dynamically with a template rule.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Templates only support Einstein Discovery stories with a numeric, binary, and multiclass analysis prediction types in the outcome. The count analysis prediction type isn't supported.

## Reference the Story in template-info.json

To include the story in the template, add the following to template-info.json:

```

```

To add multiple stories to a template, add a discoveryStories entry for each story.

Add a conditional to exclude or include the story based on a variable the user selects in the wizard, available org data, or some other condition.

## Story Metadata Examples

Here’s an example acquired-accounts-story.json file for a story with a non-Boolean outcome.

```

```

For a boolean outcome, use something like the following:

```

```

Syntax notes:

-   The id value in dataset must match a dataset specified in template-info.json. You can only create one story per dataset in a template.
-   Story metadata is case-sensitive. Capitalize the first letter in outcome, and use lowercase for fields.
-   All fields are required in the outcome object.
-   outcome and setup.outcome must be the same.
-   The outcome name is the variable we want the story to identify. For example, in the above, we want to learn if the outcome is IsWon.
-   Number of fields can be a minimum of 2 and maximum of 50
-   Fields are the columns of data analyzed by Einstein Discovery and included in the story.
-   The autopilot object is optional. The default value is false.

## Configure a Story

You can add filters to fields in the story. In the following example, we only consider rows where IsClosed = true.

```

```

Use caution when adding date fields. Adding a field that shows individual dates (for example, 2019-07-01), isn’t helpful in the story. Instead, it makes more sense to show months.

```

```

Multivalue fields can’t be included in a story. They’re excluded from the list in the story UI and must not be added to the story json.

Create or alter the story JSON using template rules. For example, the following rule loops through a measures variable and adds each field to the story JSON:

```

```

Here’s a rule that conditionally adds a competitor name if it’s selected in the wizard:

```

```

Here’s another that adds only month of the year values to the story:

```

```

## Code Examples

```
"extendedTypes":{
  "discoveryStories": [
    {
      "label": "AcquiredAccounts",
      "name": "acquired_accounts",
      "file": "acquired-accounts-story.json"
      "condition" : "${Variables.StringValueInclude == 'Yes'}"
    },
    {
      "label": "AcquiredAccounts2",
      "name": "acquired_accounts2",
      "file": "acquired-accounts-story2.json"
    }
  ]
}
```

```
{
    "outcome": {
        "type": "Number",
        "label": "CLV",
        "name": "CLV",
        "goal": "Maximize"
    },
    "autopilot": {
        "enabled": true
    },
    "setup": {
        "dataset": {
            "id": "${App.Datasets.opportunities.Id}"
        },
        "outcome": {
            "type": "Number",
            "label": "CLV",
            "name": "CLV",
            "goal": "Maximize"
        },
        "fields": [{
                "type": "text",
                "name": "Account Id"
            },
            {
                "type": "text",
                "name": "BillingState"
            },
            {
                "type": "date",
                "name": "StartDate"
            },
            {
                "type": "number",
                "name": "example"
            }
            ...
        ]
    } 
}
```

```
"outcome": {
     "failureValue": "False",
     "goal": "Maximize",
     "label": "IsWon",
     "name": "IsWon",
     "successValue": "True",
     "type": "Text"
},
"setup": {
    "outcome": {
        "type": "text",
        "name": "IsWon",
        "displayName": "IsWon",
        "success": "True",
        "failure": "False",
        "goal": "Maximize"
      },...
}
```

```
"fields": [
    {
       "type": "text",
       "name": "IsClosed",
       "includeOther": false,
       "values":
       [
         {
           "name" : "true",
           "ignored":false
         },
         {
           "name" : "false",
           "ignored":true
          }
       ]
    }
]
```

```
{
    "type": "date", 
    "name": "CloseDate",
    "periodicIntervals": [
        "MONTH_OF_YEAR"
    ], 
    "interval": "NONE"
}
```
