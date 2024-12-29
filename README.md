# experiments--python-deno--code-exporer--jupyter-notebooks

## Local setup

### Requirements

- Python
  - See `pyproject.toml` and `.tool-versions` for suitable version
- Poetry
  - See `poetry.lock` for the suitable version
- Deno
  - See `deno.json` for the suitable version

### Poetry

```bash
poetry --version

# Add new dependnecies
poetry add requests
poetry add --group=dev pytest
poetry run pip list

# Install all dependencies without installing project itself as an editable package
poetry install --no-root
poetry run python main.py

# Run shell with activated virtual environment (no need for the `poetry` command prefix)
poetry shell

# Find out where virtual environment is located
poetry env info
poetry env info --path
```

## Jupyter

```bash
# Show versions
poetry run jupyter --version
poetry run jupyter notebook --version
poetry run jupyter lab --version

# Run
poetry run jupyter notebook
poetry run jupyter lab
```

Use Poetry virtual environment as kernel:

- https://medium.com/@chhaybunsy/how-i-use-poetry-with-jupyter-notebook-in-vscode-b61857b219e6
- https://gist.github.com/bunsyy/62aaf946b970b362ad6ed68b2bf0baf9#file-readme-how-i-use-poetry-with-jupyter-notebook-in-vscode-md

## Deno

### Kernel

```bash
# Run and follow instructions
deno jupyter
```

### Execution

```bash
# See deno.jsonc
deno task dev
deno run dev
```

### Package management

- https://docs.deno.com/runtime/reference/cli/install/
- https://docs.deno.com/runtime/fundamentals/node/#node_modules

```bash
# Add dependencies to "imports" property in deno.jsonc
deno add jsr:@luca/cases@1.0.0

# Remove dependencies from "imports" property in deno.jsonc
deno remove jsr:@luca/cases

# Install dependencies from deno.jsonc and package.json locally (optional)
deno install

# Install packages
deno install jsr:@std/assert
deno install npm:node-emoji
deno install --entrypoint src/main.ts src/main_test.ts

# Uninstall packages
deno uninstall jsr:@std/assert
deno uninstall npm:node-emoji
```
