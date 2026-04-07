---
title: "Manage Enterprise 2.0 Accounts"
domain: mc-apis
topic: manage-enterprise-20-accounts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:17.845Z
estimatedTokens: 13213
keywords: [Users, Roles, Manage, Enterprise, 2.0, Accounts, managing, business, units, permission, inside, account, SOAP, API, several, aspects, including, mass, provisioning, administration, multiple, user, AccountUser, Role, Unit, Status, Subscriber, Triggered, Sample, Code, NET, New, Predefined, Permissions, Remove, Envelope, Add, Contained, Retrieve, Unsubscribed, Subscribers, Level, Creating, Extension, Email, PHP, Retrieving, Results, Send, Updating, Filter, Items]
---

> This page contains information about managing business units, users, roles, and permission sets inside an Enterprise 2.0 account using the SOAP API. You can manage several aspects of the account with the SOAP API, including the mass provisioning and administration of multiple business units and user

# Manage Enterprise 2.0 Accounts

This page contains information about managing business units, users, roles, and permission sets inside an Enterprise 2.0 account using the SOAP API. You can manage several aspects of the account with the SOAP API, including the mass provisioning and administration of multiple business units and users.

## Mass Administration of Enterprise 2.0 Accounts

You can use the SOAP API to create, retrieve, and update users in your Enterprise 2.0 account. You can also create, retrieve, update, and delete business units within that account. You can use exports from other databases to create the information to be used in the calls, as long as the information in question can be expressed in the API calls.

## Account Object

The Account object contains a new parent account node that can pull information on the parent account with a Retrieve call. This information includes:

-   The AccountID of the parent account
-   The name of the parent account
-   The CustomerKey of the parent account
-   The AccountType for the parent account
-   The ParentID for the parent account

If you want to retrieve all sub-accounts of the parent account, include the following code in your API call:

```
retrieveRequest.QueryAllAccounts=true;
retrieveRequest.QueryAllAccountsSpecified = true; //scans all sub-Accounts of parent-Account
```

## AccountUser Object

The AccountUser object can be associated with default business units and associated business units. The default business unit indicates the business unit that account user logs into by default, and the associated business units are more business units that user can log in to. You can assign these business units as well as roles with a call that includes the ID or the customer key of the business units. Note that you must use either ID or customer key for these assignments; you cannot mix and match the two types.

## Role Object

If no roles are explicitly assigned, a role defaults to information from the system database. By default, all Boolean values equal false. You can force inheritance of roles for both permission sets and permissions, but you can't create permission sets or permissions for roles.

## Business Units

You can create, retrieve, and update business units in an Enterprise 2.0 account using the customer key on the Account object. You can also assign roles to business units by specifying the customer key and the collection of roles to be assigned in the call. These roles apply to all users signed in to that business unit, and any denied permissions override the permissions and permission sets of the individual role.You can assign a time zone to a business unit with an Update call after creating the business unit with a Create call. All child XML rules set on the parent account apply to child business units and match the settings in Marketing Cloud.

### Business Unit Status

You can set the status of a business unit and affect the ability to log into and send from that business unit until a further status change occurs. The four possible statuses for business units (applicable to all levels of the account, including the parent business unit) include the following:

-   **Normal** \- Users can log into the business unit and interact with it as expected.
-   **Locked** - The business unit exists, but no users can log into it via Marketing Cloud or the SOAP API. The business unit cannot conduct any sends.
-   **Suspended** - The business unit exists and users can log into it, but the business unit cannot conduct any sends or create any jobs.
-   **Canceled** - Nobody can log into the business unit. No jobs or sends can be created, and the system deactivates the applicable account.

You can specify the status of a business unit while creating it via the API by entering one of the values listed above for the ObjectState property on the Account object.When activating or deactivating a business unit with a change in status, IsActive and IsActiveSpecified become required fields. Reviewthe sample .NET code below:

```apex
private static void UpdateAccount(int mid, string acctState)
        {
            Console.WriteLine("updating account........." + mid.ToString());
            PartnerAPI.Account bu = new Account();
            bu.ID = mid;
            bu.IDSpecified = true;
            //if (acctState.ToLower().Equals("cancelled"))
            //{
                bu.IsActive = 1;
                bu.IsActiveSpecified = true;
            //}
            bu.InheritAddress = false;
            bu.InheritAddressSpecified = true;
            bu.BusinessName = "NorthernTrailOutfitters";
            bu.City = "Indianapolis";
            bu.Country = "USA";
            bu.Zip = "46204";
            bu.State = "IN";
            bu.Address = "123 Acacia Drive";
             bu.ObjectState = acctState; // "Normal"; // "Locked";// "Suspended"; //"Canceled";
            //myDE.Client = new ClientID();
            //myDE.Client.ClientID1 = localMemberID;
            //myDE.Client.ClientID1Specified = true;
            //myDE.Status = "DoNotImport";
            PartnerAPI.UpdateOptions options = new UpdateOptions();
            //make the api call
            string callStatus = CallUpdate(new PartnerAPI.APIObject[] { bu }, options, false);
            Console.WriteLine("Completed Updating Account " + mid.ToString() + " Press any key to continue");
            Console.ReadLine();
        }
```

## Users

