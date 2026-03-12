---
title: "Variables Array in ui.json"
domain: bi-dev-guide-wave-templates
topic: variables-array-in-uijson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.720Z
estimatedTokens: 281
keywords: [Variables, Array, ui.json, display, question, users, conditionally, optionally, disabled, case, answer, found, computed, Apex, accommodate]
---

# Variables Array in ui.json

> Use a variables array to display a question to
  users conditionally. You can optionally display a question as disabled in the case where an answer
  has been found or computed using Apex Class. To accommodate variable condition and other fields,
  the variables array must be an array of objects instead of an
  array of variable names.

# Variables Array in ui.json

Use a variables array to display a question to users conditionally. You can optionally display a question as disabled in the case where an answer has been found or computed using Apex Class. To accommodate variable condition and other fields, the variables array must be an array of objects instead of an array of variable names.

## Variable Object

A variable object can have following fields:

```

```

| Key | Required | Value Description |
| --- | --- | --- |
| name | Yes | Name of the variable. |
| visibility | No | Display condition:If the condition is evaluated to 'true', then this variable (question+input control) is displayed.If evaluated to 'false', this variable won't be displayed.If evaluated to 'disabled', this variable is grayed out.This is evaluated on the client side.Valid values 'Disabled' \| 'Visible' \| 'Hidden'Example Expressions:"{{Variables.booleanType ? 'Visible' : 'Hidden'}}""{{Variables.orgHasUserObject == 'Yes' ? 'Visible' : 'Hidden'}}""{{Variables.orgHasUserObject == 'Yes' ? 'Disabled' : 'Visible' }}" |

## Example

Example of variable object:

```

```

## Code Examples

```
{ 
   "name": "userObjectUsernameField", 
   "visibility": "{{Variables.orgHasUserObject == 'Yes'}}"
}
```

```
{ 
    "ui" :{ 
        "pages": [ 
            { 
                "title":"User Object Information",
                // Only show this page if the user checked the "Customize" button. 
                "condition":"{{Variables.customizeOpportunities == 'Yes'}}", 
                "variables":[                     { 
                        "name": "userObjectUsernameField", 
                        "visibility": "{{Variables.orgHasUserObject == 'Yes' ? 'Visible' : 'Hidden'}}"
                    },
                    { 
                        "name": "userObjectName", 
                        "visibility": "{{Variables.orgHasUserObject == 'Yes' ? 'Visible' : 'Hidden'}}"
                    }
                ],
                "helpUrl":"https://salesforce.com/wave/salesapp/page1/help.html" 
            }, 
            { 
                "title":"Job Information", 
                "variables":[ 
                    "maxAllowedOffset"
                ],
                "helpUrl":"https://salesforce.com/wave/salesapp/page2/help.html" 
            }         ],
        "displayMessages": [
             { 
            	  "text":"When we're done creating the app, we'll send you an email. Before you access the dashboards, you need to wait for the dataflow for the app to finish running. After that, refresh this page and start exploring.",
			"location": "AppLandingPage"
             }
         ]     }
}
```
