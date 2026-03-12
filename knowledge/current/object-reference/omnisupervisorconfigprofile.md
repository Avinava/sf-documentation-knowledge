---
title: "OmniSupervisorConfigProfile"
domain: object-reference
topic: omnisupervisorconfigprofile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.403Z
estimatedTokens: 330
keywords: [OmniSupervisorConfigProfile, supervisor, profiles, Command, Center, Service, configuration, User-level, configurations, override, profile-level, API, version, 41.0, later]
---

# OmniSupervisorConfigProfile

> Represents the supervisor profiles to which a Command Center for
   Service configuration applies. User-level configurations override profile-level
   configurations. This object is available in API version 41.0 and later.

# OmniSupervisorConfigProfile

Represents the supervisor profiles to which a Command Center for Service configuration applies. User-level configurations override profile-level configurations. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), query(), update(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| OmniSupervisorConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA unique identifier for the Command Center for Service configuration.This is a relationship field.Relationship NameOmniSupervisorConfigRelationship TypeLookupRefers ToOmniSupervisorConfig |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionA unique identifier for the profile that’s associated with this Command Center for Service configuration. A profile can be associated with only one Command Center for Service configuration. This field is unique within your org.This is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
