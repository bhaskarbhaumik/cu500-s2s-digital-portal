# Digital Portal - Makefile
# Convenient shortcuts for Node.js and Git/GitHub commands

.PHONY: help
.DEFAULT_GOAL := help

# Colors for output
CYAN := \033[36m
RESET := \033[0m

##@ Help

help: ## Display this help message
	@echo "$(CYAN)Digital Portal - Available Commands$(RESET)"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf ""} /^[a-zA-Z_-]+:.*?##/ { printf "  $(CYAN)%-20s$(RESET) %s\n", $$1, $$2 } /^##@/ { printf "\n%s\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Node/NPM Commands

install: ## Install all dependencies (npm install)
	npm install

dev: ## Start development server (npm run dev)
	npm run dev

build: ## Build for production (npm run build)
	npm run build

preview: ## Preview production build (npm run preview)
	npm run preview

clean: ## Remove node_modules and build artifacts
	rm -rf node_modules dist .vite

reinstall: clean install ## Clean and reinstall dependencies

update: ## Update dependencies to latest versions
	npm update

audit: ## Run security audit
	npm audit

audit-fix: ## Fix security vulnerabilities
	npm audit fix

##@ Git Commands

status: ## Show git status
	git status

st: status ## Alias for status

add: ## Stage all changes (git add .)
	git add .

add-file: ## Stage specific file (usage: make add-file FILE=path/to/file)
	@if [ -z "$(FILE)" ]; then echo "Usage: make add-file FILE=path/to/file"; exit 1; fi
	git add $(FILE)

commit: ## Commit staged changes (usage: make commit MSG="message")
	@if [ -z "$(MSG)" ]; then echo "Usage: make commit MSG=\"your message\""; exit 1; fi
	git commit -m "$(MSG)"

commit-all: ## Stage and commit all changes (usage: make commit-all MSG="message")
	@if [ -z "$(MSG)" ]; then echo "Usage: make commit-all MSG=\"your message\""; exit 1; fi
	git add .
	git commit -m "$(MSG)"

push: ## Push to remote repository
	git push

pull: ## Pull from remote repository
	git pull

fetch: ## Fetch from remote repository
	git fetch

log: ## Show git log
	git log --oneline --graph --decorate --all -20

log-full: ## Show detailed git log
	git log --graph --decorate --all

diff: ## Show uncommitted changes
	git diff

diff-staged: ## Show staged changes
	git diff --cached

branch: ## List all branches
	git branch -a

branch-new: ## Create new branch (usage: make branch-new NAME=branch-name)
	@if [ -z "$(NAME)" ]; then echo "Usage: make branch-new NAME=branch-name"; exit 1; fi
	git checkout -b $(NAME)

checkout: ## Checkout branch (usage: make checkout BRANCH=branch-name)
	@if [ -z "$(BRANCH)" ]; then echo "Usage: make checkout BRANCH=branch-name"; exit 1; fi
	git checkout $(BRANCH)

merge: ## Merge branch (usage: make merge BRANCH=branch-name)
	@if [ -z "$(BRANCH)" ]; then echo "Usage: make merge BRANCH=branch-name"; exit 1; fi
	git merge $(BRANCH)

stash: ## Stash uncommitted changes
	git stash

stash-pop: ## Apply most recent stash
	git stash pop

stash-list: ## List all stashes
	git stash list

reset-soft: ## Soft reset to previous commit
	git reset --soft HEAD~1

reset-hard: ## Hard reset to previous commit (DANGEROUS!)
	git reset --hard HEAD~1

tag: ## Create tag (usage: make tag NAME=v1.0.0 MSG="Release message")
	@if [ -z "$(NAME)" ]; then echo "Usage: make tag NAME=v1.0.0 MSG=\"Release message\""; exit 1; fi
	@if [ -z "$(MSG)" ]; then \
		git tag $(NAME); \
	else \
		git tag -a $(NAME) -m "$(MSG)"; \
	fi

tag-push: ## Push tags to remote
	git push --tags

##@ GitHub Commands (requires gh CLI)

gh-status: ## Show GitHub CLI status
	gh status

pr-create: ## Create pull request (usage: make pr-create TITLE="title" BODY="body")
	@if [ -z "$(TITLE)" ]; then echo "Usage: make pr-create TITLE=\"title\" BODY=\"body\""; exit 1; fi
	@if [ -z "$(BODY)" ]; then \
		gh pr create --title "$(TITLE)"; \
	else \
		gh pr create --title "$(TITLE)" --body "$(BODY)"; \
	fi

pr-create-draft: ## Create draft pull request
	@if [ -z "$(TITLE)" ]; then echo "Usage: make pr-create-draft TITLE=\"title\""; exit 1; fi
	gh pr create --title "$(TITLE)" --draft

pr-list: ## List pull requests
	gh pr list

pr-view: ## View pull request (usage: make pr-view PR=123)
	@if [ -z "$(PR)" ]; then \
		gh pr view; \
	else \
		gh pr view $(PR); \
	fi

pr-checkout: ## Checkout pull request (usage: make pr-checkout PR=123)
	@if [ -z "$(PR)" ]; then echo "Usage: make pr-checkout PR=123"; exit 1; fi
	gh pr checkout $(PR)

pr-merge: ## Merge pull request (usage: make pr-merge PR=123)
	@if [ -z "$(PR)" ]; then \
		gh pr merge; \
	else \
		gh pr merge $(PR); \
	fi

pr-close: ## Close pull request (usage: make pr-close PR=123)
	@if [ -z "$(PR)" ]; then echo "Usage: make pr-close PR=123"; exit 1; fi
	gh pr close $(PR)

issue-create: ## Create issue (usage: make issue-create TITLE="title")
	@if [ -z "$(TITLE)" ]; then echo "Usage: make issue-create TITLE=\"title\""; exit 1; fi
	gh issue create --title "$(TITLE)"

issue-list: ## List issues
	gh issue list

issue-view: ## View issue (usage: make issue-view ISSUE=123)
	@if [ -z "$(ISSUE)" ]; then echo "Usage: make issue-view ISSUE=123"; exit 1; fi
	gh issue view $(ISSUE)

repo-view: ## View repository in browser
	gh repo view --web

##@ Common Workflows

setup: install ## Initial setup - install dependencies
	@echo "$(CYAN)Setup complete! Run 'make dev' to start development server$(RESET)"

start: dev ## Alias for dev

deploy-prep: clean install build ## Prepare for deployment (clean, install, build)
	@echo "$(CYAN)Build complete! Files ready in dist/ directory$(RESET)"

save: ## Quick save: stage all, commit, and push (usage: make save MSG="message")
	@if [ -z "$(MSG)" ]; then echo "Usage: make save MSG=\"your message\""; exit 1; fi
	git add .
	git commit -m "$(MSG)"
	git push

sync: pull push ## Sync with remote (pull then push)

quick-pr: ## Create PR from current branch (usage: make quick-pr TITLE="title")
	@if [ -z "$(TITLE)" ]; then echo "Usage: make quick-pr TITLE=\"title\""; exit 1; fi
	git push -u origin $$(git branch --show-current)
	gh pr create --title "$(TITLE)" --body "🤖 Generated with [Claude Code](https://claude.com/claude-code)"

##@ Info

info: ## Show project information
	@echo "$(CYAN)Project Information$(RESET)"
	@echo "Node version:    $$(node --version 2>/dev/null || echo 'not installed')"
	@echo "NPM version:     $$(npm --version 2>/dev/null || echo 'not installed')"
	@echo "Git version:     $$(git --version 2>/dev/null || echo 'not installed')"
	@echo "GitHub CLI:      $$(gh --version 2>/dev/null | head -n1 || echo 'not installed')"
	@echo "Current branch:  $$(git branch --show-current 2>/dev/null || echo 'not in git repo')"
	@echo "Remote URL:      $$(git remote get-url origin 2>/dev/null || echo 'no remote')"
