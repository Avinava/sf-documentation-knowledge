---
title: "Lead"
domain: channel-revenue-management-dev-guide
topic: lead
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:10.373Z
estimatedTokens: 5892
keywords: [Lead, prospect, Calls, Converted, Leads, Unread, Status, Picklist, Usage, Java, Sample, Associated, Objects]
---

# Lead

> Represents a prospect or lead.

# Lead

Represents a prospect or lead.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), merge(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceAssigneeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the sales rep designated to work the lead through their assigned cadence. This field is available in API version 48.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ActionCadenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the lead’s assigned cadence. This field is available in API version 48.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ActionCadenceState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the current action cadence tracker. This field is available in API version 50.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set.Possible values are:CompleteErrorInitializingPausedProcessingRunning |
| ActiveTrackerCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of cadences that are actively running on this lead. This field is available in API version 57.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ActivityMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric.This field is a relationship field.This field is available in API version 41.0 and later.Relationship NameActivityMetricRefers ToActivityMetric |
| ActivityMetricRollupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric rollup.This field is a relationship field.This field is available in API version 41.0 and later.Relationship NameActivityMetricRollupRefers ToActivityMetricRollup |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the address. Read-only. For details on compound address fields, see Address Compound Fields. |
| AnnualRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnnual revenue for the lead’s company. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for the lead’s address. |
| CleanStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the record's clean status compared with Data.com. .Several values for CleanStatus appear with different labels on the lead record.Values include:Acknowledged - ReviewedDifferentInactiveMatched - In SyncNotFound - Not FoundPending - Not ComparedSelectMatch - Select Match Skipped |
| Company | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The lead’s company.If person account record types have been enabled, and if the value of Company is null, the lead converts to a person account. |
| CompanyDunsNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Universal Numbering System (D-U-N-S) number, which is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. Industries and companies use D-U-N-S numbers as a global standard for business identification and tracking. Maximum size is 9 characters.This field is only available to organizations that use Data.com Prospector or Data.com Clean. |
| ConvertedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionObject reference ID that points to the account into which the lead converted.This is a relationship field.Relationship NameConvertedAccountRelationship TypeLookupRefers ToAccount |
| ConvertedContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionObject reference ID that points to the contact into which the lead converted.This is a relationship field.Relationship NameConvertedContactRelationship TypeLookupRefers ToContact |
| ConvertedDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionDate on which this lead was converted. |
| ConvertedOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionObject reference ID that points to the opportunity into which the lead has been converted.This is a relationship field.Relationship NameConvertedOpportunityRelationship TypeLookupRefers ToOpportunity |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your org. This field is available when Salesforce to Salesforce is enabled. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that this record is shared with. This field is available Salesforce to Salesforce is enabled. In API version 16.0 and later, this value is null. Use PartnerNetworkRecordConnection object to forward records to connections. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s country. |
| CountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the lead’s address. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| DandBCompanyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference ID to a Dun & Bradstreet® company record, associated with an account added from Data.com.Relationship NameDandbCompanyRefers ToDandbCompany |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe lead’s description. |
| Division | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as North America, Healthcare, or Consulting. Available only when the Division permission is enabled. |
| Email | TypeemailPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe lead’s email address. |
| EmailBouncedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionIf bounce management is activated and an email sent to the lead bounced, the date and time of the bounce. Email bounce functionality isn't triggered by record updates, including updates to this field. |
| EmailBouncedReason | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionIf bounce management is activated and an email sent to the lead bounced, the reason for the bounce. Email bounce functionality isn't triggered by record updates, including updates to this field. |
| ExportStatus | TypepicklistPropertiesFilter, Restricted picklist, SortDescriptionDerived field for the record map for Partner Connect. The export status of this opportunity to the partner’s connected org. To see this field, enable Partner Connect and add the Export Vendor Records to an Authorized Partner Org user permission to the cosell export user. See Set Up Partner Connect as a Vendor in Salesforce Help. Available in API version 62.0 and later. |
| Fax | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s fax number. |
| FirstCallDateTime | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe date and time of the first call placed to the lead. This field is available in API version 48.0 when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| FirstEmailDateTime | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe date and time of the first email sent to the lead. This field is available in API version 48.0 when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s first name up to 40 characters. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| GenderIdentity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe lead’s internal experience of their gender, which may or may not correspond to their designated sex at birth. |
| HasOptedOutOfEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, UpdateDescriptionIndicates whether the lead doesn’t want to receive email from Salesforce (true) or does (false). Label is Email Opt Out. |
| HasOptedOutOfFax | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the lead doesn’t want to receive faxes from Salesforce (true) or does (false). Label is FaxOpt Out. |
| IndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the data privacy record associated with this lead. This field is available if you enabled Data Protection and Privacy in Setup.Relationship NameIndividualRelationship TypeLookupRefers ToIndividual |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndustry in which the lead works. |
| IsConverted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the lead has been converted (true) or not (false). Label is Converted. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsPriorityRecord | TypebooleanPropertiesDefaulted on create, GroupDescriptionShows whether the user has marked the lead as important (True) or not (False). The default value is false. Available in API version 59.0 and later. |
| IsUnreadByOwner | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, lead has been assigned, but not yet viewed. See Unread Leads for more information. Label is Unread By Owner. |
| Jigsaw | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the ID of a contact in Data.com. If a lead has a value in this field, it means that a contact was imported as a lead from Data.com. If the contact (converted to a lead) wasn’t imported from Data.com, the field value is null. Maximum size is 20 characters. Available in API version 22.0 and later. Label is Data.com Key.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Don’t modify the value in the Jigsaw field. |
| JigsawContactId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the contact in reference to Jigsaw.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Don’t modify the value in the Jigsaw field. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is the most recent of either:Due date of the most recent event logged against the record.Due date of the most recently closed task associated with the record. |
| LastName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Last name of the lead up to 80 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of an address. Acceptable values are numbers between –90 and 90 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations |
| LeadSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe origin or source of the lead. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| MasterRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this record was deleted as the result of a merge, this field contains the ID of the record that was kept. If this record was deleted for any other reason, or hasn’t been deleted, the value is null.When using Apex triggers to determine which record was deleted in a merge event, this field’s value is the ID of the record that remains in Trigger.old. In Trigger.new, the value is null.This is a relationship field.Relationship NameMasterRecordRelationship TypeLookupRefers ToLead |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s middle name. Maximum size is 40 characters. |
| MobilePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s mobile phone number. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName, MiddleName, LastName, and Suffix up to 203 characters, including whitespaces. |
| NumberOfEmployees | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of employees at the lead’s company. Label is Employees. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the lead’s owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartnerAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the partner account for the partner user that owns this lead. Available if Partner Relationship Management is enabled or if digital experiences is enabled and you have partner portal licenses.In API version 16.0 and later, the Partner Account field is set to the appropriate account for the partner user that owns the lead. If the owner of the lead isn’t a partner user, this field has no value. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s phone number. |
| PhotoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionPath to be combined with the URL of a Salesforce instance (Example: https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the lead. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the lead. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code for the address of the lead. Label is Zip/Postal Code. |
| Pronouns | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe lead’s personal pronouns, reflecting their gender identity. Others can use these pronouns to refer to the lead in the third person. The entry is selected from a picklist of available values, which the administrator sets. Maximum 40 characters.Possible values are:He/HimHe/TheyNot ListedShe/HerShe/TheyThey/Them |
| Rating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRating of the lead. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalutation for the lead. |
| ScheduledResumeDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the action cadence tracker is going to resume after it’s paused or on a wait step. This field is available in API version 54.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| ScoreIntelligenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the intelligent field record that contains lead score. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for the address of the lead. |
| StateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the lead’s address. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStatus code for this converted lead. Status codes are defined in Status and represented in the API by the LeadStatus object. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet number and name for the address of the lead. |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s name suffix. Maximum size is 40 characters. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle for the lead, such as CFO or CEO. The maximum size is 128 characters. When converting a lead to a person account, the conversion fails if the lead Title field contains more than 80 characters. |
| Website | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWebsite for the lead. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=channel_revenue_management_dev_guide)

#### Note

When importing lead data, users need the Set Audit Fields upon Record Creation permission to assign values to audit fields such as CreatedDate. Audit fields are automatically updated during API operations unless you set these fields yourself.

## Converted Leads

Leads have a special state to indicate that they’ve been converted into an account, a contact, and an opportunity. Your client application can convert leads via the convertLead() call. Users can also convert leads in Salesforce. After a lead has been converted, it’s read only. However, you can query converted lead records. Only users with the View and Edit Converted Leads permission can update converted lead records.

Leads have several fields that indicate their converted status. These special fields are set when converting the lead in the user interface.

-   ConvertedAccountId
-   ConvertedContactId
-   ConvertedDate
-   ConvertedOpportunityId
-   IsConverted
-   Status

## Unread Leads

Leads have a special state to indicate that they haven’t been viewed or edited by the lead owner. In Salesforce, it’s helpful for users to know which leads have been assigned to them but that they haven’t touched yet. IsUnreadByOwner is true if the lead owner hasn’t yet viewed or edited the lead, and false if the lead owner has viewed or edited the lead at least one time.

## Lead Status Picklist

Each Status value corresponds to either a converted or unconverted status in the lead status picklist, as defined in the user interface. To obtain the lead status values in the picklist, a client application can query LeadStatus.

You can't convert a lead via the API by changing Status to one of the converted lead status values. When you convert qualified leads into an account, contact, and opportunity, you can select one of the converted status types for the lead. Leads with a converted status type are no longer available in the Leads tab, although you can include them in reports.

## Usage

If lead data is imported and you need to set the value for an audit field, such as CreatedDate, contact Salesforce Support. Audit fields are automatically updated during API operations unless you request to set these fields yourself.

To update a lead or to convert one with convertLead(), log in to your client application with the Edit permission on leads.

When you create, update, or upsert a lead, your client application can have the lead assigned to multiple user records based on assignment rules that have been configured in Salesforce.

To use this feature, your client application needs to set either of these options (but not both) in the AssignmentRuleHeader used in create or update:

| Field | Field Type | Details |
| --- | --- | --- |
| assignmentRuleId | reference | ID of the assignment rule to use. Can be an inactive assignment rule. If unspecified and useDefaultRule is true, then the default assignment rule is used.To find the ID for a given assignment rule, query the AssignmentRule object (specifying RuleType="leadAssignment"), iterate through the returned AssignmentRule records, find the one you want to use, retrieve its ID, and then specify its ID in this field in the AssignmentRuleHeader. |
| useDefaultRule | boolean | Specifies whether to use the default rule for rule-based assignment (true) or not (false). Default rules are assigned in the user interface. |

## Java Sample

The following Java sample shows how to automatically assign a newly created lead.

```

```

## C# Sample

The following C# sample shows how to automatically assign a newly created lead.

```

```

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LeadChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 44.0)

