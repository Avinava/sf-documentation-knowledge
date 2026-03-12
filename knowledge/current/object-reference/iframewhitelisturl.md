---
title: "IframeWhiteListUrl"
domain: object-reference
topic: iframewhitelisturl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.163Z
estimatedTokens: 488
keywords: [IframeWhiteListUrl, trusted, external, domains, allow, frame, Embedded, Service, Surveys, Visualforce, pages, API, version, 45.0, later]
---

# IframeWhiteListUrl

> Represents a list of trusted external domains that you allow to
			frame your Embedded Service, Surveys, and Visualforce pages. This object is
		available in API version 45.0 and later.

# IframeWhiteListUrl

Represents a list of trusted external domains that you allow to frame your Embedded Service, Surveys, and Visualforce pages. This object is available in API version 45.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Context | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of content in the iframe.Valid values are:SurveysVisualforcePagesDisclosureAndComplianceHubConnector |
| Url | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique domain that is allowed to frame your Visualforce pages, surveys, or Disclosure and Compliance Hub Connector. Accepts these formats: example.com, *example.com, and https://example.com. |

## Usage

To use this object for framing Visualforce pages, on Session Settings in Setup, select **Enable clickjack protection for customer Visualforce pages** either **with headers disabled** or **with standard headers**. These options both allow framing of Visualforce pages on trusted external domains and provide clickjack protection.

Alternatively, you can customize session settings via the SecuritySettings Metadata API type. To use the IframeWhiteListUrl object, set either the enableClickjackNonsetupUser or enableClickjackNonsetupUserHeaderless field to true. For more information, see [SecuritySettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_securitysettings.htm) in the Metadata API Developer Guide.
