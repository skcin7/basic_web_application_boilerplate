## Basic Web Application Boilerplate

A basic boilerplate for making a new bare bones web application.

## Features

* TypeScript for compiling JavaScript
* SASS for compiling CSS
* A basic HTML template that consists of a Header, Viewpane, and Footer
* Built with Node/NPM

## How To Use

1. In the project directory: `git clone git@github.com:skcin7/basic_web_application_boilerplate.git .`
2. `npm install`
3. Remove references to this boilerplate git repository: `rm -rf .git`
4. Initialize a new git repository for the new project: `git init .` (optional)
5. That's it!

## Directory Structure

* .editorconfig - This file contains basic configuration for the editor you are working in
* .gitignore - Excludes undesired typical problem files/directories from the git repository
* /node_modules - Directory after your `npm install` which is where the project's node dependencies go
* .package-lock.json - Locks the node configuration
* .package.json - Node package configuration file
* /public - The directory where all front-facing assets should go to be consumed by the public
* README.md - The git repository's readme
* /resources - Directory where the application's resources are stored
* /resources/sass - Directory that stores the applications SASS assets
* /resources/ts - Directory that stores the applications TypeScript assets
* tsconfig.json - Typescript configuration
* tsconfig.release.json - Typescript release behavior

## Available TypeScript Commands

* `npm run ts:build`
* `npm run ts:watch`

Compiled JavaScript assets are stored publicly in `./public/js/`.

## Available SASS Commands

* `npm run sass:compile`
* `npm run sass:minify`
* `npm run sass:watch`

Compiled CSS assets are stored publicly in `./public/css/`.

## Author

By Nick Morgan (nick@nicholas-morgan.com)
