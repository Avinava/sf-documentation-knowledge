---
title: "ApprovalProcess"
domain: metadata-api
topic: approvalprocess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:36.994Z
estimatedTokens: 4084
keywords: [ApprovalProcess, Represents, metadata, associated, approval, process., process, automates, how, records, approved, Salesforce., specifies, step, including, who, request, point, Note, File]
---

# ApprovalProcess

> Represents the metadata associated with an approval
            process. An approval process automates how records are approved in Salesforce. An
            approval process specifies each step of approval, including who to request approval from
            and what to do at each point of the process.

# ApprovalProcess

Represents the metadata associated with an approval process. An approval process automates how records are approved in Salesforce. An approval process specifies each step of approval, including who to request approval from and what to do at each point of the process.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   To use approval processes on Salesforce Knowledge articles with the Metadata API, the article type must be deployed. For article version (\_kav) in approval processes, the supported action types are: Knowledge Action, Email Alert, Field Update, and Outbound Message.
-   Send actions and approval processes for email drafts aren’t supported in the Metadata API.
-   The metadata doesn’t include the order of active approval processes. Sometimes you have to reorder the approval processes in the destination org after deployment.

## File Suffix and Directory Location

ApprovalProcess components have the suffix .approvalProcess and are stored in the approvalProcesses folder.

## Version

ApprovalProcess components are available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Whether the approval process is active.After an approval process is activated, you can’t add, delete, or change the order of the steps or change its reject or skip behavior, even if the process is inactive. |
| allowRecall | boolean | Whether to allow submitters to recall approval requests.If set to false, only administrators can recall approval requests. |
| allowedSubmitters | ApprovalSubmitter[] | Required. An array of users who are allowed to submit records for approval. |
| approvalPageFields | ApprovalPageField | Specifies which fields to display on the approval page, where the approver goes to approve or reject the record. By default, the approval page displays the following:Name fieldOwner field (except for child objects)If you enable notifications in the Salesforce mobile app, keep in mind that approvers can view this list of fields on a mobile device. Select only the fields necessary for users to decide whether to approve or reject records. |
| approvalStep | ApprovalStep[] | An array of approval step definitions. |
| description | string | Describes the approval process. |
| emailTemplate | string | Specifies which Classic email template to use for approval requests. If not specified, the default email template is used.Lightning email templates aren’t packageable. We recommend using a Classic email template.When an approval process assigns an approval request to a user, Salesforce sends the user an approval request email. |
| enableMobileDeviceAccess | boolean | Whether users can access an external version of the approval page from any browser, including browsers on mobile devices, without logging in to Salesforce. Corresponds to Security Settings in the user interface.If set to true, approval steps can’t have approvers of type adhoc.If set to false, approvers must log in to Salesforce to access the approval page. |
| entryCriteria | ApprovalEntryCriteria | Determines which records can enter the approval process. Exclude this field to allow all records to enter the approval process.When you deploy an approval process with no entry criteria to overwrite an existing approval process with entry criteria, then the entry criteria from the existing process are applied to the deployed process. |
| finalApprovalActions | ApprovalAction | Specifies which workflow actions to execute when all required approvals have been given for a record. |
| finalApprovalRecordLock | boolean | Whether to keep the record locked after it receives all necessary approvals. Default: false. |
| finalRejectionActions | ApprovalAction | Specifies which workflow actions to execute after a record enters the final rejection state. |
| finalRejectionRecordLock | boolean | Whether to keep the record locked after it’s finally rejected. Default: false. |
| initialSubmissionActions | ApprovalAction | Specifies which workflow actions to execute when a record is initially submitted for approval. |
| label | string | Required. Name of the approval process. |
| nextAutomatedApprover | NextAutomatedApprover | Specifies a standard or custom user hierarchy field that can be used to automatically assign the approver for an approval step.If you exclude this field, then no approval step can use a user hierarchy field to automatically assign the approver. |
| postTemplate | string | Post template to use for Approvals in Chatter.Chatter post approval notifications are only available for approval processes associated with an object that has been enabled for feed tracking. |
| recallActions | ApprovalAction | Specifies which workflow actions to execute when a pending approval request is withdrawn. |
| recordEditability | RecordEditabilityType (enumeration of type string) | Specifies which users can edit records that are pending approval. When a record is submitted for approval, it’s automatically locked to prevent other users from editing it during the approval process. Valid values are:AdminOnly—Records pending approval can be edited by:Users with the “Modify All Data” permissionUsers with the “Modify All Records” object-level permission for the given objectAdminOrCurrentApprover—Records pending approval can be edited by:Users with the “Modify All Data” permissionUsers with the “Modify All Records” object-level permission for the given objectThe assigned approver, who must have edit access to the record through user permissions and the organization-wide sharing defaults for the given object |
| showApprovalHistory | boolean | Whether to add the Approval History related list to the approval page, which is where the approver can view the approval request details and approve or reject the record. The Approval History related list tracks a record through the approval process.If you also want to add the Approval History related list to record detail and edit pages, use the Salesforce user interface to customize the page layouts for the given object. |

