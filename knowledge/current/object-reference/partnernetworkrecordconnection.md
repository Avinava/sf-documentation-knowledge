---
title: "PartnerNetworkRecordConnection"
domain: object-reference
topic: partnernetworkrecordconnection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.335Z
estimatedTokens: 824
keywords: [PartnerNetworkRecordConnection, record, shared, Salesforce, organizations, Calls, Special, Access, Rules, Usage]
---

# PartnerNetworkRecordConnection

> Represents a
                record shared between Salesforce organizations using Salesforce to
            Salesforce.

# PartnerNetworkRecordConnection

Represents a record shared between Salesforce organizations using Salesforce to Salesforce.

## Supported Calls

create(), query()

## Special Access Rules

As of Winter ’21 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| ConnectionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRequired. ID of the connection a record is shared with. |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate that sharing of the record was stopped. |
| LocalRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the shared record. |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the parent record of the shared record. |
| PartnerRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the shared record in the connection's organization. |
| RelatedRecords | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionA comma-separated list of API names for child records to be shared with a parent record. |
| SendClosedTasks | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionForwards closed tasks related to the shared record. |
| SendEmails | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionSends an email notifying the connection's representative that you have forwarded the record to them. Only new recipients of a record will receive a notification email. |
| SendOpenTasks | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionForwards open tasks related to the shared record. |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate that the shared record was accepted. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the shared record. One of the following values:Active (received)Active (sent)ConnectedInactiveInactive (converted)Inactive (deleted)Pending (sent) |

## Usage

When you create a PartnerNetworkRecordConnection, you forward a record to a connection.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Attempting to forward a record from an object to which the connection is not subscribed results in an Invalid Partner Network Status error.

When you delete a PartnerNetworkRecordConnection, you stop sharing a record with a connection.

-   To share a record, use the following fields: LocalRecordID and ConnectionId
-   To share a child of a parent record, use the following fields: LocalRecordID, ConnectionId, and ParentRecordID
-   To share a child of a parent record and its child records, use the following fields: LocalRecordID, ConnectionId, ParentRecordID, and RelatedRecords

If the organization does not have Salesforce to Salesforce enabled, the PartnerNetworkRecordConnection object is not available, and you can’t access it using the API.

#### See Also

-   [PartnerNetworkConnection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkconnection.htm "Represents a Salesforce to Salesforce connection between Salesforce organizations.")

## Related Topics

- PartnerNetworkConnection (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnernetworkconnection.htm)
