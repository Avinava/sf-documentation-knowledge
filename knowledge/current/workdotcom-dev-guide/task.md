---
title: "Task"
domain: workdotcom-dev-guide
topic: task
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.379Z
estimatedTokens: 1599
keywords: [Task, Work.com, uses, standard, custom, tasks, Operations, Feed, Command, Center, Employee, Service, transition, plan, managed]
---

# Task

> Work.com uses the Task standard object and custom fields to list tasks in the
      Operations Feed for Command Center. Employee Service uses the Task standard object and custom
      fields to list tasks in a transition plan for HR Service Center. The managed packages for each
      product install the indicated fields for the Task standard
    object.

# Task

Work.com uses the Task standard object and custom fields to list tasks in the Operations Feed for Command Center. Employee Service uses the Task standard object and custom fields to list tasks in a transition plan for HR Service Center. The managed packages for each product install the indicated fields for the Task standard object.

## Custom Fields

| Field | Details |
| --- | --- |
| wkcc__ActionCategory__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category of the task, such as an alert or an employee wellness action. The task must have an action category to be displayed in the Operations Feed. The task icon in the Operations Feed matches its action category. If you use a custom action category, the default gray icon is displayed.Possible values are:ActionAlertEmployee Wellness ActionEmployee Wellness AlertEmployee Wellness InformationEmployee Wellness WarningInformationLocation ActionLocation AlertLocation InformationLocation WarningWarning |
| wkcc__ActionUrl__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA URL that specifies an action to take on the task. The URL can reference a Lightning page or a record, and can be absolute or relative to your Salesforce instance. The URL can also include parameters if necessary. This example is a relative URL that references a specific Employee record page: /lightning/r/Employee/0id4S000000Y24gQAC/view. A value in this field causes the Take Action button in the Operations Feed to display on the task. If you don’t specify an action URL, the task has a View Task button, which takes the user to the task record. |
| wkcc__ActionType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of action that this task performs if it has an automated action.Possible values are:NoneFlowURL |
| wkcc__ActionApiName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the automation to start. This value is required for the Flow action type. |
| wkcc__ActionInputVariables__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA JSON-formatted string of variables that are used for the Flow action type to specify input variables.Example data for this field:{ "name" : "Admin", "age" : 36, "rights" : [ "admin", "editor", "contributor" ] } |
| wkcc__Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAssociates the task with a location by referencing a Location record. Tasks are filtered in the Operations Feed to match the location specified in the Command Center location filter. If you don’t specify a location for a task, the task displays in the Operations Feed only when no location is selected in the Command Center location filter.NoteIn API version 49.0 and later, the Location standard object supports activities, including tasks, so you don't use the wkcc__Location__c field to associate tasks with a specific location. |
| wkdw__TransitionPlanTask__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transition plan that joins with a transition task. This field is available in API version 56.0 and later. |
| wkdw__TransitionPlanTemplateTaskId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transition plan template task that joins with a transition task. This field is available in API version 56.0 and later. |
| wkdw__UseTaskLabelsInChecklist__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to show the name and description from the task record in the onboarding checklist. This field is available in API version 56.0 and later.The default value is false. |

## Task Record Sharing

Tasks are related to locations through the custom lookup field, wkcc\_\_Location\_\_c. Tasks are visible to the users they’re assigned to. You can share tasks with more users in one of the following ways.

-   **Use role hierarchy**. Set up role hierarchy and assign users to roles. Ensure that users who create tasks are added to the lowest level role. That way, all users in higher roles have access to all tasks. For example, say you create a role for the global operations manager with a user. Beneath this role, you add two regional roles with users: one for the West coast operations manager and one for the East coast operations manager. The global operations manager can access all tasks, and each regional manager can access only the tasks under their hierarchy. For more information, see [User Role Hierarchy](https://help.salesforce.com/articleView?id=admin_roles.htm&language=en_US) in Salesforce Help.
-   **Assign tasks to a queue**. Create a queue and add the users who manage tasks to it. When creating a task, set the Assigned To (Task.OwnerId) field to the queue. That way, all users in the queue can see the tasks in the Operations Feed. Ensure that users don’t assign tasks to themselves and that the tasks remain assigned to the queue. You can use Flow Builder to automate task assignment to a queue for tasks with an action category. For more information about queues, see [Set Up Queues](https://help.salesforce.com/articleView?id=setting_up_queues.htm&language=en_US) in Salesforce Help. In SOAP API, a queue corresponds to the Group object with the Type set to Queue. See [Group](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_group.htm) in the Object Reference for Salesforce and Lightning Platform. For more information about flows, see [Flow Builder](https://help.salesforce.com/articleView?id=flow.htm&language=en_US) in Salesforce Help.

#### See Also

-   [*Object Reference for Salesforce and Lightning Platform*: Task](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm "
    Object Reference for Salesforce and Lightning Platform: Task - HTML (New Window)")

-   [*Object Reference for Salesforce and Lightning Platform*: Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm "
    Object Reference for Salesforce and Lightning Platform: Location - HTML (New Window)")
