---
title: "Marketing Cloud for Appexchange API Guide"
domain: mc-apis
topic: marketing-cloud-for-appexchange-api-guide
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.910Z
estimatedTokens: 5048
keywords: [Prerequisites, Security, Marketing, Cloud, Appexchange, API, presents, needed, capabilities, via, SOAP, Simple, Protocol, web, service, business, application, Accessing, Integration, Framework, WSDL, File, Developing, against, NET, call, Send, Email, Listing, Sending, Salesforce, Report, PHP, Sample]
---

> This guide presents the details needed to use the capabilities of Marketing Cloud for AppExchange via a SOAP (Simple Object Access Protocol) web service in your business application.

# Marketing Cloud for Appexchange API Guide

This guide presents the details needed to use the capabilities of Marketing Cloud for AppExchange via a SOAP (Simple Object Access Protocol) web service in your business application.

## Prerequisites

To begin to use these capabilities, your Marketing Cloud account must be fully configured for Marketing Cloud for AppExchange..NET 2.0 (C#) is used as the language for code samples.

## About Marketing Cloud for AppExchange

The Marketing Cloud for AppExchange API enables email to be sent to Salesforce.com reports, campaigns, contacts, or leads from Marketing Cloud via a SOAP web service. Opportunities to leverage Marketing Cloud for AppExchange's robust email sending and tracking capabilities together with Salesforce data in your business processes allow your business to access and record previously unreachable customer touch points. The Marketing Cloud for AppExchange API web service supports many business scenarios. The architecture of the web service allows many requests for Marketing Cloud for AppExchange send in a single call. Additionally, a send can consist of many Salesforce entities providing support for sophisticated business processes and marketing workflows.

Some scenarios that would benefit from this feature follow:

-   A custom landing page that sends an individual confirmation email to a Salesforce.com Lead or Contact
-   A Salesforce.com workflow that sends individual email based on Salesforce.com data events
-   Sending mass email to one or many Salesforce.com Campaigns or Reports on a recurring basis triggered from an external application
-   An application that creates a Marketing Cloud email based on Salesforce templates and sends an the email to Salesforce.com entities.

## Accessing the Integration Framework Web Service

In order to access the Marketing Cloud for AppExchange web service, you must first contact your Marketing Cloud account manager to configure your account and create a service user. A service user is a combination of user permissions and user settings. A user in your account is given permissions to access the web service and has the API User setting checked. Users who have the API User setting checked are not subject to the account's security settings.

### WSDL File

Marketing Cloud maintains multiple web service addresses for use with the Marketing Cloud for AppExchange SOAP web service. Use the correct address for your Marketing Cloud instance, and contact your Marketing Cloud representative if you have any questions regarding which WSDL file to use. The Marketing Cloud for Appexchange WSDL service is located at, for each instance:

| S1 Instance | https://etappx.exacttarget.com/etframeworksf.wsdl |
| --- | --- |
| S4 Instance | https://etappx.s4.exacttarget.com/etframeworksf.wsdl |
| S6 Instance | https://etappx.s6.exacttarget.com/etframeworksf.wsdl |
| S7 Instance | https://etappx.s7.exacttarget.com/etframeworksf.wsdl |

These files define the objects and calls exposed to SOAP clients to interact with Marketing Cloud.

### Security

Authenticating to the Marketing Cloud Integration Framework requires passing a WS-Security 1.0 security token in the SOAP header.

**Development Platform Support For WS-Security 1.0\***

| Platform | Library/Module |
| --- | --- |
| C++ | Axis2/C |
| Java | Axis2, XFire |
| .NET | WSE 3.0 |
| Perl | WSRF::Lite |
| PHP | soap-wsse.php, Axis2, Instantsvc |
| Python | pyGridWare |
| Ruby | wss4r |

This list is for information only and does not represent supported platforms.

## Developing against the Marketing Cloud for AppExchange API

This section provides code samples and guidance for developing against the Marketing Cloud for AppExchange API.

### .NET/C

This section presents a sample C# application to show the five required steps for sending a Marketing Cloud for AppExchange email. This example demonstrates the invocation and subsequent handling of API calls.

The result of all calls resulting in a outbound email are:

-   Email sent by Marketing Cloud contains personalization and dynamic content driven by Salesforce data mapped to Marketing Cloud attributes.
-   Email results are tracked in Marketing Cloud and Salesforce.

#### Using the Create call to Send an Email

This example uses a Create call to send a pre-existing Marketing Cloud email to recipients who reside on a Salesforce.com report:

1.  Establish secure authentication with Marketing Cloud.
2.  Specify a Marketing Cloud email using the email ID.
3.  Specify a target. Only one is specified by this call, but it contain many types of targets:
    -   **Salesforce ID** is the ID of the **Salesforce** object.
    -   **Salesforce** object type is the type of **Salesforce** object.
4.  Create a **SalesforceSend** object.
    -   Sets Targets
    -   Sets From Name (Optional)
    -   Sets From Address (Optional)
    -   Sets Targets to exclude from send (Optional)
5.  Send the **SalesforceSend** object into the web service **Create** call.
6.  Print result of the **Create** call to the console.

##### Listing 1: Sending a Marketing Cloud Email to a Salesforce Report

```apex
using System;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;
using System.Configuration;
using Microsoft.Web.Services3.Design;
using Microsoft.Web.Services3.Security.Tokens;
using et.integrationframework.sf.etForAppX;
namespace et.integrationframework.sf.unittests
{
public class SalesforceSendTest
{
string status = null; // overall status flag
string requestID = null;
/// <summary>
/// Sends a Marketing Cloud for AppExchange email
/// </summary>
public void SendSalesforceEmail()
{
// 1. Initialize the web service proxy
PartnerAPIWse etForAppx = new PartnerAPIWse();
// 1a. Set the username/password. This is using the Username token of WS-Security 1.0
UsernameTokenProvider utp = new UsernameTokenProvider(<username>, <password>);
etForAppx.SetClientCredential<UsernameToken>(utp.GetToken());
// 1b. Declare the policy
policy = new Policy(new UsernameOverTransportAssertion());
etForAppx.SetPolicy(policy);
// 2. Specify the email to be sent
Email email = new Email();
email.ID = 3079342; // The Marketing CloudID of the email
email.IDSpecified = true;
// 3. Specify the report to be receive the email
Target sfReport = new Target();
sfReport.ObjectID = "00O60000001PWEy";
sfReport.ObjectType = ObjectTypes.Report;
// 4. Create a SalesforceSend object
SalesforceSend sfs = new SalesforceSend();
sfs.Email = email;
sfs.Targets = new Target[] { sfReport };
sfs.FromName = "From Name";
sfs.FromAddress = "fromaddress@yourdomain.com";
// 5. Create a SalesforceSend object
CreateResult[] results = etForAppx.Create(new CreateOptions(), new APIObject[] { sfs }, out requestID, out status);
// 6. Print out overall results
Console.WriteLine(string.Format("Overall result: {0}. RequestID: {1}. Result Message: {2}", status, requestID, results[0].StatusMessage));
}
}
}
```

### PHP

The sample code below demonstrates how to connect your PHP development environment to the WSDL file.

```apex
<?php
require('soap-wsse.php');
class Marketing CloudSoapClient extends SoapClient {
    public $username = NULL;
    public $password = NULL;
    function __doRequest($request, $location, $saction, $version) {
        $doc = new DOMDocument();
        $doc->loadXML($request);
        $objWSSE = new WSSESoap($doc);
        $objWSSE->addUserToken($this->username, $this->password, FALSE);
        return parent::__doRequest($objWSSE->saveXML(), $location, $saction, $version);
     }
}
class Marketing Cloud_APIObject {
  public $Client; // Marketing Cloud_ClientID
  public $PartnerProperties; // Marketing Cloud_APIProperty
  public $CreatedDate; // dateTime
  public $ModifiedDate; // dateTime
  public $ID; // int
  public $ObjectID; // string
  public $CustomerKey; // string
  public $Owner; // Marketing Cloud_Owner
  public $CorrelationID; // string
}
class Marketing Cloud_ClientID {
  public $ClientID; // int
  public $ID; // int
  public $PartnerClientKey; // string
  public $UserID; // int
  public $PartnerUserKey; // string
  public $CreatedBy; // int
  public $ModifiedBy; // int
  public $EnterpriseID; // long
}
class Marketing Cloud_APIProperty {
  public $Name; // string
  public $Value; // string
}
class Marketing Cloud_Owner {
  public $Client; // Marketing Cloud_ClientID
  public $FromName; // string
  public $FromAddress; // string
}
class Marketing Cloud_AsyncResponseType {
  const None='None';
  const email='email';
  const FTP='FTP';
  const HTTPPost='HTTPPost';
}
class Marketing Cloud_AsyncResponse {
  public $ResponseType; // Marketing Cloud_AsyncResponseType
  public $ResponseAddress; // string
  public $RespondWhen; // Marketing Cloud_RespondWhen
  public $IncludeResults; // boolean
  public $IncludeObjects; // boolean
  public $OnlyIncludeBase; // boolean
}
class Marketing Cloud_ContainerID {
  public $APIObject; // Marketing Cloud_APIObject
}
class Marketing Cloud_Request {
}
class Marketing Cloud_Result {
  public $StatusCode; // string
  public $StatusMessage; // string
  public $OrdinalID; // int
  public $ErrorCode; // int
  public $RequestID; // string
  public $ConversationID; // string
  public $OverallStatusCode; // string
  public $RequestType; // Marketing Cloud_RequestType
  public $ResultType; // string
  public $ResultDetailXML; // string
}
class Marketing Cloud_Priority {
  const Low='Low';
  const Medium='Medium';
  const High='High';
}
class Marketing Cloud_Options {
  public $Client; // Marketing Cloud_ClientID
  public $SendResponseTo; // Marketing Cloud_AsyncResponse
  public $SaveOptions; // Marketing Cloud_SaveOptions
  public $Priority; // byte
  public $ConversationID; // string
  public $SequenceCode; // int
  public $CallsInConversation; // int
  public $ScheduledTime; // dateTime
  public $RequestType; // Marketing Cloud_RequestType
  public $QueuePriority; // Marketing Cloud_Priority
}
class Marketing Cloud_SaveOptions {
  public $SaveOption; // Marketing Cloud_SaveOption
}
class Marketing Cloud_TaskResult {
  public $StatusCode; // string
  public $StatusMessage; // string
  public $OrdinalID; // int
  public $ErrorCode; // int
  public $ID; // string
  public $InteractionObjectID; // string
}
class Marketing Cloud_RequestType {
  const Synchronous='Synchronous';
  const Asynchronous='Asynchronous';
}
class Marketing Cloud_RespondWhen {
  const Never='Never';
  const OnError='OnError';
  const Always='Always';
  const OnConversationError='OnConversationError';
  const OnConversationComplete='OnConversationComplete';
  const OnCallComplete='OnCallComplete';
}
class Marketing Cloud_SaveOption {
  public $PropertyName; // string
  public $SaveAction; // Marketing Cloud_SaveAction
}
class Marketing Cloud_SaveAction {
  const AddOnly='AddOnly';
  const _Default='Default';
  const Nothing='Nothing';
  const UpdateAdd='UpdateAdd';
  const UpdateOnly='UpdateOnly';
  const Delete='Delete';
}
class Marketing Cloud_CreateRequest {
  public $Options; // Marketing Cloud_CreateOptions
  public $Objects; // Marketing Cloud_APIObject
}
 class Marketing Cloud_CreateResult {
  public $NewID; // int
  public $NewObjectID; // string
  public $Object; // Marketing Cloud_APIObject
  public $CreateResults; // Marketing Cloud_CreateResult
  public $ParentPropertyName; // string
}
class Marketing Cloud_CreateResponse {
  public $Results; // Marketing Cloud_CreateResult
  public $RequestID; // string
  public $OverallStatus; // string
}
class Marketing Cloud_CreateOptions {
  public $Container; // Marketing Cloud_ContainerID
}
class Marketing Cloud_UpdateOptions {
  public $Container; // Marketing Cloud_ContainerID
  public $Action; // string
}
class Marketing Cloud_UpdateRequest {
  public $Options; // Marketing Cloud_UpdateOptions
  public $Objects; // Marketing Cloud_APIObject
}
class Marketing Cloud_UpdateResult {
  public $Object; // Marketing Cloud_APIObject
  public $UpdateResults; // Marketing Cloud_UpdateResult
  public $ParentPropertyName; // string
}
class Marketing Cloud_UpdateResponse {
  public $Results; // Marketing Cloud_UpdateResult
  public $RequestID; // string
  public $OverallStatus; // string
}
class Marketing Cloud_Locale {
  public $LocaleCode; // string
}
class Marketing Cloud_Email {
  public $Name; // string
  public $Folder; // string
  public $CategoryID; // int
  public $HTMLBody; // string
  public $TextBody; // string
  public $ContentAreas; // Marketing Cloud_ContentArea
  public $Subject; // string
  public $IsActive; // boolean
  public $IsHTMLPaste; // boolean
  public $ClonedFromID; // int
  public $Status; // string
  public $EmailType; // string
  public $CharacterSet; // string
  public $HasDynamicSubjectLine; // boolean
  public $ContentCheckStatus; // string
}
class Marketing Cloud_ContentArea {
  public $Key; // string
  public $Content; // string
  public $IsBlank; // boolean
  public $CategoryID; // int
  public $Name; // string
  public $Layout; // Marketing Cloud_LayoutType
  public $IsDynamicContent; // boolean
  public $IsSurvey; // boolean
}
class Marketing Cloud_LayoutType {
  const HTMLWrapped='HTMLWrapped';
  const RawText='RawText';
  const SMS='SMS';
}
class Marketing Cloud_Subscriber {
  public $EmailAddress; // string
  public $Attributes; // Marketing Cloud_Attribute
  public $SubscriberKey; // string
  public $UnsubscribedDate; // dateTime
  public $Status; // Marketing Cloud_SubscriberStatus
  public $PartnerType; // string
  public $EmailTypePreference; // Marketing Cloud_EmailType
  public $Lists; // Marketing Cloud_SubscriberList
  public $GlobalUnsubscribeCategory; // Marketing Cloud_GlobalUnsubscribeCategory
  public $SubscriberTypeDefinition; // Marketing Cloud_SubscriberTypeDefinition
  public $Addresses; // Marketing Cloud_Addresses
  public $PrimarySMSAddress; // Marketing Cloud_SMSAddress
  public $PrimarySMSPublicationStatus; // Marketing Cloud_SubscriberAddressStatus
  public $PrimaryEmailAddress; // Marketing Cloud_EmailAddress
  public $Locale; // Marketing Cloud_Locale
}
class Marketing Cloud_Addresses {
  public $Address; // Marketing Cloud_SubscriberAddress
}
class Marketing Cloud_Attribute {
  public $Name; // string
  public $Value; // string
  public $Compression; // Marketing Cloud_CompressionConfiguration
}
class Marketing Cloud_CompressionConfiguration {
  public $Type; // Marketing Cloud_CompressionType
  public $Encoding; // Marketing Cloud_CompressionEncoding
}
class Marketing Cloud_CompressionType {
  const gzip='gzip';
}
 class Marketing Cloud_CompressionEncoding {
  const base64='base64';
}
class Marketing Cloud_SubscriberStatus {
  const Active='Active';
  const Bounced='Bounced';
  const Held='Held';
  const Unsubscribed='Unsubscribed';
  const Deleted='Deleted';
}
class Marketing Cloud_SubscriberTypeDefinition {
  public $SubscriberType; // string
}
class Marketing Cloud_EmailType {
  const Text='Text';
  const HTML='HTML';
}
class Marketing Cloud_SubscriberList {
  public $Status; // Marketing Cloud_SubscriberStatus
  public $List; // Marketing Cloud_List
  public $Action; // string
  public $Subscriber; // Marketing Cloud_Subscriber
}
 class Marketing Cloud_List {
  public $ListName; // string
  public $Category; // int
  public $Type; // Marketing Cloud_ListTypeEnum
  public $Description; // string
  public $Subscribers; // Marketing Cloud_Subscriber
  public $ListClassification; // Marketing Cloud_ListClassificationEnum
}
 class Marketing Cloud_ListTypeEnum {
  const _Public='Public';
  const _Private='Private';
  const SalesForce='SalesForce';
  const GlobalUnsubscribe='GlobalUnsubscribe';
  const Master='Master';
}
 class Marketing Cloud_ListClassificationEnum {
  const Marketing CloudList='ExactTargetList';
  const PublicationList='PublicationList';
  const SuppressionList='SuppressionList';
}
class Marketing Cloud_Group {
  public $Name; // string
  public $Category; // int
  public $Description; // string
  public $Subscribers; // Marketing Cloud_Subscriber
}
class Marketing Cloud_GlobalUnsubscribeCategory {
  public $Name; // string
  public $IgnorableByPartners; // boolean
  public $Ignore; // boolean
}
class Marketing Cloud_ObjectTypes {
  const Lead='Lead';
  const Contact='Contact';
  const Campaign='Campaign';
  const Report='Report';
}
class Marketing Cloud_Target {
  public $ObjectType; // Marketing Cloud_ObjectTypes
  public $Filters; // Marketing Cloud_Filters
}
class Marketing Cloud_Filters {
  public $Filter; // Marketing Cloud_APIProperty
}
class Marketing Cloud_SalesforceSend {
  public $Email; // Marketing Cloud_Email
  public $SendDate; // dateTime
  public $FromAddress; // string
  public $FromName; // string
  public $Subject; // string
  public $IsMultipart; // boolean
  public $IndividualResults; // boolean
  public $Targets; // Marketing Cloud_Target
  public $Exclusions; // Marketing Cloud_Target
}
class Marketing Cloud_SubscriberAddress {
  public $AddressType; // string
  public $Address; // string
  public $Statuses; // Marketing Cloud_Statuses
}
class Marketing Cloud_Statuses {
  public $Status; // Marketing Cloud_AddressStatus
}
class Marketing Cloud_SMSAddress {
  public $Carrier; // string
}
class Marketing Cloud_EmailAddress {
  public $Type; // Marketing Cloud_EmailType
}
class Marketing Cloud_AddressStatus {
  public $Status; // Marketing Cloud_SubscriberAddressStatus
}
class Marketing Cloud_SubscriberAddressStatus {
  const OptedIn='OptedIn';
  const OptedOut='OptedOut';
  const InActive='InActive';
}
?>
```

When sending a message to a Contact or Lead, set the IndividualResults property to true if you want individual email results to show in your Salesforce instance.

The sample code below demonstrates how to create a Salesforce send through the API.

```
<?php
require('exacttarget_appexchange_soap_client.php');
$wsdl = 'https://etappx.exacttarget.com/etframeworksf.wsdl';
try{
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
        /* Set username and password here */
        $client->username = 'xxx';
        $client->password = 'xxx';
        //Setup the Email Send Definition
             $SFSend = new Marketing Cloud_SalesforceSend();
             $email = new Marketing Cloud_Email();
             $email->ID = '3099626';
             $SFSend->Email = $email;
             $SFSend->FromAddress = 'help@exacttarget.com';
             $SFSend->FromName = 'MAC';
             $contact = new Marketing Cloud_Target();
             $contact->ObjectID = '003A000000A7kKBIAZ';
             $contact->ObjectType = 'Contact';
             $SFSend->Targets = array(new SoapVar($contact, SOAP_ENC_OBJECT, 'Target', "http://exacttarget.com/wsdl/partnerAPI"));
             $object = new SoapVar($SFSend, SOAP_ENC_OBJECT, 'SalesforceSend', "http://exacttarget.com/wsdl/partnerAPI");
             $request = new Marketing Cloud_CreateRequest();
             $request->Options = NULL;
             $request->Objects = array($object);
             $results = $client->Create($request);
             var_dump($results);
} catch (Exception $e) {
echo 'Message: ' .$e->getMessage();
}
?>
```

### SOAP Sample

The sample code below demonstrates how to send to a single Lead in Salesforce:

```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <Header>
      <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
   </Header>
   <Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="SalesforceSend">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <Email>
               <PartnerKey xsi:nil="true"/>
               <ID>123456</ID>
               <ObjectID xsi:nil="true"/>
            </Email>
            <FromAddress>jdoe@example.com</FromAddress>
            <FromName>MAC</FromName>
            <Targets>
               <PartnerKey xsi:nil="true"/>
               <ObjectID>123456789abc</ObjectID>
               <ObjectType>Lead</ObjectType>
            </Targets>
         </Objects>
      </CreateRequest>
   </Body>
</Envelope>
```