You can create, retrieve, update, and delete users in an Enterprise 2.0 account using the customer key on the AccountUser object. You can also assign roles to users by specifying the customer key and the collection of roles to be assigned in the call. These roles apply to the user no matter which business unit they are logged into within the Enterprise 2.0 account, but business-unit-level denied permissions and permission sets override user permissions and permission sets.

Permission for Enterprise 2.0 users to create, update, or delete information persist from Marketing Cloud to the SOAP API. The API checks the permissions granted to an Enterprise 2.0 user and applicably restricts those actions in the API as well. For example, if an Enterprise 2.0 user cannot create a data extension in Marketing Cloud, they cannot create a data extension via the SOAP API, either. The API checks permissions assigned to a user and acts accordingly on any calls made by that user. The API does not check permissions for retrieve calls at this time. While you can assign roles and permission sets to Enterprise 2.0 users, you cannot assign granular permissions at this time.

## Roles

Roles reside at the enterprise level unless otherwise specified. Any permission set or permission denied at a business unit level applies to all users within that business unit, even if the permission is enabled for a specific user. Also, any permission sets or permissions denied to a specific user apply even if those permissions are enabled in a business unit.

You cannot create private or system roles, but you can update or modify these roles. You can assign roles to users, business units, and users within a business unit:

-   Roles assigned to users apply to all business units within an Enterprise 2.0 account unless otherwise dictated by the business unit.
-   Roles assigned to business units apply to all users logged into a business unit.
-   Roles assigned to users within a business unit apply only when that user is logged into that specific business unit.

To assign a role, you must specify the ObjectID for the role in the call.

To assign roles to a user, create a call using the AccountUser object and include the AccountUserID and the collection of roles to assign.

To assign roles to a business unit, create a call using the Account object and include the CustomerKey and the collection of roles to assign.

To assign roles to users within a business unit, create a call using the Account object and include all applicable AccountUsers with the applicable IDs and collections of roles.

You cannot delete a role from a user via the API. Save actions override default behavior. Otherwise, permissions sets and permissions are additive and don't overwrite previous assignments. You can use one call to update permission sets and roles and another call to handle the deletions to make sure all permission sets and permissions are set correctly.

## Subscriber Status

Triggered sends to data extensions in an Enterprise 2.0 account updates subscriber status information for only the business unit that generated the triggered send. Any change of status to held, bounced, or unsubscribe applies to that subscriber in that business unit only and does not affect sends from other business units.

Marketing Cloud displays the status of the subscriber on the all subscriber list based on the status of that subscriber in the Enterprise 2.0 administrative account. Changes at the business unit level don't reflect in that status. Ensure that you retrieve the status of a subscriber from the specific business unit for the most accurate information.

## Triggered Sends

The external key for a triggered send resides at the business unit level, and triggered sends from different business units in the same account can use the same external key. When making a call from the parent business unit, ensure that you pass the correct ClientID for that triggered send in your calls.

## Sample Code

Use the sample code below to manage tasks in an Enterprise 2.0 account via the SOAP API.

### Sample .NET Code - Create a New User in an Enterprise 2.0 Account with a Predefined Role

```apex
private static void CreateNewUserWithExistingRole(SoapClient client)
{
     AccountUser au = new AccountUser();
     au.Name = "Test User 2 from API";
     au.IsAPIUser = true;
     au.IsAPIUserSpecified = true;
     au.Client = new ClientID();
     au.Client.ID = 1234567;
     au.Client.IDSpecified = true;
     au.UserID = "XXXXXXX";
     au.Password = "XXXXXXX";
     au.Email = "useremail@example.com";
     au.DefaultBusinessUnit = 1234567;
     au.DefaultBusinessUnitSpecified = true;
     Role role = new Role();
     role.CustomerKey = "Agent";
     au.Roles = new Role[] { role };
     string requestId, status;
     CreateResult[] results = client.Create(new CreateOptions(), new APIObject[] { au }, out requestId, out status);
}
```

### Sample .NET Code - Create a New User in an Enterprise 2.0 Account with Specified Permissions

```apex
public partial class API_ADD_E20_USERS : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnAddSubs_Click(object sender, EventArgs e)
        {
          string Username, Password;

            Username = "XXXXX";
            Password = "XXXXX";
            SoapClient client = new Marketing CloudWebReference.SoapClient();
            client.ClientCredentials.UserName.UserName = Username;
            client.ClientCredentials.UserName.Password = Password;

                AccountUser accountUser = new AccountUser();
                accountUser.Name = "Angel Cruz";
                accountUser.UserID = "acruz@example.com";
                accountUser.IsAPIUser = true;
                accountUser.IsAPIUserSpecified = true;
                accountUser.IsLocked = false;
                accountUser.IsLockedSpecified = true;
                accountUser.Password = "XXXXX";
                accountUser.MustChangePassword = false;
                accountUser.MustChangePasswordSpecified = true;
                accountUser.Email = "acruz@example.com";
                accountUser.DefaultBusinessUnit = 1234546;
                accountUser.DefaultBusinessUnitSpecified = true;
                UserAccess access = new UserAccess();
                //3 CLIENT_ADMIN Add Users to Account
                //4 PRO_ADMIN Create/View Accounts
                access.ID = 3;
                access.IDSpecified = true; //.Net specific
                accountUser.UserPermissions = new UserAccess[] {access};

            //This tells that create user in subaccount

                ClientID clientID = new ClientID();
                // clientID.PartnerClientKey = account.PartnerKey;
                clientID.ID = 12345;
                clientID.IDSpecified = true;
                accountUser.Client = clientID;

                String requestId = null;
                String overAllStatus = null;
                CreateResult[] results = client.Create(new CreateOptions(), new APIObject[] { accountUser }, out requestId, out overAllStatus);

                string errorStr = null;

                if (results != null)
                {
                    errorStr += "Status Message ### <br/>";
                    foreach (CreateResult result in results)
                    {

                        errorStr += result.StatusMessage + "<br/>";
                    }
                    lblMessage.Text = errorStr;
                } else {
                    lblMessage.Text = "No results.";
                }

        }
    }
}
```

