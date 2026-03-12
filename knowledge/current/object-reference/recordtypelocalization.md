---
title: "RecordTypeLocalization"
domain: object-reference
topic: recordtypelocalization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.088Z
estimatedTokens: 513
keywords: [RecordTypeLocalization, translated, label, record, Translation, Workbench, enabled, organization, Calls, Special, Access, Rules, Usage]
---

# RecordTypeLocalization

> Represents the translated value of a label for a record type when the
   Translation Workbench is enabled for your organization.

# RecordTypeLocalization

Represents the translated value of a label for a record type when the Translation Workbench is enabled for your organization.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Your organization must be using Professional, Enterprise, Developer, Unlimited, or Performance Edition and be enabled for the Translation Workbench.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field | Details |
| --- | --- |
| Language | TypestringPropertiesCreate, Filter, Nillable, Restricted picklistDescriptionThe language for this translated label. |
| NamespacePrefix | TypestringPropertiesFilter, NillableDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, NillableDescriptionThe ID of the RecordType associated with the label that is being translated. |
| Value | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe actual translated label for the record type. Label is Translation. |

## Usage

Use this object to translate the labels of your record types into other supported languages.
