---
title: "UriEventStream"
domain: platform-events
topic: urieventstream
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:29.328Z
estimatedTokens: 1833
keywords: [UriEventStream, Detects, user, creates, accesses, updates, deletes, record, Salesforce, Classic, Doesn't, detect, operations, Visualforce, views]
---

# UriEventStream

> Detects when a user creates, accesses, updates, or deletes a record in
			Salesforce Classic only. Doesn't detect record operations done through a Visualforce
			page or Visualforce page views. This object is available in API version 46.0 and
		later.

# UriEventStream

Detects when a user creates, accesses, updates, or deletes a record in Salesforce Classic only. Doesn't detect record operations done through a Visualforce page or Visualforce page views. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/UriEventStream

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

UriEventStream doesn’t track Setup events.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the specified URI event was captured (after query execution takes place). For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, 8gHOMQu+xvjCmRUt |
| Message | TypestringPropertiesNillableDescriptionThe failure message if the operation being performed on the entity failed (OperationStatus=Failure). |
| Name | TypestringPropertiesNillableDescriptionThe value of the record being viewed or edited. |
| Operation | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe operation being performed on the entity. For example, Read, Create, Update, or Delete.Create and update operations are captured in pairs; that is, expect two event records for each operation. The first record represents the start of the operation, and the second record represents whether the operation was successful or not. The two records are correlated by RelatedEventIdentifier.If there isn’t a second event recorded for a create or update operation, then the user canceled the operation, or the operation failed with client-side validation (for example, when a required field is empty). |
| OperationStatus | TypepicklistPropertiesNillable, Restricted picklistDescriptionWhether the operation performed on the entity (such as create) succeeded or failed. When the operation starts, the value is always INITIATED. Possible values are:Failure—The operation failed.Initiated—The operation started.NoteCreate and update operations can generate an extra OperationStatus=Initiated event after an operation fails. Ignore this extra record.Success—The operation succeeded. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe API name of the objects referenced by the URI. |
| RecordId | TypestringPropertiesNillableDescriptionThe id of the record being viewed or edited. For example, 001RM000003cjx6YAA. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level will experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client logging in. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionThe user’s unique ID. For example, 005RM000001ctYJYAY.This is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| UserName | TypestringPropertiesNillableDescriptionThe username in the format of user@company.com at the time the event was created. |
| UserType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe category of user license. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. Valid values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they are organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they are organization customers and access the application through a customer portal.GuestPowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they are organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they are partners and typically access the application through a partner portal or site.SelfServiceStandard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses. |

#### See Also

-   [LightningUriEventStream](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_lightningurieventstream.htm "Detects when a user creates, accesses, updates, or deletes a record in Lightning Experience only. This object is available in API version 46.0 and later.")

## Related Topics

- LightningUriEventStream (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_lightningurieventstream.htm)
