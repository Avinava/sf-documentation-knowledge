---
title: "Group"
domain: tooling-api
topic: group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.968Z
estimatedTokens: 1166
keywords: [Group, User, records, Groups, contain, individual, users, particular, role, territory, addition, below, hierarchy, Tooling, API]
---

# Group

> Represents a set of User records. Groups can contain individual
            users, other groups, or the users in a particular role or territory. In addition, groups
            can contain all users below a particular role or territory in the hierarchy.
        Available in Tooling API version 38.0 and later.

# Group

Represents a set of User records. Groups can contain individual users, other groups, or the users in a particular role or territory. In addition, groups can contain all users below a particular role or territory in the hierarchy. Available in Tooling API version 38.0 and later.

## Supported SOAP Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Supported REST HTTP Methods

GET

## Special Access Rules

As of Spring ’20 and later, only authenticated internal and external users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe description of the group. This field is available in API version 62.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Group Name in the user interface.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only your Salesforce org’s internal users can access this field. |
| DoesIncludeBosses | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether records shared with users in this group are also shared with users higher in the role hierarchy (true) or not (false). This field is only available for public groups. This field corresponds to the Grant Access Using Hierarchies checkbox in Setup. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the group. This value corresponds to the value of the Label field in the user interface. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns the group. |
| RelatedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents the ID of the associated records. For example, for Groups of type “Role,” this field is the ID of the associated UserRole. The RelatedId field is polymorphic. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of the group. One of the following values:AllCustomerPortal—All your Customer Portal or Customer Community Plus users. This type is only available when a Customer Portal or a Customer Site is enabled for your org.CollaborationGroup—Chatter group.Manager—Public group that includes a user’s direct and indirect managers. This Group is read-only.ManagerAndSubordinatesInternal—Public group that includes a user and the user’s direct and indirect reports. This group is read-only.Organization—Public group that includes all the User records in the organization. This group is read-only.PRMOrganization—Public group that includes all the partners in an organization that has the partner site or portal feature enabled.Queue—Public group that includes all the User records that are members of a queue.Regular—Standard public group. When you create a group through the create() call, its type must be Regular, unless a site or partner portal is enabled for the org. If so, the type can be Regular or PRMOrganization.Role—Public group that includes all the User records in a particular UserRole.RoleAndSubordinates—Public group that includes all the User records in a particular UserRole and all the User records in any subordinate UserRole. Only available when digital experiences is enabled for your org and Experience Cloud site users are created with external account roles other than a shared person account role.RoleAndSubordinatesInternal—Public group that includes all the User records in an internal UserRole, excluding customer and partner roles, and all the User records in any subordinate internal UserRole.SharingRuleGroup—Group associated with a criteria-based sharing rule.Territory—Public group that includes all the User records in a particular Territory.TerritoryAndSubordinates—Public group that includes all the User records in a particular Territory and all the User records in any subordinate Territory.Only Regular can be used when creating a group. The other values are reserved for system-managed groups. |
