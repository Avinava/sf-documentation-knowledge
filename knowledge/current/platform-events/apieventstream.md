---
title: "ApiEventStream"
domain: platform-events
topic: apieventstream
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.276Z
estimatedTokens: 2787
keywords: [ApiEventStream, Tracks, user-initiated, read-only, API, calls, query, queryMore, count, Captures, requests, SOAP, Bulk, Enterprise, Partner]
---

# ApiEventStream

> Tracks these user-initiated read-only API calls: query(), queryMore(), and count(). Captures
			API requests through SOAP API and Bulk API for the Enterprise and Partner WSDLs. Tooling
			API calls and API calls originating from a Salesforce mobile app aren’t captured.
		This object is available in API version 46.0 and later.

# ApiEventStream

Tracks these user-initiated read-only API calls: query(), queryMore(), and count(). Captures API requests through SOAP API and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls originating from a Salesforce mobile app aren’t captured. This object is available in API version 46.0 and later.

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

/event/ApiEventStream

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesNillableDescriptionThe name of the action. |
| AdditionalInfo | TypestringPropertiesNillableDescriptionJSON serialization of additional information that’s captured from the HTTP headers during an API request. For example, {"field1": "value1", "field2": "value2"}. |
| ApiType | TypestringPropertiesNillableDescriptionThe API that was used. Values include:BulkRESTSOAP EnterpriseSOAP PartnerN/A |
| ApiVersion | TypedoublePropertiesNillableDescriptionThe version number of the API. |
| Application | TypestringPropertiesNillableDescriptionThe application used to access the org. For example, CRM Analytics or Salesforce Developers Connector. |
| BotId | TypestringPropertiesNillableDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesNillableDescriptionThe bot session ID. |
| Client | TypestringPropertiesNillableDescriptionThe service that executed the API event. If you’re using an unrecognized client, this field returns “Unknown” or a blank value. |
| ConnectedAppId | TypestringPropertiesNillableDescriptionThe 15-character ID of the connected app associated with the API call. For example, 0H4RM00000000Kr0AI. The ConnectedAppID field populates when a call triggers an OAuth 2.0 authentication process, which identifies the connected app that’s authorized to access Salesforce data on behalf of a user. When a user associated with the call already has an active authentication token, the ConnectedAppID is set to a null value. |
| ElapsedTime | TypeintPropertiesNillableDescriptionThe amount of time it took for the request to complete in milliseconds. The measurement of this value begins before the query executes and ends when the query completes. It doesn’t include the amount of time it takes to return the result over the network. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the specified API event was captured (after query execution takes place). For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular series of API events. This field is also available on the LoginEvent, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. For example, 0YaB000002knVQLKA2. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| Operation | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe API call that generated the event. Possible values are DeleteHard,DeleteSoft,Query, QueryAll, or QueryMore. |
| PlannerId | TypestringPropertiesNillableDescriptionThe ID of the agent planner. |
| Platform | TypestringPropertiesNillableDescriptionThe operating system on the login machine. For example, iPhone, Mac OS, Linux, or Unknown. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. For this event, possible values are:Block - The user was blocked from performing the operation that triggered the policy.Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe entities in the SOQL query. For example, Opportunity, Lead, Account, or Case. Can also include custom objects. For relationship queries, the value of this field contains all entities involved in the query.ExamplesFor SELECT Contact.FirstName, Contact.Account.Name from Contact, the value of QueriedEntities is Account, Contact.For SELECT Account.Name, (SELECT Contact.FirstName, Contact.LastName FROM Account.Contacts) FROM Account, the value of QueriedEntities is Account, Contact.For SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media', the value of QueriedEntities is Account, Contact. |
| Query | TypetextareaPropertiesNillableDescriptionThe SOQL query. For example, SELECT id FROM Lead. |
| Records | TypejsonPropertiesNillableDescriptionA JSON string that represents the queried objects’ metadata. This metadata includes the number of results of a query per entity type and the entity IDs. The Records field is set to a null value for BULK API queries. Bulk API queries from ApiEventStream can exceed bandwidth limitations due to the size of the Records field. To reduce the payload size, the Records field is set to a null value.Example{ "totalSize" : 1,   "done" : true,   "records" : [ {     "attributes" : {       "type" : "Account"     },     "Id" : "001xx000003DMvCAAW",     "Contacts" : {       "totalSize" : 3,       "done" : true,       "records" : [ {         "attributes" : {           "type" : "Contact"         },         "Id" : "003xx000004U7xKAAS"       }, {         "attributes" : {           "type" : "Contact"         },         "Id" : "003xx000004U7xLAAS"       }, {         "attributes" : {           "type" : "Contact"         },         "Id" : "003xx000004U7xMAAS"       } ]     }   } ] } |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: TID:000000000000c00fff. |
| RowsProcessed | TypedoublePropertiesNillableDescriptionThe total number of rows of data returned from the API query when the user executed the query.For big objects, if the total number of returned rows is greater than the API batch size, RowsProcessed is -1. |
| RowsReturned | TypedoublePropertiesNillableDescriptionThe number of rows of data returned in the current API batch.If RowsProcessed is less than the API batch size, RowsReturned is equal to RowsProcessed. If RowsProcessed is greater than the API batch size, RowsReturned equals either the API batch size or the number of rows in the last batch. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE - A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW - The user’s security level for the current session meets the lowest requirements.This low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality.STANDARD - The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe IP from which the API events originated. A Salesforce internal IP (such as from an API event originating from AppExchange) is shown as “Salesforce.com IP”. |
| UserAgent | TypestringPropertiesNillableDescriptionThe platform or environment in which the API call originated. This field could include information about the operating system, application, or web protocol. For example, Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Code Examples

```
{ "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "Account"
    },
    "Id" : "001xx000003DMvCAAW",
    "Contacts" : {
      "totalSize" : 3,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "Contact"
        },
        "Id" : "003xx000004U7xKAAS"
      }, {
        "attributes" : {
          "type" : "Contact"
        },
        "Id" : "003xx000004U7xLAAS"
      }, {
        "attributes" : {
          "type" : "Contact"
        },
        "Id" : "003xx000004U7xMAAS"
      } ]
    }
  } ]
}
```