### Sample .NET Code - Remove a Subscriber to a List

```apex
private void DeleteSubscriber()
        {
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = "ccc";
            framework.ClientCredentials.UserName.Password = "ccc";
            String requestID;
            String status;
            Subscriber sub = new Subscriber();
            sub.EmailAddress = "help@example.com";
            sub.SubscriberKey = "help@example.com";
            SubscriberList sublist = new SubscriberList();
            sublist.ID = 1734234; // This is the ListID you want the subscriber removed from
            sublist.IDSpecified = true;
            sublist.Action = "delete";
            CreateOptions co = new CreateOptions();
            SaveOption saveOption = new SaveOption();
            saveOption.SaveAction = SaveAction.UpdateAdd;
            saveOption.PropertyName = "*";
            co.SaveOptions = new SaveOption[] { saveOption };

            sub.Lists = new SubscriberList[] { sublist };
            //Lines below are needed if the list is in a BU
            sub.Client = new ClientID();
            sub.Client.ID = 131464;
            sub.Client.IDSpecified = true;

            CreateResult[] cresults = framework.Create(co, new APIObject[] { sub }, out requestID, out status);
            foreach (CreateResult result in cresults)
            {
                Console.WriteLine(result.StatusMessage);
            }
            Console.WriteLine(requestID + ": " + status);
        }
```

### Sample SOAP Envelope - Remove Subscriber from a List

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsa:Action>Create</wsa:Action>
      <wsa:MessageID>urn:uuid:168bbf3d-394e-4656-ae57-2e96b4b568ae</wsa:MessageID>
      <wsa:ReplyTo>
         <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
      </wsa:ReplyTo>
      <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-d19fb7b0-ec6d-49a8-8fd3-796819ec7306">
            <wsse:Username>ccc</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">ccc</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options>
            <SaveOptions>
               <SaveOption>
                  <PropertyName>*</PropertyName>
                  <SaveAction>UpdateAdd</SaveAction>
               </SaveOption>
            </SaveOptions>
         </Options>
         <Objects xsi:type="Subscriber">
            <!--ClientID Node needed if List is in a BU-->
            <Client>
               <ID>121212</ID>
            </Client>
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <EmailAddress>help@example.com</EmailAddress>
            <EmailAddress>help@example.com</EmailAddress>
            <Lists>
               <PartnerKey xsi:nil="true"/>
               <ID>12345</ID>
               <ObjectID xsi:nil="true"/>
               <Action>delete</Action>
            </Lists>
         </Objects>
      </CreateRequest>
   </soap:Body>
</soap:Envelope>
```

### Sample SOAP Envelope - Add Subscriber to List

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">Create</a:Action>
        <a:MessageID>urn:uuid:5fba5384-6d75-43e2-a79f-4bd7c9e6e11d</a:MessageID>
        <a:ReplyTo>
            <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <o:UsernameToken u:Id="uuid-295f6e0f-3dcb-4ce0-95ab-1434cb542498-1">
                <o:Username>
                    USERNAME
                </o:Username>
                <o:Password>
                    PASSWORD
                </o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options>
                <SaveOptions>
                    <SaveOption>
                        <PropertyName>*</PropertyName>
                        <SaveAction>UpdateAdd</SaveAction>
                    </SaveOption>
                </SaveOptions>
            </Options>
            <Objects xsi:type="Subscriber">
                <Client>
                    <ID>123</ID> <!-- This is the ID of the Business Unit where the List Exists -->
                </Client>
                <ObjectID xsi:nil="true">
            </ObjectID>
            <EmailAddress>help@example.com</EmailAddress>
            <SubscriberKey>111111111111111</SubscriberKey>
            <Lists>
                <ID>123</ID>
                <ObjectID xsi:nil="true">
                </ObjectID>
                <Status>Active</Status>
                <Action>create</Action>
            </Lists>
            </Objects>
        </CreateRequest>
    </s:Body>
</s:Envelope>
```

### Sample SOAP Envelope - Add a Single Subscriber to Multiple Lists Contained in Multiple Business Units

#### Request

