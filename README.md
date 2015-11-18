# Atom Utils
These are a bunch of commands to aid the development. The commands are written
in a mix of bash and nodejs scripts.

# Installation
Run following commands in `git bash` to install all the scripts.

```
git clone git@github.com:atomproject/utils
cd ./utils
source ./install
```

Now all the commands are available for you to use.

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

# Notes
The `git checkout` doesn't trigger file system change event and because of that
the files won't be copied
