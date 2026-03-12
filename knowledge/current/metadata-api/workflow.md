---
title: "Workflow"
domain: metadata-api
topic: workflow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:44.032Z
estimatedTokens: 6513
keywords: [Workflow, Represents, metadata, associated, workflow, rule., rule, actions, motion, its, designated, conditions, met., configure, execute, immediately, record, meets, set, time]
---

# Workflow

> Represents the metadata associated with a workflow rule.
            A workflow rule sets workflow actions into motion when its designated conditions are
            met. You can configure workflow actions to execute immediately when a record meets the
            conditions in your workflow rule, or set time triggers that execute the workflow actions
            on a specific day. Use this metadata type to create, update, or delete workflow rule
            definitions.

# Workflow

Represents the metadata associated with a workflow rule. A workflow rule sets workflow actions into motion when its designated conditions are met. You can configure workflow actions to execute immediately when a record meets the conditions in your workflow rule, or set time triggers that execute the workflow actions on a specific day. Use this metadata type to create, update, or delete workflow rule definitions.

For more information, see Workflow in Salesforce Help. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

When using a manifest file, retrieve all workflow components using this code.

```

```

## Declarative Metadata File Suffix and Directory Location

Workflow files have the suffix .workflow. There’s one file per standard or custom object that has workflow. These files are stored in the workflows directory of the corresponding package.

## Version

Workflow rules are available in API version 13.0 and later.

## Workflow

This metadata type represents the valid types of workflow rules and actions associated with a standard or custom object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| alerts | WorkflowAlert[] | An array of all alerts for the object associated with the workflow. |
| fieldUpdates | WorkflowFieldUpdate[] | An array of all field updates for the object associated with the workflow. |
| flowActions | WorkflowFlowAction[] | An array of flow triggers for the object associated with the workflow. Available in API version 30.0 and later.The pilot program for flow trigger workflow actions is closed. If you already enabled the pilot in your org, you can continue to create and edit flow trigger workflow actions. If you didn’t enable the pilot, use Flow Builder to create a record-triggered flow, or use Process Builder to launch a flow from a process. |
| fullName | string | The developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| knowledgePublishes | WorkflowKnowledgePublish[] | An array of Salesforce Knowledge Workflow Publishes associated with the workflow. Available in API version 27.0 and later. |
| outboundMessages | WorkflowOutboundMessage[] | An array of all the outbound messages for the object associated with the workflow. |
| rules | WorkflowRule[] | An array of all the objects associated with the workflow. |
| tasks | WorkflowTask[] | An array of all the tasks for the object associated with the workflow. |

## WorkflowActionReference

WorkflowActionReference represents one of the workflow actions.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The name of the workflow action. |
| type | WorkflowActionType (enumeration of type string) | Required. Available types of workflow actions:AlertFieldUpdateFlowAction—Available in API version 30.0 and laterOutboundMessageTaskThe pilot program for flow trigger workflow actions is closed. If you already enabled the pilot in your org, you can continue to create and edit flow trigger workflow actions. If you didn't enable the pilot, use Flow Builder to create a record-triggered flow, or use Process Builder to launch a flow from a process. |

## WorkflowAlert

WorkflowAlert represents an email alert associated with a workflow rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| ccEmails | string[] | Additional email addresses. This field is similar to the CC field in email clients.For the email to be sent successfully, set a value for ccEmails or recipients. You can set values for both fields. The value of ccEmails can include up to 5 different email addresses. |
| description | string | Required. A description of the email alert. Available in API version 16.0 and later. |
| fullName | string | Required. The developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in the installing organization. |
| recipients | WorkflowEmailRecipient[] | The recipients for the email.For the email to be sent successfully, set a value for ccEmails or recipients. You can set values for both fields. |
| senderAddress | string | The address in the From field for the email alert. With this address, you can use a standard global email address for your organization, such as support@company.com, instead of the default From field, which is the email address of the person who updates the record. You can only specify a value in this field if the senderType is set to OrgWideEmailAddress. See Organization-Wide Email Addresses in Salesforce Help. |
| senderType | ActionEmailSenderType (enumeration of type string) | The email used as the sender’s From and Reply-To addresses. These values are valid.CurrentUser—The email address of the person updating the record. This value is the default setting.DefaultWorkflowUser—The email address of the default workflow user. If the email alert is installed from a package, this field value is changed to CurrentUser.OrgWideEmailAddress—A verified global email address for your organization, such as support@company.com. |
| template | string | Required. Named reference to an EmailTemplate. This email template isn’t required to exist in the zip file, but it must exist in Metadata API.Lightning email templates aren’t packageable. We recommend using a Classic email template. |

