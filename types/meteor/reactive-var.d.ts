import ReactiveVar = _MeteorGlobals.ReactiveVar;
import ReactiveVarStatic = _MeteorGlobals.ReactiveVarStatic;

declare module "meteor/reactive-var" {
    import * as _MeteorReactiveVar from "meteor/reactive-var";
    global {
        namespace _MeteorGlobals {
            export import ReactiveVar = _MeteorReactiveVar.ReactiveVar;
            export import ReactiveVarStatic = _MeteorReactiveVar.ReactiveVarStatic;
        }
    }

    var ReactiveVar: ReactiveVarStatic;
    interface ReactiveVarStatic {
        new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
    }
    interface ReactiveVar<T> {
        get(): T;
        set(newValue: T): void;
    }
}
