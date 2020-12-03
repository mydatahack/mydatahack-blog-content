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
I am missing a few services probably. But, these are the ones I managed to take notes
<ul>
 	<li><strong>AWS Lambda container image support</strong></li>
 	<li><strong>Amazon EKS distro</strong></li>
 	<li><strong>AWS Proton: manage and deploy container microservices</strong></li>
 	<li><strong>io2 Block express: the highest IOPS and throughput in the cloud</strong></li>
 	<li><strong>Babelfish</strong></li>
</ul>

Run SQL Server applications on Aurora PostgreSQL with little to no code change
New translation capability to easily run SQL server applications on Aurora PostgreSQL
Understand SQL server's proprietary dialect (T-SQL) and communications protocol (TDS)
Migrate the data with DMS, then update your application to point to Aurora instead of SQL server
Open source project (uses the apache 2.0 license)

<ul>
 	<li><strong>AWS Glue Elastic Views</strong></li>
</ul>


Easily build materialized views that automatically combine and replicate data across multiple data stores
Write a little bit of SQL, copy data from each source data, store to a target data store, then create a materialised view
It will automatically update the data in the view
Target store is Redshift, Elasticsearch, S3, DynamoDB, Aurora, RDS

<ul>
 	<li><strong>Amazon SageMaker Data Wrangler</strong></li>
</ul>


Fastest way to prepare data for ML
Aggregate and prepare ML features - easy feature engineering
Imports and inspects data to identify the data types
Recommends transformations based on the data in the dataset
Applies transformations for features - can see a preview in real time
Make available for inference in real time
Need to ensure consistency of data for both training and inference

<ul>
 	<li><strong>Amazon SageMake Feature Store</strong></li>
</ul>


A new repository that makes it easy to store, update and share ML features
Purpose-build and accessible from SageMaker Studio
Easily name, organise, find and share features
Access features in batches or subsets
Low latency for inference

<ul>
 	<li><strong>Amazon SageMaker Pipelines</strong></li>
</ul>

The first purpose-build, easy-to-use CI/CD services for ML.

<ul>
 	<li><strong>Amazon Connect Wisdom</strong></li>
</ul>

A new capability that uses ML to deliver agents the product and service info they need to solve issues in real time.

<ul>
 	<li><strong>Amazon Monitron</strong></li>
</ul>

End to end equipment monitoring system to enable predictive maintenance.
Amazon Lookout for Equipment.
Predictive maintenance with Amazon lookout for equipment.

<ul>
 	<li><strong>AWS Panorama appliance</strong></li>
</ul>

New hardware appliance - use existing onsite camera to add computer vision.


<strong>Business guests</strong>

Some of the guests appeared in the keynote speech

<ul>
 	<li><strong>Boom</strong> - high performance aircraft</li>
</ul>

Established by Blake Scholl who was an engineer with amazon. As he started working at amazon after graduating uni, he started flight lessons. At the time, Amazon was building AWS
Supersonic airliner, twice as fast. Tokyo to Seattle 4:30h, New York to London 3:30h
Partner with Japan Airline Rolls Royce, US defence force
All-in with AWS
Design and test plane on cloud - used AWS services to simulate flight patterns. AWS enables smaller companies to design planes better. Using AI/ML to improve simulations. Can run simulation in parallel
100% carbon neutral
Fastest and affordable. Making supersonic travel affordable

<ul>
 	<li><strong>Carrie</strong></li>
</ul>

Supply chain company for perishable food and pharma products
Because a cool chain is hard to maintain, 1/3 of food gets wasted. $1T worth, 1 in 9 people go to bed hungry
$35 billion lost for biopharma.
