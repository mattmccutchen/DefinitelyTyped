import Match = _MeteorGlobals.Match;
import check = _MeteorGlobals.check;

declare module "meteor/check" {
    import * as _MeteorCheck from "meteor/check";
    global {
        namespace _MeteorGlobals {
            export import Match = _MeteorCheck.Match;
            export import check = _MeteorCheck.check;
        }
    }

    module Match {
        var Any: any;
        var String: any;
        var Integer: any;
        var Boolean: any;
        var undefined: any;
        var Object: any;

        function Maybe(pattern: any): boolean;

        function Optional(pattern: any): boolean;

        function ObjectIncluding(dico: any): boolean;

        function OneOf(...patterns: any[]): any;

        function Where(condition: any): any;

        function test(value: any, pattern: any): boolean;
    }

    function check(value: any, pattern: any): void;
}
