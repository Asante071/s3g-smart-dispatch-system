# CI/CD Workflow and Branch Protection Report

## Overview
This assignment implemented a CI/CD workflow using GitHub Actions for the S³G Smart Dispatch System project.

The workflow automatically:

- Installs project dependencies
- Executes automated tests using pytest
- Validates code before merging
- Creates build artifacts after successful execution

## GitHub Actions Workflow

Workflow file location:

.github/workflows/ci.yml

Pipeline stages:

1. Checkout repository
2. Configure Python environment
3. Install dependencies
4. Execute tests
5. Upload artifacts

## Branch Protection

Branch protection rules were configured on the main branch.

Rules enabled:

- Pull requests required before merge
- One approval required
- Status checks required before merge

## Pull Request Validation

A test branch was created:

test-pr

An intentional failing test was introduced.

The pull request triggered the GitHub Actions pipeline and failed successfully, demonstrating branch protection and CI validation.

## Evidence Collected

Screenshots:

- Successful workflow execution
- Artifact generation
- Branch protection configuration
- Pull request blocked by failed checks

## Conclusion

The CI/CD pipeline successfully automated testing and validation while branch protection prevented unsafe code from being merged into the main branch.