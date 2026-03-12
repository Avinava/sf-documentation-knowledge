---
title: "ExtlRecShrPicklistMap"
domain: object-reference
topic: extlrecshrpicklistmap
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.010Z
estimatedTokens: 322
keywords: [ExtlRecShrPicklistMap, external, record, share, picklist, mapping, partner, vendor, system, Connect, API, version, 62.0, later, Calls]
---

# ExtlRecShrPicklistMap

> Represents the external record share picklist field mapping between
         the partner and vendor system for Partner Connect. This object is available in API
      version 62.0 and later.

# ExtlRecShrPicklistMap

Represents the external record share picklist field mapping between the partner and vendor system for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| ImportedPcklstOptionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the external record share picklist option of the external system.This field is a relationship field.Relationship NameImportedPcklstOptionRefers ToExtlRecShrPcklstOptn |
| InternalPcklstOptionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the external record share picklist option of the internal system.This field is a relationship field.Relationship NameInternalPcklstOptionRefers ToExtlRecShrPcklstOptn |
