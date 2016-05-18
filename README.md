# Atom Utils
These are a bunch of commands to aid the development. The commands are written
in a mix of bash and nodejs scripts.

# Requirements

1. Bash (>4)
2. NodeJS (>4)
3. Npm (>3)

# Installation

Run following commands in `git bash` to install all the scripts.

```
git clone git@github.com:atomproject/utils
cd ./utils
source ./install
```
Now all the commands are available for you to use.

# Update
Just run `git pull` in the cloned repo.

# Uninstall
Just remove the cloned folder.

# Command documentation

## install
Since it is desirable that these commands be run from any directory, the scripts
need to be installed. The installtion procedure is straightforward and is mentioned above.

## observe
This command takes a list of directories and copies the changes made to files in those
directories to another location.

Only the files which are a result of `git ls-files` command will be observed since
files ignored by git are of no interest to us.

The command syntax can be known by running `observe`

####_Note_:
The `git checkout` doesn't trigger file system change event and because of that
the files won't be copied in case of `observe` command.


## scaffold
This command creates a new element in the directory in which it is run.
It takes a single parameter `name` which is the name of element to be created.
It then replaces the occurences of `%name%` in all files of directory `scaffold-element`.
The `%author%` field in `bower.json` file comes from global git config remember to set them
properly.

The command syntax can be known by running `scaffold`

## clone-org
Clones a organization, it takes the organization name as parameter and another optional
parameter to specify the output location of clone. The repos in the organization will
be cloned at the provided location or if the location is not provided then at current
location inside a directory with the name as _org name_.

The command syntax can be known by running `clone-org`

## for-each

This command will go into each component in the current directory and run the commands
provided to it. It is meant to be used alongside `clone-org`, the command which clones
all the repos in an organization.

The command syntax can be known by running `for-each`

## lock

This command locks the state of dependencies for an application and outputs
a file called `bower.lock.json`. You can use this file to install the dependencies
instead of `bower.json` file to replicate the state.

Run the command `lock` from the root any application which uses `bower`.
