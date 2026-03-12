---
title: "UserRole"
domain: object-reference
topic: userrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.396Z
estimatedTokens: 1343
keywords: [UserRole, user, role, organization, Calls, Special, Access, Rules, Usage]
---

# UserRole

> Represents a user role in your organization.

# UserRole

Represents a user role in your organization.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object was called “Role” in previous versions of the API documentation.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users with the View Roles and Role Hierarchy permission can access this object, and only users with the Manage Roles permission can edit this object.

## Fields

| Field | Details |
| --- | --- |
| CaseAccessForAccountOwner | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe case access level for the account owner. |
| ContactAccessForAccountOwner | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe contact access level for the account owner.NoteWhen DefaultContactAccess is set to Controlled by Parent, you can’t create or update this field. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Role Name in the user interface.This field is available in API version 24.0 and later.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| ForecastUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the forecast manager associated with this role. Label is User ID. |
| IsPartner | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the user role is a partner who has access to the partner portal (true) or not (false). This field is not available for release 9.0 and later. Instead, use PortalType with the value Partner. |
| MayForecastManagerShare | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the forecast manager can manually share their own forecast. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the role. Corresponds to Label on the user interface. |
| OpportunityAccessForAccountOwner | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The opportunity access level for the account owner. Note that you can’t set a user role with an opportunity access less than that specified in organization-wide defaults. |
| ParentRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent role. |
| PortalAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the role’s associated portal account. This field is read-only. |
| PortalAccountOwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the role’s associated portal account’s owner. This field is read-only. |
| PortalRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe portal role: Executive, Manager, User, or PersonAccount. |
| PortalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThis value indicates the type of portal for the role:None: Salesforce application role.CustomerPortal: Customer portal role.Partner: partner portal role. The field IsPartner used in release 8.0 will map to this value.This field replaces IsPartner beginning with release 9.0. |
| RollupDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the forecast rollup. Label is Description. |

## Usage

Use this object to query the set of currently configured user roles in your organization. Use it in your client application to obtain valid UserRole IDs to use when querying or modifying a User record.

Users with the View Roles and Role Hierarchy permission can query or describe this object. If your client application logs in with the “Manage Users” permission, it can query, create, update, or delete UserRole records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t update any field for a portal role.

For example, the following code finds all roles that are not assigned to any users.

```

```

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Code Examples

```
SELECT Id, Name, DeveloperName 
FROM UserRole 
WHERE Id NOT IN (SELECT UserRoleId 
                 FROM User 
                 WHERE UserRoleId !='000000000000000')
```

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
