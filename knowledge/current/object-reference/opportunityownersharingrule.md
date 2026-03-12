---
title: "OpportunityOwnerSharingRule"
domain: object-reference
topic: opportunityownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.580Z
estimatedTokens: 805
keywords: [OpportunityOwnerSharingRule, rule, sharing, opportunity, users, owner, Calls, Usage]
---

# OpportunityOwnerSharingRule

> Represents a rule for sharing an opportunity with users other than the
   owner.

# OpportunityOwnerSharingRule

Represents a rule for sharing an opportunity with users other than the owner.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object for your org, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1000 characters. This field is available in API version 29.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.This field is available in API version 24.0 and later.When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the source group. Opportunities owned by users in the source group trigger the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label on the user interface. |
| OpportunityAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of sharing being allowed. The possible values are:ReadEdit |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the target user or group. The target user or group is being given access. |

## Usage

Use this object to manage the sharing rules for opportunities. General sharing and Territory-related sharing use this object.

#### See Also

-   [Case](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm "Represents a case, which is a customer issue or problem.")

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - HTML (New Window)")

## Related Topics

- Case (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm)
