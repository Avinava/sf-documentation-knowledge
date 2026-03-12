---
title: "ProfileSessionSetting"
domain: metadata-api
topic: profilesessionsetting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.962Z
estimatedTokens: 776
keywords: [ProfileSessionSetting, Represents, profile’s, session, settings., retrieve, settings, given, profile., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# ProfileSessionSetting

> Represents a profile’s session settings. Use
    ProfileSessionSetting to retrieve the session settings for a given profile. This type extends the 
    Metadata metadata type and inherits its fullName field.

# ProfileSessionSetting

Represents a profile’s session settings. Use ProfileSessionSetting to retrieve the session settings for a given profile. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ProfileSessionSetting components have the suffix .profileSessionSetting and are stored in the profileSessionSettings folder.

## Version

ProfileSessionSetting components are available in API version 40.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| profile | string | Required. Name of the user profile. |
| requiredSessionLevel | SessionSecurityLevel | Session security level. |
| sessionPersistence | boolean | Beta. If true, keep users logged in to their Experience Cloud site until the session times out—even if they close their browser. Use sessionPersistence to reduce how often users must log in to their site. Applies only to the External Identity profile. |
| sessionTimeout | int | Required. Specifies how many minutes of inactivity elapse before a user’s authenticated session times out. At the end of the session, the user must log in again. This session timeout value applies to users of the profile and overrides the org-wide timeout value. Changes to the org-wide timeout value don’t apply to users of this profile. Valid values:0—2 Hours15—15 Minutes30—30 Minutes60—1 Hour90—90 Minutes120—2 Hours240—4 Hours480—8 Hours720—12 Hours1440—24 Hours |

## SessionSecurityLevel

Session security levels control access to certain types of resources based on the type of authentication used for logging in to the current session. For example, username and password authentication requires the standard session security level. Multi-factor authentication (MFA) requires HIGH\_ASSURANCE.

| Field Name | Field Type | Description |
| --- | --- | --- |
| SessionSecurityLevel | (enumeration of type string) | User’s security level for the current session.The HIGH_ASSURANCE security level for this session meets the High Assurance requirements set in the org’s session settings under Session Security Levels.The STANDARD security level for this session meets the Standard requirements set in the org’s session settings under Session Security Levels.The LOW level isn’t available or used in the Salesforce UI. It’s used at the API level, but users assigned to this level experience unpredictable and reduced functionality. |

## Declarative Metadata Sample Definition

The following is an example of a ProfileSessionSetting component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileSessionSetting xmlns="http://soap.sforce.com/2006/04/metadata">
    <profile>platformportal</profile>
    <requiredSessionLevel>HIGH_ASSURANCE</requiredSessionLevel>
    <sessionTimeout>1440</sessionTimeout>
</ProfileSessionSetting>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
