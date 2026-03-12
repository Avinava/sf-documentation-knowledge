---
title: "ServiceContractOwnerSharingRule"
domain: object-reference
topic: servicecontractownersharingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.821Z
estimatedTokens: 842
keywords: [ServiceContractOwnerSharingRule, rules, sharing, ServiceContract, customer, service, agreement, users, owner, API, version, 18.0, later, Calls, Usage]
---

# ServiceContractOwnerSharingRule

> Represents the rules for
    sharing a ServiceContract (customer service agreement) with users other than the owner.
  This object is available in API version 18.0 and later.

# ServiceContractOwnerSharingRule

Represents the rules for sharing a ServiceContract (customer service agreement) with users other than the owner. This object is available in API version 18.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To enable access to this object for your org, contact Salesforce customer support. However, we recommend that you instead use Metadata API to programmatically update owner sharing rules because it triggers automatic sharing rule recalculation. The [SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm) Metadata API type is enabled for all orgs.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA value that represents the type of sharing allowed. The possible values are:ReadEdit |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the sharing rule. Maximum size is 1000 characters. This field is available in API version 29.0 and later. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Rule Name in the user interface.This field is available in API version 24.0 and later. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| GroupId | TypereferencePropertiesCreate, Filter, Group, Sort,DescriptionThe ID representing the source group. Service contracts owned by users in the source group trigger the rule to give access. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the sharing rule as it appears in the user interface. Limited to 80 characters. Corresponds to Label in the user interface. |
| UserorGroupId | TypereferencePropertiesCreate, FilterDescriptionThe ID representing the target user or group. Target users or groups are given access. |

## Usage

Use this object to manage the sharing rules for a service contract. General sharing and territory management-related sharing use this object.

#### See Also

-   [ServiceContract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontract.htm "Represents a customer support contract (business agreement). This object is available in API version 18.0 and later.")

-   [*Metadata API Developer Guide*: SharingRules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm "
    Metadata API Developer Guide: SharingRules - HTML (New Window)")

## Related Topics

- ServiceContract (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontract.htm)
