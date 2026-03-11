---
title: "template generate digital-experience site"
domain: cli-commands
topic: template-generate-digital-experience-site
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T10:26:31.426Z
keywords: [template, generate, digital-experience, site, Generate, Experience, Cloud, site., Developer, Preview, Note, Description, Examples, Flags]
---

# template generate digital-experience site

> Generate an Experience Cloud site.

## template generate digital-experience site (Developer Preview)

Generate an Experience Cloud site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This command is available as a developer preview. The command isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.

### Description for template generate digital-experience site

Creates the metadata of an Experience Cloud site with the specified template, name, and URL path prefix. The output includes all the necessary metadata files, including DigitalExperienceConfig, DigitalExperienceBundle, Network, and CustomSite.

Unlike \`sf community create\`, which builds the site directly in the org, this command generates only the local metadata.

### Examples for template generate digital-experience site

Generate an Experience Cloud site using the Build Your Own (LWR) template. The site is called "mysite" and has the URL path prefix "mysite":

```

```

Generate an Experience Cloud site like the last example, but generate the files into the specified output directory:

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

Optional

Username or alias of the target org.

Type: option

\-n | \--name NAME

Required

Name of the Experience Cloud site to generate.

Type: option

\-t | \--template-name TEMPLATE-NAME

Required

Template to use when generating the site.

Type: option

Permissible values are: Build Your Own (LWR)

\-p | \--url-path-prefix URL-PATH-PREFIX

Optional

URL path prefix for the site; must contain only alphanumeric characters.

Type: option

\-e | \--admin-email ADMIN-EMAIL

Optional

Email address for the site administrator. Defaults to the username of the currently authenticated user.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to generate the site files in.

The location can be an absolute path or relative to the current working directory. If not specified, the command reads your sfdx-project.json file and uses the default package directory. When running outside a Salesforce DX project, defaults to the current directory.

Type: option