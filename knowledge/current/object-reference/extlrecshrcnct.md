---
title: "ExtlRecShrCnct"
domain: object-reference
topic: extlrecshrcnct
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.969Z
estimatedTokens: 450
keywords: [ExtlRecShrCnct, authentication, data, outbound, calls, inbound, external, system, publish, events, Partner, Connect, API, version, 62.0]
---

# ExtlRecShrCnct

> Represents authentication data to make outbound calls to and inbound
         calls from an external system to publish events for Partner Connect. This object is
      available in API version 62.0 and later.

# ExtlRecShrCnct

Represents authentication data to make outbound calls to and inbound calls from an external system to publish events for Partner Connect. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update()

## Special Access Rules

To see this object, enable Partner Connect or Partner Connect for Vendors. See [Set Up Partner Connect as a Partner](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_partner_parent.htm&type=5&language=en_US) and [Set Up Partner Connect as a Vendor](https://help.salesforce.com/s/articleView?id=slack.prm_pc_setup_vendor_parent.htm&type=5&language=en_US) in Salesforce Help.

## Fields

| Field | Details |
| --- | --- |
| CnctName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionName of the connection. |
| CnctRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSystem’s role in the connection.Possible values are:PartnerVendor |
| CnctStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the connection.Possible values are:DisabledEnabledErrorPendingUnknown |
| ExternalClientApplicationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of external client app representing your org’s connection to the external system.This field is a relationship field.Relationship NameExternalClientApplicationRefers ToExternalClientApplication |
| ExtlSystem | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionID of the external system. |
| NamedCredentialId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the named credential.This field is a relationship field.Relationship NameNamedCredentialRefers ToNamedCredential |
