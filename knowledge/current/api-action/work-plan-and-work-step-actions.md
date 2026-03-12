---
title: "Work Plan and Work Step Actions"
domain: api-action
topic: work-plan-and-work-step-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.251Z
estimatedTokens: 1019
keywords: [Work, Plan, Step, Actions, Manage, plans, steps, REST, HTTP, Add, Generate]
---

# Work Plan and Work Step Actions

> Manage work plans and work steps using actions.

# Work Plan and Work Step Actions

Manage work plans and work steps using actions.

For more information about Field Service, see the [Field Service Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/).

These actions are available in API version 52.0 and later. They require Field Service to be enabled.

Add Work Plans Limits

You can generate work plans linked to work orders via the addWorkPlans flow, but, by default, users can only generate 100 work plans per work order.

## Supported REST HTTP Methods

URIs

[Add work plans](#addWorkPlans): /services/data/vXX.X/actions/standard/addWorkPlans

[Add work steps](#addWorkSteps): /services/data/vXX.X/actions/standard/addWorkSteps

[Generate work plans](#generateWorkPlans): /services/data/vXX.X/actions/standard/generateWorkPlans

[Delete work plans](#deleteWorkPlans): /services/data/vXX.X/actions/standard/deleteWorkPlans

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Add Work Plans

URI: /services/data/vXX.X/actions/standard/addWorkPlans

This action creates work plan records from the work plan library.

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The ID of the work order or work order line item to add the work plans to. |
| workPlanTemplateIdList | Typearray of stringsDescriptionRequired. The IDs of the work plan templates used to instantiate the work plans. |

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionThe ID of the work order or work order line item. |
| workPlanIdList | Typearray of stringsDescriptionThe list of work plan IDs. |

Sample Input

The following code sample adds work plans:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Add Work Steps

URI: /services/data/vXX.X/actions/standard/addWorkSteps

This action creates work step records from the work plan library.

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The ID of the work plan to add the work steps to. |
| workStepTemplateIdList | Typearray of stringsDescriptionRequired. The IDs of the work step templates used to instantiate the work steps. |

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionThe ID of the work order or work order line item. |
| workStepIdList | Typearray of stringsDescriptionThe list of work step IDs. |
|  |  |

Sample Input

The following code sample adds work steps:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Generate Work Plans

URI: /services/data/vXX.X/actions/standard/generateWorkPlans

This action generates work plans based off rules defined in the work plan library.

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The ID of the work order or work order line item to generate work plans for. |

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionThe ID of the work order or work order line item. |
| workPlanIdList | Typearray of stringsDescriptionThe list of work plan IDs. |

Sample Input

The following code sample generates a work plan:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Delete Work Plans

URI: /services/data/vXX.X/actions/standard/deleteWorkPlans

This action deletes all the work plans (and its child work steps) associated with a WorkOrder or WorkOrderLineItem.

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The ID of the work order or work order line item. |

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionThe ID of the work order or work order line item. |
| workPlanIdList | Typearray of stringsDescriptionThe ID list for the work plans that were deleted. |

Sample Input

The following code deletes a work plan:

```

```

Sample Output

The following code sample illustrates a response after a successful request.

```

```

## Code Examples

```
{
    "inputs" : [ {
        "recordId" : "0WOxx00000007j3",
        "workPlanTemplateIdList" : ["7Iyxx0000004LSS", "7Iyxx0000004LTT"]
    }]
}
```

```
[ {
    "actionName" : "addWorkPlans",
    "errors" : null,
    "isSuccess" : true,
    "outputValues" : {
        "recordId" : "0WOxx00000007j3",
        "workPlanIdList" : ["0gqxx0000000Adh", "0gqxx0000000Adi"]
    }
} ]
```

```
{
    "inputs" : [ {
        "recordId" : "0gqRM0000004DxoYAE",
        "workStepTemplateIdList" : ["4L0xx0000004FJoCAM", "4L0xx0000004FJoNAC"]
    }]
}
```

```
[ {
    "actionName" : "addWorkSteps",
    "errors" : null,
    "isSuccess" : true,
    "outputValues" : {
       "recordId" : "0gqRM0000004DxoYAE",
       "workstepIdList" : ["0hFxx00000007uLEAQ", "0hFxx00000007uRAUW"]
    }
} ]
```

```
{
    "inputs" : [ {
        "recordId" : "0WOxx00000007j3"
    }]
}
```