```
<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
       <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
          <Options>
             <SaveOptions>
                <SaveOption>
                   <PropertyName>*</PropertyName>
                   <SaveAction>UpdateAdd</SaveAction>
                </SaveOption>
             </SaveOptions>
          </Options>
          <Objects xsi:type="Subscriber">
             <Client>
                <ID>1234</ID>
             </Client>
             <PartnerKey xsi:nil="true"/>
             <ObjectID xsi:nil="true"/>
             <EmailAddress>acruz@exacttarget.com</EmailAddress>
             <SubscriberKey>subscriberKey</SubscriberKey>
             <Lists>
                <Client>
                   <ID>12345</ID>
                </Client>
                <PartnerKey xsi:nil="true"/>
                <ID>123456</ID>
                <ObjectID xsi:nil="true"/>
             </Lists>
          </Objects>
          <Objects xsi:type="Subscriber">
             <Client>
                <ID>1234567</ID>
             </Client>
             <PartnerKey xsi:nil="true"/>
             <ObjectID xsi:nil="true"/>
             <EmailAddress>acruz@example.com</EmailAddress>
             <SubscriberKey>subscriberKey</SubscriberKey>
             <Lists>
                <Client>
                   <ID>12345678</ID>
                </Client>
                <PartnerKey xsi:nil="true"/>
                <ID>123456789</ID>
                <ObjectID xsi:nil="true"/>
             </Lists>
          </Objects>
       </CreateRequest>
    </s:Body>
```

#### Response

```
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <env:Header xmlns:env="http://www.w3.org/2003/05/soap-envelope">
      <wsa:Action>CreateResponse</wsa:Action>
      <wsa:MessageID>urn:uuid:57144933-b856-4106-be42-65d245dc49c1</wsa:MessageID>
      <wsa:RelatesTo>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</wsa:RelatesTo>
      <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
      <wsse:Security>
         <wsu:Timestamp wsu:Id="Timestamp-22d54cd3-55a2-4c9a-9e6e-3ca5fe256fc4">
            <wsu:Created>2011-09-07T13:45:45Z</wsu:Created>
            <wsu:Expires>2011-09-07T13:50:45Z</wsu:Expires>
         </wsu:Timestamp>
      </wsse:Security>
   </env:Header>
   <soap:Body>
      <CreateResponse xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Results>
            <StatusCode>OK</StatusCode>
            <StatusMessage>Created Subscriber.</StatusMessage>
            <OrdinalID>0</OrdinalID>
            <NewID>481746861</NewID>
            <Object xsi:type="Subscriber">
               <Client>
                  <ID>12345</ID>
               </Client>
               <PartnerKey xsi:nil="true"/>
               <ID>123456</ID>
               <ObjectID xsi:nil="true"/>
               <EmailAddress>acruz@example.com</EmailAddress>
               <SubscriberKey>subscriberKey</SubscriberKey>
               <Lists>
                  <Client>
                     <ID>1234567</ID>
                  </Client>
                  <PartnerKey xsi:nil="true"/>
                  <ID>12345678</ID>
                  <ObjectID xsi:nil="true"/>
               </Lists>
            </Object>
         </Results>
         <Results>
            <StatusCode>OK</StatusCode>
            <StatusMessage>Created Subscriber.</StatusMessage>
            <OrdinalID>1</OrdinalID>
            <NewID>481746861</NewID>
            <Object xsi:type="Subscriber">
               <Client>
                  <ID>123456</ID>
               </Client>
               <PartnerKey xsi:nil="true"/>
               <ID>1234567</ID>
               <ObjectID xsi:nil="true"/>
               <EmailAddress>acruz@example.com</EmailAddress>
               <SubscriberKey>subscriberKey</SubscriberKey>
               <Lists>
                  <Client>
                     <ID>2345678</ID>
                  </Client>
                  <PartnerKey xsi:nil="true"/>
                  <ID>1234567</ID>
                  <ObjectID xsi:nil="true"/>
               </Lists>
            </Object>
         </Results>
         <RequestID>be24d95a-30f2-47ed-bcc1-355e59f06dce</RequestID>
         <OverallStatus>OK</OverallStatus>
      </CreateResponse>
   </soap:Body>
</soap:Envelope>
```

### Sample SOAP Envelope - Add Subscriber To A Single List

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">Create</a:Action>
        <a:MessageID>urn:uuid:5fba5384-6d75-43e2-a79f-4bd7c9e6e11d</a:MessageID>
            <a:ReplyTo>
                <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
            </a:ReplyTo>
            <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
            <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken u:Id="uuid-295f6e0f-3dcb-4ce0-95ab-1434cb542498-1">
                    <o:Username>
                        USERNAME
                    </o:Username>
                    <o:Password>
                        PASSWORD
                    </o:Password>
                </o:UsernameToken>
            </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options>
                <SaveOptions>
                    <SaveOption>
                        <PropertyName>*</PropertyName>
                        <SaveAction>UpdateAdd</SaveAction>
                    </SaveOption>
                </SaveOptions>
            </Options>
            <Objects xsi:type="Subscriber">
                <Client>
                    <ID>123</ID> <!-- This is the ID of the Business Unit where the List Exists -->
                </Client>
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>help@example.com</EmailAddress>
                <SubscriberKey>111111111111111</SubscriberKey>
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                    <Status>Active</Status>
                    <Action>create</Action>
                </Lists>
            </Objects>
        </CreateRequest>
    </s:Body>
