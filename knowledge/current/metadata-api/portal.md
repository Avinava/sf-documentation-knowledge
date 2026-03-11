---
title: "Portal"
domain: metadata-api
topic: portal
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.000Z
keywords: [Portal, Declarative, Metadata, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Sample, Definition, Wildcard, Support, Manifest, See]
---

# Portal

# Portal

The Portal metadata type represents a partner portal.

It extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") and inherits its fullName field. To use this metadata type, you must have a partner portal or Customer Portal enabled for your organization. For more information, see Partner Portal Overview in Salesforce Help.

## Declarative Metadata File Suffix and Directory Location

Lightning Platform Portal components are stored in the portals directory of the corresponding package directory. The file name matches the portal name, and the extension is .portal.

## Version

Lightning Platform Portal components are available in API version 15.0 and later.

## Special Access Rules

All users, including unauthenticated guest users, can view portals via the API.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Denotes whether this portal is active. |
| admin | string | The full name of the user designated to administer the portal. |
| defaultLanguage | string | The default language for HTML messages for the portal. Use the abbreviation for the language, for example, en_US for United States English. |
| description | string | The portal description. |
| emailSenderAddress | string | Required. The email address used when sending emails using templates configured from the portal (for example, for resetting the password). |
| emailSenderName | string | Required. The name to display when sending emails using templates configured from the portal (for example, for resetting the password). |
| enableSelfCloseCase | boolean | For the Customer Portal, allows portal users to close their own cases. |
| footerDocument | string | The file to be used as the footer for this portal. |
| forgotPassTemplate | string | The email template to use when a user clicks the Forgot Password link.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| fullName | string | Required. The name of the portal.Inherited from Metadata , this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| headerDocument | string | The file to be used as the header for this portal. |
| isSelfRegistrationActivated | boolean | Determines whether self-registration is active or not for this portal. |
| loginHeaderDocument | string | The file to be used as the header for this portal's login page. |
| logoDocument | string | The file to be used as the logo for this portal. |
| logoutUrl | string | The URL that the user is redirected to on logout. |
| newCommentTemplate | string | The email template to be used for auto-notifications on new case comments. |
| newPassTemplate | string | The email template to be used for auto-notifications on password reset.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| newUserTemplate | string | The email template to be used for auto-notifications on new user creation.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| ownerNotifyTemplate | string | The email template to be used for auto-notifications on owner change.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| selfRegNewUserUrl | string | The URL of the self-registration page. |
| selfRegUserDefaultProfile | string | The default profile for self-registered users. |
| selfRegUserDefaultRole | PortalRoles (enumeration of type string) | The default role for self-registered users. The valid values are:ExecutiveManagerUserPersonAccount |
| selfRegUserTemplate | string | The email template to be used for auto-notifications on self-registration.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| showActionConfirmation | boolean | Determines whether confirmation messages are displayed for actions in the portal. |
| stylesheetDocument | string | The Document object to be used as the CSS style sheet for this portal. |
| type | PortalType (enumeration of type string) | Required. The type for this portal. The valid values are:CustomerSuccessPartner |

## Declarative Metadata Sample Definition

Here’s a sample XML definition of a portal.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [CustomSite](atlas.en-us.api_meta.meta/api_meta/meta_sites.htm "Represents a Salesforce site. Create public websites and applications that are directly integrated with your Salesforce organization, but don't require users to log in with a username and password.")