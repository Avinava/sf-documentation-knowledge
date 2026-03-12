---
title: "Configure Database Access"
domain: dataLoader
topic: configure-database-access
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.262Z
estimatedTokens: 568
keywords: [Configure, Database, Access, run, Data, Loader, batch, mode, command, line, samples, conf, database-conf.xml, objects, extract]
---

# Configure Database Access

> When you run Data Loader in batch mode from the command line, use
        \samples\conf\database-conf.xml to configure database access
        objects, which you use to extract data directly from a database.

# Configure Database Access

When you run Data Loader in batch mode from the command line, use \\samples\\conf\\database-conf.xml to configure database access objects, which you use to extract data directly from a database.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

DatabaseConfig Bean

The top-level database configuration object is the DatabaseConfig bean, which has these properties.

-   sqlConfig—The [SQL configuration bean](atlas.en-us.dataLoader.meta/dataLoader/loader_sql.htm "When running Data Loader in batch mode from the command line, the SqlConfig class contains configuration parameters for accessing specific data in the database.") for the data access object that interacts with a database.
-   dataSource—The bean that acts as database driver and authenticator. It must refer to an implementation of javax.sql.DataSource such as org.apache.commons.dbcp.BasicDataSource.

This code is an example of a DatabaseConfig bean:

```

```

DataSource

The DataSource bean sets the physical information needed for database connections. It contains the following properties:

-   driverClassName—The fully qualified name of the implementation of a JDBC driver.
-   password—The password for logging in to the database.
-   url—The string for physically connecting to the database.
-   username—The username for logging in to the database.

Depending on your implementation, additional information is required. For example, use org.apache.commons.dbcp.BasicDataSource when database connections are pooled.

The following code is an example of a DataSource bean:

```

```

Versions of Data Loader from API version 25.0 onwards do not come with an Oracle JDBC driver. Using Data Loader to connect to an Oracle data source without a JDBC driver installed results in a “Cannot load JDBC driver class” error. To add the Oracle JDBC driver to Data Loader:

-   Download the latest JDBC driver from [http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html "HTML (New Window)").
-   Copy the JDBC .jar file to data loader install folder/java/bin.

## Code Examples

```
<bean id="AccountInsert"
    class="com.salesforce.dataloader.dao.database.DatabaseConfig"
    scope="singleton">
    <property name="sqlConfig" ref="accountInsertSql"/>
</bean>
```

```
<bean id="oracleRepDataSource"
    class="org.apache.commons.dbcp.BasicDataSource"
    destroy-method="close"
    scope="prototype">
    <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"/>
    <property name="url" value="jdbc:oracle:thin:@myserver.salesforce.com:1521:TEST"/>
    <property name="username" value="test"/>
    <property name="password" value="test"/>
</bean>
```

## Related Topics

- SQL 
                    configuration bean (atlas.en-us.dataLoader.meta/dataLoader/loader_sql.htm)
