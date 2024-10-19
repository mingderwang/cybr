exports.Strawberry = class {
    constructor() {
    };
    color = '#ff0000';
    isTasty() {
      return true 
    };
}

exports.Banana = class {
    constructor() {
    };
    color = '#fff333';
    peelSync() { return new(exports.PeeledBanana) };
    peel(callback) {
        process.nextTick(function () {
            callback(null, new(exports.PeeledBanana));
        });
    };
}

exports.PeeledBanana = function () {};
