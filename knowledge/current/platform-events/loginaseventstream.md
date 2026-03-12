---
title: "LoginAsEventStream"
domain: platform-events
topic: loginaseventstream
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.876Z
estimatedTokens: 1885
keywords: [LoginAsEventStream, LoginAsEvent, tracks, admin, logs, another, user, org, Real-Time, Event, Monitoring, captures, events, admins, Experience]
---

# LoginAsEventStream

> LoginAsEvent tracks when an admin logs in as another user in your
         org. In Real-Time Event Monitoring, it captures events for org admins and Experience Cloud
         site only. This object is available in API version 46.0 and later.

# LoginAsEventStream

LoginAsEvent tracks when an admin logs in as another user in your org. In Real-Time Event Monitoring, it captures events for org admins and Experience Cloud site only. This object is available in API version 46.0 and later.

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

/event/LoginAsEventStream

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Event Delivery Allocation Enforced

No

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

A Transaction Security policy for the LoginAs event type only monitors and responds to actions where a Salesforce administrator logs in as an internal, standard user. It does not support monitoring LoginAs actions that originate from an Experience Cloud site.

## Fields

| Field | Details |
| --- | --- |
| Application | TypestringPropertiesNillableDescriptionThe application name in English. For example, Salesforce Internal Application, or Microsoft SOAP Toolkit. |
| Browser | TypestringPropertiesNillableDescriptionThe browser name and version if known. Possible values for the browser name are:ChromeFirefoxSafariUnknownFor example, “Chrome 77”. |
| DelegatedOrganizationId | TypestringPropertiesNillableDescriptionOrganization Id of the user who is logging in as another user. For example, 00Dxx0000001gEH |
| DelegatedUsername | TypestringPropertiesNillableDescriptionUsername of the admin who is logging in as another user. For example, admin@company.com |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time and date of the event. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. Also, use this field as the primary key in your queries. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginAsCategory | TypepicklistPropertiesNillable, Restricted picklistDescriptionRepresents how the user logs in as another user. Possible values are:OrgAdmin—An administrator logs in to Salesforce as an individual user. Depending on your org settings, the individual user grants login access to the administrator.Community—A user who has been granted access to a Salesforce Experience Cloud site logs in. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular login instance. The ID from the LoginHistory entity associated with this login event. For example, 0Yaxx0000000019. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, 8gHOMQu+xvjCmRUt. |
| LoginType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of login used to access the session. See the LoginType field of LoginHistory in the Object Reference guide for the list of possible values. |
| Platform | TypestringPropertiesNillableDescriptionThe platform name and version that are used during the login event. If no platform name is available, “Unknown” is returned. Platform names are in English. For example, “Mac OSX”. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For LoginAsEvent, this field is usually null because the event is captured before a session is created. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE - A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW - The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD - The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client logging in. For example, 126.7.4.2. |
| TargetUrl | TypestringPropertiesNillableDescriptionThe URL redirected to after logging in as another user succeeds. |
| UserId | TypereferencePropertiesNillableDescriptionUnique ID that identifies the user who is being logged in as by the admin. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionUsername of the user who is being logged in as by the admin, in the format of admin@company.com. |
| UserType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe category of user license of the user who is being logged in as by the admin. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. Valid values:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.GuestPowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’reare organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfServiceStandard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
