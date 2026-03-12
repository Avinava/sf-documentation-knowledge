---
title: "UserAccessPolicy"
domain: tooling-api
topic: useraccesspolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.089Z
estimatedTokens: 1250
keywords: [UserAccessPolicy, user, access, policy, API, version, 57.0, later, SOAP, Calls, REST, Special, Rules, Usage]
---

# UserAccessPolicy

> Represents a user access policy. This object is available in API version
      57.0 and later.

# UserAccessPolicy

Represents a user access policy. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update() , upsert()

## Supported REST API Methods

GET, POST, PATCH, DELETE, HEAD, Query

## Special Access Rules

To create or modify user access policies, users must have the Manage User Access Policies permission.

## Fields

| Field | Details |
| --- | --- |
| BooleanFilter | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. The logic that determines how your user criteria filters are applied in the user access policy. For instance, if you have two user access policy filters with the SortOrder equal to 1 and 2, respectively, the BooleanFilter can be 1 AND 2 or 1 OR 2. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescription of the user access policy. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the user access policy.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the user access policy. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the user access policy. In the UI, this field is Label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| Order | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the order for which active policy is applied when a user meets the criteria for multiple policies. Must be an integer from 0 to 10,000. Only the active policy with the lowest Order value is applied. This field is required only if the Status field is set to Active.Available in API version 61.0 and later. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the user access policy.Possible values are:ActiveCompletedDesignFailedMigrateTestingUpdatingThe default value is Design. If you deploy a policy with a status of Active, the status is changed to Design. A Salesforce admin can then set the status to Active by automating the policy in Setup. |
| TriggerType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of user record trigger for which this user access policy runs.Possible values are:Create—The user access policy runs when a user who matches the policy criteria is created.CreateAndUpdate—The user access policy runs when a user who matches the policy criteria is either created or updated.Update—The user access policy runs when a user who matches the policy criteria is updated. |

## Usage

For more information, see [User Access Policies](https://help.salesforce.com/s/articleView?id=platform.perm_user_access_policies.htm&type=5&language=en_US) in Salesforce Help.