## WorkflowEmailRecipient

WorkflowEmailRecipient represents a recipient for an email alert associated with a workflow rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Name of the field referenced in type. The field named is of the type specified in type. |
| recipient | string | The recipients for the email. Depending on the type selected, this field is required. |
| type | ActionEmailRecipientTypes (enumeration of type string) | Named reference to an EmailTemplate component. Valid values are:accountOwner—The email is sent to the record’s account owner. For example, the Account owner for an Opportunity.accountTeam—Only applicable on the Account object. The email is sent to everyone on that Account’s account team.campaignMemberDerivedOwner—Emails are sent to lead and contact owners when contacts are added to a campaign or in response to a campaign.contactLookup—The email is sent to a contact whose value is looked up from a field on the record. For this value, the field field must reference a Contact.creator—The email is sent to the record’s creator.customerPortalOwner—The email is sent to a specific self-service portal user. For this value, the recipient field must reference a self-service portal user by their username.email—The email is sent to an email address whose value is looked up from a field on the record. For this value, the field field must reference an email field.group—The email is sent to all users in a group. For this value, the recipient field must reference a group by group name.opportunityTeam—Only applicable on the Opportunity object. The email is sent to everyone on that Opportunity’s opportunity team.owner—The email is sent to the record’s owner.partnerUser—The email is sent to a specific partner user. For this value, the recipient field must reference a partner user by username.portalRole - Like role, but for portal roles only.portalRoleSubordinates - Like roleSubordinates, but for portal roles only.role—The email is sent to all users in a role. For this value, the recipient field must reference a role name in the role hierarchy.roleSubordinates—The email is sent to all users in a role subordinate. For this value, the recipient field must reference a role.roleSubordinatesInternal—Like roleSubordinates, but for internal portal roles only.user—The email is sent to a specific user. For this value, the recipient field must reference a user by username.userLookup—The email is sent to a user whose value is looked up from a field on the record. For this value, the field field must reference a user foreign key field. |

## WorkflowFieldUpdate

WorkflowFieldUpdate represents a workflow field update. With field updates, you can automatically update a field value to one that you specify when a workflow rule is triggered.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description of the field update. This information is useful to track the reasoning for initially configuring the field update. |
| field | string | Required. The field on the object for the workflow to be updated. |
| formula | string | If the operation field value is Formula, the formula used to compute the new field value. |
| fullName | string | Required. The developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| literalValue | string | If the operation field value is Literal, the literal value for the field. |
| lookupValue | string | If the operation field value is lookupValue, the lookup value that is referenced. |
| lookupValueType | LookupValueType (enumeration of type string) | The type of object that the lookupValue field value is referencing. The valid values are:QueueRecordTypeUser |
| name | string | Required. A name for the component. Available in version API 16.0 and later. |
| notifyAssignee | boolean | Required. Notify the assignee when the field is updated. |
| operation | FieldUpdateOperation (enumeration of type string) | Required. The operation that computes the value with which to update the field. Valid values are:Formula—Indicates the field is set to a formula. If set, the formula must be a valid formula.Literal—Indicates the field is set to a literal value. If set, the literalValue must be a valid literal value for this field.LookupValue—Similar to Literal, but for an object reference, such as a contact, user, or account. If set, the lookupValue element must be set. Only User is supported in the current API.NextValue—Indicates that the field will be set to its next value. Only allowed when the field update references a picklist.Null—Indicates that the field is set to null.PreviousValue—Indicates that the field is set to its previous value. Only allowed when the field update references a picklist. |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in the installing organization. |
| reevaluateOnChange | boolean | When set to true, if the field update changes the field’s value, all workflow rules on the associated object are reevaluated. Any workflow rules whose criteria are met as a result of the field value change are triggered.If any of the triggered workflow rules result in another field update that’s also enabled for workflow rule reevaluation, a domino effect occurs, and more workflow rules can be reevaluated as a result of the newly triggered field update. This cascade of workflow rule reevaluation and triggering can happen up to 5 times after the initial field update that started it. |
| targetObject | string | Object set if the change is detected on a child record. If set, the object points to the foreign key reference on the child object that points to the parent. For example, if EmailMessage child record is changed, EmailMessage.ParentId points to the Case parent. This field is named sourceField before version 14.0. The field name change is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |

