---
title: "ExtlRecShrCnctAccnt"
domain: object-reference
topic: extlrecshrcnctaccnt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.974Z
estimatedTokens: 304
keywords: [ExtlRecShrCnctAccnt, association, account, external, record, share, connection, Partner, Connect, API, version, 62.0, later, Calls, Special]
---

# ExtlRecShrCnctAccnt

> Represents an association between an account and an external record
         share connection for Partner Connect. This object is available in API version 62.0 and
      later.

# ExtlRecShrCnctAccnt

Represents an association between an account and an external record share connection for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, SortDescriptionID of the account.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ExtlRecShrCnctId | TypereferencePropertiesFilter, Group, SortDescriptionID of the ExtlRecShrCnct record.This field is a relationship field.Relationship NameExtlRecShrCnctRefers ToExtlRecShrCnct |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
