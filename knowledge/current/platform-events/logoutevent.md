---
title: "LogoutEvent"
domain: platform-events
topic: logoutevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.950Z
estimatedTokens: 1396
keywords: [LogoutEvent, Tracks, user, logouts, logout, event, records, successful, org’s, big, stores, data, LogoutEventStream, API, version]
---

# LogoutEvent

> Tracks user UI logouts. A logout event records a successful user logout from your org’s UI. LogoutEvent is a big object that stores the event data of LogoutEventStream. This object is
		available in API version 46.0 and later.

# LogoutEvent

Tracks user UI logouts. A logout event records a successful user logout from your org’s UI. LogoutEvent is a big object that stores the event data of LogoutEventStream. This object is available in API version 46.0 and later.

Use LogoutEvent data to implement custom logic during logout. For example, you can revoke all refresh tokens for a user at logout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

LogoutEvent records logouts, not timeouts. Timeouts don't cause a LogoutEventStream object to be published. An exception is when a user is automatically logged out of the org after their session times out because the org has the **Force logout on session timeout** setting enabled. In this case, a logout event is recorded. However, if users close their browser during a session, regardless of whether the **Force logout on session timeout** setting is enabled, a logout event isn't recorded.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Fields

| Field Name | Details |
| --- | --- |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time when the specified logout event was captured. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionIndicates the session-level security of the session that the user is logging out of for this event. Session-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level will experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client logging out. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionRepresents the ID of the user associated with the logout event. |
| Username | TypestringPropertiesNillableDescriptionRepresents the username of the user associated with the logout event. |

## Standard SOQL Usage

Currently, the only supported SOQL function on LogoutEvent is WHERE, and you can only use comparison operators (=, <, >, <=, and >=) on the final expression in a WHERE clause. The != operator isn’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Date functions such as convertTimezone() aren’t supported. For example, SELECT CALENDAR\_YEAR(EventDate), Count(EventIdentifier) FROM LogoutEvent GROUP BY CALENDAR\_YEAR(EventDate) returns an error. You can use date literals in your queries and some date and date/time functions like TODAY, YESTERDAY, and LAST\_n\_DAYS:1. However, these functions use comparison operators behind the scenes. This means you can only use them in the final expression of a WHERE clause.

LogoutEvent allows filtering over two ordered fields: EventDate and EventIdentifier. There’s a catch here; your query won’t work unless you use the correct order and combination of these fields. The following list provides some examples of valid and invalid queries:

-   **Unfiltered**
    -   **Valid**—Contains no WHERE clause, so no special rules apply.

        ```

        ```

-   **Filtered on EventDate**
    -   **Valid**—You can filter solely on EventDate, but single filters on other fields fail. You can also use a comparison operator in this query type.

        ```

        ```

    -   **Valid**—You can filter on EventDate using date literals.

        ```

        ```

-   **Filtered on EventDate and EventIdentifier**
    -   **Valid**—Successful queries on LogoutEvent filter over both fields.

        ```

        ```

    -   **Invalid**—Queries on LogoutEvent with EventDate and standard date literals.

        ```

        ```

    -   **Invalid**—Filtering only on EventDate with <= or >= operator and EventIdentifier field isn’t supported.

        ```

        ```


#### See Also

-   [*Big Objects Implementation Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Big Objects Implementation Guide
    - HTML (New Window)")

## Code Examples

```
SELECT EventDate, EventIdentifier, SourceIp, UserId 
FROM LogoutEvent
```

```
SELECT EventDate, EventIdentifier, SourceIp, UserId
FROM LogoutEvent
WHERE EventDate<=2014-11-27T14:54:16.000Z
```

```
SELECT EventDate, EventIdentifier, SourceIp, UserId
FROM LogoutEvent
WHERE EventDate<=TODAY
```

```
SELECT EventDate, EventIdentifier, SourceIp, UserId
FROM LogoutEvent
WHERE EventDate=2014-11-27T14:54:16.000Z and EventIdentifier='f0b28782-1ec2-424c-8d37-8f783e0a3754'
```

```
SELECT EventDate, EventIdentifier, SourceIp, UserId
FROM LogoutEvent
WHERE EventDate=TODAY and EventIdentifier='f0b28782-1ec2-424c-8d37-8f783e0a3754'
```
