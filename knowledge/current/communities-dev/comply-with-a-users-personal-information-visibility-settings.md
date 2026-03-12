---
title: "Comply with a User’s Personal Information Visibility Settings"
domain: communities-dev
topic: comply-with-a-users-personal-information-visibility-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.378Z
estimatedTokens: 308
keywords: [Comply, User’s, Personal, Visibility, Settings, Orgs, portals, sites, provide, specific, hide, personally, identifiable, contact, users]
---

# Comply with a User’s Personal Information Visibility Settings

> Orgs with portals and sites provide specific settings to hide a user’s personally
        identifiable and contact information from other users. These settings aren’t enforced in
        Apex, even with Apex security features such as the WITH
            USER_MODE clause or the stripInaccessible method. To hide specific fields from a guest or external
        authenticated users, follow the sample code outlined below.

# Comply with a User’s Personal Information Visibility Settings

Orgs with portals and sites provide specific settings to hide a user’s personally identifiable and contact information from other users. These settings aren’t enforced in Apex, even with Apex security features such as the WITH USER\_MODE clause or the stripInaccessible method. To hide specific fields from a guest or external authenticated users, follow the sample code outlined below.

**To hide a user’s personal information in the User object:**

```

```

To comply with a user’s contact information visibility settings within a community or portal, we check the preferences associated with specific fields and show or hide the data accordingly. **For a user’s contact visibility settings within an Experience Cloud site:**

```

```

#### See Also

-   [*Salesforce Help*: Manage Personal User Information Visibility for External Users](https://help.salesforce.com/s/articleView?id=platform.users_manage_personal_info_visibility.htm&type=5&language=en_US)

-   [*Salesforce Help*: Share Personal Contact Information Within Experience Cloud Sites](https://help.salesforce.com/s/articleView?id=platform.networks_contact_info_visibility.htm&type=5&language=en_US)

## Code Examples

```apex
public User[] fetchUserDetail(Set userIds) { 
    // Query all the fields of user which we are expected in user record to show that on UI or to 
    // perform some business logic. 
    User[] userRecords = [SELECT id, username, communitynickname, firstname, lastname, title 
    FROM User WHERE id IN :userIds]; 
 
    for (User userRecord : userRecords) { 
        // User is not fetching his own record and is not standard user. 
        if(userRecord.id != UserInfo.getUserId() && !Auth.CommunitiesUtil.isInternalUser()) { 
            // clear-out all PII fields form user record which we have queried above. 
            userRecord.username = ''; 
            userRecord.title = ''; 
        } 
    } 
    return userRecords;
}
```

```apex
public User[] fetchUserRecordRespectingFLVPreferences(Set<Id> userIds) {

    //Fetch users records along with fields specific user preferences.
    User[] userRecords = [SELECT email, UserPreferencesShowEmailToExternalUsers, UserPreferencesShowEmailToGuestUsers FROM User WHERE id IN :userIds];

    // If context user is internal user then return result without any restriction.
    if (Auth.CommunitiesUtil.isInternalUser()) {
        return userRecords;
    }

    // If user is guest user then return result as per the user's UserPreference for the fields related to the Guest user visibility.
    if (Auth.CommunitiesUtil.isGuestUser()){
        return fetchUserRecordForGuestUser(userRecords);
    }

    // Return result as per the user's UserPreference for the fields related to the External user visibility 
    return fetchUserRecordForExternalUser(userRecords);

}

// Apply Field level visibilty logic by checking user's UserPreferences for the fields related to the External user visibility.
public User[] fetchUserRecordForExternalUser(User[] userRecords) {

    for(User userRecord : userRecords) {

        //Clear field of user record when context user fetching other user's record and Field Level Visibility for that field is set to Restricted.
        if(userRecord.id != UserInfo.getUserId() && !userRecord.UserPreferencesShowEmailToExternalUsers)
        {
            userRecord.email = '';
        }

    }   

    return userRecords;         
}

// Apply Field level visibilty logic by checking user's UserPreferences for the fields related to the Guest user visibility.
public User[] fetchUserRecordForGuestUser(User[] userRecords) {

    for(User userRecord : userRecords) {

        //Clear field of user record when context user fetching other user's record and user preference for that field is NOT set to public.
        if(!userRecord.UserPreferencesShowEmailToGuestUsers)
        {
            userRecord.email = '';
        }

    }   

    return userRecords;       

}
```
