---
title: "ExtlRecShrFieldMap"
domain: object-reference
topic: extlrecshrfieldmap
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.986Z
estimatedTokens: 318
keywords: [ExtlRecShrFieldMap, external, record, share, mapping, sender, receiver, Partner, Connect, API, version, 62.0, later, Calls, Special]
---

# ExtlRecShrFieldMap

> Represents the external record share field mapping between the sender
         and receiver for Partner Connect. This object is available in API version 62.0 and
      later.

# ExtlRecShrFieldMap

Represents the external record share field mapping between the sender and receiver for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| ImportedFieldId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the ExtlRecShrField record containing the field data sent from the external system.This field is a relationship field.Relationship NameImportedFieldRefers ToExtlRecShrField |
| InternalFieldId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the ExtlRecShrField record containing the field data received on the internal system.This field is a relationship field.Relationship NameInternalFieldRefers ToExtlRecShrField |
