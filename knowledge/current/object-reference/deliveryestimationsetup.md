---
title: "DeliveryEstimationSetup"
domain: object-reference
topic: deliveryestimationsetup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.147Z
estimatedTokens: 1169
keywords: [DeliveryEstimationSetup, configuration, options, commerce, delivery, service, offered, web, store, sales, channel, Includes, settings, location, group]
---

# DeliveryEstimationSetup

> Shows the configuration options for the commerce delivery service
      offered through a web store or sales channel. Includes settings such as delivery location
      group, channel, fulfillment types, and default fulfillment time. This object is available
    in API version 61.0 and later.

# DeliveryEstimationSetup

Shows the configuration options for the commerce delivery service offered through a web store or sales channel. Includes settings such as delivery location group, channel, fulfillment types, and default fulfillment time. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The DeliveryEstimationSetup object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ChannelId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID for the web store or sales channel associated with the delivery estimation configuration. |
| DefaultBusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID for the default business hours.This is a relationship field.Relationship NameDefaultBusinessHoursRefers ToBusinessHours |
| DefaultPickupTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionDefault pickup time. |
| DefaultProcessingTime | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDefault processing time. |
| DefaultProcessingTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefault processing time unit. Possible values are:HoursDaysWeeks |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique code, reference, or identifier for the delivery estimation configuration record used by external systems. Can be the name of the web store or sales channel associated with the configuration to ensure a unique ID within the organization.For example, DefaultWebstore123. |
| isEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the given delivery estimation configuration is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last modified. Its label in the user interface is Last Modified Date. |
| LastSyncedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionUser ID of who performed the last sync for this delivery estimation configuration. This field is available in API version 62.0 and later.This is a relationship field.Relationship NameLastSyncedByRefers ToUser |
| LastSyncedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate the delivery estimation configuration was last synced. This field is available in API version 62.0 and later. |
| LastSyncedMessage | TypetextareaPropertiesNillableDescriptionMessage that occurred during the last sync. This field is available in API version 62.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionLast time the delivery estimation configuration was viewed. |
| LocationGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents a group of Omnichannel Inventory locations.This is a relationship field.Relationship NameLocationGroupRefers ToLocationGroup |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the delivery estimation setup configuration. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who currently owns this DeliveryEstimationSetup object. Default value is the user logged in to the API to perform the create.This is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RoutingType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines an order's route and calculates delivery estimations. This field is available in API version 65.0 and later.Possible values are:DRENoneStandardThe default value is None. |
| ServiceRegion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAn org's commerce delivery service provisioning region (North America, Europe, or Asia) that's set when Delivery Estimation is enabled in the Order Management app. It can't be changed. If the field is empty, provisioning hasn't occurred yet. Available in API version 63.0 and later. |
| SyncStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSync status of the delivery estimation setup configuration.Possible values are:DeletingDeprovisionedErrorNoneSyncedSyncingThe default value is NONE. This field is available in API version 62.0 and later. |
