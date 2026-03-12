---
title: "Create a Scratch Org User"
domain: sfdx-dev
topic: create-a-scratch-org-user
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.377Z
estimatedTokens: 321
keywords: [Scratch, Org, User, Although, orgs, were, designed, developer, sometimes, users, test, different, profiles, permission]
---

# Create a Scratch Org User

> Although scratch orgs were designed to be used by one developer, sometimes you need
    other users to test with different profiles and permission sets.

# Create a Scratch Org User

Although scratch orgs were designed to be used by one developer, sometimes you need other users to test with different profiles and permission sets.

Use the org create user command to create a user. Specify the \--set-alias flag to assign a simple name to the user that you can reference in later CLI commands. When the command completes, it outputs the new username and user ID.

```

```

Users are associated with a specific scratch org. Specify the scratch org username or alias at the command line with the \--target-org flag if it isn’t already set as the default. If you try to create a user for a non-scratch org, the org create user command fails.

You can customize the new user by creating a [definition file](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm "To customize a new scratch org user, rather than use the default and generated values, create a definition file.") and specifying it with the \--definition-file flag.

```

```

View the list of users associated with a scratch org with the org list users command. The (A) on the left identifies the administrator user that was created when the scratch org was created.

```

```

Display details about a user with the org display user command.

```

```

## Code Examples

```
sf org create user --set-alias qa-user --target-org my-scratch
Successfully created user "1690397809_test-st9thgoyyyq3@example.com" with ID 0058I002inzvQAA for org 00D80000PhAkUAK.

See more details about this user by running "sf org user display -o 1690397809774_test-st9thgoyyyq3@example.com".
```

```
sf org create user --set-alias qa-user --definition-file config/user-def.json
```

```
sf org list users --target-org my-scratch
=== Users in org 00D80000PhAkUAK

 Default Alias      Username                                    Profile Name         User Id            
 ─────── ────────── ─────────────────────────────────────────── ──────────────────── ─────────────── 
 (A)     my-scratch test-st9thgoyyyq3@example.com               System Administrator 0058I002inzvQAA 
         qa-user    1690397809_test-st9thgoyyyq3@example.com    Standard User        0058I002inzvQAA
```

```
sf org display user --target-org qa-user
Warning: This command exposes sensitive information <truncated for readability>

=== User Description

 key          label                                                                                                            
 ──────────── ──────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
 Username     1690397809_test-st9thgoyyyq3@example.com                                                                         
 Profile Name Standard User                                                                                                    
 Id           0058I002inzvQAA                                                                                                  
 Org Id       00D80000PhAkUAK                                                                                                  
 Access Token 00D8I<truncated> 
 Instance Url https://connect-enterprise-1121-dev-ed.scratch.my.salesforce.com                                                 
 Login Url    https://connect-enterprise-1121-dev-ed.scratch.my.salesforce.com                                                 
 Alias        qa-user
```

## Related Topics

- definition
        file (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_file.htm)
