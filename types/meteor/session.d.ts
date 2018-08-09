import Session = _MeteorGlobals.Session;

declare module "meteor/session" {
    import * as _MeteorSession from "meteor/session";
    global {
        namespace _MeteorGlobals {
            export import Session = _MeteorSession.Session;
        }
    }

    module Session {
        function equals(key: string, value: string | number | boolean | any): boolean;

        function get(key: string): any;

        function set(key: string, value: EJSONable | any): void;

        function setDefault(key: string, value: EJSONable | any): void;
    }
}
