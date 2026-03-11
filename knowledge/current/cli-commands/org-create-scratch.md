---
title: "org create scratch"
domain: cli-commands
topic: org-create-scratch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, create, scratch, Create, org., Description, Examples, Flags, Aliases]
---

# org create scratch

> Create a scratch org.

## org create scratch

Create a scratch org.

### Description for org create scratch

There are four ways to create a scratch org:

\* Specify a definition file that contains the scratch org options.

\* Use the --edition flag to specify the one required option; this method doesn't require a defintion file.

\* Use the --snapshot flag to create a scratch org from a snapshot. Snapshots are a point-in-time copy of a scratch org; you create a snapshot with the "sf org create snapshot" command.

\* Use the --source-org flag to create a scratch org from an org shape. Org shapes mimic the baseline setup of a source org without the extraneous data and metadata; you create an org shape with the "sf org create shape" command.

The --edition, --snapshot, and --source-org flags are mutually exclusive, which means if you specify one, you can't also specify the others.

For any of the methods, you can also use these flags; if you use them with --definition-file, they override their equivalent option in the scratch org definition file:

\* --description

\* --name (equivalent to the "orgName" option)

\* --username

\* --release

\* --admin-email (equivalent to the "adminEmail" option)

If you want to set options such as org features or settings, you must use a definition file.

You must specify a Dev Hub to create a scratch org, either with the --target-dev-hub flag or by setting your default Dev Hub with the target-dev-hub configuration variable.

### Examples for org create scratch

Create a Developer edition scratch org using your default Dev Hub and give the scratch org an alias:

```

```

Create a scratch org with a definition file. Specify the Dev Hub using its alias, set the scratch org as your default, and specify that it expires in 3 days:

```

```

Create a preview Enterprise edition scratch org; for use only during Salesforce release transition periods:

```

```

Create a scratch org from a snapshot called "NightlyBranch"; be sure you specify the same Dev Hub org associated with the snapshot. We recommend you increase the --wait time because creating a scratch org from a snapshot can take a while:

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

\-a | \--alias ALIAS

Optional

Alias for the scratch org.

New scratch orgs include one administrator by default. The admin user's username is auto-generated and looks something like test-wvkpnfm5z113@example.com. When you set an alias for a new scratch org, it's assigned this username.

Type: option

\--async

Optional

Request the org, but don't wait for it to complete.

The command immediately displays the job ID and returns control of the terminal to you. This way, you can continue to use the CLI. To resume the scratch org creation, run "sf org resume scratch".

Type: boolean

\-d | \--set-default

Optional

Set the scratch org as your default org

Type: boolean

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a scratch org definition file.

The scratch org definition file is a blueprint for the scratch org. It mimics the shape of an org that you use in the development life cycle, such as acceptance testing, packaging, or production. See <https://developer.salesforce.com/docs/atlas.en-us.sfdx\_dev.meta/sfdx\_dev/sfdx\_dev\_scratch\_orgs\_def\_file.htm> for all the option you can specify in the definition file.

Type: option

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org.

Overrides the value of the target-dev-hub configuration variable, if set.

Type: option

\-c | \--no-ancestors

Optional

Don't include second-generation managed package (2GP) ancestors in the scratch org.

Type: boolean

\-e | \--edition EDITION

Optional

Salesforce edition of the scratch org. Overrides the value of the "edition" option in the definition file, if set.

The editions that begin with "partner-" are available only if the Dev Hub org is a Partner Business Org.

Type: option

Permissible values are: developer, enterprise, group, professional, partner-developer, partner-enterprise, partner-group, partner-professional

\-s | \--snapshot SNAPSHOT

Optional

Name of the snapshot to use when creating this scratch org. Overrides the value of the "snapshot" option in the defintion file, if set.

To view the names of the available snapshots for a given Dev Hub org, run the "sf org list snapshot" command.

Type: option

\-m | \--no-namespace

Optional

Create the scratch org with no namespace, even if the Dev Hub has a namespace.

Type: boolean

\-y | \--duration-days DURATION-DAYS

Optional

Number of days before the org expires.

Type: option

Default value: 7 days

\-w | \--wait WAIT

Optional

Number of minutes to wait for the scratch org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal to you and displays the job ID. To resume the scratch org creation, run the org resume scratch command and pass it the job ID.

Type: option

Default value: 5 minutes

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--client-id CLIENT-ID

Optional

Consumer key of the Dev Hub connected app.

Type: option

\-t | \--track-source

Optional

Use source tracking for this scratch org. Set --no-track-source to disable source tracking.

We recommend you enable source tracking in scratch orgs, which is why it's the default behavior. Source tracking allows you to track the changes you make to your metadata, both in your local project and in the scratch org, and to detect any conflicts between the two.

To disable source tracking in the new scratch org, specify the --no-track-source flag. The main reason to disable source tracking is for performance. For example, while you probably want to deploy metadata and run Apex tests in your CI/CD jobs, you probably don't want to incur the costs of source tracking (checking for conflicts, polling the SourceMember object, various file system operations.) This is a good use case for disabling source tracking in the scratch org.

Type: boolean

Default value: true

\--username USERNAME

Optional

Username of the scratch org admin user. Overrides the value of the "username" option in the definition file, if set.

The username must be unique within the entire scratch org and sandbox universe. You must add your own logic to ensure uniqueness.

Omit this flag to have Salesforce generate a unique username for your org.

Type: option

\--description DESCRIPTION

Optional

Description of the scratch org in the Dev Hub. Overrides the value of the "description" option in the definition file, if set.

Type: option

\--name NAME

Optional

Name of the org, such as "Acme Company". Overrides the value of the "orgName" option in the definition file, if set.

Type: option

\--release RELEASE

Optional

Release of the scratch org as compared to the Dev Hub release.

By default, scratch orgs are on the same release as the Dev Hub. During Salesforce release transition periods, you can override this default behavior and opt in or out of the new release.

Type: option

Permissible values are: preview, previous

\--admin-email ADMIN-EMAIL

Optional

Email address that will be applied to the org's admin user. Overrides the value of the "adminEmail" option in the definition file, if set.

Type: option

\--source-org SOURCE-ORG

Optional

15-character ID of the org shape that the new scratch org is based on. Overrides the value of the "sourceOrg" option in the definition file, if set.

To view the names of the available org shapes for a given Dev Hub org, run the "sf org list shape" command.

Type: option

### Aliases for org create scratch

```

```