# four-sides-1px-9patcher
This is a node module that do 9-patch image automatically like this.

![FourSide1px9patch.png](img/FourSide1px9patch.png "FourSide1px9patch.png")


## Dependencies

Automattic/node-canvas - https://github.com/Automattic/node-canvas

Installing node-canvas is bit difficult. Here is how to on mac.

```bash
$ brew install pkg-config
$ brew install pixman
$ brew install cairo
$ export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
```

## Installation
```bash
$ npm install four-sides-1px-9patcher
```

## Usage
```javascript
var fourSides1px9patcher = require('four-sides-1px-9patcher');
fourSides1px9patcher('src.png', 'dst.9.png');
```

## License

WTFPL - http://www.wtfpl.net/