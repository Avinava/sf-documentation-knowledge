---
title: "Enhanced Apex Transaction Security Implementation Examples"
domain: securityImplGuide
topic: enhanced-apex-transaction-security-implementation-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.709Z
estimatedTokens: 1024
keywords: [Enhanced, Apex, Transaction, Security, Implementation, Examples, implementing, Login, Different, Addresses, Logins, Specific, Address, Data, Export]
---

# Enhanced Apex Transaction Security Implementation Examples

> Here are examples of implementing enhanced Apex transaction security.

# Enhanced Apex Transaction Security Implementation Examples

Here are examples of implementing enhanced Apex transaction security.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Login from Different IP Addresses

This example implements a policy that triggers when someone logs in from a different IP address in the past 24 hours.

```

```

## Logins from a Specific IP Address

This example implements a policy that triggers when a session is created from a specific IP address.

```

```

## Data Export

This example implements a transaction security policy that triggers when more than 2,000 leads are either:

-   Viewed in the UI
-   Exported with a SOQL query
-   Exported from a list view
-   Exported from a report

```

```

## Confidential Data Access

This policy requires everyone to use two-factor authentication before accessing a specific report.

You can have sensitive, confidential data in your quarterly Salesforce reports. Make sure that teams that access the reports use two-factor authentication (2FA) for high assurance before they view this data. The policy makes 2FA a requirement, but you can’t provide high-assurance sessions without a way for your teams to meet the 2FA requirements. As a prerequisite, first set up 2FA in your Salesforce environment.

This example highlights the capability of a policy to enforce 2FA for a specific report. The report defined here is any report with “Quarterly Report” in its name. Anyone accessing the report is required to have a high-assurance session using 2FA.

```

```

## Browser Check

This policy triggers when a user with a known operating system and browser combination tries to log in with another browser on a different operating system.

Many organizations have standard hardware and support specific versions of different browsers. You can use this standard to reduce the security risk for high-impact individuals by acting when logins take place from unusual devices. For example, your CEO typically logs in to Salesforce from San Francisco using a MacBook or Salesforce mobile application on an iPhone. When a login occurs from elsewhere using a Chromebook, it’s highly suspicious. Because hackers do not necessarily know which platforms corporate executives use, this policy makes a security breach less likely.

In this example, the customer organization knows that its CEO uses a MacBook running OS X with the Safari browser. An attempt to log in using the CEO’s credentials with anything else is automatically blocked.

```

```

## Block Logins by Country

This policy blocks access by country.

Your organization has remote offices and a global presence but, due to international law, wants to restrict access to its Salesforce org.

This example builds a policy that blocks users logging in from North Korea. If users are in North Korea and use a corporate VPN, their VPN gateway would be in Singapore or the United States. They can log in successfully because Salesforce recognizes the VPN gateway and the internal U.S.-based company IP address.

```

```

You can also restrict access to other values, like postal code or city.

## Block an Operating System

This policy blocks access for anyone using an older version of the Android OS.

You’re concerned about a specific mobile platform’s vulnerabilities and its ability to capture screenshots and read data while accessing Salesforce. If the device is not running a security client, you could restrict access from device platforms that use operating systems with known vulnerabilities. This policy blocks devices using Android 5.0 and earlier.

```

```

#### See Also

-   [*Apex Reference Guide*: TxnSecurity.EventCondition Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_interface_TxnSecurity_EventCondition.htm "Apex Reference Guide: TxnSecurity.EventCondition Interface  - HTML (New Window)")

## Code Examples

```apex
global class MultipleLoginEventCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when LoginEvent loginEvent {
                return evaluate(loginEvent);
            }
            when null {
                 return false;   
            }
            when else{
                return false;
            }
        }
    }

    private boolean evaluate(LoginEvent loginEvent) {
        AggregateResult[] results = [SELECT SourceIp
                                     FROM LoginHistory
                                     WHERE UserId = :loginEvent.UserId
                                     AND LoginTime = LAST_N_DAYS:1
                                     GROUP BY SourceIp];
        if(!results.isEmpty()) {
            return true;
        }
        return false;  
    }
}
```

```apex
global class SourceIpEventCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when LoginEvent loginEvent {
                return evaluate(loginEvent);
            }
            when null {
                 return false;   
            }
            when else{
                return false;
            }
        }
    }
    
    private boolean evaluate(LoginEvent loginEvent) {
        if (loginEvent.SourceIp.equals('1.1.1.1')) {
            return true;
        }
        return false; 
    }
}
```

```apex
global class LeadViewAndExportCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when ApiEvent apiEvent {
                return evaluate(apiEvent.QueriedEntities, apiEvent.RowsProcessed);
            }
            when ReportEvent reportEvent {
                return evaluate(reportEvent.QueriedEntities, reportEvent.RowsProcessed);
            }
            when ListViewEvent listViewEvent {
                return evaluate(listViewEvent.QueriedEntities, listViewEvent.RowsProcessed);
            }
            when null {
                 return false;   
            }
            when else{
                return false;
            }
        }
    }

    private boolean evaluate(String queriedEntities, Decimal rowsProcessed){
        if(queriedEntities.contains('Lead') && rowsProcessed > 2000){
            return true;
        }
        return false;
    }
}
```

```apex
global class ConfidentialDataEventCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when ReportEvent reportEvent {
                return evaluate(reportEvent);
            }
            when null {
                 return false;   
            }
            when else{
                return false;
            }
        }
    }
    
    private boolean evaluate(ReportEvent reportEvent) {
        // Check if this is a quarterly report.
        if (reportEvent.Name.contains('Quarterly Report')) {
            return true;
        }
        return false; 
    }
}
```

```apex
global class AccessEventCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when LoginEvent loginEvent {
                return evaluate(loginEvent);
            }
            when null {
                 return false;   
            }
            when else{
                return false;
            }
        }
    }
    
    private boolean evaluate(LoginEvent loginEvent) {
        // If it's a Login attempt from our CEO's user account.
        if (loginEvent.UserId == '005x0000005VmCu'){
            // The policy is triggered when the CEO isn’t using Safari on Mac OSX.
            if (!loginEvent.Platform.contains('Mac OSX') ||
                !loginEvent.Browser.contains('Safari')) {
                    return true;
                }
        }
        return false; 
    }
}
```