</s:Envelope>
```

### Sample .NET Code - Retrieve Unsubscribed Subscribers at List Level

You can specify a ListID in a filter to retrieve results by specific lists.

```apex
public List<UnsubEvent> GetUnsubscribeTracking(string partnerUserKey, StackConfiguration stack)
        {
            string requestID;
            RetrieveRequest request = new RetrieveRequest();
            request.ObjectType = "UnsubEvent";
            request.RetrieveAllSinceLastBatch = true;
            request.RetrieveAllSinceLastBatchSpecified = true;
            request.RepeatLastResult = true;
            request.RepeatLastResultSpecified = true;
            request.QueryAllAccounts = true;
            request.QueryAllAccountsSpecified = true;
            request.Properties = new string[] { "PartnerKey", "EventDate" };
            request.ClientIDs = new ClientID[1];
            request.ClientIDs[0] = new ClientID();
            request.ClientIDs[0].PartnerUserKey = partnerUserKey;
            string overallStatus = "";
            APIObject[] results = null;
            List<APIObject> allResults = new List<APIObject>();
            try
            {
                overallStatus = wsApiSingleton.Instance.apiRetrieve(request, out requestID, out results, stack);
            }
            catch (Exception e)
            {
                throw new Exception("API Error in Retrieve UnsubEvent information", e);
            }
            if (results.Length <= 0)
            {
                throw new Exception("API Error in Retrieve UnsubEvent information no events returned");
            }
            if (overallStatus == "Error")
            {
                throw new Exception("API Error in Retrieve UnsubEvent information");
            }

            allResults.AddRange(results);
            while (overallStatus == "MoreDataAvailable")
            {
                request = new RetrieveRequest();
                request.ContinueRequest = requestID;
                try
                {
                    overallStatus = wsApiSingleton.Instance.apiRetrieve(request, out requestID, out results, stack);
                }
                catch (Exception e)
                {
                    throw new Exception("API Error in Retrieve UnsubEvent information", e);
                }
                if (results.Length <= 0)
                {
                    throw new Exception("API Error in Retrieve UnsubEvent information");
                }
                if (overallStatus == "Error")
                {
                    throw new Exception("API Error in Retrieve UnsubEvent information");
                }

                allResults.AddRange(results);
            }
            if (overallStatus.ToLower().Contains("error"))
            {
                throw new Exception(String.Format("Unsubscribe tracking returned an error result: {0}", overallStatus));
            }
            return allResults.ConvertAll(apiObject => (UnsubEvent)apiObject);
        }
```

### Sample SOAP Envelope - Retrieve Unsubscribed Subscribers at List Level

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">Retrieve</a:Action>
        <a:MessageID>urn:uuid:3e8eac09-5f8b-4b72-893d-48c7027c7830</a:MessageID>
        <a:ReplyTo>
            <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <o:UsernameToken u:Id="uuid-68c1ec09-bda5-417d-9d2a-8eca95af5298-1">
                <o:Username>
                    USERNAME
                </o:Username>
                <o:Password>
                    PASSWORD
                </o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <RetrieveRequest>
                <ObjectType>SubscriberList</ObjectType>
                <Properties>Subscriber.EmailAddress</Properties>
                <Properties>Subscriber.SubscriberKey</Properties>
                <Properties>ID</Properties>
                <Properties>Status</Properties>
                <Properties>List.ID</Properties>
                <Filter xsi:type="ComplexFilterPart">
                    <LeftOperand xsi:type="SimpleFilterPart">
                        <Property>List.ID</Property>
                        <SimpleOperator>equals</SimpleOperator>
                        <Value>INSERT ID HERE</Value>
                    </LeftOperand>
                    <LogicalOperator>AND</LogicalOperator>
                    <RightOperand xsi:type="SimpleFilterPart">
                        <Property>Status</Property>
                        <SimpleOperator>equals</SimpleOperator>
                        <Value>Unsubscribed</Value>
                    </RightOperand>
                </Filter>
            </RetrieveRequest>
       </RetrieveRequestMsg>
    </s:Body>
</s:Envelope>
```

### Sample .NET Code - Create a Subscriber List at the Business Unit Level

This sample code uses an API user at the top level to create a subscriber list at the business unit level.

```apex
private void btnCreateListinBU_Click(object sender, EventArgs e)
        {
            SoapClient framework = new SoapClient();
            framework.ClientCredentials.UserName.UserName = "MAC_API_USER_123";
            framework.ClientCredentials.UserName.Password = "XXXX";
            String requestID;
            String status;
            List list = new List();
            list.Description = "Test BU List";
            list.ListName = "Test BU List";
            CreateOptions co = new CreateOptions();
            SaveOption saveOption = new SaveOption();
            saveOption.SaveAction = SaveAction.UpdateAdd;
            saveOption.PropertyName = "*";
            co.SaveOptions = new SaveOption[] { saveOption };
            list.Client = new ClientID();
            list.Client.ID = 123;
            list.Client.IDSpecified = true;
            CreateResult[] cresults = framework.Create(co, new APIObject[] { list }, out requestID, out status);
            foreach (CreateResult result in cresults)
            {
                Console.WriteLine(result.StatusMessage);
            }
            Console.WriteLine(requestID + ": " + status);
        }
```

### Sample .NET Code - Creating a Data Extension at the Business Unit Level

The sample code below creates a data extension from an existing data extension template.

