---
title: "CustExpIntlTransfSetup"
domain: object-reference
topic: custexpintltransfsetup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.631Z
estimatedTokens: 540
keywords: [CustExpIntlTransfSetup, Stores, different, data, sources, processed, customer, insights, API, version, 65.0, later, Calls]
---

# CustExpIntlTransfSetup

> Stores information for different data sources that are processed for customer
         insights. This object is available in API version 65.0 and later.

# CustExpIntlTransfSetup

Stores information for different data sources that are processed for customer insights. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataSourceChannelName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the associated communication channel, such as Web, Email, Chat, or Voice. |
| DataSourceChannelType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the channel type as standard or custom.Possible values are:CustomStandardThe default value is Standard. |
| IsDataProcessingPaused | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether data processing for the channel is temporarily paused (true). Use this field to control channel operations without deactivating the channel.The default value is false. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the channel is active for processing data (true).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record, a record related to this record, or a list view. If this value is null, the current user has never viewed or modified a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record. If this value is null, the current user has never viewed or modified this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Customer Experience Intelligence Transformer Setup record. |
| ProcessingStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date to start processing data in the specified communication channel. |
