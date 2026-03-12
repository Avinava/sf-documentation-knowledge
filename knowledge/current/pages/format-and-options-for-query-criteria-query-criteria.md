---
title: "Format and Options for  Query Criteria Query Criteria"
domain: pages
topic: format-and-options-for-query-criteria-query-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.126Z
estimatedTokens: 657
keywords: [Options, Query, Criteria, Remote, Objects, uses, specify, retrieve, operations, limit, offset, conditions, queries, orderby]
---

# Format and Options for  Query Criteria Query Criteria

> Remote Objects uses an object to specify criteria for retrieve() operations. Use this object to specify where, limit, and offset
        conditions for your queries.

# Format and Options for Query Criteria Query Criteria

Remote Objects uses an object to specify criteria for retrieve() operations. Use this object to specify where, limit, and offset conditions for your queries.

The structured format of the query object enables Visualforce to validate the criteria at save time, reducing the likelihood of runtime errors. The format is straightforward.

```

```

The query criteria find a contact named Marc Benioff and limit the query to a single result.

## where Conditions

where conditions enable you to filter the results of a retrieve operation, much the same way that a WHERE condition in a SOQL query does. The operators that are available for where conditions are:

-   eq: equals
-   ne: not equals
-   lt: less than
-   lte: less than or equals
-   gt: greater than
-   gte: greater than or equals
-   like: string matching. As with SOQL, use “%” as a wildcard character.
-   in: in, used for finding a value that matches any of a set of fixed values. Provide values as an array, for example, \['Benioff', 'Jobs', 'Gates'\].
-   nin: not in, used for finding a value that matches none of a set of fixed values. Provide values as an array, for example, \['Benioff', 'Jobs', 'Gates'\].
-   and: logical AND, used for combining conditions
-   or: logical OR, used for combining conditions

Within the where object, add field name and condition pairs to create complex criteria. Multiple conditions by default are treated as AND conditions. You can use and and or to create other criteria conditions. For example:

```

```

Filter results based on a date range by using a combination of lte and gte. For example:

```

```

## orderby Conditions

orderby enables you to set a sort order for your results. You can sort on up to three fields.

Specify your orderby conditions as an array of JavaScript objects that contain name-value pairs. The field to sort on is the name, and the sort description is the value. The sort description enables you to sort ascending or descending and to sort null values first or last. For example:

```

```

## limit and offset Conditions

limit and offset enable you to retrieve a specific number of records at a time and to page through an extended set of results.

Use limit to specify how many records to return in one batch of results. The default value is 20. The maximum is 100.

Use offset to specify how many records to skip in the overall result set before adding records to the returned results. The minimum is 1. The maximum offset is 2,000 rows. Requesting an offset greater than 2,000 results in a NUMBER\_OUTSIDE\_VALID\_RANGE error.

## Code Examples

```
<apex:remoteObjectsjsNamespace="RemoteObjectModel">    
    <apex:remoteObjectModel name="Contact" fields="FirstName,LastName"/>  
</apex:remoteObjects>

<script>
var ct = new RemoteObjectModel.Contact();
ct.retrieve( 
    { where: { 
        FirstName: {eq: 'Marc'}, 
        LastName: {eq: 'Benioff'} 
      }, 
      orderby: [ {LastName: 'ASC'}, {FirstName: 'ASC'} ],
      limit: 1 },  

    function(err, records) { 
        if (err) { 
            alert(err); 
        } else { 
            console.log(records.length); 
            console.log(records[0]); 
        } 
    } 
);
</script>
```

```
{ 
where: 
    { 
    or: 
        {
        FirstName: { like: "M%" }, 
        Phone: { like: '(415)%' }
        }
    }
}
```

```
<apex:remoteObjects jsNamespace="RemoteObjectModel">
    <apex:remoteObjectModel name="Account" fields="Id,Name,CreatedDate"/>
</apex:remoteObjects>

<script>
    var account_created_from_date = new Date('2017-01-01');
    var account_created_to_date = new Date('2018-01-01');
    var clauses = {       
        'where': {
            'CreatedDate': { 'lte': account_created_to_date },
            'and': {
                'CreatedDate': { 'gte': account_created_from_date },
                'Id': { 'ne': '' }
            }
        }   
    };

    var ct = new RemoteObjectModel.Account();
    ct.retrieve(
        clauses,
        function(err, records) { 
            if (err) { 
                console.log(err); 
            } else { 
                console.log(records.length); 
                console.log(records[0]); 
            } 
        } 
    );
</script>
```

```
orderby: [ {Phone: "DESC NULLS LAST"} , {FirstName: "ASC"} ]
```
