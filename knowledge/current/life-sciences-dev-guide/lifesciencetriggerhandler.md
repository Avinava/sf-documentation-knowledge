---
title: "LifeScienceTriggerHandler"
domain: life-sciences-dev-guide
topic: lifesciencetriggerhandler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.410Z
estimatedTokens: 568
keywords: [LifeScienceTriggerHandler, collection, trigger, handlers, run, Life, Sciences, API, version, 65.0, later, Calls]
---

# LifeScienceTriggerHandler

> Represents a collection of fields to set up the trigger handlers to
         run for each Life Sciences object.  This object is available in API version 65.0 and
      later.

# LifeScienceTriggerHandler

Represents a collection of fields to set up the trigger handlers to run for each Life Sciences object. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, SortDescriptionDescribes the behavior of the concrete trigger handler. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the trigger handler is active (true) or not (false). The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used in the trigger handler. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for this object value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix with a 15 character limit. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. NamespacePrefix is null if the publisher is Salesforce. |
| ObjectApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object associated with the handler. |
