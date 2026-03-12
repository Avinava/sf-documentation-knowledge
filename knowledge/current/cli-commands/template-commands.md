---
title: "template Commands"
domain: cli-commands
topic: template-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.618Z
estimatedTokens: 8000
keywords: [template, Commands, Generate, simple, Analytics, template., generate, analytics, Description, Examples, Flags, Aliases, apex, trigger, digital-experience, site, Developer, Preview, Note, flexipage]
---

# template Commands

> Generate a simple Analytics template.

# template Commands

Collection of Salesforce templates.

-   **[template generate analytics template](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_analytics_template_unified)**
    Generate a simple Analytics template.
-   **[template generate apex class](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_apex_class_unified)**
    Generate an Apex class.
-   **[template generate apex trigger](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_apex_trigger_unified)**
    Generate an Apex trigger.
-   **[template generate digital-experience site (Developer Preview)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_digital-experience_site_unified)**
    Generate an Experience Cloud site.
-   **[template generate flexipage (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_flexipage_unified)**
    Generate a FlexiPage, also known as a Lightning page.
-   **[template generate lightning app](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_lightning_app_unified)**
    Generate a Lightning App.
-   **[template generate lightning component](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_lightning_component_unified)**
    Generate a bundle for an Aura component or a Lightning web component.
-   **[template generate lightning event](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_lightning_event_unified)**
    Generate a Lightning Event.
-   **[template generate lightning interface](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_lightning_interface_unified)**
    Generate a Lightning Interface.
-   **[template generate lightning test](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_lightning_test_unified)**
    Generate a Lightning test.
-   **[template generate project](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_project_unified)**
    Generate a Salesforce DX project.
-   **[template generate static-resource](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_static-resource_unified)**
    Generate a static resource.
-   **[template generate visualforce component](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_visualforce_component_unified)**
    Generate a Visualforce Component.
-   **[template generate visualforce page](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_generate_visualforce_page_unified)**
    Generate a Visualforce Page.

## template generate analytics template

Generate a simple Analytics template.

### Description for template generate analytics template

The metadata files associated with the Analytics template must be contained in a parent directory called "waveTemplates" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to generate one or point to an existing one.

### Examples for template generate analytics template

Generate the metadata files for a simple Analytics template file called myTemplate in the force-app/main/default/waveTemplates directory:

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

\-n | \--name NAME

Required

Name of the Analytics template.

Type: option

### Aliases for template generate analytics template

```

```

```

```

## template generate apex class

Generate an Apex class.

### Description for template generate apex class

Generates the Apex \*.cls file and associated metadata file. These files must be contained in a parent directory called "classes" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to generate one or point to an existing one.

### Examples for template generate apex class

Generate two metadata files associated with the MyClass Apex class (MyClass.cls and MyClass.cls-meta.xml) in the current directory:

```

```

Similar to previous example, but generates the files in the "force-app/main/default/classes" directory:

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

Name of the generated Apex class.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: ApexException, ApexUnitTest, BasicUnitTest, DefaultApexClass, InboundEmailService

Default value: DefaultApexClass

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

### Aliases for template generate apex class

```

```

```

```

## template generate apex trigger

Generate an Apex trigger.

### Description for template generate apex trigger

Generates the Apex trigger \*.trigger file and associated metadata file. These files must be contained in a parent directory called "triggers" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to generate one or point to an existing one.

If you don't specify the --sobject flag, the .trigger file contains the generic placeholder SOBJECT; replace it with the Salesforce object you want to generate a trigger for. If you don't specify --event, "before insert" is used.

### Examples for template generate apex trigger

Generate two files associated with the MyTrigger Apex trigger (MyTrigger.trigger and MyTrigger.trigger-meta.xml) in the current directory:

```

```

Similar to the previous example, but generate the files in the "force-app/main/default/triggers" directory:

```

```

Generate files for a trigger that fires on the Account object before and after an insert:

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

Name of the generated Apex trigger

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: ApexTrigger

Default value: ApexTrigger

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

\-s | \--sobject SOBJECT

Optional

Salesforce object to generate a trigger on.

Type: option

Default value: SOBJECT

\-e | \--event EVENT

Optional

Events that fire the trigger.

Type: option

Permissible values are: before insert, before update, before delete, after insert, after update, after delete, after undelete

Default value: before insert

### Aliases for template generate apex trigger

```

```

```

```

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

## template generate lightning app

Generate a Lightning App.

### Description for template generate lightning app

Generates a Lightning App bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.

### Examples for template generate lightning app

Generate the metadata files for a Lightning app bundle called "myapp" in the current directory:

```

```

Similar to the previous example, but generate the files in the "force-app/main/default/aura" directory:

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

Name of the generated Lightning App.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningApp

Default value: DefaultLightningApp

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

### Aliases for template generate lightning app

```

```

```

```

## template generate lightning component

Generate a bundle for an Aura component or a Lightning web component.

### Description for template generate lightning component

Generates the bundle in the specified directory or the current working directory. The bundle consists of multiple files in a directory with the designated name. Lightning web components are contained in the directory with name "lwc", Aura components in "aura".

To generate a Lightning web component, pass "--type lwc" to the command. If you don’t specify --type, Salesforce CLI generates an Aura component by default.

### Examples for template generate lightning component

Generate the metadata files for an Aura component bundle in the current directory:

```

```

Generate a Lightning web component bundle in the current directory:

```

```

Generate an Aura component bundle in the "force-app/main/default/aura" directory:

```

```

Generate a Lightning web component bundle in the "force-app/main/default/lwc" directory:

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

Name of the generated Lightning Component.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: default, analyticsDashboard, analyticsDashboardWithStep

Default value: default

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

\--type TYPE

Optional

Type of the component bundle.

Type: option

Permissible values are: aura, lwc

Default value: aura

### Aliases for template generate lightning component

```

```

```

```

## template generate lightning event

Generate a Lightning Event.

### Description for template generate lightning event

Generates a Lightning Event bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.

### Examples for template generate lightning event

Generate the metadata files for a Lightning event bundle called "myevent" in the current directory:

```

```

Similar to previous example, but generate the files in the "force-app/main/default/aura" directory:

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

Name of the generated Lightning Event.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningEvt

Default value: DefaultLightningEvt

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

### Aliases for template generate lightning event

```

```

```

```

## template generate lightning interface

Generate a Lightning Interface.

### Description for template generate lightning interface

Generates a Lightning Interface bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.

### Examples for template generate lightning interface

Generate the metadata files for a Lightning interface bundle called "myinterface" in the current directory:

```

```

Similar to the previous example but generate the files in the "force-app/main/default/aura" directory:

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

Name of the generated Lightning Interface.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningIntf

Default value: DefaultLightningIntf

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

### Aliases for template generate lightning interface

```

```

```

```

## template generate lightning test

Generate a Lightning test.

### Description for template generate lightning test

Generates the test in the specified directory or the current working directory. The .resource file and associated metadata file are generated.

### Examples for template generate lightning test

Generate the metadata files for the Lightning test called MyLightningTest in the current directory:

```

```

Similar to the previous example but generate the files in the "force-app/main/default/lightningTests" directory:

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

Name of the generated Lightning Test.

Name of the new Lightning test; can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningTest

Default value: DefaultLightningTest

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

### Aliases for template generate lightning test

```

```

```

```

## template generate project

Generate a Salesforce DX project.

### Description for template generate project

A Salesforce DX project has a specific structure and a configuration file (sfdx-project.json) that identifies the directory as a Salesforce DX project. This command generates the necessary configuration files and directories to get you started.

By default, the generated sfdx-project.json file sets the sourceApiVersion property to the default API version currently used by Salesforce CLI. To specify a different version, set the apiVersion configuration variable. For example: "sf config set apiVersion=57.0 --global".

### Examples for template generate project

Generate a project called "mywork":

```

```

Similar to previous example, but generate the files in a directory called "myapp":

```

```

Similar to prevoius example, but also generate a default package.xml manifest file:

```

```

Generate a project with the minimum files and directories:

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

Name of the generated project.

Generates a project directory with this name; any valid directory name is accepted. Also sets the "name" property in the sfdx-project.json file to this name.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for project creation.

The template determines the sample configuration files and directories that this command generates. For example, the empty template provides these files and directory to get you started.

\- .forceignore

\- config/project-scratch-def.json

\- sfdx-project.json

\- package.json

\- force-app (basic source directory structure)

The standard template provides a complete force-app directory structure so you know where to put your source. It also provides additional files and scripts, especially useful when using Salesforce Extensions for VS Code. For example:

\- .gitignore: Use Git for version control.

\- .prettierrc and .prettierignore: Use Prettier to format your Aura components.

\- .vscode/extensions.json: When launched, Visual Studio Code, prompts you to install the recommended extensions for your project.

\- .vscode/launch.json: Configures Replay Debugger.

\- .vscode/settings.json: Additional configuration settings.

The analytics template provides similar files and the force-app/main/default/waveTemplates directory.

Type: option

Permissible values are: standard, empty, analytics

Default value: standard

\-d | \--output-dir OUTPUT-DIR

Optional

Directory for saving the created files.

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

Default value: .

\-s | \--namespace NAMESPACE

Optional

Namespace associated with this project and any connected scratch orgs.

Type: option

\-p | \--default-package-dir DEFAULT-PACKAGE-DIR

Optional

Default package directory name.

Metadata items such as classes and Lightning bundles are placed inside this folder.

Type: option

Default value: force-app

\-x | \--manifest

Optional

Generate a manifest (package.xml) for change-set based development.

Generates a default manifest (package.xml) for fetching Apex, Visualforce, Lightning components, and static resources.

Type: boolean

\--api-version API-VERSION

Optional

Will set this version as sourceApiVersion in the sfdx-project.json file

Override the api version used for api requests made by this command

Type: option

### Aliases for template generate project

```

```

```

```

## template generate static-resource

Generate a static resource.

### Description for template generate static-resource

Generates the metadata resource file in the specified directory or the current working directory. Static resource files must be contained in a parent directory called "staticresources" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to create one or point to an existing one.

### Examples for template generate static-resource

Generate the metadata file for a static resource called MyResource in the current directory:

```

```

Similar to previous example, but specifies a MIME type of application/json:

```

```

Generate the resource file in the "force-app/main/default/staticresources" directory:

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

Name of the generated static resource.

This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.

Type: option

\--type TYPE

Optional

Content type (mime type) of the generated static resource.

Must be a valid MIME type such as application/json, application/javascript, application/zip, text/plain, text/css, etc.

Type: option

Default value: application/zip

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

### Aliases for template generate static-resource

```

```

```

```

## template generate visualforce component

Generate a Visualforce Component.

### Description for template generate visualforce component

The command generates the .Component file and associated metadata file in the specified directory or the current working directory by default.

### Examples for template generate visualforce component

Generate the metadata files for a Visualforce component in the current directory:

```

```

Similar to previous example, but generate the files in the directory "force-app/main/default/components":

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

Name of the generated Visualforce Component.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultVFComponent

Default value: DefaultVFComponent

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

\-l | \--label LABEL

Required

Visualforce Component label.

Type: option

### Aliases for template generate visualforce component

```

```

```

```

## template generate visualforce page

Generate a Visualforce Page.

### Description for template generate visualforce page

The command generates the .Page file and associated metadata file in the specified directory or the current working directory by default.

### Examples for template generate visualforce page

Generate the metadata files for a Visualforce page in the current directory:

```

```

Similar to previous example, but generate the files in the directory "force-app/main/default/pages":

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

Name of the generated Visualforce Page.

The name can be up to 40 characters and must start with a letter.

Type: option

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

\-l | \--label LABEL

Required

Visualforce Page label.

Type: option

### Aliases for template generate visualforce page

```

```

```

```

## Code Examples

```
sf template generate analytics template --name myTemplate --output-dir force-app/main/default/waveTemplates
```

```
force:analytics:template:create
```

```
analytics generate template
```

```
sf template generate apex class --name MyClass
```

```
sf template generate apex class --name MyClass --output-dir force-app/main/default/classes
```

## Related Topics

- template generate analytics template (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate apex class (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate apex trigger (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate digital-experience site (Developer Preview) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate flexipage (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate lightning app (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate lightning component (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate lightning event (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate lightning interface (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
- template generate lightning test (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm)
