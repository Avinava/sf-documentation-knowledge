---
title: "community Commands"
domain: cli-commands
topic: community-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:05.296Z
estimatedTokens: 1950
keywords: [community, Commands, Experience, Cloud, site, template, Examples, Flags, Aliases, publish]
---

# community Commands

> Create an Experience Cloud site using a template.

# community Commands

Create and publish an Experience Cloud site.

-   **[community create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm#cli_reference_community_create_unified)**
    Create an Experience Cloud site using a template.
-   **[community list template](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm#cli_reference_community_list_template_unified)**
    Retrieve the list of templates available in your org.
-   **[community publish](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm#cli_reference_community_publish_unified)**
    Publish an Experience Builder site to make it live.

## community create

Create an Experience Cloud site using a template.

### Description for community create

Run the "community list template" command to see the templates available in your org. See 'Which Experience Cloud Template Should I Use?' in Salesforce Help for more information about the different template types available. (https://help.salesforce.com/s/articleView?id=sf.siteforce\_commtemp\_intro.htm&type=5)

When you create a site with the Build Your Own (LWR) template, you must also specify the AuthenticationType value using the format templateParams.AuthenticationType=value, where value is AUTHENTICATED or AUTHENTICATED\_WITH\_PUBLIC\_ACCESS\_ENABLED. Name and values are case-sensitive. See 'DigitalExperienceBundle' in the Metadata API Developer Guide for more information. (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_digitalexperiencebundle.htm)

The site creation process is an async job that generates a jobId. To check the site creation status, query the BackgroundOperation object and enter the jobId as the Id. See ‘BackgroundOperation’ in the Object Reference for the Salesforce Platform for more information. (https://developer.salesforce.com/docs/atlas.en-us.object\_reference.meta/object\_reference/sforce\_api\_objects\_backgroundoperation.htm)

If the job doesn’t complete within 10 minutes, it times out. You receive an error message and must restart the site creation process. Completed jobs expire after 24 hours and are removed from the database.

When you run this command, it creates the site in preview status, which means that the site isn't yet live. After you finish building your site, you can make it live.

If you have an Experience Builder site, publish the site using the "community publish" command to make it live.

If you have a Salesforce Tabs + Visualforce site, to activate the site and make it live, update the status field of the Network type in Metadata API. (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_network.htm) Alternatively, in Experience Workspaces, go to Administration | Settings, and click Activate.

For Experience Builder sites, activating the site sends a welcome email to site members.

### Examples for community create

Create an Experience Cloud site using template 'Customer Service' and URL path prefix 'customers':

```

```

Create a site using 'Partner Central' template:

```

```

Create a site using the 'Build Your Own (LWR)' template with authentication type of UNAUTHENTICATED:

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

\-n | \--name NAME

Required

Name of the site to create.

Type: option

\-t | \--template-name TEMPLATE-NAME

Required

Template to use to create a site.

An example of a template is Customer Service. Run the "community template list" command to see which templates are available in your org.

Type: option

\-p | \--url-path-prefix URL-PATH-PREFIX

Optional

URL to append to the domain created when Digital Experiences was enabled for this org.

For example, if your domain name is https://MyDomainName.my.site.com and you create a customer site, enter 'customers' to create the unique URL https://MyDomainName.my.site.com/customers.

Type: option

\-d | \--description DESCRIPTION

Optional

Description of the site.

The description displays in Digital Experiences - All Sites in Setup and helps with site identification.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for community create

```

```

## community list template

Retrieve the list of templates available in your org.

### Description for community list template

See 'Which Experience Cloud Template Should I Use?' (https://help.salesforce.com/s/articleView?id=sf.siteforce\_commtemp\_intro.htm&type=5) in Salesforce Help for more information about the different template types available for Experience Cloud.

### Examples for community list template

Retrieve the template list from an org with alias my-scratch-org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for community list template

```

```

## community publish

Publish an Experience Builder site to make it live.

### Description for community publish

Each time you publish a site, you update the live site with the most recent updates. When you publish an Experience Builder site for the first time, you make the site's URL live and enable login access for site members.

In addition to publishing, you must activate a site to send a welcome email to all site members. Activation is also required to set up SEO for Experience Builder sites. To activate a site, update the status field of the Network type in Metadata API. (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_network.htm) Alternatively, in Experience Workspaces, go to Administration | Settings, and click Activate.

An email notification informs you when your changes are live on the published site. The site publish process is an async job that generates a jobId. To check the site publish status manually, query the BackgroundOperation object and enter the jobId as the Id. See ‘BackgroundOperation’ in the Object Reference for the Salesforce Platform for more information. (https://developer.salesforce.com/docs/atlas.en-us.object\_reference.meta/object\_reference/sforce\_api\_objects\_backgroundoperation.htm)

If the job doesn’t complete within 15 minutes, it times out. You receive an error message and must restart the site publish process. Completed jobs expire after 24 hours and are removed from the database.

### Examples for community publish

Publish the Experience Builder site with name "My Customer Site':

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

\-n | \--name NAME

Required

Name of the Experience Builder site to publish.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for community publish

```

```

## Code Examples

```
sf community create --name 'My Customer Site' --template-name 'Customer Service' --url-path-prefix customers --description 'My customer site'
```

```
sf community create --name partnercentral --template-name 'Partner Central' --url-path-prefix partners
```

```
sf community create --name lwrsite --template-name 'Build Your Own (LWR)' --url-path-prefix lwrsite templateParams.AuthenticationType=UNAUTHENTICATED
```

```
force:community:create
```

```
sf community list template --target-org my-scratch-org
```

## Related Topics

- community create (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm)
- community list template (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm)
- community publish (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm)
