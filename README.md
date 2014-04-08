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

(If you have installed NodeJs by hand, remember to add the "bin" subdirectory to the PATH environment variable)

3) Download and install [Grunt] (http://gruntjs.com/), using next:

```
npm install -g grunt-cli
```

As this command tries to write in the NodeJs installation directory, if NodeJs was installed as a system package, then this step should be run with more privileges. Alternatively you can run

```
npm install grunt-cli
```

and add ${HOME}/node_modules/.bin to the PATH variable.

3) Download and install [Bower] (http://bower.io/), using next:

```
npm install -g bower
```

As this command tries to write in the NodeJs installation directory, if NodeJs was installed as a system package, then this step should be run with more privileges. Alternatively you can run

```
npm install bower
```

and add ${HOME}/node_modules/.bin to the PATH variable.

4) Clone this repository and execute the grunt command

```
git clone https://github.com/inab/dataportal.git
cd dataportal
npm install
bower update
grunt
```

The application will start on http://localhost:3000
