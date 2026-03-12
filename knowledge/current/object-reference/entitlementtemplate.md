---
title: "EntitlementTemplate"
domain: object-reference
topic: entitlementtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.705Z
estimatedTokens: 694
keywords: [EntitlementTemplate, predefined, terms, customer, support, product, Product2, API, version, 18.0, later, Calls, Special, Access, Rules]
---

# EntitlementTemplate

> Represents predefined terms of customer support for a product
      (Product2). This object is available in API version 18.0 and later.

# EntitlementTemplate

Represents predefined terms of customer support for a product (Product2). This object is available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only Salesforce admins, users with access to the Case, Entitlement, or Work Order objects, and users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the BusinessHours associated with the entitlement template. Must be a valid business hours ID. |
| CasesPerEntitlement | TypeintPropertiesCreate, Filter, Nillable, UpdateDescriptionThe total number of cases the entitlement template supports.This field is only available if IsPerIncident is true. |
| IsPerIncident | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the entitlement template is limited to supporting a specific number of cases (true) or not (false). |
| Name | TypestringPropertiesCreate, Filter, idLookup, UpdateDescriptionRequired. Name of the entitlement template. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.Available in version 34.0 and later. |
| SlaProcessId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the SlaProcess associated with the entitlement template. This field is available in API version 19.0 and later. |
| Term | TypeintPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionNumber of days that the entitlement template is valid. |
| Type | TypepicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe type of entitlement template, such as Web or phone support. |

## Usage

Use this object to manage entitlement templates.
