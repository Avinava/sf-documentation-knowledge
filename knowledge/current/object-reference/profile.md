---
title: "Profile"
domain: object-reference
topic: profile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.520Z
estimatedTokens: 1922
keywords: [Profile, permissions, perform, different, operations, include, creating, custom, querying, adding, updating, deleting, Calls, Special, Access]
---

# Profile

> Represents a profile, which defines a set of permissions to perform
      different operations. Operations can include creating a custom profile or querying, adding,
      updating, or deleting information.

# Profile

Represents a profile, which defines a set of permissions to perform different operations. Operations can include creating a custom profile or querying, adding, updating, or deleting information.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, Customer Portal and Partner Portal users *can’t* access this object.

To view the following settings, assignments, and permissions for standard and custom objects in a specified profile, the View Setup and Configuration permission is required.

-   Client settings
-   Field permissions
-   Layout assignments
-   Object permissions
-   Permission dependencies
-   Permission set tab settings
-   Permission set group components
-   Record types

Starting in Winter ’21, only users with correct permissions can view profile names other than their own if the Profile Filtering setting is enabled.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

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
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the profile. |
| IsSsoEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, users assigned to this profile can delegate username and password authentication to a corporate database instead of the user database. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this profile. Available in API version 29.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this profile. Available in API version 29.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the profile. |
| PermissionsPermissionName | TypebooleanPropertiesCreate, Filter, UpdateDescriptionOne field for each permission. If true, users assigned to this profile have the named permission. The number of fields varies depending on the permissions for the org and license type.TipTo get a list of available permissions in SOAP API, use describeSObjects(). |
| UserLicenseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the UserLicense associated with this profile.This is a relationship field.Relationship NameUserLicenseRelationship TypeLookupRefers ToUserLicense |
| UserType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe category of user license. Each UserType is associated with one or more UserLicense records. Each UserLicense is associated with one or more profiles. In API version 10.0 and later, valid values include:Standard: user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses. Label is Standard.PowerPartner: User whose access is limited because they’re a partner and typically access the application through a partner portal or Experience Cloud site. Label is Partner.CspLitePortal: user whose access is limited because they’re an org's customer and access the application through a Customer Portal or Experience Cloud site. Label is High Volume Portal.CustomerSuccess: user whose access is limited because they’re an org's customer and access the application through a Customer Portal. Label is Customer Portal User.PowerCustomerSuccess: user whose access is limited because they’re an org's customer and access the application through a Customer Portal. Label is Customer Portal Manager.Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the Customer Portal role hierarchy.CsnOnly: user whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users. Label is Chatter Free.Guest: user whose access is limited because they’re an unauthenticated user without login credentials. Label is Guest.UserType replaces LicenseType, which is unavailable as of API version 10.0. In API versions 8.0 and 9.0 LicenseType is still available with the following valid values:AUL: Lightning Platform user license. Label is Apex Platform.AUL1: Lightning Platform user license with only one user. Label is Apex Platform One.Salesforce: Salesforce user license. Label is Salesforce.PackageManager: user who can create and work with managed packages for AppExchange. Label is Package Manager.PRM: user whose access is limited because they’re a partner and typically accesses the application through a partner portal. Label is Partner.CustomerUser: user whose access is limited because they’re an org's customer and accesses the application through a Customer Portal. Label is Customer Portal User.CustomerManager: user whose access is limited because they’re an org's customer and accesses the application through a Customer Portal. Label is Customer Portal Manager.Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the Customer Portal role hierarchy.In API version 53.0 and later, you can’t set the value of UserType using Apex. |

## Usage

Use the Profile object to create custom profiles that start without any permissions enabled except for required permissions for the profile’s user license. While you can use the Profile Metadata type to deploy profiles, we recommend that you use the Profile SOAP API object because it allows you to create empty profiles.

You can also query the set of currently configured user profiles in your org. Your client application can use Profile objects to obtain valid profile IDs for use when querying or modifying users through the API.

In the user interface, profiles can be used to assign user licenses from specific pools (Lightning Platform user license or Salesforce user license, for example). When users are reassigned to profiles with different license types, the number of available licenses in the old license type pool increases, one per user assignment updated. Also, the number of available licenses decreases by the same amount in the new license type pool.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
