---
title: "ApiEvent"
domain: platform-events
topic: apievent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.256Z
estimatedTokens: 3811
keywords: [ApiEvent, Tracks, user-initiated, read-only, API, calls, query, queryMore, count, Captures, requests, SOAP, Bulk, Enterprise, Partner]
---

# ApiEvent

> Tracks these user-initiated read-only API calls: query(), queryMore(),
         and count(). Captures API requests through SOAP API
         and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls
         originating from a Salesforce mobile app aren’t captured. You can use ApiEvent in a
      transaction security policy. ApiEvent is a big object that stores the event data of
      ApiEventStream. This object is available in API version 46.0 and later.

# ApiEvent

Tracks these user-initiated read-only API calls: query(), queryMore(), and count(). Captures API requests through SOAP API and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls originating from a Salesforce mobile app aren’t captured. You can use ApiEvent in a transaction security policy. ApiEvent is a big object that stores the event data of ApiEventStream. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Salesforce Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ActionName | TypestringPropertiesNillableDescriptionThe name of the action. |
| AdditionalInfo | TypestringPropertiesNillableDescriptionJSON serialization of additional information that’s captured from the HTTP headers during an API request. For example, {"field1": "value1", "field2": "value2"}.For usage tips and examples, see the Working With the AdditionalInfo Field section. |
| ApiType | TypestringPropertiesNillableDescriptionThe API that was used. Values include:BulkRESTSOAP EnterpriseSOAP PartnerN/A |
| ApiVersion | TypedoublePropertiesNillableDescriptionThe version number of the API. |
| Application | TypestringPropertiesNillableDescriptionThe application used to access the org. For example, CRM Analytics or Salesforce Developers Connector. |
| BotId | TypereferencePropertiesNillableDescriptionThe ID of the bot.This field is a relationship field.Relationship NameBotRefers ToBotDefinition |
| BotSessionIdentifier | TypestringPropertiesNillableDescriptionThe bot session ID. |
| Client | TypestringPropertiesNillableDescriptionThe service that executed the API event. If you’re by using an unrecognized client, this field returns “Unknown” or a blank value. |
| ConnectedAppId | TypereferencePropertiesNillableDescriptionThe 15-character ID of the connected app associated with the API call. For example, 0H4RM00000000Kr0AI. The ConnectedAppID field populates when a call triggers an OAuth 2.0 authentication process, which identifies the connected app that’s authorized to access Salesforce data on behalf of a user. When a user associated with the call already has an active authentication token, the ConnectedAppID is set to a null value. |
| ElapsedTime | TypeintPropertiesNillableDescriptionThe amount of time it took for the request to complete in milliseconds. The measurement of this value begins before the query executes and ends when the query completes. It doesn’t include the amount of time it takes to return the result over the network. |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionThe time when the specified API event was captured (after query execution takes place). For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, SortDescriptionThe unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular series of API events. This field is also available on the LoginEvent, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. For example, 0YaB000002knVQLKA2. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| Operation | TypepicklistPropertiesNillable, Restricted PicklistDescriptionThe API call that generated the event. Possible values are DeleteHard, DeleteSoft,Query, QueryAll, or QueryMore.NoteEmail notifications are unavailable for Transaction Security Policies triggered by ApiEvent DeleteHard operations. In app notifications function as expected. |
| PlannerId | TypereferencePropertiesNillableDescriptionThe ID of the agent planner.This field is a relationship field.Relationship NamePlannerRefers ToGenAiPlannerDefinition |
| Platform | TypestringPropertiesNillableDescriptionThe operating system on the login machine. For example, iPhone, Mac OS, Linux, or Unknown. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. For this event, possible values are:Block - The user was blocked from performing the operation that triggered the policy.Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe entities in the SOQL query. For example, Opportunity, Lead, Account, or Case. Can also include custom objects. For relationship queries, the value of this field contains all entities involved in the query.ExamplesFor SELECT Contact.FirstName, Contact.Account.Name from Contact, the value of QueriedEntities is Account, Contact.For SELECT Account.Name, (SELECT Contact.FirstName, Contact.LastName FROM Account.Contacts) FROM Account, the value of QueriedEntities is Account, Contact.For SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media', the value of QueriedEntities is Account, Contact. |
| Query | TypestringPropertiesNillableDescriptionThe SOQL query. For example, SELECT id FROM Lead. |
| Records | TypejsonPropertiesNillableDescriptionFor SOAP and REST API, this field contains a JSON string that represents the queried objects’ metadata. This metadata includes the number of results of a query per entity type and the entity IDs.The records subfield is no longer supported. New implementations must use the recordIds subfield.SOAP and REST API Example{ "totalSize" : 1,   "done" : true,   "records" : [ {     "attributes" : {       "type" : "Account"     },     "Id" : "001xx000003DMvCAAW",     "Contacts" : {       "totalSize" : 3,       "done" : true,       "records" : [ {         "attributes" : {           "type" : "Contact"         },         "Id" : "003xx000004U7xKAAS"       }, {         "attributes" : {           "type" : "Contact"         },         "Id" : "003xx000004U7xLAAS"       }, {         "attributes" : {           "type" : "Contact"         },         "Id" : "003xx000004U7xMAAS"       } ]     }   } ] }Bulk API Example{     "totalSize": 3,     "done": true,     "records": [],     "recordIds": [         "001xx000003GYiBAAW",         "001xx000003GYiCAAW",         "001xx000003GYiDAAW"     ] } |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the response. Use this ID to identify the event for a specific request. |
| RowsProcessed | TypedoublePropertiesNillableDescriptionThe total number of rows of data returned from the API query when the user executed the query.For big objects, if the total number of returned rows is greater than the API batch size, RowsProcessed is -1. |
| RowsReturned | TypedoublePropertiesNillableDescriptionThe number of rows of data returned in the current API batch.If RowsProcessed is less than the API batch size, RowsReturned is equal to RowsProcessed. If RowsProcessed is greater than the API batch size, RowsReturned equals either the API batch size or the number of rows in the last batch. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE - A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW - The user’s security level for the current session meets the lowest requirements.This low level isn’t available, or used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level by using the API, but users assigned this level experience unpredictable and reduced functionality.STANDARD - The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe IP from which the API events originated. A Salesforce internal IP (such as from an API event originating from AppExchange) is shown as “Salesforce.com IP”. |
| UserAgent | TypestringPropertiesNillableDescriptionThe platform or environment in which the API call originated. This field could include information about the operating system, application, or web protocol. For example, Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Working With the AdditionalInfo Field

