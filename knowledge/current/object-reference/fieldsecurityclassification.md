---
title: "FieldSecurityClassification"
domain: object-reference
topic: fieldsecurityclassification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.160Z
estimatedTokens: 396
keywords: [FieldSecurityClassification, field’s, data, sensitivity, selected, SecurityClassification, picklist, API, version, 46.0, later, Calls, Special, Access, Rules]
---

# FieldSecurityClassification

> Represents a field’s data sensitivity value selected from the
			SecurityClassification picklist. This object is available in API version 46.0 and
		later.

# FieldSecurityClassification

Represents a field’s data sensitivity value selected from the SecurityClassification picklist. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To view this object, you need the Customize Application or Modify Data Classification permission.

## Fields

| Field Name | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name of the data sensitivity picklist value. Default values:PublicInternalConfidentialRestrictedMissionCritical |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the data sensitivity picklist value. |
| IsHighRiskLevel | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that fields with this picklist value contain data highly sensitive to your company. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe data sensitivity picklist value. Default values:PublicInternalConfidentialRestrictedMissionCritical |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe value’s position in the picklist. |

## Usage

Use this object to return information about data sensitivity values in the SecurityClassification picklist. This object is read-only, but you can update the SecurityClassification picklist using the [StandardValueSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_standardvalueset.htm) Metadata API type.
