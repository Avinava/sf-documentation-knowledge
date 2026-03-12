---
title: "OmniSupervisorConfigUser"
domain: object-reference
topic: omnisupervisorconfiguser
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.419Z
estimatedTokens: 320
keywords: [OmniSupervisorConfigUser, users, whom, Command, Center, Service, configuration, User-level, configurations, override, profile-level, API, version, 41.0, later]
---

# OmniSupervisorConfigUser

> Represents the users to whom a Command Center for Service configuration
   applies. User-level configurations override profile-level configurations. This object is
  available in API version 41.0 and later.

# OmniSupervisorConfigUser

Represents the users to whom a Command Center for Service configuration applies. User-level configurations override profile-level configurations. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), query(), update(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the Command Center for Service configuration.This is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionA unique identifier for the user associated with this Command Center for Service configuration. A user can be associated with only one Command Center for Service configuration. This field is unique within your org.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
