---
title: "User Definition File for Customizing a Scratch Org User"
domain: sfdx-dev
topic: user-definition-file-for-customizing-a-scratch-org-user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.572Z
estimatedTokens: 743
keywords: [User, Definition, File, Customizing, Scratch, Org, customize, new, rather, generated]
---

# User Definition File for Customizing a Scratch Org User

> To customize a new scratch org user, rather than use the default and generated values,
  create a definition file.

# User Definition File for Customizing a Scratch Org User

To customize a new scratch org user, rather than use the default and generated values, create a definition file.

The user definition file uses JSON format and can include any Salesforce User sObject field and these Salesforce DX-specific options.

| Salesforce DX Option | Description | Default If Not Specified |
| --- | --- | --- |
| permsets | An array of permission sets assigned to the user. Separate multiple values with commas, and enclose in square brackets.You must have previously deployed the permission sets to the scratch org with project deploy start. | None |
| generatePassword | Boolean. Specifies whether to generate a random password for the user.If set to true, org create user displays the generated password after it completes. You can also view the password using org display user. | False |
| profileName | Name of a profile to associate with the user. Similar to the ProfileId field of the User sObject except that you specify the name of the profile and not its ID. Convenient when you know only the name of the profile. | Standard User |

The user definition file options are case-insensitive. However, we recommend that you use lower camel case for the Salesforce DX-specific options and upper camel case for the User sObject fields. This format is consistent with other Salesforce DX definition files.

This user definition file includes some User sObject fields and three Salesforce DX options (profileName, permsets, and generatePassword).

```

```

In the example, the username tester1@sfdx.org must be unique across the entire Salesforce ecosystem; otherwise, the org create user command fails. We recommend that you use the \--set-unique-username flag, which overrides the value in the configuration file and ensures a unique username. The alias in the Alias option is different from the alias you specify with the \--set-alias flag of org create user. Use the Alias option only with the Salesforce UI. The \--set-alias flag is local to the computer from which you run the CLI, and you can use it with other CLI commands.

Indicate the path to the user definition file with the \--definition-file flag. You can name this file whatever you like and store it anywhere the CLI can access.

```

```

You can override an option in the user definition file by specifying it as a name-value pair at the command line. This technique allows multiple users or continuous integration jobs to share a base definition file and then customize options when they run the command. This example overrides the username, list of permission sets, and whether to generate a password.

```

```

You can also add options at the command line that aren’t in the user definition file. This example adds the City option.

```

```

#### See Also

-   [User sObject API Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm)

## Code Examples

```
{
    "Username": "tester1@sfdx.org",
    "LastName": "Hobbs",
    "Email": "tester1@sfdx.org",
    "Alias": "tester1",
    "TimeZoneSidKey": "America/Denver",
    "LocaleSidKey": "en_US",
    "EmailEncodingKey": "UTF-8",
    "LanguageLocaleKey": "en_US",
    "profileName": "Standard Platform User",
    "permsets": ["Dreamhouse", "Cloudhouse"],
    "generatePassword": true
}
```

```
sf org create user --set-alias qa-user --definition-file config/user-def.json --target-org my-scratch
```

```
sf org create user --set-alias qa-user --definition-file config/user-def.json permsets="Dreamy,Cloudy" Username=tester345@sfdx.org generatePassword=false --target-org my-scratch
```

```
sf org create user --set-alias qa-user --definition-file config/user-def.json City=Oakland --target-org my-scratch
```