```apex
public void createDataExtensionFromTemplate(deFromTemplateType aDataExtension, int ClientID, StackConfiguration stack)
        {
            string requestID = "";
            string status = "";
            DataExtension dataExtension = new DataExtension();
            dataExtension.Name = aDataExtension.Name;
            dataExtension.Description = aDataExtension.Description;
            dataExtension.Template = new DataExtensionTemplate();
            dataExtension.Template.ObjectID = getDataExtensionTemplateID(aDataExtension.TemplateName, ClientID, stack);
            ClientID cid = new ClientID();
            cid.ID = ClientID;
            cid.IDSpecified = true;
            dataExtension.Client = cid;
            CreateResult[] createResults = null;
            try
            {
                createResults = wsApiSingleton.Instance.apiCreate(new CreateOptions(), new APIObject[] { dataExtension }, out requestID, out status, stack);
            }
            catch (Exception e)
            {
                throw new Exception("API Error in Create trying to Create DataExtension from Template " + dataExtension.Name, e);
            }
            if (createResults.Length != 1)
            {
                throw new Exception("API Error in Create trying to DataExtension from Template " + dataExtension.Name);
            }
            if (status == "Error")
            {
                throw new Exception("API Error in Create trying to DataExtension from Template " + dataExtension.Name + ((Result)(createResults[0])).StatusMessage);
            }
        }

        public string getDataExtensionTemplateID(string dateExtensionTemplateName, int ClientID, StackConfiguration stack)
        {
            string status = "";
            string requestID = "";
            APIObject[] extensions;
            RetrieveRequest deRetrieveRequest = new RetrieveRequest();
            deRetrieveRequest.Properties = new string[] { "ObjectID", "Name", "CustomerKey" };
            deRetrieveRequest.ObjectType = "DataExtensionTemplate";
            deRetrieveRequest.ClientIDs = new ClientID[1];
            deRetrieveRequest.ClientIDs[0] = new ClientID();
            deRetrieveRequest.ClientIDs[0].IDSpecified = true;
            deRetrieveRequest.ClientIDs[0].ID = ClientID;
            SimpleFilterPart sfp = new SimpleFilterPart();
            sfp.Property = "Name";
            sfp.SimpleOperator = SimpleOperators.equals;
            sfp.Value = new string[] { dateExtensionTemplateName };
            deRetrieveRequest.Filter = sfp;
            status = wsApiSingleton.Instance.apiRetrieve(deRetrieveRequest, out requestID, out extensions, stack);
            if (extensions.Length != 1)
            {
                throw new Exception("couldn't fetch data extension template");
            }
            DataExtensionTemplate det = extensions[0] as DataExtensionTemplate;
            return det.ObjectID;
        }
```

### Sample SOAP Envelope - Creating a Data Extension at the Business Unit Level

This SOAP envelope illustrates how an API user at the top level creates a data extension at the business unit level.

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:par="http://exacttarget.com/wsdl/partnerAPI" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-4" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <par:CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <par:Objects xsi:type="DataExtension">
            <par:Client>
               <par:ID>12345</par:ID>
            </par:Client>
            <par:CustomerKey>6789</par:CustomerKey>
            <par:Name>BUDataExtension</par:Name>
            <par:Description>DataExtensionDescription</par:Description>
            <par:Fields>
               <par:Field>
                  <par:Name>SMTP_ADDR</par:Name>
                  <par:IsPrimaryKey>true</par:IsPrimaryKey>
                  <par:IsRequired>true</par:IsRequired>
                  <par:FieldType>EmailAddress</par:FieldType>
               </par:Field>
               <par:Field>
                  <par:Name>ChannelMemberID</par:Name>
                  <par:IsRequired>true</par:IsRequired>
                  <par:FieldType>Number</par:FieldType>
                  <par:DefaultValue>1234567</par:DefaultValue>
               </par:Field>
            </par:Fields>
            <par:IsSendable>true</par:IsSendable>
            <par:SendableDataExtensionField>
               <par:Name>SMTP_ADDR</par:Name>
            </par:SendableDataExtensionField>
            <par:SendableSubscriberField>
               <par:Name>Email Address</par:Name>
            </par:SendableSubscriberField>
         </par:Objects>
      </par:CreateRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

### Sample .NET Code - Create an Email at the Business Unit Level

```
Dim requestID As [String]
Dim status As [String]
Dim email As New Email()
Dim ClientIds As New ClientID()
With ClientIds
    .ID = 1058396
    .IDSpecified = True
End With
email.Client = ClientIds
email.Name = "Test2"
email.Subject = "My Subject "
email.HTMLBody = "<center>##My content</center>"
email.TextBody = "My Content"
email.CharacterSet = "iso-8859-1"
'email folder ID
email.CategoryID = 282
email.CategoryIDSpecified = True
Dim results As CreateResult() = client.Create(New CreateOptions(), New APIObject() {email}, requestID, status)
For Each result As CreateResult In results
    Console.WriteLine(result.StatusCode)
    Console.WriteLine(result.StatusMessage)
    Console.WriteLine(result.RequestID)
    Try
        'Get New ID
        Dim EmailMsgID as string = result.NewID
    Catch ex As Exception
    End Try
Next
Console.WriteLine(requestID & ": " & status)
```

### Sample .NET Code - Create a New Business Unit

