#!/bin/bash

echo "Enter the name of the branch you want to create (default is 'master'):"
read branch_name
branch_name=${branch_name:-master}

if [ -d ".git" ]; then
  echo "This directory is already a Git repository."
  exit 1
fi

git init

if [ $? -eq 0 ]; then
  echo "Git repository initialized successfully."
else
  echo "Failed to initialize Git repository."
  exit 1
fi

git checkout -b "$branch_name"

current_branch=$(git branch --show-current)
if [ "$current_branch" == "$branch_name" ]; then
  echo "Successfully switched to the '$branch_name' branch."
else
  echo "Failed to switch to the '$branch_name' branch."
  exit 1
fi

echo "# New Git Repository" > README.md
git add README.md
git commit -m "Initial commit with README"

echo "Git repository initialized with '$branch_name' branch and an initial commit."
