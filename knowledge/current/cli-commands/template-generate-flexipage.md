---
title: "template generate flexipage"
domain: cli-commands
topic: template-generate-flexipage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, flexipage, Generate, FlexiPage, known, Lightning, page., Beta, Note, Description, Examples, Flags]
---

# template generate flexipage

> Generate a FlexiPage, also known as a Lightning page.

## template generate flexipage (Beta)

Generate a FlexiPage, also known as a Lightning page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for template generate flexipage

FlexiPages are the metadata types associated with a Lightning page. A Lightning page represents a customizable screen made up of regions containing Lightning components.

You can use this command to generate these types of FlexiPages; specify the type with the --template flag:

\- AppPage: A Lightning page used as the home page for a custom app or a standalone application page.

\- HomePage: A Lightning page used to override the Home page in Lightning Experience.

\- RecordPage: A Lightning page used to override an object record page in Lightning Experience. Requires that you specify the object name with the --sobject flag.

### Examples for template generate flexipage

Generate a RecordPage FlexiPage for the Account object in the current directory:

```

```

Generate an AppPage FlexiPage in the "force-app/main/default/flexipages" directory:

```

```

Generate a HomePage FlexiPage with a custom label:

```

```

Generate a RecordPage with dynamic highlights and detail fields:

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

Name of the FlexiPage.

The name can contain only alphanumeric characters, must start with a letter, and can't end with an underscore or contain two consecutive underscores.

Type: option

\-t | \--template TEMPLATE

Required

Template type for the FlexiPage.

Type: option

Permissible values are: RecordPage, AppPage, HomePage

\-d | \--output-dir OUTPUT-DIR

Optional

Directory for saving the created files.

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

Default value: .

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\--label LABEL

Optional

Label of this FlexiPage; if not specified, uses the FlexiPage name as the label.

Type: option

\--description DESCRIPTION

Optional

Description for the FlexiPage, which provides context about its purpose.

Type: option

\-s | \--sobject SOBJECT

Optional

API name of the Salesforce object; required when creating a RecordPage.

For RecordPage FlexiPages, you must specify the associated object API name, such as 'Account', 'Opportunity', or 'Custom\_Object\_\_c'. This sets the \`sobjectType\` field in the FlexiPage metadata.

Type: option

\--primary-field PRIMARY-FIELD

Optional

Primary field for the dynamic highlights header; typically 'Name'. Used only with RecordPage.

Type: option

\--secondary-fields SECONDARY-FIELDS

Optional

Secondary fields shown in the dynamic highlights header. Specify multiple fields separated by commas. Maximum of 11 fields. Used only with RecordPage.

Type: option

\--detail-fields DETAIL-FIELDS

Optional

Fields to display in the Details tab. Specify multiple fields separated by commas. Fields are split into two columns. Used only with RecordPage.

Type: option