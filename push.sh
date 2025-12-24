#!/bin/bash
echo "Enter commit message"
read cm
git add .
git commit -m "${cm}"
git push origin main