AdditionalInfo enables you to extend the API event with custom data that can be queried later. For example, you can capture a correlation ID when a user executes a SOQL query from an external system that shares that unique ID. This process enables tracking API calls across systems. To store data with ApiEvent, begin all AdditionalInfo field names with x-sfdc-addinfo-{field name}. For example, a valid field assignment is x-sfdc-addinfo-correlation\_id = ABC123 where x-sfdc-addinfo-correlation\_id is the field name and ABC123 is the field value.

When defining field names, note the following:

-   x-sfdc-addinfo- is case-*insensitive*; x-sfdc-addinfo-{field name} is the same as X-SFDC-ADDINFO-{field name} and x-SfDc-AdDiNfO-{field name}.
-   Fields can contain only alphanumeric and "\_" (underscore) characters.
-   Field names must be from 2 through 29 characters in length, excluding x-sfdc-addinfo-.
-   Field names that don’t start with x-sfdc-addinfo- are ignored.
-   Names that contain invalid characters after x-sfdc-addinfo- are ignored, and nothing is stored. For example, a valid field name is x-sfdc-addinfo-correlation\_id but x-sfdc-addinfo-correlation->id isn’t valid.
-   Only the first 30 valid field names are stored in AdditionalInfo. If you store two valid field names—for example, x-sfdc-addinfo-correlation\_id and x-sfdc-addinfo-correlation\_number— you can store 28 extra field names. Field names aren’t necessarily stored in the same order in which they were passed to authentication.
-   You can’t use existing API field names as AdditionalInfo names in the HTTP header. If the AdditionalInfo name conflicts with an object’s API name, the field value isn’t stored. For example, the HTTP header X-SFDC-ADDINFO-UserId='abc123' doesn’t get stored in AdditionalInfo.
-   Extra field values can contain only alphanumeric, "\_," and "-" characters.
-   Field values must be 255 characters in length or fewer. If a field value exceeds 255 characters, only the first 255 characters are stored, and the rest are truncated.
-   Field values that contain invalid characters are saved with a field header of Empty String ("").
-   Only the first 30 valid field names are stored in the AdditionalInfo field. They aren’t guaranteed to be stored in the same order that they were passed into the authentication.
-   When AggregationFieldName or PlatformEventMetrics is SourceIp, you can’t filter on AggregationFieldValue if its value is Salesforce.com IP.

