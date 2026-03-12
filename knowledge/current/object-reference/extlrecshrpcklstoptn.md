---
title: "ExtlRecShrPcklstOptn"
domain: object-reference
topic: extlrecshrpcklstoptn
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.005Z
estimatedTokens: 373
keywords: [ExtlRecShrPcklstOptn, picklist, option, external, record, share, shared, partner, vendor, Connect, API, version, 62.0, later, Calls]
---

# ExtlRecShrPcklstOptn

> Represents a picklist option of an external record share picklist
         field shared between a partner and vendor for Partner Connect. This object is
      available in API version 62.0 and later.

# ExtlRecShrPcklstOptn

Represents a picklist option of an external record share picklist field shared between a partner and vendor for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| ExtlRecShrFieldId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated external record share field of type picklist.This field is a relationship field.Relationship NameExtlRecShrFieldRefers ToExtlRecShrField |
| IsDefaultOption | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this picklist option is set as the default option (true) or not (false).The default value is false. |
| SharedOptionLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel of the picklist option. |
| SharedOptionValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionValue of the picklist option. |