Change events are available for the object.

[LeadFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm) (API version 18.0)

Feed tracking is available for the object.

[LeadHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

LeadOwnerSharingRule

Sharing rules are available for the object.

LeadShare

Sharing is available for the object.

## Code Examples

```apex
package wsc;

import com.sforce.soap.enterprise.Connector;
import com.sforce.soap.enterprise.EnterpriseConnection;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;
import com.sforce.soap.enterprise.sobject.Lead;
import com.sforce.soap.enterprise.QueryResult; 
import com.sforce.soap.enterprise.SaveResult; 
import com.sforce.soap.enterprise.sobject.SObject;

public class LeadAssignment {

    static final String USERNAME = "REPLACE USER NAME";
    static final String PASSWORD = "REPLACE PASSWORD";
    static EnterpriseConnection connection;
	
    static LeadAssignment _leadAssignment;
	
    // Main
    public static void main(String[] args)
    { 
        // Establish connection and login
        ConnectorConfig config = new ConnectorConfig();
        config.setUsername(USERNAME);
        config.setPassword(PASSWORD);
        try {
            connection = Connector.newConnection(config);
            System.out.println("Logged in, endpoint: " + config.getAuthEndpoint());
        } catch (ConnectionException e1) {
            e1.printStackTrace();
        } 

        // Create lead 
        _leadAssignment = new LeadAssignment(); 
        try { 
            _leadAssignment.CreateLead(); 
        } catch (Exception e) { 
            e.printStackTrace(); 
        } 
        
        // Logout
        try {
            connection.logout();
            System.out.println("Logged out");
        } catch (ConnectionException ce) {
            ce.printStackTrace();
        }	            
    }
    
    public void CreateLead() throws ConnectionException
    {    	
        // Create a new Lead and assign various properties 
        Lead lead = new Lead(); 
     
        lead.setFirstName("Joe"); 
        lead.setLastName("Smith"); 
        lead.setCompany("ABC Corporation"); 
        lead.setLeadSource("API"); 
        // The lead assignment rule will assign any new leads that 
        // have "API" as the LeadSource to a particular user 
        
        // In this sample we will look for a particular rule and if found 
        // use the id for the lead assignment. If it is not found we will 
        // instruct the call to use the current default rule. You can't use 
        // both of these values together. 
        QueryResult qr = connection.query("SELECT Id FROM AssignmentRule WHERE Name = " +
                             "'Mass Mail Campaign' AND SobjectType = 'Lead'"); 
        if (qr.getSize() == 0) {
            connection.setAssignmentRuleHeader(null, true);
        } else {
            connection.setAssignmentRuleHeader(qr.getRecords()[0].getId(), false);
        }         
			 
        // Every operation that results in a new or updated lead will 
        // use the specified rule until the header is removed from the 
        // connection. 
        SaveResult[] sr = connection.create(new SObject[] {lead}); 
        for (int i=0;i<sr.length;i++) { 
            if (sr[i].isSuccess()) {
                System.out.println("Successfully created lead with id of: " + 
                                   sr[i].getId() + ".");
            } else {
                System.out.println("Error creating lead: " + 
                                   sr[i].getErrors()[0].getMessage());
            }
        } 		

        // This call effectively removes the header, the next lead will 
        // be assigned to the default lead owner. 
        connection.clearAssignmentRuleHeader();
    }    
}
```

```apex
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using LeadSample.sforce;

namespace LeadSample
{
    class LeadAssignment
    {
        private static SoapClient client;
        private static SoapClient apiClient;
        private static SessionHeader header;
        private static LoginResult loginResult;
        private static readonly string Username = "REPLACE USERNAME";
        private static readonly string Password = "REPLACE PASSWORD AND SECURITY TOKEN";

        // Create the proxy binding and login
        private LeadAssignment()
        {
            client = new SoapClient();

            try
            {
                loginResult = client.login(null, Username, Password);
            }
            catch (Exception e)
            {
                Console.WriteLine("Unexpected login error: " + e.Message);
                Console.WriteLine(e.StackTrace);
                return;
            }
            // Access API endpoint and create new client
            header = new SessionHeader();
            header.sessionId = loginResult.sessionId;
            apiClient = new SoapClient("Soap", loginResult.serverUrl);
        }

        [STAThread]
        static void Main(string[] args)
        {
            LeadAssignment leadAssignment = new LeadAssignment();
            try
            {
                leadAssignment.CreateLead();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
                Console.WriteLine(e.InnerException);
            }
            // logout
            client.logout(header);
        }

        public void CreateLead()
        {
            // Create a new Lead and assign various properties
            Lead lead = new Lead();

            lead.FirstName = "John";
            lead.LastName = "Brown";
            lead.Company = "ABC Corporation";
            lead.LeadSource = "Advertisement";
            // Setting the lead source for a pre-existing lead assignment rule. This 
            // rule was created outside of this sample and will assign any new leads
            // that have "Advertisement" as the LeadSource to a particular user.

            // Create the assignment rule header and add it to the proxy binding
            AssignmentRuleHeader arh = new AssignmentRuleHeader();

            // In this sample we will look for a particular rule and if found
            // use the id for the lead assignment. If it is not found we will
            // instruct the call to use the current default rule. Both these
            // values can't be used together.
            QueryResult qr = null;
            string query = "SELECT Id FROM AssignmentRule WHERE Name = " +
                "'Mass Mail Campaign' AND SobjectType = 'Lead'";
            try
            {
                LimitInfo[] limitArray = apiClient.query(
                    header, // sessionheader
                    null,   // queryoptions
                    null,   // mruheader
                    null,   // packageversionheader
                    query,  // SOQL query
                    out qr);
            }
            catch (Exception e)
            {
                Console.WriteLine("Unexpected query error: " + e.Message);
                Console.WriteLine(e.StackTrace);
            }
            if (qr.size == 0)
            {
                arh.useDefaultRule = true;
            }
            else
            {
                arh.assignmentRuleId = qr.records[0].Id;
            }

            // Create the lead using our Assignment Rule header
            LimitInfo[] li;
            SaveResult[] sr;
            apiClient.create(
                header, // sessionheader
                arh,    // assignmentruleheader
                null,   // mruheader
                null,   // allowfieldtrunctionheader
                null,   // disablefeedtrackingheader
                null,   // streamingenabledheader
                null,   // allornoneheader
                null,   // duplicateruleheader
                null,   // localeoptions
                null,   // debuggingheader
                null,   // packageversionheader
                null,   // emailheader
                new sObject[] { lead },
                out li,
                out sr);
            foreach (SaveResult s in sr)
            {
                if (s.success)
                {
                    Console.WriteLine("Successfully created Lead with ID: {0}", s.id);
                }
                else
                {
                    Console.WriteLine("Error creating Lead: {0}", s.errors[0].message);
                }
            }
        }
    }
}
```
