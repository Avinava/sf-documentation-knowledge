---
title: "Update a Query Activity"
domain: mc-apis
topic: update-a-query-activity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.722Z
estimatedTokens: 468
keywords: [Query, Activity, Updating, change, criteria, retrieves, tracking, account, better, refine, results, choose, receive, entirely, Why]
---

# Update a Query Activity

> Updating a query activity allows you to change the criteria for the query that retrieves tracking information from your account. You can change the criteria to better refine your results or change the results you choose to receive entirely.

# Update a Query Activity

## Why Update a Query Activity

Updating a query activity allows you to change the criteria for the query that retrieves tracking information from your account. You can change the criteria to better refine your results or change the results you choose to receive entirely.

## How to Update a Query Activity

Use the sample code below as a model to create your own API call. Note that you cannot retrieve the status or completion time of the query activity.

### Sample .NET Code

```apex
private void UpdateQueryAct(string strQAID, string strDEQuery, string strTargetGUID, string strOrigDE, string strDEImport)
{
    //Create the QueryDefinition Object
    QueryDefinition qd = new QueryDefinition();
    qd.ObjectID = strQAID;
    ////General Settings
    //qd.TargetUpdateType = "Overwrite";
    //qd.TargetType = "DE";
    //The actuall SQL
    string sql = "SELECT * FROM [" + ddlDataTemp.SelectedItem.Text + "] ";
    sql += "UNION ALL ";
    sql += "SELECT * FROM [" + strDEImport + "]";
    qd.QueryText = sql;
    //InteractionBaseObject ibo = new InteractionBaseObject();
    //ibo.CustomerKey = strDEQuery;//The DE to dump results to
    //ibo.Name = strDEQuery;
    //qd.DataExtensionTarget = ibo;
    InteractionBaseObject ibo = new InteractionBaseObject();
    ibo.CustomerKey = strTargetGUID;//The DE to dump results to
    ibo.Name = strDEQuery;
    qd.DataExtensionTarget = ibo;
    // Create the Import Definition
    string requestID = String.Empty;
    string status = String.Empty;
    UpdateResult[] uoResults = client.Update(null, new APIObject[] { qd }, out requestID, out status);
    //string strQAobjectID = uoResults[0].NewObjectID;
    lblMessage.Text += "<br/>UPDATED QueryDefinition: " + status;
}
```

## Related Items

[Query Activity](https://help.salesforce.com/articleView?id=mc_es_query_activity.htm&type=5)
