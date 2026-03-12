---
title: "UserProvisioningConfig"
domain: object-reference
topic: userprovisioningconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.948Z
estimatedTokens: 1332
keywords: [UserProvisioningConfig, flow, user, provisioning, process, attributes, API, version, 34.0, later, Calls]
---

# UserProvisioningConfig

> Represents information for a flow to use during a user provisioning
			request process, such as the attributes for an update.
		This object is available in API version 34.0 and
		later.

# UserProvisioningConfig

Represents information for a flow to use during a user provisioning request process, such as the attributes for an update. This object is available in API version 34.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ApprovalRequired | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDenotes whether approvals are required for provisioning users for the associated connected app. If the value is null, no approval is required. |
| ConnectedAppId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe 18-digit application ID for the connected app.This is a relationship field.Relationship NameConnectedAppRelationship TypeLookupRefers ToConnectedApplication |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package, and the changes are reflected in a subscriber’s organization.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Enabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether user provisioning is enabled for the associated connected app (true) or not (false). |
| EnabledOperations | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionLists the operations, as comma-separated values, that create a UserProvisioningRequest object for the associated connected app. Allowed values are:CreateUpdateEnableAndDisable (activation and deactivation)SuspendAndRestore (freeze and unfreeze) |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe two- to five-character code that represents the language and locale ISO. This code controls the language for labels displayed in an application. |
| LastReconDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when user accounts were last reconciled between Salesforce and the target system. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe primary label for this object. This value is the internal label that doesn’t get translated. |
| NamedCredentialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce ID of the named credential that’s used for a request. The named credential identifies the third-party system and the third-party authentication settings.This is a relationship field.Relationship NameNamedCredentialRelationship TypeLookupRefers ToNamedCredential |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA utility field for administrators to add any additional information about the configuration. This field is for internal reference only, and is not used by any process. |
| OnUpdateAttributes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionLists the user attributes, as comma-separated values, that generate a UserProvisioningRequest object during an update. |
| ReconFilter | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen collecting and analyzing users on a third-party system, the plug-in uses this filter to limit the scope of the collection. |
| UserAccountMapping | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the attributes used to link the Salesforce user to the account on the third-party system, in JSON format.For example:{"linkingSalesforceUserAttribute":"Username",  "linkingTargetUserAttribute":"Email"} |

## Code Examples

```
{"linkingSalesforceUserAttribute":"Username", 
"linkingTargetUserAttribute":"Email"}
```
