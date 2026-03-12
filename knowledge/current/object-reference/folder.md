---
title: "Folder"
domain: object-reference
topic: folder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.554Z
estimatedTokens: 1235
keywords: [Folder, repository, Dashboard, Document, EmailTemplate, Macro, QuickText, Report, item, contained, Calls, Special, Access, Rules, Usage]
---

# Folder

> Represents a repository for a Dashboard, Document, EmailTemplate,
   Macro, QuickText, or Report. Only one type of item can be contained in a folder.

# Folder

Represents a repository for a Dashboard, Document, EmailTemplate, Macro, QuickText, or Report. Only one type of item can be contained in a folder.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

-   You must have the “Modify All Data” permission to create, update, or delete document folders and email template folders.
-   Guest and Customer Portal users can’t access this object.
-   To query this object, no special permissions are needed.
-   As of API version 35.0, when a folder is shared with a role, it is only visible to users in that role. Superior roles in the role hierarchy don’t gain visibility.
-   If analytics folder sharing is turned on, then users need these permissions to create and manage report folders and dashboard folders:
    -   “Create Dashboard Folders”
    -   “Create Report Folders”
-   To use folders for macros and quick text, enable folders for these objects in Setup on the Macro Settings and Quick Text Settings pages.

## Fields

| Field | Details |
| --- | --- |
| AccessType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates who can access the Folder. Available values include:Hidden—Folder is hidden from everyone.Public—Folder is accessible by all users.Shared—Folder is accessible only by a User in a particular Group or UserRole. The API doesn’t allow you to view, insert, or update which group or Role the Folder is shared with.NoteIf analytics folder sharing is turned on for your organization, then this field is present but not used. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Folder Unique Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| IsReadonly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this Folder is read-only (true) or editable (false). Label is Read Only.NoteIf analytics folder sharing is turned on for your organization, then this field is present but not used. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel of the folder as it appears in the user interface. Label is Document Folder Label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the parent object, if any. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. Type of objects contained in the Folder. This field can’t be updated. Available values include:DashboardDocumentEmail (for Salesforce Classic email templates)EmailTemplate (for Lightning email templates)MacroQuickTextReport |

## Usage

Only one type of item can be contained in a folder, either Dashboard, Document, EmailTemplate, Macro, QuickText, or Report.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
