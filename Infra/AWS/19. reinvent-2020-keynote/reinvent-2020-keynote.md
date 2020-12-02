AWS re:Invent is always exciting and inspiring. Because of the pandemic, this year's re:Invent is 100% online. I watched the keynote speech and took a memo. There is no mind-blowing new services this year (like the equivalent of announcing Lambda or SageMaker). It feels like they are building more capability on the existing services, focusing on IoT, storage, microservices, ML and AI technologies.

<strong>Main takeaways</strong>

<ul>
 	<li>New container and serverless technology announcements.</li>
 	<li>Database technologies and analytics.</li>
 	<li>New IoT services.</li>
 	<li>Lighter on ML/AI technologies than previous few years.</li>
 	<li>AWS is really getting into real engineering and IoT services - product developments, material production, supply chain management etc.</li>
 	<li>Bagging Oracle and Microsoft continues when it comes to databases.</li>
 	<li>Heaps of updates on an existing services.</li>
 	<li>Improvement on Amazon Connect.</li>
</ul>


<strong>New Services announced</strong>

I am missing a few services probably. But, these are the ones I managed to take notes.

<ul>
 	<li><strong>AWS Lambda container image support</strong></li>
 	<li><strong>Amazon EKS distro</strong></li>
 	<li><strong>AWS Proton: manage and deploy container microservices</strong></li>
 	<li><strong>io2 Block express: the highest IOPS and throughput in the cloud</strong></li>
 	<li><strong>Babelfish</strong>
    <ul>
      <li>Run SQL Server applications on Aurora PostgreSQL with little to no code change.</li>
      <li>New translation capability to easily run SQL server applications on Aurora PostgreSQL.</li>
      <li>Understand SQL server's proprietary dialect (T-SQL) and communications protocol (TDS).</li>
      <li>Migrate the data with DMS, then update your application to point to Aurora instead of SQL server.</li>
      <li>Open source project (uses the apache 2.0 license).</li>
    </ul>
  </li>
  <li><strong>AWS Glue Elastic Views</strong>
   <ul>
      <li>Easily build materialized views that automatically combine and replicate data across multiple data stores.</li>
      <li>Write a little bit of SQL, copy data from each source data, store to a target data store, then create a materialised view.</li>
      <li>It will automatically update the data in the view.</li>
      <li>Target store is Redshift, Elasticsearch, S3, DynamoDB, Aurora, RDS.</li>
    </ul>
   </li>
   <li><strong>Amazon SageMaker Data Wrangler</strong>
   <ul>
      <li>Fastest way to prepare data for ML.</li>
      <li>Aggregate and prepare ML features - easy feature engineering.</li>
      <li>Imports and inspects data to identify the data types.</li>
      <li>Recommends transformations based on the data in the dataset.</li>
      <li>Applies transformations for features - can see a preview in real time.</li>
      <li>Make available for inference in real time.</li>
      <li>Need to ensure consistency of data for both training and inference.</li>
    </ul>
  </li>
  	<li><strong>Amazon SageMake Feature Store</strong>
      <ul>
          <li>A new repository that makes it easy to store, update and share ML features.</li>
          <li>Purpose-build and accessible from SageMaker Studio.</li>
          <li>Easily name, organise, find and share features.</li>
          <li>Access features in batches or subsets.</li>
          <li>Low latency for inference.</li>
        </ul>
   </li>
   <li><strong>Amazon SageMaker Pipelines</strong>
    <ul>
      <li>The first purpose-build, easy-to-use CI/CD services for ML.</li>
    </ul>
   </li>
   <li><strong>Amazon Connect Wisdom</strong>
    <ul>
      <li>A new capability that uses ML to deliver agents the product and service info they need to solve issues in real time.</li>
    </ul>
   </li>
   <li><strong>Amazon Monitron</strong>
   <ul>

      <li>End to end equipment monitoring system to enable predictive maintenance.</li>
      <li>Amazon Lookout for Equipment.</li>
      <li>Predictive maintenance with Amazon lookout for equipment.</li>
    </ul>
  </li>
  <li><strong>AWS Panorama appliance</strong>
    <ul>
      New hardware appliance - use existing onsite camera to add computer vision.
    </ul>
  </li>
</ul>

<strong>Business guests</strong>

Some of the guests appeared in the keynote speech.

<ul>
 	<li><strong>Boom</strong> - high performance aircraft
   <ul>
 	<li>Established by Blake Scholl who was an engineer with amazon. As he started working at amazon after graduating uni, he started flight lessons. At the time, Amazon was building AWS.</li>
 	<li>Supersonic airliner, twice as fast. Tokyo to Seattle 4:30h, New York to London 3:30h.</li>
 	<li>Partner with Japan Airline Rolls Royce, US defence force.</li>
 	<li>All-in with AWS.</li>
 	<li>Design and test plane on cloud - used AWS services to simulate flight patterns. AWS enables smaller companies to design planes better. Using AI/ML to improve simulations. Can run simulation in parallel.</li>
 	<li>100% carbon neutral.</li>
 	<li>Fastest and affordable. Making supersonic travel affordable.</li>
