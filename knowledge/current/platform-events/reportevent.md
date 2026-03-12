---
title: "ReportEvent"
domain: platform-events
topic: reportevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.211Z
estimatedTokens: 5088
keywords: [ReportEvent, Tracks, reports, run, org, transaction, security, policy, big, stores, event, data, ReportEventStream, API, version]
---

# ReportEvent

> Tracks when reports are run in your org. You can use ReportEvent
      in a transaction security policy. ReportEvent is a big object that stores the event data of
      ReportEventStream. This object is available in API version 46.0 and later.

# ReportEvent

Tracks when reports are run in your org. You can use ReportEvent in a transaction security policy. ReportEvent is a big object that stores the event data of ReportEventStream. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesNillableDescriptionThe name of the action. |
| BotId | TypereferencePropertiesNillableDescriptionThe ID of the bot.This field is a relationship field.Relationship NameBotRefers ToBotDefinition |
| BotSessionIdentifier | TypestringPropertiesNillableDescriptionThe bot session ID. |
| ColumnHeaders | TypestringPropertiesNillableDescriptionComma-separated values of column headers of the report. Values listed are object names, field names, and field values except where aliases are used. For example, [Opportunity.Name, Opportunity.Type, Opportunity.Owner.UserRole.RollupDescription, Opportunity.Account.Name, Opportunity.Account.NumberOfEmployees, AGE]. |
| DashboardId | TypereferencePropertiesNillableDescriptionThe ID of the dashboard that the report was part of. For example, 01ZB0000000PmoQ.This is a relationship field.Relationship NameDashboardRelationship TypeLookupRefers ToDashboard |
| DashboardName | TypestringPropertiesNillableDescriptionThe title of the dashboard that the report was part of. |
| Description | TypestringPropertiesNillableDescriptionThe description of the report. |
| DisplayedFieldEntities | TypestringPropertiesNillableDescriptionThe API values of the fields that are displayed on the report, including the names of the entities of the grouped column fields. For example, [ACCOUNTS, OWNERS]. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time when the specified report event was captured (after query execution takes place). For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| EventSource | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe source of the event. Possible values are:API—The user generated the report from an API call.Classic—The user generated the report from the Salesforce Classic UI.Lightning—The user generated the report from Lightning Experience. |
| ExecutionIdentifier | TypestringPropertiesNillableDescriptionWhen report data is divided into multiple report events, use this unique identifier to correlate the multiple data chunks. For example, if each chunk has the same ExecutionIdentifier of a50a4025-84f2-425d-8af9-2c780869f3b5,you can link them together to get all the data for the report execution. The Sequence field contains the incremental sequence numbers that indicate the order of the multiple events.For more information, see Sequence. |
| ExportFileFormat | TypestringPropertiesNillableDescriptionIf the user exported the report, this value indicates the format of the exported report. Possible values are:CSVExcel |
| Format | TypepicklistPropertiesDefaulted on create, Nillable, Restricted picklistDescriptionThe format of the report. Possible values are:MatrixMultiBlockSummaryTabular |
| GroupedColumnHeaders | TypestringPropertiesNillableDescriptionComma-separated values of grouped column fields in summary, matrix, and joined reports. For example, [USERNAME, ACCOUNT.NAME, TYPE, DUE_DATE, LAST_UPDATE, ADDRESS1_STATE]. |
| IsScheduled | TypebooleanPropertiesDefaulted on createDescriptionIf TRUE, the report was scheduled. If FALSE, the report wasn’t scheduled. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so that you can correlate user activity with a particular series of report events. This field is also available on the LoginEvent, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. For example, 0YaB000002knVQLKA2.This is a relationship field.Relationship NameLoginHistoryRelationship TypeLookupRefers ToLoginHistory |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. For example, lUqjLPQTWRdvRG4. |
| Name | TypestringPropertiesNillableDescriptionThe display name of the report. The value is null for report previews. |
| NumberOfColumns | TypeintPropertiesNillableDescriptionThe number of columns in the report. |
| Operation | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe context in which the report executed, such as from a UI (Classic, Lightning, Mobile), through an API (synchronous, asynchronous, Apex), or through a dashboard. Session information contained in the fields SessionKey, LoginKey, SessionLevel, and SourceIp isn’t captured in any report resulting from an asynchronous operation. Possible values are:ChartRenderedInEmbeddedAnalyticsApp—Report executed from a rendered chart in an embedded Analytics app.ChartRenderedOnHomePage—Report executed from a rendered chart on the home page.ChartRenderedOnVisualforcePage—Report executed from a rendered chart on a VisualForce Page.DashboardComponentPreviewed—Report executed from a Lightning dashboard component preview.DashboardComponentUpdated—Report executed when a user refreshed a dashboard component.ProbeQuery—Report executed from a probe query.ReportAddedToCampaign—Report was added from an Add to Campaign action.ReportExported—Report executed from a printable view or report export that wasn’t asynchronous nor an API export.ReportExportedAsynchronously—Report was exported asynchronously.ReportExportedUsingExcelConnector—Report was exported using the Excel connector.ReportOpenedFromMobileDashboard—Report executed when a user clicked a dashboard component on a mobile device and drilled down to a report.ReportPreviewed—Report executed when a user got preview results while using the report builder.ReportResultsAddedToEinsteinDiscovery—Report executed synchronously from Einstein Discovery.ReportResultsAddedToWaveTrending—Report executed when a user trended a report in CRM Analytics.ReportRunAndNotificationSent—Report executed through the notifications API.ReportRunFromClassic—Report executed from the Run Report option of Salesforce Classic.ReportRunFromLightning—Report executed from the Run option in Lightning Experience from a non-mobile browser.ReportRunFromMobile—Report executed from the Run Report option of the mobile Salesforce app.ReportRunFromReportingSnapshot—Report executed through Snapshot Analytics.ReportRunFromRestApi—Report executed from REST API.ReportRunFromSlackElevate—Report executed from Slack Elevate.ReportRunUsingApexAsynchronousApi—Report executed from the asynchronous Apex API.ReportRunUsingApexSynchronousApi—Report executed from the synchronous Apex API.ReportRunUsingAsynchronousApi—Report executed from an asynchronous API.ReportRunUsingSynchronousApi—Report executed from a synchronous API.ReportScheduled—Report was scheduled.Test—Report execution resulted from a test.Unknown—Report execution origin is unknown. |
| OwnerId | TypereferencePropertiesNillableDescriptionThe ID of the folder, organization, or user who owns the report. If the report wasn’t saved, this value is the same as UserId. For example, 005B0000001vURv.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToFolder, Organization, User |
| PlannerId | TypereferencePropertiesNillableDescriptionThe ID of the agent planner.This field is a relationship field.Relationship NamePlannerRefers ToGenAiPlannerDefinition |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. This is a relationship field.Relationship NamePolicyRelationship TypeLookupRefers ToTransactionSecurityPolicy |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Block—The user was blocked from performing the operation that triggered the policy.Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.FailedInvalidPassword—The user entered an invalid password.FailedPasswordLockout—The user entered an invalid password too many times.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user wasn’t blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.TwoFAAutomatedSuccess—Salesforce Authenticator approved the request for access because the request came from a trusted location. After users enable location services in Salesforce Authenticator, they can designate trusted locations. When a user trusts a location for a particular activity, that activity is approved from the trusted location for as long as the location is trusted. Logging in from a recognized device is an example.TwoFADenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator.TwoFAFailedGeneralError—An error caused by something other than an invalid verification code, too many verification attempts, or authenticator app connectivity.TwoFAFailedInvalidCode—The user provided an invalid verification code.TwoFAFailedTooManyAttempts—The user attempted to verify identity too many times. For example, the user entered an invalid verification code repeatedly.TwoFAInitiated—Salesforce initiated identity verification but hasn’t yet challenged the user.TwoFAInProgress—Salesforce challenged the user to verify identity and is waiting for the user to respond or for Salesforce Authenticator to send an automated response.TwoFANoAction—The policy specifies multi-factor authentication (formerly called two-factor authentication) as an action, but the user is already in a high-assurance session.TwoFARecoverableError—Salesforce can’t reach the authenticator app to verify identity, but retries.TwoFAReportedDenied—The user denied the approval request in the authenticator app, such as Salesforce Authenticator, and flagged the approval request to report to an administrator.TwoFASucceeded—The user’s identity was verified.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe entities in the SOQL query. For example, Opportunity, Lead, Account, or Case. Can also include custom objects. For relationship queries, the value of this field contains all entities involved in the query. If the query returns 0 records, then the value of this field is null.ExamplesFor SELECT Contact.FirstName, Contact.Account.Name from Contact, the value of QueriedEntities is Account, Contact.For SELECT Account.Name, (SELECT Contact.FirstName, Contact.LastName FROM Account.Contacts) FROM Account, the value of QueriedEntities is Account, Contact.For SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media', the value of QueriedEntities is Account, Contact. |
| Records | TypejsonPropertiesNillableDescriptionA JSON string that represents the report’s data. For example, {"totalSize":1,"rows":[{"datacells":["005B0000001vURv","001B000000fewai"]}]}. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| ReportId | TypereferencePropertiesNillableDescriptionThe ID of the report associated with this event. For example, 00OB00000032FHdMAM.This is a relationship field.Relationship NameReportRelationship TypeLookupRefers ToReport |
| RowsProcessed | TypedoublePropertiesNillableDescriptionThe total number of rows returned in the report. When report data is divided into multiple report events, this value is the same for all data chunks. For more information, see ExecutionIdentifier. |
| Scope | TypestringPropertiesNillableDescriptionDefines the scope of the data on which the user ran the report. For example, users can run the report against all opportunities, opportunities they own, or opportunities their team owns. Possible values are:user—User owns the objects the report was run against.team—Team owns the objects the report was run against.organization—Report was run against all applicable objects. |
| Sequence | TypeintPropertiesNillableDescriptionIncremental sequence number that indicates the order of multiple events that result from a given report execution.When a report execution returns many records, Salesforce splits this data into chunks based on the size of the records, and then creates separate multiple ReportEventStreams. The field values in each of these correlated ReportEventStreams are the same, except for Records and Sequence. Records contains the different data chunks. Sequence identifies each chunk in order. Every report execution has a unique ExecutionIdentifier value to differentiate it from other report executions. To view all the data chunks from a single report execution, use the Sequence and ExecutionIdentifier fields in combination.When a report executes, we provide the first 1,000 events with data in the Records field. Use the ReportId field to view the full report.For more information, see ExecutionIdentifier. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.This low level isn’t available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels.This value is null if the event that was generated was from a dashboard refresh, a multi-block report, or a scheduled report. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesFilter, SortDescriptionThe origin user’s unique ID. For example, 005B0000001vURv.This is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Standard SOQL Usage

