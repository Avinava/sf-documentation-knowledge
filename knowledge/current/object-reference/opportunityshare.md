---
title: "OpportunityShare"
domain: object-reference
topic: opportunityshare
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.602Z
estimatedTokens: 1478
keywords: [OpportunityShare, sharing, entry, Opportunity, Calls, Special, Access, Rules, Usage]
---

# OpportunityShare

> Represents a sharing entry on an Opportunity.

# OpportunityShare

Represents a sharing entry on an Opportunity.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

describeSObjects(), create(), delete(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users with access to the Opportunity object can access this object.

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the user or group has to the opportunity. The possible values are:ReadEditAll—This value is not valid when creating, updating, or deleting records.This field must be set to an access level that’s higher than the org’s default access level for opportunities. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the opportunity associated with this sharing entry. This field can’t be updated.This is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Valid values include:Owner—The User is the owner of the opportunity.Manual—The User or Group has access because a user with “All” access manually shared the opportunity with the user or group.Rule—The User or Group has access via an opportunity sharing rule.GuestRule—The User or Group has access via an opportunity guest user sharing rule.ImplicitChild—The User or Group has access to the opportunity on the account associated with this opportunity. After faster account sharing recalculation is enabled, sharing entries with this value aren’t returned in queries. Instead of storing implicit child shares, record access is determined dynamically.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group.ARImplicit—The User, who belongs to a partner or customer account, has access to the opportunity via an account relationship data sharing rule.Sales Team—The User has access to the opportunity because the user is on the opportunity sales team for the opportunity. The OpportunityTeamMember object sets the access level. See OpportunityTeamMember for more information.Territory—The forecast manager has access because they are assigned to a territory above the territory that is assigned the opportunity. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that has been given access to the opportunity. This field can’t be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view or edit opportunities owned by other users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

After faster account sharing recalculation is enabled for your org, we no longer store implicit share records between accounts and their child opportunity records. Sharing entries that have a value of ImplicitChild in the RowCause field aren’t returned when you query this object. Instead, the system dynamically determines whether users can access child opportunity records when they try to access them. This change speeds up ownership and sharing recalculation for accounts.

For more information, see the [Faster Account Sharing Recalculation](https://help.salesforce.com/s/articleView?id=000394638&type=1&language=en_US) knowledge article.

If you attempt to create a record that matches an existing record, any modified fields are updated, the system returns the existing record.

If an opportunity is shared in multiple ways with a user, you don’t always see multiple sharing records. If a user has access to an opportunity for one or more of the following RowCause values, the records in the OpportunityShare object are compressed into one record with the highest level of access.

-   Manual
-   Owner

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
