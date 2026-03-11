---
title: "createUser(profileId, data, customUserDataMap, experienceId,
      password)"
domain: apex-reference
topic: createuserprofileid-data-customuserdatamap-experienceid-password
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.610Z
keywords: [createUser, profileId, data, customUserDataMap, experienceId, password, Returns, User, object, information, submitted, off-platform, app, Headless, Registration, API., new, user, hasn’t, inserted]
---

# createUser(profileId, data, customUserDataMap, experienceId,
      password)

> Returns a User object using information submitted by your off-platform app to Headless
    Registration API. The User object can be a new user that hasn’t been inserted in your org’s
    database, or it can represent an existing user record. If it’s a new User object, Salesforce
    inserts the user record for you.

### createUser(profileId, data, customUserDataMap, experienceId, password)

Returns a User object using information submitted by your off-platform app to Headless Registration API. The User object can be a new user that hasn’t been inserted in your org’s database, or it can represent an existing user record. If it’s a new User object, Salesforce inserts the user record for you.

#### Signature

public User createUser(Id profileId, Auth.UserData data, String customUserDataMap, String experienceId, String password)

#### Parameters

profileId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the profile that is assigned to new users.

data

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm "HTML (New Window)")

A class that stores information about the user, such as their name and locale.

customUserDataMap

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A string representation of a JSON object containing custom user information passed in during registration. We recommend that you deserialize this string into the equivalent Apex class structure. Determine what custom information to collect when you build your app’s registration experience.

experienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A custom value that determines what the end user experiences.

password

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user password.

#### Return Value

Type: User