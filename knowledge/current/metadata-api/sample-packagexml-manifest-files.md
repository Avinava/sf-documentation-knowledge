---
title: "Sample package.xml Manifest Files"
domain: metadata-api
topic: sample-packagexml-manifest-files
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.223Z
keywords: [Sample, package.xml, Manifest, Files, Standard, Objects, Custom, Picklist, Fields, Note, List, Views, Packages, Security, Settings, Assignment, Rules, Auto-Response, Escalation, Sharing]
---

# Sample package.xml Manifest Files

# Sample package.xml Manifest Files

This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.

The following samples are listed:

-   [Standard Objects](#manifest_standard_objects)
-   [All Custom Objects](#manifest_all_custom_objects)
-   [Standard Picklist Fields](#manifest_standard_picklists)
-   [Custom and Standard Fields](#manifest_custom_fields)
-   [List Views for Standard Objects](#manifest_list_view_standard)
-   [Packages](#manifest_packages)
-   [Security Settings](#manifest_security_settings)
-   [Assignment Rules, Auto-Response Rules, Escalation Rules](#assignment_rules)
-   [Sharing Rules](#manifest_sharing)
-   [Managed Component Access](#ManagedComponentAccess_intro)

For more information about the structure of a manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Standard Objects

This sample package.xml manifest file illustrates how to work with the standard Account object. Retrieving or deploying a standard object includes all custom and standard fields except for standard fields that aren’t customizable. All custom fields are supported. Only standard fields that you can customize are supported, that is, standard fields to which you can add help text or enable history tracking or Chatter feed tracking. Other standard fields aren't supported, including system fields (such as CreatedById or LastModifiedDate) and autonumber fields.

```

```

Note how you work with the standard Account object by specifying it as a member of a CustomObject type. However, you can’t use an asterisk wildcard to work with all standard objects; each standard object must be specified by name.

## All Custom Objects

This sample package.xml manifest file illustrates how to work with all custom objects.

```

```

This manifest file can be used to retrieve or deploy all custom objects, but not all standard objects.

## Standard Picklist Fields

In API version 38.0 and later, the StandardValueSet type represents standard picklists. Picklists are no longer represented by fields as in earlier versions. This sample package.xml represents the Industry standard picklist as a StandardValueSet type.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The name of a standard value set is case-sensitive.

The Industry standard value set corresponds to the Account.Industry or Lead.Industry field in API version 37.0 and earlier. This example shows a package.xml sample for the Account.Industry picklist.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The name of a picklist field is case-sensitive.

Note the objectName.picklistField syntax in the <members\> field where objectName is the name of the object, such as Account, and picklistField is the name of the standard picklist field, such as Industry.

This next package.xml sample represents opportunity team roles in API version 38.0 and later. Specify opportunity team roles as a SalesTeamRole standard value set. Opportunity team roles have the same picklist values as the account team roles.

```

```

The SalesTeamRole standard value set corresponds to one of these field names in API version 37.0 and earlier: OpportunityTeamMember.TeamMemberRole, UserAccountTeamMember.TeamMemberRole, UserTeamMember.TeamMemberRole, and AccountTeamMember.TeamMemberRole. Opportunity team roles are represented in this sample package.xml as the OpportunityTeamMember.TeamMemberRole field.

```

```

To learn about the names of standard value sets and how they map to picklist field names, see [StandardValueSet Names and Standard Picklist Fields](atlas.en-us.api_meta.meta/api_meta/standardvalueset_names.htm "In API version 38.0 and later, standard picklists are represented by the StandardValueSet type. In previous versions, standard picklists are represented by the CustomField type. This table lists the names of standard picklists as standard value sets and their corresponding field names.").

## Custom and Standard Fields

This sample package.xml manifest file illustrates how to work with custom fields in custom and standard objects and standard fields in a standard object.

```

```

Note the objectName.field syntax in the <members\> field where objectName is the name of the object, such as Account, and field is the name of the custom or standard field, such as an SLA picklist field representing a service-level agreement option. The MyCustomField custom field in the MyCustomObject custom object is uniquely identified by its full name MyCustomObject\_\_c.MyCustomField\_\_c. Similarly, the Phone standard field in the Account standard object is uniquely identified by its full name Account.Phone.

All custom fields are supported. Only standard fields that you can customize are supported, that is, standard fields to which you can add help text or enable history tracking or Chatter feed tracking. Other standard fields aren't supported, including system fields (such as CreatedById or LastModifiedDate) and autonumber fields.

## List Views for Standard Objects

The easiest way to retrieve list views for a standard object is to retrieve the object. The list views are included in the retrieved component. See the section of this topic on Standard Objects.

You can also work with individual list views if you don’t want to retrieve all the details for the object. This sample package.xml manifest file illustrates how to work with a list view for the standard Account object.

```

```

Note the objectName.listViewUniqueName syntax in the <members\> field where objectName is the name of the object, such as Account, and listViewUniqueName is the View Unique Name for the list view. If you retrieve this list view, the component is stored in objects/Account.object.

## Packages

To retrieve a package, set the name of the package in the [packageNames](atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm#field_packageNames) field in [RetrieveRequest](atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm "The RetrieveRequest parameter specified on a retrieve() call encapsulates options for determining which packages or files are retrieved.") when you call [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization."). The package.xml manifest file is automatically populated in the retrieved .zip file. The <fullName\> element in package.xml contains the name of the retrieved package.

If you use an asterisk wildcard in a <members\> element to retrieve all the components of a particular metadata type, the retrieved contents don’t include components in managed packages.

For more information about managed packages, see the [Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm).

The easiest way to retrieve a component in a managed package is to retrieve the complete package by setting the name of the package in the [packageNames](atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm#field_packageNames) field in [RetrieveRequest](atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm "The RetrieveRequest parameter specified on a retrieve() call encapsulates options for determining which packages or files are retrieved."), as described earlier. The following sample package.xml manifest file illustrates an alternative to retrieve an individual component in a package.

```

```

Note the namespacePrefix\_\_objectName syntax in the <members\> field where namespacePrefix is the namespace prefix of the package and objectName is the name of the object. A namespace prefix is a 1-character to 15-character alphanumeric identifier that distinguishes your package and its contents from other publishers’ packages. For more information, see Create and Register Your Namespace for Second-Generation Managed Packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The namespace prefix is important to help identify the source of items like fields, custom objects, and more from different managed packages. For example, when working with FlexiPages in your org, we recommend against removing namespaces for object fields, because it can cause unexpected results such as name collisions.

## Security Settings

This sample package.xml manifest file illustrates how to work with an org’s security settings. You specify Security in the <members\> element and Settings in the name element when retrieving the SecuritySettings component type.

```

```

## Assignment Rules, Auto-Response Rules, Escalation Rules

Assignment rules, auto-response rules, and escalation rules use different package.xml type names to access sets of rules or individual rules for object types. For example, this sample package.xml manifest file illustrates how to access an org’s assignment rules for just Cases and Leads.

```

```

The following sample package.xml manifest file illustrates how to access just the “samplerule” Case assignment rule and the “newrule” Lead assignment rule. Notice that the type name is AssignmentRule and not AssignmentRules.

```

```

Similarly, for accessing individual auto-response rules and escalation rules, use AutoResponseRule and EscalationRule instead of AutoResponseRules and EscalationRules.

## Sharing Rules

In API version 33.0 and later, you can retrieve and deploy sharing rules for all standard and custom objects. This sample package.xml manifest file illustrates how to work with an org’s sharing rules, such as retrieving a specific criteria-based sharing rule for the lead object, retrieving all ownership-based sharing rules for all objects, and retrieving all territory-based sharing rules for the account object.

```

```

## Managed Component Access

In API version 29.0 and later, you can retrieve and deploy access settings for these managed components in profiles and permission sets:

-   Apex classes
-   Apps
-   Custom field permissions
-   Custom object permissions
-   Custom tab settings
-   External data sources
-   Record types
-   Visualforce pages

In API version 51.0 and later, you can retrieve and deploy access settings for login flows.

When retrieving and deploying managed component permissions, specify the namespace followed by two underscores. Wildcards aren’t supported.

For example, let’s say you install a managed package with the namespace MyNamespace and the custom object JobRequest\_\_c. To set object permissions for JobRequest\_\_c in the package to the custom profile MyProfile, you would add the following to the .profile file.

To deploy:

```

```

To retrieve:

```

```

When retrieving permission sets and profiles, make sure that you also retrieve any components that are related to the permissions and settings. For example, when retrieving app visibilities, you must also retrieve the associated app, and when retrieving object or field permissions, you must also retrieve the associated object.