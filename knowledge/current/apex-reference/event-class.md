---
title: "Event Class"
domain: apex-reference
topic: event-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.873Z
estimatedTokens: 1923
namespace: TxnSecurity
keywords: [Event, action, taken, resource, Entity, Login, attribute, any, Usage, data, entityId, entityName, organizationId, resourceType, timeStamp]
---

# Event Class

> Specifies the action being taken on the resource for an Entity event.
      For example, a Login IP resource for an Entity event could have an action of create. The
        action attribute is not used by any other event
      type.

**Namespace:** `TxnSecurity`

# Event Class

Contains event information that the evaluate method uses to evaluate a transaction security policy.

## Namespace

[TxnSecurity](atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm "The TxnSecurity namespace provides an interface used for transaction security.")

## Usage

The Event class contains the information needed to determine if the event triggers a Transaction Security policy. Not all class attributes are used for every type of event.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

The EventClass interface applies only to Legacy Transaction Security, which is a retired feature as of Summer '20. Use the EventCondition interface instead of the EventClass interface.

-   **[Event Constructors](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_constructors)**

-   **[Event Properties](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_properties)**


## Event Constructors

The following is the constructor for Event.

-   **[Event()](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_ctor)**
    Creates an instance of the TxnSecurity.Event class.

### Event()

Creates an instance of the TxnSecurity.Event class.

#### Signature

public Event()

## Event Properties

The following are properties for Event.

-   **[action](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_action)**
    Specifies the action being taken on the resource for an Entity event. For example, a Login IP resource for an Entity event could have an action of create. The action attribute is not used by any other event type.
-   **[data](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_data)**
    Contains data used by actions. For example, data for a login event includes the login history ID. Returns a map whose keys are the type of event data, like SourceIp.
-   **[entityId](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_entityId)**
    The ID of any entity associated with the event. For example, the entityId of a DataExport event for an Account object contains the Account ID.
-   **[entityName](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_entityName)**
    The name of the object the event acts on.
-   **[organizationId](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_organizationId)**
    The ID of the Salesforce org where the event occurred.
-   **[resourceType](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_resourceType)**
    The type of resource for the event. For example, an AccessResource event could have a Connected Application as a resource type. Not all event types have resources.
-   **[timeStamp](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_timeStamp)**
    The time the event occurred.
-   **[userId](atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm#apex_TxnSecurity_Event_userId)**
    Identifies the user that caused the event.

### action

Specifies the action being taken on the resource for an Entity event. For example, a Login IP resource for an Entity event could have an action of create. The action attribute is not used by any other event type.

#### Signature

public String action {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### data

Contains data used by actions. For example, data for a login event includes the login history ID. Returns a map whose keys are the type of event data, like SourceIp.

#### Signature

public Map<String,String\> data {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The following table lists all the available data types. Not all types appear with all event types. The data type values are always string representations. For example, the isApi value is a string in the map, but is actually a Boolean value. Convert the value from a string to its true type this way: Boolean.valueOf(event.data.get('isApi'));

| Key Name | True Value Type | Events Supported |
| --- | --- | --- |
| ActionName | String Values are:ConvertDeleteInsertUndeleteUpdateUpsert | Entity |
| ApiType | String (Enum manifested as a String) | DataExport, Login |
| Application | String | AccessResource, DataExport |
| ClientId | String (ID of the client) | DataExport |
| ConnectedAppId | String (ID of the Connected App) | AccessResource, DataExport |
| ExecutionTime | milliseconds | DataExport |
| IsApi | Boolean | DataExport |
| IsScheduled | Boolean | DataExport |
| LoginHistoryId | String | DataExport, Login |
| NumberOfRecords | Integer | DataExport |
| PolicyId | String (ID of the current policy) | All events |
| SessionLevel | String (Enum manifested as a String. Values include STANDARD and HIGH_ASSURANCE) | AccessResource |
| SourceIp | String (IPV4 Address) | AccessResource |
| UserName | String | Entity |

### entityId

The ID of any entity associated with the event. For example, the entityId of a DataExport event for an Account object contains the Account ID.

#### Signature

public String entityId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### entityName

The name of the object the event acts on.

#### Signature

public String entityName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### organizationId

The ID of the Salesforce org where the event occurred.

#### Signature

public String organizationId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### resourceType

The type of resource for the event. For example, an AccessResource event could have a Connected Application as a resource type. Not all event types have resources.

#### Signature

public String resourceType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### timeStamp

The time the event occurred.

#### Signature

public Datetime timeStamp {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### userId

Identifies the user that caused the event.

#### Signature

public String userId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- TxnSecurity (atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm)
- Event Constructors (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- Event Properties (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- Event() (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- action (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- data (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- entityId (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- entityName (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- organizationId (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
- resourceType (atlas.en-us.apexref.meta/apexref/apex_class_TxnSecurity_Event.htm)
