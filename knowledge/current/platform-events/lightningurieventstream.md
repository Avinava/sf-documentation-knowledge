---
title: "LightningUriEventStream"
domain: platform-events
topic: lightningurieventstream
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.788Z
estimatedTokens: 2809
keywords: [LightningUriEventStream, Detects, user, creates, accesses, updates, deletes, record, Lightning, Experience, API, version, 46.0, later, Calls]
---

# LightningUriEventStream

> Detects when a user creates, accesses, updates, or deletes a record
         in Lightning Experience only. This object is available in API version 46.0 and
      later.

# LightningUriEventStream

Detects when a user creates, accesses, updates, or deletes a record in Lightning Experience only. This object is available in API version 46.0 and later.

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

/event/LightningUriEventStream

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

LightningUriEventStream doesn’t track Setup events. If the user navigates away from the page while creating, accessing, updating, or deleting a record, the event will not capture the operation.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| AppName | TypestringPropertiesNillableDescriptionThe name of the application that the user accessed. |
| ConnectionType | TypestringPropertiesNillableDescriptionThe type of connection.Possible ValuesCDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DeviceId | TypestringPropertiesNillableDescriptionThe unique identifier used to identify a device when tracking events. DEVICE_ID is a generated value that’s created when the mobile app is initially run after installation. |
| DeviceModel | TypestringPropertiesNillableDescriptionThe name of the device model. |
| DevicePlatform | TypestringPropertiesNillableDescriptionThe type of application experience in name:experience:form format.Possible ValuesNameAPP_BUILDERCUSTOMS1SFXExperienceBROWSERHYBRIDFormDESKTOPPHONETABLET |
| DeviceSessionId | TypestringPropertiesNillableDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started. |
| Duration | TypedoublePropertiesNillableDescriptionThe duration in milliseconds since the page start time. |
| EffectivePageTime | TypedoublePropertiesNillableDescriptionIndicates how many milliseconds it took for the page to load before a user could interact with the page’s functionality. Multiple factors can affect effective page time, such as network speed, hardware performance, or page complexity. |
| EffectivePageTimeDeviationErrorType | TypestringPropertiesNillableDescriptionIndicates the origin of an error. This field is populated when EffectivePageTimeDeviationReason contains the PageHasError value. This field is available in API version 58.0 and later.Possible ValuesCustom—An error originating from the customer's system or network.System—An error originating in Salesforce. |
| EffectivePageTimeDeviationReason | TypestringPropertiesNillableDescriptionThe reason for deviation in page loading time. This field is available in API version 58.0 and later.Possible ValuesPageInDom—The page was loaded from a cache.PageHasError—An undefined page loading error occurred.PageNotLoaded—If a customer navigates away from a page while loading processes are in progress, the page doesn't finish loading.PreviousPageNotLoaded—When navigating to a new page, and the previous page hasn't completed loading, the next page is considered to have a deviation. Incomplete loading processes on a previous page can affect how the next page loads.InteractionsBeforePageLoaded—A user interacts with a page element before the page is fully loaded.PageInBackgroundBeforeLoaded—A background loading process runs on a page. Background processes can run when users don't interact with a page, such as when they navigate to another browser tab. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the specified URI event was captured (after query execution takes place). For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| HasEffectivePageTimeDeviation | TypebooleanDescriptionWhen a deviation is detected, EffectivePageTimeDeviation records true. The default value is false. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring.For example, 8gHOMQu+xvjCmRUt |
| Operation | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe operation being performed on the entity. For example, Read, Create, Update, or Delete.Create and update operations are captured in pairs; that is, expect two event records for each operation. The first record represents the start of the operation, and the second record represents whether the operation was successful or not.If there isn’t a second event recorded for a create or update operation, then the user canceled the operation, or the operation failed with client-side validation (for example, when a required field is empty). |
| OsName | TypestringPropertiesNillableDescriptionThe operating system name. |
| OsVersion | TypestringPropertiesNillableDescriptionThe operating system version. |
| PageStartTime | TypedateTimePropertiesNillableDescriptionThe time when the page was initially loaded, measured in milliseconds.Example1471564788642 |
| PageUrl | TypeurlPropertiesNillableDescriptionRelative URL of the top-level Lightning Experience or Salesforce mobile app page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PageUrl.Example/sObject/0064100000JXITSAA5/view |
| PreviousPageAppName | TypestringPropertiesNillableDescriptionThe internal name of the previous application that the user accessed from the App Launcher. |
| PreviousPageEntityId | TypestringPropertiesNillableDescriptionThe unique previous page entity identifier of the event. |
| PreviousPageEntityType | TypestringPropertiesNillableDescriptionThe previous page entity type of the event. |
| PreviousPageUrl | TypeurlPropertiesNillableDescriptionThe relative URL of the previous Lightning Experience or Salesforce mobile app page that the user opened.Example/sObject/006410000 |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe API name of the objects referenced by the URI. |
| RecordId | TypestringPropertiesNillableDescriptionThe id of the record being viewed or edited. For example, 001RM000003cjx6YAA. |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SdkAppType | TypestringPropertiesNillableDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| SdkAppVersion | TypestringPropertiesNillableDescriptionThe version of the mobile SDK the application uses. |
| SdkVersion | TypestringPropertiesNillableDescriptionThe mobile SDK application version number.Example5.0 |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements. This low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the org’s Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client logging in. For example, 126.7.4.2. |
| UserAgent | TypestringPropertiesNillableDescriptionThe type of client used to make the request (for example, the browser, application, or API) as a string. This field is available in API version 58.0 and later. |
| UserId | TypereferencePropertiesNillableDescriptionThe user’s unique ID. For example, 005RM000001ctYJYAY. |
| Username | TypestringPropertiesNillableDescriptionThe username in the format of user@company.com at the time the event was created. |
| UserType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe category of user license. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. Valid values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they are organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they are organization customers and access the application through a customer portal.GuestPowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they are organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they are partners and typically access the application through a partner portal or site.SelfServiceStandard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses. |

#### See Also

-   [UriEventStream](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_urieventstream.htm "Detects when a user creates, accesses, updates, or deletes a record in Salesforce Classic only. Doesn't detect record operations done through a Visualforce page or Visualforce page views. This object is available in API version 46.0 and later.")

## Related Topics

- UriEventStream (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_urieventstream.htm)
