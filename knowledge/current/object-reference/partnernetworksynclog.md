---
title: "PartnerNetworkSyncLog"
domain: object-reference
topic: partnernetworksynclog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.340Z
estimatedTokens: 517
keywords: [PartnerNetworkSyncLog, Org, Sync, Log, tab, Salesforce, administrators, track, replication, record, inserts, updates, performed, Organization, Connection]
---

# PartnerNetworkSyncLog

> Represents the Org Sync Log tab in Salesforce, where Salesforce
			administrators can track the replication of record inserts and updates being performed
			in Organization Sync. The Connection Detail page for the replication connection also
			displays the Org Sync Log’s twenty most recent entries, and provides a link to the
			log.

# PartnerNetworkSyncLog

Represents the Org Sync Log tab in Salesforce, where Salesforce administrators can track the replication of record inserts and updates being performed in Organization Sync. The Connection Detail page for the replication connection also displays the Org Sync Log’s twenty most recent entries, and provides a link to the log.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

The Org Sync Log tab can only be added in organizations where Organization Sync has been enabled. To add the tab to the Salesforce user interface, users must also have the “Manage Connections” user permission.

## Fields

| Field Name | Details |
| --- | --- |
| ConnectionEvent | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe action being replicated to the partner organization, such as a record insertion. |
| ConnectionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Salesforce to Salesforce replication connection in which the replication event succeeded or failed. |
| Description | TypetextareaPropertiesNillableDescriptionA description of the replication event. |
| EntityType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of record being inserted or updated. |
| Error | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe code used to describe the replication failure or success. |
| LocalRecord | TypestringPropertiesFilter, Group, SortDescriptionThe record being inserted or updated. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionAn item is added to the Organization Sync Log if it failed to be replicated to the linked organization. This picklist includes the following values:Failed: The replication continued to fail after multiple retries, and won’t be retried further.Resolved: The replication succeeded after retrying.Retrying: Salesforce is retrying the replication.This field is available in API version 35.0 and later. |