```
BusinessUnit account = new BusinessUnit();
                        account.AccountType = AccountTypeEnum.BUSINESS_UNIT;
                        account.Name = Request.Form["bu_name"];
                        account.FromName = "Angela Cruz";
                        account.Email = "acruz@example.com";
                        account.InheritAddress = true;
                        account.BrandIDSpecified = false;
                        account.InheritAddressSpecified = true;
                        account.ParentID = 12345;
                        account.ParentIDSpecified = true;
                        account.Client = new ClientID();
                        account.Client.ID = 123456;
                        account.Client.IDSpecified = true;
                        APIObject[] apiObjects = { account };
                        String requestId = null;
                        String overAllStatus = null;
                        //Create the BU and populate the results object with the result
                        CreateResult[] results = client.Create(new CreateOptions(), apiObjects, out requestId, out overAllStatus);
                        json_results["status"] = overAllStatus;
                        json_results["payload"] = results[0].StatusMessage + " : " + results[0].ErrorCode;
```

### Sample PHP Code - Create a New Business Unit and a New User

```
<?php
echo '<pre>';
$path = $_SERVER[DOCUMENT_ROOT].'/00 Includes/';
require($path . 'exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';

$fullname = "Angela Cruz";
$email = "acruz@example.com";
$username = "acruz";
try{
    /* Create the Soap Client */
    $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
    /* Set username and password here */
    $client->username = 'xxxxx';
    $client->password = 'xxxxxx';
    $clientID = new Marketing Cloud_ClientID();
    $clientID -> ClientID = 'E2.0 ADMIN ACCOUNT MID';
    $clientID -> ClientIDSpecified = true;

//create new business unit
    $businessUnit = new Marketing Cloud_Account();
    $businessUnit -> Name = $fullname;
    $businessUnit -> AccountType = 'BUSINESS_UNIT';
    $businessUnit -> ParentID = 'MID OF PARENT BU' ;
    $businessUnit -> Email = $email;
    $businessUnit -> FromName = $fullname;
    $businessUnit -> BusinessName = 'BusinessName';
    $businessUnit -> Address = 'Address';
    $businessUnit -> City = 'City';
    $businessUnit -> State = 'ST';
    $businessUnit -> Zip = 'XXXXX';

    $object = new SoapVar($businessUnit, SOAP_ENC_OBJECT, 'BusinessUnit', "http://exacttarget.com/wsdl/partnerAPI");

    $request = new Marketing Cloud_CreateRequest();

    $requestOptions = new Marketing Cloud_CreateOptions();
    $saveOption = new Marketing Cloud_SaveOption();
    $saveOption->PropertyName = "BusinessUnit";
    $saveOption->SaveAction = "UpdateAdd";
    $requestOptions->SaveOptions[] = new SoapVar($saveOption, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");

    $request->Options = new SoapVar($requestOptions, SOAP_ENC_OBJECT, 'CreateOptions', "http://exacttarget.com/wsdl/partnerAPI");
    $request->Objects = array($object);

    $results = $client->Create($request);

    $mid = $results->Results->NewID;

    print_r($results);

    // Create New User
     $role -> CustomerKey = 'KEY_HERE';
     $roles = array($role);
     $user = new Marketing Cloud_AccountUser();
     $user -> UserID = $username;
     $user -> Email = $email;
     $user -> NotificationEmailAddress = $email;
     $user -> Name = $fullname;
     $user -> Password = 'xxxxxx';
     $user -> ActiveFlag = 'True';
     $user -> ChallengePhrase = "What is?";
     $user -> ChallengeAnswer = "It is.";
     $user -> DefaultBusinessUnit = $mid;
     $user -> AssociatedBusinessUnits = $mid;
     $user -> IsApiUser = false;
     $user -> MustChangePassword = true;
     $user -> Roles = $roles;
     $user -> Client = $clientID;
     $user -> Delete = 0;

     $object = new SoapVar($user, SOAP_ENC_OBJECT, 'AccountUser', "http://exacttarget.com/wsdl/partnerAPI");

     $request = new Marketing Cloud_CreateRequest();

     // Configure Upsert Capabilities for the CreateRequest
     $requestOptions = new Marketing Cloud_CreateOptions();
     $saveOption = new Marketing Cloud_SaveOption();
     $saveOption->PropertyName = "AccountUser"; // Specify the Object upsert applies to
     $saveOption->SaveAction = "UpdateAdd"; // Specify upsert save action
     $requestOptions->SaveOptions[] = new SoapVar($saveOption, SOAP_ENC_OBJECT, 'SaveOption', "http://exacttarget.com/wsdl/partnerAPI");

     // Apply options and object to request
     $request->Options = new SoapVar($requestOptions, SOAP_ENC_OBJECT, 'CreateOptions', "http://exacttarget.com/wsdl/partnerAPI");
     $request->Objects = array($object);

     $results = $client->Create($request);

     print_r($results);
} catch (SoapFault $e) {
    var_dump($e);
}
    echo '</pre>';
?>
```

### Sample SOAP Envelope - Creating a New Business Unit

