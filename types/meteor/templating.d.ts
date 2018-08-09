import Template = _MeteorGlobals.Template;
import TemplateStatic = _MeteorGlobals.TemplateStatic;

declare module "meteor/templating" {
    import * as _MeteorTemplating from "meteor/templating";
    global {
        namespace _MeteorGlobals {
            export import Template = _MeteorTemplating.Template;
            export import TemplateStatic = _MeteorTemplating.TemplateStatic;
        }
    }

    var Template: TemplateStatic;
    interface TemplateStatic extends Blaze.TemplateStatic {
        new (viewName?: string, renderFunction?: Function): Blaze.Template;
        body: Blaze.Template;
        [index: string]: any | Blaze.Template;
    }
}
