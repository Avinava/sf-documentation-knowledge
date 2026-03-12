---
title: "Authorization Information for an Org"
domain: sfdx-dev
topic: authorization-information-for-an-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.074Z
estimatedTokens: 461
keywords: [Authorization, Org, view, orgs, you’ve, authorized, scratch, created]
---

# Authorization Information for an Org

> You can view information for all orgs that you’ve authorized and the scratch orgs that
        you’ve created.

# Authorization Information for an Org

You can view information for all orgs that you’ve authorized and the scratch orgs that you’ve created.

To view authorization information about an org, run this command from a terminal (macOS and Linux) or command prompt (Windows).

```

```

If you have set a default org, you don’t have to specify the \--target-org flag. To display the usernames for all the active orgs that you’ve authorized or created, run org list.

If you’ve set an alias for an org, you can specify it with the \--target-org flag. This example uses the my-scratch-org alias.

```

```

To get more information, such as the Salesforce DX authentication URL, include the \--verbose flag. This flag displays the Sfdx Auth Url value only if you authorized the org using org login web and not org login jwt.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

To help prevent security breaches, the org display output doesn’t include the org’s client secret or refresh token.

#### See Also

-   [OAuth 2.0 Web Server Authentication Flow](https://help.salesforce.com/articleView?id=remoteaccess_oauth_web_server_flow.htm&language=en_US "OAuth 2.0 Web Server Authentication Flow - HTML (New Window)")

-   [Salesforce DX Usernames and Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm "Many Salesforce CLI commands connect to an org to complete their task. For example, the org create scratch command, which creates a scratch org, connects to a Dev Hub org. The project deploy start and project retrieve start commands synchronize source code between your project and an org. In each case, the CLI command requires a username to determine which org to connect to. Usernames are unique within the entire Salesforce ecosystem and are associated with just one org.")

## Code Examples

```
sf org display --target-org <username-or-alias>
```

```
sf org display --target-org my-scratch-org

Warning: This command will expose sensitive information that allows for subsequent activity using your current authenticated session.
Sharing this information is equivalent to logging someone in under the current credential, resulting in unintended access and escalation of privilege.
For additional information, please review the authorization section of the https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm

=== Org Description

 KEY             VALUE                                                                                                            
 ─────────────── ──────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
 Access Token    <long-string> 
 Alias           my-scratch-org                                                                                                        
 Api Version     58.0                                                                                                             
 Client Id       PlatformCLI                                                                                                      
 Created By      jdoe@fabdevhub.org                                                                       
 Created Date    2023-06-09T17:59:18.000+0000                                                                                     
 Dev Hub Id      jdoe@fabdevhub.org                                                                       
 Edition         Developer                                                                                                        
 Expiration Date 2023-06-16                                                                                                       
 Id              00D8H0000007wprU                                                                                               
 Instance Url    https://java-connect-41-dev-ed.scratch.my.salesforce.com                                                       
 Org Name        Your Company                                                                                          
 Signup Username test-gm9uud@example.com                                                                                    
 Status          Active                                                                                                           
 Username        test-gm9uud@example.com
```

## Related Topics

- Salesforce DX Usernames and Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm)
