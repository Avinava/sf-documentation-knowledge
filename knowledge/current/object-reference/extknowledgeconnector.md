---
title: "ExtKnowledgeConnector"
domain: object-reference
topic: extknowledgeconnector
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.958Z
estimatedTokens: 906
keywords: [ExtKnowledgeConnector, connector, third-party, knowledge, source, Unified, API, version, 60.0, later, Calls, Special, Access, Rules, Associated]
---

# ExtKnowledgeConnector

> Represents a connector to a third-party knowledge source for Unified
         Knowledge. This object is available in API version 60.0 and later.

# ExtKnowledgeConnector

Represents a connector to a third-party knowledge source for Unified Knowledge. This object is available in API version 60.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Knowledge must be enabled in your org. Salesforce Knowledge users, unlike customer and partner users, must also be granted the Knowledge User feature license.

## Fields

| Field | Details |
| --- | --- |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action condition record is locked or not.The default value is false. |
| LastSyncDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the connector last synced with the third-party knowledge source to import articles into Salesforce. |
| LastSyncStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the status of the connector’s last sync of articles from the third-party knowledge source into Salesforce.Possible values are:articleLimitExceeded—Exceeded article or version limitscompleted—CompletedcompletedWithErrors—Completed with errorsended—Endedfailed—Failedinitiating—StartedinvalidCredentials—Invalid credentialspolling—Polling for Zoomin sync to completequeued—Queuedsyncing—SyncingtimedOut—Timed Outunavailable—Zoomin unavailable |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated import article condition record can be edited or not.The default value is false. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe connector’s label in Unified Knowledge setup. |
| NamedCredentialId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSalesforce ID of the named credential that’s used for a request. The named credential identifies the third-party system and the third-party authentication settings.This field is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe user ID of the owner of the connector.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartnerConnectorIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescription |
| ShouldOpenInSource | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether articles imported into Salesforce open in the third-party source from links in Salesforce.The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ExtKnowledgeConnectorOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ExtKnowledgeConnectorShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ExtKnowledgeConnectorOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ExtKnowledgeConnectorShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
