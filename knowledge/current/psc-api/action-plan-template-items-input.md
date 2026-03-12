---
title: "Action Plan Template Items Input"
domain: psc-api
topic: action-plan-template-items-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.809Z
estimatedTokens: 216
keywords: [Action, Plan, Template, Items, Input, representation, record]
---

# Action Plan Template Items Input

> Input representation for an Action Plan record.

# Action Plan Template Items Input

Input representation for an Action Plan record.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adhocItems | Action Plan Item Tasks Input | Details of the action plan items to be created.NoteApplicable only when the shouldAllowOverride is set to true. | Optional | 57.0 |
| excludedItems | String[] | IDs of the action plan items to be removed.NoteApplicable only when the shouldAllowOverride is set to true. | Optional | 57.0 |
| name | String | Name of the action plan. | Required | 57.0 |
| targetId | String | Target ID of the action plan. | Required | 57.0 |
| updateableItems | Action Plan Item Tasks Input | Action plan items to be updated.NoteApplicable only when the shouldAllowOverride is set to true. | Optional | 57.0 |

## Code Examples

```
{
   "targetId":”07rS60000004CAUIA2",
   “name”:”Goal Assignment Action Demo”,
   "excludedItems":{
      "records":[
         “0PJS60000004CA1OAM”
      ]
   },
   "updateableItems":{
      "tasks":{
         "records":[
            {
               "id":"BSHS60000004CA1OQA",
               "subject":"Onboarding Mandatory Training",
               "dueDate":"30-01-2022",
               "status":"Completed",
               "priority":"High",
               "comment":"Mandatory trainings for the new hires",
               "assignedTo":"0YwS60000004IByKAM"
            }
         ]
      }
   },
   "adhocItems":{
      "tasks":{
         "records":[
            {
               "subject":"Salesforce Platform Basics Training",
               "dueDate":"20-02-2023",
               "status":"In Progress",
               "priority":"Normal",
               "comment":"Learn the Salesforce Platform basics",
               "assignedTo":"0BsS60000004IByRAM",
               "isRequired":"False"
            }
         ]
      }
   }
}
```

## Related Topics

- Action Plan Item Tasks Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_action_plan_item_tasks_input.htm)
