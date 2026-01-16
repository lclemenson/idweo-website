#!/bin/bash

# Script to push idweo website to GitHub
# Usage: ./push-to-github.sh <your-github-username> <repo-name>

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: ./push-to-github.sh <your-github-username> <repo-name>"
    echo "Example: ./push-to-github.sh myusername idweo-site"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME=$2
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "🚀 Setting up GitHub remote and pushing code..."
echo "Repository URL: ${REPO_URL}"
echo ""

# Add remote
echo "📡 Adding remote origin..."
git remote add origin ${REPO_URL} 2>/dev/null || git remote set-url origin ${REPO_URL}

# Verify remote
echo "✅ Remote configured:"
git remote -v
echo ""

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your code has been pushed to GitHub."
    echo "🌐 View your repository at: https://github.com/${GITHUB_USER}/${REPO_NAME}"
else
    echo ""
    echo "❌ Error pushing to GitHub. Please check:"
    echo "   1. The repository exists on GitHub"
    echo "   2. You have the correct permissions"
    echo "   3. Your GitHub credentials are configured"
fi
