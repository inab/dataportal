About
-----

The main goal of this project is to create a system able to provide answers to specific biological research questions around the data acumulated from different experiments and annotations. 

The questions or use cases will be defined previous to the development, in this way we garantee that the platform, once completely developed is able to satisfy real needs of the community.

How to contribute
-----------------

The master branch will contain horizontal functionalities that are common to all the use cases. Please create a new brach for each new use case you pretend to solve within the system. As an example the branch "Variant annotations" will hold the developments around the genomic variant annotation functionality.

Wiki
----

Please use the wiki pages to add new use cases, one per page. Please document the use case as much as possible before to start asking for pull requests.

Installation
------------

1) Download [Elasticsearch] (http://www.elasticsearch.org/overview/elkdownloads/) and extract the content in a folder

Then run

```
./bin/elasticsearch
```

2) Download and install [NodeJs] (http://nodejs.org/)

3) Download and install [Grunt] (http://gruntjs.com/)

4) Clone this repository and execute the grunt command

```
git clone https://github.com/inab/dataportal.git
cd dataportal
grunt
```

The application will start on http://localhost:3000
