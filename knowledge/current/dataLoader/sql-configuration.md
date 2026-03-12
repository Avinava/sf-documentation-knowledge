---
title: "SQL Configuration"
domain: dataLoader
topic: sql-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.330Z
estimatedTokens: 480
keywords: [SQL, Configuration, running, Data, Loader, batch, mode, command, line, SqlConfig, accessing, specific, database, Query, Bean]
---

# SQL Configuration

> When running Data Loader in batch mode from the command line, the
        SqlConfig class contains configuration parameters for accessing
        specific data in the database.

# SQL Configuration

When running Data Loader in batch mode from the command line, the SqlConfig class contains configuration parameters for accessing specific data in the database.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

As shown in these code samples, queries and inserts are different but very similar. The bean must be of type com.salesforce.dataloader.dao.database.SqlConfig and have these properties.

-   sqlString

    The SQL code to be used by the data access object.

    The SQL can contain replacement parameters that make the string dependent on configuration or operation variables. Replacement parameters must be delimited on both sides by “@” characters. For example, @process.lastRunDate@.

-   sqlParams

    A property of type map that contains descriptions of the replacement parameters specified in sqlString. Each entry represents one replacement parameter: the key is the replacement parameter's name, the value is the fully qualified Java type to be used when the parameter is set on the SQL statement. Note that “java.sql” types are sometimes required, such as java.sql.Date instead of java.util.Date. For more information, see [the official JDBC API documentation](http://docs.oracle.com/javase/7/docs/technotes/guides/jdbc/ "HTML (New Window)").

-   columnNames

    Used when queries (SELECT statements) return a JDBC ResultSet. Contains column names for the data outputted by executing the SQL. The column names are used to access and return the output to the caller of the DataReader interface.


## SQL Query Bean Example

```

```

## SQL Insert Bean Example

```

```

## Code Examples

```
<bean id="accountMasterSql"
    class="com.salesforce.dataloader.dao.database.SqlConfig"
    singleton="true">
    <property name="sqlString"/>
        <value>
            SELECT distinct
                '012x00000000Ij7' recordTypeId,
                accounts.account_number,
                org.organization_name,
                concat (concat(parties.address1, ' '), parties.address2) billing_address,
                locs.city,
                locs.postal_code,
                locs.state,
                locs.country,
                parties.sic_code
            from
                ar.hz_cust_accounts accounts,
                ar.hz_organization_profiles org,
                ar.hz_parties parties,
                ar.hz_party_sites party_sites,
                ar.hz_locations locs
            where
                accounts.PARTY_ID = org.PARTY_ID
                and parties.PARTY_ID = accounts.PARTY_ID
                and party_sites.PARTY_ID = accounts.PARTY_ID
                and locs.LOCATION_ID = party_sites.LOCATION_ID
                and (locs.last_update_date > @process.lastRunDate@ OR accounts.last_update_date > @process.lastRunDate@
        </value>
    </property>
    <property name="columNames">
        <list>
            <value>recordTypeId</value>
            <value>account_number</value>
            <value>organization_name</value>
            <value>billing_address</value>
            <value>city</value>
            <value>postal_code</value>
            <value>state</value>
            <value>country</value>
            <value>sic_code</value>
        </list>
    </property>
    <property name="sqlParams">
        <map>
            <entry key="process.lastRunDate" value="java.sql.Date"/>
        </map>
    </property>
</bean>
```

```
<bean id="partiesInsertSql"
    class="com.salesforce.dataloader.dao.database.SqlConfig"
    singleton="true">
    <property name="sqlString"/>
        <value>
            INSERT INTO REP.INT_PARTIES (
            BILLING_ADDRESS, SIC_CODE)
            VALUES (@billing_address@, @sic_code@)
        </value>
    </property>
    <property name="sqlParams"/>
        <map>
            <entry key="billing_address" value="java.lang.String"/>
            <entry key="sic_code" value="java.lang.String"/>
        </map>
    </property>
</bean>
```