```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:UsernameToken u:Id="uuid-88b91f91-bac2-489b-90fb-37e7b256e20c-1">
            <o:Username>XXXXX</o:Username>
            <o:Password>XXXXX</o:Password>
         </o:UsernameToken>
      </o:Security>
   </s:Header>
   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="Account">
            <CustomerKey>DemoAccount</CustomerKey>
            <ObjectID xsi:nil="true"/>
            <AccountType>BUSINESS_UNIT</AccountType>
            <Name>DemoAccount3</Name>
            <Email>aruiz@example.com</Email>
            <FromName>Angel Ruiz</FromName>
            <BusinessName>Example.com</BusinessName>
            <Address>123456 7th St.</Address>
            <City>Indianapolis</City>
            <State>IN</State>
            <Zip>46204</Zip>
            <IsActive>1</IsActive>
            <IsTestAccount>false</IsTestAccount>
            <ParentAccount>
               <ID>123456</ID>
            </ParentAccount>
            <Subscription xsi:nil="true"/>
         </Objects>
      </CreateRequest>
   </s:Body>
</s:Envelope>
```

### Sample .NET Code - Retrieving the Results of a Send in a Business Unit

```apex
public string checkSendStatus(string CustomerKey, string[] propertyList, int clientID, StackConfiguration stack)
        {
            string requestID = String.Empty;
            string status = String.Empty;
            DateTime now = DateTime.Now;
            //Adjust for dst
            if (!System.TimeZone.CurrentTimeZone.IsDaylightSavingTime(now))
            {
                now = now.AddHours(-1);
            }
            else
                now = now.AddHours(-2);
            const string minutes = "-15";
            DateTime past = now.AddMinutes(Double.Parse(minutes));
            string nowstring = now.ToString("s");
            string paststring = past.ToString("s");
            RetrieveRequest request = new RetrieveRequest();
            request.ObjectType = "Send";
            request.Properties = propertyList;
            SimpleFilterPart simpleFilter1 = new SimpleFilterPart() { Property = "EmailSendDefinition.CustomerKey", Value = new string[] { CustomerKey }, SimpleOperator = SimpleOperators.equals };
            SimpleFilterPart simpleFilter2 = new SimpleFilterPart() { Property = "SentDate", Value = new string[] { paststring }, SimpleOperator = SimpleOperators.greaterThanOrEqual }; //DateValue = new DateTime[] {past}
            SimpleFilterPart simpleFilter3 = new SimpleFilterPart() { Property = "SentDate", Value = new string[] { nowstring }, SimpleOperator = SimpleOperators.lessThanOrEqual }; //DateValue = new DateTime[] {now}
            ComplexFilterPart cfp1 = new ComplexFilterPart();
            ComplexFilterPart cfp2 = new ComplexFilterPart();
            cfp2.LeftOperand = simpleFilter2;
            cfp2.RightOperand = simpleFilter3;
            cfp2.LogicalOperator = LogicalOperators.AND;
            cfp1.LeftOperand = simpleFilter1;
            cfp1.RightOperand = cfp2;
            cfp1.LogicalOperator = LogicalOperators.AND;
            request.Filter = cfp1;
            string overallStatus = "";
            APIObject[] results = null;
            if (clientID != 0)
            {
                request.ClientIDs = new ClientID[]{new ClientID(){ClientID1 = clientID}};
                request.ClientIDs[0].ClientID1Specified = true;
                request.ClientIDs[0].IDSpecified = true;
                request.ClientIDs[0].ID = clientID;
            }
            try
            {
                overallStatus = wsApiSingleton.Instance.apiRetrieve(request, out requestID, out results, stack);
                if (results != null && results.Length > 0)
                {
                    status = ((Send) results[0]).Status;
                }
                else
                {
                    throw new Exception("No Send data retrieved.");
                }
            }
            catch (Exception e)
            {
                throw new Exception("API Error in Retrieve Send information", e);
            }
            if (results.Length <= 0)
            {
                throw new Exception("API Error in Retrieve Send information, no sends Retrieved.");
            }
            if (overallStatus == "Error")
            {
                throw new Exception("API Error in Retrieve Send information");
            }
            return status;
        }
```

### Sample SOAP Envelope - Retrieving the Results of a Send in a Business Unit

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="xsi">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-1256312100915" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>Send</ObjectType>
            <Properties>ID</Properties>
            <Options>
               <Client>
                  <ID>12345</ID>
               </Client>
            </Options>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```

### Sample SOAP Envelope - Updating a Business Unit with a Filter

```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <soap:Header>
      <wsse:Security soap:mustUnderstand="1">
         <wsse:UsernameToken wsu:Id="SecurityToken-35c067d1-5207-43f5-8172-bd0e60bf7e82">
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soap:Header>
   <soap:Body>
      <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Objects xsi:type="BusinessUnit">
            <PartnerKey xsi:nil="true"/>
            <ObjectID xsi:nil="true"/>
            <ID>131551</ID>
            <BusinessName>NewBusinessName</BusinessName>
            <SubscriberFilter xsi:type="SimpleFilterPart">
               <Property>Address</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>123 4th St.</Value>
            </SubscriberFilter>
         </Objects>
      </UpdateRequest>
   </soap:Body>
</soap:Envelope>
```

## Related Items

-   [Manage Enterprise 2.0 Accounts](https://help.salesforce.com/articleView?id=mc_es_enterprise_20_overview.htm&type=5)
-   [Account Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/account.htm)
-   [AccountUser Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/accountuser.htm)

## Related Topics

- Account Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/account.htm)
- AccountUser Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/accountuser.htm)
