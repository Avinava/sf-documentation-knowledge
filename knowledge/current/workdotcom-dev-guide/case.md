---
title: "Case"
domain: workdotcom-dev-guide
topic: case
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.525Z
estimatedTokens: 381
keywords: [Case, Employee, Concierge, uses, standard, store, manage, support, ticket, data, managed, package, installs, custom, Usage]
---

# Case

> Employee Concierge uses the standard object Case to store and manage employee
      support ticket data. The Employee Concierge managed package also installs a custom field for
      the Case object.

# Case

Employee Concierge uses the standard object Case to store and manage employee support ticket data. The Employee Concierge managed package also installs a custom field for the Case object.

## Custom Fields

| Field | Details |
| --- | --- |
| wkdw__TicketCategory__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the API name of the type of support ticket created by an employee or IT Agent. Available on the new ticket form if more than one category exists. By default, Employee Concierge includes one ticket category, IT. Available in API version 51.0 and later.The API name value in this field must match the value in the wkdw_Name__c field on the related wkdw_TicketCategoryDefinition__mdt record. |

## Usage

To create more ticket categories, use the custom metadata type wkdw\_\_TicketCategoryDefinition\_\_mdt. If you add ticket categories, use the Ticket Category field (wkdw\_\_TicketCategory\_\_c) to give users the ability to choose from a list of available categories when creating a ticket. Ticket categories can be based on any business need or classification, such as electrical, mechanical, or HR.

#### See Also

-   [wkdw\_\_TicketCategoryDefinition\_\_mdt](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkdw_sforce_api_objects_ticketcategorydefinition__mdt.htm "Defines the type of ticket category in Employee Concierge. This custom metadata type is available in orgs that have Employee Concierge installed in API version 51.0 and later.")

## Related Topics

- wkdw__TicketCategoryDefinition__mdt (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkdw_sforce_api_objects_ticketcategorydefinition__mdt.htm)
