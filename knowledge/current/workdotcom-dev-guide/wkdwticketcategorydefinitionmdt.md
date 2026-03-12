---
title: "wkdw__TicketCategoryDefinition__mdt"
domain: workdotcom-dev-guide
topic: wkdwticketcategorydefinitionmdt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.533Z
estimatedTokens: 614
keywords: [wkdw__TicketCategoryDefinition__mdt, ticket, category, Employee, Concierge, custom, metadata, orgs, installed, API, version, 51.0, later, wkdw, _TicketCategoryDefinition]
---

# wkdw__TicketCategoryDefinition__mdt

> Defines the type of ticket category in Employee Concierge. This custom
    metadata type is available in orgs that have Employee Concierge installed in API version 51.0
    and later.

# wkdw\_\_TicketCategoryDefinition\_\_mdt

Defines the type of ticket category in Employee Concierge. This custom metadata type is available in orgs that have Employee Concierge installed in API version 51.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| wkdw__IsActive__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this ticket category is active or not. By default, the value for this field is true. |
| wkdw__Name__c | TypetextPropertiesFilter, Group, SortDescriptionThe unique name of the ticket category. The value for this field must match the corresponding API name value in the ticket category picklist field (wkdw__TicketCategory__c on the Case object). |
| wkdw__QuickAction__c | TypetextPropertiesFilter, Group, SortDescriptionThe set of fields associated with the ticket category. These fields are available on the new ticket form when this ticket category is selected.Specify the full API name of the quick action, including the org namespace prefix.The record type of the quick action determines the record type for tickets created using the associated ticket category. One record type can have several ticket category definitions associated with it. |

## Usage

Ticket categories give employees and IT Agents the ability to create more than one type of support ticket in Employee Workspace. Ticket categories can be based on any business need or classification, such as electrical, mechanical, or HR.

By default, only one ticket category is available, but additional categories can be created using the custom metadata type wkdw\_\_TicketCategoryDefinition\_\_mdt. For each ticket category, use the Ticket Category field (wkdw\_\_TicketCategory\_\_c) to give users the ability to choose from a category when creating a ticket. The wkdw\_\_TicketCategory\_\_c and

You can customize the fields and page layouts for each ticket category you create.

#### See Also

-   [Case](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkdw_sforce_api_objects_case.htm "Employee Concierge uses the standard object Case to store and manage employee support ticket data. The Employee Concierge managed package also installs a custom field for the Case object.")


-   [*Salesforce Help*: Create Ticket Categories](https://help.salesforce.com/articleView?id=ec_create_ticket_categories.htm&language=en_US)

## Related Topics

- Case (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkdw_sforce_api_objects_case.htm)