Currently, the only supported SOQL function on ReportEvent is WHERE, and you can only use comparison operators (\=, <, \>, <=, and \>=) on the final expression in a WHERE clause. The != operator isn’t supported.

Date functions such as convertTimezone() aren’t supported. For example, SELECT CALENDAR\_YEAR(EventDate), Count(EventIdentifier) FROM ReportEvent GROUP BY CALENDAR\_YEAR(EventDate) returns an error. You can use date literals in your queries and some date and date/time functions like TODAY, YESTERDAY, and LAST\_n\_DAYS:1. However, these functions use comparison operators behind the scenes, so you can only use them in the final expression of a WHERE clause.

ReportEvent allows filtering over three ordered fields: UserId (Beta), EventDate, and EventIdentifier. There’s a catch here: Your query doesn’t work unless you use the correct order and combination of these fields.

Valid filters for ReportEvent queries are:

-   UserId alone
-   EventDate alone
-   UserId with EventDate
-   EventDate with EventIdentifier
-   EventDate can have a range filter when the order of the filter is UserId, EventDate.

-   EventIdentifier can have a range query when the order is EventDate, EventIdentifier.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

As a beta feature, the UserId filter in ReportEvent is a preview and isn’t part of the “Services” under your Main Services Agreement with Salesforce. Use this feature at your sole discretion, and make your purchase decisions only on the basis of generally available products and features. Salesforce doesn’t guarantee general availability of this feature within any particular time frame or at all, and we can discontinue it at any time. This feature is for evaluation purposes only, not for production use. It’s offered as is and isn’t supported, and Salesforce has no liability for any harm or damage arising out of or in connection with it. All restrictions, Salesforce reservation of rights, obligations concerning the Services, and terms for related Non-Salesforce Applications and Content apply equally to your use of this feature.

