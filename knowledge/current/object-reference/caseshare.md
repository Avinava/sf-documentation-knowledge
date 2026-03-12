---
title: "CaseShare"
domain: object-reference
topic: caseshare
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.317Z
estimatedTokens: 1298
keywords: [CaseShare, sharing, entry, Case, Calls, Special, Access, Rules, Usage]
---

# CaseShare

> Represents a sharing entry on a Case.

# CaseShare

Represents a sharing entry on a Case.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

describeSObjects(), create(), delete(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users with access to the Case object can access this object.

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| CaseAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to the Case. The possible values are:ReadEditAll This value isn’t valid for creating or deleting records.This field must be set to an access level that is higher than the organization’s default access level for cases. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Case associated with this sharing entry. This field can't be updated.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Valid values include:Manual—The User or Group has access because a user with “All” access manually shared the Case with them.Owner—The User is the owner of the Case.ImplicitChild—The User or Group has access to the Case on the Account associated with this Case. After faster account sharing recalculation is enabled for your org, sharing entries with this value aren’t returned in queries. Instead of storing implicit child shares, record access is determined dynamically.RelatedPortalUser—The portal user is the contact on the Case.Rule—The User or Group has access via a Case sharing rule.GuestRule—The User or Group has access via a Case guest user sharing rule.Team—The User or Group has team access.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group.ARImplicit—The User, who belongs to a partner or customer account, has access to the Case via an account relationship data sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the Case. This field can't be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view and edit Case records owned by other users. If you attempt to create a record that matches an existing record, request updates any modified fields and returns the existing record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

After faster account sharing recalculation is enabled for your org, we no longer store implicit share records between accounts and their child case records. Sharing entries that have a value of ImplicitChild in the RowCause field aren’t returned when you query this object. Instead, the system dynamically determines whether users can access child case records when they try to access them. This change speeds up ownership and sharing recalculation for accounts.

For more information, see the [Faster Account Sharing Recalculation](https://help.salesforce.com/s/articleView?id=000394638&type=1&language=en_US) knowledge article.

#### See Also

-   [AccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm "Represents a sharing entry on an account.")

-   [LeadShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm "Represents a sharing entry on a Lead.")

-   [OpportunityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm "Represents a sharing entry on an Opportunity.")

## Related Topics

- Case (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm)
- AccountShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)
- LeadShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm)
- OpportunityShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunityshare.htm)
