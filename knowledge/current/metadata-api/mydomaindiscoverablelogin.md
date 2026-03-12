---
title: "MyDomainDiscoverableLogin"
domain: metadata-api
topic: mydomaindiscoverablelogin
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.761Z
estimatedTokens: 612
keywords: [MyDomainDiscoverableLogin, configuration, settings, Domain, login, Discovery, identity-first, experience, identifier, entered, handler, determines, how, authenticate, user]
---

# MyDomainDiscoverableLogin

> Represents the configuration settings when the My Domain
      login page type is Discovery. Login Discovery provides an identity-first login experience,
      where the login page contains the identifier field only. Based on the identifier entered, a
      handler determines how to authenticate the user.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# MyDomainDiscoverableLogin

Represents the configuration settings when the My Domain login page type is Discovery. Login Discovery provides an identity-first login experience, where the login page contains the identifier field only. Based on the identifier entered, a handler determines how to authenticate the user. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MyDomainDiscoverableLogin components have the suffix .myDomainDiscoverableLogin in the myDomainDiscoverableLogins folder.

## Version

MyDomainDiscoverableLogin components are available in API version 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| apexHandler | string | Required. The Apex handler class that contains the Discovery authentication logic. |
| executeApexHandlerAs | string | The user who is executing the handler. Requires the Manage User permission. |
| usernameLabel | string | The login prompt when the My Domain login page type is Discovery. This label supports localization with custom labels. |

## Declarative Metadata Sample Definition

The following is an example of a MyDomainDiscoverableLogin component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

Use this type to access the My Domain Login Discovery Page. This type of login page prompts users to identity themselves with an email address, phone number, or custom identifier. My Domain Login Discovery performs an interview-based login process, where users are prompted to provide identity for authentication. For example, users receive a verification code that they enter to complete the login process.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MyDomainDiscoverableLogin xmlns="http://soap.sforce.com/2006/04/metadata">
    <apexHandler>MyDomainDiscLoginHandler</apexHandler>
    <executeApexHandlerAs>executeUser@example.com</executeApexHandlerAs>
    <usernameLabel>Enter your email</usernameLabel>
</MyDomainDiscoverableLogin>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>MyDomainDiscoverableLogin</name>
    </types>
    <version>48.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
