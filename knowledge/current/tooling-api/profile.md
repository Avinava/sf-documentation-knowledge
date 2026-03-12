---
title: "Profile"
domain: tooling-api
topic: profile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.521Z
estimatedTokens: 802
keywords: [Profile, Represents, user, profile., profile, defines, user’s, permission, perform, different, functions, within, Salesforce., extends, Metadata, metadata, inherits, its, fullName, field.]
---

# Profile

> Represents a user profile. A profile defines a user’s
        permission to perform different functions within Salesforce. This type extends the Metadata 
        metadata type and inherits its fullName field.

# Profile

Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

getDeleted(), getUpdated(), query(), retrieve(), search()

## Supported REST HTTP Methods

GET, HEAD

## Special Access Rules

As of Summer ’20 and later, Customer Portal and Partner Portal users *cannot* access this object.

To view the following settings, assignments, and permissions for standard and custom objects in a specified profile, the View Setup and Configuration permission is required.

-   Client settings
-   Field permissions
-   Layout assignments
-   Object permissions
-   Permission dependencies
-   Permission set tab settings
-   Permission set group components
-   Record types

As of API version 50.0 and later, only users with correct permissions can view profile names other than their own if the Profile Filtering setting is enabled.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Profile names are also exposed when users with permissions to perform the following tasks take these actions:

-   Create a tab or record type with a wizard step that includes the assignment of tabs and record types to profiles.
-   Configure a login flow where viewing profile lists is required to make flow associations.
-   Set up delegated admins where looking up profiles is needed to identify assignable profiles.
-   Administer an org as a delegated customer admin.
-   Administer an org as a delegated admin to view and assign profiles of the delegated group.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe profile description, limited to 255 characters. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique profile name. Use this name when creating the profile, before you have an ID. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Metadata | TypeProfileMetadataPropertiesCreate, Nillable, UpdateDescriptionThe profile metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe profile name. |
| TimeSheetTemplateAssignments | Typetns:QueryResultPropertiesNillableDescriptionThe time sheet template that you assign to a particular profile. Because this field represents a relationship, use it only in subqueries. This field is available in Tooling API version 46.0 and later. |
