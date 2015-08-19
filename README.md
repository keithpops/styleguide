# Namely Styleguide (a.k.a Namely-UI / Namely-Bootstrap)

This is the styleguide app to document all the components and patterns for Namely.

Getting Started
---------------

1. Clone the repo and ```cd``` into the directory
2. Install dependencies
```shell
$ npm install
$ bower install
$ gem install scss-lint
```
3. Serve app
```shell
$ npm start
```


Packaging Files for Production
------------------------------

To create the main js and css file that are to be used by Namely and other properties:
```shell
$ npm run compile
```

This runs every component found in ```src/js/components/``` through Babel and places it in the ```dist/``` directory, including any sub-directories. Then it grabs the base namely-ui module from ```lib/namely-ui.js``` to run that through Babel and place it in ```dist/``` as well. Finally, it grabs ```lib/namely-ui.scss```, compiles it to css, autoprefixes, and minifies it before placing it in ```dist/```. 


Namely-UI CLI
-------------

The CLI tools can be installed by running ```npm install -g``` which will allow you to use ```namely-ui [cmd]```.
