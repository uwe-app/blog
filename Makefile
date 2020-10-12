all: release

release:
	@ht --release

readme:
	@ht readme.toml --profile=readme

.PHONY: all release
