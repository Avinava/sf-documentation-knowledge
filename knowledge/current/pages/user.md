---
title: "$User"
domain: pages
topic: user
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.446Z
estimatedTokens: 168
keywords: [$User, merge, referencing, current, user, alias, title, Usage]
---

# $User

> A global merge field type to use when referencing information about the current user.
  User merge fields can reference information about the user such as alias, title, and ID.

# $User

A global merge field type to use when referencing information about the current user. User merge fields can reference information about the user such as alias, title, and ID.

Most of the fields available on the [User standard object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") are also available on $User.

## Usage

Use dot notation to access the current user’s information. For example:

```

```

## Example

The following example displays the current user’s company name, as well as the status of the current user (which returns a Boolean value).

```

```

## Code Examples

```
{!IF (CONTAINS($User.Alias, Smith) True, False)}
```

```
<apex:page>
  <h1>Congratulations</h1>
   This is your new Apex Page
   <p>The current company name for this 
      user is: {!$User.CompanyName}</p>
   <p>Is the user active?  
      {!$User.isActive}</p>
</apex:page>
```
