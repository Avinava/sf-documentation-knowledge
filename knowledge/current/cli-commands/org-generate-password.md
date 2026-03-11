---
title: "org generate password"
domain: cli-commands
topic: org-generate-password
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, generate, password, Generate, random, scratch, users., Description, Examples, Flags]
---

# org generate password

> Generate a random password for scratch org users.

## org generate password

Generate a random password for scratch org users.

### Description for org generate password

By default, new scratch orgs contain one admin user with no password. Use this command to generate or change a password for this admin user. After it's set, you can’t unset a password, you can only change it.

You can also use the --on-behalf-of flag to generate a password for a scratch org user that you've created locally with the "org create user" command. This command doesn't work for users you created in the scratch org using Setup.

To change the password strength, set the --complexity flag to a value between 0 and 5. Each value specifies the types of characters used in the generated password:

0 - lower case letters only

1 - lower case letters and numbers only

2 - lower case letters and symbols only

3 - lower and upper case letters and numbers only

4 - lower and upper case letters and symbols only

5 - lower and upper case letters and numbers and symbols only

To see a password that was previously generated, run "org display user".

### Examples for org generate password

Generate a password for the original admin user of your default scratch org:

```

```

Generate a password that contains 12 characters for the original admin user of the scratch org with alias "my-scratch":

```

```

Generate a password for your default scratch org admin user that uses lower and upper case letters and numbers only:

```

```

Generate a password for the specified users in the default scratch org; these users must have been created locally with the "org create user" command:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-b | \--on-behalf-of ON-BEHALF-OF

Optional

Comma-separated list of usernames or aliases to assign the password to; must have been created locally with the "org create user" command.

Type: option

\-l | \--length LENGTH

Optional

Number of characters in the generated password; valid values are between 8 and 100.

Type: option

Default value: 13

\-c | \--complexity COMPLEXITY

Optional

Level of password complexity or strength; the higher the value, the stronger the password.

Type: option

Default value: 5

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option