---
title: "PushTopic"
domain: object-reference
topic: pushtopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.747Z
estimatedTokens: 1156
keywords: [PushTopic, query, basis, notifying, Streaming, API, clients, changes, records, org, version, 21.0, later, Calls, Special]
---

# PushTopic

> Represents a query that is the basis for notifying Streaming API clients of changes to records in an org. This object is available in API version 21.0 and later.

# PushTopic

Represents a query that is the basis for notifying Streaming API clients of changes to records in an org. This object is available in API version 21.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   This object is available only if Streaming API is enabled for your org.
-   Users with the Create permission can create this record.
-   To receive notifications, users must have read access on both the object in the PushTopic query and the PushTopic itself.

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. API version to use for executing the query specified in Query. It must be an API version greater than 20.0. If your query applies to a custom object from a package, this value must match the package's ApiVersion.Example value: |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the PushTopic. Limit: 400 characters |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record currently counts towards the organization's allocation. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Descriptive name of the PushTopic, such as MyNewCases or TeamUpdatedContacts. Limit: 25 characters. This value identifies the channel and must be unique. |
| NotifyForFields | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies which fields are evaluated to generate a notification.Possible values are:AllReferenced (default)SelectWhere |
| NotifyForOperationCreate | TypebooleanPropertiesCreate, Filter, UpdateDescriptiontrue if a create operation should generate a notification, otherwise, false. Defaults to true. This field is available in API version 29.0 and later. |
| NotifyForOperationDelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptiontrue if a delete operation should generate a notification, otherwise, false. Defaults to true. Clients must connect using the cometd/29.0 (or later) Streaming API endpoint to receive delete and undelete event notifications. This field is available in API version 29.0 and later. |
| NotifyForOperationUndelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptiontrue if an undelete operation should generate a notification, otherwise, false. Defaults to true. Clients must connect using the cometd/29.0 (or later) Streaming API endpoint to receive delete and undelete event notifications. This field is available in API version 29.0 and later. |
| NotifyForOperationUpdate | TypebooleanPropertiesCreate, Filter, UpdateDescriptiontrue if an update operation should generate a notification, otherwise, false. Defaults to true. This field is available in API version 29.0 and later. |
| NotifyForOperations | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies which record events may generate a notification.In API version 29.0 and later, this field is read-only, and doesn’t contain information about delete and undelete events. Use NotifyForOperationCreate, NotifyForOperationDelete, NotifyForOperationUndelete and NotifyForOperationUpdate to specify which record events should generate a notification.Possible values are:All (default)CreateExtendedUpdateA value of Extended means that neither create or update operations are set to generate events. |
| Query | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The SOQL query statement that determines which record changes trigger events to be sent to the channel.Limit: 1,300 characters |

## Usage

The PushTopic defines when notifications are generated in the channel. Determine which fields to configure by checking out these links in the Streaming API Developer Guide.

-   [PushTopic Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/pushtopic_queries.htm "HTML (New Window)")
-   [Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/events.htm "HTML (New Window)")
-   [Notifications](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/notifications.htm "HTML (New Window)")

#### See Also

-   [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm "
    Streaming API Developer Guide
    - HTML (New Window)")
