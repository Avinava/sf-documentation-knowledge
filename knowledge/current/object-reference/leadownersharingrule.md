---
title: "LeadOwnerSharingRule"
domain: object-reference
topic: leadownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.651Z
estimatedTokens: 870
keywords: [LeadOwnerSharingRule, rules, sharing, lead, users, owner, Calls, Usage]
---

# LeadOwnerSharingRule

> Represents the rules for sharing a lead with users other than the
      owner.

# LeadOwnerSharingRule

Represents the rules for sharing a lead with users other than the owner.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1000 characters. This field is available in API version 29.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.This field is available in API version 24.0 and later.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the source group. Leads owned by users in the source group trigger the rule to give access. |
| LeadAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of sharing being allowed. The possible values are:ReadEdit |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label on the user interface. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the target user or group. The target user or group is being given access. |

## Usage

Use these objects to manage the sharing rules for leads. General sharing and Territory-related sharing use this object.

#### See Also

-   [Lead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm "Represents a prospect or lead.")

-   [LeadShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm "Represents a sharing entry on a Lead.")

-   [LeadStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadstatus.htm "Represents the status of a Lead record, such as Open, Qualified, or Converted.")

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - HTML (New Window)")

## Related Topics

- Lead (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm)
- LeadShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm)
- LeadStatus (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadstatus.htm)
