---
title: "PlatformEventSubscriberConfig"
domain: tooling-api
topic: platformeventsubscriberconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.523Z
keywords: [PlatformEventSubscriberConfig, Supported, SOAP, API, Calls, REST, Methods, Fields, Usage]
---

# PlatformEventSubscriberConfig

# PlatformEventSubscriberConfig

Represents configuration settings for a platform event Apex trigger, including the batch size and the trigger’s running user. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| BatchSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA custom batch size, from 1 through 2,000, for the platform event Apex trigger. The batch size corresponds to the maximum number of event messages that can be sent to a trigger in one execution. The default batch size is 2,000 for platform event triggers.We don't recommend setting the batch size to 1 to process one event at a time. Small batch sizes can slow down the processing of event messages. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the PlatformEventSubscriberConfig object.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance can slow down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of PlatformEventSubscriberConfig.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for PlatformEventSubscriberConfig. In the UI, this field is Platform Event Subscriber Configuration. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of these values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| NumPartitions | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the number of parallel subscriptions, or partitions, that are created internally for an Apex trigger. Use this field to set up parallel subscriptions for the platform event Apex trigger. It can be a number from 1 through 10. See Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers in the Platform Events Developer Guide.The default value is 1. This field is available in API version 62.0 and later. |
| PartitionKey | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCan be the standard EventUuid field name, or the name of a required custom field of the custom platform event that the Apex trigger subscribes to. For the standard EventUuid field, the partition key format is the field name without the event name: EventUuid. For a custom field, the partition key includes the event name as a prefix in this format: EventName__e.FieldName__c. Based on the field’s generated hash value, the system determines which partition to send the event to. Use this field to specify the platform event field that is used as a partition key for parallel subscriptions. See Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers in the Platform Events Developer Guide.The default value is EventUuid. This field is available in API version 62.0 and later. |
| PlatformEventConsumerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the platform event Apex trigger to configure. This field is unique within your Salesforce org.To get the Apex trigger ID, perform a query in Tooling API after replacing the placeholder name with the trigger name. SELECT Id FROM ApexTrigger WHERE Name='<Trigger_Name_Placeholder>'. You can run the Tooling API query in the Developer Console’s Query Editor. For more information, see Developer Console in Salesforce Help. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user that the platform event Apex trigger runs as. By default, the platform event trigger runs as the Automated Process entity. Setting the running user to a specific user has these benefits:Records are created or modified as this user.Records with OwnerId fields have their OwnerId fields populated to this user when created or modified.Debug logs for the trigger execution are created by this user.You can send email from the trigger, which isn’t supported with the default Automated Process user. |

## Usage

To add a configuration, perform a POST request to this endpoint.

```

```

Provide the values in the request body. This example request configures an existing trigger with the batch size of 200 and specifies the ID of a running user.

```

```

To get or manipulate a configuration, use this endpoint with the ID of your PlatformEventSubscriberConfig record appended.

```

```

All these requests use the endpoint with the PlatformEventSubscriberConfig record ID appended.

-   Get a specific configuration with a GET request.
-   Delete a specific configuration with a DELETE request.
-   Update a specific configuration with a PATCH request. For this request, include the PlatformEventSubscriberConfig definition in the request body.

Also, you can query retrieve the configurations in your org with SOQL. If querying from the Developer Console Query Editor, ensure you select **Use Tooling API**. This example query retrieves all configurations set up in your Salesforce org.

```

```