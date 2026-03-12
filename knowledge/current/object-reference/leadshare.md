---
title: "LeadShare"
domain: object-reference
topic: leadshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.659Z
estimatedTokens: 1037
keywords: [LeadShare, sharing, entry, Lead, Calls, Special, Access, Rules, Usage]
---

# LeadShare

> Represents a sharing entry on a Lead.

# LeadShare

Represents a sharing entry on a Lead.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users with access to the Lead object can access this object.

## Fields

The properties available for some fields depend on the default org-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LeadAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to the Lead. The possible values are:ReadEditAll This value is not valid when creating or updating these records.This field must be set to an access level that is higher than the organization’s default access level for leads. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Lead associated with this sharing entry. This field can’t be updated.This is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Values include:Manual—The User or Group has access because a user with “All” access manually shared the Lead with them.Owner—The User is the owner of the Lead.Rule—The User or Group has access via a Lead sharing rule.GuestRule—The User or Group has access via a Lead guest user sharing rule.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group.ARImplicit—The User, who belongs to a partner or customer account, has access to the Lead via an account relationship data sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the Lead. This field can’t be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view or edit leads owned by other users.

If you attempt to create a record that matches an existing record, the existing record is returned.

#### See Also

-   [AccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm "Represents a sharing entry on an account.")

-   [Case](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm "Represents a case, which is a customer issue or problem.")

-   [CaseShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm "Represents a sharing entry on a Case.")

-   [OpportunityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm "Represents a sharing entry on an Opportunity.")

## Related Topics

- AccountShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)
- Case (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm)
- CaseShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_caseshare.htm)
- OpportunityShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm)
