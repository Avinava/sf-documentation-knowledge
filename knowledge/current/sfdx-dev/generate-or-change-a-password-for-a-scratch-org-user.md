---
title: "Generate or Change a Password for a Scratch Org User"
domain: sfdx-dev
topic: generate-or-change-a-password-for-a-scratch-org-user
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.560Z
estimatedTokens: 668
keywords: [Generate, Change, Password, Scratch, Org, User, new, orgs, contain, administrator, CLI, command, admin, it's, can’t]
---

# Generate or Change a Password for a Scratch Org User

> By default, new scratch orgs contain one administrator user with no password. Use the
      org generate password CLI command to generate or change a
    password for this admin user. After it's set, you can’t unset a password, you can only change
    it.

# Generate or Change a Password for a Scratch Org User

By default, new scratch orgs contain one administrator user with no password. Use the org generate password CLI command to generate or change a password for this admin user. After it's set, you can’t unset a password, you can only change it.

You can also use the \--on-behalf-of flag to generate a password for a scratch org user that you've created locally with the org create user command. You can’t use the org generate password command for users that you created in the scratch org with Setup.

1.  Generate a password for a scratch org user with this command:

    ```

    ```

    You can run this command for scratch org users only. The command outputs the generated password.

    The target org must be the username or alias for the scratch org admin user. Use the \--on-behalf-of flag to assign passwords to multiple users at once, including admin users, or to users who don’t have permissions to do it themselves. Specify multiple locally created users by specifying multiple \--on-behalf-of flags. For example, let’s say the my-scratch alias corresponds to the scratch org’s admin user, and you want to generate a password for users with aliases ci-user and qa-user:

    ```

    ```

    By default, the command generates a password that's 13 characters in length; the possible characters include all lower and upper case letters, numbers, and symbols. To change the password strength, use the \--length and \--complexity flags. The \--complexity flag is a number from 0 through 5; the higher the value, the more possible characters are used, which strengthens the password. The default value is 5. See the command-line help for a description of each value. This example shows how to generate a password that's 20 characters long:

    ```

    ```

2.  View the generated password and other user details:

    ```

    ```

3.  Log in to the scratch org with the new password:
    1.  From the org display user output, copy the value of the Instance URL and paste it into your browser. In our example, the instance URL is https://connect-enterprise-1121-dev-ed.scratch.my.salesforce.com.
    2.  If you’ve already opened the scratch org with the org open command, you’re automatically logged in again. To try out the new password, log out and enter the username and password listed in the output of the org display user command.
    3.  Click **Log In to Sandbox**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If you change a scratch org user’s password using the Salesforce UI, the new password doesn’t show up in the org display user output.

## Code Examples

```
sf org generate password --target-org <username-or-alias>
```

```
sf org generate password --target-org my-scratch --on-behalf-of ci-user --on-behalf-of qa-user
```

```
sf org generate password --target-org my-scratch --length 20
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
 Password     ogihymg%lXa
```
