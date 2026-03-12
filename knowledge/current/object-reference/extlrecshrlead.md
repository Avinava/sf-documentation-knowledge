---
title: "ExtlRecShrLead"
domain: object-reference
topic: extlrecshrlead
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.991Z
estimatedTokens: 419
keywords: [ExtlRecShrLead, Lead, record, vendor, org, you’re, partner, Connect, API, version, 62.0, later, Calls, Special, Access]
---

# ExtlRecShrLead

> Represents the Lead record of a vendor org if you’re a partner. If
         you’re a vendor for Partner Connect, this object represents a partner org. This object
      is available in API version 62.0 and later.

# ExtlRecShrLead

Represents the Lead record of a vendor org if you’re a partner. If you’re a vendor for Partner Connect, this object represents a partner org. This object is available in API version 62.0 and later.

In a related list, the label of this object is Connected External Leads.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| ExtlRecShrCnctId | TypereferencePropertiesFilter, Group, SortDescriptionID of the external record share connection.This field is a relationship field.Relationship NameExtlRecShrCnctRefers ToExtlRecShrCnct |
| LeadId | TypereferencePropertiesFilter, Group, SortDescriptionID of the partner lead.This field is a relationship field.Relationship NameLeadRelationship TypeMaster-detailRefers ToLead (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