## WorkflowFlowAction

Represents a flow trigger, which is a workflow action that launches a flow. Available in API version 30.0 and later. For more information, see these topics in Salesforce Help.

-   Define a Flow Trigger for Workflow (Pilot)
-   Flow Trigger Considerations (Pilot)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   The pilot program for flow trigger workflow actions is closed. If you already enabled the pilot in your org, you can continue to create and edit flow trigger workflow actions. If you didn’t enable the pilot, use Flow Builder to create a record-triggered flow, or use Process Builder to launch a flow from a process.
-   Test mode for flow triggers isn’t supported in the Metadata API. If you want a flow trigger to run the latest flow version when an administrator causes the workflow rule to fire, enable test mode via the user interface after deployment.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Describes the flow trigger. |
| flow | string | Required. API name of the flow that this workflow action launches. |
| flowInputs | WorkflowFlowActionParameter[] | An array of values to pass into flow variables when launching the flow. |
| label | string | Required. Name of the flow trigger. |
| language | string | Reserved for future use. |
| protected | boolean | Reserved for future use. |

## WorkflowFlowActionParameter

Represents a value specified in the flow trigger that is passed into a variable when launching the flow.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The pilot program for flow trigger workflow actions is closed. If you already enabled the pilot in your org, you can continue to create and edit flow trigger workflow actions. If you didn’t enable the pilot, use Flow Builder to create a record-triggered flow, or use Process Builder to launch a flow from a process.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. API name of the flow variable.The flow variable must have isInput set to True. |
| value | string | Required. Value to assign to the flow variable when launching the flow.If the variable's data type is sObject, value must be a merge field that identifies a record—or a lookup relationship field that references a record—of the same object type as the variable. For example:{!this}—Identifies the record that fired the workflow rule.{!Contact}—Identifies the contact associated with the record that fired the workflow rule.{!Asset.Account}—Identifies the account associated with the asset that is associated with the record that fired the workflow rule.{!SomeObject__r}—Uses a lookup relationship field to identify a custom object record associated with the record that fired the workflow rule.For variables of other data types, you can enter a merge field or a literal value. Manually enter a literal value when the variable requires the same value every time the flow is launched, regardless of which record fired the workflow rule. For example, you can enter true or false for a variable of type Boolean.Supported merge fields identify a global variable or a field of the same data type as the flow variable. For example:{!Id}—ID of the record that fired the workflow rule.{!Account.Owner.Email}—Email address of the account owner for the account associated with the record that fired the workflow rule.{!$Organization.Country}—Country of the organization. |

## WorkflowKnowledgePublish

WorkflowKnowledgePublish represents Salesforce Knowledge article publishing actions and information. Available in API version 27.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| action | KnowledgeWorkflowAction (enumeration of type string) | Required. The article publishing actions available when this rule fires. Valid values are:PublishAsNew—Publishes the article as a new article.Publish—Publishes the article as a version of a previously published article. |
| description | string | A brief article description. |
| label | string | Required. Label that represents the article throughout the Salesforce user interface. |
| language | string | The language of the article. |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in the installing organization. |

## WorkflowOutboundMessage

WorkflowOutboundMessage represents an outbound message associated with a workflow rule. Outbound messages are workflow and approval actions that send the information you specify to an endpoint you designate, such as an external service. An outbound message sends the data in the specified fields in the form of a SOAP message to the endpoint. For more information, see Outbound Message Actions in Salesforce Help.

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | Required. The API version of the outbound message. Automatically set to the current API version when the outbound message is created. Valid API versions for outbound messages are 8.0 and 18.0 or later.This API version is used in API calls back to Salesforce using the enterprise or partner WSDLs. The API Version can only be modified by using Metadata API. It can’t be modified using the Salesforce user interface. This field is available in API version 18.0 and later.If you change the apiVersion to a version that doesn’t support one of the fields configured for the outbound message, the messages fail until you update your outbound message listener to consume the updated WSDL.To monitor the status of outbound messages, from Setup, in the Quick Find box, enter Outbound Messages, and then select Outbound Messages inSalesforce. |
| description | string | Describes the outbound message. |
| endpointUrl | string | Required. The endpoint URL to which the outbound message is sent. |
| fields | string[] | The named references to the fields to be sent. |
| fullName | string | Required. The developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| includeSessionId | boolean | Required. Set if you want the Salesforce session ID included in the outbound message. Useful if you intend to make API calls and you don’t want to include a username and password. |
| integrationUser | string | Required. The named reference to the user under which this message is sent. |
| name | string | Required. A name for the component. Available in version API 16.0 and later. |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in the installing organization. |
| useDeadLetterQueue | boolean | This field is only available for organizations with dead letter queue permissions turned on. If set, this outbound message uses the dead letter queue if normal delivery fails. |