This list provides some examples of valid and invalid queries.

-   **Unfiltered query**
    -   **Valid**—Contains no WHERE clause, so no special rules apply.

        ```

        ```

-   **Filter on UserId** (Beta)

    -   **Valid**—You can filter solely on UserId (Beta). You can include a range query when you filter on UserId (Beta) alone.

        ```

        ```

    -   **Valid**—Filter on UserId (Beta) and EventDate. EventDate can also have a range filter if the order of the filter is UserId (Beta), EventDate.

        ```

        ```

    -   **Valid**— Filter on UserId (Beta), and sort the results.

        ```

        ```

    -   **Invalid**—Filtering on UserId (Beta) and EventIdentifier field isn’t supported.

        ```

        ```

-   **Filter on EventDate**
    -   **Valid**—You can filter on EventDate using date literals. Or you can include a range query when you filter on EventDate alone.

        ```

        ```

    -   **Invalid**—Filtering on EventDate with standard date literals isn’t supported.

        ```

        ```

    -   **Invalid**—Filtering on EventDate with <= or >= operator and EventIdentifier field isn’t supported.

        ```

        ```


#### See Also

-   [*Big Objects Implementation Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Big Objects Implementation Guide
    - HTML (New Window)")

## Code Examples

```
SELECT DashboardId,Description,DisplayedFieldEntities,EventDate,Format,UserId
FROM ReportEvent
```

```
SELECT DashboardId,Description,DisplayedFieldEntities,EventDate,Format,UserId
FROM ReportEvent
WHERE UserId='005B0000001vURv'<=TODAY
```

```
SELECT DashboardId,Description,DisplayedFieldEntities,EventDate,Format,UserId
FROM ReportEvent
WHERE UserId='005B0000001vURv' AND EventDate<=TODAY
```

```
SELECT DashboardId,Description,DisplayedFieldEntities,EventDate,Format,UserId
FROM ReportEvent
WHERE UserId = '005B0000001vURv' 
ORDER BY EventDate DESC
```

```
SELECT DashboardId,Description,DisplayedFieldEntities,EventDate,Format,UserId
FROM ReportEvent
WHERE UserId='005B0000001vURv' AND EventIdentifier='f0b28782-1ec2-424c-8d37-8f783e0a3754'
```