</ul>
   <li><strong>Carrie</strong>
   <ul>
 	<li>Supply chain company for perishable food and pharma products.</li>
 	<li>Because a cool chain is hard to maintain, 1/3 of food gets wasted. $1T worth, 1 in 9 people go to bed hungry.</li>
 	<li>$35 billion lost for biopharma.</li>
</ul>
   </li>
   </li>
</ul>






##########################################################

# Notes taken during speech

# AWS re:Invent 2020

## 1. Keynote Andy Jassy


### New services

- AWS Lambda container image support

- Amazon EKS distro

- AWS Proton: manage and deploy container microservices

- io2 Block express = the highest IOPS and throughput in the cloud

- Babelfish 
Run SQL Server applications on Aurora PostgreSQL with little to no code change.
New translation capability to easily run SQL server applications on Aroura PostgreSQL
Understand SQL server's proprietary dialecty (T-SQL) and communications protocol (TDS)
Migrate the data with DMS, then update your application to point to Aurora instead of SQL server
Open source project (uses the apache 2.0 license)

- AWS Glue Elastic Views
Easily build materialized views that automatically combine and replicate data across multiple data stores.
Write a little bit of SQL, copy data from each source data, store to a target data store, then create maaterialised view. 
It will be automatically update the data in the view.
Target store is Redshift, Elasticsearch, S3, DynamoDB, Aroura, RDS

- Amazon SageMaker Data Wrangler
Fastest way to prepare data for ML 
Aggregate and prepare ML features - easy feature engineering
Imports and inspects data to identify the data types
Recommends transformations based on the data in the dataset
Applies transformations for features - can see a preview in real time
Make available for inference in real time
Need to ensure consistency of data for both training and inference

- Amazon SageMake Feature Store
A new repository that makes it easy to store, update and share ML features
Purpose-build and accessible from SageMaker Studio
Easily name, organise, find and share features
Access features in batches or subsets
Low latency for inference

- Amazon SageMaker Pipelines
The first purpose-build, easy-to-use CI/CD services for ML.

- Amazon Connect Wisdom
A new capability that uses ML to deliver agents the product and service info they need to solve issues in real time.

- Amazon Monitron
End to end equipment monitoring system to enable predictive maintenance

- Amazon Lookout for Equipment
Predictive maintenance with Amazon lookout for equipment

- AWS Panorama appliance
New hardware appliance - use existing onsite camera to add computer vision.

## Some updates

Amazon CodeGru


### Database and analytics services

Data stores are being reinvented.

- Cloud database: Aroura
Still bagging oracle and microsoft😀 Bablefish is the middle finger to SQL server.

Amazon DynameDB (key value)
Amazon ElastiCache (in-memory)
Amazon Neptune (graph)
Amazon DocumentDB with mongodb compatibility (document)
Amazon Timestream (time-series)
Amazon QLDB (ledger)
Keyspaces for Apache Cassandra (wide column)

Amazon Athena
Amazon EMR
Amazon Kinesis
Amazon Elasticsearch Service
Amazon Redshift

- Getting away from talking about ML and AI. In the past few years, keynotes speech had a huge chunk about ML, but this year light-weight
- AWS is optimised for all frameworks
- Pytorch is getting more popular than tensorflow.

SageMaker Studio 
- SageMaker notebooks
- SageMaker Debugger
- SageMaker Experiments
- SageMaker Model Monitor
- SageMaker Autopilot

## Cool things

Boom - high performance aircraft

- Establised by Blake Scholl who was an engineer with amazon. As he started working at amazon after graduated uni, he started flight lessons. At the time, Amazon was building AWS.
- Supersonic airliner, twice as fast. Tokyo to Seattle 4:30h, New York to London 3:30h
- Partner with Japan Airline Rolls Royce, US defence force
- All-in with AWS
- Design and test plane on cloud - used AWS services to simulate flight patterns. AWS enables smaller companies to design plane better. Using AI/ML to improve simulations. Can run simulation in parallel.
- 100% carbon neutral.
- Fastest and affordable. Making supersonic travel affordable.

Carrie
Supply chain company for perishable food and pharma products.

- Because cool chain is hard to maintain, 1/3 of food gets wasted. $1T worth, 1 in 9 people go to bed hungry.
- $35 billion lost for biopharma.

## Quotes😋

When all you have is a hammer, everything looks like a nail
