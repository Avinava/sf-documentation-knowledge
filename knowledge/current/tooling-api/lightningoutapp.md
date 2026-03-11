---
title: "LightningOutApp"
domain: tooling-api
topic: lightningoutapp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.182Z
keywords: [LightningOutApp, Important, Supported, SOAP, API, Calls, REST, Methods, Fields, Usage]
---

# LightningOutApp

# LightningOutApp

Represents a Lightning Out 2.0 application. With a Lightning Out 2.0 app, you can embed Lightning web components (LWC) into external applications. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the Lightning Out 2.0 app. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique API name of the Lightning Out 2.0 app. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Lightning Out 2.0 app is enabled (true) or disabled (false). The default value is false. If the app is disabled, then user authentication fails and the embedded components don’t load in the external app. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the LightningOutApp. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescription​A user-friendly name for the LightningOutApp, which is defined when the LightningOutApp is created. |

## Usage

See [Extend Salesforce to External Apps with Lightning Out 2.0](https://help.salesforce.com/s/articleView?id=platform.lightning_out_intro.htm&language=en_US&type=5 "HTML (New Window)") in Salesforce Help and [Use Components Outside Salesforce with Lightning Out 2.0](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out-intro.html "HTML (New Window)") in the Lightning Web Components Developer Guide.