## ApprovalSubmitter

Represents a user or set of users who can submit records for approval.

| Field Name | Field Type | Description |
| --- | --- | --- |
| submitter | string | Identifies a specific user or set of users who can submit records for approval. This field is required, except when the following types are specified and the submitter field is ignored:ownercreatorallInternalUsersExample:<allowedSubmitters>      <type>allInternalUsers</type> </allowedSubmitters>   <allowedSubmitters>     <submitter>myGroup</submitter>     <type>group</type> </allowedSubmitters> |
| type | ProcessSubmitterType (enumeration of type string) | Required. Type of user or set of users who can submit records for approval. Valid values are:grouproleuserroleSubordinatesroleSubordinatesInternalownercreatorpartnerUsercustomerPortalUserportalRoleportalRoleSubordinatesallInternalUsers—all Salesforce users in the organization |

## ApprovalPageField

Represents the selection of fields to display on the approval page, where an approver can view the approval request details and approve or reject the record.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string[] | An array of fields that are displayed on the page for the approver to approve or reject the record. |

## ApprovalStep

Represents a step in the approval process. Approval steps define the chain of approval for a particular approval process. Each step determines which records can advance to that step, who to assign approval requests to, and whether to let each approver’s delegate respond to the requests. The first step specifies what to do if a record doesn’t advance to that step. Later steps specify what happens if an approver rejects the request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   The order of the ApprovalStep entries in the approval process definition determines the order in which the approval steps are executed.
-   After an approval process is activated, you can’t add, delete, or change the order of the steps or change its reject or skip behavior, even if the process is inactive.
-   Each approval process supports up to 30 steps.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowDelegate | boolean | Whether to allow delegated approvers in this step of the approval process. A delegated approver is a user appointed by an assigned approver as an alternate for approval requests. |
| approvalActions | ApprovalAction | Specifies which workflow actions to execute when a record is approved in this step of the approval process. |
| assignedApprover | ApprovalStepApprover | Specifies the assigned approvers for this step of the approval process. |
| description | string | Describes the approval step. |
| entryCriteria | ApprovalEntryCriteria | Determines which records can enter this step of the approval process. |
| ifCriteriaNotMet | StepCriteriaNotMetType (enumeration of type string) | Specifies what to do for records that don't meet the entry criteria. Valid values are:ApproveRecord—Approve the request and execute all final approval actions.RejectRecord—Reject the request and execute all final rejection actions. This option is available only for the first step in the approval process.GotoNextStep—Skip to the next approval step. If you select this option for the first approval step, and a record doesn’t meet the entry criteria for any other step, the record is rejected. |
| label | string | Required. Name of the approval step. |
| name | string | Required. Unique name of the approval step. It must contain only underscores and alphanumeric characters, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The requirement for uniqueness is only within the specific approval process. |
| rejectBehavior | ApprovalStepRejectBehavior | Required, except for the first step in the approval process. Specifies what happens if the approver rejects the request during this approval step, unless it's the first step in the approval process.If the approver rejects the request in the first step in the approval process, the reject behavior is determined by the finalRejectionActions. |
| rejectionActions | ApprovalAction | Specifies which workflow actions to execute when a record is rejected in this step of the approval process. |

## ApprovalAction

Represents the actions that occur as a result of an approval process.

| Field Name | Field Type | Description |
| --- | --- | --- |
| action | WorkflowActionReference[] | An array of workflow actions to execute. |

## ApprovalStepApprover

Represents the assigned approvers for an approval step. Each step supports up to 25 approvers.

