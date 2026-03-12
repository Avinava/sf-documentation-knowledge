---
title: "Example of a Post Install Script"
domain: pkg2-dev
topic: example-of-a-post-install-script
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.774Z
estimatedTokens: 334
keywords: [Post, Install, Script, previous, version, package, installed, time]
---

# Example of a Post Install Script

> If the previous version is null, that is, the package is being installed for the first
            time, the script:

# Example of a Post Install Script

The following sample post install script performs these actions on package install/upgrade.

-   If the previous version is null, that is, the package is being installed for the first time, the script:

    -   Creates a new Account called Newco and verifies that it was created.
    -   Creates a new instance of the custom object Survey, called Client Satisfaction Survey.
    -   Sends an email message to the subscriber confirming installation of the package.
-   If the previous version is 1.0, the script creates a new instance of Survey called ”Upgrading from Version 1.0”.
-   If the package is an upgrade, the script creates a new instance of Survey called ”Sample Survey during Upgrade”.
-   If the upgrade is being pushed, the script creates a new instance of Survey called ”Sample Survey during Push”.

```

```

You can test a post install script using the new testInstall method of the Test class. This method takes the following arguments.

-   A class that implements the InstallHandler interface.
-   A Version object that specifies the version number of the existing package.
-   An optional Boolean value that is true if the installation is a push. The default is false.

This sample shows how to test a post install script implemented in the PostInstallClass Apex class.

```

```

## Code Examples

```apex
public class PostInstallClass implements InstallHandler {
  global void onInstall(InstallContext context) {
    if(context.previousVersion() == null) {
      Account a = new Account(name='Newco');
      insert(a);
      
      Survey__c obj = new Survey__c(name='Client Satisfaction Survey');
      insert obj;
               
      User u = [Select Id, Email from User where Id =:context.installerID()];   
      String toAddress= u.Email;
      String[] toAddresses = new String[]{toAddress};
      Messaging.SingleEmailMessage mail = 
        new Messaging.SingleEmailMessage();
      mail.setToAddresses(toAddresses);
      mail.setReplyTo('support@package.dev');
      mail.setSenderDisplayName('My Package Support');
      mail.setSubject('Package install successful');
      mail.setPlainTextBody('Thanks for installing the package.');
      Messaging.sendEmail(new Messaging.Email[] { mail });
      }
    else
      if(context.previousVersion().compareTo(new Version(1,0)) == 0) {
      Survey__c obj = new Survey__c(name='Upgrading from Version 1.0');
      insert(obj);
      }
    if(context.isUpgrade()) {
      Survey__c obj = new Survey__c(name='Sample Survey during Upgrade');
      insert obj;
      }
    if(context.isPush()) {
      Survey__c obj = new Survey__c(name='Sample Survey during Push');
      insert obj;
      }
    }
  }
```

```apex
@isTest
static void testInstallScript() {
  PostInstallClass postinstall = new PostInstallClass();
    Test.testInstall(postinstall, null);
    Test.testInstall(postinstall, new Version(1,0), true);
    List<Account> a = [Select id, name from Account where name ='Newco'];
    System.assertEquals(1, a.size(), 'Account not found');
  }
```