## How to Pass Additional Information by Using HTTP with cURL

```

```

## Example of Using Java

```

```

For the user interface, use proxy servers to intercept call and add required information.

## Standard SOQL Usage

ApiEvent allows filtering over two fields: EventDate and EventIdentifier. The only supported SOQL functions on the ApiEvent object are WHERE, ORDER BY, and LIMIT. In the WHERE clause, you can only use comparison operators (<, >, <=, and >=). The != operator isn’t supported. In the ORDER BY clause, you can only use EventDate DESC. Ascending order isn’t supported with EventDate, and EventIdentifier sorting isn’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Date functions such as convertTimeZone() aren’t supported—for example, SELECT CALENDAR\_YEAR(EventDate), Count(Id) FROM ApiEvent GROUP BY CALENDAR\_YEAR(EventDate) returns an error. You can use date literals in your queries and some date/time functions like TODAY(), YESTERDAY(), and LAST\_n\_DAYS:1. However, these functions use comparison operators behind the scenes. Therefore you can only use them in the final expression in the WHERE clause.

## Example of an Unfiltered Query

This query is valid because it doesn’t contain a WHERE clause. No special rules apply.

```

```

## Example of a Filtered Query

You can filter solely on EventDate, but single filters on other fields fail. You can also use a comparison operator in this query type.

```

```

#### See Also

-   [*Big Objects Implementation Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm "
    Big Objects Implementation Guide
    - HTML (New Window)")

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

```
{
    "totalSize": 3,
    "done": true,
    "records": [],
    "recordIds": [
        "001xx000003GYiBAAW",
        "001xx000003GYiCAAW",
        "001xx000003GYiDAAW"
    ]
}
```

```
curl https://yourInstance.salesforce.com/services/data/v34.0/query?q=SELECT+Name+From+Account -H "X-PrettyPrint:1" -H "x-sfdc-addinfo-correlationid:
d18c5a3f-4fba-47bd-bbf8-6bb9a1786624"
```

```apex
//adding additional info headers ..
Map<String, String> httpHeaders = new HashMap<String,String>();
httpHeaders.put("x-sfdc-addinfo-fieldname1" /* additional info field*/ , "d18c5a3f-4fba-47bd-bbf8-6bb9a1786624" /* value*/);
httpHeaders.put("x-sfdc-addinfo-fieldname2" /* additional info field*/ , "d18c5a3f-4fba-47bd-bbf8-6bb9a1786624" /* value*/);

ConnectorConfig config = new ConnectorConfig();
config.setUsername(userId);
config.setPassword(passwd);
config.setAuthEndpoint(authEndPoint);
config.setProxy(proxyHost, proxyPort);

//setting additional info headers
for (Map.Entry<String, String> entry : httpHeaders.entrySet()) {
     config.setRequestHeader(entry.getKey(), entry.getValue());
}
// Set the username and password if your proxy must be authenticated
     config.setProxyUsername(proxyUsername);
     config.setProxyPassword(proxyPassword);
     try {
       QueryResult queryResult = connection.query("SELECT Id, Name FROM Account");
       // etc.
     } catch (ConnectionException ce) {
      ce.printStackTrace();
     }
```

```
SELECT ApiType, Client, ElapsedTime, QueriedEntities, Username 
FROM ApiEvent
```