| Field Name | Field Type | Description |
| --- | --- | --- |
| approver | Approver[] | An array of assigned approvers for this step of the approval process. |
| whenMultipleApprovers | RoutingType (enumeration of type string) | Specifies how to handle approval or rejection when multiple approvers are assigned to the step. Valid values are:Unanimous—(Default) Require unanimous approval from all approvers for this step. If any of the approvers reject the request, the approval request for this step is rejected.FirstResponse—Approve or reject based on the first response. |

## Approver

Represents an assigned approver for an approval step. Check out Considerations for Setting Approvers in Salesforce Help.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Identifies an assigned approver. This field is required, except when the type is one of the following and the name is ignored:adhocuserHierarchyField |
| type | NextOwnerType (enumeration of type string) | Combined with the specified name, type identifies an assigned approver. Valid values are:adhoc—The approver for the step must be selected manually. For the first step, the submitter selects the approver. For the second and later steps, the approver for the previous step selects the approver. For this value, exclude the name field.user—A user in your organization. For this value, enter a username for the name field.userHierarchyField—A user specified in a standard or custom user hierarchy field, such as the standard Manager field. For this value, exclude the name field. The user hierarchy field must be defined in the nextAutomatedApprovers for the approval process.relatedUserField—A user specified in a user lookup field on the submitted record, such as the Last Modified By field. For this value, enter the name of the user lookup field for the name field.queue—Automatically assign to a queue. For this value, enter the name of the queue for the name field. |

## ApprovalEntryCriteria

Represents the criteria that records must meet to enter the approval process or an approval step. Specify either filter criteria or a formula, but not both.

| Field Name | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Filter logic for criteriaItems. Exclude this field if you enter a formula. |
| criteriaItems | FilterItem[] | Filter criteria that a record must meet to enter the approval process or approval step.Approval processes don’t support valueField entries in filter criteria. |
| formula | string | Formula that must evaluate to true for a record to enter the approval process or approval step. |

## ApprovalStepRejectBehavior

Represents what happens if the approver rejects the request during this approval step, unless it's the first step in the approval process. For the first step in the approval process, the reject behavior is determined by the approval process's final rejection actions.

| Field Name | Field Type | Description |
| --- | --- | --- |
| type | StepRejectBehaviorType (enumeration of type string) | Not allowed in the first step of the approval process. Valid values are:RejectRequest—Rejects the request even if previous steps were approved. Salesforce performs all rejection actions specified for this step and all final rejection actions.BackToPrevious—Rejects the request, and returns the approval request to the previous approver. Salesforce performs all rejection actions specified for this step. |

## NextAutomatedApprover

Represents the user hierarchy field to use as the next automated approver for the approval process. If defined, the user specified in the hierarchy field can be automatically assigned as the approver in one or more approval steps.

| Field Name | Field Type | Description |
| --- | --- | --- |
| useApproverFieldOfRecordOwner | boolean | Required. Whether the first executed approval step uses the specified userHierarchyField in the record owner’s user record—instead of the submitter’s user record—as the approver. All remaining steps use the specified userHierarchyField in the user record of the preceding step’s approver. |
| userHierarchyField | string | Required. Standard or custom user hierarchy field whose value specifies which user to assign as the approver. For example, the standard Manager hierarchy field can be used to assign approvers for employee PTO (paid time off) requests. |

## Declarative Metadata Sample Definition

The following is an example of an ApprovalProcess component:

```

```

## Wildcard Support in the Manifest File

Use the wildcard character \* (asterisk) in the package.xml manifest file to retrieve all approval processes for all objects. You can’t use it to retrieve a subset of approval processes. Syntax such as Lead.\* isn’t supported. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<allowedSubmitters> 
    <type>allInternalUsers</type>
</allowedSubmitters>  
<allowedSubmitters>
    <submitter>myGroup</submitter>
    <type>group</type>
