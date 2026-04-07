---
title: "Add a User to an Account"
domain: mc-apis
topic: add-a-user-to-an-account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.082Z
estimatedTokens: 1386
keywords: [Add, User, Account, Adding, provide, access, new, person, regulating, actions, perform, action, via, SOAP, API]
---

# Add a User to an Account

> Adding a user to your existing account allows you to provide access to the account to a new person while also regulating what actions that user can perform. You can perform this action via the SOAP API to add new users to accounts owned by embedded partners, or you can use this code to add users fro

# Add a User to an Account

## Why Add a User to an Existing Account

Adding a user to your existing account allows you to provide access to the account to a new person while also regulating what actions that user can perform. You can perform this action via the SOAP API to add new users to accounts owned by embedded partners, or you can use this code to add users from information taken from third-party sources, such as HR systems.

The user's permissions determine which actions a user can or cannot perform and what information they can view within an account.

Be sure to have the correct username and password information for the new user for use in the creation process. Avoid using XML-sensitive characters such as #, ^, <, >, or & in the password.

## How to Add a User to an Existing Account

Use the sample code below as a model for your API call. This sample code includes the required attributes for each user using the AccountUser object.

### Sample .NET Code

```apex
public void testAddUserToAccount()
{
    Account account = new Account();
    Account.ID=12334;
    if (account != null)
    {
        AccountUser accountUser = new AccountUser();
        accountUser.Name = "ACRUZ";
        accountUser.UserID = "ACRUZ";
        accountUser.IsAPIUser = true;
        accountUser.IsAPIUserSpecified = true;
        accountUser.IsLocked = false;
        accountUser.IsLockedSpecified = true;
        accountUser.Password = "XXX";
        accountUser.MustChangePassword = false;
        accountUser.MustChangePasswordSpecified = true;
        accountUser.Email = "acruz@example.com";
        UserAccess access = new UserAccess();
        //3 CLIENT_ADMIN Add Users to Account
        //4 PRO_ADMIN Create/View Accounts
        access.ID = 3;
        access.IDSpecified = true; //.Net specific
        accountUser.UserPermissions = new UserAccess[] {access};
        //This tells that create user in subaccount
        ClientID clientID = new ClientID();
        clientID.PartnerClientKey = "12345";
        clientID.IDSpecified = true;
        accountUser.Client = clientID;
        APIObject[] apiObjects = {accountUser};
        String requestId = null;
        String overAllStatus = null;
        CreateResult[] results = partnerAPIWse.Create(new CreateOptions(), apiObjects, out requestId, out overAllStatus);
        if (results != null)
        {
            foreach (CreateResult result in results)
            {
                Console.WriteLine();
                Console.WriteLine("Status Message ### " +
                result.StatusMessage);
            }
        }
        else
        {
            Console.Write("Error ...... ");
        }
    }
}
```

When dealing with Single Sign-on functionality, you can add this information to the example:

```
SsoIdentity sso = new  SsoIdentity();
sso.Active = true;
sso.FederatedID = ;
accountUser.Ssoidentities = new SsoIdentity[] {sso};
```

### Sample Java Code (Axis 1.4)

```apex
private CreateResponse createUserForThisAccount(Soap stub, Account account) throws java.rmi.RemoteException {

    CreateRequest request;
    APIObject[] apiObjects = null;
    CreateResponse response;
    AccountUser accountUser = new AccountUser();
    accountUser.setUserID("AngelCruz");
    accountUser.setPassword("XXX");
    accountUser.setName("Angel Cruz");
    accountUser.setEmail("acruz@example.com");
    accountUser.setIsAPIUser(true);
    accountUser.setIsLocked(false);
    UserAccess access1 = new UserAccess();
    access1.setID(23);
    UserAccess access2 = new UserAccess();
    access2.setID(3);
    UserAccess access3 = new UserAccess();
    access3.setID(25);
    ClientID clientID = new ClientID();
    clientID.setID(account.getID());
    accountUser.setClient(clientID);

    request = new CreateRequest();
    apiObjects = new AccountUser[]{accountUser};
    request.setObjects(apiObjects);
    request.setOptions(new CreateOptions());
    response = stub.create(request);
    return response;
}
```

### Sample SOAP Envelope

```
<createrequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
    <objects xsi:type="AccountUser">
        <partnerkey xsi:nil="true"></partnerkey>
        <objectid xsi:nil="true"></objectid>
        <client>
            <id>12345</id>
        </client>
        <userid>ACRUZ</userid>
        <password>XXX</password>
        <name>ACRUZ</name>
        <email>acruz@example.com</email>
        <activeflag>true</activeflag>
        <isapiuserspecified>true</isapiuserspecified>
        <isapiuser>true</isapiuser>
        <islockedspecified>true</islockedspecified>
        <islocked>true</islocked>
        <mustchangepassword>true</mustchangepassword>
        <mustchangepasswordspecified>true</mustchangepasswordspecified>
         <defaultbusinessunit>12345</defaultbusinessunit>
         <userpermissions>
            <useraccess>
                <id>3</id>
                 <idspecified>true</idspecified>
             </useraccess>
         </userpermissions>
        <ssoidentities>
            <ssoidentity>
                <isactive>true</isactive>
                <federatedid>ACRUZ</federatedid>
            </ssoidentity>
        </ssoidentities>
    </objects>
</createrequest>
```

## Related Items

-   [Add Users to Existing Marketing Cloud Accounts](https://help.salesforce.com/articleView?id=mc_overview_add_a_user.htm&type=5)
-   [User Permissions](https://help.salesforce.com/articleView?id=mc_overview_roles.htm&type=5)
-   [AccountUser Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/accountuser.htm)

## Related Topics

- AccountUser Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/accountuser.htm)
