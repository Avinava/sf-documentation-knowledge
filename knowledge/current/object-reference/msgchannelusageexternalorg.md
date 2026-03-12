---
title: "MsgChannelUsageExternalOrg"
domain: object-reference
topic: msgchannelusageexternalorg
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.032Z
estimatedTokens: 417
keywords: [MsgChannelUsageExternalOrg, Enterprise, EID, Business, Unit, MID, Marketing, Cloud, connections, Unified, Messaging, channel, API, version, 60.0]
---

# MsgChannelUsageExternalOrg

> Represents the Enterprise ID (EID) and Business Unit (MID) for
         Marketing Cloud connections in a Unified Messaging channel. This object is available
      in API version 60.0 and later.

# MsgChannelUsageExternalOrg

Represents the Enterprise ID (EID) and Business Unit (MID) for Marketing Cloud connections in a Unified Messaging channel. This object is available in API version 60.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExternalOrgIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Enterprise ID (EID) of a Marketing Cloud connection. |
| ExternalSubOrgIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Business Unit (MID) of a Marketing Cloud connection. |
| MessagingChannelUsageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated MessagingChannelUsage record, which must have a DeploymentType of MJ (referring to Marketing Cloud Journey Builder).This field is a relationship field.Relationship NameMessagingChannelUsageRelationship TypeLookupRefers ToMessagingChannelUsage |

## Usage

MsgChannelUsageExternalOrg records apply only to MessagingChannelUsage records related to Marketing Cloud.

Only one MsgChannelUsageExternalOrg record can exist for each MessagingChannelUsage record with a DeploymentType of MJ. MsgChannelUsageExternalOrg records are created when an admin enters the EID and MID for a Marketing Cloud application in Unified Messaging Setup and then clicks **Connect**.

The data saved in a MsgChannelUsageExternalOrg record is used for making a connection to Marketing Cloud. If an admin disconnects a Marketing Cloud application in Unified Messaging Setup, the saved EID and MID are used during deprovisioning.
