all: colcave.ps

%.ps: %.map
	cat admap.ps $^ > $@
