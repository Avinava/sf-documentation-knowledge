---
title: "UserMonthlyMetricOwnerSharingRule"
domain: object-reference
topic: usermonthlymetricownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.861Z
estimatedTokens: 781
keywords: [UserMonthlyMetricOwnerSharingRule, rules, sharing, user, monthly, metric, users, owner, Calls, Special, Access, Usage]
---

# UserMonthlyMetricOwnerSharingRule

> Represents the rules for sharing the user monthly metric with users
      other than the owner.

# UserMonthlyMetricOwnerSharingRule

Represents the rules for sharing the user monthly metric with users other than the owner.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object for your org, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Sales Engagement must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDetermines the level of access users have to records. Values are:Read (read only)Edit (read/write) |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the sharing rule. Maximum length is 1000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the source group. Records that are owned by users in the source group trigger the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the UI. Maximum length is 80 characters. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that you are granting access to. |

## Usage

Use this object to manage the sharing rules for cases. General sharing and territory management-related sharing use this object.

#### See Also

-   [UserMonthlyMetric](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermonthlymetric.htm "Represents the monthly engagement metrics for a user. This object is available in API version 52.0 and later.")

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - HTML (New Window)")

## Related Topics

- UserMonthlyMetric (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_usermonthlymetric.htm)
