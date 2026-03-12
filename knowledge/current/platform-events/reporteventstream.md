---
title: "ReportEventStream"
domain: platform-events
topic: reporteventstream
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.236Z
estimatedTokens: 4165
keywords: [ReportEventStream, Tracks, report-related, actions, user, runs, exports, report, API, version, 46.0, later, Calls, Subscribers, Subscription]
---

# ReportEventStream

> Tracks report-related actions, such as when a user runs or exports a
			report. This object is available in API version 46.0 and later.

# ReportEventStream

Tracks report-related actions, such as when a user runs or exports a report. This object is available in API version 46.0 and later.

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

/event/ReportEventStream

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesNillableDescriptionThe name of the action. |
| BotId | TypestringPropertiesNillableDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesNillableDescriptionThe bot session ID. |
| ColumnHeaders | TypestringPropertiesNillableDescriptionComma-separated values of column headers of the report. Values listed are object names, field names, and field values except where aliases are used. For example, [Opportunity.Name, Opportunity.Type, Opportunity.Owner.UserRole.RollupDescription, Opportunity.Account.Name, Opportunity.Account.NumberOfEmployees, AGE]. |
| DashboardId | TypestringPropertiesNillableDescriptionThe ID of the dashboard that the report was part of. For example, 01ZB0000000PmoQ. |
| DashboardName | TypestringPropertiesNillableDescriptionThe title of the dashboard that the report was part of. |
| Description | TypestringPropertiesNillableDescriptionThe description of the report. |
| DisplayedFieldEntities | TypestringPropertiesNillableDescriptionThe API values of the fields that are displayed on the report, including the names of the entities of the grouped column fields. For example, [ACCOUNTS, OWNERS]. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the specified report event was captured (after query execution takes place). For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| EventSource | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe source of the event. Possible values are:API—The user generated the report from an API call.Classic—The user generated the report from the Salesforce Classic UI.Lightning—The user generated the report from Lightning Experience. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ExecutionIdentifier | TypestringPropertiesNillableDescriptionWhen report data is divided into multiple report events, use this unique identifier to correlate the multiple data chunks. For example, if each chunk has the same ExecutionIdentifier of a50a4025-84f2-425d-8af9-2c780869f3b5, you can link them together to get all the data for the report execution. The Sequence field contains the incremental sequence numbers that indicate the order of the multiple events.For more information, see Sequence. |
| ExportFileFormat | TypestringPropertiesNillableDescriptionIf the user exported the report, this value indicates the format of the exported report. Possible values are:CSVExcel |
| Format | TypepicklistPropertiesDefaulted on create, Nillable, Restricted picklistDescriptionThe format of the report. Possible values are:MatrixMultiBlockSummaryTabular |
| GroupedColumnHeaders | TypestringPropertiesNillableDescriptionComma-separated values of grouped column fields in summary, matrix, and joined reports. For example, [USERNAME, ACCOUNT.NAME, TYPE, DUE_DATE, LAST_UPDATE, ADDRESS1_STATE]. |
| IsScheduled | TypebooleanPropertiesDefaulted on createDescriptionIf TRUE, the report was scheduled. If FALSE, the report wasn’t scheduled. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so that you can correlate user activity with a particular series of report events. This field is also available on the LoginHistory, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. For example, 0YaB000002knVQLKA2. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. For example, lUqjLPQTWRdvRG4. |
| Name | TypestringPropertiesNillableDescriptionThe display name of the report. The value is null for report previews. |
| NumberOfColumns | TypeintPropertiesNillableDescriptionThe number of columns in the report. |
| Operation | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe context in which the report executed, such as from a UI (Classic, Lightning, Mobile), through an API (synchronous, asynchronous, Apex), or through a dashboard. Possible values are:ChartRenderedInEmbeddedAnalyticsApp—Report executed from a rendered chart in an embedded Analytics app.ChartRenderedOnHomePage—Report executed from a rendered chart on the home page.ChartRenderedOnVisualforcePage—Report executed from a rendered chart on a VisualForce Page.DashboardComponentPreviewed—Report executed from a Lightning dashboard component preview.DashboardComponentUpdated—Report executed when a user refreshed a dashboard component. Because the report resulted from an asynchronous operation, session information, contained in the fields SessionKey, LoginKey, SessionLevel, and SourceIp, isn’t captured.ProbeQuery—Report executed from a probe query.ReportAddedToCampaign—Report was added from an Add to Campaign action.ReportExported—Report executed from a printable view or report export that wasn’t asynchronous nor an API export.ReportExportedAsynchronously—Report was exported asynchronously.ReportExportedUsingExcelConnector—Report was exported using the Excel connector.ReportOpenedFromMobileDashboard—Report executed when a user clicked a dashboard component on a mobile device and drilled down to a report.ReportPreviewed—Report executed when a user got preview results while using the report builder.ReportResultsAddedToEinsteinDiscovery—Report executed synchronously from Einstein Discovery.ReportResultsAddedToWaveTrending—Report executed when a user trended a report in Einstein Analytics.ReportRunAndNotificationSent—Report executed through the notifications API.ReportRunFromClassic—Report executed from the Run Report option of Salesforce Classic.ReportRunFromLightning—Report executed from the Run option in Lightning Experience from a non-mobile browser.ReportRunFromMobile—Report executed from the Run Report option of the mobile Salesforce app.ReportRunFromReportingSnapshot—Report executed through Snapshot Analytics.ReportRunFromRestApi—Report executed from REST API.ReportRunFromSlackElevate—Report executed from Slack Elevate.ReportRunUsingApexAsynchronousApi—Report executed from the asynchronous Apex API.ReportRunUsingApexSynchronousApi—Report executed from the synchronous Apex API.ReportRunUsingAsynchronousApi—Report executed from an asynchronous API.ReportRunUsingSynchronousApi—Report executed from a synchronous API.ReportScheduled—Report was scheduled.Test—Report execution resulted from a test.Unknown—Report execution origin is unknown. |
| OwnerId | TypestringPropertiesNillableDescriptionThe ID of the folder, organization, or user who owns the report. This value is blank if the report wasn’t saved. For example, 005B0000001vURvIAM. |
| PlannerId | TypestringPropertiesNillableDescriptionThe ID of the agent planner. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Block—The user was blocked from performing the operation that triggered the policy.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.FailedInvalidPassword—The user entered an invalid password.FailedPasswordLockout—The user entered an invalid password too many times.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user wasn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.TwoFAAutomatedSuccess—Salesforce Authenticator approved the request for access because the request came from a trusted location. After users enable location services in Salesforce Authenticator, they can designate trusted locations. When a user trusts a location for a particular activity, such as logging in from a recognized device, that activity is approved from the trusted location for as long as the location is trusted.TwoFADenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator.TwoFAFailedGeneralError—An error caused by something other than an invalid verification code, too many verification attempts, or authenticator app connectivity.TwoFAFailedInvalidCode—The user provided an invalid verification code.TwoFAFailedTooManyAttempts—The user attempted to verify identity too many times. For example, the user entered an invalid verification code repeatedly.TwoFAInitiated—Salesforce initiated identity verification but hasn’t yet challenged the user.TwoFAInProgress—Salesforce challenged the user to verify identity and is waiting for the user to respond or for Salesforce Authenticator to send an automated response.TwoFANoAction—The policy specifies multi-factor authentication (formerly called two-factor authentication) as an action, but the user is already in a high-assurance session.TwoFARecoverableError—Salesforce can’t reach the authenticator app to verify identity, but will retry.TwoFAReportedDenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator, and also flagged the approval request to report to an administrator.TwoFASucceeded—The user’s identity was verified.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe entities in the SOQL query. For example, Opportunity, Lead, Account, or Case. Can also include custom objects. For relationship queries, the value of this field contains all entities involved in the query. If the query returns 0 records, then the value of this field is null.ExamplesFor SELECT Contact.FirstName, Contact.Account.Name from Contact, the value of QueriedEntities is Account, Contact.For SELECT Account.Name, (SELECT Contact.FirstName, Contact.LastName FROM Account.Contacts) FROM Account, the value of QueriedEntities is Account, Contact.For SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media', the value of QueriedEntities is Account, Contact. |
| Records | TypejsonPropertiesNillableDescriptionA JSON string that represents the report’s data. For example, {"totalSize":1,"rows":[{"datacells":["005B0000001vURv","001B000000fewai"]}]}. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| ReportId | TypestringPropertiesNillableDescriptionThe ID of the report associated with this event. For example, 00OB00000032FHdMAM. |
| RowsProcessed | TypedoublePropertiesNillableDescriptionThe total number of rows returned in the report. When report data is divided into multiple report events, this value is the same for all data chunks. For more information, see ExecutionIdentifier. |
| Scope | TypestringPropertiesNillableDescriptionDefines the scope of the data on which the user ran the report. For example, users can run the report against all opportunities, opportunities they own, or opportunities their team owns. Possible values are:user—User owns the objects the report was run against.team—Team owns the objects the report was run against.organization—Report was run against all applicable objects. |
| Sequence | TypeintPropertiesNillableDescriptionIncremental sequence number that indicates the order of multiple events that result from a given report execution.When a report execution returns many records, Salesforce splits this data into chunks based on the size of the records, and then creates multiple correlated ReportEventStreams. The field values in each of these correlated ReportEventStreams are the same, except for Records, which contains the different data chunks, and Sequence, which identifies each chunk in order. Every report execution has a unique ExecutionIdentifier value to differentiate it from other report executions. To view all the data chunks from a single report execution, use the Sequence and ExecutionIdentifier fields in combination.When a report executes, we provide the first 1,000 events with data in the Records field. Use the ReportId field to view the full report.For more information, see Sequence. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements. This low level isn’t available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels.This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |
