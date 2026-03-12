---
title: "ServiceResourceOwnerSharingRule"
domain: object-reference
topic: serviceresourceownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.914Z
estimatedTokens: 679
keywords: [ServiceResourceOwnerSharingRule, rules, sharing, service, resource, user, records, owner, anyone, above, role, hierarchy, API, version, 38.0]
---

# ServiceResourceOwnerSharingRule

> Represents the rules for sharing a service resource with user records
   other than the owner or anyone above the owner in the role hierarchy. This object is
  available in API version 38.0 and later.

# ServiceResourceOwnerSharingRule

Represents the rules for sharing a service resource with user records other than the owner or anyone above the owner in the role hierarchy. This object is available in API version 38.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object for your org, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1000 characters. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the source group. A service resource owned by a User in the source Group triggers the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label on the user interface. |
| ServiceResourceAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of access granted to the target Group, or UserRole. The possible values are:ReadEditAll |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID representing the User or Group being granted access. |
