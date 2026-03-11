---
title: "EventRelayConfig"
domain: tooling-api
topic: eventrelayconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.823Z
keywords: [EventRelayConfig, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields, Usage]
---

# EventRelayConfig

# EventRelayConfig

Represents the configuration of an event relay, which relays platform events and change data capture events from Salesforce to Amazon EventBridge. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

-   To retrieve or query this object, you must have the View Setup and Configuration permission.
-   To create, update, or delete this object, you must have the Customize Application permission.
-   You can update only the state and relayOption fields and not eventChannel or destinationResourceName. Update the state and relayOption fields through the Metadata field.

## Fields

| Field | Details |
| --- | --- |
| DestinationResourceName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the named credential, which stores the AWS account information. The destinationResourceName value contains the callout: prefix. For example: callout:MyRelayNamedCredential |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| EventChannel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe full name of the event channel used in the event relay. For example: MyRelayChannel__chn |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated EventRelayConfig in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the EventRelayConfig.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionTypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the event relay, which corresponds to the label of the EventRelayConfig metadata type. The label is displayed in the user interface.If the label isn't provided in the metadata type, MasterLabel is the DeveloperName value. |
| Metadata | TypeEventRelayConfigPropertiesCreate, Nillable, UpdateDescriptionThe EventRelayConfig’s metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| RelayOption | TypetextareaPropertiesNillableDescriptionA JSON-encoded string that contains an option for resuming an event relay after the system recovers from an error. This option is used if the event relay can't resume after the last relayed event. The options available are:"{"ReplayRecovery":"LATEST"}"—(Default) Start relaying events from new events received in the event bus. Use this option if you aren’t interested in missed events while the relay was down."{"ReplayRecovery":"EARLIEST"}"—Resend all events stored in the event bus and relay new events thereafter. The event bus stores events for up to three days. Use this option if you want to reprocess all stored events and catch up on missed events. |
| State | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe execution state of the event relay. Possible values are:RUN—The event relay is running and actively relaying event messages from Salesforce to Amazon EventBridge.PAUSE—An administrator paused the event relay. No events are relayed to Amazon EventBridge during this status. All current state information is saved.STOP—(Default) The event relay is stopped and no events are relayed to Amazon EventBridge. All current state information is deleted.DELETE—Reserved for future use. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionReserved for future use. |

## Usage

This JSON example is the body of a REST API POST request that creates an event relay named MyEventRelay. It includes the optional fields relayOption and state. The corresponding REST endpoint is /services/data/v66.0/tooling/sobjects/EventRelayConfig.

```

```