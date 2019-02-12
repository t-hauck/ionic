"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OlaMundo = /** @class */ (function () {
    function OlaMundo() {
    }
    OlaMundo.prototype.run = function () {
        console.log('Olá mundo');
    };
    return OlaMundo;
}());
exports.OlaMundo = OlaMundo;
new OlaMundo().run();
