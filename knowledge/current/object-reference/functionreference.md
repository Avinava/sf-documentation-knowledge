---
title: "FunctionReference"
domain: object-reference
topic: functionreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.893Z
estimatedTokens: 782
namespace: Global
keywords: [FunctionReference, deployed, Salesforce, Function, associated, org, API, version, 52.0, later, Calls, Usage]
---

# FunctionReference

> Represents a deployed Salesforce Function associated with an org. This
      object is available in API version 52.0 and later.

**Namespace:** `Global`

# FunctionReference

Represents a deployed Salesforce Function associated with an org. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Access | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe label for whether managed components can access across namespaces.Possible values are:Global—The managed components can access across namespaces.Public—The managed components can access within the same namespace.The default value is Public. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the Function. |
| FunctionName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe developer name of the Function. This name is case sensitive and uses the format “project name-function name”. This field is unique within your organization. |
| ImageReference | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionStores details about an image associated with a function. This is internal only, used by packaging only, and should not be editable or set by the customer. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language code for the Function, such as “en_US”. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label for the Function. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. This object is available in API version 53.0 and later. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

Treat FunctionReference records as read-only records used to get information about a specific Function associated with your org. To invoke Functions, use the Apex functions.Function class invoke methods. To deploy and associate Functions with your org, use Salesforce CLI commands associated with Functions, as described in the [Salesforce Functions developer documentation](https://developer.salesforce.com/docs/platform/functions/guide/index.html).

FunctionReference is not supported in Trialforce templates or org snapshots.
