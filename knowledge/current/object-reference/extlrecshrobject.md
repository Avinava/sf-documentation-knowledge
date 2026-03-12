---
title: "ExtlRecShrObject"
domain: object-reference
topic: extlrecshrobject
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.997Z
estimatedTokens: 487
keywords: [ExtlRecShrObject, shared, Partner, Connect, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# ExtlRecShrObject

> Represents a shared object for Partner Connect. This object is
      available in API version 62.0 and later.

# ExtlRecShrObject

Represents a shared object for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| DefaultRecordOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the shared record owner. The owner can be a user or a queue, represented by a Group ID.This field is a polymorphic relationship field.Relationship NameDefaultRecordOwnerRefers ToGroup, User |
| ExtlObjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionObject type in the external org or system that is part of the object field mapping.Possible values are:ExtlRecShrLeadExtlRecShrOpportunityLeadOpportunity |
| ExtlRecShrCnctId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the external record share connection.This field is a relationship field.Relationship NameExtlRecShrCnctRefers ToExtlRecShrCnct |
| FieldMapStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionExporter’s status of the field mapping.Possible values are:ActiveMappingSelectedSystemOverride |
| InternalObjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionObject type in your org or system used to group field selections and field mappings.Possible values are:ExtlRecShrLeadExtlRecShrOpportunityLeadOpportunity |
