---
title: "ProfilePasswordPolicy"
domain: metadata-api
topic: profilepasswordpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.950Z
estimatedTokens: 949
keywords: [ProfilePasswordPolicy, Represents, profile’s, password, policies., Profile, policies, override, org-wide, users., retrieve, given, profile., extends, Metadata, metadata, inherits, its, fullName, field.]
---

# ProfilePasswordPolicy

> Represents a profile’s password policies. Profile
    password policies override org-wide password policies for that profile’s users. Use
    ProfilePasswordPolicy to retrieve password policies for a given profile.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# ProfilePasswordPolicy

Represents a profile’s password policies. Profile password policies override org-wide password policies for that profile’s users. Use ProfilePasswordPolicy to retrieve password policies for a given profile. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ProfilePasswordPolicy components have the suffix .profilePasswordPolicy and are stored in the profilePasswordPolicies folder.

## Version

ProfilePasswordPolicy components are available in API version 40.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| forgotPasswordRedirect | boolean | If true, reset password links in forgot password emails don’t immediately expire the first time they’re clicked. Instead, the links stay active until a user confirms the password reset request on an interstitial page. The default value is false.This field is available in API version 43.0 and later. |
| lockoutInterval | int | Required. The duration of the login lockout, in minutes. If users are locked out, they must wait until the lockout period expires. Valid values: 0, 15, 30, 60. |
| maxLoginAttempts | int | Required. The number of times a user can enter a wrong password before getting locked out. Valid values: 0, 3, 5, 10. |
| minimumPasswordLength | int | Required. Minimum number of characters required for a password. Valid values: 5–50. |
| minimumPasswordLifetime | boolean | If true, a user cannot change a password more than once in a 24-hour period. |
| obscure | boolean | If true, answers to security questions are hidden as the user types. |
| passwordComplexity | int | Required. Level of complexity required for the character types in a user’s password.If 0, the password can contain any type of character.If 1, the password must contain at least one alphabetic character and 1 number.If 2, the password must contain at least one alphabetic character, one number, and one of the following special characters: ! # $ % - _ = + < >.If 3, the password must contain at least one number, one uppercase letter, and one lowercase letter.If 4, the password must contain at least one number, one uppercase letter, one lowercase letter, and one of the following special characters: ! # $ % - _ = + < >. |
| passwordExpiration | int | Required. Number of days until user passwords expire and must be changed. Valid values:0—If set to 0, the password never expires.306090180365 |
| passwordHistory | int | Required. Number of previous passwords to save. Saving passwords is required to ensure that users reset their password to a new, unique password. This value must be set before a password reset succeeds. If 0, passwordExpiration must be set to 0. |
| passwordQuestion | int | Required. If set to 1, the answer to the password hint cannot contain the password itself. If 0, the answer has no restrictions. |
| profile | string | Required. Name of the user profile. |

## Declarative Metadata Sample Definition

The following is an example of a ProfilePasswordPolicy component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfilePasswordPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
    <forgotPasswordRedirect>true</forgotPasswordRedirect>    
    <lockoutInterval>30</lockoutInterval>
    <maxLoginAttempts>0</maxLoginAttempts>
    <minimumPasswordLength>7</minimumPasswordLength>
    <minimumPasswordLifetime>false</minimumPasswordLifetime>
    <obscure>false</obscure>
    <passwordComplexity>1</passwordComplexity>
    <passwordExpiration>0</passwordExpiration>
    <passwordHistory>0</passwordHistory>
    <passwordQuestion>1</passwordQuestion>
    <profile>platformportal</profile>
</ProfilePasswordPolicy>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
