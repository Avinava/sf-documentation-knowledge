---
title: "PartnerNetworkConnection"
domain: object-reference
topic: partnernetworkconnection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.327Z
estimatedTokens: 938
keywords: [PartnerNetworkConnection, Salesforce, connection, organizations, Calls, Special, Access, Rules, Usage]
---

# PartnerNetworkConnection

> Represents a Salesforce to Salesforce connection between Salesforce
   organizations.

# PartnerNetworkConnection

Represents a Salesforce to Salesforce connection between Salesforce organizations.

## Supported Calls

create(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Winter ’21 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Account associated with this connection. |
| ConnectionName | TypestringPropertiesFilter, idLookup, SortDescriptionA descriptive name for the connection. Limit: 295 characters. |
| ConnectionStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the Salesforce to Salesforce connection. The picklist includes the following values:SentReceivedPendingAcceptedRejectedInactiveDisconnectingConnectionSuspendedSubscribeInProgressUsersInitialSyncBulkSyncMetadata |
| ConnectionType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of Salesforce to Salesforce connection. The picklist includes the following values:StandardReplicationThis field is available in API version 30.0 and later. |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Contact associated with this connection. |
| IsSyncAuditFields | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether audit fields are synced between the primary and secondary organization in a replication connection. This field is available in API version 32.0 and later, and is only accessible in Salesforce organizations where Organization Sync is enabled. |
| IsSyncMetadata | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether supported types of metadata are synced from the primary to the secondary organization in a replication connection. This field is available in API version 33.0 and later, and is only accessible in Salesforce organizations where Organization Sync is enabled. |
| IsSyncUsers | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether users with standard Salesforce user licenses are synced between the primary and secondary organization in a replication connection. This field is available in API version 35.0 and later, and is only accessible in Salesforce organizations where Organization Sync is enabled. |
| PrimaryContactId | TypereferencePropertiesFilter, Group, SortDescriptionID of the User associated with this connection. |
| ReplicationRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe role of this Salesforce organization in the replication connection. The picklist includes the following values:PrimarySecondaryThis field is available in API version 30.0 and later, and is only accessible in Salesforce organizations where Organization Sync is enabled. |
| ResponseDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the connection was accepted or rejected. |

## Usage

Represents Salesforce to Salesforce standard and replication connections. This object is referenced by all objects that have been shared with other organizations, enabling you to determine which connections shared a record with you. If the organization does not have Salesforce to Salesforce enabled, the PartnerNetworkConnection object is not available, and you can’t access it via the API.

#### See Also

-   [PartnerNetworkRecordConnection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkrecordconnection.htm "Represents a record shared between Salesforce organizations using Salesforce to Salesforce.")

## Related Topics

- PartnerNetworkRecordConnection (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkrecordconnection.htm)
