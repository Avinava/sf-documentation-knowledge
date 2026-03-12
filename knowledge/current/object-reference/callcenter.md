---
title: "CallCenter"
domain: object-reference
topic: callcenter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.948Z
estimatedTokens: 428
keywords: [CallCenter, call, center, logical, representation, computer-telephony, integration, CTI, system, instance, organization, Calls, Special, Access, Rules]
---

# CallCenter

> Represents a call center, which is a
                                logical representation of a single computer-telephony integration
                                (CTI) system instance in an organization.

# CallCenter

Represents a call center, which is a logical representation of a single computer-telephony integration (CTI) system instance in an organization.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| AdapterUrl | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionAn optional field that specifies the location of where the CTI adapter is hosted. For example, http://localhost:11000.This field is available in API version 23.0 or later. |
| CustomSettings | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionSpecifies settings in the call center definition file, such as whether the call center uses the Open CTI, and SoftPhone properties, such as height in pixels.This field is available for Open CTI and in API version 25.0 or later. |
| Id | TypeIDPropertiesDefaulted on create, FilterDescriptionSystem field that uniquely identifies this call center. Label is Call Center ID. This ID is created automatically when the call center is created. |
| InternalName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe internal name of the call center.Limit is 80 characters. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the call center.Limit is 80 characters. |
| Version | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe version of the CTI Toolkit used to create the call center (for versions 2.0 and later).This field is available in API version 18.0 and later. |

## Usage

Create a call center or query an existing call center.