## WorkflowRule

This metadata type represents a workflow rule. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actions | WorkflowActionReference[] | An array of references for the actions that happen when this rule fires. |
| active | boolean | Required. Determines if this rule is active. |
| booleanFilter | string | For advanced criteria filter, the boolean formula. For example, (1 AND 2) OR 3. |
| criteriaItems | FilterItem[] | An array of the boolean criteria (conditions) under which this rule fires. Either criteriaItems or formula must be set. |
| description | string | The description of the workflow rule. |
| failedMigrationToolVersion | string | The API version in which a migration fails. Used as a reference to admins to retry the migration when the next version is released.Available in API version 54.0 and later. |
| formula | string | The formula condition under which this rule first must be set, either formula or criteriaItems. |
| fullName | string | The developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| triggerType | WorkflowTriggerTypes (enumeration of type string) | Under what conditions the trigger fires. Valid values are:onAllChanges—The workflow rule is considered on all changes.onCreateOnly—The workflow rule is considered only on create.onCreateOrTriggeringUpdate—The workflow rule is considered on create and triggering updates. |
| workflowTimeTriggers | WorkflowTimeTrigger | Represents a set of Workflow actions, including Field Updates, Email Alerts, Outbound Messages, and Tasks, that executes before or after a specified interval of time. |

## WorkflowTask

This metadata type references an assigned workflow task.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignedTo | string | Specifies the user, role, or team to which the workflow rule or action is assigned. The field corresponding to the value specified here must be the same as the specified assignedToType. |
| assignedToType | ActionTaskAssignedToTypes (enumeration of type string) | Valid string values for this type are:accountCreator—When set, the task is assigned to the record’s account's creator.accountOwner—When set, the task is assigned to the record’s account owner (Opportunity).accountTeam—Same as WorkflowAlert typecreator—When set, the task is assigned to the record’s creator.opportunityTeam—Same as WorkflowAlert typeowner—When set, the task is assigned to the record’s owner.partnerUser—When set, the assignedTo field references a partner user by username.portalRole—When set, the assignedTo field references a Role by role name, a portal role.role—When set, the assignedTo field references a Role by role name.user—When set, the assignedTo field references a User by username. |
| description | string | The description of this workflow task. |
| dueDateOffset | int | Required. The offset, in days, from either the trigger date, or the date specified in the (optional) offsetFromField. The offset can be a negative number. |
| fullName | string | Required. The developer name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| notifyAssignee | boolean | Required. Set to send an email notification when the task is assigned. |
| offsetFromField | string | Optional field reference of the date field from which the dueDate is computed. |
| priority | string | Required. The priority to assign the created task. |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in the installing organization. |
| status | string | Required. The status to assign the created task. |
| subject | string | Required. A subject for the workflow task that’s used if an email notification is sent when the task is assigned. Available in API version 16.0 and later. |

## WorkflowTimeTrigger

Represents a set of Workflow actions, including Field Updates, Email Alerts, Outbound Messages, and Tasks, that execute before or after a specified interval of time.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actions | WorkflowActionReference[] | An array of references for the actions that happen when this trigger fires. |
| offsetFromField | string | The date type field name that the time-based workflow triggers from, such as Created Date, Last Modified Date, Rule Trigger Date, or a custom date field on the object for which the workflow rule is defined. |
| timeLength | string | The numeric value of the time after or before the workflow triggers. A negative value represents the time length before the trigger fires. The timeLength is measured in either hours or days, as specified by workflowTimeTriggerUnit. |
| workflowTimeTriggerUnit | WorkflowTimeUnits (enumeration of type string) | The unit of time before or after which the time-based workflow triggers. Valid string values are:HoursDays |

## Declarative Metadata Sample Definition

Here’s the definition of a workflow rule.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<types>
    <members>*</members>
    <name>Workflow</name>
