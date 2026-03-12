---
title: "Action Plan Templates (GET, POST)"
domain: psc-api
topic: action-plan-templates-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.283Z
estimatedTokens: 457
keywords: [Action, Plan, Templates, POST, API, Template, items]
---

# Action Plan Templates (GET, POST)

> API to create and get Action Plan Template items. An Action Plan
      Template has a default set of parameters required to create an Action Plan.

# Action Plan Templates (GET, POST)

API to create and get Action Plan Template items. An Action Plan Template has a default set of parameters required to create an Action Plan.

Resource

```

```

Resource Example

```

```

Available version

57.0

Requires Chatter

No

HTTP methods

GET, POST

Response body for GET

[Action Plan Template Items](atlas.en-us.psc_api.meta/psc_api/connect_responses_action_plan_template_items.htm "Output representation for the list of the action plan template items.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| shouldAllowOverride | Boolean | Indicates whether the Action Plan to be created from the Action Plan Template overrides the default parameters of the template (true) or not (false). | Optional | 57.0 |

Request body for POST

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

Response body for POST

[Action Plan Output](atlas.en-us.psc_api.meta/psc_api/connect_responses_action_plan_output.htm "Output representation of an Action Plan record.")

## Code Examples

```
/connect/action-plan/actionplantemplateversion/${actionPlantemplateId}
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/action-plan/actionplantemplateversion/0PTS60000004C9DOAU?allowOverrides=true
```

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

- Action Plan Template Items (atlas.en-us.psc_api.meta/psc_api/connect_responses_action_plan_template_items.htm)
- Action Plan Item Tasks Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_action_plan_item_tasks_input.htm)
- Action Plan Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_action_plan_output.htm)
