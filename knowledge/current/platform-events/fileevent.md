---
title: "FileEvent"
domain: platform-events
topic: fileevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.582Z
estimatedTokens: 1891
keywords: [FileEvent, Tracks, user, downloads, document, includes, events, performed, files, API, version, 57.0, later, Calls, Subscribers]
---

# FileEvent

> Tracks when a user downloads a document. This information includes
         events performed on files. This object is available in API version 57.0 and
      later.

# FileEvent

Tracks when a user downloads a document. This information includes events performed on files. This object is available in API version 57.0 and later.

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

/event/FileEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

FileEvent transaction security policies won’t be triggered if a file is downloaded from Salesforce Classic.

## Fields

| Field | Details |
| --- | --- |
| CanDownloadPdf | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the downloaded PDF was converted from another file type. The default value is false. |
| ContentSize | TypeintPropertiesNillableDescriptionThe size of the document, in bytes. |
| DocumentId | TypestringPropertiesNillableDescriptionThe 18-character ID of the document that’s being downloaded. The ID is a reference to the ContentDocument object.In some cases, DocumentId isn’t populated for FileAction API_DOWNLOAD. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the transaction security policy in milliseconds. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time when the file event was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds is the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| FileAction | TypestringPropertiesNillableDescriptionThe action taken on the file. Valid values are:API_DOWNLOADPREVIEWUI_DOWNLOADUPLOADIf a PREVIEW action is performed on an image that's already in the browser's cache, Transaction Security's blocking capabilities are impacted.This field is available in API version 58.0 and later. |
| FileName | TypestringPropertiesNillableDescriptionThe name of the file, including the file extension.FileName isn’t populated for FileAction API_DOWNLOAD. |
| FileSource | TypestringPropertiesNillableDescriptionOrigin of the document. Valid values are:S—Document is located within Salesforce. Label is Salesforce.E—Document is located outside of Salesforce. Label is External.L—Document is located on a social network and accessed via Social Customer Service. Label is Social Customer Service. |
| FileType | TypestringPropertiesNillableDescriptionThe content type of the file. For example, PDF. |
| IsLatestVersion | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the file is the most current version (true) or not (false). The default value is false. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY.This is a relationship field.Relationship NamePolicyRelationship TypeLookupRefers ToTransactionSecurityPolicy |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Block—The user was blocked from performing the operation that triggered the policy.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient. |
| ProcessDuration | TypedoublePropertiesNillableDescriptionThe amount of time to download the file, in milliseconds. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.This low level isn't available or used in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users who are assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005B0000001vURv.This is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |
| VersionId | TypestringPropertiesNillableDescriptionThe specific version of a document in Salesforce CRM Content or Salesforce Files. The ID is a reference to the ContentVersion object. |
| VersionNumber | TypestringPropertiesNillableDescriptionThe version number of the file. |