</allowedSubmitters>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ApprovalProcess xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>false</active>
    <allowRecall>false</allowRecall>
    <allowedSubmitters>
        <type>owner</type>
    </allowedSubmitters>
    <allowedSubmitters>
        <submitter>USSalesRep</submitter>
        <type>role</type>
    </allowedSubmitters>
    <allowedSubmitters>
        <submitter>MarketingGroup</submitter>
        <type>group</type>
    </allowedSubmitters>
    <allowedSubmitters>
        <submitter>kcooper@example.com</submitter>
        <type>user</type>
    </allowedSubmitters>
    <approvalPageFields>
        <field>Name</field>
        <field>Owner</field>
        <field>MyLeadCustomField__c</field>
        <field>Address</field>
    </approvalPageFields>
    <approvalStep>
        <allowDelegate>false</allowDelegate>
        <approvalActions>
            <action>
                <name>LeadApprovedTask1</name>
                <type>Task</type>
            </action>
            <action>
                <name>LeadApprovedTask2</name>
                <type>Task</type>
            </action>
        </approvalActions>
        <assignedApprover>
            <approver>
                <type>adhoc</type>
            </approver>
        </assignedApprover>
        <label>Step1</label>
        <name>Step1</name>
        <rejectionActions>
            <action>
                <name>LeadRejectedTask</name>
                <type>Task</type>
            </action>
        </rejectionActions>
    </approvalStep>
    <approvalStep>
        <allowDelegate>false</allowDelegate>
        <assignedApprover>
            <approver>
                <type>userHierarchyField</type>
            </approver>
        </assignedApprover>
        <entryCriteria>
            <criteriaItems>
                <field>Lead.CreatedDate</field>
                <operation>greaterThan</operation>
                <value>3/25/2013</value>
            </criteriaItems>
            <criteriaItems>
                <field>User.IsActive</field>
                <operation>notEqual</operation>
                <value>true</value>
            </criteriaItems>
        </entryCriteria>
        <ifCriteriaNotMet>ApproveRecord</ifCriteriaNotMet>
        <label>Step2</label>
        <name>Step2</name>
        <rejectBehavior>
            <type>RejectRequest</type>
        </rejectBehavior>
    </approvalStep>
    <approvalStep>
        <allowDelegate>true</allowDelegate>
        <assignedApprover>
            <approver>
                <name>MarketingTeamQueue</name>
                <type>queue</type>
            </approver>
            <approver>
                <name>LastModifiedBy</name>
                <type>relatedUserField</type>
            </approver>
            <approver>
                <name>awheeler@example.com</name>
                <type>user</type>
            </approver>
            <whenMultipleApprovers>FirstResponse</whenMultipleApprovers>
        </assignedApprover>
        <entryCriteria>
            <formula>CONTAINS( MyLeadCustomField__c , 'Salesforce')</formula>
        </entryCriteria>
        <label>Step3</label>
        <name>Step3</name>
        <rejectBehavior>
            <type>BackToPrevious</type>
        </rejectBehavior>
    </approvalStep>
    <emailTemplate>MyFolder/LeadsNewassignmentnotification</emailTemplate>
    <enableMobileDeviceAccess>false</enableMobileDeviceAccess>
    <entryCriteria>
        <criteriaItems>
            <field>Lead.AnnualRevenue</field>
            <operation>greaterThan</operation>
            <value>10500</value>
        </criteriaItems>
        <criteriaItems>
            <field>Lead.MyLeadCustomField__c</field>
            <operation>equals</operation>
            <value>Salesforce</value>
        </criteriaItems>
    </entryCriteria>
    <finalApprovalActions>
        <action>
            <name>LeadEmailContacted</name>
            <type>Alert</type>
        </action>
    </finalApprovalActions>
    <finalApprovalRecordLock>true</finalApprovalRecordLock>
    <finalRejectionActions>
        <action>
            <name>ProcessRejectedMessageAction</name>
            <type>OutboundMessage</type>
        </action>
    </finalRejectionActions>
    <finalRejectionRecordLock>false</finalRejectionRecordLock>
    <initialSubmissionActions>
        <action>
            <name>LeadFieldUpdate</name>
            <type>FieldUpdate</type>
        </action>
        <action>
            <name>NewLeadEmail</name>
            <type>Alert</type>
        </action>
    </initialSubmissionActions>
    <label>SampleProcess</label>
    <nextAutomatedApprover>
        <useApproverFieldOfRecordOwner>false</useApproverFieldOfRecordOwner>
        <userHierarchyField>customlookupuserfield__c</userHierarchyField>
    </nextAutomatedApprover>
    <postTemplate>MyPostTemplate</postTemplate>
    <recallActions>
        <action>
            <name>ProcessRecalledMessageAction</name>
            <type>OutboundMessage</type>
        </action>
    </recallActions>
    <recordEditability>AdminOnly</recordEditability>
    <showApprovalHistory>false</showApprovalHistory>
</ApprovalProcess>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- WorkflowActionReference (atlas.en-us.api_meta.meta/api_meta/meta_workflow.htm)
- FilterItem (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
