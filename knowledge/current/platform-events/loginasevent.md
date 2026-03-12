---
title: "LoginAsEvent"
domain: platform-events
topic: loginasevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.863Z
estimatedTokens: 2229
keywords: [LoginAsEvent, tracks, admin, logs, another, user, org, Real-Time, Event, Monitoring, captures, events, admins, Experience, Cloud]
---

# LoginAsEvent

> LoginAsEvent tracks when an admin logs in as another user in your
			org. In Real-Time Event Monitoring, it captures events for org admins and Experience
			Cloud sites only. LoginAsEvent is a big object that stores the event data of
			LoginAsEventStream. This object is available in API version 46.0 and
		later.

# LoginAsEvent

LoginAsEvent tracks when an admin logs in as another user in your org. In Real-Time Event Monitoring, it captures events for org admins and Experience Cloud sites only. LoginAsEvent is a big object that stores the event data of LoginAsEventStream. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

A Transaction Security policy for the LoginAs event type only monitors and responds to actions where a Salesforce administrator logs in as an internal, standard user. It does not support monitoring LoginAs actions that originate from an Experience Cloud site.

| Field | Details |
| --- | --- |
| Application | TypestringPropertiesNillableDescriptionThe application name in English. For example, Salesforce Internal Application, or Microsoft SOAP Toolkit. |
| Browser | TypestringPropertiesNillableDescriptionThe browser name and version if known. Possible values for the browser name are:ChromeFirefoxSafariUnknownFor example, “Chrome 77”. |
| DelegatedOrganizationId | TypestringPropertiesNillableDescriptionOrganization Id of the admin who performs logs in as another user. For example, 00Dxx0000001gEH |
| DelegatedUsername | TypestringPropertiesNillableDescriptionUsername of the admin who logs in as another user. For example, admin@company.com |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time and date of the event. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique identifier for each record in LoginAsEvent. Use this field as the primary key in your queries. |
| LoginAsCategory | TypepicklistPropertiesNillable, Restricted picklistDescriptionRepresents how the user logs in as another user. Possible values are:OrgAdmin—An administrator logs in to Salesforce as an individual user. Depending on your org settings, the individual user grants login access to the administrator.Community—A user who has been granted access to a Salesforce Experience Cloud site logs in. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionThe ID from the LoginHistory entity associated with this login event. Tracks a user session so you can correlate user activity with a particular login instance. For example, 0Yaxx0000000019. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, 8gHOMQu+xvjCmRUt. |
| LoginType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe event’s type of login. For example, “Application.” |
| Platform | TypestringPropertiesNillableDescriptionThe platform name and version that are used during the login event. If no platform name is available, “Unknown” is returned. Platform names are in English. For example, “Mac OSX”. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For LoginAsEvent, this field is usually null because the event is captured before a session is created. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE - A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW - The user’s security level for the current session meets the lowest requirements.NoteThis low level is available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD - The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client logging in. For example, 126.7.4.2. |
| TargetUrl | TypestringPropertiesNillableDescriptionThe URL redirected to after logging in as another user succeeds. |
| UserId | TypereferencePropertiesNillableDescriptionUnique ID that identifies the user who is being logged in as by the admin. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionUsername of the user who is being logged in as by the admin, in the format of someuser@company.com. |
| UserType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe category of user license of the user who is being logged in as by the admin. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. Valid values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |

## Standard SOQL Usage

Currently, the only supported SOQL function on LoginAsEvent is WHERE, and you can only use comparison operators (=, <, >, <=, and >=) on the final expression in a WHERE clause. The != operator isn’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Date functions such as convertTimezone() aren’t supported. For example, SELECT CALENDAR\_YEAR(EventDate), Count(EventIdentifier) FROM LoginAsEvent GROUP BY CALENDAR\_YEAR(EventDate) returns an error. You can use date literals in your queries and some date and date/time functions like TODAY, YESTERDAY, and LAST\_n\_DAYS:1. However, these functions use comparison operators behind the scenes. This means you can only use them in the final expression of a WHERE clause.

LoginAsEvent allows filtering over two ordered fields: EventDate and EventIdentifier. There’s a catch here; your query doesn’t work unless you use the correct order and combination of these fields. The following list provides some examples of valid and invalid queries:

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
    -   **Valid**—Successful queries on LoginAsEvent filter over both fields.

        ```

        ```

    -   **Invalid**—Queries on LoginAsEvent with EventDate and standard date literals.

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
SELECT Application, Browser, EventDate, EventIdentifier, LoginHistoryId, UserId
FROM LoginAsEvent
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginHistoryId, UserId
FROM LoginAsEvent
WHERE EventDate<=2014-11-27T14:54:16.000Z
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginHistoryId, UserId
FROM LoginAsEvent
WHERE EventDate<=TODAY
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginHistoryId, UserId
FROM LoginAsEvent
WHERE EventDate=2014-11-27T14:54:16.000Z and EventIdentifier='f0b28782-1ec2-424c-8d37-8f783e0a3754'
```

```
SELECT Application, Browser, EventDate, EventIdentifier, LoginHistoryId, UserId
FROM LoginAsEvent
WHERE EventDate=TODAY and EventIdentifier='f0b28782-1ec2-424c-8d37-8f783e0a3754'
```
