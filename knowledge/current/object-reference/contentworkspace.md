---
title: "ContentWorkspace"
domain: object-reference
topic: contentworkspace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.244Z
estimatedTokens: 1538
keywords: [ContentWorkspace, content, library, versions, 17.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentWorkspace

> Represents a content library. This object is available in
    versions 17.0 and later.

# ContentWorkspace

Represents a content library. This object is available in versions 17.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object doesn’t apply to personal libraries.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

create( ), update( ) and delete( ) on ContentWorkspace are supported in API version 40.0 and later only.

## Special Access Rules

-   The Access Libraries user permission allows orgs to make libraries available to users without requiring that they have the legacy Salesforce CRM Content license. This permission is available for profiles and permission sets on most standard user licenses, and isn’t available for High Volume Customer Portal, Customer Community, or Chatter Free licenses. Available in API versions 40.0 and later.
-   Users with the Create Libraries user perm or the Manage Salesforce CRM Content administrator permission can create libraries (ContentWorkspaces) from the Libraries tab in Salesforce Classic and from the API.
-   Customer and Partner Portal users can only edit the library document object if they have a Salesforce CRM Content feature license.
-   Customer and Partner Portal users can query this object if they have the “View Content in Portal” permission. A user can query all public libraries where they’re members, regardless of library permissions.
-   Automated process users can’t publish documents to libraries (ContentWorkspaces).

## Fields

| Field | Details |
| --- | --- |
| DefaultRecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the default content type for the library. Content types are the containers for custom fields in Salesforce CRM Content. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionText description of the content library. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the library in the API. Allows a link to the library to be packaged when an asset file is added to a package. Although libraries aren’t a packageable entity, references to libraries with a developer name will be included in the package when asset files are packaged. These links can then be restored in the target org.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Label is Unique Name.This field is available in API version 39.0 and later. |
| IsRestrictContentTypes | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Indicates whether content types have been restricted (true) or not (false). |
| IsRestrictLinkedContentTypes | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Indicates whether linked content types have been restricted (true) or not (false). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the library. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the library in the API. Allows a link to the library to be packaged when an asset file is added to a package. Limit: 15 characters. This field is available in API version 39.0 and later. |
| RootContentFolderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of root folder of the library. This field is available in API version 39.0 and later. |
| ShouldAddCreatorMembership | TypebooleanPropertiesCreate, Defaulted on create, GroupDescriptionAutomatically create a library membership for the user creating the library. Note this field isn’t meant for query and always returns false in query. This field is available in API version 40.0 and later. |
| TagModel | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of tagging assigned to a library. Valid values are:U — Unrestricted. No restrictions on tagging. Users can enter any tag when publishing or editing content.G — Guided. Users can enter any tag when publishing or editing content, but they’re also offered a list of suggested tags.R — Restricted. Users must choose from a list of suggested tags. |
| WorkspaceImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of a library image. Image files can be assigned to libraries for branding and easy identification. Library image is visible to all users, even if they aren’t library members. This field is available in API version 43.0 and later.TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of a library image. Image files can be assigned to libraries for branding and easy identification. Library image is visible to all users, even if they are not library members. This field is available in API version 43.0 and later.This is a relationship field.Relationship NameWorkspaceImageRelationship TypeLookupRefers ToContentAsset |
| WorkspaceType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionDifferentiates between different types of libraries. Valid values are:R — Regular libraryB — Org asset libraryThis field is available in API version 39.0 and later. |

## Usage

Use this object to query libraries to find out where documents can be published.

If the content type isn’t specified when publishing a new version into a library, it is determined by the DefaultRecordTypeId of the primary library.

As of 40.0, you can create, update, or delete a library via the API.

#### See Also

-   [ContentWorkspaceDoc](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspacedoc.htm "Represents a link between a document and a public library in Salesforce CRM Content. This object is available in versions 17.0 and later.")

## Related Topics

- ContentWorkspaceDoc (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentworkspacedoc.htm)