</types>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Another_alert</fullName>
        <description>Another alert</description>
        <protected>false</protected>
        <recipients>
            <type>accountOwner</type>
        </recipients>
        <recipients>
            <field>Contact__c</field>
            <type>contactLookup</type>
        </recipients>
        <recipients>
            <field>Email__c</field>
            <type>email</type>
        </recipients>
        <template>TestEmail/Email Test</template>
    </alerts>
    <fieldUpdates>
        <fullName>Enum_Field_Update</fullName>
        <description>Blah</description>
        <field>EnumField__c</field>
        <name>Enum Field Update</name>
        <notifyAssignee>true</notifyAssignee>
        <operation>NextValue</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Enum_Field_Update2</fullName>
        <description>Blah</description>
        <field>EnumField__c</field>
        <literalValue>PLX2</literalValue>
        <name>Enum Field Update2</name>
        <notifyAssignee>true</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Field_Update</fullName>
        <description>TestField update desc</description>
        <field>Name</field>
        <formula>Name &amp; &quot;Updated&quot;</formula>
        <name>Field Update</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Lookup_On_Contact</fullName>
        <field>RealOwner__c</field>
        <lookupValue>admin@acme.com</lookupValue>
        <name>Lookup On Contact</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
    </fieldUpdates>
    <outboundMessages>
        <fullName>Another_Outbound_message</fullName>
        <description>Another Random outbound.</description>
        <endpointUrl>http://www.test.com</endpointUrl>
        <fields>Email__c</fields>
        <fields>Id</fields>
        <fields>Name</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>admin@acme.com</integrationUser>
        <name>Another Outbound message</name>
        <protected>false</protected>
    </outboundMessages>
    <rules>
        <fullName>BooleanFilter</fullName>
        <active>false</active>
        <booleanFilter>1 AND 2 OR 3</booleanFilter>
        <criteriaItems>
            <field>CustomObjectForWorkflow__c.CreatedById</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <criteriaItems>
            <field>CustomObjectForWorkflow__c.CreatedById</field>
            <operation>notEqual</operation>
            <value>abc</value>
        </criteriaItems>
        <criteriaItems>
            <field>CustomObjectForWorkflow__c.CreatedById</field>
            <operation>equals</operation>
            <value>xyz</value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>Custom Rule1</fullName>
        <actions>
            <name>Another_alert</name>
            <type>Alert</type>
        </actions>
        <actions>
            <name>Enum_Field_Update2</name>
            <type>FieldUpdate</type>
        </actions>
        <actions>
            <fullName>Field_Update</name>
                <type>FieldUpdate</type>
        </actions>
        <actions>
            <name>Another_Outbound_message</name>
            <type>OutboundMessage</type>
        </actions>
        <actions>
            <name>Role_task_was_completed</name>
            <type>Task</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>CustomObjectForWorkflow__c.Name</field>
            <operation>startsWith</operation>
            <value>ABC</value>
        </criteriaItems>
        <description>Custom Rule1 desc</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>IsChangedFunctionRule</fullName>
        <active>true</active>
        <description>IsChangedDesc</description>
        <formula>ISCHANGED(Name)</formula>
        <triggerType>onAllChanges</triggerType>
    </rules>
    <tasks>
        <fullName>Another_task_was_completed</fullName>
        <assignedToType>owner</assignedToType>
        <description>Random Comment</description>
        <dueDateOffset>20</dueDateOffset>
        <notifyAssignee>true</notifyAssignee>
        <priority>High</priority>
        <protected>false</protected>
        <status>Completed</status>
        <subject>Another task was completed</subject>
    </tasks>
    <tasks>
        <fullName>Role_task_was_completed</fullName>
        <assignedTo>R11</assignedTo>
        <assignedToType>role</assignedToType>
        <dueDateOffset>-2</dueDateOffset>
        <notifyAssignee>true</notifyAssignee>
        <offsetFromField>CustomObjectForWorkflow__c.CreatedDate</offsetFromField>
        <priority>High</priority>
        <protected>false</protected>
        <status>Completed</status>
        <subject>Role task was completed</subject>
    </tasks>
    <tasks>
        <fullName>User_task_was_completed</fullName>
        <assignedTo>admin@acme.com</assignedTo>
        <assignedToType>user</assignedToType>
        <dueDateOffset>-2</dueDateOffset>
        <notifyAssignee>true</notifyAssignee>
        <offsetFromField>User.CreatedDate</offsetFromField>
        <priority>High</priority>
        <protected>false</protected>
        <status>Completed</status>
        <subject>User task was completed</subject>
    </tasks>
</Workflow>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- FilterItem (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
