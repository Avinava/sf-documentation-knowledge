---
title: "ListViewEvent"
domain: platform-events
topic: listviewevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.808Z
estimatedTokens: 3433
keywords: [ListViewEvent, Tracks, users, access, data, views, Lightning, Experience, Salesforce, Classic, API, doesn’t, track, Setup, entities]
---

# ListViewEvent

> Tracks when users access data with list views using Lightning
         Experience, Salesforce Classic, or the API. It doesn’t track list views of Setup
         entities. You can use ListViewEvent in a transaction security policy. ListViewEvent is
      a big object that stores the event data of ListViewEventStream. This object is available in
      API version 46.0 and later.

# ListViewEvent

Tracks when users access data with list views using Lightning Experience, Salesforce Classic, or the API. It doesn’t track list views of Setup entities. You can use ListViewEvent in a transaction security policy. ListViewEvent is a big object that stores the event data of ListViewEventStream. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

For some default list views (such as the list view that displays when a user clicks the Groups tab in Salesforce Classic), the DeveloperName, ListViewId, and Name fields are blank because the list view wasn’t explicitly created by a user.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_events)

#### Tip

Generate real-time events and create Transaction Security Policies when users access the Recently Viewed list view, allowing you to monitor and take action to block malicious users.

| Field | Details |
| --- | --- |
| AppName | TypestringPropertiesNillableDescriptionThe name of the application that the user accessed. Possible values include one:one (browser) and native:bridge (mobile app). |
| ColumnHeaders | TypestringPropertiesNillableDescriptionComma-separated values of column headers of the list view. These values are the API names, not the labels shown in the UI. For example, Name, BillingState, Phone,Type, Owner.Alias, CaseNumber, Contact.Name, Subject, Status, Priority, CreatedDate, Owner.NameOrAlias. |
| DeveloperName | TypestringPropertiesNillableDescriptionThe unique name of the object in the API. This name contains only underscores and alphanumeric characters, and is unique in your org. If blank, the list view is a default list view (such as the list view that displays when a user clicks the Groups tab in Salesforce Classic) and not explicitly created by a user. For example, AllAccounts or AllOpenLeads. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the transaction security policy, in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time when the specified list view event was captured. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| EventSource | TypestringPropertiesNillable, Restricted picklistDescriptionThe source of the event. Possible values are:API—The user generated the list view from an API call.Classic—The user generated the list view from a page in the Salesforce Classic UI.Lightning—The user generated the list view from a page in the Lightning Experience UI. |
| ExecutionIdentifier | TypestringPropertiesNillableDescriptionWhen list view execution data is divided into multiple list view events, use this unique identifier to correlate the multiple data chunks. For example, each chunk might have the same ExecutionIdentifier of a50a4025-84f2-425d-8af9-2c780869f3b5, enabling you to link them together to get all the data for the list view execution. The Sequence field contains the incremental sequence numbers that indicate the order of the multiple events.For more information, see Sequence. |
| FilterCriteria | TypejsonPropertiesNillableDescriptionA JSON string that represents the list view’s filter criteria at the time the event was captured.ExampleHere’s a JSON string that represents filter criteria for an accounts list view. The list view shows only accounts of type “Prospect”.{"whereCondition":      {"type":"soqlCondition","field":"Type",       "operator":"equals","values":["'Prospect'"]} } |
| ListViewId | TypereferencePropertiesNillableDescriptionThe ID of the list view associated with this event. If blank, the list view is a default list view (such as the list view that displays when a user clicks the Groups tab in Salesforce Classic) and not explicitly created by a user. For example, 00BB0000001c73kMAA. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular series of list view events. This field is also available in the LoginEvent, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. For example, 0YaB000002knVQLKA2. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| Name | TypestringPropertiesNillableDescriptionThe display name of the list view. If blank, the list view is a default list view (such as the list view that displays when a user clicks the Groups tab in Salesforce Classic) and not explicitly created by a user. For example, All Accounts and All Open Leads. |
| NumberOfColumns | TypeintPropertiesNillableDescriptionThe number of columns in the list view. |
| OrderBy | TypestringPropertiesNillableDescriptionThe column that the list view is sorted by. For example, if a list view of accounts is sorted alphabetically by name, the OrderBy value is [Name ASC NULLS FIRST, Id ASC NULLS FIRST]. If the list is sorted alphabetically by type, the OrderBy value is [Type ASC NULLS FIRST, Id ASC NULLS FIRST]. |
| OwnerId | TypereferencePropertiesNillableDescriptionThe ID of the org or user who owns the list view. If the list view wasn’t saved, this value is the same as UserId. For example, 005B0000001vURvIAM. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction security policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Block—The user was blocked from performing the operation that triggered the policy.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.FailedInvalidPassword—The user entered an invalid password.FailedPasswordLockout—The user entered an invalid password too many times.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.TwoFAAutomatedSuccess—Salesforce Authenticator approved the request for access because the request came from a trusted location. After users enable location services in Salesforce Authenticator, they can designate trusted locations. When a user trusts a location for a particular activity, such as logging in from a recognized device, that activity is approved from the trusted location for as long as the location is trusted.TwoFADenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator.TwoFAFailedGeneralError—An error caused by something other than an invalid verification code, too many verification attempts, or authenticator app connectivity.TwoFAFailedInvalidCode—The user provided an invalid verification code.TwoFAFailedTooManyAttempts—The user attempted to verify identity too many times. For example, the user entered an invalid verification code repeatedly.TwoFAInitiated—Salesforce initiated identity verification but hasn’t yet challenged the user.TwoFAInProgress—Salesforce challenged the user to verify identity and is waiting for the user to respond or for Salesforce Authenticator to send an automated response.TwoFANoAction—The policy specifies multi-factor authentication (formerly called two-factor authentication) as an action, but the user is already in a high-assurance session.TwoFARecoverableError—Salesforce can’t reach the authenticator app to verify identity, but will retry.TwoFAReportedDenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator, and also flagged the approval request to report to an administrator.TwoFASucceeded—The user’s identity was verified.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe type of entities in the list view. For example, Opportunity, Lead, Account, or Case. Can also include custom objects. |
| Records | TypejsonPropertiesNillableDescriptionA JSON string that represents the list view’s data. For example, {"totalSize":1,"rows":[{"datacells":["005B0000001vURv","001B000000fewai"]}]}. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| RowsProcessed | TypedoublePropertiesNillableDescriptionThe total number of rows returned in the list view. When list data is divided into multiple list view events, this value is the same for all data chunks. |
| Scope | TypestringPropertiesNillableDescriptionRepresents the filter criteria for the list view. Possible values are:Delegated—Records delegated to another user for action; for example, a delegated task.Everything—All records, for example All Opportunities.Mine—Records owned by the user running the list view, for example My Opportunities.MineAndMyGroups—Records owned by the user running the list view, and records assigned to the user’s queues.MyTerritory—Records in the territory of the user seeing the list view. This option is available if territory management is enabled for your org.MyTeamTerritory—Records in the territory of the team of the user seeing the list view. This option is available if territory management is enabled for your org.Queue—Records assigned to a queue.Team—Records assigned to a team. |
| Sequence | TypeintPropertiesNillableDescriptionIncremental sequence number that indicates the order of multiple events that result from a given list view execution.When a list view execution returns many records, Salesforce splits this data into chunks based on the size of the records, and then creates multiple correlated ListViewEvents. The field values in each of these correlated ListViewEvents are the same, except for Records, which contains the different data chunks, and Sequence, which identifies each chunk in order. Every list view execution has a unique ExecutionIdentifier value to differentiate it from other list view executions. To view all the data chunks from a single list view execution, use the Sequence and ExecutionIdentifier fields in combination.For more information, ExecutionIdentifier. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level will experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionThe user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe username in the format of user@company.com at the time the event was created. |

## Standard SOQL Usage

You can filter on two ordered fields: EventDate and EventIdentifier.

**Example**

SELECT Username, QueriedEntities, ListViewData, PolicyOutcome, Name FROM ListViewEvent

#### See Also

-   [*Big Objects Implementation Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Big Objects Implementation Guide
    - HTML (New Window)")

## Code Examples

```
{"whereCondition":
     {"type":"soqlCondition","field":"Type",
      "operator":"equals","values":["'Prospect'"]}
}
```
